import { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Sparkles, Palette, Printer, 
  MonitorSmartphone, Video, Bot, Star, TrendingUp
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider">
            Veltrix Aurum
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</a>
            <a href="#careers" className="hover:text-[#D4AF37] transition-colors">Careers</a>
            <button className="bg-[#D4AF37] text-black px-5 py-2.5 rounded-full font-semibold hover:bg-[#E5C07B] transition-colors">
              Request a Service
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 flex flex-col space-y-6 md:hidden">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-gray-300 hover:text-[#D4AF37]">Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-gray-300 hover:text-[#D4AF37]">Portfolio</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-gray-300 hover:text-[#D4AF37]">Testimonials</a>
          <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-gray-300 hover:text-[#D4AF37]">Careers</a>
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold text-lg w-full mt-4">
            Request a Service
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="text-sm font-medium text-gray-300">Creative & Technology Solutions</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
          Where <span className="text-[#D4AF37]">Creativity</span><br />
          Meets Technology
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          From stunning designs to cutting-edge software — we bring your vision to life with precision, passion, and innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#E5C07B] transition-colors">
            <span>Request a Service</span>
            <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">500+</div>
            <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">150+</div>
            <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">12+</div>
            <div className="text-sm text-gray-400 font-medium">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">24/7</div>
            <div className="text-sm text-gray-400 font-medium">Support</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive creative and technology solutions tailored to elevate your brand and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <MonitorSmartphone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Infrastructure</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Robust digital foundations including website design, e-commerce systems, custom business applications, and reliable hosting.
            </p>
            <ul className="space-y-2 mb-8">
              {['Web Development', 'E-Commerce', 'Custom Systems', 'Hosting & Maintenance'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Branding & Creative</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Brand identity, UI/UX design, social media graphics, and marketing collateral that captivate audiences.
            </p>
            <ul className="space-y-2 mb-8">
              {['Logo & Identity', 'Brand Strategy', 'UI/UX Design', 'Packaging Design'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Automation & AI</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Streamline operations with CRM setups, workflow automation, payment integrations, and advanced AI tools.
            </p>
            <ul className="space-y-2 mb-8">
              {['CRM Setup', 'Workflow Automation', 'AI Integration', 'deepFacecam Install'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <Video size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Video & Media</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Engaging visual storytelling through animated video creation, professional video editing, and motion graphics.
            </p>
            <ul className="space-y-2 mb-8">
              {['Animated Videos', 'Video Editing', 'Motion Graphics', 'Post-Production'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Growth & Optimization</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Data-driven strategies to scale your business, including SEO, funnel building, and conversion rate optimization.
            </p>
            <ul className="space-y-2 mb-8">
              {['SEO Strategy', 'Funnel Building', 'Analytics Setup', 'Conversion Strategy'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 text-[#D4AF37]">
              <Printer size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Printing Solutions</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              High-quality physical marketing materials including banners, flyers, business cards, and large-format prints.
            </p>
            <ul className="space-y-2 mb-8">
              {['Banners & Posters', 'Business Cards', 'Flyers & Brochures', 'Large Format'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Our Work</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Featured Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase our expertise across creative and technology domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Luxe Brand Identity', category: 'Branding', bg: 'bg-gradient-to-br from-amber-900/40 to-orange-900/40' },
            { title: 'E-Commerce Platform', category: 'Software', bg: 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40' },
            { title: 'Corporate Print Suite', category: 'Printing', bg: 'bg-gradient-to-br from-emerald-900/40 to-teal-900/40' },
            { title: 'Mobile Banking App', category: 'Software', bg: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40' },
            { title: 'Restaurant Rebrand', category: 'Branding', bg: 'bg-gradient-to-br from-rose-900/40 to-pink-900/40' },
            { title: 'IT Infrastructure', category: 'Hardware', bg: 'bg-gradient-to-br from-slate-800/40 to-slate-900/40' },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] border border-white/5 bg-[#141414]">
              <div className={`absolute inset-0 ${item.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white/80 group-hover:text-white transition-colors duration-500 transform group-hover:scale-105">{item.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">{item.category}</div>
                <div className="text-lg font-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Veltrix Aurum transformed our brand identity. Their creative team understood our vision perfectly and delivered beyond expectations.", name: "Sarah Okonkwo", title: "CEO, Bloom Studios" },
            { quote: "The software solutions team built a robust platform that scaled seamlessly. Professional, responsive, and technically brilliant.", name: "Michael Adeyemi", title: "CTO, TechPulse" },
            { quote: "From printing to digital design, they handle everything with exceptional quality. Our go-to creative partner for three years running.", name: "Amara Nwosu", title: "Marketing Director, Zenith Corp" }
          ].map((item, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-8">
              <div className="text-4xl text-[#D4AF37] font-serif mb-4">"</div>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                {item.quote}
              </p>
              <div className="flex text-[#D4AF37] mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-xs text-gray-500 mt-1">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <div className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Careers</div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Our Creative Team</h2>
        <p className="text-gray-400 mb-12 text-lg">
          We're always looking for talented creatives and technologists to join our growing team.
        </p>

        <div className="space-y-4 text-left">
          {[
            { role: 'Senior Graphic Designer', type: 'Full-time', location: 'Remote', status: 'Open' },
            { role: 'Print Technician', type: 'Contract', location: 'Lagos', status: 'Mar 30' },
            { role: 'Frontend Developer', type: 'Full-time', location: 'Remote', status: 'Open' },
          ].map((job, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between group hover:border-white/10 transition-colors">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">{job.role}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></div>{job.type}</span>
                  <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></div>{job.location}</span>
                  <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></div>{job.status}</span>
                </div>
              </div>
              <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors border border-white/10">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-6">
            <Sparkles size={14} />
            <span>Ready to Start?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Let's Build Something <span className="text-[#D4AF37]">Extraordinary</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            Whether you need a stunning design, a custom application, or professional printing — we're here to make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#E5C07B] transition-colors">
              <span>Request a Service</span>
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors">
              Become an Affiliate
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider mb-6">
              Veltrix Aurum
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where creativity meets technology. Delivering world-class design, printing, and software solutions.
            </p>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Philippians 4:13
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Digital Infrastructure</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Branding & Creative</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Automation & AI</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Video & Media</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Printing Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="#careers" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Affiliates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>info@veltrixaurum.com</li>
              <li>+234 800 000 0000</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Veltrix Aurum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
