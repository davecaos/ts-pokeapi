import requests from '../lib/requests';
import isHttpError from '../lib/http';
import { pokemon } from '../../config';

/**
 * Function get list Benefits of personal club
 * @returns [array]
 */
 export const  getPokemonByName = async (name:String): Promise<PokeTypes.Pokemon> => { //Promise<object> 
    const urlPokeAPI = `${<string>pokemon.api}/pokemon/${<string>name}`;
    const { data, status } = await requests.get(urlPokeAPI);

  if (isHttpError(status))
    throw { statusCode: status, message: 'Request failed' };

  return data;
};
