import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['../ui/src/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react'
})