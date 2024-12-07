import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { GetInterestedLeadsCourse } from '../apis/courses.api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface InterestedUser {
  leadId: number;
  leadEmail: string;
}

interface CourseData {
  courseName: string;
  interestedUsers: InterestedUser[];
}

const CourseInterestChart: React.FC = () => {
  const [coursesData, setCoursesData] = useState<CourseData[]>([]);

  async function getInterestedUsersInCourse() {
    const res: any = await GetInterestedLeadsCourse();
    setCoursesData(res.data);
  }

  useEffect(() => {
    getInterestedUsersInCourse();
  }, []);

  const courseNames = coursesData.map((course) =>
    course.courseName.split(' ').slice(0, 2).join(' ')
  );
  const userCounts = coursesData.map((course) => course.interestedUsers.length);

  const chartData = {
    labels: courseNames,
    datasets: [
      {
        label: 'Number of Interested Users',
        data: userCounts,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  };

  return (
    <div className="px-20">
      <h2>Course Interest Data</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default CourseInterestChart;
