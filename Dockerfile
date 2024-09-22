ARG API_KEY
FROM node:latest AS build-stage
ARG API_KEY

ENV NODE_ENV=development
ENV VITE_APP_APPINSIGHTS_INSTRUMENTATIONKEY=$API_KEY

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH=/app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json", "./"]
COPY ./vite.config.js /app/vite.config.js
COPY ./index.html /app/index.html

RUN npm install --legacy-peer-deps 

# add app
COPY . .

# start app
RUN npm run build

FROM nginx:latest AS production
ENV NODE_ENV=production

ARG API_KEY
ARG TZ=Europe/London
ENV VITE_APP_APPINSIGHTS_INSTRUMENTATIONKEY=$API_KEY
ENV TZ=$TZ
ENV DEBIAN_FRONTEND=noninteractive
#RUN -ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure tzdata

# Add your nginx.conf
# RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d/
# Copy built assets from builder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
