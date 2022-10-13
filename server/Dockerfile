FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn
COPY . .
EXPOSE 5000
USER node
CMD ["yarn", "dev"]
