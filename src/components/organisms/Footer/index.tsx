import Container from '@mui/material/Container';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC<{ title: string; socialLinks: any[] }> = ({
  title = '',
  socialLinks = [],
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t md:border-none">
      <Container>
        <div className="flex items-center justify-between">
          <div className="font-medium font-lg">
            &copy; {year} {title}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {socialLinks.map(({ id, link, icon }) => {
              return (
                <Link key={id} href={link} target={'_blank'}>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
