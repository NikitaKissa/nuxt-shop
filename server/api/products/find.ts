import {readJson} from '../../utils/file'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const idsParam = query.ids

    if (!idsParam) {
        throw createError({ statusCode: 400, message: 'Не переданы ID' })
    }

    // Преобразуем в массив чисел
    const ids = Array.isArray(idsParam)
        ? idsParam.flatMap(id => id.split(',').map(Number))
        : idsParam.split(',').map(Number)

    const products = await readJson('products.json')

    return products.filter((product: any) => ids.includes(product.id))
})
