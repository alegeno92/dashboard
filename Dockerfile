FROM node:latest
RUN npm install -g @angular/cli
COPY . ./dashboard
WORKDIR ./dashboard
RUN npm install
RUN ng build --prod
