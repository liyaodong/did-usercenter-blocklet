import { EnvelopeIcon, PencilSquareIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { UserProfileType } from '../context/user-context.tsx';

export const ViewProfilePanel: React.FC<{
  profile: UserProfileType;
  onEdit: () => void;
}> = ({ profile, onEdit }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-8">Profile</h2>
      <div className="flex items-center flex-col">
        <div className="min-h-[160px]">
          <div className="flex items-center justify-center">
            <div className="avatar mr-8">
              <div className="w-32 rounded-full border">
                <img src={`https://i.pravatar.cc/150?u=${profile.email}`} alt="Avatar" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-4">{profile.username}</p>
              <a href={`mailto:${profile.email}`} className="text-md opacity-60">
                <EnvelopeIcon className="w-4 h-4 inline-block mr-1" />
                {profile.email}
              </a>
              <a className="text-md opacity-60" href={`tel:${profile.phone}`}>
                <PhoneArrowUpRightIcon className="w-4 h-4 inline-block mr-1 -mt-1" />

                {profile.phone}
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm text-center opacity-60 max-w-xs">
            The important thing is not to stop questioning. Curiosity has its own reason for existing
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="btn btn-min-width btn-primary" onClick={onEdit}>
            <PencilSquareIcon className="w-6 h-6" />
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
