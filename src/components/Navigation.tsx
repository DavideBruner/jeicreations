import { useRouter } from "next/router";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import CircleLink from "./CircleLink";
import Logo from "./Logo";

const useStyles = makeStyles({
  nav: {
    position: "absolute",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
});

export default function Navigation() {
  const router = useRouter();
  const css = useStyles();
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <CircleLink as="li" path="/" active={router.pathname === "/"}>
          Jei Creations
        </CircleLink>

        <CircleLink
          as="li"
          path="/products"
          active={router.pathname.startsWith("/products")}
        >
          Products
        </CircleLink>

        <CircleLink
          as="li"
          path="/posts"
          active={router.pathname.startsWith("/posts")}
        >
          Posts
        </CircleLink>

        <CircleLink
          as="li"
          path="/about"
          active={router.pathname.startsWith("/about")}
        >
          About
        </CircleLink>
      </ul>
      <Logo />
    </nav>
  );
}
