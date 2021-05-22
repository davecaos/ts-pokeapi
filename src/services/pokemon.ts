// @ts-ignore
import { getPokemonByName } from '../accesor/builder';


/**
 * Benefits controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
export const getPokemon = async (name:String): Promise<PokeTypes.Pokemon> => {
    const pokemon = await getPokemonByName(name);

   return {
       abilities: pokemon.abilities,
       forms: pokemon.forms
   } as PokeTypes.Pokemon;
};