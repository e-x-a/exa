# Need jessie to install dependencies
FROM node:lts-buster-slim

USER root

# Create the development environment
RUN mkdir /www
RUN chmod 777 /www

WORKDIR /www

# Copy files
COPY package*.json ./

RUN apt-get update && apt-get install -y git

# Install wget & dependencies needed to install Chrome (next step)
RUN apt-get update && apt-get install -y --no-install-recommends gnupg2 ca-certificates curl wget && rm -rf /var/lib/apt/lists/*

# Install Chromium dev & dependencies
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Point puppeteer to the Chromium just installed
ENV PUPPETEER_EXECUTABLE_PATH '/usr/bin/google-chrome-unstable'

# Set entry point
#ENTRYPOINT ["npm"]

CMD ["/bin/bash"]
