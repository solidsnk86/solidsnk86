<div align="left">
<img src="https://neo-wifi.vercel.app/api/badge-counter?user=solidsnk86&badge_gradient_2=1E68DB&badge_gradient_1=1E68DB&counter_color=010409" alt="Contador de Visitas SolidSnk86" />
</div>

### ¿Te gusta el badge contador de visitas?

- Te explico como usarlo en tu perfil por <a href="https://github.com/solidsnk86/solidsnk86/blob/master/BADGE-INSTRUCTIONS.md">acá...</a>

## 👨‍💻 Sobre mí

**Desarrollador Front End con conocimientos en Back End**

🎓 Estudiando Tecnicatura Universitaria en Programación  
🏫 UTN Facultad Regional de San Rafael (Mendoza)

<div align="center">

<h3>Frases ramdom</h3>

> *"%{{phrase}}%"*
>
> — %{{author}}%

</div>

#

<br>

<div align="center">
<img src="https://raw.githubusercontent.com/solidsnk86/neo-wifi/refs/heads/master/public/Neo-Wifi.svg" width="190" height="90" alt="Neo Wifi Logo" />
</div>

<br>

## 📡 App para detectar tu antena WiFi más próxima exlusivo (Gobierno de la Provincia de San Luis, espacios WiFi de Córdoba y Mendoza)

Esta app te ayuda a detectar que antena y a qué distancia te encuentras de ella e información de la misma, para poder configurar tu 
CPE inalámbrico con la aplicación `NeoWiFi App 1.1.3 (beta)` para escritorio que dispongo en la web:
visita este link si te es de ayuda: <a href="https://neo-wifi.vercel.app/">https://neo-wifi.vercel.app</a>

<br>

## ✨ Mi Portafolio

<div align="center">

### ¡Te invito a mi sitio web!

En mi portafolio web encontrarás una selección de mis proyectos más destacados. Además, te animo a explorar mi aplicación, donde podrás ver tus estadísticas de GitHub al iniciar sesión.

[![Portfolio Badge](https://img.shields.io/badge/-Portfolio-2A2A2A?style=for-the-badge&logo=vercel&logoColor=white&link=https://calcagni-gabriel.vercel.app)](https://calcagni-gabriel.vercel.app)
[![GitHubStatsApp Badge](https://img.shields.io/badge/-GitHub_Stats-753F98?style=for-the-badge&logo=vercel&logoColor=white&link=https://calcagni-gabriel.vercel.app/github-stats)](https://calcagni-gabriel.vercel.app/github-stats)

</div>

<br>

## 🤖 Automatización

🚀 Este repositorio emplea `Node.js` y `GitHub Actions` para actualizar automáticamente los datos de GitHub cada hora a través de ésta API que he creado,
puedes chequearla aquí con tu nombre de usuario y si quieres hacer más peticiones puedes usar tu token de github:

```javascript
https://calcagni-gabriel.vercel.app/api/non-followers?user=TU_USUARIO

// Si vas a realizar demasiadas peticiones a la API:
https://calcagni-gabriel.vercel.app/api/non-followers?user=TU_USUARIO&gh_token=TU_TOKEN_DE_GITHUB
```

Puedes obtener los datos de la siguiente manera:

```javascript
const username = "TU_USUARIO"
const token = process.env.TU_TOKEN_DE_GITHUB
const getGithubStats = async () => {
  try {
    const response = await fetch(
    `https://calcagni-gabriel.vercel.app/api/non-followers?user=${username}&gh_token=${token}`
  )
  if (!response.ok) throw new Error(response.statusText)
  const jsonData = await response.json()
  return jsonData
  } catch (error) {
    console.error(error)
  }
}
```

|  <time>Readme actualizado el %{{updated_at}}%</time> |
| --------------------------------------------------------- |

<br>

## 📫 Conecta conmigo

<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-calcagni//)](https://www.linkedin.com/in/gabriel-calcagni//)
[![Gmail Badge](https://img.shields.io/badge/-calcagni.gabriel86@gmail.com-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:mailto:calcagni.gabriel86@gmail.com)](mailto:calcagni.gabriel86@gmail.com)

</div>

<br>

## 📊 Estadísticas de GitHub

📈 Los datos se obtienen mediante la `API v3` y `GraphQL API` de GitHub. Gracias a `Node.js` y los flujos de trabajo automatizados, 
las estadísticas se actualizan en tiempo real.

<table>
  <tr>
    <th>Categoría</th>
    <th>Detalle</th>
  </tr>
  <tr>
    <td>🥇 Lenguaje más usado</td>
    <td>%{{most_used_language}}% • %%{{percentage_1}}%</td>
  </tr>
  <tr>
    <td>🥈 Segundo lenguaje</td>
    <td>%{{second_most_used}}% • %%{{percentage_2}}%</td>
  </tr>
  <tr>
    <td>🥉 Tercer lenguaje</td>
    <td>%{{third_most_used}}% • %%{{percentage_3}}%</td>
  </tr>
  <tr>
    <td>🌟 Repositorio destacado</td>
    <td>%{{repo_name}}% con %{{repo_stars}}% estrellas</td>
  </tr>
  <tr>
    <td>📁 Repositorios Públicos</td>
    <td>%{{public_repos}}%</td>
  </tr>
  <tr>
    <td>⭐ Estrellas ganadas</td>
    <td>%{{stars_count}}%</td>
  </tr>
  <tr>
    <td>📝 Total de commits 2024</td>
    <td>%{{annual_commits_2024}}%</td>
  </tr>
  <tr>
    <td>📝 Total de commits 2025</td>
    <td>%{{annual_commits_2025}}%</td>
  </tr>
  <tr>
    <td>🙇‍♂️ Seguidores</td>
    <td>%{{followers}}%</td>
  </tr>
  <tr>
    <td>🙇‍♀️ Seguidos</td>
    <td>%{{following}}%</td>
  </tr>
</table>

### 👥 Quienes no me siguen de vuelta: %{{non_followers_count}}%

<div align="left" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(45px, 1fr))">

%{{github_stats}}%

</div>
