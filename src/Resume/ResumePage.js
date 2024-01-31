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
      console.log(resumeJson)
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