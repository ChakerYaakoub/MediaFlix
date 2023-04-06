import "./NavItem.css";

const NavItemDesktop = (props) => {
  return <li>{props.children}</li>;
};
const NavItemPhone = (props) => {
  return <li>{props.children}</li>;
};
const NavItemSpan = (props) => {
  return <span className="icon">{props.children}</span>;
};
export default NavItemDesktop;
export { NavItemPhone, NavItemSpan };
