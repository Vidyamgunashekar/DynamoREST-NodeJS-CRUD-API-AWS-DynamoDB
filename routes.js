import express from 'express';
import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js';

const router = express.Router();

// READ ALL Users
router.get('/users', async (req, res) => {
    try {
        const { success, data } = await readAllUsers();

        if (success) {
            return res.json({ success, data });
        }

        return res.status(500).json({ success: false, message: 'Failed to fetch users' });
    } catch (error) {
        console.error('Error fetching all users:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Get User by ID
router.get('/user/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { success, data } = await getUserById(id);

        if (success) {
            return res.json({ success, data });
        }

        return res.status(404).json({ success: false, message: 'User not found' });
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Create User
router.post('/user', async (req, res) => {
    try {
        const { success, data } = await createOrUpdate(req.body);

        if (success) {
            return res.json({ success, data });
        }

        return res.status(400).json({ success: false, message: 'Failed to create user' });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Update User by ID
router.put('/user/:id', async (req, res) => {
    const user = req.body;
    const { id } = req.params;
    user.id = parseInt(id);

    try {
        const { success, data } = await createOrUpdate(user);

        if (success) {
            return res.json({ success, data });
        }

        return res.status(400).json({ success: false, message: 'Failed to update user' });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Delete User by Id
router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { success, data } = await deleteUserById(id);

        if (success) {
            return res.json({ success, data });
        }

        return res.status(404).json({ success: false, message: 'User not found' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

export default router;
