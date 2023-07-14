import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    emoji: <>&#127922;</>,
    title: "Reusable Card Components",
    description: (
      <>
        Cardify provides a wide range of pre-designed card components for
        various use cases, including basic cards, image cards, product cards,
        blog post cards, and more.
      </>
    ),
  },
  {
    emoji: <>&#128241;</>,
    title: "Responsive and Mobile-Friendly",
    description: (
      <>
        Cardify ensures that the card components are responsive and optimized
        for different screen sizes, offering a seamless experience across
        devices.
      </>
    ),
  },
  {
    emoji: <>&#9889;</>,
    title: "Simplified Card Layout Creation",
    description: (
      <>
        By using Cardify, developers can save time and effort in designing and
        coding card layouts from scratch, accelerating the development process.
      </>
    ),
  },
];

function Feature({ emoji, title, description }) {
  return (
    <div className={`${clsx("col col--4")} ${styles.card}`}>
      <div className={styles.card__box}>
        <div>
          <span>{emoji}</span> <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
