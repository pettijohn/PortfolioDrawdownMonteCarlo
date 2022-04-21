FROM node

WORKDIR /app
RUN npm install -g typescript 
#RUN npm install --save-dev ts-node
#RUN npm install -g assemblyscript

RUN npm install -g snowpack

# EXPOSE 9229
VOLUME [ "/app" ]
ENTRYPOINT [ "snowpack" ]