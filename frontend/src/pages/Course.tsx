import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCourse } from '../apis/courses.api';
import PrimaryButton from '../components/button/PrimaryButton';
import { CreateInteraction } from '../apis/interactions';
import { InteractionType } from '../constants/enums';
import { useUser } from '../context/UserContext';

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const { userId } = useUser();

  async function getCourse() {
    const res: any = await GetCourse(id || '');
    setCourse(res.data);
  }

  useEffect(() => {
    getCourse();
    CreateInteraction({
      leadId: userId,
      interactionType: InteractionType.INTEREST_COURSE,
      coursePurchased: null,
      courseId: id,
    });
  }, []);
  return (
    <div>
      {course && (
        <div className="flex flex-col gap-2">
          <div className="bg-white p-1 m-1 flex justify-between px-4 items-center">
            <div className="flex gap-3 items-center">
              <img src={course.imageUrl} alt="" className="w-auto h-auto" />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">{course.name}</h1>
                <p>{course.description}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 m-4 rounded-lg shadow-lg">
            <h1 className="text-base font-semibold text-gray-800 mb-6">
              What You Will Learn
            </h1>
            <div>
              {course?.curriculum?.map((module: any, index: number) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 mb-6 border-l-4 border-black"
                >
                  <h2 className="text-xs font-semibold text-gray-800 mb-4">
                    {module.module}
                  </h2>
                  <ul className="list-disc list-inside space-y-4">
                    {module.topics.map((topic: any, topicIndex: number) =>
                      typeof topic === 'string' ? (
                        <li key={topicIndex} className="text-gray-700 text-xxs">
                          {topic}
                        </li>
                      ) : (
                        <li key={topicIndex} className="text-gray-700 text-xxs">
                          <strong className="text-black">Subtopics:</strong>
                          <ul className="list-circle ml-6 space-y-2 mt-2">
                            {topic.subtopics.map(
                              (subtopic: any, subtopicIndex: number) => (
                                <li
                                  key={subtopicIndex}
                                  className="text-gray-600 text-md"
                                >
                                  {subtopic}
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black p-1 m-1 text-center rounded-sm">
            <PrimaryButton label={`Buy Now $${course.price}`} type="button" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;
