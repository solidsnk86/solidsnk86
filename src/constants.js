export const PLACEHOLDER = {
  AUTHOR_PHRASE: '%{{author}}%',
  PHRASE: '%{{phrase}}%',
  UPDATED_AT: '%{{updated_at}}%',
  NON_FOLLOWERS: '%{{non_followers_count}}%',
  STATS: '%{{github_stats}}%',
  NEO_WIFI_VERSION: '%{{neo_wifi_version}}%'
}

export const SVG_PLACEHOLDER = {
  MOST_USED: '%{{most_used_language}}%',
  SECOND_MOST_USED: '%{{second_most_used}}%',
  THIRD_MOST_USED: '%{{third_most_used}}%',
  FOURTH_MOST_USED: '%{{fourth_most_used}}%',
  FIFTH_MOST_USED: '%{{fifth_most_used}}%',
  SIXTH_MOST_USED: '%{{sixth_most_used}}%',
  PERCENTAGE_1: '%{{percentage_1}}%',
  PERCENTAGE_2: '%{{percentage_2}}%',
  PERCENTAGE_3: '%{{percentage_3}}%',
  PERCENTAGE_4: '%{{percentage_4}}%',
  PERCENTAGE_5: '%{{percentage_5}}%',
  PERCENTAGE_6: '%{{percentage_6}}%',
  FOLLOWERS: '%{{followers}}%',
  FOLLOWING: '%{{following}}%',
  REPO_NAME: '%{{repo_name}}%',
  REPO_STARS: '%{{repo_stars}}%',
  PUBLIC_REPOS: '%{{public_repos}}%',
  STARS_COUNT: '%{{stars_count}}%',
  ANNUAL_COMMITS_2024: '%{{last_contributions_year}}%',
  ANNUAL_COMMITS_2025: '%{{annual_commits_2025}}%',
  UPDATED_AT: '%{{updated_at}}%'
}

export const formatDate = ({ date }) => {
  const dateFormat = new Date(date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires'
  })
  return dateFormat
}
