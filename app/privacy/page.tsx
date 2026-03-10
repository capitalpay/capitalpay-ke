export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• Personal information (name, email, phone number)</li>
            <li>• Financial information (account details, transaction history)</li>
            <li>• Device information (IP address, browser type, device identifiers)</li>
            <li>• Usage information (how you interact with our services)</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide, maintain, and improve our services:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• Process transactions and provide financial services</li>
            <li>• Verify your identity and prevent fraud</li>
            <li>• Communicate with you about your account and services</li>
            <li>• Improve our services and develop new features</li>
            <li>• Comply with legal and regulatory requirements</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, 
            except in the following circumstances:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• With your explicit consent</li>
            <li>• To comply with legal obligations</li>
            <li>• To protect our rights and prevent fraud</li>
            <li>• With service providers who assist in our operations</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. This 
            includes encryption, secure servers, and regular security audits.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="text-gray-600 space-y-2 ml-6">
            <li>• Access your personal information</li>
            <li>• Correct inaccurate information</li>
            <li>• Delete your personal information</li>
            <li>• Object to processing of your information</li>
            <li>• Withdraw consent at any time</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us at info@capitalpay.africa or through our contact page.
          </p>
        </section>
      </div>
    </div>
  )
}
