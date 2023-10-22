import type { User } from '../types';

const mockUserDatabase: User[] = [];

const findUser = (username: string) => {
  const user = mockUserDatabase.find(
    (potentialUser) => potentialUser.username === username
  );

  return user;
};

const saveUser = (user: User) => {
  mockUserDatabase.push(user);
};

export { mockUserDatabase, findUser, saveUser };
