window.onload = function(){
    let box = document.querySelector(".kd")
    let xbox = document.querySelector(".xkd")
    for(let i=0;i<4;i++){
        let div = document.createElement("div")
        div.className = "kd"
        div.style.transform = `rotate(${90*i}deg)`
        box.appendChild(div)
    }
    for(let i=0;i<60;i++){
        let div = document.createElement("div")
        div.className = "xkd"
        div.style.transform = `rotate(${6*i}deg)`
        xbox.appendChild(div)
    }

    let hour = document.querySelector(".hour")
    let min = document.querySelector(".min")
    let sec = document.querySelector(".sec")

    function run(){
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        hour.style.transform = `rotate(${h*(360/12)}deg)`
        min.style.transform = `rotate(${m*(360/60)}deg)`
        sec.style.transform = `rotate(${s*(360/360)}deg)`
    }
    run()
    setInterval(run,1000) 
}
