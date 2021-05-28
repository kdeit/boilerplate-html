import './assets';
import {initAnimation} from './js/animation';
import {Router} from './js/router';

declare global {
    interface Window {
        $Router: Router;
    }
}

const enablePage = (pageName: string) => {
    const appWrapper = document.getElementById('app');
    if (!appWrapper) {
        return;
    }
    appWrapper.classList.remove(...appWrapper.classList);
    appWrapper.classList.add(pageName);
};

window.$Router = new Router();
window.$Router.use('/', () => enablePage('index'));
window.$Router.use('/about', () => enablePage('about'));
window.$Router.use('/portfolio', () => enablePage('portfolio'));
window.$Router.use('/not-found', () => enablePage('notFound'));
window.$Router.start();

initAnimation();
