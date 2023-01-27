import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Image from 'next/image';
import Tabs from 'rc-tabs';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import React from 'react';
import tabImage1 from '../../../assets/images/tab-illustration-1.png';
import Container from '../../atoms/Container';

export const Why: React.FC<{ reasons: any[] }> = ({ reasons = [] }) => {
  return (
    <section id="why" className="pt-16 md:pt-32 pb-8 md:pb-16 why-container">
      <Container>
        <Tabs defaultActiveKey="tab-0" animated={{ tabPane: true }}>
          {reasons.map((reason, index: number) => {
            return (
              <TabPane key={`tab-${index}`} tab={reason.tab}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 py-8">
                    <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">
                      {reason.title}
                    </h2>
                    <p className="text-base md:text-lg mb-4 md:mb-8">
                      {reason.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      {reason.items.map((item: string, index: number) => {
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
