import PageTeam from "@/Components/utils/pageTeam/PageTeam"
import Team from "@/Components/team/team/Team"

export default function TeamPage() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "Main /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "فريق العمل",
      titleEn: "Team Work",
    },
  ]

  const pageTitle = [
    {
      titleAr: "فريق العمل",
      titleEn: "Team Work",
    },
  ]

  return (
    <main>
      <PageTeam pageTitle={pageTitle} links={linksList} />
      <Team />
    </main>
  )
}
