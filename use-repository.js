import DBLocal from 'db-local'
import crypto from 'crypto'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true }
})

export class UserRepository {
  static create ({ username, password }) {
    if (typeof password !== 'string') throw new Error('password deberia ser un string')

    if (password.length < 6) throw new Error('password deberia tener minimo 6 caracteres')

    const user = User.findOne({ username })

    if (user) throw new Error('el usuaria ya existe')

    const id = crypto.randomUUID()

    User.create({
      _id: id,
      username,
      password
    })

    return id
  }

  static login ({ username, password }) {}
}
