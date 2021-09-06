FROM node:14.15.1
WORKDIR /app
RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]
RUN npm i
COPY . ./
CMD ["npm", "run", "dev"]