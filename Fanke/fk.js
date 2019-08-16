function djs(shiName,fenName,miaoName){
    let hours = document.querySelector(shiName)
    let minutes = document.querySelector(fenName)
    let second = document.querySelector(miaoName)

    let futureTime = new Date("2019/8/17 05:20:00")
    setInterval(update,1000)
    
    function update () {
        let nowTime = new Date()
        let offset = Math.floor((futureTime.getTime()-nowTime.getTime())/1000)
    
        //小时
        let hoursNum = Math.floor(offset%(60*60*24)/(60*60))
        hours.innerHTML = hoursNum
        //分钟
        let minutesNum = Math.floor(offset%(60*60*24)%(60*60)/60)
        minutes.innerHTML = minutesNum
        //秒
        let secondNum = Math.floor(offset%(60*60*24)%(60*60)%60)
        second.innerHTML = secondNum
    }
}

