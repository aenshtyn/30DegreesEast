import Image from 'next/image'
import type { Metadata } from 'next'

import CTAButton from '@/components/ui/CTAButton'
import swalehPortrait from '@/outside builds/Kimani.jpg'

const credibilityStats = [
  { value: '15', label: 'Years abroad' },
  { value: '2016', label: 'Started teaching' },
  { value: '100+', label: 'Educators supported' },
  { value: '2024', label: 'Built Engoverse' },
]

const builtItems = [
  {
    title: 'Professional English Coaching',
    description:
      'One-to-one and group coaching for working professionals who need to communicate with precision and confidence in English. Lessons are built around their industry, vocabulary, and actual challenges.',
  },
  {
    title: 'Teach English Online: The Complete Roadmap',
    description:
      'My flagship course for teachers who want to move online, covering identity, platform choice, lesson design, student acquisition, and pricing. Built from real experience, not theory.',
  },
  {
    title: 'KnowledgeOS',
    description:
      'An AI-powered education ecosystem for tutors, coaches, and anyone with knowledge to package. It is designed to help people turn expertise into courses, a clear professional identity, and a digital business.',
  },
  {
    title: '30 Degrees East Marketplace',
    description:
      'A knowledge platform for Kenyan entrepreneurs and educators so practical, hard-won knowledge reaches the people who need it most.',
  },
]

const beliefs = [
  {
    number: '01',
    title: 'Language learning should open doors',
    description:
      'Not just pass exams. The real measure of a language lesson is whether it helps someone get a better job, work internationally, or express themselves with confidence.',
  },
  {
    number: '02',
    title: 'Context is everything',
    description:
      'Generic lessons do not work for professionals with specific needs. An engineer and an accountant need vocabulary, discussions, and thinking patterns that fit their world.',
  },
  {
    number: '03',
    title: 'Real knowledge deserves a real platform',
    description:
      'Some of the most valuable expertise in Kenya is locked inside the heads of people who have built things with their hands. That knowledge should be accessible.',
  },
  {
    number: '04',
    title: 'Systems beat effort every time',
    description:
      'A lesson you teach once is time spent. A course you build once is an asset. The goal is to turn knowledge into something that works even when you are not in the room.',
  },
]

export const metadata: Metadata = {
  title: 'About Swaleh | 30 Degrees East',
  description:
    'Learn Swaleh Kimani’s story, what he is building, and the convictions shaping 30 Degrees East.',
}

function BuiltIcon({ index }: { index: number }) {
  const className = 'h-5 w-5'

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 6h16v9H4z" />
          <path d="M8 19h8" />
          <path d="M12 15v4" />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M7 4h9l3 3v13H7z" />
          <path d="M16 4v4h4" />
          <path d="M10 12h6M10 16h4" />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
          <path d="m9.5 12 1.8 1.8L15 10.2" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 12c2.5-4 5-6 8-6s5.5 2 8 6c-2.5 4-5 6-8 6s-5.5-2-8-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
  }
}

