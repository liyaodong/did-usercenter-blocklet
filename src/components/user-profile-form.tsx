import clsx from 'clsx';
import { CircleStackIcon } from '@heroicons/react/24/outline';

import { useForm } from '../hooks/use-form.tsx';
import { userSchema, UserProfileType } from '../context/user-context.tsx';

interface Props {
  profile: UserProfileType;
  onSubmit: (profile: UserProfileType) => void;
  isUpdating: boolean;
}

function mapObject<T extends {}>(obj: T, callback: (key: keyof T, value: T[keyof T]) => JSX.Element): JSX.Element[] {
  return (Object.keys(obj) as Array<keyof T>).map((key) => callback(key, obj[key]));
}

export const UserProfileForm: React.FC<Props> = ({ profile, onSubmit, isUpdating }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(profile, userSchema);

  return (
    <div className="px-4 py-6 flex flex-col h-full">
      <h2 className="text-center text-2xl font-semibold mb-8">Edit Profile</h2>
      <form className="space-y-4 grow grid grid-rows-[1fr__auto] justify-center items-center">
        <div className="flex flex-col gap-3 w-full">
          {mapObject<typeof values>(values, (key) => (
            <label key={key} className="grid grid-cols-3 items-center">
              <span className="capitalize text-right pr-2 text-sm text-semibold">{key}:</span>
              <input
                className={clsx('col-span-2 input input-bordered', {
                  'animate-shake input-error': Boolean(errors[key]),
                  'input-disabled': isUpdating,
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
        <div className="flex justify-center">
          <button
            type="button"
            onClick={isUpdating ? undefined : handleSubmit(onSubmit)}
            className="btn btn-primary btn-min-width">
            {isUpdating ? (
              <>
                <span className="loading inline-block loading-bars loading-xs"></span>Saving
              </>
            ) : (
              <>
                <CircleStackIcon className="w-6 h-6" />
                Save
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
