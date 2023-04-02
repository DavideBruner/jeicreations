import React from "react";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import ProductList from "../../components/ProductList";

import { getCategories } from "../../lib/categories";
import { getProducts } from "../../lib/products";

// import getDataset from "../../modules/next-data-matter/getDataset";

export default function Index({ products, categories, test }) {
  const url = "/products";
  const title = "All products";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ProductList products={products} categories={categories} />
    </Layout>
  );
}

export async function getStaticProps() {
  const products = getProducts();
  const categories = getCategories();
  // const test = getDirectoryContent("products");
  // const [products] = getDataset("product");
  return {
    props: { products, categories },
  };
}
