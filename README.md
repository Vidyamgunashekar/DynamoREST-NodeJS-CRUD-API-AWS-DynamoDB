# Node.js RESTful API for CRUD Operations with DynamoDB

This project sets up a RESTful API using Node.js to perform CRUD (Create, Read, Update, Delete) operations on a DynamoDB table.

## Setup

To run the application, follow these steps:

1. Clone the repository: `git clone https://github.com/Vidyamgunashekar/DynamoREST-NodeJS-CRUD-API-AWS-DynamoDB`
2. Install dependencies: `npm install`
3. Create a .env file at the root of the project
4. Add below content for AWS credentials in the `.env` file:
   
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   

## Project Structure

### Files

- **`index.js`**: Entry point of the application that sets up the Express server.
- **`routes.js`**: Defines the API endpoints for CRUD operations.
- **`db_config.js`**: Configuration file to connect to AWS DynamoDB.
- **`db.js`**: Contains functions for CRUD operations using the DynamoDB Document Client.

### How to Connect to DynamoDB

The application connects to DynamoDB using the AWS SDK `DocumentClient` with credentials provided via environment variables (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`). Update the `.env` file with your AWS credentials.

### Endpoints

The following API endpoints are available:

- `GET /api/users`: Fetches all users.
- `GET /api/user/:id`: Fetches a user by ID.
- `POST /api/user`: Creates a new user.
- `PUT /api/user/:id`: Updates a user by ID.
- `DELETE /api/user/:id`: Deletes a user by ID.

### Hardcoded Values

The DynamoDB table name (`users`) and the AWS region (`us-east-1`) are currently hardcoded in `db_config.js`. Modify these values as per your setup.

### Error Handling

The application handles errors during CRUD operations and provides appropriate HTTP status codes and error messages. For specific AWS DynamoDB errors, it identifies and responds accordingly.

## Running the Application

Start the server by running `npm start`. By default, the server runs on port `8000`.

## Additional Notes

- Ensure proper AWS IAM roles and permissions are set for accessing DynamoDB.
- Update security measures such as using environment variables for sensitive data in a production environment.
