import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseMemo from "./Components/UseMemo/UseMemo";
import UseCallback from "./Components/UseCallback/useCallback";
import UseCallback2 from "./Components/UseCallback/UseCallback2";
import ToDos from "./Components/Snippets/ToDos";
import CityPicker from "./Components/Snippets/CityPicker";
import BgChanger from "./Components/Snippets/BgChanger";
import PasswordGenerator from "./Components/Snippets/PasswordGenerator";
import PasswordGenerator2 from "./Components/Snippets/PasswordGenerator2";
import CurrencyConverter from "./Pages/currencyConverter/CurrencyConverter";

const router = createBrowserRouter([
  { path: "/currencyconverter", element: <CurrencyConverter /> },
  { path: "/passwordgenerator", element: <PasswordGenerator /> },
  { path: "/passwordgenerator2", element: <PasswordGenerator2 /> },
  { path: "/bgchanger", element: <BgChanger /> },
  { path: "/citypicker", element: <CityPicker /> },
  { path: "/todos", element: <ToDos /> },
  { path: "/usestate", element: <UseState /> },
  { path: "/useEffect", element: <UseEffect /> },
  { path: "/usememo", element: <UseMemo /> },
  { path: "/usecallback", element: <UseCallback /> },
  { path: "/usecallback2", element: <UseCallback2 /> },
]);

export default function App() {
  return (
    <div className="font-quantico">
      <RouterProvider router={router} />
    </div>
  );
}
