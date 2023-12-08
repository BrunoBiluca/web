import React from "react";
import HeaderInfo from "./components/Header/HeaderInfo";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import Languages from "./components/Languages/Languages";
import WorkExperiences from "./components/WorkExperience/WorkExperiences";
import Certificates from "./components/Certificates/Certificates";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import GamesInfo from "./components/Games/GamesInfo";
import ResumePageService from "./ResumePageService";
import Page from "./components/Page/Page";

export default function ResumeView() {
  let {
    main,
    workExperiences,
    certificates,
    languages,
    skills,
    educations,
    games
  } = ResumePageService.getContent();

  return (
    <div>
      <Page
        header={<HeaderInfo main={main} />}
        side={<>
          <AdditionalInfo main={main} />
          <Languages languages={languages} />
          <Skills skills={skills} />
          <GamesInfo games={games} />
        </>
        }
        content={
          <>
            <WorkExperiences workExperiences={workExperiences} />
            <Education educations={educations} />
            <Certificates certificates={certificates.filter((c, i) => i < 16)} />
          </>
        }
      />
    </div>
  )
}