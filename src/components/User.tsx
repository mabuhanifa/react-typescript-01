type UserProps = {
  name: string;
  age: number;
  email: string;
  isRegistered: boolean;
};
const User = ({ name, age, email, isRegistered }: UserProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
      <p>{isRegistered ? "Registered" : "Not Registered"}</p>
    </div>
  );
};

export default User;
