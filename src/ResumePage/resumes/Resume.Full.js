import { skills } from "ResumePage/data/Skills";
import ResumeBuilder from "./ResumeBuilder";
import { mainInformation } from "ResumePage/data/MainInformation";
import { certificates } from "ResumePage/data/Certificates";
import { games } from "ResumePage/data/Games";
import { languages } from "ResumePage/data/Languages";
import { workExperiences } from "ResumePage/data/WorkExperiences";
import { educations } from "ResumePage/data/Educations";
import { toList } from "helpers/DictExtensions";

export default function get_content() {
  return new ResumeBuilder()
    .withMain(mainInformation)
    .withCertificates(toList(certificates))
    .withGames(games)
    .withLanguages(languages)
    .withWorkExperiences(toList(workExperiences))
    .withSkills(skills)
    .withEducations(toList(educations))
    .build()
}