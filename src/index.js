import { promises as fs } from 'fs'
import fetch from 'node-fetch'

import {
  PLACEHOLDERS,
  NUMBER_OF,
  YOUTUBE_NEOTECS_CHANNEL_ID,
  STATS_PLACEHOLDER
} from './constants.js'

const { API_KEY_YOUTUBE } = process.env

const getLatestYoutubeVideos = (
  { channelId } = { channelId: YOUTUBE_NEOTECS_CHANNEL_ID }
) =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=${NUMBER_OF.VIDEOS}&key=${API_KEY_YOUTUBE}`
  )
    .then((res) => res.json())
    .then((videos) => videos.items && videos.items ? videos.items : [])

const generateYoutubeHTML = ({ title, videoId }) => `
<a href='https://youtu.be/${videoId}' target='_blank'>
  <img width='30%' src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg' alt='${title}' />
</a>`

const getGithubStats = () => {
  fetch("https://calcagni-gabriel.vercel.app/api/non-followers?user=solidsnk86")
  .then((response) => response.json())
  .then((githubStats) => githubStats || [])
}

const generateGithubStatsHTML = ({ nonFollowersCount, nonFollowersUser, nonFollowersAvatar }) => `
<small>No me siguen de vuelta: ${nonFollowersCount}</small>
<div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));'>
  <img src="${nonFollowersAvatar}" width="45" height="45" alt="Avatar de ${nonFollowersUser}" />
</div>
`

;(async () => {
  try {
    const [template, videos, stats] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      getLatestYoutubeVideos(),
      getGithubStats()
    ])

    if (!videos.length) {
      throw new Error('Unable to fetch YouTube videos.')
    }

    const latestYoutubeVideos = videos
      .map(({ snippet }) => {
        const { title, resourceId } = snippet
        const { videoId } = resourceId
        return generateYoutubeHTML({ videoId, title })
      })
      .join('')

    const newMarkdown = template.replace(
      PLACEHOLDERS.LATEST_YOUTUBE,
      latestYoutubeVideos
    )

    const allGithubStats = stats.map(({ data }) => {
      const count = data.non_following.length
      const { user, avatar } = data.non_following 
      return generateGithubStatsHTML({ nonFollowersCount: count, nonFollowersUser: user, nonFollowersAvatar: avatar })
    })

    const newMarkDownInfo = template.replace(STATS_PLACEHOLDER.STATS, allGithubStats)

    await fs.writeFile('README.md', newMarkdown)
    await fs.writeFile('README.md', newMarkDownInfo)
  } catch (error) {
    console.error('Error:', error.message)
  }
})()
