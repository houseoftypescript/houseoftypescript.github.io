import graphql from '../../assets/images/techstack/graphql.svg';
import mui from '../../assets/images/techstack/mui.svg';
import nextjs from '../../assets/images/techstack/next.js.svg';
import postgresql from '../../assets/images/techstack/postgresql.svg';
import prisma from '../../assets/images/techstack/prisma.svg';
import supabase from '../../assets/images/techstack/supabase.png';

const techstack = {
  title: 'Our modern web techstack',
  description:
    'Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.',
  services: [
    {
      id: 'next.js',
      image: nextjs,
      title: 'Next.js',
      description:
        'React framework for server-rendered web apps with powerful features.',
    },
    {
      id: 'mui',
      image: mui,
      title: 'MUI',
      description:
        'Popular React library for Material Design components and theming.',
    },
    {
      id: 'graphql',
      image: graphql,
      title: 'GraphQL',
      description:
        "Flexible query language for API's; client defines data structure needed.",
    },
    {
      id: 'postgresql',
      image: postgresql,
      title: 'PostgreSQL',
      description:
        'Powerful, open-source, object-relational database management system.',
    },
    {
      id: 'prisma',
      image: prisma,
      title: 'Prisma',
      description:
        'Open-source, type-safe ORM for Node.js and TypeScript with GraphQL support.',
    },
    {
      id: 'supabase',
      image: supabase,
      title: 'Supabase',
      description:
        'Open-source, Firebase-like platform built on PostgreSQL and GraphQL.',
    },
  ],
};

export default techstack;
