import { useState } from 'react';
import FormInput from '@/shared/components/molecules/FormInput';
import BasicButton from '@/shared/components/atoms/BasicButton';

export type AuthFormProps = {
  mode: 'login' | 'signup';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({ id: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🚀 mock auth handling — replace with API/localStorage later
    alert(`${mode.toUpperCase()} with ${JSON.stringify(formData)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md p-6 border rounded-xl bg-white shadow"
    >
      <h2 className="text-xl font-semibold text-center mb-2">
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </h2>

      <FormInput
        label="User ID"
        placeholder="Enter your ID"
        value={formData.id}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <BasicButton variant="primary" size="md" fullWidth>
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </BasicButton>

      {mode === 'login' && (
        <div className="flex justify-between text-sm text-gray-600">
          <button type="button" className="hover:underline">
            Find ID/Password
          </button>
          <button type="button" className="hover:underline">
            Sign Up
          </button>
        </div>
      )}
    </form>
  );
}
