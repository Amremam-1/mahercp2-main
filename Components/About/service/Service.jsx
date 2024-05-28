"use client"

import styles from "./styles.module.scss"
import { HiOutlineLightBulb } from "react-icons/hi"
import { PiMedalLight } from "react-icons/pi"
import { TbWorldSearch } from "react-icons/tb"
import Image from "next/image"
import { useState } from "react"
import { useLocalization } from "@/hooks/useLocalization"
const Service = () => {
  const [isHovered, setIsHovered] = useState(null)
  const { t } = useLocalization()
  
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div
          className={`${styles.box_one} color85 dark:bg-card`}
          onMouseEnter={() => setIsHovered("box_one")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.box_contant}>
            <PiMedalLight className={styles.icon} />

            <h3 className=" dark:text-white">{t("service-07")}</h3>

            <div className={styles.bar}></div>

            <p className=" dark:text-white">{t("service-08")}</p>
          </div>

          <div>
            <Image
              src={
                isHovered === "box_one"
                  ? "/images/white-dot.png"
                  : "/images/dot.png"
              }
              className={styles.dot}
              alt=""
              width={45}
              height={45}
              loading="lazy"
            />

            <Image
              src={"/images/shape2.svg"}
              className={styles.shape1}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape2.svg"}
              className={styles.shape11}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape1.svg"}
              className={styles.shape2}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape3.svg"}
              className={styles.shape3}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape3.svg"}
              className={styles.shape33}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape3.svg"}
              className={styles.shape333}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape1.svg"}
              className={styles.shape4}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape1.svg"}
              className={styles.shape5}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
          </div>
        </div>

        <div className={`${styles.box_three} color85 dark:bg-card`}>
          <div
            className={styles.box_contant}
            onMouseEnter={() => setIsHovered("box_three")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <TbWorldSearch className={styles.icon} />

            <h3 className=" dark:text-white">{t("service-09")}</h3>

            <div className={styles.bar}></div>

            <p className=" dark:text-white">{t("service-010")}</p>
          </div>
          <div>
            <Image
              src={
                isHovered === "box_three"
                  ? "/images/white-dot.png"
                  : "/images/dot.png"
              }
              className={styles.dot}
              alt=""
              width={45}
              height={45}
              loading="lazy"
            />

            <Image
              src={"/images/shape2.svg"}
              className={styles.shape1}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape2.svg"}
              className={styles.shape11}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape1.svg"}
              className={styles.shape2}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape3.svg"}
              className={styles.shape3}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape3.svg"}
              className={styles.shape33}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
            <Image
              src={"/images/shape3.svg"}
              className={styles.shape333}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape1.svg"}
              className={styles.shape4}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape1.svg"}
              className={styles.shape5}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default Service
