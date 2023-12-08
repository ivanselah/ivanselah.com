import * as yup from 'yup';
import { sendEmail } from '@/service/email';

const bodySchema = yup.object().shape({
  fromEmail: yup.string().email().required(),
  title: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: 'Invalid format, Please try check.' }), { status: 400 });
  }
  return sendEmail(body) //
    .then(() => {
      return new Response(JSON.stringify({ message: '메일을 성공적으로 보냈습니다.' }), { status: 200 });
    })
    .catch(() => {
      return new Response(JSON.stringify({ message: '메일 전송에 실패하였습니다.' }), { status: 500 });
    });
}
