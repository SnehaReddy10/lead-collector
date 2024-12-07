import axios from 'axios';

export async function GetLeadsSource() {
  try {
    const res = await axios.get(`http://localhost:5000/leads/source`);
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
