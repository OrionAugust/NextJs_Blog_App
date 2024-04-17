import styles from "../../styles/featured-posts.module.css";
import PostGrid from "../posts/posts-grid";

export default function FeaturedPost(props) {


  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
}
