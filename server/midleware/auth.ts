import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
    const token = getHeader(event, 'authorization')?.replace('Bearer ', '')
    if (!token) throw createError({ statusCode: 401, message: 'Нет токена' })

    try {
        const decoded = jwt.verify(token, 'secret-key')
        event.context.user = decoded
    } catch {
        throw createError({ statusCode: 401, message: 'Неверный токен' })
    }
})
