import Container from '@mui/material/Container';
import Heading from '../../atoms/Heading';
import Post from '../../molecules/Project';

export const Projects: React.FC<{
  title: string;
  description: string;
  posts: any[];
}> = ({ title = '', description = '', posts = [] }) => {
  return (
    <section id="projects" className="py-8 md:py-16">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ id, image, title, description }, index: number) => (
            <Post
              key={id}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
