import clsx from 'clsx';
import { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { UserProfileType, UserProfileForm } from './user-profile-form.tsx';

const defaultProfile: UserProfileType = {
  username: 'Anonymous',
  email: 'sample@example.com',
  phone: '110119120',
};

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);

  const handleEdit = () => {
    setIsEditing((val) => !val);
  };

  return (
    <div className="m-4 animate-up [perspective:1000px] relative">
      <div
        className={clsx(
          'card shadow bordered px-4 py-6 max-w-md mx-auto bg-neutral relative transition-all duration-500 [transform-style:preserve-3d]',
          {
            '[transform:rotateY(180deg)]': isEditing,
          }
        )}>
        <h2 className="text-center text-xl font-semibold mb-8">User profile</h2>
        <div className="flex items-center flex-col">
          <div className="avatar">
            <div className="w-24 rounded-full border">
              <img src={`https://i.pravatar.cc/150?u=${profile.email}`} alt="Avatar" />
            </div>
          </div>
          <p className="text-2xl font-semibold mt-2">{profile.username}</p>
          <a href={`mailto:${profile.email}`} className="text-sm opacity-60">
            {profile.email}
          </a>
          <a className="text-2xl mt-2" href={`tel:${profile.phone}`}>
            <PhoneIcon className="w-6 h-6 inline-block mr-1 -mt-1" />

            {profile.phone}
          </a>
          <div className="flex justify-center mt-8">
            <button className="btn btn-min-width btn-primary" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
        <div
          className={clsx(
            'absolute left-0 top-0 h-full w-full rounded-xl bg-base-100/85 text-center text-slate-200',
            '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all',
            {
              'backdrop-blur-sm': isEditing,
            }
          )}>
          <UserProfileForm
            onSubmit={(p) => {
              setIsEditing((editing) => !editing);
              setProfile(p);
            }}
            profile={profile}
          />
        </div>
      </div>
    </div>
  );
};
