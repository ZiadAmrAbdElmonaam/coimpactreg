'use client'

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setNotification(null)

    const form = e.currentTarget
    const formData = {
      name: form.name.valueOf,
      email: form.email.value,
      institution: form.institution.value,
      message: form.message.value,
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      setNotification({
        type: 'success',
        message: 'Your message has been sent successfully!'
      })
      form.reset()
    } catch (error) {
      console.error(error)
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Get in touch with our research team or inquire about joining the registry.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {notification && (
              <div className={`p-4 mb-4 rounded-md ${
                notification.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {notification.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="Enter your email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input id="institution" name="institution" placeholder="Enter your institution" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

