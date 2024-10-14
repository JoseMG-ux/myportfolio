import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Fragment } from 'react';

const CardDevelopmentSkills = ({ title, skillStack }: { title: string; skillStack: any }) => {

  return (
    <>
      <Card className="bg-background/60 dark:bg-default-100/50 max-w-[550px]" shadow="sm">
        <CardHeader className="pt-2 flex-col items-center justify-center">
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible gap-2 flex flex-col">
          <div className="grid grid-cols-3 gap-12 p-4 m-2 ">
            {skillStack.map((skill: any, index: number) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center">
                  <skill.icon size={'3em'} />
                  <p className="text-small text-default-500 py-2 font-semibold">{skill.name}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardDevelopmentSkills;
