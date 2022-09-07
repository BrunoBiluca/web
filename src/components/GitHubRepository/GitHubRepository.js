import GlobalConfig from "config/GlobalConfig";
import DateFormatterAsDaysAgo from "helpers/DateFormatterAsDaysAgo";
import { useEffect, useState } from "react";
import styles from "./GitHubRepository.module.css"
import githubLogo from "./logotipo-do-github.png"
import PropTypes from 'prop-types';

class Commit {
  oid
  message
  committedDate
  authorEmail
  authorName
  authorAvatarUrl
}

function queryLastCommits(repo, owner, number) {
  return `{
    repository(name: "${repo}", owner: "${owner}") {
      refs(first: 100, refPrefix: "refs/heads/") {
        edges {
          node {
            name
            target {
              ... on Commit {
                history(first: ${number}) {
                  nodes {
                    message
                    committedDate
                    oid
                    author {
                      email
                      name
                      user {
                        avatarUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}

async function getLastCommits(repository, owner, authToken) {
  const queryData = JSON.stringify({
    query: queryLastCommits(repository, owner, 5),
  });

  const res = await fetch(
    "https://api.github.com/graphql",
    {
      method: 'post',
      body: queryData,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    }
  )

  const body = await res.json()

  const historyCommits = body
  ["data"]
  ["repository"]
  ["refs"]
  ["edges"]
  [0]
  ["node"]
  ["target"]
  ["history"]
  ["nodes"]
    .map(n => {
      const commit = new Commit()
      commit.oid = n["oid"]
      commit.message = n["message"]
      commit.committedDate = n["committedDate"]
      commit.authorName = n["author"]["name"]
      commit.authorEmail = n["author"]["email"]
      commit.authorAvatarUrl = n["author"]["user"]["avatarUrl"]
      return commit
    })

  return Promise.resolve(historyCommits)
}

const GitHubRepository = ({ repositoryURL, repository, owner }) => {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    const githubToken = GlobalConfig.github.token();
    getLastCommits(
      repository,
      owner,
      githubToken
    )
      .then(res => setCommits(res))
      .catch(err => console.log("error getting last commits"))
  }, [repository, owner])

  const formatCommitDate = (committedDate) => {
    const dateFormatter = new DateFormatterAsDaysAgo(new Date(Date.now()));
    return dateFormatter.format(committedDate)
  }

  const githubUrlTemplate = "https://github-readme-stats.vercel.app/api/pin/?username=<owner>&repo=<repo>"
  const repoStatsUrl = githubUrlTemplate
    .replace("<owner>", owner)
    .replace("<repo>", repository)

  return (
    <div className={styles.githubRepository}>
      <h2><img style={{ height: "inherit" }} src={githubLogo} alt="Github logo" />Repository</h2>

      <a
        className={styles.repositoryCard}
        href={repositoryURL}
        target="_blank"
        rel="noreferrer external"
      >
        <img src={repoStatsUrl} alt='Repository information' />
      </a>

      <div className={styles.commitHistory}>
        {
          commits.length > 0 &&
          commits.map(c => (
            <div key={c.oid} className={styles.commit}>
              <p>{c.message}</p>
              <div className={styles.commitInfo}>
                <div className={styles.avatarHolder}>
                  <img src={c.authorAvatarUrl} alt="commit's author's avatar" />
                </div>
                <strong>{c.authorName}</strong>
                <span>{formatCommitDate(c.committedDate)}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

GitHubRepository.propTypes = {
  repositoryURL: PropTypes.string,
  owner: PropTypes.string,
  repository: PropTypes.string
}

export default GitHubRepository;