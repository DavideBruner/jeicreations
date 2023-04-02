import { makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles({
  image: {
    zIndex: 1,
  },
});

export default function Logo() {
  const css = useStyles();
  return (
    <Image
      alt=""
      src="/LogoIllustration.png"
      height={80}
      width={100}
      className={css.image}
    />
  );
}
