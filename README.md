# Job Board Backend
=================

## Overview
--------

A simple backend service for managing job postings using Node.js, TypeScript, and MySQL.

## Features
--------

-   CRUD operations for job postings
-   MySQL database integration
-   Clean and maintainable code

## Prerequisites
-------------

Ensure the following are installed on your machine:

-   Node.js (version >= 18.12.0)
-   MySQL (version >= 8.0)
-   npm (version >= 8.0)
-   Docker (if running in Docker)

Setup Instructions
------------------

### 1\. Clone the repository

Clone the repository to your local machine:

`git clone https://github.com/VaibhavMishra173/nxt_job_assignment
cd nxt_job_assignment`

### 2\. Install Dependencies

Run the following command to install all the necessary dependencies:

`npm install`

### 3\. Configure Environment Variables

Create a `.env` file in the project root and provide the following variables:

`PORT=3000
DB_HOST=127.0.0.1
DB_NAME=job_board
DB_USER=root
DB_PASSWORD=<your_password>`

**Note:** Make sure you replace `<your_password>` with the password you use for MySQL. If you're using Docker, replace `DB_HOST=127.0.0.1` with `DB_HOST=mysql` (container name from `docker-compose.yml`).

### 4\. Run Migrations

Before running the application, ensure the MySQL database is set up:

1.  Ensure the database exists (either create it manually or via the Docker container).
2.  Run the migrations to create the necessary tables:

`npm run migrate`

### 5\. Start the Application

Once the database is set up, start the application with:

`npm run dev`

### 6\. Docker Setup

You can run the backend service in Docker using Docker Compose.

#### Docker Compose Configuration

Ensure you have the following `docker-compose.yml` in the root of your project:

Make sure you replace `<your_password>` with the password you use for MySQL.

#### Docker Setup Steps

1.  **Build and Start the Docker Containers:**

    `docker-compose up --build`

2.  **Wait for MySQL to be Ready:** The app service will wait for MySQL to be ready before running migrations and starting the application.

3.  **Check Logs for Debugging:** If you encounter any connection errors, check the logs to troubleshoot:

    `docker logs job-board-app`

    Ensure that the connection details in the `.env` file match the MySQL container settings. Specifically, if running in Docker, set `DB_HOST=mysql`.

#### Troubleshooting Connection Issues

If the application still gives connection errors, you can try the following:

-   **Check MySQL Service:** Ensure the MySQL container is running without errors.

    `docker ps
    docker logs job-board-db`

-   **Verify the Port:** If you're not using Docker, ensure that MySQL is running on `localhost:3306`. If you're using Docker, the service should connect via the container's name (`mysql`).

-   **Check Sequelize Configuration:** Make sure the Sequelize database configuration (`DB_HOST`, `DB_PORT`, `DB_USER`, etc.) is properly set.

### 7\. Access the Application

After the containers are running, you can access the application at http://localhost:3000.