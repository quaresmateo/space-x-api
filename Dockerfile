FROM node AS builder

WORKDIR /app

COPY package.json tsconfig.json tsconfig-build.json /app/

RUN npm install

COPY src/ /app/src/

RUN ls -ltra

RUN npm run clean

RUN npm run build

