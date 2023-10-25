import type { User } from '../types';

const mockUserDatabase: User[] = [];

type FindUserParams = {
  username?: string;
  id?: string;
};

type FindUser = (params: FindUserParams) => User | undefined;

const findUser: FindUser = ({ id, username }) => {
  if (id) {
    const user = mockUserDatabase.find(
      (potentialUser) => potentialUser.id === id
    );

    return user;
  }

  if (username) {
    const user = mockUserDatabase.find(
      (potentialUser) => potentialUser.username === username
    );

    return user;
  }

  return undefined;
};

const saveUser = (user: User) => {
  mockUserDatabase.push(user);
};

export { mockUserDatabase, findUser, saveUser };
