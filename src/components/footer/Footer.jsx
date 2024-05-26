import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<h1 className={styles.logoText}>DevScribe</h1>
				</div>
				<div className={styles.icons}>
					<Link href="https://www.linkedin.com/in/ali-shan-ahmad-931570286/">
						<Image src="/linkdin.png" alt="linkdin" width={24} height={23} />
					</Link>
					<Link href="https://www.instagram.com/ali_xhann/">
						<Image src="/instagram.png" alt="instagram" width={24} height={23} />
					</Link>
					<Link href="https://github.com/alishanahmad907">
						<Image src="/github.png" alt="github" width={24} height={23} />
					</Link>
				</div>
				<p className={styles.desc}>
					Welcome to our blog, your ultimate destination for insightful articles and engaging stories across various categories including Travel, Culture, Food, Fashion, and more. Our mission is to inspire and inform our readers with high-quality content crafted by passionate writers. Whether you're
					looking for travel guides, cultural insights, delicious recipes, or the latest fashion trends, we have something for everyone. Join our community and stay updated with the latest posts by subscribing to our newsletter. Happy reading!
				</p>
			</div>

			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/blog?cat=style">Style</Link>
					<Link href="/blog?cat=fashion">Fashion</Link>
					<Link href="/blog?cat=coding">Coding</Link>
					<Link href="/blog?cat=travel">Travel</Link>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					
					<Link href="https://www.instagram.com/ali_xhann/">Instagram</Link>
					<Link href="https://github.com/alishanahmad907">GitHub</Link>
					<Link href="https://www.linkedin.com/in/ali-shan-ahmad-931570286/">Linkdin</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
