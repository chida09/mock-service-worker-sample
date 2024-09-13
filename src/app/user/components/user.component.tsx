type User = {
  id: string;
  name: string;
  email: string;
};

type Props = {
  users: User[]
};

export const UserComponent = ({ users }: Props) => {
  return (
    <>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.name}
          </li>
        ))}
        </ul>
    </>
  );
}
