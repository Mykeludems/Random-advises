const diceButton = document.querySelector("#diceImage")
const mainAdvise = document.querySelector("#mainAdvise")

diceButton.addEventListener("click" , function(e){
    
    axios.get("	https://api.adviceslip.com/advice")
    .then(res =>{
        const advisePop = (res.data.slip.advice)
        console.log(advisePop)
        mainAdvise.innerHTML = advisePop;
    }).catch(err =>{
        console.log("ERROR!" , err)
    })
 
})