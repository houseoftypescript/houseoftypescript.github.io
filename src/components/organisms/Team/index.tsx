import Image from 'next/image';
import React, { useRef, useState } from 'react';

import Heading from '../../atoms/Heading';
import Member from '../../molecules/Member';
import Container from '@mui/material/Container';

export const Team: React.FC<{
  title?: string;
  description?: string;
  members: any[];
}> = ({ title = '', description = '', members = [] }) => {
  return (
    <section id="team" className="py-8 md:py-16">
      <Container>
        <div className="mb-16">
          <Heading title={title} description={description} />
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {members?.map(({ id, avatar, name, role, socialLinks = [] }) => (
            <div key={id} className="col-span-1">
              <Member
                avatar={avatar}
                name={name}
                role={role}
                socialLinks={socialLinks}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
