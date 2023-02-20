// import { writeFileSync } from 'fs'
// import RSS from 'rss'
// import { allArticles } from "../contentlayer/generated";


// const feed = new RSS({
//   title: "Glenh.me",
//   feed_url: 'localhost:3000/rss.xml',
//   site_url: 'localhost:3000',
// })

// allArticles.map((article) => ({
//   title: article.title,
//   description: article.description,
//   url: `localhost:3000/articles/${article.slug}`,
//   date: article.publishedAt,
// })).forEach((item) => {
//   feed.item(item)
// })

// writeFileSync('./public/rss.xml', feed.xml({ indent: true }))