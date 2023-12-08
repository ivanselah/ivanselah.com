import nodemailer from 'nodemailer';

export type EmailContactData = {
  fromEmail: string;
  title: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ fromEmail, title, message }: EmailContactData) {
  const emailData = {
    to: process.env.AUTH_USER,
    title,
    fromEmail,
    html: `
              <h1>[ivanselah.com]${title}</h1>
              <div>${message}</div>
              <br/>
              <p>보낸사람: ${fromEmail}</p>
          `,
  };
  return transporter.sendMail(emailData);
}
