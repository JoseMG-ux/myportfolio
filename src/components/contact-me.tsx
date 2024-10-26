import { ForwardToInbox } from '@mui/icons-material';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';

const ContactMe = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex gap-3 justify-center items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-large font-semibold leading-none text-default-600">¿Tienes una idea? </h1>
        </div>
      </CardHeader>
      <CardBody className="items-center justify-center text-medium text-foreground/80">
        <p> Contáctame para hablar sobre tu proyecto. ¡Hagámosla realidad juntos!</p>
      </CardBody>
      <CardFooter className="items-center justify-center">
        <Button color="secondary" href="mailto:joseutp14@gmail.com" startContent={<ForwardToInbox />}>
          Contactar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactMe;
