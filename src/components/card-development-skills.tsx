import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Fragment } from 'react';

const CardDevelopmentSkills = ({ title, skillStack }: { title: string; skillStack: any }) => {
  return (
    <>
      <Card className="bg-background/60 dark:bg-default-100/50 size-96 shadow-md">
        <CardHeader className="flex-col items-center justify-center">
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible gap-2 flex flex-col">
          <div className=" grid grid-cols-3 gap-12 p-4 m-2">
            {skillStack.map((skill: any, index: number) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-200 duration-300">
                  <skill.icon size={'3em'} />
                  <p className="text-small w-20 text-center font-semibold text-default-500 mt-2">{skill.name}</p>
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
