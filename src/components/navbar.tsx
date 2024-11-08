import { Link } from '@nextui-org/link';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Code, SimCardDownload } from '@mui/icons-material';

import { pdfInBase64 } from '../../public/pdf/CV';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon } from '@/components/icons';

export const Navbar = () => {
  const base64PDF = `data:application/pdf;base64,${pdfInBase64}`;

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/myportfolio/">
            <Code />
            <p className="font-bold text-inherit">Mi Portafolio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full " justify="end">
        <NavbarItem className="hidden sm:flex gap-3">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <Link isExternal download="CV_JoseMorenoGomez.pdf" href={base64PDF} title="Descargar CV">
            <SimCardDownload className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <Link isExternal download="CV_JoseMorenoGomez.pdf" href={base64PDF} title="Descargar CV">
          <SimCardDownload className="text-default-500" />
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
