import { useEffect, useState } from 'react';
import { Link } from '@nextui-org/link';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Code, SimCardDownload } from '@mui/icons-material';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon } from '@/components/icons';

export const Navbar = () => {
  const [CVtxt, setCVtxt] = useState<string>('');

  useEffect(() => {
    const fetchPdfInBase64 = async () => {
      try {
        const response = await fetch('/myportfolio/pdf/CV.txt');
        const text = await response.text();

        setCVtxt(`data:application/pdf;base64,${text}`);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    };

    fetchPdfInBase64();
  }, []);

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
          <Link isExternal download="CV_JoseMorenoGomez.pdf" href={CVtxt} title="Descargar CV">
            <SimCardDownload className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <Link isExternal download="CV_JoseMorenoGomez.pdf" href={CVtxt} title="Descargar CV">
          <SimCardDownload className="text-default-500" />
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
