// pages/index.tsx
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://huaren.live/';
  }, []);

  return (
    <div>
      <p>Redirecting to https://huaren.live...</p>
    </div>
  );
}
