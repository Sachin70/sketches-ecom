'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What do I receive when I purchase a design?',
    answer: 'When you purchase a design, you receive high-resolution design files in multiple formats (PDF, PNG, SVG, and sometimes AI), complete technical specifications and measurements, fabric recommendations, color variations, and a commercial use license. All files are delivered instantly via email after purchase.',
  },
  {
    question: 'Can I use these designs for commercial purposes?',
    answer: 'Yes! All our designs come with a commercial use license, which means you can use them to produce and sell garments. However, you cannot resell or redistribute the design files themselves.',
  },
  {
    question: 'What file formats are included?',
    answer: 'Most designs include PDF (print-ready), PNG (high-resolution), and SVG (vector) formats. Some designs also include AI (Adobe Illustrator) files for easy editing. The specific formats are listed on each product page.',
  },
  {
    question: 'How do I download my purchased designs?',
    answer: 'After completing your purchase, you\'ll receive an email with download links to all your design files. You can also access your downloads anytime by logging into your account (if you create one) or using the link provided in your confirmation email.',
  },
  {
    question: 'Can I request modifications to a design?',
    answer: 'Our standard designs are sold as-is, but we do offer custom design services. If you need modifications to an existing design, please contact us through our Custom Orders page, and we can discuss creating a custom version for you.',
  },
  {
    question: 'What is your return policy?',
    answer: 'Since we sell digital products, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, contact us within 30 days for a full refund. Please note that once you\'ve downloaded the files, you agree to our terms of service.',
  },
  {
    question: 'Do you offer custom design services?',
    answer: 'Yes! We offer custom design services for clients who need something unique. Visit our Custom Orders page to submit a request. Our team will review your requirements and provide a quote based on the complexity and timeline of your project.',
  },
  {
    question: 'How long does it take to receive custom designs?',
    answer: 'Custom design timelines vary based on complexity, but typically range from 1-4 weeks. This includes initial sketches, revisions, and final design delivery. We\'ll provide a specific timeline after reviewing your custom design request.',
  },
  {
    question: 'What if I need help with production?',
    answer: 'Each design includes technical specifications and fabric recommendations to help with production. While we don\'t provide production services, our designs are created to be production-ready. For additional guidance, feel free to contact our support team.',
  },
  {
    question: 'Are the designs suitable for all skill levels?',
    answer: 'Our designs are created to be accessible to various skill levels. They include detailed specifications and measurements. However, some designs may be more complex than others. We recommend checking the complexity level listed on each product page.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our designs, purchasing process, and services.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <a href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}




