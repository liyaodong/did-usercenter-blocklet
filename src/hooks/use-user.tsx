import React from 'react';
import { UserContext } from '../context/user-context.tsx';

export const useUser = () => React.useContext(UserContext);
