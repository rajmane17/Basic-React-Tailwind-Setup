/* eslint-disable no-unused-vars */
import { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    // const newErrors = {};

    // if (!formData.fullname.trim()) {
    //   newErrors.fullname = 'Full name is required';
    // }

    // if (!formData.email) {
    //   newErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = 'Please enter a valid email';
    // }

    // if (!formData.password) {
    //   newErrors.password = 'Password is required';
    // } else if (formData.password.length < 8) {
    //   newErrors.password = 'Password must be at least 8 characters';
    // } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
    //   newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    // }

    // if (!formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Please confirm your password';
    // } else if (formData.password !== formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Passwords do not match';
    // }

    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) {
    //   return;
    // }

    // setIsLoading(true);

    // try {
    //   // Simulate API call
    //   await new Promise(resolve => setTimeout(resolve, 1500));
    //   console.log('Signup successful', formData);
    //   // Handle successful signup here
    // } catch (error) {
    //   console.error('Signup failed:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData(prev => ({
    //   ...prev,
    //   [name]: value
    // }));
    // if (errors[name]) {
    //   setErrors(prev => ({
    //     ...prev,
    //     [name]: ''
    //   }));
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
          <p className="text-gray-600">Please fill in your details to sign up</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter full name"
              value={formData.fullname}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-3 py-2 border ${errors.fullname ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.fullname && (
              <p className="mt-1 text-sm text-red-500">{errors.fullname}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;