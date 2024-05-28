import Title from "@/Components/Projects/title/Title"
import PageHead from "@/Components/utils/PageHead/PageHead"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function AboutPage(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()
  
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "main   /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "أعمالنا",
      titleEn: "Projects",
    },
  ]

  const pageTitle = [
    {
      titleAr: "أعمالنا",
      titleEn: "Projects",
    },
  ]
  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <Title />
      </NextIntlClientProvider>
    </main>
  )
}
