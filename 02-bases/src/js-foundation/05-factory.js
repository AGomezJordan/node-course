// Patron adaptador

const buildMakePerson = ({ getUUID, getAge}) => {
  return buildPerson = ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    }
  }
}

module.exports = {
  buildMakePerson
}