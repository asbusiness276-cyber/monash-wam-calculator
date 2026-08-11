export interface MonashCourse {
  name: string;
  campus: string;
  duration: string;
  guaranteedAtar: number | null;
  seasAtar: number | null; // Monash Guarantee ATAR
  category: string;
}

export const ATAR_COURSE_CATEGORIES = [
  'Art, Design & Architecture',
  'Arts, Humanities & Social Sciences',
  'Business & Economics',
  'Education',
  'Engineering',
  'Information Technology',
  'Laws',
  'Medicine, Nursing & Health Sciences',
  'Science',
];

export const monashCourses: MonashCourse[] = [
  // Business & Economics
  { name: 'Bachelor of Business', campus: 'Caulfield', duration: '3 Years', guaranteedAtar: 73, seasAtar: 70, category: 'Business & Economics' },
  { name: 'Bachelor of Commerce', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 86, seasAtar: 75, category: 'Business & Economics' },
  { name: 'Bachelor of Economics', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 80, seasAtar: 75, category: 'Business & Economics' },
  { name: 'Bachelor of Finance', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 80, seasAtar: 75, category: 'Business & Economics' },
  { name: 'Bachelor of Accounting', campus: 'Caulfield', duration: '3 Years', guaranteedAtar: 73, seasAtar: 70, category: 'Business & Economics' },

  // Engineering
  { name: 'Bachelor of Engineering (Honours)', campus: 'Clayton', duration: '4 Years', guaranteedAtar: 86, seasAtar: 75, category: 'Engineering' },

  // Information Technology
  { name: 'Bachelor of Information Technology', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 75, seasAtar: 70, category: 'Information Technology' },
  { name: 'Bachelor of Computer Science', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 84, seasAtar: 75, category: 'Information Technology' },
  { name: 'Bachelor of Software Engineering (Honours)', campus: 'Clayton', duration: '4 Years', guaranteedAtar: 86, seasAtar: 75, category: 'Information Technology' },

  // Science
  { name: 'Bachelor of Science', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 75, seasAtar: 70, category: 'Science' },
  { name: 'Bachelor of Applied Data Science', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 80, seasAtar: 75, category: 'Science' },

  // Arts, Humanities
  { name: 'Bachelor of Arts', campus: 'Clayton/Caulfield', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Arts, Humanities & Social Sciences' },
  { name: 'Bachelor of Criminology', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Arts, Humanities & Social Sciences' },
  { name: 'Bachelor of Media Communication', campus: 'Caulfield', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Arts, Humanities & Social Sciences' },

  // Laws
  { name: 'Bachelor of Laws (Honours)', campus: 'Clayton', duration: '4 Years', guaranteedAtar: 97, seasAtar: 94, category: 'Laws' },

  // Medicine, Nursing
  { name: 'Bachelor of Biomedical Science', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 85, seasAtar: 80, category: 'Medicine, Nursing & Health Sciences' },
  { name: 'Bachelor of Nursing', campus: 'Clayton/Peninsula', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Medicine, Nursing & Health Sciences' },
  { name: 'Bachelor of Physiotherapy (Honours)', campus: 'Peninsula', duration: '4 Years', guaranteedAtar: 90, seasAtar: 85, category: 'Medicine, Nursing & Health Sciences' },
  { name: 'Bachelor of Radiography and Medical Imaging (Honours)', campus: 'Clayton', duration: '4 Years', guaranteedAtar: 90, seasAtar: 85, category: 'Medicine, Nursing & Health Sciences' },
  { name: 'Bachelor of Psychology', campus: 'Clayton', duration: '3 Years', guaranteedAtar: 75, seasAtar: 70, category: 'Medicine, Nursing & Health Sciences' },

  // Education
  { name: 'Bachelor of Education (Honours)', campus: 'Clayton/Peninsula', duration: '4 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Education' },

  // Art, Design & Architecture
  { name: 'Bachelor of Architectural Design', campus: 'Caulfield', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Art, Design & Architecture' },
  { name: 'Bachelor of Design', campus: 'Caulfield', duration: '3 Years', guaranteedAtar: 70, seasAtar: 70, category: 'Art, Design & Architecture' },
];
