# build stage
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# install pnpm as defined in package.json
RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . ./
RUN pnpm run postinstall
RUN pnpm build

# production stage
FROM node:24-alpine
WORKDIR /app

USER node
COPY --from=build --chown=node:node /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
