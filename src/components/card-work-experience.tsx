import { Card, CardBody } from '@nextui-org/react';
import { ReactNode } from 'react';

const CardWorkExperience = ({
  content_profetion,
  content_company,
  content_time,
  content_body
}: {
  content_profetion: string;
  content_company: string;
  content_time: string;
  content_body: ReactNode;
}) => {
  return (
    <>
      <Card className="ml-12 mb-5 border-none bg-background/60 dark:bg-default-100/50 max-w-[100%] shadow-md">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-9 md:gap-4 items-center">
            <div className="relative col-span-6 md:col-span-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-large">{content_profetion}</h3>
                  <h3 className="font-semibold text-foreground/90">{content_company}</h3>
                  <p className="text-small text-foreground/80">{content_time}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">{content_body}</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardWorkExperience;
