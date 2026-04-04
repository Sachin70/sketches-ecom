'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Sparkles, Palette, FileText, Clock, CheckCircle2 } from 'lucide-react'

export default function CustomPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designType: '',
    occasion: '',
    style: '',
    budget: '',
    timeline: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        designType: '',
        occasion: '',
        style: '',
        budget: '',
        timeline: '',
        details: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Custom Design Orders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a specific vision in mind? Our talented designers can create a custom dress design tailored to your unique requirements.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-foreground text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <FileText className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Submit Request</h3>
                <p className="text-muted-foreground">
                  Fill out our custom design form with your requirements and vision.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Palette className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Design Process</h3>
                <p className="text-muted-foreground">
                  Our designers create initial sketches and work with you on revisions.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Final Design</h3>
                <p className="text-muted-foreground">
                  Receive your completed design with all specifications and files.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4. Production Ready</h3>
                <p className="text-muted-foreground">
                  Use your design files to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-foreground text-center mb-12">Request a Custom Design</h2>
            
            {submitted ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Request Submitted!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in a custom design. Our team will review your request and get back to you within 2-3 business days.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-border text-foreground hover:bg-secondary"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="designType" className="block text-sm font-medium text-foreground mb-2">
                      Design Type *
                    </label>
                    <select
                      id="designType"
                      name="designType"
                      value={formData.designType}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select type</option>
                      <option value="women">Women’s Dress</option>
                      <option value="girls">Girls’ Dress</option>
                      <option value="bridal">Bridal Gown</option>
                      <option value="evening">Evening Wear</option>
                      <option value="casual">Casual Wear</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-foreground mb-2">
                      Occasion
                    </label>
                    <Input
                      type="text"
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      placeholder="e.g., Wedding, Party, Formal Event"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="style" className="block text-sm font-medium text-foreground mb-2">
                    Style Preferences
                  </label>
                  <Input
                    type="text"
                    id="style"
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    placeholder="e.g., Minimalist, Elegant, Playful"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000+">$2,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe your vision, specific requirements, colors, fabrics, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Custom Design Request
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}




