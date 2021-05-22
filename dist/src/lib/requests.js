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
const node_fetch_1 = require("node-fetch");
const http_1 = require("./http");
const express_http_context_1 = require("express-http-context");
const get = (url, header) => __awaiter(void 0, void 0, void 0, function* () {
    //extract headers from httpContext
    const headers = header || express_http_context_1.default.get('header');
    //make body
    const options = {
        method: 'GET',
        headers,
    };
    //send headers and request to URL
    const response = yield node_fetch_1.default(url, options);
    const { status } = response;
    //check if the request is not success, launch a exception.
    if (status && http_1.default(status))
        return { statusText: response.statusText, status };
    const data = yield response.json();
    return { data, status };
});
const post = (url, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: 'POST',
        headers: Object.assign(Object.assign({}, headers), { 'Content-Type': 'application/json' }),
        body: JSON.stringify(body),
    };
    //send headers and request to URL
    const response = yield node_fetch_1.default(url, options);
    const { status } = response;
    //check if the request is not success, launch a exception.
    if (status && http_1.default(status))
        return { statusText: response.statusText, status };
    const data = yield response.json();
    return { data, status };
});
const patch = (url, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: 'PATCH',
        headers: Object.assign(Object.assign({}, headers), { 'Content-Type': 'application/json' }),
        body: JSON.stringify(body),
    };
    //send headers and request to URL
    const response = yield node_fetch_1.default(url, options);
    const { status } = response;
    const data = yield response.json();
    return { data, status };
});
module.exports = { get, post, patch };
//# sourceMappingURL=requests.js.map