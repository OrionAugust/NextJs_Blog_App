import Image from "next/image";
import HeroImage from "../../public/images/site/boy.png";
import styles from "../../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={HeroImage} alt="hero" width={250} height={250}></Image>
      </div>
      <h1>Hi I'm Santhosh</h1>
      <p>Blogs on Web Devlopment</p>
    </section>
  );
}
