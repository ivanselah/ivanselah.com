import Container from '@/components/Container';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Footer() {
  return (
    <Container className="max-w-screen-xl p-4 mt-10 border-t border-gray-100 dark:border-gray-800 max-md:mt-32">
      <div className="text-center text-sm max-md:text-xs mb-3">
        Copyright © {new Date().getFullYear()} Ivanselah. All rights reserved.
      </div>
      <ThemeSwitch />
    </Container>
  );
}
