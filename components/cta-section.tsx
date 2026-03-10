import { Button } from '@/packages/shared-ui/src/components/Button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-brand-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust CapitalPay for their financial needs. 
          Start your journey towards better financial management today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
