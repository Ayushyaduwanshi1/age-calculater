let userinput = document.getElementById("input");
let button = document.getElementById("button")
let output = document.getElementById("root2")
function calculateAge() {
    let birthdayValue = userinput.value;
    let currentDate = new Date();
    let userdate = new Date(birthdayValue);
    let year = currentDate.getFullYear() - userdate.getFullYear();
    let month = currentDate.getMonth() - userdate.getMonth();
    let day = year*365
    let totalbornday = day+(month*30)
    if (birthdayValue === "") {
        alert("Please enter your birthday");
        return
    }
    if (year <= -1 ) {
        alert("Enter Correct age")
        return
    }
    output.innerHTML = `Your age is ${year} years <br> ${month} Month old  <br> <br> And <br><br> It's been ${totalbornday} Days since you were born`;
    userinput.value =""
}
button.addEventListener("click", calculateAge)
window.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        calculateAge()
    }
})
