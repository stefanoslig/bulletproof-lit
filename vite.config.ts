import presetIcons from '@unocss/preset-icons'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      shortcuts: [
        { logo: 'i-logos-webcomponents w-6em h-6em transform transition-800 hover:rotate-180' },
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      inspector: false,
    }),
  ],
})