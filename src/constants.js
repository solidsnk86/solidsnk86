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
  UPDATED_AT: '%{{updated_at}}%',
  ANNUAL_COMMITS_2024: '%{{annual_commits_2024}}%',
  ANNUAL_COMMITS_2025: '%{{annual_commits_2025}}%',
  AUTHOR_PHRASE: '%{{author}}%',
  PHRASE: '%{{phrase}}%'
}

export const formatDate = ({ str }) => {
  const date = new Date(str).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires'
  })
  return date
}
