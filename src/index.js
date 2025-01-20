import { promises as fs } from 'fs'
import fetch from 'node-fetch'
import { GraphQLClient, gql } from 'graphql-request'
import { formatDate, PLACEHOLDER } from './constants.js'
import dotenv from 'dotenv'

dotenv.config()
const token = process.env.GITHUB_TOKEN
const username = 'solidsnk86'

const getPhrases = async () => {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/liquidsnk86/cdn-js@main/ramdom-josn-phrases.json'
  )
  const jsonData = await res.json()
  return jsonData
}

const getGithubStats = async () => {
  const response = await fetch(
    `https://calcagni-gabriel.vercel.app/api/non-followers?user=${username}&gh_token=${token}`
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
let contributions2024 = 0
client.request(query1).then((data) => {
  const contributions = data.user.contributionsCollection
  contributions2024 = contributions.totalCommitContributions
})

let contributions2025 = 0
client.request(query2).then((data) => {
  contributions2025 = data.user.contributionsCollection.totalCommitContributions
})

const generateGithubStatsHTML = ({ nonFollowersUser, nonFollowersAvatar }) => {
  return `
  <a href="https://github.com/${nonFollowersUser}" title="${nonFollowersUser}">
    <img src="${nonFollowersAvatar}" width="45" height="45" alt="Avatar de ${nonFollowersUser}" />
  </a>
`
}

const objPlaceholder = Object.keys(PLACEHOLDER).map((key) => {
  return PLACEHOLDER[key]
})

const getRamdomPhrases = ({ phr }) => {
  return phr.map((p) => p.texto).sort(() => Math.random() - 0.5)
}

const replaceAll = (tmp = '', placeholder, updatedContent) => {
  let result = tmp
  for (let i = 0; i < placeholder.length; i++) {
    result = result.replace(placeholder[i], updatedContent[i])
  }
  return result
}

;(async () => {
  try {
    const [template, stats, phrases] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      getGithubStats(),
      getPhrases()
    ]).catch((error) => console.error(error) || process.exit(1))

    const phrasesText = phrases.data.frases
    const phraseAuthor = phrasesText.map((phrase) => phrase.autor)[0]
    const ramdomPhrases = getRamdomPhrases({ phr: phrasesText })[0]
    const count = stats.data.nonfollowings_count
    const users = stats.data.non_following.users
    const avatars = stats.data.non_following.avatar
    const following = stats.data.following_count
    const followers = stats.data.followers_count
    const mostUsedLang = stats.data.most_used_language.name
    const secondUsedLang = stats.data.second_most_used.name
    const thirdUsedLang = stats.data.used_languages[2].name
    const percentageMostUsed = stats.data.most_used_language.percentage
    const percentageSecondUsed = stats.data.second_most_used.percentage
    const percentageThirdUsed = stats.data.used_languages[2].percentage
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
    const lastUpdate = repos.find((repo) => repo.name === 'solidsnk86')
    const updatedAt = formatDate({ str: lastUpdate.updated_at })

    const githubStatsHTML = users
      .map((_, i) => {
        return `${generateGithubStatsHTML({
          nonFollowersUser: users[i],
          nonFollowersAvatar: avatars[i]
        })}`
      })
      .sort()
      .join('')

    const contentArray = []
    contentArray.push(
      phraseAuthor,
      ramdomPhrases,
      updatedAt,
      mostUsedLang,
      secondUsedLang,
      thirdUsedLang,
      percentageMostUsed,
      percentageSecondUsed,
      percentageThirdUsed,
      followers,
      following,
      repoWithMoreStarsName.name,
      maxStars,
      count,
      githubStatsHTML,
      publicRepos,
      starsCount,
      contributions2024,
      contributions2025
    )

    const updatedMarkdown = replaceAll(template, objPlaceholder, contentArray)

    await fs.writeFile('README.md', updatedMarkdown)

    console.log('✅ README.md actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error al actualizar el README.md:', error.message)
  }
})()
