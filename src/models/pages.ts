import { readdirSync } from 'fs';
import { extname, basename } from 'path';
import matter from "gray-matter";
import yaml from "js-yaml";

// import { DEFAULT_LOCALE } from 'core/config';
// import { Locale } from 'types/app';

// const BASE_LOCALE = DEFAULT_LOCALE;
const BASE_CONTENT_PATH = 'content';

// const merge = (a: any, b: any) => {
//   if ('attributes' in a) {
//     return {
//       attributes: { ...a.attributes, ...(b.attributes || {}) },
//       react: b.react || a.react
//     };
//   }

//   return { ...a, ...b };
// };

// 
export const getContent = <T>(
  collection: string,
  slug: string,
  extension = 'md',
  locale?: Locale | null
): any => {
  // if (locale) {
  //   const base = require(`content/${collection}/${BASE_LOCALE}/${slug}.${extension}`);
  //   let translation = {};

  //   try {
  //     translation = require(`content/${collection}/${locale}/${slug}.${extension}`);
  //   } catch (err) {
  //     console.error(`Missing ${locale} translations for ${collection}.${slug}`);
  //   }

  //   return merge(base, translation);
  // }
  return require(`${BASE_CONTENT_PATH}/${collection}/${slug}.${extension}`);
};

// 
export const getFileContent = (fname) => {
  // Use gray-matter to parse the file metadata
  return matter(fname, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    }
  });
}

// 
export const getDirectoryContent = (collection: string, localised = false) =>
  readdirSync(`${BASE_CONTENT_PATH}/${collection}`).forEach(file => {
    console.log(file);
    return { name: 'Pi' };
    // return getContent(file, extension)
    //   .filter(fname => extname(fname) === extension)
    //   .map(fname => basename(fname, extname(fname)))
    //   .map((fname) => getFileContent(fname));
  });
  



    