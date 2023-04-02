import Head from "next/head";
import { Box } from "@material-ui/core";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box height="100%" flexDirection="column">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Navigation />
      <Hero img="/LogoIllustration.png" />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
