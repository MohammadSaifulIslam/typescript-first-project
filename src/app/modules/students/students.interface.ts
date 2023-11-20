export type Gaurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  relation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  gaurdian: Gaurdian;
  localGuardian: LocalGuardian;
};
