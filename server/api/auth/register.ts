import { readJson, writeJson } from '../../utils/file'
import { hash } from 'bcryptjs'
export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    const users = await readJson('users.json')

    if (users.find((u: any) => u.email === email)) {
        throw createError({ statusCode: 400, message: 'Пользователь уже существует' })
    }

    const hashed = await hash(password, 10)
    users.push({ email, password: hashed })

    await writeJson('users.json', users)

    return { message: 'Регистрация успешна' }
})
