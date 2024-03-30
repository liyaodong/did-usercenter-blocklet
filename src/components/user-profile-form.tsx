import clsx from 'clsx';
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

function mapObject<T extends {}>(obj: T, callback: (key: keyof T, value: T[keyof T]) => JSX.Element): JSX.Element[] {
  return (Object.keys(obj) as Array<keyof T>).map((key) => callback(key, obj[key]));
}

export const UserProfileForm: React.FC<Props> = ({ profile, onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(profile, formSchema);

  return (
    <div className="px-4 py-6 flex flex-col h-full">
      <h2 className="text-center text-xl font-semibold mb-8">User profile</h2>
      <form className="space-y-4 grow grid grid-rows-[1fr__auto] justify-center">
        <div className="flex flex-col gap-3 w-full">
          {mapObject<typeof values>(values, (key) => (
            <label key={key} className="grid grid-cols-3 items-center">
              <span className="capitalize text-right pr-2 text-sm text-semibold">{key}:</span>
              <input
                className={clsx('col-span-2 input input-bordered', {
                  'animate-shake input-error': Boolean(errors[key]),
                })}
                type="text"
                name={key}
                value={values[key]}
                onChange={handleChange}
              />
              <div
                className={clsx(
                  'origin-top mt-2 h-auto overflow-hidden transition-all duration-500 text-right col-span-full',
                  {
                    'max-h-30': errors[key],
                    'max-h-0 opacity-0': !errors[key],
                  }
                )}>
                {errors[key] && <p className="text-red-500 text-sm ">{errors[key]}</p>}
              </div>
            </label>
          ))}
        </div>
        <button type="button" onClick={handleSubmit(onSubmit)} className="btn btn-primary btn-mini-width">
          Save
        </button>
      </form>
    </div>
  );
};
