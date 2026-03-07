'use client'

import { useState } from 'react'

export type DigitalProduct = {
  title: string
  format: string
  description: string
  ctaLabel: string
  longDescription: string
  includes: string[]
  downloads?: Array<{
    label: string
    href: string
  }>
}

type DigitalProductsShelfProps = {
  products: DigitalProduct[]
}

export default function DigitalProductsShelf({ products }: DigitalProductsShelfProps) {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null)

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <button
            key={product.title}
            type="button"
            onClick={() => setSelectedProduct(product)}
            className="rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-6 text-left shadow-soft-card transition hover:border-accent-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            aria-haspopup="dialog"
          >
            <h3 className="text-xl text-neutral-900">{product.title}</h3>
            <p className="mt-2 text-sm font-medium text-neutral-500">{product.format}</p>
            <p className="mt-4 text-neutral-700">{product.description}</p>
            <p className="mt-6 text-xs font-accent uppercase tracking-[0.3em] text-neutral-500">{product.ctaLabel}</p>
          </button>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.title} details`}
            className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-raisin p-8 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <span aria-hidden="true">×</span>
            </button>
            <p className="text-sm font-accent uppercase tracking-[0.35em] text-white/70">{selectedProduct.format}</p>
            <h3 className="mt-2 text-2xl font-semibold">{selectedProduct.title}</h3>
            <p className="mt-4 text-white/80">{selectedProduct.longDescription}</p>
            <div className="mt-6 space-y-2 text-white/80">
              <p className="text-sm font-accent uppercase tracking-[0.35em] text-white">What’s inside</p>
              <ul className="list-inside list-disc space-y-1 text-base">
                {selectedProduct.includes.map((item) => (
                  <li key={`${selectedProduct.title}-${item}`}>{item}</li>
                ))}
              </ul>
            </div>
            {selectedProduct.downloads && selectedProduct.downloads.length > 0 ? (
              <div className="mt-8 space-y-4">
                <p className="text-sm font-accent uppercase tracking-[0.35em] text-white">Downloads</p>
                <div className="space-y-3">
                  {selectedProduct.downloads.map((download) => (
                    <a
                      key={download.href}
                      href={download.href}
                      className="flex w-full items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-raisin shadow-soft-card transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                      download
                    >
                      {download.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-8 text-sm text-white/70">Downloads will unlock soon. Join the waitlist to be notified.</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
