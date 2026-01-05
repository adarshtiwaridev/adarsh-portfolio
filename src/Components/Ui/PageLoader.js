export default function RingWaveLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center  bg-black">
   <h1
  className="
    absolute top-50
    text-4xl md:text-5xl
    font-extrabold tracking-wide
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    bg-clip-text text-transparent
    animate-loading-shake
  "
>
  Loading Experience
</h1>

      <div className="container">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className="item"
            style={{ "--i": i }}
          />
        ))}
      </div>
    </div>
  );
}
