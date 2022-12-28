import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'text-link': 'op85 hoverable:(underline op100)',
      'translate-center': 'translate-x--1/2 translate-y--1/2',
    },
    [/^hoverable[:-](.+)$/, ([, c]) => `hover:${c} focus-visible:${c}`],
  ],
  rules: [
    [/^grid-area-(.+)$/, ([, c]) => ({ 'grid-area': c })],
  ],
});
