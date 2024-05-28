import { useTranslations, useLocale } from "next-intl"

export const useLocalization = () => {
  const t = useTranslations("HomePage")
  const locale = useLocale()

  return { t, locale }
}
