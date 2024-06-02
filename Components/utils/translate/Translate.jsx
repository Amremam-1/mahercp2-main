// "use client"

// import { GrLanguage } from "react-icons/gr"
// import { useLocalization } from "@/hooks/useLocalization"
// import { useEffect, useState } from "react"
// import styles from "./styles.module.scss"
// import classNames from "classnames"

// const Translate = () => {
//   const [scrollHeader, setScrollHeader] = useState("")

//   const [showLanguage, setShowLanguage] = useState(false)
//   const { locale } = useLocalization()

//   // function scroll
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY

//     if (scrollPosition > 1) {
//       setScrollHeader(styles.whiteBackground)
//     } else {
//       setScrollHeader("")
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Function Show Translate Select

//   const handleSelect = () => {
//     setShowLanguage(!showLanguage)
//   }

//   return (
//     <div
//       className={`${styles.translate} ${scrollHeader}`}
//       onClick={handleSelect}
//     >
//       <GrLanguage className={`${styles.global} dark:text-white`} />

//       {showLanguage ? (
//         <div
//           className={classNames(
//             `${styles.selectLanguage} dark:bg-card color85`,
//             {
//               [styles.right]: locale === "en",
//               [styles.left]: locale === "ar",
//             }
//           )}
//         >
//           <button className={`${styles.select} dark:text-white`}>EN</button>
//           <span></span>
//           <button className={`${styles.select} dark:text-white`}>AR</button>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   )
// }

// export default Translate

"use client"

import { GrLanguage } from "react-icons/gr"
import { useLocalization } from "@/hooks/useLocalization"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"

const Translate = () => {
  const [scrollHeader, setScrollHeader] = useState("")
  const [showLanguage, setShowLanguage] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN") // Default language
  const { locale } = useLocalization()

  // function scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 1) {
      setScrollHeader(styles.whiteBackground)
    } else {
      setScrollHeader("")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Function Show Translate Select
  const handleSelect = () => {
    setShowLanguage(!showLanguage)
  }

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
    setShowLanguage(false) // Hide the language options after selection
  }

  return (
    <div
      className={`${styles.translate} ${scrollHeader}`}
      onClick={handleSelect}
    >
      <GrLanguage className={`${styles.global} dark:text-white`} />
      <span className={`${styles.selectedLanguage} dark:text-white`}>
        {selectedLanguage}
      </span>{" "}
      {/* Display selected language */}
      {showLanguage ? (
        <div
          className={classNames(
            `${styles.selectLanguage} dark:bg-card color85`,
            {
              [styles.right]: locale === "en",
              [styles.left]: locale === "ar",
            }
          )}
        >
          <button
            className={`${styles.select} dark:text-white`}
            onClick={() => handleLanguageChange("EN")}
          >
            EN
          </button>
          <span></span>
          <button
            className={`${styles.select} dark:text-white`}
            onClick={() => handleLanguageChange("AR")}
          >
            AR
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Translate
