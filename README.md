# Job Board Backend

## Overview
A simple backend service for managing job postings using Node.js, TypeScript, and MySQL.

## Features
- CRUD operations for job postings
- MySQL database integration
- Clean and maintainable code

## Prerequisites
Ensure the following are installed on your machine:
Node.js (version >= 18.12.0)
MySQL (version >= 8.0)
npm (version >= 8.0)


## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up `.env` file with database credentials.
4. Run the application: `npm run dev`.

## Install Dependencies
Run the following command to install all the necessary dependencies:
npm install

## Configure Environment Variables
Create a .env file in the project root and provide the following variables:

DB_HOST=127.0.0.1

DB_PORT=3306

DB_USER=root

DB_PASSWORD=<your_password>

DB_NAME=job_board

NODE_ENV=development

<!-- Before running migration make sure you have created the database -->
## Run Migrations

npm run migrate

## Start the Application

npm run dev


## Docker
I have created a Docker and a docker compose but I need to debug it and see why it is always giving me connection errors.

Mostly it is because of port number, but yes the compose file needs to be updated
according to the new param of sequelize method.