export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Mi portafolio',
  description: 'José Moreno Gómez / Desarrollador Web',
  navItems: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Docs',
      href: '/docs'
    },
    {
      label: 'Pricing',
      href: '/pricing'
    },
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'About',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile'
    },
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Team',
      href: '/team'
    },
    {
      label: 'Calendar',
      href: '/calendar'
    },
    {
      label: 'Settings',
      href: '/settings'
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback'
    },
    {
      label: 'Logout',
      href: '/logout'
    }
  ],
  links: {
    github: 'https://github.com/JoseMG-ux',
    linkedin: 'https://www.linkedin.com/in/jose-moreno-gomez-5009441a6/',
    docs: 'https://nextui-docs-v2.vercel.app',
    sponsor: 'https://patreon.com/jrgarciadev'
  }
};
