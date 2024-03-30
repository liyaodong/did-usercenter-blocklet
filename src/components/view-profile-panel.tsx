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
        <div className="min-h-[160px] max-w-full">
          <div className="flex items-center justify-center">
            <div className="avatar mr-4 sm:mr-8">
              <div className="w-20 sm:w-32 rounded-full border">
                <img src={`https://i.pravatar.cc/150?u=${profile.email}`} alt="Avatar" />
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-2xl font-semibold mb-1 sm:mb-4 line-clamp-1">{profile.username}</p>
              <a href={`mailto:${profile.email}`} className="text-md opacity-60 flex items-center gap-1">
                <EnvelopeIcon className="w-4 h-4" />
                <span className="line-clamp-1">{profile.email}</span>
              </a>
              <a className="text-md opacity-60 flex items-center gap-1" href={`tel:${profile.phone}`}>
                <PhoneArrowUpRightIcon className="w-4 h-4" />
                <span className="line-clamp-1">{profile.phone}</span>
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm text-center opacity-60 max-w-xs mx-auto">
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
