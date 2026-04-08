import Image from 'next/image'
import Link from 'next/link'

import FreebiesWithWaitlist, { type Freebie } from '@/components/home/FreebiesWithWaitlist'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import CTAButton from '@/components/ui/CTAButton'
import WaitlistForm from '@/components/ui/WaitlistForm'

const painPoints = [
  'I have years of knowledge and experience, but I have no idea how to turn it into something people will actually pay for.',
  'I have tried putting content online, but I am not getting students. I do not know if it is my pricing, my marketing, or the course itself.',
  'I want to grow my income, but I refuse to become someone posting ten times a day just to be seen.',
  'I started a course but never finished it because I got stuck and did not know what the next step was.',
  'I am already teaching online, but my income is unpredictable. I want something more stable and scalable.',
  'I know I can make a bigger impact. I just need someone who has actually done it to show me the path.',
]

const pathSteps = [
  {
    number: '01',
    title: 'Clarify your niche and offer',
    description:
      'We identify the knowledge you already have that people are searching for, then package it into an offer with a clear promise.',
  },
  {
    number: '02',
    title: 'Build your first teaching system',
    description:
      'Turn lessons into a repeatable framework with strong outcomes, simple delivery, and structure that fits your life.',
  },
  {
    number: '03',
    title: 'Launch with simple marketing',
    description:
      'Use a clear message, a practical funnel, and sustainable habits that bring in students without an influencer-style content grind.',
  },
  {
    number: '04',
    title: 'Add recurring revenue streams',
    description:
      'Once the first offer works, layer in digital products, memberships, and co-created programs that compound over time.',
  },
]

const courses = [
  {
    tag: 'Flagship Programme',
    title: 'Teach English Online: The Complete Roadmap',
    description:
      'The step-by-step system to go from classroom teacher to confident online English instructor, with income that fits your schedule.',
    features: [
      'Build a complete teaching system with clear modules, outcomes, and delivery assets',
      'Position your teaching identity so the right students understand the value quickly',
      'Choose the right model for your time, skills, and goals: live, pre-recorded, or hybrid',
      'Get your first students with a clear message, simple funnel, and repeatable conversion process',
    ],
    ctaLabel: 'See Programme Details',
    ctaHref: '/teach-english-online',
    ctaVariant: 'primary' as const,
  },
  {
    tag: 'Live Programme',
    title: 'Build Your Teaching Brand Online',
    description:
      'A practical playbook for teachers who want to turn their skills into global online teaching income.',
    features: [
      'Launch on 3-5 global teaching platforms with a clear starting plan',
      'Shift from local teacher to global educator with a strong profile and promise',
      'Set rates that reflect your expertise and income goals',
      'Build a 30-60-90 day roadmap with live support and community accountability',
    ],
    ctaLabel: 'See Programme Details',
    ctaHref: '/global-teacher-playbook',
    ctaVariant: 'primary' as const,
  },
  {
    tag: 'Coming Soon',
    title: 'Monetise Your Expertise: Digital Products',
    description:
      'Turn your teaching materials into passive-income assets like PDFs, templates, worksheets, and mini-courses.',
    features: [
      'Create products from resources you already use',
      'Package templates, worksheets, and mini-trainings for sale',
      'List on marketplaces or your own platform with quiet email upsells',
    ],
    ctaLabel: 'Join the Waiting List',
    ctaHref: '#waitlist',
    ctaVariant: 'secondary' as const,
  },
]

const digitalProducts = [
  {
    title: 'Curriculum Planning Toolkit',
    format: 'Template pack',
    description:
      'Map every module, lesson, and delivery asset for your next course launch with a guided planning toolkit.',
    href: '/downloads/curriculum-planning-toolkit.txt',
    ctaLabel: 'Download the toolkit',
  },
  {
    title: 'Lesson Systems Dashboard',
    format: 'Notion workspace',
    description:
      'Track leads, students, onboarding, and delivery in one focused workspace built for educators.',
    href: '/downloads/lesson-systems-dashboard.txt',
    ctaLabel: 'Duplicate the dashboard',
  },
  {
    title: 'Teacher Email Mini-Course',
    format: 'Mini-course',
    description:
      'Use ready-to-edit nurture emails, sales pivots, and launch reminders to convert interested leads.',
    href: '/downloads/teacher-email-mini-course.txt',
    ctaLabel: 'Grab the email scripts',
  },
]

