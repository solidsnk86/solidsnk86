import { promises as fs } from 'fs'
import fetch from 'node-fetch'

import {
  PLACEHOLDERS,
  STATS_PLACEHOLDER
} from './constants.js'

const getGithubStats = async () => {
  const response = await fetch('https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86')
  const jsonData = await response.json()
  return jsonData
}

const generateGithubStatsHTML = ({ nonFollowersUser, nonFollowersAvatar }) => {
  return `
  <a href="https://github.com/${nonFollowersUser}">
    <img src="${nonFollowersAvatar}" width="45" height="45" alt="Avatar de ${nonFollowersUser}" />
  </a>
`
}

;(async () => {
  try {
    const [template, stats] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      getGithubStats()
    ])

    const count = stats.data.nonfollowings_count
    const users = stats.data.non_following.users
    const avatars = stats.data.non_following.avatar
    const mostUsedLang = stats.data.most_used_language.name
    const secondUsedLang = stats.data.second_most_used.name
    const percentageMostUsed = stats.data.most_used_language.percentage
    const percentageSecondUsed = stats.data.second_most_used.percentage
    const repos = stats.data.repos
    const repoStars = repos.map((stars) => stars.stargazers_count)
    const maxStars = Math.max(...repoStars)
    const repoWithMoreStarsName = repos.find((repo) => repo.stargazers_count === maxStars)

    const githubStatsHTML = users
      .map((_, i) => {
        return `${generateGithubStatsHTML({
          nonFollowersUser: users[i],
          nonFollowersAvatar: avatars[i]
        })}`
      })
      .join('')

    const updatedMarkdown = template
      .replace(PLACEHOLDERS.MOST_USED, mostUsedLang)
      .replace(PLACEHOLDERS.SECOND_MOST_USED, secondUsedLang)
      .replace(PLACEHOLDERS.PERCENTAGE_1, percentageMostUsed)
      .replace(PLACEHOLDERS.PERCENTAGE_2, percentageSecondUsed)
      .replace(PLACEHOLDERS.REPO_NAME, repoWithMoreStarsName.name)
      .replace(PLACEHOLDERS.REPO_STARS, maxStars)
      .replace(STATS_PLACEHOLDER.NON_FOLLOWERS, count)
      .replace(STATS_PLACEHOLDER.STATS, githubStatsHTML)

    await fs.writeFile('README.md', updatedMarkdown)

    console.log('✅ README.md actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
})()
