const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
  return !birthdate
  ? new Error('Birthdate is required')
  : getAgePlugin(birthdate);
}

module.exports = {
  getAge
}