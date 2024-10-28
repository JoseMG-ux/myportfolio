import { Card, CardBody } from '@nextui-org/react';
import { ReactNode } from 'react';

const AboutMe = ({ content_body }: { content_body: ReactNode }) => {
  return (
    <Card className="ml-12 border-none bg-background/60 dark:bg-default-100/50 max-w-[100%] shadow-md">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-8 gap-9 md:gap-4 items-center">
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">{content_body}</div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutMe;
