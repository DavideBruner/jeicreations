import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

export type DataContent = {
  readonly date: string;
  // readonly title: string;
  readonly slug: string;
  // readonly tags?: string;
  // readonly categories?: string;
  // readonly materials?: string;
  fullPath: string;
};

export function parseFile(filePath){
  // Read file as string
  const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the file metadata
  return matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    }
  }); 
}

export function getFileContent(fileName, directory) {
  const fullPath = path.join(directory, fileName);
  const { data, content } = parseFile(fullPath)
  const matterData = data as DataContent;
  matterData.fullPath = fullPath;

  // const slug = fileName.replace(`.${extension}`, "");
  // Validate slug string
  // if (matterData.slug !== slug) {
  //   throw new Error(
  //     "slug field not match with the path of its content source"
  //   );
  // }

  return {
    ...matterData,
    content,
  }
}

let dataCache;
export function getDirectoryContent(directory, extension){
  const dataDirectory = path.join(process.cwd(), directory);

  if (dataCache) {
    return dataCache;
  }
  // Get file names under /directory
  const fileNames = fs.readdirSync(dataDirectory);
  
  const allData = fileNames
    .filter((it) => it.endsWith(extension))
    .map((fileName) => getFileContent(fileName, dataDirectory));

  // Sort posts by date
  dataCache = allData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return dataCache;
}
