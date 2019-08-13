window.onload = function(){
    class Game{
        constructor(screenClassName){
            this.screen = document.querySelector(screenClassName)
            
        }
        //创建字母
        createLetter(num=6){
            for(let i=0;i<num;i++){
                let div = document.createElement("div")
                let letter = document.querySelector(".letter")
                div.classList.add("letter")
                //随机字母
                let word = String.fromCharCode(parseInt(Math.random()*26+65))
                //平行随机位置
                let left = Math.random()*6.9
                div.setAttribute("style",`background-image:url(./img/A_Z/${word}.png);background-size:cover;top:1rem;left:${left}rem;`)
                //随机位置
                this.screen.appendChild(div)
            }






           
            // let num = ""
            // num.fromcharCode(parseInt(Math.random()*26+65))
            // console.log(num)
            // div.setAttribute.
            // style.backgroundImage = 'url(`./`)'
            // letter.appendChild(div)
        }
    }






    let run =new Game(".backGround")
    run.createLetter()
    
}