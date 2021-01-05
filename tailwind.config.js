module.exports = {
  purge: [],
  presets: [],
  darkMode: "class", // 'false', 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['0.85rem', { lineHeight: '1.2' }],
      sm: ['0.85rem', { lineHeight: '1.2' }],
      base: ['1rem', { lineHeight: '1.2' }],
      lg: ['1.15rem', { lineHeight: '1.2' }],
      xl: ['1.15rem', { lineHeight: '1.2' }],
      '2xl': ['1.3rem', { lineHeight: '1.4' }],
      '3xl': ['1.5rem', { lineHeight: '1.4' }],
      '4xl': ['1.75rem', { lineHeight: '1.4' }],
      '5xl': ['2rem', { lineHeight: '1.5' }],
      '6xl': ['2rem', { lineHeight: '1.5' }],
      '7xl': ['2rem', { lineHeight: '1.5' }],
      '8xl': ['2rem', { lineHeight: '1.5' }],
      '9xl': ['2rem', { lineHeight: '1.5' }],
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Roboto',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', '"Times New Roman"', 'serif'],
      mono: [
        'JetBrainsMono',
        'ui-monospace',
        'monospace',
      ],
    },
    fontWeight: {
      thin: '400',
      extralight: '400',
      light: '400',
      normal: '400',
      medium: '700',
      semibold: '700',
      bold: '700',
      extrabold: '700',
      black: '700',
    },
  },
  plugins: [],
}
