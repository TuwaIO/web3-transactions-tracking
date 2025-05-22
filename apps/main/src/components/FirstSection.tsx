'use client';

import { NetworkComposition } from '@/components/3D/NetworkComposition';
import { MainGradient } from '@/components/MainGradient';

export function FirstSection() {
  return (
    <section className="relative">
      <MainGradient />
      <NetworkComposition />
      <div className="container mx-auto sm:h-[calc(100dvh-100px)] flex justify-between items-center sm:flex-row flex-col">
        <div className="p-2 text-white">
          <h1 className="text-6xl font-extrabold mb-6">Track Web3 transactions effortlessly</h1>
          <h2 className="text-2xl">
            Focus on developing your dApp, and our packages will take care of real-time transaction tracking.
          </h2>
        </div>
        <div className="flex items-center justify-center p-2 sm:w-4xl w-full">
          <img src="https://placehold.co/600x400" alt="Transactions tracking" />
        </div>
      </div>
    </section>
  );
}
