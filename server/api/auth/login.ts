import { readJson } from '../../utils/file'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    const users = await readJson('users.json')

    const user = users.find((u: any) => u.email === email)
    if (!user || !(await compare(password, user.password))) {
        throw createError({ statusCode: 401, message: 'Неверные данные' })
    }

    const token = jwt.sign({ email }, 'secret-key', { expiresIn: '1h' })
    return { token }
})
