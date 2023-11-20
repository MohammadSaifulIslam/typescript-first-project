import { Request, Response } from 'express';
import { studentServices } from './students.services';
import StudentValidationSchema from './students.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // data validation using zod
    const validateData = StudentValidationSchema.parse(studentData);

    // will call service function
    const result = await studentServices.createStudentIntoDb(validateData);
    // will send response data
    res.status(200).json({
      status: true,
      message: 'Student data created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong.',
      data: err,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    // will call service function
    const result = await studentServices.getAllStudentFromDb();
    // will send response data
    res.status(200).json({
      status: true,
      message: 'Student data is retrived successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong.',
      data: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // will call service function
    const result = await studentServices.getSingleStudentFromDb(id as string);
    // will send response data
    res.status(200).json({
      status: true,
      message: 'Student data created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong.',
      data: err,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
