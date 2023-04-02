import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Head from "next/head";
import { Container, makeStyles, Typography } from "@material-ui/core";

type Props = {};

const useStyles = makeStyles({
  container: {
    minHeight: "400px",
  },
});

const AboutMe = () => {
  const css = useStyles();
  return (
    <Container className={css.container}>
      <Typography variant="h2">About me</Typography>
      <Typography>Hello, my name is Jasmine</Typography>
    </Container>
  );
};

export default function Index(props: Props) {
  const url = "/about";
  const title = "About me";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <AboutMe />
    </Layout>
  );
}
