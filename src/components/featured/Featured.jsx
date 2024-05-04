import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Welcome To DevScribe!</b>
				<br />
				<span className={styles.subtitle}>Discover our stories and creative ideas</span>
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src="/p1.jpeg" alt="posts" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
					<p className={styles.postDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione atque officia libero velit sit asperiores possimus alias eius facilis soluta repellendus iusto commodi, enim perspiciatis. Facere maiores natus obcaecati perferendis!</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
