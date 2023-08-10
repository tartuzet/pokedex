import  {POKEMON_TYPE_COLORS}  from './constans'

// console.log(POKEMON_TYPE_COLORS)

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]


export default getColorByPokemonType


