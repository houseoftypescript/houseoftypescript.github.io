import Button from '@mui/material/Button';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 text-center uppercase">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-4xl">Page Not Found</p>
        <Link href="/">
          <Button variant="contained" fullWidth>
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
