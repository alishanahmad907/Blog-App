import React from 'react';
import styles from './About.module.css'; // Assuming you have CSS modules setup
import ContactUs from "@/components/contactus/ContactUs";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>About Me</h1>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Welcome to My Blog</h2>
          <p className={styles.paragraph}>
            Welcome to my blog, your ultimate destination for insightful articles and engaging stories across various categories including Travel, Culture, Food, Fashion, and more. My mission is to inspire and inform my readers with high-quality content crafted with passion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Who I Am</h2>
          <p className={styles.paragraph}>
            I am an enthusiastic writer and blogger dedicated to bringing you the best in various niches. I have a deep interest in travel, food, culture, and fashion, and I aim to provide you with content that is both informative and entertaining.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>My Mission</h2>
          <p className={styles.paragraph}>
            My mission is to create a vibrant community where readers can find reliable information, get inspired, and share their own experiences. I strive to produce content that not only informs but also sparks curiosity and encourages exploration.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>What I Offer</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Travel Guides:</strong> Discover new destinations, travel tips, and guides that will make your journeys unforgettable.</li>
            <li className={styles.listItem}><strong>Cultural Insights:</strong> Explore diverse cultures, traditions, and lifestyles from around the world.</li>
            <li className={styles.listItem}><strong>Food Recipes:</strong> Delight in my collection of recipes, cooking tips, and culinary adventures.</li>
            <li className={styles.listItem}><strong>Fashion Trends:</strong> Stay updated with the latest fashion trends, style tips, and beauty advice.</li>
            <li className={styles.listItem}><strong>Personal Stories:</strong> Read personal stories and experiences shared by me and the community.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>My Vision</h2>
          <p className={styles.paragraph}>
            I envision a world where information is accessible, engaging, and enriching. Through my blog, I aim to bridge gaps, foster understanding, and build a community that values knowledge and creativity.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Join the Community</h2>
          <p className={styles.paragraph}>
            I invite you to join the growing community of readers and contributors. Subscribe to my newsletter to stay updated with the latest posts, follow me on social media, and feel free to share your thoughts and stories with me.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Contact Me</h2>
          <p className={styles.paragraph}>
            If you have any questions, suggestions, or feedback, please do not hesitate to reach out. I value your input and look forward to hearing from you.
          </p>
          <p className={styles.paragraph}>
            Thank you for visiting my blog. I hope you enjoy reading my posts as much as I enjoy creating them for you.
          </p>
        </section>

        <ContactUs />

      </div>
    </div>
  );
};

export default About;
