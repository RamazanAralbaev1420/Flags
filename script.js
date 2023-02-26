const row = document.querySelector('.row'),
select = document.querySelector('.select'),
search = document.querySelector('.search');

let asia = [];
let europe = [];
let africa = [];
let america = [];


const getCountries = async() => {
    let res = await fetch('https://restcountries.com/v3.1/all');
    let countries = await res.json();

    if(select.value == "All") {
        countries.forEach(item => {
            row.innerHTML += `
            <div class="col-4">
                <div class="country">
                    <div class="imgFlags">
                        <img src="${item.flags.png}" alt="">
                    </div>
                    <div class="info">
                        <h3>${item.name.common}</h3>
                        <p><b>Population: </b>${item.population}</p>
                        <p><b>Region: </b>${item.region}</p>
                        <p><b>Capital: </b>${item.capital}</p>
                    </div>
                </div>
            </div>
            `
    })

    }


    countries.forEach(country => {
        switch(country.region) {
            case 'Asia':
                asia.push(country);
                break;
            case 'Europe':
                europe.push(country);
                break;
            case 'Africa':
                africa.push(country);
                break;
            case 'Americas':
                america.push(country);
        }
    });

    const clearDom = () => {
        row.innerHTML = '';
    }

    const render = function (country) {
        country.forEach(item => {
            row.innerHTML += `
            <div class="col-4">
                <div class="country">
                    <div class="imgFlags">
                        <img src="${item.flags.png}" alt="">
                    </div>
                    <div class="info">
                        <h3>${item.name.common}</h3>
                        <p><b>Population: </b>${item.population}</p>
                        <p><b>Region: </b>${item.region}</p>
                        <p><b>Capital: </b>${item.capital}</p>
                    </div>
                </div>
            </div>
            `
        })
    }


    select.addEventListener('change', () => {
        let mayData = select.value;

        if(select.value === mayData) {

            switch(mayData  ) {
                case 'All':
                    clearDom();
                    render(countries);
                    break;
                case 'Asia':
                    clearDom();
                    render(asia);
                    break;
                case 'Europe':
                    clearDom();
                    render(europe)
                    break;
                case 'Africa':
                    clearDom();
                    render(africa)
                    break;
                case 'Americas':
                    clearDom();
                    render(america);
                    
            } 
        } else {
             render(countries)   
        }
    })




    search.addEventListener('input', () => {
        let searchInput = search.value;
    
        const ser = function (country) {
            country.forEach(item => {
                if(searchInput === 'as' ) {
                    row.innerHTML += `
                    <div class="col-4">
                    <div class="country">
                        <div class="imgFlags">
                            <img src="${item.flags.png}" alt="">
                        </div>
                        <div class="info">
                            <h3>${item.name.common}</h3>
                            <p><b>Population: </b>${item.population}</p>
                            <p><b>Region: </b>${item.region}</p>
                            <p><b>Capital: </b>${item.capital}</p>
                            </div>
                        </div>
                    </div>
            `
    
            }   
        })
    }
})
}


getCountries();










































    // select.addEventListener('input', () => {
    //     if (select.value == 'Asia') {
    //         row.innerHTML += `
    //         <div class="col-4">
    //             <div class="country">
    //                 <img src="${item.flags.png}" alt="">
    //                 <div class="info">
    //                 <h3>${item.name.common}</h3>
    //                     <p><b>Population: </b>${item.population}</p>
    //                     <p><b>Region: </b>${item.region}</p>
    //                     <p><b>Capital: </b>${item.capital}</p>
    //                 </div>
    //             </div>
    //         </div>
    
    //         `
            

    //     }
    // })
    // select.addEventListener('change', () => {
    //     countrys.forEach(item => {

    //         if (item.region == data) {
    //             row.innerHTML += `
    //             <div class="col-4">
    //                     <div class="country">
    //                         <img src="${item.flags.png}" alt="">
    //                         <div class="info">
    //                         <h3>${item.name.common}</h3>
    //                             <p><b>Population: </b>${item.population}</p>
    //                             <p><b>Region: </b>${item.region}</p>
    //                             <p><b>Capital: </b>${item.capital}</p>
    //                         </div>
    //                     </div>
    //             </div>
    //             `
    //         }

    //     })
    // })
