FROM buildkite/puppeteer

COPY . /app

RUN cd /app && npm install

ENTRYPOINT sh -c "cd /app && npm start"