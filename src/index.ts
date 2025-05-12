import { readFile } from 'node:fs/promises';

async function main() {
  const packageJson = await readFile('./package.json', 'utf-8');
  console.log('Package name:', JSON.parse(packageJson).name);
}

main().catch(console.error);
