import { promises as fs } from 'fs'
import fetch from 'node-fetch'

import {
  PLACEHOLDERS,
  NUMBER_OF,
  YOUTUBE_NEOTECS_CHANNEL_ID
} from './constants.js'

const { API_KEY_YOUTUBE } = process.env

const getLatestYoutubeVideos = (
  { channelId } = { channelId: YOUTUBE_NEOTECS_CHANNEL_ID }
) =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=${NUMBER_OF.VIDEOS}&key=${API_KEY_YOUTUBE}`
  )
    .then((res) => res.json())
    .then((videos) => videos.items && video.items ? video.items : [])

const generateYoutubeHTML = ({ title, videoId }) => `
<a href='https://youtu.be/${videoId}' target='_blank'>
  <img width='30%' src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg' alt='${title}' />
</a>`
;(async () => {
  try {
    const [template, videos] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      getLatestYoutubeVideos()
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

    await fs.writeFile('README.md', newMarkdown)
  } catch (error) {
    console.error('Error:', error.message)
  }
})()
