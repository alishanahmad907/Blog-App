import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const getData = async (slug) => {
	const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("failed to get post");
	}
	return res.json();
};
const fetchDataForSlugs = async (slugs) => {
	const data = [];

	for (const slug of slugs) {
		try {
			const postData = await getData(slug);
			data.push(postData);
		} catch (error) {
			console.error(`Failed to fetch data for slug: ${slug}`, error);
		}
	}

	return data;
};
const MenuPosts = async ({ withImage }) => {
	//todo: abhi kaam baaqi hai

	const popularSlugs = ["india-travel-guide", "what-to-expect-from-the-latest-farm-bill-negotiations", "where-are-you-reading-this-thats-where-food-system-transformation-is-happening", "historic-conversations-a-rapa-nui-travelogue"];

	const editorSlugs = ["working-hard-every-day-to-create-that-brilliance-the-women-goldbeaters-making-history-in-japan", "python-vs-javascript-most-important-differences", "top-workout-trends-for-hollistic-well-being-in-2024" ,"large-language-model-llm"];
	const data1 = await fetchDataForSlugs(popularSlugs);
	const data2 = await fetchDataForSlugs(editorSlugs);

	// console.log(data);
	return (
		<div className={styles.items}>
			{withImage
				? data2.map((post) => (
						<Link href={`/posts/${post.slug}`} className={styles.item} key={post.id}>
							{withImage && post.img && (
								<div className={styles.imageContainer}>
									<Image src={post.img} alt={post.title} fill className={styles.image} />
								</div>
							)}
							<div className={styles.textContainer}>
								<span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<div className={styles.detail}>
									<span className={styles.username}>{post.user.name}</span>
									<span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
								</div>
							</div>
						</Link>
				  ))
				: data1.map((post) => (
						<Link href={`/posts/${post.slug}`} className={styles.item} key={post.id}>
							{withImage && post.img && (
								<div className={styles.imageContainer}>
									<Image src={post.img} alt={post.title} fill className={styles.image} />
								</div>
							)}
							<div className={styles.textContainer}>
								<span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<div className={styles.detail}>
									<span className={styles.username}>{post.user.name}</span>
									<span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
								</div>
							</div>
						</Link>
				  ))}

		</div>
	);
};

export default MenuPosts;
