import { Avatar, Snippet, Code, Link } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { BusinessCenter, Star, Person } from '@mui/icons-material';

import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import CardWorkExperience from '@/components/card-work-experience';

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
          <span className={title({ color: 'cyan', fontStyle: 'italic', weight: 'bold' })}>Desarrollador Frontend</span>
          <div className={subtitle({ class: 'mt-4' })}>JavaScript, TypeScript, React</div>
        </div>
        <div className="flex gap-3 mb-14">
          <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
            <GithubIcon size={20} />
            LinkEdin / Jose Moreno Gomez
          </Link>
          <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
            <GithubIcon size={20} />
            GitHub / JoseMG-UX
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center  text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <BusinessCenter fontSize={'large'} />
              Experiencia laboral
            </h2>
          </div>
        </div>
        <CardWorkExperience
          content_body={
            <p>
              Actualmente, contribuyo al desarrollo y mejora del sistema de gestión, soporte y administración de FacturaciónElectrónica.
              Integro nuevas funcionalidades y un diseño atractivo para la mejora de la experiencia para los usuarios actuales. Utilizamos
              React junto con <strong>Next</strong> y Typescript para el Frontend, mientras que los servicios <strong>API REST</strong>{' '}
              están desarrollados en <strong>C# .NET</strong> y alojados en la nube de Microsoft Azure.
            </p>
          }
          content_company={'PanamaPAC Solutions and Services, S.A.'}
          content_profetion={'Desarrollador Frontend'}
          content_time={'Julio 2022 - Actualidad'}
        />
        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center  text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <Star fontSize={'large'} />
              Habilidades
            </h2>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-row justify-center">
            <h2 className="flex items-center  text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <Person fontSize={'large'} />
              Sobre mi
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
