import { Student } from './students.interface';
import StudentModel from './students.model';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const filter = { _id: id };
  const result = await StudentModel.findOne(filter);
  return result;
};
export const studentServices = {
  createStudentIntoDb,
  getAllStudentFromDb,
  getSingleStudentFromDb,
};
