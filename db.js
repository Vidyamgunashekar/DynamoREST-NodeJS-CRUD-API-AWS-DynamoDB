import {db, Table} from './db.config.js'

// Create or Update users
const createOrUpdate = async (data = {}) =>{
    const params = {
        TableName: Table,
        Item: data
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all users
const readAllUsers = async () => {
    const params = {
        TableName: Table
    }

    try {
        const { Items = [] } = await db.scan(params).promise();
        return { success: true, data: Items };
    } catch (error) {
        // Check for specific AWS DynamoDB error types
        if (error.code === 'ResourceNotFoundException') {
            // Handle ResourceNotFoundException
            return { success: false, message: 'Table not found: The specified table does not exist' };
        } else if (error.code === 'AccessDeniedException') {
            // Handle AccessDeniedException
            return { success: false, message: 'Access Denied: Insufficient permissions to perform the operation' };
        }
        // Handle other types of errors or log the error for debugging
        console.error('Error in readAllUsers:', error);
        return { success: false, message: 'Error occurred during readAllUsers operation' };
    }
}

// Read Users by ID
const getUserById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete User by ID
const deleteUserById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}