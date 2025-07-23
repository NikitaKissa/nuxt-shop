import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

export async function readJson(file: string) {
    const path = join(process.cwd(), 'server/data', file)
    const data = await readFile(path, 'utf-8')
    return JSON.parse(data)
}

export async function writeJson(file: string, content: any) {
    const path = join(process.cwd(), 'server/data', file)
    await writeFile(path, JSON.stringify(content, null, 2), 'utf-8')
}
