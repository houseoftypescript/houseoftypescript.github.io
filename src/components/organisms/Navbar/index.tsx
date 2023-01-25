import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Sticky from 'react-stickynode';

import Container from '../../atoms/Container';
import Button from '../../atoms/Button';

export const Navbar: React.FC<{ title?: string; items?: any[] }> = ({
  title = '',
  items = [],
}) => {
  return (
    <Sticky top={0} enabled={true} innerZ={100} activeClass="is-sticky">
      <nav className="bg-white">
        <Container>
          <div className="py-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <h1 className="text-2xl">
                  <ScrollLink
                    to="home"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    {title}
                  </ScrollLink>
                </h1>
                <div className="flex items-center gap-8">
                  {items.map(({ id, link, text }) => {
                    return (
                      <div key={id}>
                        <ScrollLink
                          to={link}
                          spy={true}
                          offset={-70}
                          smooth={true}
                          duration={500}
                          activeClass="active"
                          className="cursor-pointer nav-scroll-link"
                        >
                          {text}
                        </ScrollLink>
                      </div>
                    );
                  })}
                </div>
              </div>
              <ScrollLink
                to="subscribe"
                spy={true}
                offset={-70}
                smooth={true}
                duration={500}
                className="cursor-pointer text-emerald-500 font-bold"
              >
                Get Started
              </ScrollLink>
            </div>
          </div>
        </Container>
      </nav>
    </Sticky>
  );
};

export default Navbar;
