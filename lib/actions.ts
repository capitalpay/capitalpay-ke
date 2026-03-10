'use server'

import { z } from 'zod'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    const validatedData = contactSchema.parse(data)
    
    const submission = {
      ...validatedData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    }

    // Ensure data directory exists
    const dataDir = join(process.cwd(), 'data')
    await mkdir(dataDir, { recursive: true })
    
    // Append to submissions.json
    const submissionsPath = join(dataDir, 'submissions.json')
    const existingData = await import(submissionsPath).catch(() => ({ default: [] }))
    const submissions = Array.isArray(existingData.default) ? existingData.default : []
    
    submissions.push(submission)
    
    await writeFile(submissionsPath, JSON.stringify(submissions, null, 2))
    
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Please check your input and try again.',
        errors: error.errors 
      }
    }
    
    console.error('Contact form error:', error)
    return { 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }
  }
}
