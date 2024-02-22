import { promises as fs } from 'fs'
import fetch from 'node-fetch'
import Parser from 'rss-parser'

import { PLACEHOLDERS, NUMBER_OF } from './constants.js'

const YOUTUBE_NEOTECS_CHANNEL_ID = 'UCCg2DsKakyYIaGs-YkqEpqg'

const {
  YOUTUBE_API_KEY
} = process.env

const getLatestYoutubeVideos = ({ channelId } = { channelId: YOUTUBE_NEOTECS_CHANNEL_ID }) =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=${NUMBER_OF.VIDEOS}&key=${YOUTUBE_API_KEY}`
  )
    .then((res) => res.json())
    .then((videos) => videos.items)

const generateYoutubeHTML = ({ title, videoId }) => `
<a href='https://youtu.be/${videoId}' target='_blank'>
  <img width='30%' src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg' alt='${title}' />
</a>`;

(async () => {

  const [template, videos] = await Promise.all([
    fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
    getLatestYoutubeVideos(),
  ])

  const latestYoutubeVideos = videos
    .map(({ snippet }) => {
      const { title, resourceId } = snippet
      const { videoId } = resourceId
      return generateYoutubeHTML({ videoId, title })
    })
    .join('')

  const newMarkdown = template
    .replace(PLACEHOLDERS.LATEST_YOUTUBE, latestYoutubeVideos)

  await fs.writeFile('README.md', newMarkdown)
})()
