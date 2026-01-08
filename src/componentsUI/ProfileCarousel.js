"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel"

export function ProfileCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false })
  )

  const images = [
    "/image/logo/profile.jpg",
    "/image/logo/nextjs.webp",
    "/image/logo/reek.jpg",
    "/image/logo/profile.jpg",
  ]

  const [active, setActive] = React.useState(0)
  const total = images.length

  const getDistance = (index) => {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff)
  }

  return (
    <div className="relative h-105 w-full flex items-center justify-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true, align: "center" }}
        className="w-full max-w-2xl"
        setApi={(api) => {
          if (!api) return
          setActive(api.selectedScrollSnap())
          api.on("select", () => {
            setActive(api.selectedScrollSnap())
          })
        }}
      >
        {/* 👇 GAP creates real spacing */}
        <CarouselContent className="flex items-center gap-10">
          {images.map((src, index) => {
            const distance = getDistance(index)

            const scale =
              distance === 0 ? 1 :
              distance === 1 ? 0.82 :
              distance === 2 ? 0.65 : 0.55

            const opacity =
              distance === 0 ? "opacity-100" :
              distance === 1 ? "opacity-60" :
              "opacity-30"

            const blur =
              distance === 0 ? "blur-0" :
              distance === 1 ? "blur-[1.5px]" :
              "blur-[3px]"

            return (
              <CarouselItem
                key={index}
                className="basis-70 shrink-0 flex justify-center"
              >
                <div
                  className={`transition-all duration-700 ease-out ${opacity} ${blur}`}
                  style={{ transform: `scale(${scale})` }}
                >
                  <div
                    className="
                      w-55 h-80
                      rounded-2xl overflow-hidden
                      bg-white dark:bg-zinc-900
                      border border-zinc-200/50 dark:border-zinc-800/50
                      shadow-xl
                    "
                  >
                    <img
                      src={src}
                      alt="Adarsh Tiwari – Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
