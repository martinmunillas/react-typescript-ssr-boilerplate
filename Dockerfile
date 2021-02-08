FROM node:14

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN yarn

COPY [".", "/usr/src/"]

EXPOSE 4000

CMD ["yarn", "dev"]