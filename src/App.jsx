import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseMemo from "./Components/UseMemo/UseMemo";

const router = createBrowserRouter([
  {
    path: "/usestate",
    element: <UseState />,
  },
  {
    path: "/useEffect",
    element: <UseEffect />,
  },
  {
    path: "/usememo",
    element: <UseMemo />,
  },
]);

export default function App() {
  return (
    <div className="font-quantico">
      <RouterProvider router={router} />
    </div>
  );
}
