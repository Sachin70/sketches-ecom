import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RotateCcw, Clock, Mail, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Returns & Refunds
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our commitment to your satisfaction with our design products.
            </p>
          </div>
        </section>

        {/* Policy Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* 30-Day Guarantee */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                      30-Day Money-Back Guarantee
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We stand behind the quality of our designs. If you're not completely satisfied with your purchase, 
                      you can request a full refund within 30 days of your purchase date.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This guarantee applies to all design purchases, whether you've downloaded the files or not. 
                      We want you to be happy with your purchase and confident in using our designs.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Request */}
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">How to Request a Refund</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                      <p className="text-muted-foreground">
                        Send us an email at <a href="mailto:support@atelier-designs.com" className="text-primary hover:underline">support@atelier-designs.com</a> with your order number and reason for the refund request.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Review Process</h3>
                      <p className="text-muted-foreground">
                        Our team will review your request, typically within 1-2 business days. We may ask for additional information if needed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Refund Processing</h3>
                      <p className="text-muted-foreground">
                        Once approved, your refund will be processed to your original payment method within 5-10 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Important Information</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <RotateCcw className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Digital Products</h3>
                      <p className="text-sm text-muted-foreground">
                        Since we sell digital design files, there are no physical products to return. Refunds are processed electronically.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Time Limit</h3>
                      <p className="text-sm text-muted-foreground">
                        Refund requests must be made within 30 days of purchase. Requests made after this period cannot be processed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">License Revocation</h3>
                      <p className="text-sm text-muted-foreground">
                        Upon refund approval, the commercial license for the design is revoked, and you may not use the design files for commercial purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exceptions */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Exceptions</h2>
                <p className="text-muted-foreground mb-4">
                  Custom design orders are non-refundable once the design process has begun, as they are created specifically for you. 
                  However, we work closely with you throughout the process to ensure satisfaction.
                </p>
                <p className="text-muted-foreground">
                  If you have concerns about a custom design order, please contact us immediately, and we'll work with you to find a solution.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you have questions about our return policy or need assistance with a refund request, we're here to help.
                </p>
                <Link href="/contact">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}




