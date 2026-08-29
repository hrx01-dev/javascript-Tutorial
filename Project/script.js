// Now  will create the api calling for currency exchange we will use USD AS THE BASE CURRENCY 
const baseurl = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_NLLd6AWiXPeNjsUUeRv5fRmdZOd2ZZqYqQj4WzSv&currencies=EUR%2CUSD%2CCAD%2CJPY%2CINR%2CKRW";
const dropdown = document.querySelectorAll(".box3 select")

for (code in codes) {
    console.log(codes[code])
}
for (let select of dropdown) {
    for (currcode in codes) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        select.append(newoption)
        if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = codes[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/32.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".box1 input");
    let amtVal = amount.value;
    console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }


    let response = await fetch(baseurl);
    let data = await response.json();
    console.log(data);
    let rate = data.data[dropdown[0].value];
    console.log(rate);
    let exchangeRate = amtVal * rate;
    console.log(exchangeRate);
    let para = document.querySelector("#result");
    para.innerText = `${amtVal} USD = ${exchangeRate} ${dropdown[0].value}`;
    let foot = document.querySelector("#footer");
    foot.innerText = `Thanks for using ConvoX`;

})