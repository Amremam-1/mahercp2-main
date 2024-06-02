"use client"

import React, { useRef, useState } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useLocalization } from "@/hooks/useLocalization"

const projects = [
  {
    image: "/images/img4.png",
    titleAr: "بي ستيم",
    titleEn: "By steam",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img5.png",
    titleAr: " TIA",
    titleEn: "TIA",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img6.png",
    titleAr: "متجر نص | Half",
    titleEn: "Half",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img3.PNG",
    titleAr: "BE-STEAM Parent",
    titleEn: "BE-STEAM Parent",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img7.png",
    titleAr: "D2020  موقع",
    titleEn: "Website D2020",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img1.png",
    titleAr: "العربي للنشر والتوزيع",
    titleEn: "Arabic Publishing",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
  {
    image: "/images/img2.PNG",
    titleAr: "متجر نص | Half",
    titleEn: "Half",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
  },
]

const CompletedProjects = () => {
  const { t, locale } = useLocalization()

  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [activeButton, setActiveButton] = useState(1)

  const toggle = (buttonIndex) => {
    setActiveButton(activeButton === buttonIndex ? buttonIndex : buttonIndex)
  }
  const nextSlide = () => {
    carouselRef.current.next()
    setCurrentSlide((prevIndex) => prevIndex + 1)
  }

  const prevSlide = () => {
    carouselRef.current.previous()
    setCurrentSlide((prevIndex) => prevIndex - 1)
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    Tdesktop: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 560 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  }

  return (
    <section className={`${styles.section} color84 bg-white`}>
      <div className="dark:bg-dark secContainer">
        <div className={styles.container}>
          <div>
            <div className={`${styles.Title} conTitle`}>
              <span>{t("completeProject-01")}</span>
              <h2 className="dark:text-white">{t("completeProject-02")}</h2>
              <div className="bar"></div>
            </div>
            <Link href="/service/motion">
              <button className={`btn ${styles.contact}`}>
                {t("completeProject-03")}
              </button>
            </Link>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            //   transitionDuration={500}
            autoPlaySpeed={2000}
            ref={carouselRef}
            afterChange={(previousSlide, currentSlide) =>
              setCurrentSlide(currentSlide)
            }
          >
            {projects.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.single_project}>
                  <Link href="#" className={styles.project_img}>
                    <Image
                      src={item.image}
                      alt=""
                      className={styles.pro_img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                    />
                  </Link>

                  <div
                    className={`${styles.project_content} color84 dark:bg-card`}
                  >
                    <h3 className="dark:text-white">
                      <Link href="#">
                        {locale === "en" ? item.titleEn : item.titleAr}
                      </Link>
                    </h3>
                    <span className="color84 dark:text-white">
                      {locale === "en" ? item.subtitleEn : item.subtitleAr}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <div className={styles.customNavigation}>
            <button
              onClick={() => {
                nextSlide()
                toggle(1)
              }}
            >
              <span
                className={activeButton === 1 ? `${styles.active}` : ""}
              ></span>
            </button>
            <button
              onClick={() => {
                prevSlide()
                toggle(2)
              }}
            >
              <span
                className={activeButton === 2 ? `${styles.active}` : ""}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompletedProjects
