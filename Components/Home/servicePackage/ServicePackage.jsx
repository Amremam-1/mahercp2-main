"use client"

import styles from "./styles.module.scss"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiBullseye } from "react-icons/gi"
import { TbWorldSearch } from "react-icons/tb"
import Image from "next/image"
import { useState } from "react"
import { useLocalization } from "@/hooks/useLocalization"

const ServicePackage = () => {
  const { t } = useLocalization()
  const [isHovered, setIsHovered] = useState(null)

  return (
    <div className="dark:bg-dark secContainer bg-white">
      <div className={styles.container}>
        <div
          className={`${styles.box_one} dark:bg-card color85`}
          onMouseEnter={() => setIsHovered("box_one")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.box_contant}>
            <HiOutlineLightBulb className={styles.icon} />

            <h3 className="dark:text-white">{t("service-01")}</h3>

            <div className={styles.bar}></div>

            <p className="dark:text-white">{t("service-02")}</p>
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
        <div className={styles.box_two}>
          <div className={styles.box_contant}>
            <GiBullseye className={styles.icon} />

            <h3>{t("service-03")}</h3>

            <div className={styles.bar}></div>

            <p>{t("service-04")}</p>
          </div>

          <div>
            <Image
              src={"/images/white-dot.png"}
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

        <div className={`${styles.box_three} dark:bg-card color85`}>
          <div
            className={styles.box_contant}
            onMouseEnter={() => setIsHovered("box_three")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <TbWorldSearch className={styles.icon} />

            <h3 className="dark:text-white">{t("service-05")}</h3>

            <div className={styles.bar}></div>

            <p className="dark:text-white">{t("service-06")}</p>
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
    </div>
  )
}

export default ServicePackage
