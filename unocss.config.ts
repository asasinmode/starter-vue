import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
    },
    [/^hoverable[:-](.+)$/, ([, c]) => `hover:${c} focus-visible:${c}`],
  ],
  rules: [
    [/^grid-area-(.+)$/, ([, c]) => ({ 'grid-area': c })],
  ],
})
