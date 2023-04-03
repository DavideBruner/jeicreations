import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { GetStaticProps, GetStaticPaths } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

import { getProduct, getProducts } from "../../lib/products";
import getDataset from "../../modules/next-data-matter/getDataset";
import Image from "next/image";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  materials?: string[];
  categories: string[];
  author: string;
  source: MdxRemote.Source;
};

const externalComponents = {
  InstagramEmbed,
  YouTube,
  TwitterTweetEmbed,
};
const components = {
  ...externalComponents,
  // h2: (props) => <Typography variant="h2" {...props} />
};

const Product = ({ source, title, images }: any) => {
  const content = hydrate(source, { components });
  return (
    <Box justifyContent="center">
      <Typography variant="h2">{title}</Typography>
      <Grid container justify="center">
        <Grid item md={6}>
          {images.map((img, index) => (
            <Image key={index} src={img} height={150} width={300} />
          ))}
        </Grid>

        <Grid item md={6}>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export default function ProductPage({ slug, title, ...props }: Props) {
  const url = `/products/${slug}`;

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Product {...props} title={title} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [products, { loading, error }] = getDataset("product");
  // const products = getProducts();
  const paths = products.map((it) => "/products/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.product as string;
  const [product, { loading, error }] = getDataset("product", {
    loadByKey: slug,
  });
  // const product = getProduct(slug);
  const { content, ...data } = product || { content: "" };
  const source = await renderToString(content, {
    components,
    scope: data as any,
  });
  return {
    props: {
      ...data,
      source,
    },
  };
};
