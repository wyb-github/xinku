$(function(){
    let imgs = $(".LBT .lunbotu")
    let box = $(".LBT")
    let prev = $(".xiangz")
    let next = $(".xiangy")
    let dians = $(".yd1")
    let flag = false
    let prevIndex = nowIndex = 0

    imgs.not(":first").css("left","1200px")

    function run(type=0){
        flag = false
        if(type==0){
            nowIndex += 1
            if(nowIndex>=imgs.length){
                nowIndex = 0
            }
            imgs.eq(nowIndex).css("left","1200px").animate({"left":"0px"},500)
            imgs.eq(prevIndex).animate({"left":"-1200px"},500)
            flag = true
            prevIndex = nowIndex
           
            dians.css("background","red").eq(nowIndex).css("background","white")
        }else{
            nowIndex -= 1
            if(nowIndex<0){
                nowIndex = imgs.length-1
            }
            imgs.eq(nowIndex).css("left","-1200px").animate({"left":"0"},500)
            imgs.eq(prevIndex).animate({"left":"1200px"},500)
            flag = true
            prevIndex = nowIndex
            
            dians.css("background","red").eq(nowIndex).css("background","white")
        }
    }
    let t = setInterval(run,2000)

    next.click(function(){
        if(flag){
            run()
        }
    })
    prev.click(function(){
        if(flag){
            run(1)
        }
    })

    box.hover(function(){
        clearInterval(t)
    },function(){
        t = setInterval(run,2000)
    })

    dians.click(function(){
        let i = $(this).index()
        nowIndex = i
        imgs.eq(nowIndex).css("left","1200px").animate({"left":"0px"},1000)
        imgs.eq(prevIndex).animate({"left":"-1200px"},1000)
        prevIndex = nowIndex
    })
})