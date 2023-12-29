import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://i.pinimg.com/236x/08/d8/4f/08d84fa41cd2f4972358edcb680f3753.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Tourist organization</h1>
          <h2 className={styles.imgDesc}>
            memorable experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
           
            <br />
            <br />
            
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
        
            <br />
            <br /> - help you to make unforgottable memmories
            <br />
            <br /> - Travelling in Georgia
            <br />
            <br /> - help you to dind out incredible places
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;