export default class ResumeBuilder {
  main = {}
  workExperiences = []
  certificates = []
  languages = []
  skills = []
  educations = []
  games = []

  withJobGoal(job) {
    this.main["job"] = job
    return this
  }

  withMain(mainInfo) {
    this.main = mainInfo
    return this
  }

  withWorkExperiences(entries) {
    this.workExperiences = entries
    return this
  }

  withLanguages(entries) {
    this.languages = entries
    return this
  }

  withGames(entries) {
    this.games = entries
    return this
  }

  withSkills(skills) {
    this.skills = skills
    return this
  }

  withCertificates(entries) {
    this.certificates = entries
    return this
  }

  withEducations(entries){
    this.educations = entries
    return this
  }

  addExperience(experience) {
    this.workExperiences.push(experience)
    return this
  }

  addCertificate(certificate) {
    this.certificates.push(certificate)
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