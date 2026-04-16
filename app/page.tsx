import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import Services from '@/components/home/Services'
import Portfolio from '@/components/home/Portfolio'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
