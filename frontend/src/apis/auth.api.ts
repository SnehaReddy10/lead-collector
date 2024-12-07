import axios from 'axios';

export async function RegisterUser({
  email,
  password,
  username,
  firstName,
  lastName,
  phone,
  role,
  userCategory,
}: any) {
  try {
    const res = await axios.post('http://localhost:5000/auth/register', {
      email,
      password,
      username,
      firstName,
      lastName,
      phone,
      role,
      userCategory,
    });
    console.log({ res });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('leadId', res.data.lead.id);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function LoginUser({ email, password }: any) {
  try {
    const res = await axios.post('http://localhost:5000/auth/login', {
      email,
      password,
    });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('leadId', res.data.lead.id);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
