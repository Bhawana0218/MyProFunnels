import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'
import { FeaturesSection } from './components/FeaturesSection'
import { FounderSection } from './components/FounderSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { Footer } from './components/Footer'
import { ParticleStream } from './components/ParticleStream'

function App() {
  return (
    <>
      <div className="film-grain" />
      <ParticleStream />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <FounderSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
