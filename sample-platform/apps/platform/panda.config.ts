import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{ts,tsx}'
  ],
  importMap: '@sample-platform/styled',
  outdir: 'styled-system',
  jsxFramework: 'react'
})