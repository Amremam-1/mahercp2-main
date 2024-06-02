"use client"

/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { IoSearchSharp } from "react-icons/io5"
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { IoCheckmark } from "react-icons/io5"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

import { useLocalization } from "@/hooks/useLocalization"
import classNames from "classnames"

const sliderImages = [
  { image: "/images/service2.jpg" },
  { image: "/images/service1.jpg" },
  { image: "/images/service2.jpg" },
]

const content = [
  {
    id: "01",
    titleAr: "موشن جرافيك",
    titleEn: "Motion graphics",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/motion",
  },
  {
    id: "02",
    titleAr: "تطبيقات ومواقع",
    titleEn: "Applications and websites",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/apps",
  },
  {
    id: "03",
    titleAr: "تسويق ومشاهير",
    titleEn: "Marketing and influencers",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/marketing",
  },
  {
    id: "04",
    titleAr: "خدمات الانتاج الفني",
    titleEn: "Audiovisual production services",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/art",
  },
  {
    id: "05",
    titleAr: "تصميم بوسترات اعلانيه",
    titleEn: "Advertising posters",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/art",
  },
  {
    id: "06",
    titleAr: "تصوير منتجات",
    titleEn: "Product photography",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/product",
  },
  {
    id: "07",
    titleAr: "دراسة المشاريع التقنية",
    titleEn: "Tech project study",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/technique",
  },
  {
    id: "08",
    titleAr: "فاست كارت",
    titleEn: "FactCart",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/fastCart",
  },
  {
    id: "09",
    titleAr: "إدارة المشاريع ميديا",
    titleEn: "Media project management",
    arrowAr: HiOutlineArrowNarrowLeft,
    arrowEn: HiOutlineArrowNarrowRight,
    link: "/service/management",
  },
]

const ServiceDetail = () => {
  const [activeService, setActiveService] = useState("02")
  const [searchQuery, setSearchQuery] = useState("")

  const { t, locale } = useLocalization()

  const handleService = (idService) => {
    setActiveService(activeService === idService ? idService : "")
  }

  const filteredContent = content.filter((item) => {
    return (
      item.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const BreakpointSlides = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    Tdesktop: {
      breakpoint: { max: 1024, min: 767 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 767, min: 560 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="secContainer bg-white dark:bg-black">
      <div className={styles.container}>
        <div className={styles.uk_grid}>
          <div className={styles.uk_sidebar}>
            <div className={`${styles.widget_search} white dark:bg-card`}>
              <form>
                <input
                  className={`${styles.uk_input} dark:bg-card dark:border-dark border51`}
                  type="text"
                  value={searchQuery}
                  placeholder={t("details-01")}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className={classNames({
                    [styles.left]: locale === "en",
                    [styles.right]: locale === "ar",
                  })}
                >
                  <IoSearchSharp className={styles.icon} />
                </button>
              </form>
            </div>

            <div className={styles.service_list}>
              {filteredContent.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div
                    onClick={() => {
                      handleService(item.id)
                    }}
                    className={`${styles.list} ${
                      activeService === item.id ? styles.active : ""
                    } dark:bg-card dark:border-b-dark border50 `}
                  >
                    <span>{locale === "en" ? item.titleEn : item.titleAr}</span>

                    {locale === "en" ? (
                      <item.arrowEn className={styles.arrow} />
                    ) : (
                      <item.arrowAr className={styles.arrow} />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.inner}>
            <h3 className="dark:text-white">{t("details-07")}</h3>
            <p className="color84 dark:text-white">{t("details-08")}</p>

            <div className={styles.services_images_slider}>
              <Carousel
                responsive={BreakpointSlides}
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                autoPlaySpeed={2000}
                showDots={true}
                itemClass="carousel-item"
              >
                {sliderImages.map((item, index) => (
                  <div key={index} className={styles.slider}>
                    <Image
                      className={styles.image}
                      src={item.image}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div>
              <h3>{t("details-09")}</h3>
              <p>{t("details-010")}</p>
            </div>
            <ul className={styles.services_features_list}>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                {t("details-04")}
              </li>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                {t("details-05")}
              </li>
              <li className="dark:text-white">
                <IoCheckmark className={styles.check} />
                {t("details-06")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
