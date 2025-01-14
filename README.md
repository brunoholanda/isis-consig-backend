Possiveis instalacoes
npm install ts-node typescript @types/node --save-dev
npm i -g @nestjs/cli
npm install @nestjs/typeorm typeorm pg dotenv
npm install @nestjs/jwt passport passport-jwt passport-local bcrypt
npm install @types/passport-jwt @types/passport-local @types/bcrypt --save-dev
npm install @nestjs/passport passport passport-local passport-jwt


Criar migration 
 
 npx ts-node ./node_modules/typeorm/cli.js migration:generate ./src/migrations/CreateGovernosTable -d ./src/config/data-source.ts

 rodar migration
 npx ts-node ./node_modules/typeorm/cli.js migration:run -d ./src/config/data-source.ts
