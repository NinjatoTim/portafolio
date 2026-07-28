async function obtenerReposSeleccionados(usuario, reposDeseados) {
  const contenedor = document.getElementById('github-repos');

  try {
    const respuesta = await fetch(`https://api.github.com/users/${usuario}/repos?per_page=100`);
    const todosLosRepos = await respuesta.json();

    // Filtramos solo los repositorios que están en tu lista
    const reposFiltrados = todosLosRepos.filter(repo => 
      reposDeseados.includes(repo.name)
    );

    contenedor.innerHTML = '';

    reposFiltrados.forEach(repo => {
      const tarjeta = document.createElement('article');
      tarjeta.className = 'repo-card';
      tarjeta.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || 'Sin descripción.'}</p>
        <div class="repo-meta">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>💻 ${repo.language || 'Varios'}</span>
        </div>
      `;
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error al obtener los repositorios:', error);
  }
}

// Pasa tu usuario y los nombres EXACTOS de los repos que quieres mostrar
const misReposFavoritos = ['arkham_challenge', 'agile-final-project','ImageAnalisys'];
obtenerReposSeleccionados('NinjatoTim', misReposFavoritos);