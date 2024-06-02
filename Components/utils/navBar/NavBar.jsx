"use client"
/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"
import { IoMdArrowDropup } from "react-icons/io"
import { useLocalization } from "@/hooks/useLocalization"

import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { IoLogoTiktok } from "react-icons/io5"
import { FaSnapchatGhost } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi"
import Translate from "../translateMobile/TranslateMobile"

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

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "Main",
    link: "/",
    // showMenu: false,
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "About Us",
    link: "/about",
    // showMenu: false,
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "Our Services",
    link: "",
    icon: IoMdArrowDropdown,
    icon2: IoMdArrowDropup,
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "Our Works",
    link: "/project",
    // showMenu: false,
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "Customer opinions",
    link: "/",
    // showMenu: false,
  },
  {
    id: "06",
    titleAr: "فريق العمل",
    titleEn: "Work Team",
    link: "/team",
    // showMenu: false,
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "Contact Us",
    link: "/contact",
    // showMenu: false,
  },
]

const social = [
  {
    id: "01",
    icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=%2B9660502505095&text&type=phone_number&app_absent=0",
  },
  {
    id: "02",
    icon: FaInstagram,
    link: "https://www.instagram.com/mbn_cp/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: "03",
    icon: IoLogoTiktok,
    link: "https://www.tiktok.com/@mbn_cp?_t=8figzcxh02d&_r=1",
  },
  {
    id: "04",
    icon: FaSnapchatGhost,
    link: "https://www.snapchat.com/add/mbn_cp?share_id=O0udupOfi8U&locale=ar-SA",
  },
  {
    id: "05",
    icon: FaXTwitter,
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fmbn_cp",
  },
  {
    id: "06",
    icon: BiLogoGmail,
    link: "mbn.sm2020@gmail.com [undefined:mbn.sm2020@gmail.com]",
  },
]

const NavBar = ({ isOpen }) => {
  //function change linkColor
  const [activeLink, setActiveLink] = useState("")

  const handleItemClick = (idTitle) => {
    setActiveLink(activeLink === idTitle ? "" : idTitle)
  }

  // functikon open sideBar

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setMenuOpen(isOpen)
  }, [isOpen])

  // function change icon arrow
  const [dropMenu, setDropMenu] = useState()

  const handleDropMenu = (id) => {
    setDropMenu(dropMenu === id ? "" : id)
  }

  const { locale } = useLocalization()

  return (
    <div className={`${styles.navBar} ${isMenuOpen ? styles.open : ""}`}>
      <button className={styles.close} onClick={toggleMenu}>
        <AiOutlineClose className={styles.iconClose} />
      </button>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navList.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link
                className={`${styles.navLink} ${
                  activeLink === item.id ? styles.active : ""
                }`}
                href={item.link}
                onClick={() => {
                  if (item.id !== "03") {
                    toggleMenu()
                  }
                  handleItemClick(item.id)
                  handleDropMenu(item.id)
                }}
              >
                {locale === "en" ? item.titleEn : item.titleAr}

                {item.id === "03" &&
                  (dropMenu === "03" ? (
                    <>
                      <item.icon2 className={styles.icon} />
                    </>
                  ) : (
                    <item.icon className={styles.icon} />
                  ))}
              </Link>

              {dropMenu === "03" && item.id === "03" ? (
                <div className={styles.services}>
                  {navLinks.map((item) => (
                    <div key={item.id}>
                      <Link href={item.link} className={styles.navmenu}>
                        {locale === "en" ? item.titleEn : item.titleAr}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.socails}>
        <ul className={styles.iconsMedia}>
          {social.map((item) => (
            <Link href={item.link} className={styles.icon} key={item.id}>
              <item.icon className={styles.item} />
            </Link>
          ))}

          <Translate />
        </ul>
      </div>
    </div>
  )
}

export default NavBar
