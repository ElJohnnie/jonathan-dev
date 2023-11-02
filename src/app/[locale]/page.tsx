'use client';
 
import {useTranslations} from 'next-intl';
 
export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="mx-auto flex flex-1 items-center overflow-hidden px-0 py-nav-height-desktop selection:bg-green selection:text-black lg:w-full lg:max-w-3xl">
    <div className="bg-background p-5 text-base text-secondary">
      <h1 className="mb-5 animate-textclip bg-linear-dracula bg-[length:200%] bg-clip-text px-3 text-5xl font-bold text-transparent md:text-6xl">
        Teste
      </h1>
      <h2 className="mb-0 mt-5 px-3 text-xl font-semibold text-primary lg:text-2xl">
       Teste
      </h2>
    </div>
  </main>
  );
}