type UserProps = {
  user: {
    name: string;
    age: number;
    email: string;
    isRegistered: boolean;
    lang: string[];
  };
};
const User = ({ user }: UserProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{user.isRegistered ? "Registered" : "Not Registered"}</p>
    </div>
  );
};

export default User;
