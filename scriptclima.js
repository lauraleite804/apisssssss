async function getWeather() {
    //Criar variável do valor inserido pelo usuário
    let cidade = document.getElementById('city').value


    //Conectar com a API - Clima
    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variável para consumir o json da temperatura  

    let tempCelsius = resposta.data.main.temp

    console.log(tempCelsius)

    //Imprimir no FRONT END e concatenar com JQUERY
    document.getElementById('tempMundial').innerHTML = `A temperatura atual da cidade ${cidade} é de: ${tempCelsius.toFixed(0)} °C`
}

//Chamar a função
getWeather()