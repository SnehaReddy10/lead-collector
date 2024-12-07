import axios from 'axios';

export async function GetCourses() {
  try {
    const res = await axios.get('http://localhost:5000/courses');
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function GetCourse(id: string) {
  try {
    const res = await axios.get(`http://localhost:5000/courses/${id}`);
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function GetInterestedLeadsCourse() {
  try {
    const res = await axios.get(
      `http://localhost:5000/courses/interested-users`
    );
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function GetDisplayCourse() {
  const leadId = localStorage.getItem('leadId');
  try {
    const res = await axios.post(
      `http://localhost:5000/courses/course-display`,
      {
        leadId,
        isNewUser: !leadId,
      }
    );
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
