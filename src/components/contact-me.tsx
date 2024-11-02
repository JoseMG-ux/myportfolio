import { ForwardToInbox, Person, AttachFile, Email } from '@mui/icons-material';
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
  Textarea
} from '@nextui-org/react';
import { useFormik } from 'formik';
import axios from 'axios';

const ContactMe = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: async (request) => {
      const response = await axios.post('/api/sendMail', request);

      console.log(response);
    }
  });

  return (
    <>
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
          <Button color="secondary" href="mailto:joseutp14@gmail.com" startContent={<ForwardToInbox />} onPress={onOpen}>
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
                <form onSubmit={formik.handleSubmit}>
                  <Input
                    endContent={<Person className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Nombre"
                    placeholder="Introduce tu nombre"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    endContent={<Email className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Correo electrónico"
                    placeholder="Introduce tu correo"
                    type="email"
                    variant="bordered"
                  />
                  <Input
                    endContent={<AttachFile className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Asunto"
                    type="text"
                    variant="bordered"
                  />
                  <Textarea className="max-w-md" label="Descripción" placeholder="Tu mensaje aqui..." />
                  <Button color="primary" type="submit">
                    <strong>Enviar mensaje</strong>
                  </Button>
                </form>
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
