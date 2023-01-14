import express from 'express'
import { createTodo, deleteTodo, doneTodo, getAllTodo, pendingTodo, updateTodo } from '../controllers/todo.js';

const router = express.Router()


router.post('/addTodo', createTodo);
router.get('/allTodo', getAllTodo);
router.put('/:id', updateTodo)
router.get('/doneTodo', doneTodo);
router.get('/pendingTodo', pendingTodo);
router.delete('/:id', deleteTodo);

export default router