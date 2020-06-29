# Use latest node version 8.x
FROM node:8.10.0

MAINTAINER Kunal Tawatia <tawatia.1@iitj.ac.in>

# create app directory in container
RUN mkdir -p /server

# set /server directory as default working directory
WORKDIR /server

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json yarn.lock /server/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

# copy all file from current dir to /server in container
COPY . /server/

# expose port 4040
EXPOSE 4040

# cmd to start service
CMD [ "yarn", "start" ]
