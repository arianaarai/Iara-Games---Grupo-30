import { cp, mkdir, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

await cp(join(root, 'index.html'), join(dist, 'index.html'))
await cp(join(root, 'assets'), join(dist, 'assets'), { recursive: true })

await mkdir(join(dist, 'pages'), { recursive: true })
const pages = await readdir(join(root, 'pages'))
for (const file of pages) {
  if (!file.endsWith('.html') || file === 'loja.html') continue
  await cp(join(root, 'pages', file), join(dist, 'pages', file))
}
