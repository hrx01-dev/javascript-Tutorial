// API FETCHING - It provides a interface for fetching resources 
const Url = "https://cat-fact.herokuapp.com/facts"
const type = document.querySelector("#p1")
const getfact = async () => {
    let promise = await fetch(Url);
    console.log(promise.status)// for getting specific data only we use .status
    let data = await promise.json();
    // console.log(data)
    type.innerText = data[0].text;
}
// now we will use this  in HTML 
getfact()

// now we will make a project using api(s)i.e., CURRENCY CONVERTER

