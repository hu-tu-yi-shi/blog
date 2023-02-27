import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { allPosts } from "contentlayer/generated";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const latestPosts = allPosts
    // .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <main className={styles.main}>
      <h1>糊涂的博客</h1>

      {latestPosts.map((post) => (
        <div key={post._id}> {post.title} </div>
      ))}
    </main>
  );
}
