import type { Metadata } from 'next'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { videos, categories } from '@/lib/data/videos'

export const metadata: Metadata = {
  title: 'Insights | 30 Degrees East',
  description: 'Video insights on teaching, systems, leverage, and building sustainable online work.',
}

export default function Insights() {
  // Group videos by category
  const videosByCategory = Object.keys(categories).reduce((acc, categoryId) => {
    acc[categoryId] = videos.filter((video) => video.category === categoryId)
    return acc
  }, {} as Record<string, typeof videos>)

  return (
    <>
      <section className="section-padding bg-raisin text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Library</p>
            <h1 className="mt-6 text-white">
              Watch the thinking. <span className="text-accent-300">Skip the noise.</span>
            </h1>
            <p className="mt-6 text-xl text-white/80">
              Video insights on teaching, learning, systems, and building sustainable
              online work. No blog posts, no feeds—just focused thinking.
            </p>
          </div>
        </div>
      </section>

      {Object.entries(categories).map(([categoryId, categoryName], index) => {
        const categoryVideos = videosByCategory[categoryId]

        if (!categoryVideos || categoryVideos.length === 0) return null

        return (
          <section
            key={categoryId}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'section-gradient-muted'}`}
          >
            <div className="container-custom">
              <h2 className="section-heading text-center">{categoryName}</h2>

              <div className="mt-12 grid gap-12 md:grid-cols-2">
                {categoryVideos.map((video) => (
                  <div key={video.id} className="space-y-4 rounded-[28px] border border-neutral-100 bg-neutral-50/70 p-8 shadow-soft-card">
                    <VideoEmbed src={video.videoUrl} title={video.title} />
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {video.title}
                      </h3>
                      <p className="mt-2 text-neutral-600">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {videos.length === 0 && (
        <section className="section-padding section-gradient-muted">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl rounded-[32px] border border-white/70 bg-white/85 p-10 text-center shadow-soft-card">
              <p className="text-lg text-neutral-600">
                New videos coming soon. Check back later.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
