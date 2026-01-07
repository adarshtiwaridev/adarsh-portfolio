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
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const images = [
    "/image/logo/profile.jpg",
    "/image/logo/profile.jpg",
    "/image/logo/profile.jpg",
    "/image/logo/profile.jpg",
    "/image/logo/profile.jpg",
  ]

  const [active, setActive] = React.useState(0)
  const total = images.length

  // normalize offset for looping
  const getOffset = (index ,number) => {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div className="relative h-[420px] w-full flex items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true, align: "center" }}
        className="w-full"
        setApi={(api) => {
          if (!api) return
          setActive(api.selectedScrollSnap())
          api.on("select", () => {
            setActive(api.selectedScrollSnap())
          })
        }}
      >
        <CarouselContent className="relative h-full flex items-center justify-center">
          {images.map((src, index) => {
            const offset = getOffset(index)

            let style =
              "scale-[0.7] blur-[5px] opacity-30 z-10 translate-x-[160px]"

            if (offset === 0) {
              style = "scale-100 blur-0 opacity-100 z-30 translate-x-0"
            } else if (offset === -1) {
              style =
                "scale-[0.85] blur-[2px] opacity-70 z-20 -translate-x-[100px]"
            } else if (offset === 1) {
              style =
                "scale-[0.85] blur-[2px] opacity-70 z-20 translate-x-[100px]"
            }

            return (
              <CarouselItem
                key={index}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className={`
                    transition-all duration-700 ease-out
                    ${style}
                  `}
                >
                  <div
                    className="
                      w-[280px] h-[380px]
                      rounded-3xl overflow-hidden
                      bg-white dark:bg-zinc-900
                      border border-zinc-200/50 dark:border-zinc-800/50
                      shadow-2xl
                    "
                  >
                    <img
                      src={src}
                      alt="Profile"
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
