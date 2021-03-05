FROM node:14-slim as prepare
WORKDIR /srv
ENV NODE_ENV=production
COPY package.json yarn.lock /srv/
RUN yarn install --frozen-lockfile

FROM prepare as build
COPY . /srv
RUN yarn install --production=false && yarn build

FROM prepare
COPY --from=build /srv/dist ./dist
CMD ["yarn", "start"]
