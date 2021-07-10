import React from 'react';

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import ProductList from '../../components/ProductList';

export default function Index({ filters }) {
  const url = "/products";
  const title = "All products";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ProductList filters={filters} />
    </Layout>
  );
}

export async function getInitialProps({ query, ...rest }) {
  const queryParams = new URLSearchParams(query);
  const category = queryParams.getAll('category');
  const colors = queryParams.getAll('colors');
  const materials = queryParams.getAll('materials');
  
  const filters = {
    category: category.length > 0 ? category[0] : "",
    colors: colors.length > 0 ? colors[0] : "",
    materials: materials.length > 0 ? materials[0] : "",
  };

  return {
    props: { filters }
  }
 }
