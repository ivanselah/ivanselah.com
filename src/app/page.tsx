import Typewriter from '@/components/Typewriter';
import { homeBody } from '@/config';

export default function HomePage() {
  return (
    <section className='w-full h-full flex flex-col pb-28 justify-center gap-20 items-center'>
      <Typewriter title={homeBody.title} about={homeBody.about} />
    </section>
  );
}
