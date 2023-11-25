import { AuthProvider } from "./src/contexts/AuthContextProvider";
import { Router } from "./src/routes/Router";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
