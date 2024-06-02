import styles from "./styles.module.scss"
import { IoColorFilterOutline } from "react-icons/io5"
import { HiOutlineMegaphone } from "react-icons/hi2"
import { HiOutlineFilm } from "react-icons/hi2"
import { IoCameraOutline } from "react-icons/io5"
import { HiOutlinePresentationChartBar } from "react-icons/hi"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"
import { MdOutlineLaptopMac } from "react-icons/md"
import { TiShoppingCart } from "react-icons/ti"
import { MdOutlineSettingsSuggest } from "react-icons/md"
import { useLocale, useTranslations } from "next-intl"

const Content = [
  {
    titleAr: "موشن جرافيك",
    titleEn: "Motion graphics",
    icon: IoColorFilterOutline,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/motion",
  },
  {
    titleAr: "تطبيقات ومواقع",
    titleEn: "Apps and websites",
    icon: MdOutlineLaptopMac,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/apps",
  },
  {
    titleAr: "تسويق ومشاهير",
    titleEn: "Marketing and celebrity",
    icon: HiOutlineMegaphone,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/marketing",
  },
  {
    titleAr: "خدمات الانتاج الفني",
    titleEn: "Technical production services",
    icon: HiOutlineFilm,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/art",
  },
  {
    titleAr: "تصوير منتجات",
    titleEn: "Products photography",
    icon: IoCameraOutline,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/product",
  },
  {
    titleEn: "Study of technical projects",
    titleAr: "دراسة المشاريع التقنية",
    icon: HiOutlinePresentationChartBar,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/technique",
  },
  {
    titleAr: "فاست كارت",
    titleEn: "FastCart",
    icon: TiShoppingCart,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/fastCart",
  },
  {
    titleAr: "إداره سوشيال ميديا",
    titleEn: "Social media management",
    icon: MdOutlineSettingsSuggest,
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/management",
  },
]

const ServiceContent = () => {
  const t = useTranslations("HomePage")
  const locale = useLocale()

  return (
    <div className="dark:bg-dark secContainer bg-white">
      <div className={styles.container}>
        <div className="conTitle">
          <span>{t("serviceContent-01")}</span>
          <h2 className="dark:text-white">{t("serviceContent-02")}</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.uk_grid}>
          {Content.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={item.link}>
              <div
                className={`${styles.single_services} color85 dark:bg-card `}
                key={index}
              >
                <div className={styles.item}>
                  <span className="dark:bg-dark white">
                    <item.icon className={styles.icon} />
                  </span>
                  <h3 className="dark:text-white">
                    {locale === "ar" ? item.titleAr : item.titleEn}
                  </h3>
                  <item.arrow className={styles.arrow} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceContent
