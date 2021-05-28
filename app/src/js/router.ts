export class Router {
    private routes: IRoute[] = [];

    private static INSTANCE: Router;

    private currentRoute: IRoute | null = null;

    private history: History = window.history;

    constructor() {
        if (Router && Router.INSTANCE) {
            return Router.INSTANCE;
        }
        this.currentRoute = null;
        Router.INSTANCE = this;
    }

    public use(path: string, cb: () => void): Router {
        const data: IRoute = {
            path,
            cb
        };
        this.routes.push(data);

        return this;
    }

    public start(): void {
        window.onpopstate = (event: PopStateEvent) => {
            const el = event.currentTarget as typeof window;
            if (!el) {
                return;
            }
            this.onRoute(Router.trimPath(el.location.pathname));
        };
        this.initAllClickHandler();
        this.onRoute(Router.trimPath(window.location.pathname));
    }

    private initAllClickHandler(): void {
        document.addEventListener('click', this.clickCb.bind(this), false);
    }

    private clickCb(e: Event): void {
        const el = e.target as HTMLElement;
        const link = el.closest('a');
        if (!link) {
            return;
        }
        if (el.tagName === 'A' || (link && link.tagName === 'A')) {
            const href = el.getAttribute('href') || link.getAttribute('href');
            if (!href) {
                return;
            }
            e.preventDefault();
            this.go(href);
        }
    }

    private onRoute(pathname: string): void {
        let route = this.getRoute(pathname);
        if (!route) {
            route = this.getRoute('/not-found');
        }
        if (!route) {
            return;
        }
        if (this.currentRoute !== route) {
            this.currentRoute = route;
            this.currentRoute.cb();
        }
    }

    static trimPath(path: string): string {
        const paramsStartIndex = path.indexOf('?');

        return paramsStartIndex > 0 ? path.substring(paramsStartIndex, -path.length) : path;
    }

    public go(pathname: string): void {
        this.history.pushState({}, '', pathname);
        this.onRoute(Router.trimPath(pathname));
    }

    public back(): void {
        this.history.back();
    }

    public forward(): void {
        this.history.forward();
    }

    private getRoute(pathname: string): IRoute | undefined {
        return this.routes.find((route) => route.path === pathname);
    }
}

interface IRoute {
    path: string;
    cb: () => void;
}
