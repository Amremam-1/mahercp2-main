"use clinet"

import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import { useLocalization } from "@/hooks/useLocalization"
import classNames from "classnames"

const navLinks = [
  {
    id: "01",
    titleAr: "موشن جرافيك",
    titleEn: "Motion graphics",
    link: "/service/motion",
  },
  {
    id: "02",
    titleAr: "تطبيقات ومواقع",
    titleEn: "Applications and websites",
    link: "/service/apps",
  },
  {
    id: "03",
    titleAr: "تسويق ومشاهير",
    titleEn: "Marketing and influencers",
    link: "/service/marketing",
  },
  {
    id: "04",
    titleAr: "خدمات الانتاج الفني",
    titleEn: "Audiovisual production services",
    link: "/service/art",
  },
  {
    id: "05",
    titleAr: "تصميم بوسترات اعلانيه",
    titleEn: "Advertising posters",
    link: "/service/poster",
  },
  {
    id: "06",
    titleAr: "تصوير منتجات",
    titleEn: "Product photography",
    link: "/service/product",
  },
  {
    id: "07",
    titleAr: "دراسة المشاريع التقنية",
    titleEn: "Tech project study",
    link: "/service/technique",
  },
  {
    id: "08",
    titleAr: "فاست كارت",
    titleEn: "FactCart",
    link: "/service/fastCart",
  },
  {
    id: "09",
    titleAr: "إدارة المشاريع ميديا",
    titleEn: "Media project management",
    link: "/service/management",
  },
]

const DropMenu = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false)

  const { locale } = useLocalization()
  useEffect(() => {
    if (show) {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }, [show])

  return (
    <div
      className={`${classNames(styles.DropMenu, {
        [styles.DropMenuAr]: locale === "ar",
        [styles.DropMenuEn]: locale === "En",
      })} ${isHovered ? styles.show : ""}`}
    >
      {navLinks.map((item) => (
        <div key={item.id}>
          <Link
            href={item.link}
            className={classNames(styles.navmenu, {
              [styles.element]: locale === "en",
            })}
          >
            {locale === "en" ? item.titleEn : item.titleAr}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default DropMenu
