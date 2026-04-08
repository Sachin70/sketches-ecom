import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last updated: December 2024
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using StitchoraLab’ website and purchasing our design products, you agree to be bound by 
                  these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Use License</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Commercial License</h3>
                    <p className="text-muted-foreground">
                      When you purchase a design from StitchoraLab, you receive a commercial license that allows you to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                      <li>Use the design to produce and sell garments</li>
                      <li>Modify the design for your production needs</li>
                      <li>Use the design for commercial purposes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Restrictions</h3>
                    <p className="text-muted-foreground">
                      You may NOT:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                      <li>Resell or redistribute the design files themselves</li>
                      <li>Share design files with others who haven’t purchased them</li>
                      <li>Claim the design as your own original work</li>
                      <li>Use the design in a way that violates applicable laws</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Digital Products</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products sold on StitchoraLab are digital design files. Upon purchase, you will receive:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>High-resolution design files in specified formats</li>
                  <li>Technical specifications and measurements</li>
                  <li>Fabric recommendations</li>
                  <li>Commercial use license</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Digital products are delivered instantly via email. There are no physical products shipped.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are listed in USD. Payment must be made in full at the time of purchase. We accept major credit 
                  cards and other payment methods as indicated on our checkout page. All payments are processed securely through 
                  our payment providers.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 30-day money-back guarantee on all design purchases. If you’re not satisfied, contact us within 
                  30 days for a full refund. Custom design orders are non-refundable once the design process has begun. 
                  For more details, see our <a href="/returns" className="text-primary hover:underline">Returns Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All designs, content, and materials on this website are the property of StitchoraLab and are protected by 
                  copyright and other intellectual property laws. Purchasing a design grants you a license to use it as specified, 
                  but does not transfer ownership of the design itself.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  StitchoraLab provides design files “as is” without warranties of any kind. We are not liable for any 
                  damages arising from the use of our designs, including but not limited to production issues, design modifications, 
                  or business decisions made based on our designs.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You may not use our services:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>In any way that violates applicable laws or regulations</li>
                  <li>To transmit harmful or malicious code</li>
                  <li>To impersonate or misrepresent your affiliation with any entity</li>
                  <li>To interfere with or disrupt our services</li>
                  <li>To collect or harvest information about other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by 
                  posting the new Terms of Service on this page. Your continued use of our services after changes become 
                  effective constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: <a href="mailto:legal@atelier-designs.com" className="text-primary hover:underline">legal@atelier-designs.com</a><br />
                  Address: 123 Fashion Avenue, New York, NY 10001, United States
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}




