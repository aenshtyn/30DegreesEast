import CTAButton from '@/components/ui/CTAButton'

const freebies = [
  {
    title: 'Teach English Online Roadmap (PDF)',
    description: 'A one-page overview of the path from classroom to online income.',
  },
  {
    title: 'Lesson Framework Template',
    description: 'A reusable template for structuring online English lessons.',
  },
  {
    title: 'Mini-training: From Live Lesson to Pre-Recorded Course',
    description: 'A short video that shows how to convert one lesson into a course.',
  },
]

export default function FreebiesPage() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-neutral-900">
            Start with free resources. <span className="text-accent-600">Build momentum first.</span>
          </h1>
          <p className="mt-4 text-neutral-700">
            Download the same free resources referenced on the homepage to start mapping your online teaching systems.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {freebies.map((freebie) => (
            <article key={freebie.title} className="rounded-[28px] border border-white/60 bg-white p-6 shadow-soft-card">
              <h2 className="text-xl text-neutral-900">{freebie.title}</h2>
              <p className="mt-2 text-neutral-700">{freebie.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/#waitlist">Join the Waiting List</CTAButton>
        </div>
      </div>
    </section>
  )
}
