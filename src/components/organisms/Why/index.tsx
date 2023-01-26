import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Image from 'next/image';
import Tabs from 'rc-tabs';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import React from 'react';
import tabImage1 from '../../../assets/images/tab-illustration-1.png';
import Container from '../../atoms/Container';

const data = [
  {
    tab: 'Why you choose our service?',
    title: 'We will turn your idea in the successful business model framework',
    description:
      'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    items: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    tab: "What's our business promise?",
    title: 'We will turn your idea in the successful business model framework',
    description:
      'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    items: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
  {
    tab: "What's our role model plan?",
    title: 'We will turn your idea in the successful business model framework',
    description:
      'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    items: [
      'Medical and vision',
      'Life insurance',
      'HSAs and FSAs',
      'Commuter benefits',
    ],
  },
];

export const Why: React.FC = () => {
  return (
    <section id="why" className="pt-32 pb-16 why-container">
      <Container>
        <Tabs defaultActiveKey="tab-0" animated={{ tabPane: true }}>
          {data.map((item, index: number) => {
            return (
              <TabPane key={`tab-${index}`} tab={item.tab}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 py-8">
                    <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-lg mb-4 md:mb-8">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      {item.items.map((item: string, index: number) => {
                        return (
                          <div
                            key={`item-${index}`}
                            className="flex items-center gap-2"
                          >
                            <CheckCircleRoundedIcon className="text-emerald-500" />
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-span-1 p-8">
                    <Image src={tabImage1} alt="illustration" />
                  </div>
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
};

export default Why;
