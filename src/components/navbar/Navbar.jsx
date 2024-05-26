import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.social}>
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
			<Link href="/">
				<div className={styles.logo}>DevScribe</div>
			</Link>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href="/" className={styles.link}>
					Homepage
				</Link>

				<Link href="/" className={styles.link}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
