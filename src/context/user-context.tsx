import React, { useEffect } from 'react';
import { z } from 'zod';

const AUTHENTICATION_STORAGE_KEY = '__USER_PROFILE';

export const userSchema = z.object({
  username: z.string().min(1, 'User name is required').max(20, 'User name is too long'),
  email: z.string().email('Invalid email address').min(1, 'Email is required').max(30, 'Email is too long'),
  phone: z.string().min(1, 'Phone is required').max(20, 'Phone is too long'),
});

export type UserProfileType = z.infer<typeof userSchema>;

interface UserContextType {
  loading: boolean;
  user: UserProfileType | null;
  setUser: (profile: UserProfileType) => void;
}

const profileFromLocalStorage = JSON.parse(
  localStorage.getItem(AUTHENTICATION_STORAGE_KEY) || 'null'
) as UserProfileType;

const defaultProfile: UserProfileType = profileFromLocalStorage || {
  username: 'Anonymous',
  email: 'sample@example.com',
  phone: '110119120',
};

export const UserContext = React.createContext<UserContextType>({
  loading: false,
  setUser: () => {},
  user: defaultProfile,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<UserProfileType | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUserInfo(defaultProfile);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const setUser = (profile: UserProfileType) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(AUTHENTICATION_STORAGE_KEY, JSON.stringify(profile));
        setUserInfo(profile);
        setLoading(false);
        resolve(profile);
      }, 2000);
    });
  };

  const value = {
    loading,
    user: userInfo,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
