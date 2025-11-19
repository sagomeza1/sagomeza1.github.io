import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Email</p>
                    <a
                      href="mailto:john.doe@example.com"
                      className="text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      john.doe@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Location</p>
                    <p className="text-slate-900">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">
                Let's Work Together
              </h3>
              <p className="text-blue-100 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to discuss how we can work together.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
