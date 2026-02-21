import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-view-api.png',
    title: 'View-API',
    description:
      'A local mock server with a live editor—no backend, no redeploy, no save button. Build frontend without the wait.',
    technologies: ['Nodejs.js', 'Express.js', 'Tailwind', 'NPM'],
    links: {
      preview: 'https://ridloghifary.github.io/view-api/',
      github: 'https://github.com/RidloGhifary/view-api',
      githubApi: 'https://api.github.com/repos/RidloGhifary/view-api',
    },
  },
  {
    image: '/images/project-betty.png',
    title: 'Betty - POS System',
    description:
      'A Point of Sale (POS) system designed for small to medium-sized businesses, enabling efficient sales transactions and inventory management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Express.js', 'Docker'],
    links: {
      preview: 'https://betty.id/',
      github: '-',
      githubApi: '-',
    },
  },
  {
    image: '/images/project-nikahku.png',
    title: 'Nikahku - Wedding Service',
    description:
      'My Freelance Wedding project, built with Next.js and Tailwind CSS. It features a responsive design, smooth animations, and an easy-to-use interface for creating personalized wedding services.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    links: {
      preview: 'https://nikahku.ridloghfry.net/',
      github: '-',
      githubApi: '-',
    },
  },
  {
    image: '/images/project-portfolio.png',
    title: 'Personal Portfolio',
    description:
      'My personal portfolio website showcasing my projects, skills, and experience as a web developer.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    links: {
      preview: 'https://www.ridloghfry.web.id/',
      github: '-',
      githubApi: '-',
    },
  },
  {
    image: '/images/project-youvert.png',
    title: 'Youvert - Youtube Playlist Converter',
    description:
      'A web application that allows users to convert YouTube playlists into spotify playlists.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    links: {
      preview: 'https://spotube.convert.ridloghfry.web.id/',
      github: '-',
      githubApi: '-',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fullstack Web Developer',
    company: 'PT. Daya Reka Digital, Indonesia',
    description:
      'At Daya Reka Digital, I was responsible for developing and maintaining web applications for various clients. My role involved collaborating with cross-functional teams to deliver high-quality software solutions that met client requirements.',
    period: '2024 - Present',
    technologies: ['Next.js', 'Tailwind', 'Express.js', 'Docker', 'Redis'],
  },
  {
    title: 'Freelancer Fullstack Developer',
    company: 'Alone Worker',
    description:
      'As a freelance fullstack web developer, I have worked with various clients to deliver high-quality software solutions that meet their requirements. I am passionate about delivering excellent user experiences and I am always looking for new challenges to take on.',
    period: '2025 - Present',
    technologies: ['Next.js', 'TypeScript', 'Docker', 'Tailwind', 'Supabase'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
