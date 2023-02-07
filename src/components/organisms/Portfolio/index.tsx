import Container from '@mui/material/Container';
import Heading from '../../atoms/Heading';
import Project from '../../molecules/Project';

export const Portfolio: React.FC<{
  title: string;
  description: string;
  projects: any[];
}> = ({ title = '', description = '', projects = [] }) => {
  return (
    <section id="projects" className="py-8 md:py-16">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(
            (
              { id, url, image, title, description, technologies },
              index: number
            ) => (
              <Project
                key={id}
                url={url}
                image={image}
                title={title}
                description={description}
                technologies={technologies}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
