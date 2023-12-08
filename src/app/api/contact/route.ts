import * as yup from 'yup';

const bodySchema = yup.object().shape({
  fromEmail: yup.string().email().required(),
  title: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  if (!bodySchema.isValidSync(request.body)) {
    return new Response('Invalid format, Please try check.', { status: 400 });
  }
  const { fromEmail, title, message } = request.body;
}
