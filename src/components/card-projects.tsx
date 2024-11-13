import { ReactNode } from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';
import { Box, ImageList, ImageListItem } from '@mui/material';

import img1 from '/assets/images/pac_img1.png';
import img2 from '/assets/images/pac_img2.png';
import img3 from '/assets/images/pac_img3.png';

const itemData = [
  {
    img: img1,
    title: 'Image_1'
  },
  {
    img: img2,
    title: 'Image_2'
  },
  {
    img: img3,
    title: 'Image_3'
  }
];

const CardProjects = ({ content_body }: { content_body: ReactNode }) => {
  return (
    <Card className="ml-12 border-none bg-background/60 dark:bg-default-100/50 max-w-[100%]" shadow="sm">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Box sx={{ height: 300, overflowY: 'scroll', overflowX: 'none' }}>
              <ImageList cols={1} gap={8} variant="masonry">
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <Image
                      alt={item.title}
                      className="object-cover"
                      loading="eager"
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/100">Sistema de Soporte y Administración de Facturas Electrónicas </h3>
                <h1 className="text-small text-foreground/80">
                  <strong>Tecnologías:</strong> React, TypeScript, Next.js, C#
                </h1>
              </div>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 m-5">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">{content_body}</div>
              </div>
              <h1 className="text-medium font-medium mt-2">Caracteristicas: </h1>
              <ul className="list-inside list-disc text-foreground/90">
                <li>Gestión automatizada de facturas electrónicas.</li>
                <li>Generación automática de reportes.</li>
                <li>Soporte en tiempo real para resolver incidencias.</li>
                <li>Despliegue en la nube con Azure, garantizando disponibilidad y seguridad.</li>
              </ul>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProjects;
