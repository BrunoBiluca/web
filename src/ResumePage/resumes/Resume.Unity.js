import ResumeBuilder from "ResumePage/resumes/ResumeBuilder";
import { loc } from "services/LocaleStringBuilder";
import { workExperiences } from "../data/WorkExperiences";
import { certificates } from "../data/Certificates";
import { skills } from "ResumePage/data/Skills";
import { mainInformation } from "ResumePage/data/MainInformation";
import { games } from "ResumePage/data/Games";
import { languages } from "ResumePage/data/Languages";
import { toList } from "helpers/DictExtensions";
import { educations } from "ResumePage/data/Educations";

export default function get_content() {
  return new ResumeBuilder()
    .withMain(mainInformation)
    .withJobGoal(loc("Desenvolvedor Unity", "Unity Developer"))
    .withGames(games)
    .withLanguages(languages)
    .withEducations(toList(educations))
    .withSkills(skills)
    .addExperience(workExperiences.gh)
    .addExperience(workExperiences.sensedia)
    .addExperience(workExperiences.cinnecta)
    .addExperience(workExperiences.accenture)
    .addCertificate(certificates["Design Patterns in C# and .NET"])
    .addCertificate(certificates["Twin Stick Shooter with Blueprint"])
    .build()
}