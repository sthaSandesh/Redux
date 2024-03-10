import { HoodiesView } from "./features/hoodies/HoodiesView";
import { JacketView } from "./features/jacket/JacketView";
import { UserView } from "./features/user/UserView";

function App() {
  return (
    <div>
      <HoodiesView />
      <JacketView />
      <UserView />
    </div>
  );
}

export default App;
