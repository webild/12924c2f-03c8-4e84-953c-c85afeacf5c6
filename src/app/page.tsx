"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import RegularFAQ from '@/components/sections/layouts/faq/RegularFAQ';
import ContactForm from '@/components/sections/layouts/contact/ContactForm';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div className="flex flex-col gap-8">
        <section id="hero" className="bg-white py-18">
          <SimpleHero title="Welcome to NovaLaunch" description="Your adventure begins here!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
        </section>
        <section id="features" className="bg-soft-noise py-18">
          <SimpleKPIBento items={[{ value: 'Fast', description: 'Experience rapid launches.' }, { value: 'Secure', description: 'Your data is safe with us.' }, { value: 'Reliable', description: 'Depend on us for uptime.' }]} className="grid" />
        </section>
        <section id="about" className="bg-[#F7F8FC] py-18">
          <MinimalAbout description="NovaLaunch is dedicated to providing an efficient experience for everyone diving into new technologies." />
        </section>
        <section id="testimonials" className="bg-gradient-to-b from-[#F4F6FF] to-white py-18">
          <RegularFAQ items={[{ title: 'Client Success', content: '"NovaLaunch helped us grow exponentially!" – Client A' }, { title: 'Outstanding Service', content: '"Easy to work with, great results!" – Client B' }]} />
        </section>
        <section id="cta" className="bg-white py-18">
          <h2>Ready to take the next step?</h2>
          <p>Contact us today to get started!</p>
          <button className="bg-primary text-white p-3 rounded">Get In Touch <ArrowRight /></button>
        </section>
        <section id="contact" className="bg-white py-18">
          <ContactForm />
        </section>
      </div>
    </SiteThemeProvider>
  );
}