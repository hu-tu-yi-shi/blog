export const blogConfig = {
  url: "https://hutuyishi.cn",
  title: "糊涂的博客",
  titleParts: ["kfir", "blog"],
  author: "糊涂",
  pages: {
    home: {
      title: "Web Development Blog by Kfir Fitousi",
      description:
        "My name is Kfir and I'm a Full Stack Developer. Welcome to my dev blog! I write about Web Development and other topics I'm interested in.",
    },
    posts: {
      url: "/posts",
      title: "Posts",
      description:
        "All my blog posts. I write about Web Development and other topics I'm interested in.",
    },
  },
  theme: {
    accentColor: {
      light: "#be123c",
      dark: "#fda4af",
    },
    codeBlockTheme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  giscus: {
    repo: "kfirfitousi/blog111",
    repoId: "R_kgDOIcM7J11111A",
    category: "Comments",
    categoryId: "DIC_kwDOIcM7JM4CTdK0",
    mapping: "title",
    theme: {
      light: "light",
      dark: "dark_dimmed",
    },
  },
  footerLinks: {
    twitter: "https://twitter.com/kp2c",
  },
  topics: [
    "Web Development",
    "React",
    "TypeScript",
    "Next.js",
    "Design",
    "Computer Vision",
  ],
};
