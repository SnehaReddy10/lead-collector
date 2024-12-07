import { useEffect, useState } from 'react';
import { GetCourses } from '../apis/courses.api';
import CourseItem from '../components/CourseItem';

function Courses() {
  const [courses, setCourses] = useState([]);

  const handleCourses = async () => {
    const res: any = await GetCourses();
    setCourses(res.data);
  };

  useEffect(() => {
    handleCourses();
  }, []);

  return (
    <div className="">
      {courses.map((x) => (
        <CourseItem course={x} />
      ))}
    </div>
  );
}

export default Courses;
