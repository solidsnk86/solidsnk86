<svg width="762" height="604" viewBox="0 0 762 604" xmlns="http://www.w3.org/2000/svg">
  <style>
     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600');
    text { font-family: 'Inter', sans-serif; }
    .header { font-size: 24px; font-weight: 600; fill: #E5E7EB; }
    .header::before { content: ""; position: absolute; top: 10; left: 10; bacground: green }
    .title { font-size: 14px; font-weight: 400; fill: #9CA3AF; }
    .value { font-size: 20px; font-weight: 600; fill: #F9FAFB; }
    .subtext { font-size: 14px; fill: #6B7280; }
    .featured { border: 2px solid #374151 !important; border-radius: 12px !important; }
    #solid:hover { fill: yellowgreen; cursor: default; }
    .last-contributions { fill: #fafafa; font-size: 24px; font-weight: bold }
    .featured-text { font-size: 18px; font-weight: 900; }
  </style>

   <!-- Fondo -->
  <rect width="762" height="602" fill="#333" rx="12" />
  <rect width="760" height="600" x="1" y="1" fill="#111" rx="12"/>

  <!-- Cabecera -->
  <g transform="translate(40, 28)" fill="#fafafa">
    <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
  </g>
  <text x="70" y="50" class="header">Analíticas de Github</text>
  <text x="720" y="50" class="subtext" text-anchor="end">%{{updated_at}}%</text>

  <!-- Sección Top Languages -->
  <g transform="translate(40, 100)">
    <text class="title">Top Languages</text>
    <rect width="320" height="270" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>

    <g transform="translate(10, 40)">
      <text class="value">1. %{{most_used_language}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_1}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_1}}% / 100)" height="4" rx="2" fill="#F59E0B"/>
    </g>

    <g transform="translate(10, 80)">
      <text class="value">2. %{{second_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_2}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_2}}% / 100)" height="4" rx="2" fill="#E4552E"/>
    </g>

    <g transform="translate(10, 120)">
      <text class="value">3. %{{third_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_3}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_3}}% / 100)" height="4" rx="2" fill="#6366F1"/>
    </g>

    <g transform="translate(10, 160)">
      <text class="value">4. %{{fourth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_4}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_4}}% / 100)" height="4" rx="2" fill="#3B72A1"/>
    </g>

    <g transform="translate(10, 200)">
      <text class="value">5. %{{fifth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_5}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_5}}% / 100)" height="4" rx="2" fill="#6B399C"/>
    </g>

    <g transform="translate(10, 240)">
      <text class="value">6. %{{sixth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">%%{{percentage_6}}%</text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151"/>
      <rect x="0" y="10" width="calc(300 * %{{percentage_6}}% / 100)" height="4" rx="2" fill="#F34B7D"/>
    </g>
  </g>

  <!-- Sección Featured Repository -->
   <g transform="translate(40, 400)">
   <rect width="320" height="70" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>
    <text class="title">Repositorio Destacado</text>
    <g transform="translate(10, 40)">
        <text class="value">%{{repo_name}}%</text>
        <g transform="translate(0, 10)">
        <path 
        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
        fill="#E3B341"
         />
        </g>
        <text x="20" y="24" class="featured-text" fill="#999">7 stars</text>
    </g>
  </g>

  <g transform="translate(400, 400)">
   <rect width="320" height="70" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>
    <text class="title">Contribuciones en el último año</text>
    <g transform="translate(10, 40)">
    <g transform="translate(0, 10)">
    <path 
    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
    fill="#4493f8"
     />
    </g>
        <text class="value">Total</text>
        <text x="20" y="24" class="featured-text" fill="#999">%{{last_contributions_year}}%</text>
    </g>
  </g>

  <!-- Sección Account Stats -->
  <g transform="translate(400, 100)">
    <rect width="320" height="270" y="10" rx="12" ry="12" fill="#222" stroke="#333" stroke-width="1"/>
    <text class="title">Estadísticas de la cuenta</text>
    
    <g transform="translate(10, 35)">
      <text class="title">Repositorios Públicos</text>
      <text x="0" y="25" class="value">%{{public_repos}}%</text>
    </g>
    
    <g transform="translate(10, 85)">
      <text class="title">Total Estrellas</text>
      <text x="0" y="25" class="value">%{{stars_count}}%</text>
    </g>
    
    <g transform="translate(10, 135)">
      <text class="title">Seguidores</text>
      <text x="0" y="25" class="value">%{{followers}}%</text>
    </g>
    
    <g transform="translate(10, 185)">
      <text class="title">Siguiendo</text>
      <text x="0" y="25" class="value">%{{following}}%</text>
    </g>
    
    <g transform="translate(10, 235)">
      <text class="title">Commits 2025</text>
      <text x="0" y="25" class="value">%{{annual_commits_2025}}%</text>
    </g>
  </g>
  
  <!-- Pie de página -->
  <g transform="translate(330, 560)">
  <g transform="translate(-20, 2)">
    <g clip-path="url(#a)">
    <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" 
    fill="#6B7280"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h16v16H0z"/>
    </clipPath>
    </defs>
  </g>
    <text x="0" y="15" class="subtext">2025 • solidsnk86</text>
  </g>
</svg>
