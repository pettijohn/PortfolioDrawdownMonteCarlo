docker build -f Dockerfile-build -t tsc .
#docker run -it --rm -v=/mnt/c/Code/Portfolio:/code tsc tsc --target es2022 /app/main.ts 
docker run -it --rm -v=${PWD}:/code tsc tsc --build --verbose
docker run -it --rm -v=${PWD}:/code tsc npx webpack