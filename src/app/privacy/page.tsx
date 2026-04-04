import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Privacy Policy
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
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Atelier Designs, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website and purchase our design products.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely through our payment providers)</li>
                      <li>Account credentials if you create an account</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground">
                      When you visit our website, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Device information and operating system</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and delivery information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Payment processors to complete transactions</li>
                  <li>Service providers who assist in operating our website</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                  Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                  do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the last updated date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: <a href="mailto:privacy@atelier-designs.com" className="text-primary hover:underline">privacy@atelier-designs.com</a><br />
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




