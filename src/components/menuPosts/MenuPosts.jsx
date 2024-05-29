"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css";

const getData = async (slug) => {
	const res = await fetch(`/api/posts/${slug}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to get post");
	}
	return res.json();
};

const fetchDataForSlugs = async (slugs) => {
	return await Promise.all(
		slugs.map(async (slug) => {
			try {
				const postData = await getData(slug);
				return postData;
			} catch (error) {
				console.error(`Failed to fetch data for slug: ${slug}`, error);
				return null;
			}
		})
	);
};

const MenuPosts = ({ withImage }) => {
	const [popularPosts, setPopularPosts] = useState([]);
	const [editorPosts, setEditorPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const popularSlugs = [
			"india-travel-guide",
			"what-to-expect-from-the-latest-farm-bill-negotiations",
			"where-are-you-reading-this-thats-where-food-system-transformation-is-happening",
			"historic-conversations-a-rapa-nui-travelogue",
		];

		const editorSlugs = [
			"working-hard-every-day-to-create-that-brilliance-the-women-goldbeaters-making-history-in-japan",
			"python-vs-javascript-most-important-differences",
			"top-workout-trends-for-hollistic-well-being-in-2024",
			"large-language-model-llm",
		];

		const fetchPosts = async () => {
			const [popularData, editorData] = await Promise.all([
				fetchDataForSlugs(popularSlugs),
				fetchDataForSlugs(editorSlugs),
			]);
			setPopularPosts(popularData.filter(post => post !== null));
			setEditorPosts(editorData.filter(post => post !== null));
			setLoading(false);
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	const renderPosts = (posts) => {
		return posts.map((post) => (
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
		));
	};

	return (
		<div className={styles.items}>
			{withImage ? renderPosts(editorPosts) : renderPosts(popularPosts)}
		</div>
	);
};

export default MenuPosts;
