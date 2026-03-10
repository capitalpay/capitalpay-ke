'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/packages/shared-ui/src/components/Card'
import { Button } from '@/packages/shared-ui/src/components/Button'
import Link from 'next/link'
import { Smartphone, Receipt, Phone, Send, PiggyBank, Building2 } from 'lucide-react'
import servicesData from '@/data/services.json'

const iconMap = {
  Smartphone,
  Receipt,
  Phone,
  Send,
  PiggyBank,
  Building2,
}

export function ServicesSection() {
  // Show first 6 services on homepage
  const featuredServices = servicesData.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to make your life easier and more convenient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-brand-600" />}
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services#${service.id}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="brand">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
