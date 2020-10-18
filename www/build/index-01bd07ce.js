import { A as ActiveRouter } from './active-router-2f414d94.js';
import './match-path-760e1797.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

export { injectHistory as i };
