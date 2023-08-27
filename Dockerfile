ARG API_KEY
FROM node:latest as build-stage
ARG API_KEY

ENV NODE_ENV development
ENV REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY $API_KEY

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json", "./"]

RUN npm install --legacy-peer-deps --omit=dev

# add app
COPY . .

# start app
RUN npm run build

FROM nginx:latest as production
ENV NODE_ENV production

ARG TZ=Europe/London
ENV REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY $API_KEY
ENV TZ=$TZ
ENV DEBIAN_FRONTEND=noninteractive
#RUN -ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure tzdata

# Add your nginx.conf
# RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d/
# Copy built assets from builder
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
