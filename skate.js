AFRAME.registerComponent('drive', 
{
init:function(){
    var gameStateValue = this.Element.getAttribute("game")
    if(gameStateValue == "play"){
        this.driveSkate()
    }
}
},
function driveSkate(){
var wheelRotation = 0
var multiply = 10
window.addEventListener('keydown', function(e){
    var wheel = document.querySelector("#control-wheel")
    if(e.code == "ArrowRight" || wheelRotation > -40){
        wheelRotation -= 5
        wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelRotation})
    }
    if(e.code == "ArrowLeft" || wheelRotation > -40){
        wheelRotation += 5
        wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelRotation})
    }
    var camrig = this.document.querySelector('#camera-rig')
    var camrot = camrig.getAttribute("rotation")
    var campos = camrig.getAttribute("position")
    var camMoveC = camrig.getAttribute("movement-controls")
    camrig.setAttribute("movement-controls",{"speed": camMoveC.speed + 0.05})
    var camdirect = new THREE.Vector3()
    camrig.object3D.getWorldDirection(camdirect)
    if(e.code == "ArrowRight"){
        camrot.y -= 5
        camrig.setAttribute("rotation", {x: 0, y: camrot.y, z: 0})
        camrig.setAttribute("movement-control", {"speed": camMoveC.speed + 0.05})
    }
    if(e.code == "ArrowLeft"){
        camrot.y += 5
        camrig.setAttribute("rotation", {x: 0, y: camrot.y, z: 0})
        camrig.setAttribute("movement-control", {"speed": camMoveC.speed + 0.05})
    }
})
}
)