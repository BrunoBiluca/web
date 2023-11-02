import { educations } from "../data/Educations"
import { games } from "../data/Games"
import { languages } from "../data/Languages"
import { mainInformation } from "../data/MainInformation"

export default class ResumeBuilder {
  main = mainInformation
  workExperiences = []
  certificates = []
  languages = languages
  skills = []
  educations = Object.keys(educations).map(k => educations[k])
  games = games

  withMain(job){
    this.main["job"] = job
    return this
  }

  addExperience(experience){
    this.workExperiences.push(experience)
    return this
  }

  addCertificate(certificate) {
    this.certificates.push(certificate)
    return this
  }

  withSkills(skills){
    this.skills = skills
    return this
  }

  build() {
    return {
      main: this.main,
      workExperiences: this.workExperiences,
      certificates: this.certificates,
      languages: this.languages,
      skills: this.skills,
      educations: this.educations,
      games: this.games
    }
  }
}