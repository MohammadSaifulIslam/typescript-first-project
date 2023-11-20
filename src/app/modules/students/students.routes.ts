import express from 'express';
import { studentControllers } from './students.controller';
const router = express.Router();

router.get('/', studentControllers.getAllStudent);
router.get('/:id', studentControllers.getSingleStudent);
router.post('/create-student', studentControllers.createStudent);

export const studentRoutes = router;
