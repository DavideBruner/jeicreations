import { readdirSync, readFileSync } from 'fs';
import { extname, join } from 'path';

/** */
export default function getDatasetResults(config, options) {
  let error = false;
  const { source, parser, dataKey } = config;
  const fileNames = readdirSync(source);

  let data = fileNames.reduce((files, fileName) => {
    // Read file as string
    const fileExt = extname(fileName);
    const fullPath = join(source, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');

    // Use parser to parse the post metadata section
    let { id, ...data } = parser.processor({ fileExt, fileName, fullPath, fileContents }, parser?.options);
    const key = dataKey && data[dataKey] ? data[dataKey] : id;
    
    return { ...files, [key] : { id, ...data }};
  }, []);

  const results = processDataset(data, options);
  return [results, { error }];
}

/** */
function processDataset(data, options) {
  // const { filterBy, loadByKey, loadBy, sortBy } = options;
  // @TODO Well here we should think a bit better on how filter and sort out data before returing
  console.log({ data, options });
  if(options.loadByKey) return data[options.loadByKey];

  data = options.filterBy ? Object.fromEntries(Object.entries(data).filter(options.filterBy)) : data;
  data = options.sortBy ? Object.fromEntries(Object.entries(data).sort(options.sortBy)) : data;
  return options.keepKeys ? data : Object.values(data);
}
