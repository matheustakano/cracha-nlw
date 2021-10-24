const links_social_media = {
  github: 'matheustakano',
  youtube: 'UCU0FBbBo6B0o7j-MBLJ9WLw',
  facebook: 'matheus.takano.1',
  instagram: 'matheustakano',
  twitter: 'MatheusTakano'
}

function changeSocial_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}
changeSocial_media_links()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_image.src = data.avatar_url
      user_login.textContent = data.login
    })

  //then guarda respostas para o próximo 'then'
}

getGitHubProfileInfos()
