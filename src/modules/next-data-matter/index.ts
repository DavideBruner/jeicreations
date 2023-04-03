// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops

// Example of use
// import { getDataset } from 'next-data-matter';

// Configure a default setup
// const config = {
//   datasets: {
//     post: {
//       source: './content/posts',
//       parser: {
//         process: ({ fileName, fullPath, fileContents }, options) => {},
//         normalize: (entry) => ({ })
//         options: {
//           engines: {
//              yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
//           }
//         }
//       },
//     },
//     product: {
//       source: './content/products',
//     },
//   }
// };

// Load all the data
// const [posts, { loading, error }] = getDataset('post');

// Filter out the data
// const [publishedPosts, { loading, error }] = getDataset('post', {
//   filterBy: ([key, post]) => post.published,
// })

// Sort out the data
// const [publishedPosts, { loading, error }] = getDataset('post', {
//   sortBy: ([,prev], [,curr]) => prev.created > curr.created,
// })

// Load single post
// const [post, { loading, error }] = getDataset('post', {
//   loadByKey: 'nice-post',
// })

export default {};
