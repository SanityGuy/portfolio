import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#E0E0E0] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-[#1E1E1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#E0E0E0] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-[#1E1E1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#E0E0E0] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 bg-[#1E1E1E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2196F3] text-white py-3 rounded-lg hover:bg-[#1976D2] transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E0E0] hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E0E0] hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:example@email.com"
                  className="text-[#E0E0E0] hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Location
              </h3>
              <p className="text-[#E0E0E0]">
                The Twin Towers, NY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}