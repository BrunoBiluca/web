import ResumeBuilder from "ResumePage/resumes/ResumeBuilder";
import LocaleStringBuilder from "services/LocaleStringBuilder";
import { workExperiences } from "../data/WorkExperiences";
import { certificates } from "../data/Certificates";

export default function get_content() {
  return new ResumeBuilder()
    .withMain(
      LocaleStringBuilder
        .create("Job position")
        .ptbr("Desenvolvedor Unity")
        .en("Unity Developer")
        .build()
    )
    .addExperience(workExperiences.gh)
    .addExperience(workExperiences.sensedia)
    .addExperience(workExperiences.cinnecta)
    .addExperience(workExperiences.accenture)
    .addCertificate(certificates["Design Patterns in C# and .NET"])
    .addCertificate(certificates["Twin Stick Shooter with Blueprint"])
    .withSkills(
      [
        { label: "Unity" },
        { label: "C#" },
        { label: "Git" },
        { label: ".NET & .NET Core" },
        { label: "Python" },
        { label: "TDD" },
        { label: "Clean Code" },
        { label: "Design Patterns" },
        { label: "Java" },
        { label: "Javascript" },
        { label: "Docker" },
        { label: "RESTful APIs" },
        { label: "HTML5 & CSS" }
      ]
    )
    .build()
}