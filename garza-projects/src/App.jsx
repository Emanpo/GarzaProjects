export default function GarzaProjectsWebsite() {
  const services = [
    {
      title: 'General Construction',
      desc: 'Full-service construction from start to finish.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Commercial Construction',
      desc: 'Custom solutions for business and industry.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Remodeling',
      desc: 'Transforming homes and commercial spaces.',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Concrete Work',
      desc: 'Strong foundations built to last.',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const projects = [
    {
      title: 'Industrial Warehouse',
      location: 'Houston, TX',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Luxury Kitchen Remodel',
      location: 'San Antonio, TX',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Retail Buildout',
      location: 'Austin, TX',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/PG LOGO.png"
              alt="Garza Projects Logo"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-2xl font-black tracking-wide uppercase">
                Garza
              </h1>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs">
                Projects
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 uppercase text-sm font-semibold tracking-wider">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
            <a href="#reviews" className="hover:text-yellow-400 transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-xl shadow-yellow-500/20">
            Get A Quote
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('/GP Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.25em] font-bold mb-6">
              Built On Integrity. Delivered With Pride.
            </p>

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
              Building
              <span className="block text-yellow-400">Stronger</span>
              Futures.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
              Garza Projects is a full-service general contractor delivering
              high-quality residential and commercial construction solutions
              across Texas.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20">
                Get A Quote
              </button>

              <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-all">
                View Projects
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              alt="Construction"
              className="rounded-3xl shadow-2xl border border-yellow-500/20 max-h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#0a0a0a] border-y border-yellow-500/10 py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            'Licensed & Insured',
            '20+ Years Experience',
            'Quality Craftsmanship',
            'Serving Texas',
          ].map((item) => (
            <div
              key={item}
              className="border border-yellow-500/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-bold uppercase tracking-wide text-yellow-400 mb-2">
                {item}
              </h3>
              <p className="text-gray-400 text-sm">
                Trusted construction solutions built for long-term success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="About Garza Projects"
              className="rounded-3xl border border-yellow-500/20 shadow-2xl"
            />
          </div>

          <div>
            <p className="text-yellow-400 uppercase font-bold tracking-[0.2em] mb-5">
              About Garza Projects
            </p>

            <h2 className="text-5xl font-black uppercase leading-tight mb-8">
              Building With Precision & Purpose
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              At Garza Projects, we specialize in high-quality construction,
              remodeling, and commercial development. Our mission is to deliver
              durable craftsmanship with clear communication and dependable
              project management.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              From residential renovations to large-scale commercial projects,
              our team is committed to excellence in every phase of construction.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-yellow-500/10 p-6 rounded-2xl">
                <h3 className="text-4xl font-black text-yellow-400 mb-2">
                  250+
                </h3>
                <p className="uppercase text-sm tracking-widest text-gray-300">
                  Completed Projects
                </p>
              </div>

              <div className="bg-white/5 border border-yellow-500/10 p-6 rounded-2xl">
                <h3 className="text-4xl font-black text-yellow-400 mb-2">
                  20+
                </h3>
                <p className="uppercase text-sm tracking-widest text-gray-300">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 bg-gradient-to-b from-black to-[#111]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.2em] font-bold mb-4">
                What We Do
              </p>

              <h2 className="text-5xl font-black uppercase">
                Our Services
              </h2>
            </div>

            <button className="hidden md:block border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl uppercase font-bold hover:bg-yellow-400 hover:text-black transition-all">
              View All Services
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white/5 rounded-3xl overflow-hidden border border-yellow-500/10 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <button className="text-yellow-400 uppercase font-bold tracking-wide hover:translate-x-2 transition-transform">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.2em] font-bold mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl font-black uppercase">
              Built For Results
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl overflow-hidden border border-yellow-500/10 bg-white/5 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase mb-2">
                    {project.title}
                  </h3>

                  <p className="text-yellow-400 uppercase tracking-wide text-sm">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-yellow-400 uppercase tracking-[0.2em] font-bold mb-4">
            Client Reviews
          </p>

          <h2 className="text-5xl font-black uppercase mb-16">
            Trusted By Clients Across Texas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Garza Projects exceeded our expectations from start to finish.',
              'Professional communication and exceptional craftsmanship.',
              'Reliable team with outstanding attention to detail.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white/5 border border-yellow-500/10 rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-3xl mb-6">★★★★★</div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {review}
                </p>

                <h4 className="font-bold uppercase tracking-wide">
                  Client {index + 1}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/GP Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <img
            src="/PG LOGO.png"
            alt="Logo"
            className="w-24 mx-auto mb-8"
          />

          <h2 className="text-6xl font-black uppercase leading-tight mb-8">
            Ready To Start
            <span className="block text-yellow-400">Your Next Project?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Let’s build something exceptional together. Contact Garza Projects
            today for a free estimate.
          </p>

          <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-wide hover:scale-105 transition-transform shadow-2xl shadow-yellow-500/20">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.2em] font-bold mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-black uppercase mb-8">
              Let’s Build Together
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-xl">
              Reach out to Garza Projects for residential, commercial, or custom
              construction services.
            </p>

            <div className="space-y-6 text-lg">
              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-1">
                  Phone
                </h3>
                <p className="text-gray-300">(210) 555-1234</p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-1">
                  Email
                </h3>
                <p className="text-gray-300">info@garzaprojects.com</p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-1">
                  Location
                </h3>
                <p className="text-gray-300">San Antonio, Texas</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-yellow-500/10 rounded-3xl p-10 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black/50 border border-yellow-500/20 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-black/50 border border-yellow-500/20 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-black/50 border border-yellow-500/20 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-black/50 border border-yellow-500/20 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 mb-6"
            ></textarea>

            <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black uppercase tracking-wide hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-500/20">
              Request A Quote
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-500/10 bg-[#050505] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src="/PG LOGO.png"
              alt="Garza Projects"
              className="w-14"
            />

            <div>
              <h3 className="font-black uppercase text-xl">Garza Projects</h3>
              <p className="text-gray-500 text-sm">
                Built on integrity. Delivered with pride.
              </p>
            </div>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            © 2026 Garza Projects. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
