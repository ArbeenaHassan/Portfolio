import crypto from 'node:crypto'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Polyfill crypto.hash for Node.js < 20.12 (e.g. Node 20.11.0)
if (!crypto.hash) {
  crypto.hash = (algorithm, data, outputEncoding) => {
    return crypto.createHash(algorithm).update(data).digest(outputEncoding)
  }
}

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: 'localhost',
    hmr: {
      protocol: 'ws',         // Force WebSocket protocol
      host: 'localhost',      // Match the host
      port: 5174,             // Match your dev port
      overlay: false          // Disable red error overlay
    }
  }
})
