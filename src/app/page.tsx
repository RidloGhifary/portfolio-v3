import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import Particles from '@/components/particles';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />

        <Particles
          className="animate-fade-in absolute inset-0 -z-10 h-full"
          quantity={100}
        />

        <SectionDivider />

        <Particles
          className="animate-fade-in absolute inset-0 -z-10 h-full"
          quantity={100}
        />

        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
