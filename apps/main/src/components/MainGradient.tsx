import { GradientBackground } from 'react-gradient-animation';

import NoSSR from '@/components/NoSSR';

export function MainGradient() {
  return (
    <NoSSR>
      <GradientBackground
        count={30}
        size={{ min: 500, max: 700, pulse: 0.6 }}
        speed={{ x: { min: 0.5, max: 0.8 }, y: { min: 0.5, max: 0.6 } }}
        colors={{
          background: '#111111',
          particles: ['#2c3e50', '#34495e', '#4a637c'],
        }}
        blending="overlay"
        opacity={{ center: 0.5, edge: 0 }}
        skew={0}
        style={{ opacity: 0.8 }}
      />
    </NoSSR>
  );
}
