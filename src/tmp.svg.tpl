<svg width="804" height="604" viewBox="0 0 804 604" xmlns="http://www.w3.org/2000/svg">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600');
    text { font-family: 'Inter', sans-serif; }
    .header { font-size: 24px; font-weight: 600; fill: #E5E7EB; }
    .title { font-size: 14px; font-weight: 400; fill: #9CA3AF; }
    .value { font-size: 20px; font-weight: 600; fill: #F9FAFB; }
    .subtext { font-size: 14px; fill: #6B7280; }
    .featured { border: 2px solid #374151 !important; border-radius: 12px !important; }
    #solid:hover { fill: yellowgreen; cursor: default; }
    .last-contributions { fill: #fafafa; font-size: 2rem; font-weight: 900 }
    .subtext-last-contrib { fill: #999; font-size: 12px; }
  </style>

  <!-- Fondo -->
  <rect width="802" height="602" fill="#333" rx="12" />
  <rect width="800" height="600" x="1" y="1" fill="#111" rx="12"/>

  <!-- Cabecera -->
  <text x="40" y="50" class="header">GitHub Analytics</text>
  <text x="760" y="50" class="subtext" text-anchor="end">%{{updated_at}}%</text>

  <!-- Sección Top Languages -->
  <g transform="translate(40, 80)">
    <text class="title">Top Languages</text>
    <rect width="320" height="270" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>

    <g transform="translate(10, 40)">
      <text class="value">1. %{{most_used_language}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_1}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_1}}% / 100)" height="4" rx="2" fill="#F59E0B"/>
    </g>

    <g transform="translate(10, 80)">
      <text class="value">2. %{{second_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_2}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_2}}% / 100)" height="4" rx="2" fill="#E4552E"/>
    </g>

    <g transform="translate(10, 120)">
      <text class="value">3. %{{third_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_3}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_3}}% / 100)" height="4" rx="2" fill="#6366F1"/>
    </g>

    <g transform="translate(10, 160)">
      <text class="value">4. %{{fourth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_4}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_4}}% / 100)" height="4" rx="2" fill="#3B72A1"/>
    </g>

    <g transform="translate(10, 200)">
      <text class="value">5. %{{fifth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_5}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_5}}% / 100)" height="4" rx="2" fill="#6B399C"/>
    </g>

    <g transform="translate(10, 240)">
      <text class="value">6. %{{sixth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%{{percentage_6}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_6}}% / 100)" height="4" rx="2" fill="#F34B7D"/>
    </g>
  </g>

  <!-- Sección Featured Repository -->
  <g transform="translate(40, 385)">
    <text class="title">Featured Repository</text>
    <text x="0" y="30" class="value">%{{repo_name}}%</text>
    <text x="0" y="55" class="subtext">⭐ %{{repo_stars}}% stars</text>
  </g>

  <!-- Sección Contribuciones (círculo) -->
  <g transform="translate(225, 360)">
    <g transform="translate(150, 133)">
      <circle cx="0" cy="0" r="90" stroke="#374151" stroke-width="10" fill="none"/>
      <circle cx="0" cy="0" r="90" stroke="#6366F1" stroke-width="10"
              stroke-dasharray="calc(377 * %{{annual_commits_2024}}% / 365) 377"
              transform="rotate(-90 0 0)"/>
      <text y="0" text-anchor="middle" class="last-contributions">4942</text>
      <text y="15" text-anchor="middle" class="subtext-last-contrib">Contributions in the last year</text>
    </g>
  </g>

  <!-- Sección Account Stats -->
  <g transform="translate(400, 80)">
    <rect width="320" height="270" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>
    <text class="title">Account Stats</text>
    
    <g transform="translate(10, 35)">
      <text class="title">Public Repos</text>
      <text x="0" y="25" class="value">%{{public_repos}}%</text>
    </g>
    
    <g transform="translate(10, 85)">
      <text class="title">Total Stars</text>
      <text x="0" y="25" class="value">%{{stars_count}}%</text>
    </g>
    
    <g transform="translate(10, 135)">
      <text class="title">Followers</text>
      <text x="0" y="25" class="value">%{{followers}}%</text>
    </g>
    
    <g transform="translate(10, 185)">
      <text class="title">Following</text>
      <text x="0" y="25" class="value">%{{following}}%</text>
    </g>
    
    <g transform="translate(10, 235)">
      <text class="title">Commits 2025</text>
      <text x="0" y="25" class="value">%{{annual_commits_2025}}%</text>
    </g>
  </g>
  
  <!-- Pie de página -->
  <g transform="translate(606, 560)">
    <text x="25" y="15" class="subtext" fill="#9CA3AF">©2025 • solidsnk86</text>
  </g>
</svg>
