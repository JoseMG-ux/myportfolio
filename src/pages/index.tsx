import { Avatar, Link } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { BusinessCenter, SentimentVerySatisfied, Code, MiscellaneousServices } from '@mui/icons-material';

import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import { GithubIcon, LinkedInIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import CardWorkExperience from '@/components/card-work-experience';
import CardDevelopmentSkills from '@/components/card-development-skills';
import CardProjects from '@/components/card-projects';
import AboutMe from '@/components/about-me';
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
        <div className="container">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <BusinessCenter fontSize={'medium'} />
                Experiencia laboral
              </h2>
            </div>
          </div>
          <div className="container mt-4">
            <CardWorkExperience
              content_body={
                <p className="text-medium text-foreground/80">
                  Actualmente, contribuyo al desarrollo y mejora del sistema de gestión, soporte y administración de Facturación
                  Electrónica. Integro nuevas funcionalidades y un diseño atractivo para la mejora de la experiencia para los usuarios
                  actuales. Utilizamos <strong className="underline decoration-blue-500">React</strong> junto con{' '}
                  <strong className="underline decoration-blue-500">Next</strong> y{' '}
                  <strong className="underline decoration-cyan-500">Typescript</strong> para el Frontend, mientras que los servicios{' '}
                  <strong className="underline decoration-green-500">API REST</strong> están desarrollados en
                  <strong className="underline decoration-purple-500"> C# .NET</strong> y alojados en la nube de Microsoft Azure.
                </p>
              }
              content_company={'PanamaPAC Solutions and Services, S.A.'}
              content_profetion={'Desarrollador Frontend'}
              content_time={'Julio 2022 - Actualidad'}
            />
          </div>
        </div>
        <div className="container mt-12">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <SentimentVerySatisfied fontSize={'medium'} />
                Sobre mí
              </h2>
            </div>
          </div>
          <div className="container mt-4">
            <AboutMe
              content_body={
                <p className="text-medium text-foreground/80">
                  Hola, Soy <strong className="font-bold"> José Moreno Gómez</strong>, desarrollador Web. Con +2 años de experiencia en el
                  desarrollo web. <br /> Me especializo en tecnologías como <strong className="text-cyan-400">React.js</strong>,{' '}
                  <strong className="text-yellow-400">JavaScript</strong> y <strong className="text-blue-400">TypeScript</strong> para el
                  Frontend como tambien tengo conocimientos en desarrollado Backend. <br /> Me dedico a crear soluciones de software que
                  optimicen procesos y mejoren la experiencia de los usuarios. Mi enfoque está en la innovación y la eficiencia, siempre
                  buscando ofrecer resultados que generen un impacto real.
                </p>
              }
            />
          </div>
        </div>
        <div className="container mt-12">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <Code fontSize={'medium'} />
                Proyectos
              </h2>
            </div>
          </div>
          <div className="container mt-4">
            <CardProjects
              content_body={
                <p className="text-medium text-foreground/80">
                  Junto con mi equipo desarrollamos un sistema completo para la administración y soporte de facturas electrónicas, que
                  permitió mejorar la eficiencia en la gestión de documentos fiscales y el soporte al cliente. La aplicación incluye una
                  interfaz intuitiva hecha con <strong className="text-cyan-400">React.js</strong>, <strong>Next.js</strong> y{' '}
                  <strong className="text-blue-400">TypeScript</strong>
                  para el Frontend, mientras que el backend fue implementado con servicios en C# y desplegado en Azure para garantizar
                  escalabilidad y alta disponibilidad.
                </p>
              }
            />
          </div>
        </div>
        <div className="container mt-12">
          <div className="flex">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <MiscellaneousServices fontSize={'medium'} />
                Habilidades
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mt-12">
            <CardDevelopmentSkills skillStack={My_Stack.frontend} title={'Frontend'} />
            <CardDevelopmentSkills skillStack={My_Stack.backend} title={'Backend'} />
            <CardDevelopmentSkills skillStack={My_Stack.tools} title={'Herramientas'} />
            <CardDevelopmentSkills skillStack={My_Stack.learning} title={'Aprendiendo'} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
