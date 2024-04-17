import PostGrid from "./posts-grid";
import styles from "../../styles/all-posts.module.css";

export default function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
