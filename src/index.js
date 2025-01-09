import { promises as fs } from 'fs'
import fetch from 'node-fetch'

import {
  PLACEHOLDERS,
  NUMBER_OF,
  YOUTUBE_NEOTECS_CHANNEL_ID,
  STATS_PLACEHOLDER
} from './constants.js'

const API_KEY_YOUTUBE = process.env.API_KEY_YOUTUBE

const getLatestYoutubeVideos = (
  { channelId } = { channelId: YOUTUBE_NEOTECS_CHANNEL_ID }
) =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=${NUMBER_OF.VIDEOS}&key=${API_KEY_YOUTUBE}`
  )
    .then((res) => res.json())
    .then((videos) => (videos.items && videos.items ? videos.items : []))

const generateYoutubeHTML = ({ title, videoId }) => `
<a href='https://youtu.be/${videoId}' target='_blank'>
  <img width='30%' src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg' alt='${title}' />
</a>`

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
    const [template, videos, stats] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      getLatestYoutubeVideos(),
      getGithubStats()
    ])

    if (!videos.length) {
      throw new Error('No se encontraron videos de YouTube.')
    }

    const latestYoutubeVideos = videos
      .map(({ snippet }) => {
        const { title, resourceId } = snippet
        const { videoId } = resourceId
        return generateYoutubeHTML({ videoId, title })
      })
      .join('')

    const count = stats.data.nonfollowings_count
    const users = stats.data.non_following.users
    const avatars = stats.data.non_following.avatar

    const githubStatsHTML = users
      .map((_, i) => {
        return `${generateGithubStatsHTML({
          nonFollowersUser: users[i],
          nonFollowersAvatar: avatars[i]
        })}`
      })
      .join('')

    const updatedMarkdown = template
      .replace(PLACEHOLDERS.LATEST_YOUTUBE, latestYoutubeVideos)
      .replace(STATS_PLACEHOLDER.NON_FOLLOWERS, count)
      .replace(STATS_PLACEHOLDER.STATS, githubStatsHTML)

    await fs.writeFile('README.md', updatedMarkdown)

    console.log('✅ README.md actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
})()
