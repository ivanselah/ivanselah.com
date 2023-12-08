import { EmailContactData } from '@/service/email';

export async function sendContactEmail(emailContactData: EmailContactData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailContactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Uknown Server Error');
  }
  return data;
}
