import React from 'react';
import ContactForm from './components/ContactForm';

const PedroOpsLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">PedroOps</h1>
        <nav className="space-x-6 text-sm text-gray-600">
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="text-center px-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-4">
          Build Cloud Systems That Work. <span className="text-blue-600">Effortlessly.</span>
        </h2>
        <p className="text-gray-600 mb-8">
          PedroOps helps you automate, monitor, and manage scalable cloud infrastructure with ease.
        </p>
        <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">Start Building</a>
      </main>

      <section id="contact" className="py-20">
        <ContactForm />
      </section>

      <footer className="text-center py-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PedroOps. All rights reserved.
      </footer>
    </div>
  );
};

export default PedroOpsLanding;