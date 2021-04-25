let sellUahFromUsd = 28
let sellUahFromRur = 0.38
const takeData = () => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            sellUahFromUsd = data[0]["sale"]
            sellUahFromRur = data[2]["sale"]
            console.log("Successful")
        })
        .catch(function (error) {
            console.log(error)
        })
}
takeData()
const convertUahIntoUsd = (value) => {
    document.getElementById("uahSellUsdOutput").innerHTML = (value / sellUahFromUsd).toFixed(2).toString()
}