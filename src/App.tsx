import { Route, Routes } from "react-router";
import { openRoutes, protectedRoutes } from "./routes/routes";
import "./App.css";

const App = () => (
  <Routes>
    {openRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} Component={Component} />
    ))}
    {protectedRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} Component={Component} />
    ))}
  </Routes>
);

export default App;
