import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const icons: Record<string, any> = {
  facebook: <FacebookIcon fontSize="medium" className="text-[#1877f2]" />,
  twitter: <TwitterIcon fontSize="medium" className="text-[#1da1f2]" />,
  github: <GitHubIcon fontSize="medium" className="text-[#333333]" />,
};

const Member: React.FC<{ member: any }> = ({ member = {} }) => {
  return (
    <div>
      <Image
        src={member.avatar}
        alt={member.name}
        className="rounded-xl border"
      />
      <h2 className="mt-4 text-lg md:text-2xl font-medium">{member.name}</h2>
      <p className="mt-2 text-sm md:text-lg text-gray-500">
        {member.designation}
      </p>
      <div className="mt-2 flex gap-2">
        {member.socialLinks.map((socialLink: any) => {
          return (
            <Link key={socialLink.name} href={socialLink.link}>
              {icons[socialLink.name]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Member;
