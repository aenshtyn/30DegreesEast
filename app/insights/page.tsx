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
      {/* Header */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl text-center">
            <h1 className="text-neutral-900">Insights</h1>
            <p className="mt-6 text-xl text-neutral-600">
              Video insights on teaching, learning, systems, and building sustainable
              online work. No blog posts, no feeds—just focused thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Videos by Category */}
      {Object.entries(categories).map(([categoryId, categoryName], index) => {
        const categoryVideos = videosByCategory[categoryId]

        if (!categoryVideos || categoryVideos.length === 0) return null

        return (
          <section
            key={categoryId}
            className={`section-padding ${index % 2 === 0 ? 'section-gradient' : 'section-gradient-muted'}`}
          >
            <div className="container-custom">
              <h2 className="text-neutral-900">{categoryName}</h2>

              <div className="mt-12 grid gap-12 md:grid-cols-2">
                {categoryVideos.map((video) => (
                  <div key={video.id} className="glass-panel-muted space-y-4">
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

      {/* Empty State (if no videos) */}
      {videos.length === 0 && (
        <section className="section-padding section-gradient-muted">
          <div className="container-custom">
            <div className="glass-panel mx-auto max-w-2xl text-center">
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