const freebies: Freebie[] = [
  {
    title: 'Teach English Online Roadmap (PDF)',
    description: 'A one-page overview of the path from classroom to online income.',
    icon: 'document',
    downloadUrl: '/downloads/teach-english-online-roadmap.txt',
  },
  {
    title: 'Lesson Framework Template',
    description: 'A reusable template for structuring online English lessons.',
    icon: 'template',
    downloadUrl: '/downloads/lesson-framework-template.txt',
  },
  {
    title: 'Mini-training: From Live Lesson to Pre-Recorded Course',
    description: 'A short video showing how to turn one lesson into a course asset.',
    icon: 'video',
    downloadUrl: '/downloads/live-to-course-mini-training.txt',
  },
]

const founderStats = [
  { value: '6+', label: 'Years teaching' },
  { value: '100+', label: 'Educators guided' },
  { value: '3', label: 'Active programmes' },
]

const heroStats = [
  { value: '100+', label: 'Educators helped' },
  { value: '3', label: 'Live programmes' },
  { value: '5★', label: 'Average rating' },
]

const successStories = [
  {
    name: 'Sarah L.',
    role: 'Teacher, Cape Town',
    quote:
      'Working with 30 Degrees East helped me turn my one-to-one lessons into a clear package. I launched my first online English programme and signed my first 5 students in a month. I finally feel like I have a real business, not just a side hustle.',
    image: '/testimonials/sarah-l.svg',
  },
  {
    name: 'Njeri M.',
    role: 'Educator, Kenya',
    quote:
      'One major shift for me was overcoming imposter syndrome and letting go of the need for perfection. The practical guidance, accountability check-ins, and supportive community helped me approach online teaching with more confidence and feel much more natural on camera.',
    image: '/testimonials/njeri.jpeg',
  },
  {
    name: 'Gishini',
    role: 'Educator, Kenya',
    quote:
      'This programme helped me tone down imposter syndrome and stop shying away from teaching opportunities or referrals. I now have a much clearer idea of where to start and what my teaching business could look like, and it feels especially practical coming from a Kenyan perspective.',
    image: '/testimonials/gishini.jpeg',
  },
  {
    name: 'Veronica N.',
    role: 'Program participant',
    quote:
      'This programme helped me realise there is no perfect time to start. I now trust the process more, feel far more confident because I have a plan and clear direction, and I would absolutely recommend it for how practical, relatable, and supportive it is.',
    image: '/testimonials/veronica.jpeg',
  },
]

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-raisin text-white">
        <div className="container-custom py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="accent-label text-accent-300">For teachers and knowledge professionals</p>
              <h1 className="mt-5 max-w-3xl text-white">
                You have the skill. <span className="text-accent-300">Now build the income.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75">
                I&apos;m Swaleh Kimani, a teacher who made the leap to digital. Now I help educators and
                professionals turn what they already know into structured courses, digital products,
                and sustainable online income without burnout or influencer pressure.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#courses" className="w-full sm:w-auto">
                  See the Programmes
                </CTAButton>
                <CTAButton
                  href="#about"
                  variant="secondary"
                  className="w-full border-white/30 text-white hover:bg-white/5 sm:w-auto"
                >
                  My Story
                </CTAButton>
              </div>
            </div>

            <div className="rounded-[28px] border border-accent-500/20 bg-white/5 p-8 shadow-soft-card">
              <p className="font-serif text-xl italic leading-relaxed text-white/85">
                “I had been teaching for 6 years and had no idea my lessons could become a product.
                Swaleh&apos;s programme gave me a system, not just advice. I launched my first online
                English course and signed my first 5 students within a month.”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-sm font-semibold text-raisin">
                  SL
                </div>
                <div>
                  <p className="text-base font-semibold text-white">Sarah L.</p>
                  <p className="text-sm text-white/55">Teacher, Cape Town</p>
                </div>
              </div>
              <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-semibold text-accent-300">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="pain-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">You&apos;re not alone</p>
            <h2 id="pain-title" className="mt-4 text-raisin">
              If any of this sounds familiar, you&apos;re in exactly the right place.
            </h2>
            <p className="mt-4 text-neutral-600">
              These are the real things teachers and professionals say before we work together.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((point) => (
              <article
                key={point}
                className="rounded-[24px] border-l-4 border-accent-500 bg-neutral-50/80 p-6 shadow-soft-card"
              >
                <p className="text-neutral-800">&ldquo;{point}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-padding bg-raisin text-white" aria-labelledby="roadmap-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label text-accent-300">The path forward</p>
            <h2 id="roadmap-title" className="mt-4 text-white">
              From scattered knowledge to steady online income
            </h2>
            <p className="mt-4 text-white/60">
              A simple four-step process that turns experience into an offer, a system, and a more
              reliable business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pathSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[24px] border border-accent-500/20 bg-white/5 p-6 shadow-soft-card"
              >
                <p className="font-serif text-5xl font-semibold text-accent-500/35">{step.number}</p>
                <h3 className="mt-4 text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-white/65">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-white" aria-labelledby="about-title">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[360px] lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 shadow-soft-card">
              <Image
                src="/testimonials/swaleh-kimani.jpeg"
                alt="Swaleh Kimani"
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 78vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 right-6 max-w-[220px] rounded-2xl border border-accent-500/20 bg-raisin px-5 py-4 text-sm italic text-accent-200 shadow-soft-card">
              I built this because I wish it had existed when I was starting out.
            </div>
          </div>

          <div>
            <p className="accent-label">About Swaleh</p>
            <h2 id="about-title" className="mt-4 text-raisin">
              I was a teacher with real skills and no idea how to make them work online.
            </h2>
            <div className="mt-6 space-y-5 text-neutral-700">
              <p>
                I know what it feels like to sit on years of teaching experience and feel like it
                is only useful inside a classroom. I&apos;ve been through the confusion, the false
                starts, and the programs built for someone else&apos;s market.
              </p>
              <p>
                So I figured it out the hard way. I built my first digital offer, found my first
                students, and created a system that works for teachers and knowledge professionals
                who want real income without reinventing themselves.
              </p>
              <p>
                <strong className="text-raisin">30 Degrees East is what I built from that journey.</strong>{' '}
                Every course, template, and piece of guidance here comes from what I actually did,
                not what I read in a business book.
              </p>
            </div>
            <div className="mt-8 grid gap-6 border-t border-neutral-200 pt-6 sm:grid-cols-3">
              {founderStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-raisin">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section-padding bg-neutral-50/80" aria-labelledby="courses-title">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="accent-label">Programmes and courses</p>
              <h2 id="courses-title" className="mt-4 text-raisin">
                Choose your path forward
              </h2>
            </div>
            <Link href="/teach-english-online" className="text-sm font-semibold text-accent-600 hover:text-accent-700">
              See the flagship programme
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-soft-card"
              >
                <div className="flex min-h-[168px] flex-col bg-raisin px-7 py-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {course.tag}
                  </p>
                  <h3 className="mt-3 text-2xl text-white">{course.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-neutral-700">{course.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                        <span className="mt-1 text-accent-500" aria-hidden="true">
                          →
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-2">
                    <CTAButton
                      href={course.ctaHref}
                      variant={course.ctaVariant}
                      className={`w-full ${course.ctaVariant === 'secondary' ? 'border-neutral-200 text-neutral-700 hover:bg-neutral-50' : ''}`}
                    >
                      {course.ctaLabel}
                    </CTAButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-padding bg-white" aria-labelledby="products-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">Digital products</p>
            <h2 id="products-title" className="mt-4 text-raisin">
              Ready-to-use tools for your teaching business
            </h2>
            <p className="mt-4 text-neutral-600">
              Templates and systems you can plug into your next course, launch, or client workflow.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {digitalProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-6 shadow-soft-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {product.format}
                </p>
                <h3 className="mt-3 text-2xl text-raisin">{product.title}</h3>
                <p className="mt-4 text-neutral-700">{product.description}</p>
                <a
                  href={product.href}
                  download
                  className="mt-6 inline-flex text-sm font-semibold text-accent-600 underline-offset-4 hover:text-accent-700 hover:underline"
                >
                  {product.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="section-padding bg-white" aria-labelledby="stories-title">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="accent-label">What people are saying</p>
            <h2 id="stories-title" className="mt-4 text-raisin">
              Real results from real educators
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            <TestimonialsCarousel stories={successStories} />
          </div>
        </div>
      </section>

      <section id="freebies" className="section-padding bg-neutral-50/80" aria-labelledby="freebies-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label">Freebies</p>
            <h2 id="freebies-title" className="mt-4 text-raisin">
              Start with free resources
            </h2>
            <p className="mt-4 text-neutral-600">
              Shortcuts, templates, and guides to help you move from idea to offer faster.
            </p>
          </div>
          <FreebiesWithWaitlist freebies={freebies} />
        </div>
      </section>

      <section id="waitlist" className="section-padding bg-raisin text-white" aria-labelledby="waitlist-title">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-label text-accent-300">Join the waiting list</p>
            <h2 id="waitlist-title" className="mt-4 text-white">
              Ready to turn your knowledge into income?
            </h2>
            <p className="mt-4 text-white/65">
              Join to hear when new cohorts, digital products, and co-creation opportunities open.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft-card md:p-10">
            <WaitlistForm theme="light" submitLabel="Join the Waiting List" redirectOnSuccess="/thank-you" />
          </div>
        </div>
      </section>
    </>
  )
}
