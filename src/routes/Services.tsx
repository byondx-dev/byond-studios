import React, { useEffect } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, ArrowRight, LayoutDashboard, ShoppingCart, Zap } from 'lucide-react';
import Beams from '../components/Beams';
import { useTheme } from '../theme/theme';

const Services: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Services | Byond Studios";
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      category: "Websites",
      items: [
        {
          title: "Business Website",
          target: "Agencies, Law Firms, Clinics",
          description: "A professional 5-10 page website to showcase your services and build trust.",
          features: ["Responsive Design", "Contact Forms", "Blog Integration", "SEO Basics"],
          icon: <Globe size={20} />
        },
        {
          title: "E-Commerce / Shop",
          target: "Retail, Restaurants, Delivery",
          description: "Full store functionality. Sell products, manage inventory, and process payments.",
          features: ["Payment Gateways", "Cart & Checkout", "Product Management", "Admin Dashboard"],
          icon: <ShoppingCart size={20} />
        },
        {
          title: "Creator Onepage",
          target: "Influencers, Coaches, Artists",
          description: "A high-impact single page to consolidate your links and sell digital goods.",
          features: ["Bio Link", "Newsletter Signup", "Fast Loading", "Social Integration"],
          icon: <Zap size={20} />
        }
      ]
    },
    {
      category: "Applications",
      items: [
        {
          title: "Business Tools",
          target: "Internal Operations, SaaS",
          description: "Custom dashboards and tools to automate your business processes.",
          features: ["User Auth", "Database Integration", "Real-time Data", "Reporting"],
          icon: <LayoutDashboard size={20} />
        },
        {
          title: "Customer Apps",
          target: "Startups, Brands",
          description: "Mobile-first web apps (PWA) or native apps for customer loyalty and engagement.",
          features: ["Push Notifications", "Offline Support", "App Store Ready", "User Profiles"],
          icon: <Smartphone size={20} />
        }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {theme === 'dark' && (
          <Beams
            beamWidth={2.9}
            beamHeight={30}
            beamNumber={20}
            lightColor="#02a6f7"
            baseColor="#000000"
            speed={4.1}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        )}
      </div>

      {/* Content wrapper with relative z-index */}
      <div className="relative z-10">
        <Section>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We provide end-to-end development services. Whether you need a simple landing page or a complex web application, we have the expertise to deliver.
              </p>
            </div>
          </Reveal>

          <div className="space-y-20">
            {detailedServices.map((section, idx) => (
              <div key={idx}>
                <Reveal>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-violet-500 pl-4">
                    {section.category}
                  </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <Reveal key={i} delay={i * 0.1} width="100%">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-full flex flex-col hover:border-violet-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-violet-100 dark:bg-violet-900/20 text-violet-600 rounded-lg">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                        </div>

                        <div className="mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Best For</span>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.target}</p>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                          {item.description}
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                          <ul className="space-y-2">
                            {item.features.map((feat, f) => (
                              <li key={f} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                <div className="w-1 h-1 bg-violet-500 rounded-full"></div>
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal width="100%">
            <div className="mt-20 p-8 md:p-12 bg-violet-600 rounded-3xl text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-32 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to start your project?</h3>
              <p className="text-violet-100 mb-8 max-w-xl mx-auto relative z-10">
                Stop guessing and start building. Let's discuss your requirements and find the best solution for your budget.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors relative z-10"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>
    </div>
  );
};

export default Services;