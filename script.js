const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    resultArtist.innerHTML = '';

    result.forEach(element => {
        const artistDiv = document.createElement('div'); 
        const artistName = document.createElement('h3'); 
        const artistImage = document.createElement('img'); 

        artistName.innerText = element.name;
        artistImage.src = element.urlImg;

        artistDiv.appendChild(artistImage); 
        artistDiv.appendChild(artistName); 
        resultArtist.appendChild(artistDiv); 
    });

    resultArtist.classList.remove('hidden'); 
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.add('hidden'); 
        return;
    }
    
    requestApi(searchTerm);
});

