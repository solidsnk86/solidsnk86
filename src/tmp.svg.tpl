<svg
  width="804"
  height="604"
  viewBox="0 0 804 604"
  xmlns="http://www.w3.org/2000/svg"
>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600');
    text {
      font-family: 'Inter', sans-serif;
    }
    .header {
      font-size: 24px;
      font-weight: 600;
      fill: #e5e7eb;
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      fill: #9ca3af;
    }
    .value {
      font-size: 20px;
      font-weight: 600;
      fill: #f9fafb;
    }
    .subtext {
      font-size: 14px;
      fill: #6b7280;
    }
    .featured {
      border: 2px solid #374151 !important;
      border-radius: 12px !important;
    }
    #solid:hover {
      fill: yellowgreen;
      cursor: default;
    }
  </style>

  <!-- Borde -->
  <rect width="802" height="602" fill="#333" rx="12" />

  <!-- Fondo principal -->
  <rect width="800" height="600" y="1" x="1" fill="#111" rx="12" />

  <!-- Header -->
  <text x="40" y="50" class="header">GitHub Analytics</text>
  <text x="760" y="50" class="subtext" text-anchor="end">%{{updated_at}}%</text>

  <!-- Sección de Lenguajes -->
  <g transform="translate(40, 80)">
    <text class="title">Top Languages</text>

    <rect
      width="320"
      height="270"
      y="10"
      rx="12"
      ry="12"
      fill="#222"
      stroke="#333"
      stroke-width="1"
    />

    <!-- Lenguaje 1 -->
    <g transform="translate(10, 40)">
      <text class="value">1. %{{most_used_language}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_1}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_1}}% / 100)"
        height="4"
        rx="2"
        fill="#F59E0B"
      />
    </g>

    <!-- Lenguaje 2 -->
    <g transform="translate(10, 80)">
      <text class="value">2. %{{second_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_2}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_2}}% / 100)"
        height="4"
        rx="2"
        fill="#E4552E"
      />
    </g>

    <!-- Lenguaje 3 -->
    <g transform="translate(10, 120)">
      <text class="value">3. %{{third_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_3}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_3}}% / 100)"
        height="4"
        rx="2"
        fill="#6366F1"
      />
    </g>

    <!-- Lenguaje 4 -->
    <g transform="translate(10, 160)">
      <text class="value">4. %{{fourth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_4}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_4}}% / 100)"
        height="4"
        rx="2"
        fill="#3B72A1"
      />
    </g>

    <!-- Lenguaje 5 -->
    <g transform="translate(10, 200)">
      <text class="value">5. %{{fifth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_5}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_5}}% / 100)"
        height="4"
        rx="2"
        fill="#6B399C"
      />
    </g>

    <!-- Lenguaje 6 -->
    <g transform="translate(10, 240)">
      <text class="value">6. %{{sixth_most_used}}%</text>
      <text x="300" y="0" class="value" text-anchor="end">
        %%{{percentage_6}}%
      </text>
      <rect x="0" y="10" width="300" height="4" rx="2" fill="#374151" />
      <rect
        x="0"
        y="10"
        width="calc(300 * %{{percentage_5}}% / 100)"
        height="4"
        rx="2"
        fill="#F34B7D"
      />
    </g>
  </g>

  <!-- Sección del Repositorio Destacado -->
  <g transform="translate(40, 385)">
    <text class="title">Featured Repository</text>
    <text x="0" y="30" class="value">%{{repo_name}}%</text>
    <text x="0" y="55" class="subtext">⭐ %{{repo_stars}}% stars</text>
  </g>

  <g transform="translate(225, 360)">
    <!-- Círculo de commits -->
    <g transform="translate(150, 133)">
      <circle
        cx="0"
        cy="0"
        r="60"
        stroke="#374151"
        stroke-width="10"
        fill="none"
      />
      <circle
        cx="0"
        cy="0"
        r="60"
        stroke="#6366F1"
        stroke-width="10"
        stroke-dasharray="calc(377 * %{{annual_commits_2024}}% / 365) 377"
        transform="rotate(-90 0 0)"
      />
      <text y="0" text-anchor="middle" class="value">
        %{{annual_commits_2024}}%
      </text>
      <text y="15" text-anchor="middle" class="subtext">Commits 2024</text>
    </g>
  </g>

  <!-- Estadísticas -->
  <g transform="translate(400, 80)">
    <rect
      width="320"
      height="270"
      y="10"
      rx="12"
      ry="12"
      fill="#222"
      stroke="#333"
      stroke-width="1"
    />
    <text class="title">Account Stats</text>

    <!-- Repositorios -->
    <g transform="translate(10, 35)">
      <text class="title">Public Repos</text>
      <text x="0" y="25" class="value">%{{public_repos}}%</text>
    </g>

    <!-- Estrellas -->
    <g transform="translate(10, 85)">
      <text class="title">Total Stars</text>
      <text x="0" y="25" class="value">%{{stars_count}}%</text>
    </g>

    <!-- Seguidores -->
    <g transform="translate(10, 135)">
      <text class="title">Followers</text>
      <text x="0" y="25" class="value">%{{followers}}%</text>
    </g>

    <!-- Siguiendo -->
    <g transform="translate(10, 185)">
      <text class="title">Following</text>
      <text x="0" y="25" class="value">%{{following}}%</text>
    </g>

    <!-- Commits 2025 -->
    <g transform="translate(10, 235)">
      <text class="title">Commits 2025</text>
      <text x="0" y="25" class="value">%{{annual_commits_2025}}%</text>
    </g>
  </g>

  <!-- Pie de página -->
  <g transform="translate(580, 570)">
    <!-- Icono de GitHub -->
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.637-1.339-2.22-.252-4.555-1.111-4.555-4.943 0-1.092.39-1.984 1.029-2.682-.103-.253-.446-1.267.097-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.337c.848.004 1.702.115 2.5.337 1.91-1.294 2.75-1.025 2.75-1.025.543 1.373.2 2.387.097 2.64.64.698 1.028 1.59 1.028 2.682 0 3.841-2.339 4.688-4.566 4.936.36.31.68.922.68 1.86 0 1.344-.012 2.428-.012 2.756 0 .268.18.577.688.48A10.005 10.005 0 0 0 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>

    <!-- Texto del enlace -->
    <text x="30" y="15" class="subtext">github.com/solidsnk86</text>
  </g>
</svg>
