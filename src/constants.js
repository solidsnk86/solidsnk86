export const PLACEHOLDER = {
  MOST_USED: '%{{most_used_language}}%',
  SECOND_MOST_USED: '%{{second_most_used}}%',
  THIRD_MOST_USED: '%{{third_most_used}}%',
  PERCENTAGE_1: '%{{percentage_1}}%',
  PERCENTAGE_2: '%{{percentage_2}}%',
  PERCENTAGE_3: '%{{percentage_3}}%',
  FOLLOWERS: '%{{followers}}%',
  FOLLOWING: '%{{following}}%',
  REPO_NAME: '%{{repo_name}}%',
  REPO_STARS: '%{{repo_stars}}%',
  PUBLIC_REPOS: '%{{public_repos}}%',
  STARS_COUNT: '%{{stars_count}}%',
  NON_FOLLOWERS: '%{{non_followers_count}}%',
  STATS: '%{{github_stats}}%',
  UPDATED_AT: '%{{updated_at}}%'
}

export const YOUTUBE_NEOTECS_CHANNEL_ID = 'PLTmuoTGunlv7T7pyHEzlG2PaqniaVCprL'

export const formatDate = ({ str }) => {
  const date = new Date(str).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  return date
}
