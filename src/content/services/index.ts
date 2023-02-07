import service4 from '../../assets/images/services/service4.png';
import nodejs from '../../assets/images/techstack/node.js.svg';
import typescript from '../../assets/images/techstack/typescript.svg';

const services = {
  title: 'Grow your startup with our Service',
  description:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  services: [
    {
      id: 'ultimate-development',
      image: service4,
      title: 'Ultimate development',
      description:
        'Get your info tests delivered at home collect a sample from the your progress tests.',
    },
    {
      id: 'typescript',
      image: typescript,
      title: 'TypeScript',
      description:
        'JavaScript superset with optional static typing for improved code quality.',
    },
    {
      id: 'nodejs',
      image: nodejs,
      title: 'Node.js',
      description:
        'JavaScript runtime for building server-side and network apps.',
    },
  ],
};

export default services;
