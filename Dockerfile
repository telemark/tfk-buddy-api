###########################################################
#
# Dockerfile for tfk-buddy-api
#
###########################################################

# Setting the base to nodejs 4.2.4
FROM mhart/alpine-node:4.2.4

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Env variables
ENV SERVER_PORT 3000
ENV BUDDY_USERNAME username
ENV BUDDY_PASSWORD password
ENV BUDDY_SERVER hostmain.domain.no
ENV BUDDY_DATABASE dbMetakatalog
ENV JWT_SECRET NeverShareYourSecret

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js

