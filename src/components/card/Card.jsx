import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="posts" fill className={styles.image}/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2021 | </span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href="/">
					<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, error.</h1>
				</Link>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, error, vel dolores unde suscipit possimus sapiente commodi dignissimos tempora, soluta ex magni ipsum modi molestiae.</p>
				<Link href="/">Read More</Link>
			</div>
		</div>
	);
};

export default Card;
