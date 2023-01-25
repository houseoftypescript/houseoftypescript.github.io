import React from 'react';
import Heading from '../../atoms/Heading';

export const Team: React.FC<{ title: string; description: string }> = ({
  title = '',
  description = '',
}) => {
  return (
    <section id="team" className="py-32">
      <Heading title={title} description={description} />
    </section>
  );
};

export default Team;
