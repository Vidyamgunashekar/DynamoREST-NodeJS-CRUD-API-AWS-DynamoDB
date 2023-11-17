Here are the prerequisites for working on this project:

1. **AWS Account:** You'll need an AWS account to access and use DynamoDB. Ensure that you have the necessary permissions to create and manage DynamoDB tables, and obtain the Access Key ID and Secret Access Key for programmatic access.

2. **Node.js:** Ensure Node.js is installed on your machine. You can download it from the official [Node.js website](https://nodejs.org/).

3. **Text Editor/IDE:** Choose a text editor or an Integrated Development Environment (IDE) to write and edit your code. Some popular choices include Visual Studio Code, Sublime Text, Atom, or WebStorm.

4. **Terminal/Command Line:** Familiarize yourself with using the terminal or command line interface to run commands, install dependencies, and start the Node.js server.

5. **Git (Optional):** Git is a version control system that can be used to clone the project repository. If you're collaborating or planning to contribute to a repository, Git will be helpful.

6. **AWS CLI (Optional):** While not mandatory, having the AWS Command Line Interface installed can be beneficial for configuring AWS credentials and accessing AWS resources from the command line.

Make sure you have your AWS credentials (Access Key ID and Secret Access Key) handy . You can find how to get the AWS Secret Access Key here: 

Additionally, understanding REST APIs and basic knowledge of JavaScript, particularly using Node.js and Express for server-side development, would be beneficial for working on this project.

Project: 

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
