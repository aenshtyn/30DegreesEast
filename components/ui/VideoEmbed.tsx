interface VideoEmbedProps {
  src: string
  title?: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
}

export default function VideoEmbed({
  src,
  title = 'Video',
  aspectRatio = '16/9'
}: VideoEmbedProps) {
  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  }[aspectRatio]

  const isPlaceholder = /YOUR_/i.test(src)

  if (isPlaceholder) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-400 text-white shadow-glow ${aspectRatioClass}`}
      >
        <div className="text-center text-white">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              className="h-7 w-7 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/80">Video preview</p>
          <p className="mt-2 text-xl font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm text-white/70">Upload your final embed to replace this preview.</p>
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent 35%)',
          }}
        />
      </div>
    )
  }

  return (
    <div className={`w-full overflow-hidden rounded-3xl border border-white/70 bg-neutral-100 ${aspectRatioClass} shadow-soft-card`}>
      <iframe
        src={src}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
