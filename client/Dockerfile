FROM node:14-alpine

# Add user
RUN addgroup app && adduser -S -G app app

RUN mkdir -p /client && chown -R app /client

USER app

WORKDIR /client

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

ARG PORT=4100
ENV PORT ${PORT}
EXPOSE ${PORT}

CMD ["npm", "run", "serve"]
