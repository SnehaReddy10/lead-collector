import axios from 'axios';

export async function CreateInteraction({
  leadId,
  interactionType,
  coursePurchased,
  courseId,
}: any) {
  try {
    const res = await axios.post(`http://localhost:5000/interactions`, {
      leadId,
      interactionType,
      coursePurchased,
      courseId,
    });
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
