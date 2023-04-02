import { DEFAULT_CONFIG_OPTIONS } from "./constants";
import path from 'path';

 // @TODO we should load this from a specific config file instead
const config = {
  datasets: {
    post: {
      source: path.resolve('./content/posts'),
      // parser: (filePath, fileName, extension) => {}
      dataKey: 'slug', // By default it uses the fileName
    },
    product: {
      source: path.resolve('./content/products'),
      dataKey: 'slug', // By default it uses the fileName
    },
    meta: {
      source: path.resolve('./meta/categories'),
    },
  }
};

export default function getConfigSettings(name) {
  if (!config?.datasets) {
    throw new Error(`No dataset found in the next.config.js`);
  }

  if (!config?.datasets[name]) {
    throw new Error(`The dataset ${name} is not defined in the next.config.js`);
  }

  const { source, ...customConfig } = config?.datasets[name];

  if (!source) {
    throw new Error(`The dataset ${name} has not source`);
  }

  return {
    ...DEFAULT_CONFIG_OPTIONS,
    ...customConfig,
    source,
  }
}