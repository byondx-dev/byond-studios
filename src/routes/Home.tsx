import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import { Layout, ShoppingBag, Smartphone, User, Code, Zap, HeartHandshake } from 'lucide-react';

import ShinyText from '../components/ShinyText';
import TextLoop from '../components/TextLoop';
import { useTheme } from '../theme/theme';
import ProcessTimeline from '../components/ProcessTimeline';

const Home: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Byond Studios | Websites & Apps";
  }, []);

  const shinySilverStyle = {
    '--shiny-base': theme === 'dark'
      ? 'linear-gradient(to right, #94a3b8, #94a3b8)' // Solid Silver Base (Dark Mode)
      : 'linear-gradient(to right, #334155, #334155)' // Solid Dark Slate Base (Light Mode)
  } as React.CSSProperties;

  const services = [
    {
      title: "Business Website",
      description: "Professional digital presence for agencies, clinics, and local businesses.",
      features: ["Custom Design", "SEO Optimized", "CMS Integration"],
      icon: <Layout size={24} />
    },
    {
      title: "E-Commerce / Order",
      description: "Systems for ordering, booking, and catalogs. Pickup or delivery integration.",
      features: ["Payment Gateway", "Order Management", "User Accounts"],
      icon: <ShoppingBag size={24} />
    },
    {
      title: "Creator Onepage",
      description: "High-conversion landing pages for influencers and content creators. Link-in-bio evolved.",
      features: ["Super Fast", "Mobile Focused", "Analytics"],
      icon: <User size={24} />
    },
    {
      title: "Custom Apps",
      description: "Web and Mobile Apps (iOS/Android) for specific business workflows.",
      features: ["Cross-Platform", "Offline Mode", "Push Notifications"],
      icon: <Smartphone size={24} />
    }
  ];

  const steps = [
    { num: "01", title: "Discovery", text: "We analyze your needs and define the scope." },
    { num: "02", title: "Design", text: "We create modern UI/UX mockups for approval." },
    { num: "03", title: "Build", text: "We code using the latest performant stack." },
    { num: "04", title: "Launch", text: "Deployment, testing, and handover." }
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TextLoop />

      {/* Services Grid */}
      <Section id="services">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <ShinyText
                text="What We Build"
                disabled={false}
                speed={3}
                className="font-bold text-transparent bg-clip-text"
                style={shinySilverStyle}
              />
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              We focus on digital products that generate value. No bloat, just performance.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Section>



      {/* Process Section - Modern Redesign */}
      <Section className="relative z-10">
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <ShinyText
                text="How It Works"
                disabled={false}
                speed={3}
                className="font-bold text-transparent bg-clip-text"
                style={shinySilverStyle}
              />
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              No complex workflows. Just a streamlined path to your digital product.
            </p>
          </div>
        </Reveal>

        <ProcessTimeline />
      </Section>

      {/* Tech & Quality */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              <ShinyText
                text="Built for Performance"
                disabled={false}
                speed={3}
                className="font-bold text-transparent bg-clip-text"
                style={shinySilverStyle}
              /> <br />
              <span className="text-violet-600">and Scale.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We don't just use templates. We build robust solutions using modern technologies like React, TypeScript, and Tailwind. This ensures your site is fast, accessible, and easy to maintain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Zap />, text: "99+ Lighthouse Score" },
                { icon: <Code />, text: "Clean Architecture" },
                { icon: <HeartHandshake />, text: "Long-term Support" },
                { icon: <Smartphone />, text: "Fully Responsive" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="text-violet-500">{item.icon}</div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              {/* Decorative Code block look */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              <div className="font-mono text-sm text-slate-300 space-y-2">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">project</span> = <span className="text-purple-400">await</span> byond.<span className="text-yellow-400">build</span>({'{'}</p>
                <p className="pl-4">quality: <span className="text-green-400">'Premium'</span>,</p>
                <p className="pl-4">performance: <span className="text-orange-400">100</span>,</p>
                <p className="pl-4">deadline: <span className="text-green-400">'On Time'</span></p>
                <p>{'}'});</p>
                <p className="text-slate-500">// Result: A happy client</p>
                <p><span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Launch Successful 🚀"</span>);</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="mb-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white">Common Questions</h2>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "How long does a project take?", a: "Simple websites take 1-2 weeks. Custom apps usually take 4-8 weeks depending on complexity." },
            { q: "Do you handle hosting?", a: "Yes, we can set up hosting, domains, and maintenance for you." },
            { q: "What is the cost?", a: "We offer tailored quotes. Basic landing pages start lower than complex web apps. Contact us for a quote." },
            { q: "Can I edit content myself?", a: "Absolutely. We can integrate a CMS so you can update text and images easily." },
            { q: "Do you provide support after launch?", a: "Yes, we offer monthly maintenance packages to keep everything secure and updated." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-5 bg-white dark:bg-slate-900/40">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{item.q}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;