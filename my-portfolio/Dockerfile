FROM node:20-alpine
WORKDIR /ivana-portfolio
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run","dev"]