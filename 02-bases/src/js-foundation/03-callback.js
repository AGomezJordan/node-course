const users = [
  {
    id: 1,
    name: 'pepe'
  },
  {
    id: 2,
    name: 'juan'
  },
]

getUserById = (id, callback) => {
  const user = users.find(({ id: userId }) => userId === id);
  return !user ? callback(`User not found with id ${id}`, null) : callback(null, user);
}

module.exports = {
  getUserById
}