import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Sticky from 'react-stickynode';
import content from '../../../content';

export const Navbar: React.FC<{ title?: string; items?: any[] }> = ({
  title = '',
  items = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
                  <div className="hidden md:flex items-center gap-8">
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
                <div className="flex items-center gap-8">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-emerald-500 font-bold"
                  >
                    Get Started
                  </ScrollLink>
                  <div className="block md:hidden">
                    <MenuIcon onClick={() => setOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </Sticky>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="relative w-[80vw] h-screen">
          <div className="absolute w-full py-8 px-8 flex items-center justify-between">
            <h1 className="text-2xl">{content.seo.shortName}</h1>
            <CloseIcon onClick={() => setOpen(false)} />
          </div>
          <div className="w-full h-full flex items-center">
            <div>
              {items.map(({ id, link, text }) => {
                return (
                  <div key={id} className="px-8 py-2 w-full">
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
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
