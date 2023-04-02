import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Card,
  FormControl,
  FormControlLabel,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import CardStack, { Variant } from "../components/CardStack";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import Scissor from "../assets/scissor.svg";
import Hand from "../assets/hand.svg";
import Gift from "../assets/gift.svg";

import { getCategories } from "../lib/categories";
import { useRouter } from "next/router";
import CircleLink from "../components/CircleLink";
import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconGlobe,
  IconPackage,
  IconPhone,
} from "@tabler/icons-react";

const useStyles = makeStyles({
  itemContainer: {
    position: "relative",
    padding: "100px 0",
    margin: "50px 15px",
    "& > *": {
      position: "relative",
      zIndex: 2,
    },
    "&:before": {
      content: '" "',
      position: "absolute",
      zIndex: 1,
      height: "650px",
      width: "100%",
      backgroundRepeat: "no-repeat",
      //  width: 500px;
      //  height: 40px;
    },
  },
  ink1: {
    "&:before": {
      left: "63px",
      top: "-50px",
      backgroundImage: "url('/ink1.svg')",
    },
  },
  ink2: {
    "&:before": {
      right: "-60px",
      top: "-50px",
      backgroundImage: "url('/ink2.svg')",
    },
  },
  ink3: {
    "&:before": {
      left: "-10px",
      top: "-120px",
      backgroundImage: "url('/ink3.svg')",
    },
  },
  categoriesContainer: {
    background: "linear-gradient(180deg, #F5C8E4, transparent)",
    minHeight: "700px",
    paddingTop: "250px",
    position: "relative",
    "&:before": {
      // transform: 'rotate(180deg)',
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "215px",
      background: "url('/wave.svg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  catogoriesTitle: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: "25px",
  },
  rainbowText: {
    backgroundImage: "linear-gradient(#EDBCDD, #F2CEAE)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeColor: "#000000",
    WebkitTextStrokeWidth: "1px",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  card: {
    maxWidth: "500px",
  },
  facebook: {
    padding: 2,
    border: "1.2px solid",
    borderRadius: "50%",
  },
});

const Services = () => {
  const css = useStyles();

  const services = [
    {
      title: "Hand Made",
      icon: Scissor,
      classname: css.ink1,
    },
    {
      title: "ECO Friendly",
      icon: Hand,
      classname: css.ink2,
    },
    {
      title: "Personalized",
      icon: Gift,
      classname: css.ink3,
    },
  ];

  return (
    <Grid container>
      {services.map(({ title, icon: Icon, classname }) => (
        <Grid item md={4} xs={12} key={title}>
          <Box
            textAlign="center"
            className={clsx(css.itemContainer, classname)}
          >
            {/* <Icon /> */}
            <Typography variant="overline">{title}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const Categories = ({ categories }) => {
  const css = useStyles();
  const router = useRouter();

  return (
    <Box className={css.categoriesContainer}>
      <Typography
        variant="h1"
        align="center"
        className={clsx(css.catogoriesTitle, css.rainbowText)}
      >
        Categories
      </Typography>
      <Box display="flex" padding={3}>
        <Grid container>
          {categories.map(({ name, img, color, slug }) => (
            <Grid item xs={12} md={6} key={name}>
              <Box p={4}>
                <CardStack
                  classNames={css.card}
                  variant={Variant.FAN_LEFT}
                  density={15}
                  color={color}
                  action={() =>
                    router.push({
                      pathname: "products",
                      query: { category: slug },
                    })
                  }
                >
                  <Image
                    height="332"
                    width="730"
                    src={img}
                    alt={name}
                    objectPosition="center"
                  />
                  <Box p={0} marginTop={2}>
                    <Typography
                      variant="overline"
                      align="center"
                      display="block"
                    >
                      {name}
                    </Typography>
                  </Box>
                </CardStack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <>
      <FormControl>
        <TextField
          id="my-input"
          aria-describedby="my-helper-text"
          variant="outlined"
          label="Your Name"
        />
      </FormControl>

      <FormControl style={{ marginTop: 20, marginBottom: 20 }}>
        <TextField multiline rows={5} variant="outlined" label="Message" />
        <FormHelperText id="my-helper-text">
          Write me something, ask me questions or just chat with me!
        </FormHelperText>
      </FormControl>
      <Button color="primary" variant="outlined">
        Send
      </Button>
    </>
  );
};

const Contacts = () => {
  const css = useStyles();
  const contacts = [
    {
      icon: <IconPhone size={16} />,
      text: "+39 3341037036",
      link: { path: "/" },
    },
    {
      icon: <IconAt size={16} />,
      text: "jeicreationsshop@gmail.com",
      link: { path: "/" },
    },
    {
      icon: <IconPackage size={16} />,
      text: "Spain, Italy",
    },
    {
      icon: <IconBrandInstagram size={16} />,
      text: "@jeicreationsshop",
      link: { path: "/" },
    },
    {
      icon: <IconBrandFacebook size={20} className={css.facebook} />,
      text: "JeicreationsShop",
      link: { path: "/" },
    },
  ];
  return (
    <Box m={2}>
      <Typography variant="h1" align="center" className={css.rainbowText}>
        Contacts
      </Typography>
      <Box display="flex" padding={3}>
        <Grid container>
          <Grid item sm={12} md={6} style={{ textAlign: "center" }}>
            <Typography variant="h2">Meet me</Typography>
            <Box style={{ paddingBottom: 40, paddingTop: 40 }}>
              {contacts.map(({ icon, text, link }, index) => (
                <Box key={index}>
                  {icon}
                  {link ? (
                    <CircleLink as="div" active={false} {...link}>
                      {text}
                    </CircleLink>
                  ) : (
                    <Typography
                      variant="body1"
                      style={{ display: "inline-block", margin: 20 }}
                    >
                      {text}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            sm={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Card
              style={{
                width: "400px",
                padding: "20px",
                borderRadius: "25px",
                marginBottom: "20px",
                textAlign: "left",
              }}
              elevation={2}
            >
              Greetings from Jei
            </Card>
            <Card
              style={{
                width: "400px",
                padding: "30px 20px",
                borderRadius: "25px",
                textAlign: "left",
              }}
              elevation={2}
            >
              <ContactForm />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Home = ({ categories }) => (
  <>
    <Services />
    <Categories categories={categories} />
    <Contacts />
  </>
);

export default function Index({ categories }) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <Home categories={categories} />
    </Layout>
  );
}

export async function getStaticProps() {
  const categories = getCategories();
  return {
    props: { categories },
  };
}
