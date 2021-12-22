import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
// import Container from "components/Container";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import s from "./Header.module.css";
import { authSelectors } from "redux/auth";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
