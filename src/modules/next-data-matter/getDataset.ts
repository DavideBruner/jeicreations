import getDatasetResults from './getDatasetResults';
import getConfigSettings from './getConfigSettings';

/** */
export default function getDataset(name, options = {}) {
  const config = getConfigSettings(name);
  // Now we could check if we fetched already this content and we saved into a cache object

  return getDatasetResults(config, options);
}