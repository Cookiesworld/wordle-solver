FROM node:latest as builder
ENV NODE_ENV production

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production

# add app
COPY . .

# start app
CMD ["npm", "run build"]

FROM node:latest as production
ENV NODE_ENV production
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]