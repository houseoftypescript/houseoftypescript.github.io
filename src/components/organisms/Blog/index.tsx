import Heading from '../../atoms/Heading';
import Post from '../../molecules/Post';
import Container from '../../atoms/Container';
import project1 from '../../../assets/images/blog/1.png';
import project2 from '../../../assets/images/blog/2.png';
import project3 from '../../../assets/images/blog/3.png';

const images = [project1, project2, project3];

export const Blog: React.FC<{
  title: string;
  description: string;
  posts: any[];
}> = ({ title = '', description = '', posts = [] }) => {
  return (
    <section id="blog" className="py-16">
      <Container>
        <Heading title={title} description={description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ id, title, description }, index: number) => (
            <Post
              key={id}
              image={images[index]}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
