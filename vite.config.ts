import presetIcons from '@unocss/preset-icons';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      shortcuts: [
        {
          logo: 'i-logos-webcomponents w-6em h-6em transform transition-800 hover:rotate-180',
        },
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' },
      ],
      theme: {
        colors: {
          border: 'hsl(214.3 31.8% 91.4%)',
          input: 'hsl(214.3 31.8% 91.4%)',
          ring: 'hsl(222.2 84% 4.9%)',
          background: 'hsl(0 0% 100%)',
          foreground: 'hsl(222.2 84% 4.9%)',
          primary: {
            DEFAULT: 'hsl(222.2 47.4% 11.2%)',
            foreground: 'hsl(210 40% 98%)',
          },
          secondary: {
            DEFAULT: 'hsl(210 40% 96.1%)',
            foreground: 'hsl(222.2 47.4% 11.2%)',
          },
          accent: {
            DEFAULT: 'hsl(210 40% 96.1%)',
            foreground: 'hsl(222.2 47.4% 11.2%)',
          },
        },
        borderRadius: {
          lg: '0.5rem',
          md: 'calc(0.5rem - 2px)',
          sm: 'calc(0.5rem - 4px)',
        },
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      inspector: false,
    }),
  ],
});
