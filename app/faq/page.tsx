'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What makes 30 Degrees East different from other coaching services?',
    answer: 'I focus on building sustainable teaching systems, not quick fixes or influencer tactics. My approach is rooted in language precision, systems thinking, and strategic frameworks—designed for professionals who value depth over hype.',
  },
  {
    question: 'Do I need to be an experienced teacher to work with you?',
    answer: 'No. Many of my clients are professionals transitioning into teaching for the first time. What matters is that you have expertise worth sharing and you\'re committed to doing the strategic work required to package and deliver it effectively.',
  },
  {
    question: 'Is this about becoming a social media influencer?',
    answer: 'No. This is explicitly not about building a personal brand or chasing followers. I help you create teaching frameworks that generate income through value delivery, not audience size.',
  },
  {
    question: 'What\'s the difference between your coaching services?',
    answer: 'The "Earn Online by Teaching English" program is for beginners who want to start earning by teaching communication skills online. Strategy sessions are single paid diagnostics for immediate clarity. The Teaching System Audit is for educators who want to optimize their existing teaching practice. And coaching for coaches & educators is ongoing support for building leverage in your teaching business.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'This depends entirely on your starting point and how much focused work you put in. Some clients land their first students within weeks. Others spend months refining their teaching framework before launching. I prioritize sustainable systems over speed.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'No. All services are paid commitments. This ensures both parties are invested in doing the work. If you\'re uncertain whether this is right for you, start with a strategy session or review the free content on the Insights page first.',
  },
  {
    question: 'What platforms do you recommend for teaching online?',
    answer: 'I don\'t prescribe specific platforms. The right platform depends on your teaching model, audience, and goals. Part of our work together involves identifying what fits your system—not copying what works for someone else.',
  },
  {
    question: 'Can you guarantee I\'ll make money?',
    answer: 'No. I can guarantee you\'ll get clarity, structure, and a strategic approach. Your income depends on how well you execute, the value you deliver, and the market you\'re serving. I help with all of those—but I don\'t do the work for you.',
  },
  {
    question: 'Do you work with people outside of Kenya?',
    answer: 'Yes. All my services are delivered remotely, so geography doesn\'t matter. What matters is alignment with the approach and commitment to the work.',
  },
  {
    question: 'What if I don\'t have a clear idea of what I want to teach?',
    answer: 'That\'s exactly what strategy sessions are for. We work backward from your expertise, experience, and market demand to identify what\'s worth packaging and how to position it.',
  },
  {
    question: 'How do I know if I\'m ready to work with you?',
    answer: 'You\'re ready if: (1) You have expertise or experience worth teaching, (2) You\'re willing to think strategically about your approach, (3) You value systems over shortcuts, and (4) You\'re prepared to do the work—not just consume advice.',
  },
  {
    question: 'What role does AI play in your teaching approach?',
    answer: 'I use AI as a leverage tool—not a replacement for thinking. In the Teaching System Audit, we review how you can use AI to enhance delivery, automate repetitive tasks, and scale your teaching without losing quality. But the framework, strategy, and human insight? That\'s still yours.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Header */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-3xl text-center">
            <h1 className="text-neutral-900">Frequently Asked Questions</h1>
            <p className="mt-6 text-lg text-neutral-600">
              Common questions about working with 30 Degrees East, my services, and approach to
              teaching and coaching.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="section-padding section-gradient-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-panel-muted overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 text-left transition-colors hover:text-brand-600"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-neutral-900">
                    {faq.question}
                  </span>
                  <span className="mt-1 flex-shrink-0">
                    <svg
                      className={`h-6 w-6 text-neutral-600 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-2 pt-4 text-neutral-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="glass-panel mx-auto max-w-2xl text-center">
            <h2 className="text-neutral-900">Still have questions?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              If your question isn&apos;t answered here, feel free to reach out directly.
            </p>
            <div className="mt-8">
              <a
                href="/about#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-700 hover:shadow-glow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
