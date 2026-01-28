'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />

      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Hello! My name is Ridlo Achmad Ghifary and I enjoy creating web
          applications that solve problems and provide great user experiences.
        </p>
      </div>

      {/* <Skills /> */}
    </motion.section>
  );
};
