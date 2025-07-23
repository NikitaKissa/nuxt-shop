import { readJson } from '../../utils/file'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const idParam = query.id

    if (!idParam) {
        throw createError({ statusCode: 400, message: 'ID is not defined.' })
    }

    const id = Number(idParam)
    if (isNaN(id)) {
        throw createError({ statusCode: 400, message: 'ID must be a number.' })
    }

    const products = await readJson('products.json')
    const product = products.find((p: any) => p.id === id)

    if (!product) {
        throw createError({ statusCode: 404, message: `Product with ID ${id} not found` })
    }

    return product
})
