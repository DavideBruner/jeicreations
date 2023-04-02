import matter from 'gray-matter';
import yaml from "js-yaml";
import { basename } from 'path';

export const DEFAULT_PARSER = ({ fileExt, fileName, fullPath, fileContents }, options = {}) => {
  // Remove the .ext from file name to get id
  const id = basename(fileName, fileExt);
  // Use gray-matter to parse the post metadata section
  const { orig, data, ...rest } = matter(fileContents, options);
  // Combine the data with the id
  return { id, ...data, ...rest };
}

export const DEFAULT_CONFIG_OPTIONS = {
  parser: { 
    processor: DEFAULT_PARSER,
    options: {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      }
    },
  },
  dataKey: false,
}