$(function() {

    BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    API_KEY = 'bfdb1e0b2fe6470ac34ee16208e72a89';

    const $main = $('main');
    const $input = $('input[type="text"]');
    const $form = $('form');

    let weatherInfo;

    $form.on('submit', handleSubmit);

    function handleSubmit(evt) {
        evt.preventDefault();
        const currCity = $input.val();
        $.ajax(`${BASE_URL}${currCity}&appid=${API_KEY}&units=imperial`)
            .then(function(data) {
                weatherInfo = data
                render();
            }, function(error) {
                console.log("error:", error)
            })
    }


    function render() {
        $main.html(

            `
        <p>Weather For: ${weatherInfo.name}</p>
        <p>Temperature: ${weatherInfo.main.temp}</p>
        <p>Feels Like: ${weatherInfo.main.feels_like}</p>
        <p>Weather: ${weatherInfo.weather[0].description}</p>
        `
        )
    }

})