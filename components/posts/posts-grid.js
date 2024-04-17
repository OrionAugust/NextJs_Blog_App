import styles from "../../styles/post-grid.module.css";
import PostItem from "./post-item";

export default function PostGrid({ posts }) {
  return <ul className={styles.grid}>
    {posts && posts.map((post) => <PostItem key={post.slug} post={post} /> )}
  </ul>;
}
