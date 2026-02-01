import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import Particles from '@/components/particles';
import { Projects } from '@/components/projects';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <Particles
        className="animate-fade-in fixed inset-0 -z-10 h-screen w-full"
        quantity={200}
      />

      <div className="container flex flex-col items-center">
        <Header />

        <div className="-mt-20 flex min-h-[calc(100vh-10dvh)] items-center justify-center">
          <Intro />
        </div>

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
