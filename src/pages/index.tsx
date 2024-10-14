import { Avatar, Snippet, Code, Link } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { BusinessCenter, SentimentVerySatisfied, IntegrationInstructions } from '@mui/icons-material';

import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import { GithubIcon, LinkedInIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import CardWorkExperience from '@/components/card-work-experience';
import CardDevelopmentSkills from '@/components/card-development-skills';
import { My_Stack } from '@/utils/icon-stack';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-lg text-left justify-center">
          <div className="flex gap-4 items-center">
            <Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </div>
          <span className={title()}>Hola,&nbsp;</span>
          <span className={title()}>soy José Moreno Gómez</span>
          <br />
          <span className={title({ color: 'violet', fontStyle: 'italic', weight: 'bold' })}>Desarrollador Frontend</span>
          <div className={subtitle({ class: 'mt-4' })}>JavaScript, TypeScript, React</div>
        </div>
        <div className="flex gap-3 mb-14">
          <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
            <LinkedInIcon />
            LinkEdin / Jose Moreno Gomez
          </Link>
          <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
            <GithubIcon size={20} />
            GitHub / JoseMG-UX
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
              <BusinessCenter fontSize={'medium'} />
              Experiencia laboral
            </h2>
          </div>
        </div>
        <div className="container">
          <CardWorkExperience
            content_body={
              <p className="text-medium text-foreground/80">
                Actualmente, contribuyo al desarrollo y mejora del sistema de gestión, soporte y administración de Facturación Electrónica.
                Integro nuevas funcionalidades y un diseño atractivo para la mejora de la experiencia para los usuarios actuales. Utilizamos
                React junto con <strong className="underline decoration-pink-500">Next</strong> y Typescript para el Frontend, mientras que
                los servicios <strong className="underline decoration-pink-500">API REST</strong> están desarrollados en
                <strong className="underline decoration-pink-500"> C# .NET</strong> y alojados en la nube de Microsoft Azure.
              </p>
            }
            content_company={'PanamaPAC Solutions and Services, S.A.'}
            content_profetion={'Desarrollador Frontend'}
            content_time={'Julio 2022 - Actualidad'}
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
              <IntegrationInstructions fontSize={'medium'} />
              Habilidades
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 border-dashed border-white border-2">
          <CardDevelopmentSkills skillStack={My_Stack.frontend} title={'Frontend'} />
          <CardDevelopmentSkills skillStack={My_Stack.backend} title={'Backend'} />
          <CardDevelopmentSkills skillStack={My_Stack.tools} title={'Herramientas'} />
          <CardDevelopmentSkills skillStack={My_Stack.learning} title={'Aprendiendo'} />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
              <SentimentVerySatisfied fontSize={'medium'} />
              Sobre mí
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
