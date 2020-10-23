# setup package.json
$ npm init -y

# install typescript (as dev dependency)
$ npm i -D typescript
$ npx tsc -v

# generate a tsconfig.json file
$ npx tsc --init

# start compiler in watch mode
$ npx tsc --watch

# to run *.ts files directly, install ts-node
$ npm i -D ts-node
# test: run some file
$ npx ts-node src/index.ts

# setup tslint and @types/node
$ npm i -D tslint @types/node
$ npx tslint --init