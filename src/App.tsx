import { UserList } from "./pages/user-list";

import "./style/tailwind.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-y-hidden">
      <UserList />;
    </div>
  );
}

export default App;
