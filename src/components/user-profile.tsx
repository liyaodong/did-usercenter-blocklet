import clsx from 'clsx';
import { useState } from 'react';
import { UserProfileForm } from './user-profile-form.tsx';
import { useUser } from '../hooks/use-user.tsx';
import { ViewProfilePanel } from './view-profile-panel.tsx';
import { UserProfileSkeleton } from './skeleton.tsx';

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user: profile, setUser, loading } = useUser();

  return (
    <div className="m-4 animate-up [perspective:1000px] relative">
      <div
        className={clsx(
          'rounded-xl cus-card-gradient shadow-xl bordered px-4 py-8 max-w-md mx-auto bg-neutral relative transition-all duration-500 [transform-style:preserve-3d]',
          {
            '[transform:rotateY(180deg)]': isEditing,
          }
        )}>
        {profile ? (
          <>
            <ViewProfilePanel profile={profile} onEdit={() => setIsEditing((editing) => !editing)} />
            <div
              className={clsx(
                'absolute left-0 top-0 h-full w-full rounded-xl bg-base-100/85 text-center text-slate-200',
                '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all',
                {
                  'backdrop-blur-sm': isEditing,
                }
              )}>
              <UserProfileForm
                isUpdating={loading}
                onSubmit={async (p) => {
                  await setUser(p);
                  setIsEditing((editing) => !editing);
                }}
                profile={profile}
              />
            </div>
          </>
        ) : (
          <UserProfileSkeleton />
        )}
      </div>
    </div>
  );
};
