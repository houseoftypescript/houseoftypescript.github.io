import React from 'react';
import content from '../../../content';
import Blog from '../../organisms/Blog';
import Footer from '../../organisms/Footer';
import Hero from '../../organisms/Hero';
import Navbar from '../../organisms/Navbar';
import OtherServices from '../../organisms/OtherServices';
import SEO from '../../organisms/SEO';
import Services from '../../organisms/Services';
import Subscribe from '../../organisms/Subscribe';
import Team from '../../organisms/Team';
import Testimonials from '../../organisms/Testimonials';
import Why from '../../organisms/Why';

export const LandingTemplate: React.FC = () => {
  return (
    <>
      <SEO />
      <Navbar title={content.title} items={content.navbar.items} />

      <main>
        <Hero
          title={content.hero.title}
          description={content.hero.description}
        />
        <Services
          title={content.services.title}
          description={content.services.description}
          services={content.services.services}
        />
        <Testimonials />
        <Team
          title={content.team.title}
          description={content.team.description}
        />
        <OtherServices
          title={content.otherServices.title}
          description={content.otherServices.description}
          services={content.otherServices.services}
        />
        <Why />
        <Blog
          title={content.blog.title}
          description={content.blog.description}
          posts={content.blog.posts}
        />
        <Subscribe
          title={content.subscribe.title}
          description={content.subscribe.description}
        />
      </main>
      <Footer />
    </>
  );
};

export default LandingTemplate;
