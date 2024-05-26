import './scss/styles.scss';

import { APIWebLarek } from './components/APIWebLarek';         // Импорт API онлайн-магазина
import { EventEmitter } from './components/base/events';        // Импорт класса EventEmitter
import { API_URL, CDN_URL } from './utils/constants';           // Импорт констант API и CDN



const events = new EventEmitter();              // Создание экземпляра класса EventEmitter
const api = new APIWebLarek(CDN_URL,API_URL);   // Создание экземпляра класса APIWebLarek с передачей констант API и CDN


