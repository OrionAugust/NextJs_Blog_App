import PostHeader from "./post-header";
import styles from "../../../styles/post-content.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenders = {
    // image(image) {
    //   console.log(image);
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     ></Image>
    //   );
    // },

    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            ></Image>{" "}
          </div>
        );
      }

      return <p>{paragraph.children}</p>
    }

    
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown renders={customRenders}>{post.content}</Markdown>
    </article>
  );
}
