const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo')
logger.error('Error producido')




// const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(1).then((pokemon) => { console.log(pokemon)})
//   .catch((e) => { console.log(e)})
//   .finally(() => console.log('Fin'));

  

// ! Referencia a la function factory y uso

// const { getUUID, getAge } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const alvaro = makePerson({ name: 'Alvaro', birthdate: '1999-02-15' });
// console.log(alvaro)


