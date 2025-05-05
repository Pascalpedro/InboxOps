import React from 'react';
import ContactForm from './components/ContactForm';

const InboxOpsLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">InboxOps</h1>
        <nav className="space-x-6 text-sm text-gray-600">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="text-center px-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-4">
          Build Customer Connections <span className="text-blue-600">Effortlessly.</span>
        </h2>
        <p className="text-gray-600 mb-8">
          InboxOps helps you capture and manage customer inquiries directly from your website or app, making it easy to turn interactions into opportunities.
        </p>
        <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">Get Started</a>
      </main>

      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6">Features Designed for Your Business</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Easy Integration</h4>
              <p className="text-gray-600">Set up your contact form in minutes and integrate it with your backend to receive real-time inquiries.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Customizable Forms</h4>
              <p className="text-gray-600">Design the perfect contact form for your business with customizable fields that match your brand's needs.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Secure & Reliable</h4>
              <p className="text-gray-600">Ensure that your customer data is securely processed with end-to-end encryption, providing peace of mind for you and your users.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Analytics & Insights</h4>
              <p className="text-gray-600">Gain valuable insights into your customer interactions and track inquiries to optimize response times and service quality.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Multi-Channel Support</h4>
              <p className="text-gray-600">Capture inquiries across multiple channels, whether it's via your website, app, or social media, all in one place.</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Automation Ready</h4>
              <p className="text-gray-600">Automate your workflow with triggers and actions, ensuring no customer inquiry is ever missed.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h3>
          <p className="text-gray-600 mb-8">Choose the plan that fits your business size and needs. No hidden fees, no surprises.</p>
          <div className="flex justify-center gap-8">
            <div className="border p-6 rounded-lg w-72">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Starter</h4>
              <p className="text-gray-600 mb-4">$19/month</p>
              <ul className="text-left text-gray-600 mb-4">
                <li>✔️ 1 Form</li>
                <li>✔️ 500 Submissions</li>
                <li>✔️ Basic Analytics</li>
              </ul>
              <a href="#contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Start Free Trial</a>
            </div>
            <div className="border p-6 rounded-lg w-72">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Professional</h4>
              <p className="text-gray-600 mb-4">$49/month</p>
              <ul className="text-left text-gray-600 mb-4">
                <li>✔️ 5 Forms</li>
                <li>✔️ 5,000 Submissions</li>
                <li>✔️ Advanced Analytics</li>
                <li>✔️ Priority Support</li>
              </ul>
              <a href="#contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Start Free Trial</a>
            </div>
            <div className="border p-6 rounded-lg w-72">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Enterprise</h4>
              <p className="text-gray-600 mb-4">Custom Pricing</p>
              <ul className="text-left text-gray-600 mb-4">
                <li>✔️ Unlimited Forms</li>
                <li>✔️ Unlimited Submissions</li>
                <li>✔️ Full Analytics Suite</li>
                <li>✔️ Dedicated Account Manager</li>
              </ul>
              <a href="#contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-8">Have questions or want to learn more? Reach out to our team and we’ll get back to you right away!</p>
          <ContactForm />
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PedroOps. All rights reserved.
      </footer>
    </div>
  );
};

export default InboxOpsLanding;
