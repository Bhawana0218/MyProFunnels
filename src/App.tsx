import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'
import { ScalingRoadmap } from './components/ScalingRoadmap'
import { WhyUsSection } from './components/WhyUsSection'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { Footer } from './components/Footer'
import { ParticleStream } from './components/ParticleStream'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <>
      <div className="film-grain" />
      <ScrollProgress />
      <ParticleStream />
      <Navbar />
     <div className='my-20'>
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ScalingRoadmap />
        <WhyUsSection />
        <StatsSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      </div>
      <Footer />
    </>
  )
}

export default App
