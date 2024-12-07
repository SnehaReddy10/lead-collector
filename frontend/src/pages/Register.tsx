import { useState } from 'react';
import PrimaryInput from '../components/input/PrimaryInput';
import Dropdown from '../components/input/Dropdown';
import { RegisterUser } from '../apis/auth.api';
import PrimaryButton from '../components/button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const form = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  username: '',
  phone: '',
  role: 'user',
  userCategory: 'student',
  source: localStorage.getItem('trafficSource'),
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(form);

  const userCategories = ['Student', 'Professional'];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    await RegisterUser(formData);
    setFormData(form);
    navigate('/');
  };

  return (
    <div className="p-6 bg-gray-100 text-black md:mx-32">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md flex flex-col md:grid md:grid-cols-2 gap-2"
      >
        <PrimaryInput
          type="email"
          name="email"
          label="Email"
          placeholder="user@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        <PrimaryInput
          type="text"
          name="username"
          label="Username"
          placeholder="johndoe32"
          value={formData.username}
          onChange={handleChange}
          required={true}
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

        <PrimaryInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required={true}
        />

        <PrimaryInput
          type="text"
          name="firstName"
          label="First Name"
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange}
        />

        <PrimaryInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
        />

        <PrimaryInput
          type="tel"
          name="phone"
          label="Phone"
          placeholder="98*****989"
          value={formData.phone}
          onChange={handleChange}
        />

        <Dropdown
          options={userCategories}
          label="Experience"
          value={formData.userCategory}
          onChange={handleChange}
        />

        <div className="m-1 col-span-2 flex justify-center">
          <PrimaryButton
            label="Register"
            type="submit"
            className="bg-black hover:bg-black text-white rounded-sm w-1/2 py-1 "
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
