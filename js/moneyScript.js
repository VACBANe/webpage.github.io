let sellUahUsd = 28
let sellUahEur = 33
let sellUahRur = 0.38
let sellUsdBtc = null
let sellUahUsdBtc = null
const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
async function takeAsyncData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        sellUahUsd = data[0]["sale"]
        sellUahEur = data[1]["sale"]
        sellUahRur = data[2]["sale"]
        sellUsdBtc = data[3]["sale"]
        sellUahUsdBtc = sellUahUsd * sellUsdBtc
        console.log("Successful")
    } catch (e) {
        console.error(e);
    }

}
takeAsyncData()
const convertUahIntoUsd = (value) => {
    document.getElementById("uahSellUsdOutput").innerHTML = (value / sellUahUsd).toFixed(2).toString()
    document.getElementById("uahSellEurOutput").innerHTML = (value / sellUahEur).toFixed(2).toString()
    document.getElementById("uahSellRurOutput").innerHTML = (value / sellUahRur).toFixed(2).toString()
    document.getElementById("uahSellBtcOutput").innerHTML = (value / sellUahUsdBtc).toFixed(6).toString()
}