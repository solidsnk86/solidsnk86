import { promises as fs } from 'fs'
import fetch from 'node-fetch'

import { formatDate, PLACEHOLDER } from './constants.js'

const getGithubStats = async () => {
  const response = await fetch(
    'https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86'
  )
  const jsonData = await response.json()
  return jsonData
}

const generateGithubStatsHTML = ({ nonFollowersUser, nonFollowersAvatar }) => {
  return `
  <a href="https://github.com/${nonFollowersUser}" title="${nonFollowersUser}">
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
    const following = stats.data.following.length
    const followers = stats.data.followers.length
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

    const githubStatsHTML = users
      .map((_, i) => {
        return `${generateGithubStatsHTML({
          nonFollowersUser: users[i],
          nonFollowersAvatar: avatars[i]
        })}`
      })
      .join('')

    const updatedMarkdown = template
      .replace(PLACEHOLDER.UPDATED_AT, formatDate({ str: lastUpdate.updated_at }))
      .replace(PLACEHOLDER.MOST_USED, mostUsedLang)
      .replace(PLACEHOLDER.SECOND_MOST_USED, secondUsedLang)
      .replace(PLACEHOLDER.THIRD_MOST_USED, thirdUsedLang)
      .replace(PLACEHOLDER.PERCENTAGE_1, percentageMostUsed)
      .replace(PLACEHOLDER.PERCENTAGE_2, percentageSecondUsed)
      .replace(PLACEHOLDER.PERCENTAGE_3, percentageThirdUsed)
      .replace(PLACEHOLDER.FOLLOWERS, followers)
      .replace(PLACEHOLDER.FOLLOWING, following)
      .replace(PLACEHOLDER.REPO_NAME, repoWithMoreStarsName.name)
      .replace(PLACEHOLDER.REPO_STARS, maxStars)
      .replace(PLACEHOLDER.NON_FOLLOWERS, count)
      .replace(PLACEHOLDER.STATS, githubStatsHTML)
      .replace(PLACEHOLDER.PUBLIC_REPOS, publicRepos)
      .replace(PLACEHOLDER.STARS_COUNT, starsCount)

    await fs.writeFile('README.md', updatedMarkdown)

    console.log('✅ README.md actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error al actualizar el README.md:', error.message)
  }
})()
