function timerFunction(){
    let timeElement = document.getElementById("time")
    // console.log(timeElement)
    let dateElement = document.getElementById("date")
    // console.log(dateElement)
    let now = new Date()
    let hour = now.getHours()%12 || 12
    let minutes = now.getMinutes().toString().padStart(2,"0")
    let seconds = now.getSeconds().toString().padStart(2,"0")
    let ampm = now.getHours() >= 12 ? "PM" :"AM"

    // console.log(seconds)

    timeElement.textContent = `${hour}:${minutes}:${seconds}:${ampm}`
    dateElement.textContent = now.toLocaleDateString(undefined,{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    })
}

// console.log(timerFunction())
setInterval(timerFunction,1000)

timerFunction()