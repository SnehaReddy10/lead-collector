import { useState } from 'react';
import PrimaryInput from '../components/input/PrimaryInput';
import PrimaryButton from '../components/button/PrimaryButton';
import { LoginUser } from '../apis/auth.api';
import { useNavigate } from 'react-router-dom';

const form = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(form);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await LoginUser(formData);
    if (res.data.message) {
      setFormData(form);
      navigate('/');
    } else {
      setError(res.data.error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 text-black flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white md:w-2/6 p-6 shadow-md rounded-md flex flex-col gap-2"
      >
        <PrimaryInput
          type="email"
          name="email"
          label="Email"
          placeholder="user@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required={true}
          error={error}
        />

        <PrimaryInput
          type="password"
          name="password"
          label="Password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />

        <div className="m-1 col-span-2 flex justify-center">
          <PrimaryButton
            label="Login"
            type="submit"
            className="bg-black hover:bg-black text-white rounded-sm w-1/2 py-1 "
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
