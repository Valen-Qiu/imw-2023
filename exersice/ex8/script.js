const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: 66,
}

const { url, type, id } = apiData
const apiUrl = `${url}${type}/${id}`;

console.log(apiUrl);

fetch(apiUrl)
    .then((data) => {
        if (data.ok) {
            return data.json()
        }
        throw new Error('Response not ok.');
    })
    .then(pokemon => generateHtml(pokemon))
    .catch(error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>height: ${data.height}</span>
            <span>weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}