import Link from 'next/link';
import { homeBody } from '@/config';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <Link href='/' className='text-2xl'>
        {`<${homeBody.name} />`}
      </Link>
      <nav className='flex gap-4'>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
        <Link className='flex text-2xl items-center' href={homeBody.github} target='_blank'>
          <FaGithub />
        </Link>
      </nav>
    </header>
  );
}
