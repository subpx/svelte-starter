import StateRouter from 'abstract-state-router';
import makeSvelteStateRenderer from 'svelte-state-renderer';

const renderer = makeSvelteStateRenderer();
const stateRouter = StateRouter(renderer, document.querySelector('app'));

export default stateRouter;
