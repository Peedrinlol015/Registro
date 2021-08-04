"use strict";
var teste = "\nFamilia Responsável: Cleosan \nDeveloper(s): ! タ SrGoogle ⇪⇩' ᶜˡᵉᵒˢᵃⁿ#2021 \nVersão: 1.0.0 (Finalizada) \nUma ideia de: SrGoogle & Jeff \nDistribuição: Cleosan Company \n\nAvaliable in GitHub\n";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Ocorreu um error interno.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tkit = require("terminal-kit");
var term = tkit.terminal;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.warn = function (message) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, term.yellow.bold('\n[Cleosan Company]').white(' - ').blue('Bot Ligado!')(' > ').red.bold.slowTyping(message, { delay: 50 })];
                    case 1: return [4 /*yield*/, term.yellow.blue('\n ========================================================================================\n\n').yellow('        Cleosan Company - O seu mundo Discord de uma meneira divertida!\n\n').white(' É um prazer que tenha escolhido-nos! Qualquer problemas estamos aqui para te ajudar! \n\n').red(' ! ').white('Servidor de Suporte: https://discord.gg/NVTG8mxMMq \n\n Este bot é simples, fizemos para aqueles que não tem condições de comprar um bot\n ou não tem conhecimento em programação para criar um.').blue('\n\n ========================================================================================\n\n').white.bold.slowTyping(teste, { delay: 50 })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 1];
                }
            });
        });
    };
    Logger.prototype.ligado = function (message) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, term.yellow.bold('\n[Cleosan Company]').white(' - ').blue('Bot Ligado!')(' > ').red.bold.slowTyping(message, { delay: 25 })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 1];
                }
            });
        });
    };
    Logger.prototype.info = function (message) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, term.yellow.bold('\n[Cleosan').white('Company]')(' > ').cyan.slowTyping(message, { delay: 25 })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 1];
                }
            });
        });
    };
    Logger.prototype.proc = function (message) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, term.yellow.bold('\n[Cleosan').white('Company]')(' > ').yellow.slowTyping(message, { delay: 25 })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 1];
                }
            });
        });
    };
    return Logger;
}());
exports.default = Logger;