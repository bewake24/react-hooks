import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseMemo from "./Components/UseMemo/UseMemo";
import ToDos from "./Components/Snippets/ToDos";
import CityPicker from "./Components/Snippets/CityPicker";
import BgChanger from "./Components/Snippets/BgChanger";
import PasswordGenerator from "./Components/Snippets/PasswordGenerator";

const router = createBrowserRouter([
  { path: "/", element: <PasswordGenerator /> },
  { path: "/bgchanger", element: <BgChanger /> },
  { path: "/citypicker", element: <CityPicker /> },
  { path: "/todos", element: <ToDos /> },
  { path: "/usestate", element: <UseState /> },
  { path: "/useEffect", element: <UseEffect /> },
  { path: "/usememo", element: <UseMemo /> },
]);

export default function App() {
  return (
    <div className="font-quantico">
      <RouterProvider router={router} />
    </div>
  );
}
