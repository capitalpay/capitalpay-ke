export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using CapitalPay services, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please do not 
            use this service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-4">
            CapitalPay provides digital financial services including but not limited to:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• Mobile money transfers</li>
            <li>• Bill payment services</li>
            <li>• Airtime top-up</li>
            <li>• Digital savings accounts</li>
            <li>• Business payment solutions</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-600 mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• Provide accurate and complete information</li>
            <li>• Maintain the security of your account credentials</li>
            <li>• Use the services in compliance with applicable laws</li>
            <li>• Not engage in fraudulent or illegal activities</li>
            <li>• Notify us immediately of any unauthorized use</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Fees and Charges</h2>
          <p className="text-gray-600">
            Our services may be subject to fees and charges as disclosed at the time of transaction. 
            All fees are clearly displayed before you confirm any transaction. We reserve the right 
            to modify our fee structure with appropriate notice.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            CapitalPay shall not be liable for any indirect, incidental, special, consequential, or 
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
            other intangible losses, resulting from your use of the service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
          <p className="text-gray-600">
            Your privacy is important to us. Please review our Privacy Policy, which also governs 
            your use of the service, to understand our practices.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
          <p className="text-gray-600">
            We may terminate or suspend your account and bar access to the service immediately, 
            without prior notice or liability, under our sole discretion, for any reason whatsoever 
            and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will provide at least 30 days notice prior to any new terms 
            taking effect.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at 
            info@capitalpay.africa or through our contact page.
          </p>
        </section>
      </div>
    </div>
  )
}
