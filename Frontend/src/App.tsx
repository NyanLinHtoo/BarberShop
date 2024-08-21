import { Toaster } from "sonner";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <AppRouter />
    </>
  );
};

export default App;
