import { Link, Avatar } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import { subtitle, title } from '@/components/primitives';
import { GithubIcon, LinkedInIcon } from '@/components/icons';

const PersonalData = () => {
  return (
    <>
      <div className="inline-block max-lg text-left justify-center">
        <div className="flex gap-4 items-center">
          <Avatar className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </div>
        <span className={title()}>Hola,&nbsp;</span>
        <span className={title()}>soy José Moreno Gómez</span>
        <br />
        <span className={title({ color: 'violet', fontStyle: 'italic', weight: 'bold', class: 'pr-1' })}>Desarrollador Frontend</span>
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
    </>
  );
};

export default PersonalData;
