FROM node:alpine as builder
WORKDIR '/app'
COPY . .
RUN npm i
RUN npm run build:prod

FROM nginx
EXPOSE 3000
COPY /apps/web/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/apps/web /usr/share/nginx/html