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
    .withSkills([
      { label: "Unity" },
      { label: "Godot" },
      { label: "C#" },
      { label: "Python" },
      { label: "TDD" },
      { label: "Clean Code" },
      { label: "Design Patterns" },
    ])
    .addExperience(workExperiences.gh)
    .addExperience(workExperiences.sensedia)
    .addExperience(workExperiences.cinnecta)
    .addCertificate(certificates["Unity Turn Based Strategy - Intermediate C# Coding"])
    .addCertificate(certificates["Learn to make an Awesome Builder-Defender game in Unity!"])
    .addCertificate(certificates["Design Patterns in C# and .NET"])
    .build()
}