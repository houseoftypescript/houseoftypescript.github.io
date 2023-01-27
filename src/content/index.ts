import contact from './contact';
import hero from './hero';
import navbar from './navbar';
import projects from './projects';
import services from './services';
import team from './team';
import techstack from './techstack';
import testimonials from './testimonials';
import why from './why';

export const content = {
  title: 'HNT',
  navbar,
  hero,
  services,
  team,
  otherServices: techstack,
  why,
  blog: projects,
  testimonials,
  subscribe: contact,
};

export default content;
