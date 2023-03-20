 const loadCountry =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => displayCountries(data));
 }

 const displayCountries = countries=>{
 
 const countriesHTML = countries.map(country => getCountriesHTML(country));
 const container = document.getElementById('countries');
 container.innerHTML= countriesHTML.join(' ');
 console.log(countries[0]);
 }

 const getCountriesHTML = (country)=>{
    return `
    <div class="country">
    <h2>${country.name.common}</h2>
    <p>Area : ${country.area}</p>
    <p>Region : ${country.region}</p>
    <img src="${country.flags.png}">
    </div>
    `
 }

  // option 1 destructuring
  
//   const getCountriesHTML = (country)=>{
//     const {name ,flags} = country;
//     return `
//     <div class="country">
//     <h1>${name.common}</h1>
//     <img src="${flags.png}">
//     </div>
//     `
//  }

  // option 2 destructuring

//   const getCountriesHTML = ({name ,flags,area,region})=>{
//     return `
//     <div class="country">
//     <h1>${name.common}</h1>
//     <img src="${flags.png}">
//     </div>
//     `
//  }

 loadCountry();