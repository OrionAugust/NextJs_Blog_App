import Link from "next/link";
import styles from "../../styles/post-item.module.css";
import Image from "next/image";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const imagePath=`/images/posts/${slug}/${image}`;
  const linkPath=`/posts/${slug}`;
  const formattedDate = new Date(date).toISOString();
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.imsge}>
          <Image src={imagePath} alt={title} width={300} height={200}></Image>
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
