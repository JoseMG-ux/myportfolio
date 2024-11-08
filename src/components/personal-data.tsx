import { Link, Avatar, Chip } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { TypeAnimation } from 'react-type-animation';

import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import { GithubIcon, LinkedInIcon } from '@/components/icons';

const PersonalData = () => {
  return (
    <>
      <div className="m-5 inline-block max-lg text-left justify-center">
        <div className="flex gap-5 items-center mb-5">
          <Avatar
            isBordered
            className="w-20 h-20 text-large"
            src="https://media.licdn.com/dms/image/v2/D4E03AQE-1SY9-SI55w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727794372366?e=1735776000&v=beta&t=zNA5yyFFQqDNxCNwNE-wN_F4ME2MGaVMKeGp_NACXFI"
          />
          <Chip
            classNames={{
              base: 'bg-gradient-to-br from-indigo-500 to-pink-400 border-white/50 shadow-pink-300/50',
              content: 'drop-shadow shadow-black text-white'
            }}
            size="md"
            variant="shadow"
          >
            Disponible para trabajar
          </Chip>
        </div>
        <div>
          <span className={title()}>Hola,&nbsp;</span>
          <span className={title()}>soy José Moreno Gómez</span>
          <br />
          <span>
            <TypeAnimation
              className={title({ color: 'violet', fontStyle: 'italic', weight: 'bold', class: 'pr-1' })}
              cursor={true}
              repeat={Infinity}
              sequence={['Desarrollador Frontend', 1000]}
              wrapper="span"
            />
          </span>
        </div>
        <div className={subtitle({ class: 'mt-4' })}>JavaScript, TypeScript, React</div>
      </div>
      <div className="flex flex-wrap gap-3 mb-5 mr-5 ml-5">
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.linkedin}>
          <LinkedInIcon />
          LinkEdin / Jose Moreno Gomez
        </Link>
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub / JoseMG-UX
        </Link>
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          Descargar CV
        </Link>
      </div>
    </>
  );
};

export default PersonalData;
