import Heading from '../../atoms/Heading';

export const Blog: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  return (
    <section id="blog" className="py-32">
      <Heading title={title} description={description} />
    </section>
  );
};

export default Blog;
