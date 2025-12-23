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

  return (
    <div className={`w-full overflow-hidden rounded-lg bg-neutral-100 ${aspectRatioClass}`}>
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
