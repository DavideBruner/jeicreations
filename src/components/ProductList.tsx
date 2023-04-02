import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, darken } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import CardStack, { Variant } from "./CardStack";
import Curvedcontainer from "./CurvedContainer";
import ProductFilters from "./ProductFilters";

import { getCategory } from "../lib/categories";

const useStyles = makeStyles((theme) => ({
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
  productCard: {
    width: "300px",
  },
}));

const INITIAL_FILTERS = {
  category: "",
  colors: "",
  materials: "",
};

const colors = [
  {
    name: "Rosa",
    description: "",
  },
  {
    name: "Bianco",
    description: "",
  },
  {
    name: "Blue",
    description: "",
  },
];

const materials = [
  {
    name: "Feltro",
    description: "",
  },
  {
    name: "Cotone",
    description: "",
  },
  {
    name: "Pile",
    description: "",
  },
];

const ProductCard = ({ img, title, color, link }: any) => {
  const css = useStyles();
  const router = useRouter();
  return (
    <Box m={2}>
      <CardStack
        color={darken(color, 0.2)}
        variant={Variant.FAN_LEFT}
        classNames={css.productCard}
        density={30}
        action={() => (link ? router.push(link) : null)}
      >
        <Image src={img} height={150} width={300} />
        <Box p={0} marginTop={2}>
          <Typography variant="overline" align="center" display="block">
            {title}
          </Typography>
        </Box>
      </CardStack>
    </Box>
  );
};

const CategoryProducts = ({ color, name, products, index, last }) => {
  // const variant = (index % 2 == 0) ? 'up' : 'down';
  const variant = index == 0 ? "up" : "down";
  console.log({ name, last, index });

  return (
    <Curvedcontainer
      color={color}
      title={name}
      variant={variant}
      gradient={last}
    >
      <Grid container justify="center">
        {products.map(({ title, images, slug }) => (
          <Grid item md={3} key={title}>
            <ProductCard
              img={images[0]}
              title={title}
              color={color}
              link={`/products/${slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Curvedcontainer>
  );
};

const useProductList = ({ products, selectedFilters }) => {
  console.log({ selectedFilters });
  const filteredProducts = products.filter(({ categories }) => {
    return (
      !selectedFilters.category.length ||
      categories.some((category) => selectedFilters.category.includes(category))
    );
  });

  const productsByCategories = filteredProducts.reduce(
    (acc, { categories, ...product }) => {
      let result;
      categories.forEach((category) => {
        result = {
          ...acc,
          [category]: [...(acc[category] || []), product],
        };
      });
      return result;
    },
    {}
  );

  return productsByCategories;
};

export default function ProductList({ products, categories }) {
  const router = useRouter();
  const css = useStyles();
  const filters = router.query as {};
  console.log(filters);

  const { pathname, push } = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<any>({
    ...INITIAL_FILTERS,
    ...filters,
  });

  useEffect(() => {
    setSelectedFilters({
      ...INITIAL_FILTERS,
      ...filters,
    });
  }, [filters]);

  const productsByCategories = useProductList({ products, selectedFilters });

  const handleUpdateFilters = (filterType, value) => {
    const filterValues = selectedFilters[filterType].split(",");
    const index = filterValues.indexOf(value);
    index >= 0 ? filterValues.splice(index, 1) : filterValues.push(value);

    const newFilters = {
      ...selectedFilters,
      [filterType]: filterValues.join(","),
    };

    setSelectedFilters(newFilters);
    const query = new URLSearchParams(newFilters);
    push({ pathname, query: query.toString() }, undefined, { shallow: true });
  };

  const resetFilters = () => {
    setSelectedFilters(INITIAL_FILTERS);
    push({ pathname, query: "" }, undefined, { shallow: true });
  };

  console.log({ productsByCategories });

  return (
    <Box textAlign="center" paddingY={4}>
      <Typography variant="h1" className={css.rainbowText}>
        Products
      </Typography>

      <ProductFilters
        dataSource={{ categories, colors, materials }}
        updateFilters={handleUpdateFilters}
        selectedFilters={selectedFilters}
        resetFilters={resetFilters}
      />

      {Object.entries(productsByCategories).map(
        ([category, products], index) => (
          <CategoryProducts
            {...getCategory(category)}
            key={category}
            products={products}
            index={index}
            last={index == Object.keys(productsByCategories).length - 1}
          />
        )
      )}
    </Box>
  );
}
