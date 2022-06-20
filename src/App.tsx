import User from "./components/User";
import User2 from "./components/User2";

function App() {
  const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isRegistered: true,
    lang: ["English", "Bangla", "Hindi"],
  };
  return (
    <div>
      <h1>Hello World</h1>
      <User user={user}></User>
      <User2 lang={["English", "Bangla", "Hindi"]}></User2>
    </div>
  );
}

export default App;
