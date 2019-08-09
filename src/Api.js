//##After removing Api.js file from App.js then page is loaded but api is not calling the desired solution
    const search = document.querySelector('.search-field'),
        searchOutput = document.querySelector('.search-output');

    let searchTerm = '',
        output = '';

    search.addEventListener('keyup', debounce(() => {

        searchOutput.innerHTML = '';

        output = '';

        searchTerm = search.value.replace(' ', '+');

        fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
            .then(res => res.json())
            .then(data => {

                let characters = data.results;

                const totalPages = data.info.pages;

                if (totalPages > 1) {

                    for ( i = 2; i <= totalPages; i++) {

                        let page = i;
                        fetch(`https://rickandmortyapi.com/api/character/?page=${i}&name=${searchTerm}`)
                            .then(res => res.json())
                            .then(data => {

                                characters = characters.concat(data.results);

                                if (page === totalPages) {

                                    displayCharacters(characters);

                                }
                            })
                    }

                } else {

                    displayCharacters(characters);

                }
            })
            .catch(() => {

                searchOutput.innerHTML = `<p class="no-results">No Results Found</p>`;

            })
    }));

    function displayCharacters(characters) {

        characters.forEach(character => {

            output +=
                `<div class="col-lg-3">
    <div class="card-group">
        <div class="card card-singel-carc"><div class="card-image-crc"><img src="${character.image}" alt="${character.name}" class="img-fluid rep-image" />
    <div class="header-top">
        <h2 class="title-card-carc">${character.name}</h2>
        <p class="card-para-carc">id: ${character.id}</p><p class="card-para-carc" id="time-carc">Created: ${character.created}</p>
            </div>
        </div>
            <div class="card-body card-body-carc">
                <div class="table-responsive">
                    <table class="table">
                        <thead class="table-carc-header">
                            <tr>
                                <th>Column 1</th>
                                <th>Column 2</th>
                            </tr>
                        </thead>
                         <tbody>
                    <tr>
                        <td class="first-crc-stat table-text-crc">Status</td>
                        <td class="table-text-crc">${character.status}</td>
                    </tr>
                    <tr>
                        <td class="first-crc-stat table-text-crc">Species</td>
                        <td class="table-text-crc">${character.species}</td>
                    </tr>
                    <tr>
                        <td class="first-crc-stat table-text-crc">Gender</td>
                        <td class="table-text-crc">${character.gender}</td>
                    </tr>
                    <tr>
                        <td class="first-crc-stat table-text-crc">Origin</td>
                        <td class="table-text-crc">${character.origin.name}</td>
                    </tr>
                    <tr>
                        <td class="first-crc-stat table-text-crc">Last location</td>
                        <td class="table-text-crc">${character.location.name}</td>
                    </tr>
                </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>`

        });
        
        //Output results
        searchOutput.innerHTML = output;

    }

    function debounce(func, wait = 800, immediate) {

        let timeout;

        return () => {

            const context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                timeout = null;
                if (!immediate) func.apply(context, args);

            }, wait);

            if (immediate && !timeout) func.apply(context, args);
        };
    }
