FROM node:16.18.0

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json /myapp/package.json
COPY yarn.lock /myapp/yarn.lock

RUN yarn install

COPY . /myapp

RUN yarn build

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
ENTRYPOINT ["entrypoint.sh"]
