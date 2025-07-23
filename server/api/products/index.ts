import { readJson } from '../../utils/file'

export default defineEventHandler(async () => {
    const products = await readJson('products.json')
    return products
})
