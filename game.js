AFRAME.registerComponent('game',
{
    init: function(){
        var duration = 300
        var timerE1 = document.querySelector("#timer")
        this.startTimer(duration, timerE1)
    },
    schema: {
        gameState : {
            type: "string",
            default: "play"
        }
    },
    startTimer: function(duration, timerE1){
        var min
        var sec
        setInterval(() => {
            if (duration>=0){
                this.data.gameState = "play"
                min = parseInt(duration/60)
                sec = parseInt(duration%60)
                if(min<10){
                    min = "0"+min
                }
                if(sec<10){
                    sec = "0"+sec
                }
                timerE1.setAttribute("text",{
                    value: min+":"+sec
                });
                duration -= 1
            }
            else {
                this.data.gameState = "over"
                var camrig = document.querySelector('#camera-rig')
                camrig.setAttribute("velocity",
                {
                    x:0,
                    y:0,
                    z:0
                })
                var over = document.querySelector('#over')
                over.setAttribute("visible",true)
                var skateSpeed = document.querySelector('#speed')
                skateSpeed.setAttribute("text",{
                    value: "0"
                })
            }
        }, 100);
    }
})