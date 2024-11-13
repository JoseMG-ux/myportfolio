import { Person, AttachFile, Email, ForwardToInbox } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Link
} from '@nextui-org/react';

const ContactMe = () => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="m-10 mt-0 max-w-[100%] border-none bg-background/60 dark:bg-default-100/50 max-w-[100%] shadow-md">
        <CardHeader className="flex gap-3 items-center justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-none text-default-600">¿Tienes una idea?</h1>
          </div>
        </CardHeader>
        <CardBody className="items-center justify-center text-center text-md text-foreground/80">
          <p> Contáctame para hablar sobre tu proyecto.</p>
          <p>¡Hagámosla realidad juntos!</p>
        </CardBody>
        <CardFooter className="items-center justify-center">
          <Button
            as={Link}
            className="inline-flex items-center justify-center py-2 mb-5 px-4 md:py-1.5 text-white transition bg-sky-500 border border-sky-500 rounded-full dark:bg-sky-500 dark:text-white focus-visible:ring-sky-600/80 text-md hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 dark:hover:text-white group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:scale-105"
            color="secondary"
            href="mailto:joseutp14@gmail.com"
            rel="noreferrer"
            startContent={<ForwardToInbox />}
            target="_blank"
          >
            Contactar
          </Button>
        </CardFooter>
      </Card>
      <Modal backdrop={'blur'} isOpen={isOpen} placement="auto" size="lg" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center text-center">Enviar un mensaje</ModalHeader>
              <ModalBody>
                <Input
                  endContent={<Person className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  id="name"
                  label="Nombre"
                  name="name"
                  placeholder="Introduce tu nombre"
                  type="text"
                  // value={formik.values.name}
                  variant="bordered"
                  //onChange={formik.handleChange}
                />
                <Input
                  endContent={<Email className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  placeholder="Introduce tu correo"
                  type="email"
                  // value={formik.values.email}
                  variant="bordered"
                  //onChange={formik.handleChange}
                />
                <Input
                  endContent={<AttachFile className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  id="subject"
                  label="Asunto"
                  name="subject"
                  type="text"
                  // value={formik.values.subject}
                  variant="bordered"
                  //onChange={formik.handleChange}
                />
                <Textarea
                  className="max-w-md"
                  id="message"
                  label="Descripción"
                  name="message"
                  placeholder="Tu mensaje aqui..."
                  //value={formik.values.message}
                  //onChange={formik.handleChange}
                />
                <Button color="primary" type="submit">
                  <strong>Enviar mensaje</strong>
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  <strong>Cerrar</strong>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactMe;
