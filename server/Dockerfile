FROM node:14-alpine

# Add user
RUN addgroup app && adduser -S -G app app

RUN mkdir -p /server && chown -R app /server

USER app

WORKDIR /server

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

ARG PORT=3000
ENV PORT ${PORT}
EXPOSE ${PORT}

CMD ["npm", "start"]
