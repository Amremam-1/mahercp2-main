"use client"
import styles from "./styles.module.scss"
import Image from "next/image"
import { RiDoubleQuotesL } from "react-icons/ri"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useLocalization } from "@/hooks/useLocalization"
import classNames from "classnames"
import { useRef, useState } from "react"

const opinionsContent = [
  {
    icon: RiDoubleQuotesL,
    commentAr:
      "ولاً قمة في التعامل روح وسعة صدر كبيره من الفريق توجيهات رائعة أثناء بناء المشروع وتلبيه كافة التطلبات تقريباً وقمة في التعامل والرد خدمات تستاهل أكثر من السعر المطلوب صراحتاً أتمنى التوفيق لكم والمزيد من النجاح",
    commentEn:
      "The team's spirit of collaboration was remarkable, and their guidance throughout the project was excellent, with most requirements being generously met. The responsiveness and interaction were outstanding, and the service was worth much more than its price. We wish you continued success in the future.",
    clientAr: "محمد السعدي",
    clientEn: "Mohamed Al-Saadi",
  },
  {
    icon: RiDoubleQuotesL,
    commentAr:
      "عند نجاح اي فكرة مشروع لا تتوقف على الفكرة فقط كم من مشاريع تم تنفيذها بأفكار جميلة وتخدم المجتمع ولكن دون نجاح ولذلك يعتبر التسويق من الأساسيات والمكملات لأضلاع المشروع ومن دونها يعتبر المشروع غير مكتمل مهما كانت الفكرة مميز الدراسة التسويقية للمشروع هي من الأساسيات",
    commentEn:
      "When any project idea succeeds, it's crucial not to focus solely on the idea. Many projects with beautiful ideas have been executed to serve the community but lacked success. Therefore, marketing is considered fundamental and complementary to the project's facets. Without it, the project is considered incomplete, no matter how exceptional the idea. Marketing research for the project is one of the basics.",
    clientAr: "ماهر بن نايف",
    clientEn: "Maher Bin Naif",
    titleClientAr: "المدير التنفيذى",
    titleClientEn: "CEO",
  },
  {
    icon: RiDoubleQuotesL,
    commentAr:
      "التصوير والمونتاج رسم عالمك وعرضه لعملائك وكلما كانت الصور والتصميم إحترافي كلما كان لدى عملائك النظرة الاحترافية لأعمالك",
    commentEn:
      "Photography and editing depict your world and present it to your clients. The more professional the images and designs are, the more professional your clients perceive your work",
    clientAr: "ماهر بن نايف",
    clientEn: "Maher Bin Naif",
    titleClientAr: "المدير التنفيذى",
    titleClientEn: "CEO",
  },
]

const Opinions = () => {
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
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="dark:bg-dark secContainer bg-white">
      <div className={styles.container}>
        <div className={styles.left_info}>
          <Image
            src={"/images/bg.jpg"}
            alt=""
            className={styles.img_main}
            width={600}
            height={400}
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src={"/images/1.png"}
            alt=""
            className={styles.img_three}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className={styles.right_info}>
          <div className="conTitle">
            <span>{t("opinion-01")}</span>
            <h2 className="dark:text-white">{t("opinion-02")}</h2>
            <div className="bar"></div>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            autoPlaySpeed={3000}
            ref={carouselRef}
            afterChange={(previousSlide, currentSlide) =>
              setCurrentSlide(currentSlide)
            }
          >
            {opinionsContent.map((opinion, index) => (
              <div
                key={index}
                className={classNames(styles.opinion, {
                  [styles.right]: locale === "ar",
                  [styles.left]: locale === "en",
                })}
              >
                <div
                  className={classNames({
                    [styles.right]: locale === "ar",
                    [styles.left]: locale === "en",
                  })}
                >
                  <opinion.icon className={styles.icon} />
                </div>
                <p>{locale === "en" ? opinion.commentEn : opinion.commentAr}</p>
                <div className={styles.client}>
                  <h3 className="dark:text-white">
                    {locale === "en" ? opinion.clientEn : opinion.clientAr}
                  </h3>
                  <span>
                    {locale === "en"
                      ? opinion.titleClientEn
                      : opinion.titleClientAr}
                  </span>
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
    </div>
  )
}

export default Opinions
