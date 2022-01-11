import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavLink to="/group">
        <div>Group Project img + text</div>
      </NavLink>
      <NavLink to="/solo">
        <div>Solo Project img + text</div>
      </NavLink>
      <NavLink to="/portfolio">
        <div>Portfolio img + text</div>
      </NavLink>
      <NavLink to="/about">
        <div>About img + text</div>
      </NavLink>
    </div>
  );
}
