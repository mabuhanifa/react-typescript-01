type UserProps2 = {
  lang: string[];
};
const User2 = ({ lang }: UserProps2) => {
  return <div>{
    lang.map(lang => {
      return <h1>{lang}</h1>
    })
  }</div>;
};

export default User2;
