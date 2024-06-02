"use client"

import { GrLanguage } from "react-icons/gr"
import { useLocalization } from "@/hooks/useLocalization"
import { useState } from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"

const Translate = () => {
  const [showLanguage, setShowLanguage] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const { locale } = useLocalization()

  // Function Show Translate Select
  const handleSelect = () => {
    setShowLanguage(!showLanguage)
  }

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
    setShowLanguage(false) // Hide the language options after selection
  }

  return (
    <div className={`${styles.translate}`} onClick={handleSelect}>
      <GrLanguage className={`${styles.global}`} />
      <span className={`${styles.selectedLanguage}`}>
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
