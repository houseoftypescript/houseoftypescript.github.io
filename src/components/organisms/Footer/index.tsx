import React from 'react';
import Container from '../../atoms/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t md:border-none">
      <Container>
        <div className="flex items-center justify-between">
          <div className="font-medium font-lg">&copy; {year} HNT</div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="#">
              <FacebookIcon fontSize="medium" className="text-[#1877f2]" />
            </Link>
            <Link href="#">
              <TwitterIcon fontSize="medium" className="text-[#1da1f2]" />
            </Link>
            <Link href="#">
              <GitHubIcon fontSize="medium" className="text-[#333333]" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
