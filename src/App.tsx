import { Suspense } from "react";
import LoaderSplashScreen from "./components/loader/LoaderSplashScreen";
import MainRoutes from "./components/routing/MainRoutes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoaderSplashScreen />}>
        <MainRoutes />
      </Suspense>
    </div>
  );
}

export default App;
