"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonByName = void 0;
const requests_1 = require("../lib/requests");
const http_1 = require("../lib/http");
const config_1 = require("../../config");
/**
 * Function get list Benefits of personal club
 * @returns [array]
 */
const getPokemonByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const urlPokeAPI = `${config_1.pokemon.api}/pokemon/${name}`;
    const { data, status } = yield requests_1.default.get(urlPokeAPI);
    if (http_1.default(status))
        throw { statusCode: status, message: 'Request failed' };
    return data;
});
exports.getPokemonByName = getPokemonByName;
//# sourceMappingURL=builder.js.map