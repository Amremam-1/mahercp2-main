import PageHead from "@/Components/utils/PageHead/PageHead"
import Contact from "@/Components/contact/Contact"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function ContactPage(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "Main  /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "اتصل بنا",
      titleEn: "Contact Us",
    },
  ]
  const pageTitle = [
    {
      titleAr: "اتصل بنا",
      titleEn: "Contact Us",
    },
  ]

  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <Contact />
      </NextIntlClientProvider>
    </main>
  )
}
