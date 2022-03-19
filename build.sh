docker build -f Dockerfile-build -t tsc .
#docker run -it --rm -v=/mnt/c/Code/Portfolio:/code tsc tsc --target es2022 /app/main.ts 

#Install new package and save it to the project, not just the global stuff built into the image
#docker run -it --rm -v=${PWD}:/code tsc npm install ts-node --save-dev

# docker run -it --rm -v=${PWD}:/code tsc tsc --build --verbose
docker run -it --rm -v=${PWD}:/code tsc npx webpack