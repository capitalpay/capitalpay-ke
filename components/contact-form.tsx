'use client'

import { useState } from 'react'
import { Button } from '@/packages/shared-ui/src/components/Button'
import { Input } from '@/packages/shared-ui/src/components/Input'
import { Textarea } from '@/packages/shared-ui/src/components/Textarea'
import { Label } from '@/packages/shared-ui/src/components/Label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/packages/shared-ui/src/components/Card'
import { submitContactForm } from '@/lib/actions'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)
    
    try {
      const result = await submitContactForm(formData)
      setMessage({
        type: result.success ? 'success' : 'error',
        text: result.message
      })
      
      if (result.success) {
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Have a question or need help? Send us a message and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What can we help you with?"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us more about your inquiry..."
              rows={5}
            />
          </div>
          
          {message && (
            <div className={`p-4 rounded-md ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
