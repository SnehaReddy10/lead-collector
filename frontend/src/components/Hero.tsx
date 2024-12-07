import { useState, useEffect } from 'react';
import { GetDisplayCourse } from '../apis/courses.api';
import PrimaryButton from './button/PrimaryButton';
import Loader from './Loader';

const Hero = () => {
  const [courses, setCourses] = useState<any>(null);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res: any = await GetDisplayCourse();
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
    setIsNewUser(!localStorage.getItem('leadId'));
  }, [isNewUser]);

  if (!courses) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-r px-6 text-center">
      <h1 className="text-xl sm:text-xl font-bold tracking-tight mb-4">
        {isNewUser
          ? 'Welcome! Start your learning journey with the latest course!'
          : 'Pick up from where you left..'}
      </h1>
      <div className="grid grid-cols-3 gap-2 p-2">
        {courses?.map((course: any) => (
          <div className="bg-white m-3 flex flex-col gap-1 justify-center items-center py-4 px-2">
            <div>
              <img src={course.imageUrl} alt="" className="p-2 w-20 h-20" />
            </div>
            <div className="text-center">
              <h2 className="text-xs font-semibold mb-4">{course.name}</h2>
              <p className="text-xxs sm:text-xxs mb-6 max-w-2xl mx-auto">
                {course.description}
              </p>
              <PrimaryButton label="Enroll now" type="button" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
