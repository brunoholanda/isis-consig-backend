# Loan Consignment API (NestJS)

A set of **NestJS APIs** for managing loan consignment operations, including CRUD functionalities for various entities. The system utilizes **TypeORM** for database management and **JWT authentication** for security.

## Features

- 🔄 **Full CRUD Operations**: Manage users, loans, and related entities.
- 🗄 **Database Integration**: Uses PostgreSQL with **TypeORM**.
- 🔑 **Authentication & Authorization**: Implemented with **Passport.js** and **JWT**.
- 📄 **Migrations Support**: Easily manage database schema changes.
- 🚀 **Modular Architecture**: Organized with NestJS modules.

## Installation

Clone the repository and install dependencies:

```sh
npm install
```

### Required Dependencies

```sh
npm install ts-node typescript @types/node --save-dev
npm i -g @nestjs/cli
npm install @nestjs/typeorm typeorm pg dotenv
npm install @nestjs/jwt passport passport-jwt passport-local bcrypt
npm install @types/passport-jwt @types/passport-local @types/bcrypt --save-dev
npm install @nestjs/passport passport passport-local passport-jwt
```

## Database Setup

Ensure you have a PostgreSQL database running and configure the **.env** file accordingly:

```
DATABASE_URL=postgres://user:password@localhost:5432/your_db_name
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Running Migrations

### Generate a new migration:
```sh
npx ts-node ./node_modules/typeorm/cli.js migration:generate ./src/migrations/CreateGovernosTable -d ./src/config/data-source.ts
```

### Run migrations:
```sh
npx ts-node ./node_modules/typeorm/cli.js migration:run -d ./src/config/data-source.ts
```

## Generating Modules, Services, and Controllers

```sh
nest g module users
nest g service users
nest g controller users
```

## Running the API

Start the NestJS server:

```sh
npm run start:dev
```

The API will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.


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


nest g module users
nest g service users
nest g controller users
