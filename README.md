# KDEIT

Portfolio for frontend developer

## URL
 https://kdeit.ru

<br/>

---

## Установка и запуск
1. Clone repo
2. Run `yarn`
3. Run app `yarn start`
4. Watch

## Code style

### Main params:
-   IDE config `.editorconfig`
-   Indent `4` (except *.json - 2)
-   Work window width `120` symbols
-   Empty string on file end required (except `md`)
-   End of string `lf`

### Code format:
-   Use __*Prettier*__ with config `.prettierrc.json`

### Code linter:
-   Use __*ESLint*__ with config `.eslintrc.json` and excepts in `eslintignore`
-   Base config =  __*AirBnB*__ with additional *typescript*.
-   Format errors *Prettier* show like `warning`
-   Validation for files: `js, ts, jsx, tsx` in all project
-   Commands:
    ```bash
    # Validation run
    yarn lint:verify

    # Validation run with fix
    yarn lint:fix
    ```
### Style validation:
-   Use __*Stylelint*__ with config `.stylelintrc.json`
-   Validatition for files: `scss` in folder `app/src`
-   Commands:
    ```bash
    # Validation run
    yarn slint:verify

    # Validation run with fix
    yarn slint:fix
    ```

### Before commit validation:
-   `pre-commit` Abort commit on any error.

    Run:
    1. __ESLint__
    Run for resolve `yarn lint:fix`
    2. __Stylelint__
    Run for resolve `yarn slint:fix`
    3. __yarn check__
    Run for resolve `yarn yarn:fix`


## Local server
Use __*ExpressJS*__ for local server run

Default port: `3000`.
Change environment variables  `PORT` for change

Commands:
```bash
# Server build
yarn server:build

# Server build with code change watcher (for development)
yarn server:serve

# Server run
yarn server:run

# Remove old version
yarn server:clear

# TS compile
yarn server:ts:compile

# TS compile with code change watcher (for development)
yarn server:ts:watch

# Run server with code change watcher in *.js (for development)
yarn server:nodemon
```

## Additionals commands `package.json`
```bash
# Analysis webpack
yarn app:analyze
```

### Docker
```bash
# Image build
yarn docker:build

# Image run
yarn docker:run

# Push image to Heroku (local copy needed)
yarn docker:heroku
```

### Heroku
`yarn start` - Run service

