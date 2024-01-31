import { Resume } from "@brunobiluca/biluca-resume"
import Variables from "@brunobiluca/biluca-resume/dist/Variables"
import { baseUrl } from "config/server";
import { useEffect, useState } from "react"
import styles from "./ResumePage.module.css"

export default function ResumePage() {
  let [resume, setResume] = useState(null)

  useEffect(() => {
    async function fetchResumeData() {
      const request = await fetch(baseUrl + "/resume/resume.json")
      const resumeJson = await request.json()

      console.log(baseUrl)
      resumeJson["main_information"]["picture"]
        = baseUrl + "/" + resumeJson["main_information"]["picture"]

      let gameSection = resumeJson["sections"].filter(s => s["type"] === "Game")

      if (gameSection.length > 0) {
        for (let g of gameSection[0]["entries"]) {
          g["screenshoot"] = baseUrl + "/" + g["screenshoot"]
        }
      }

      setResume(resumeJson)
    }
    fetchResumeData()
  }, [])

  return (
    <div className={styles.base}>
      {
        resume
        &&
        <Resume
          data={resume}
          variables={{
            ...new Variables({ "sections_gap": ".5em", "contents_gap": ".5em" }).css(),
            "--text-line-height": 1
          }}
        />
      }
    </div>
  )
}