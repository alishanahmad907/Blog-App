import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
	const res = await fetch(`http://localhost:3000/api/posts/blarney-castle-tour`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("failed to get post");
	}
	return res.json();
};
const Featured = async () => {
	const data = await getData();
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Welcome To DevScribe!</b>
				<br />
				<span className={styles.subtitle}>Discover our stories and creative ideas</span>
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src={data.img} alt="posts" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>{data.title}</h1>
					<p className={styles.postDesc}>{data.desc.substring(3, 263)}</p>
					<button className={styles.button}>
						<Link href="http://localhost:3000/posts/blarney-castle-tour">Read More</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
