import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <Link href='/' className='text-2xl'>
        Ivanselah
      </Link>
      <nav className='flex gap-4'>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
