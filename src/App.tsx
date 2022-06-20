import User from "./components/User";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <User
        name="Shourov Ahmed"
        age={25}
        email="moh.abuhanifa@gmail.com"
        isRegistered={false}
      ></User>
    </div>
  );
}

export default App;
