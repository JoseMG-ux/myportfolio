const nodemailer = require('nodemailer');

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { email, subject, name, message } = req.body;
    console.log(req.body);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'joseutp14@gmail.com',
        pass: 'FrontendMGJT-UXDev*'
      }
    });

    // const mailOptions = {
    //   from: email,
    //   to: 'dsovirox@gmail.com',
    //   subject: `${subject} - ${name}`,
    //   text: message
    // };

    // try {
    //   await transporter.sendMail(mailOptions);
    //   res.status(200).json({ message: 'Correo enviado con éxito' });
    // } catch (error) {
    //   res.status(500).json({ error: 'Error al enviar el correo' });
    // }
  } else {
    res.status(405).json({ message: 'Metodo no permitido' });
  }
}
