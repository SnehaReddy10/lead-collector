import { useNavigate } from 'react-router-dom';
import PrimaryButton from './button/PrimaryButton';

function CourseItem({ course }: any) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/courses/${course.id}`);
      }}
      className="bg-white p-1 m-1 flex justify-between px-4 items-center"
    >
      <div className="flex gap-5 items-center">
        <img src={course.imageUrl} alt="" className="h-20 w-20" />
        <div>
          <h2 className="text-xs font-bold">{course.name}</h2>
          <p className="text-gray-900">{course.description}</p>
        </div>
      </div>
      <div>
        <PrimaryButton label={`${course.price} +`} type="button" />
      </div>
    </div>
  );
}

export default CourseItem;
