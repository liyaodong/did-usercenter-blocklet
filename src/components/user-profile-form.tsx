import { z } from 'zod';

import { useForm } from '../hooks/use-form.tsx';

const formSchema = z.object({
  username: z.string().min(1, 'User name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone is required'),
});

export type UserProfileType = z.infer<typeof formSchema>;

interface Props {
  profile: UserProfileType;
  onSubmit: (profile: UserProfileType) => void;
}

export const UserProfileForm: React.FC<Props> = ({ profile, onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(profile, formSchema);

  return (
    <form className="space-y-4">
      <label>
        Username:
        <input type="text" name="username" value={values.username} onChange={handleChange} />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={values.phone} onChange={handleChange} />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </label>
      <button type="button" onClick={handleSubmit(onSubmit)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};
