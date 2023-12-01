'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string },
}) {
  useEffect(() => {
    // window.location.href = '/';
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      {error && <p>{error.message}</p>}
    </div>
  );
}
