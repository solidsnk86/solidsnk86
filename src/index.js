import { promises as fs } from 'fs'
import fetch from 'node-fetch'
import { GraphQLClient, gql } from 'graphql-request'
import { formatDate, PLACEHOLDER, SVG_PLACEHOLDER } from './constants.js'
import dotenv from 'dotenv'

dotenv.config()
const token = process.env.GITHUB_TOKEN
const username = 'solidsnk86'

const getPhrases = async () => {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/liquidsnk86/cdn-js@main/ramdom-json-phrases.json'
  )
  const jsonData = await res.json()
  return jsonData
}

const getGithubStats = async () => {
  const response = await fetch(
    `https://calcagni-gabriel.vercel.app/api/non-followers?user=${username}`
  )
  const jsonData = await response.json()
  return jsonData
}

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

const query1 = gql`
  {
    user(login: "${username}") {
      contributionsCollection(
        from: "2024-01-01T00:00:00Z", 
        to: "2024-12-31T23:59:59Z"
      ) {
        totalCommitContributions
        commitContributionsByRepository {
          repository {
            name
          }
          contributions {
            totalCount
          }
        }
      }
    }
  }
`
const query2 = gql`
  {
    user(login: "${username}") {
      contributionsCollection(
        from: "2025-01-01T00:00:00Z", 
        to: "2025-12-31T23:59:59Z"
      ) {
        totalCommitContributions
        commitContributionsByRepository {
          repository {
            name
          }
          contributions {
            totalCount
          }
        }
      }
    }
  }
`

// const queryLimit = gql`
// {
//   rateLimit {
//     limit
//     remaining
//     resetAt
//   }
// }
// `

let contributions2024
client
  .request(query1)
  .then((data) => {
    contributions2024 =
      data.user.contributionsCollection.totalCommitContributions
  })
  .catch((err) => console.error(err))

let contributions2025
client
  .request(query2)
  .then((data) => {
    contributions2025 =
      data.user.contributionsCollection.totalCommitContributions
  })
  .catch((err) => console.error(err))

const generateGithubStatsHTML = ({ nonFollowersUser, nonFollowersAvatar, xIndex }) => {
  return `
  <a href="https://github.com/${nonFollowersUser}" title="${nonFollowersUser}">
    <image class="image-non-f" x="${xIndex}" y="0" width="45" height="45" href="${nonFollowersAvatar}" />
  </a>
`
}

const objPlaceholder = Object.keys(PLACEHOLDER).map((key) => {
  return PLACEHOLDER[key]
})

const svgPlaceholder = Object.keys(SVG_PLACEHOLDER).map((key) => {
  return SVG_PLACEHOLDER[key]
})

const getRandomPhrases = (data = []) => {
  const randomIndex = Math.floor(Math.random() * data.length)
  const randomPhrase = data[randomIndex]
  return { author: randomPhrase.autor, text: randomPhrase.texto }
}

const replaceAllPlaceholders = (tmp = '', placeholder, updatedContent) => {
  let result = tmp
  for (let i = 0; i < placeholder.length; i++) {
    result = result.replaceAll(placeholder[i], updatedContent[i])
  }
  return result
}

;(async () => {
  try {
    const [template, svgTemplate, stats, phrases] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      fs.readFile('./src/tmp.svg.tpl', { encoding: 'utf-8' }),
      getGithubStats(),
      getPhrases()
    ]).catch((error) => console.error(error) || process.exit(1))

    const phrase = phrases.data.frases
    const { author, text } = getRandomPhrases(phrase)
    const count = stats.data.nonfollowings_count
    const users = stats.data.non_following.users
    const avatars = stats.data.non_following.avatar
    const following = stats.data.following_count
    const followers = stats.data.followers_count
    const mostUsedLang = stats.data.most_used_language.name
    const secondUsedLang = stats.data.second_most_used.name
    const thirdUsedLang = stats.data.used_languages[2].name
    const fourthUsedLang = stats.data.used_languages[3].name
    const fifthUsedLang = stats.data.used_languages[4].name
    const sixthUsedLang = stats.data.used_languages[6].name
    const percentageMostUsed = stats.data.most_used_language.percentage
    const percentageSecondUsed = stats.data.second_most_used.percentage
    const percentageThirdUsed = stats.data.used_languages[2].percentage
    const percentageFourhtUsed = stats.data.used_languages[3].percentage
    const percentageFiveUsed = stats.data.used_languages[4].percentage
    const percentageSixthUsed = stats.data.used_languages[6].percentage
    const repos = stats.data.repos
    const repoStars = repos.map((stars) => stars.stargazers_count)
    const maxStars = Math.max(...repoStars)
    const repoWithMoreStarsName = repos.find(
      (repo) => repo.stargazers_count === maxStars
    )
    const publicRepos = repos.length
    const starsCount = repos
      .map((repo) => repo.stargazers_count)
      .reduce((acc, value) => acc + value, 0)
    const lastUpdate = repos.find((repo) => repo.name === username)
    const updatedAt = formatDate({ date: lastUpdate.updated_at })

    const totalDaysLastYear = 365
    const today = new Date()
    const beginningOfTheYear = new Date(today.getFullYear(), 0, 1)
    const diffTime = today - beginningOfTheYear
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const contributionsLastYear =
      Math.round(contributions2024 -
        contributions2024 * (days / totalDaysLastYear) +
        contributions2025 -
        205)

    const githubStatsHTML = users
      .map((_, i) => {
        return `${generateGithubStatsHTML({
          nonFollowersUser: users[i],
          nonFollowersAvatar: avatars[i],
          xIndex: i * 49
        })}`
      })
      .sort()
      .join('')

    const contentArray = []
    contentArray.push(author, text, updatedAt)
    const contentArraySVG = []
    contentArraySVG.push(
      mostUsedLang,
      secondUsedLang,
      thirdUsedLang,
      fourthUsedLang,
      fifthUsedLang,
      sixthUsedLang,
      percentageMostUsed,
      percentageSecondUsed,
      percentageThirdUsed,
      percentageFourhtUsed,
      percentageFiveUsed,
      percentageSixthUsed,
      followers,
      following,
      repoWithMoreStarsName.name,
      maxStars,
      publicRepos,
      starsCount,
      contributionsLastYear,
      contributions2025,
      updatedAt,
      githubStatsHTML,
      count
    )

    const updatedMarkdown = replaceAllPlaceholders(
      template,
      objPlaceholder,
      contentArray
    )
    const updatedSVG = replaceAllPlaceholders(
      svgTemplate,
      svgPlaceholder,
      contentArraySVG
    )

    await fs.writeFile('README.md', updatedMarkdown)
    await fs.writeFile('gh-stats.svg', updatedSVG)

    console.log('✅ README.md actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error al actualizar el README.md:', error.message)
  }
})()