export default function About() {
  return (
    <>
      <section className="bg-raisin text-white">
        <div className="container-custom grid gap-10 py-20 lg:grid-cols-[1fr_440px] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-accent-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              About Swaleh Kimani
            </span>
            <h1 className="mt-8 max-w-3xl text-white">
              I built the freedom to come home.{' '}
              <span className="text-accent-300">Now the work is here.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-white/75">
              Kenyan. Trained as an engineer in Turkey. Spent 15 years building a life abroad, then
              used what I&apos;d built online to choose, freely, to come back.
            </p>
            <p className="mt-4 max-w-3xl text-white/75">
              That choice is the whole point of what I do. What I&apos;m building now is the
              infrastructure that makes it possible for more people, especially on this continent,
              to make choices like that.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[360px] rounded-[28px] border border-accent-500/20 bg-white/5 p-4 shadow-soft-card lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-accent-500/20 bg-raisin/60">
              <Image
                src={swalehPortrait}
                alt="Swaleh Kimani"
                fill
                priority
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 78vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-accent-500/10">
          <div className="container-custom grid gap-8 py-10 text-center sm:grid-cols-2 xl:grid-cols-4">
            {credibilityStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl text-accent-500">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">The Story</p>
            <h2 className="section-heading">From engineer to educator. From employee to builder.</h2>
            <div className="mt-8 space-y-6 text-neutral-700">
              <p>
                I grew up in Kenya and left for Turkey at 15 for my education. Building a life in
                another country from that age, in a different language, culture, and economy,
                taught me that language is infrastructure. It determines what rooms you can enter,
                what opportunities you can access, and how far your ideas can travel.
              </p>
              <p>
                I started teaching English in 2016 while I was still a university student, not as
                a grand plan, just as something I could do. When I graduated as a civil engineer, I
                worked in the field for one year. Almost immediately, I knew it was not for me. So
                I made a decision that felt uncomfortable at the time: I walked away from the degree
                I had spent years earning and went back to teaching.
              </p>
              <p>
                I spent the next years in real classrooms with loud, energetic kids who tested
                every ounce of patience I had. I learned more about communication in those rooms
                than I ever did in a lecture hall. In 2020, together with partners, I opened a
                language school in Turkey. We had plans. We had students. We had momentum. Then the
                pandemic hit and everything closed.
              </p>
              <div className="rounded-r-xl border-l-4 border-accent-500 bg-accent-500/5 px-6 py-5">
                <p className="font-serif text-xl italic text-raisin">
                  “I wasn&apos;t just teaching English. I was watching people use language to step
                  into bigger versions of their professional lives. That was the thing worth
                  building a system around.”
                </p>
              </div>
              <p>
                What looked like the end of something turned out to be the beginning of something
                else. I stopped teaching general English to anyone who would sign up and started
                building something more specific: lessons designed around the real professional
                lives of my students. Engineers, architects, accountants, data scientists, bank
                employees, procurement officers, school principals, and university lecturers.
              </p>
              <p>
                By 2024 I had built Engoverse, my own brand focused on professionals and IELTS
                learners. Through all of it, I was also building something with a quiet side effect:
                an online income that worked regardless of where I was sitting. After 15 years in
                Turkey, I chose to come home to Kenya. Not because I had to. Because I wanted to.
              </p>
              <p>
                Coming home made the bigger problem impossible to ignore. Africa is full of people
                who have built real things, solved hard problems, and accumulated knowledge that the
                rest of the world needs. But that knowledge rarely gets packaged. That is what I
                came back to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="accent-label">What I&apos;m Building</p>
            <h2 className="section-heading">Not theory. Things that exist.</h2>
            <p className="mt-4 max-w-3xl text-neutral-700">
              My work sits at the intersection of language, professional growth, and opportunity.
              Here&apos;s what that looks like in practice.
            </p>

            <div className="mt-10 space-y-4">
              {builtItems.map((item, index) => (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-[24px] border border-white/70 bg-white/85 p-6 shadow-soft-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <BuiltIcon index={index} />
                  </div>
                  <div>
                    <h3 className="text-xl text-raisin">{item.title}</h3>
                    <p className="mt-2 text-neutral-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="accent-label">What I Believe</p>
            <h2 className="section-heading">The convictions that shape how I teach and build.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {beliefs.map((belief) => (
                <article
                  key={belief.number}
                  className="rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-6 shadow-soft-card"
                >
                  <p className="font-display text-5xl text-accent-500/35">{belief.number}</p>
                  <h3 className="mt-4 text-xl text-raisin">{belief.title}</h3>
                  <p className="mt-3 text-neutral-700">{belief.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="accent-label">From Someone Who&apos;s Been Through It</p>
            <h2 className="section-heading">Real results from real educators.</h2>
            <div className="mt-10 rounded-[28px] bg-raisin p-8 text-white shadow-soft-card md:p-10">
              <p className="font-serif text-xl italic leading-relaxed text-white/90">
                “I had been teaching for 6 years and had no idea my lessons could become a product.
                Swaleh&apos;s program gave me a system, not just advice. I launched my first online
                English course and signed my first 5 students within a month. I finally feel like I
                have a real business.”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
                Sarah L. · Online English Instructor
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-neutral-100 bg-neutral-50/70 p-10 shadow-soft-card">
            <p className="accent-label">Work With Me</p>
            <h2 className="section-heading">Two ways to get started.</h2>
            <p className="mt-4 text-neutral-700">
              If you&apos;re an educator ready to take your teaching online, the Teach English Online
              program is the place to start. If you want to work more directly, the contact page is
              the best next step for now.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/teach-english-online" className="w-full sm:w-auto">
                See the English Course
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" className="w-full sm:w-auto">
                Contact Swaleh
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
