import './index-5ded1fe5.js';
import { A as ActiveRouter } from './active-router-2f414d94.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
