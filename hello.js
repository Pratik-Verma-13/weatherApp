const inputField = document.getElementById('search');
const clearButton = document.getElementById('crossbox');
const details = document.getElementById("weatherData") 
clearButton.addEventListener('click', function() {
inputField.value = '';
details.style.display = "none";
});
details.style.display = "none";
// for navbar
                const navbar = document.getElementById('navbar')

                function openSideBar(){
                    navbar.classList.add('show')
                }
                function closeSideBar(){
                    navbar.classList.remove('show')
                }

                const navLinks = document.querySelector('nav a')
                navLinks.forEach(link => { 
                    link.addEventListener('click', () => {
                        closeSideBar()
                    })
                })

function fetchData() {
    const temperature = document.getElementById("temperature")
    const humidity = document.getElementById("humidity")
    // const aqi = document.getElementById("sec3")
    const windSpeed = document.getElementById("windspeed")
    // const rainFall = document.getElementById("sec5")
    // const PM10 = document.getElementById("sec6")
    // const PM25 = document.getElementById("sec7")
    const condition = document.getElementById("condition")
    // const windDir = document.getElementById("sec9")
    const pressure = document.getElementById("pressure")
    const cityDisplay = document.getElementById("city")
    const image = document.getElementById("displayimage")
    
    details.style.display = "block"
    
    const cityName = document.getElementById("search").value.toLowerCase()
    cityDisplay.textContent = cityName.toUpperCase()
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=7bcbcc5f7080467fb8c134506241612&q=${cityName}&days=1&aqi=yes&alerts=yes`)
        .then((response) => response.json())
        .then((data) => {
            temperature.textContent = (data.current.temp_c);
            humidity.textContent = (data.current.humidity);
            windSpeed.textContent = (data.current.wind_kph);
            condition.textContent = (data.current.condition.text);
            pressure.textContent = (data.current.pressure_mb);
            

        })
}
