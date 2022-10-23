AFRAME.registerComponent("bowling-balls", {

    init: function () {
        this.shootBalls()
    },


    shootBalls: function () {

        window.addEventListener("keydown", (e) => {

            if (e.key === "z") {
                var bowling = document.createElement("a-entity")
                bowling.setAttribute("geometry", {
                    primitive: "sphere", radius: .1
                })

                bowling.setAttribute("material", "color", "black")

                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bowling.setAttribute("position", {
                    x: pos.x, y: pos.y, z: pos.z
                });


                var camera = document.querySelector("#camera").object3D

                //get the camera directions as Three.js vector
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                //set the veloctiy and its direction
                bowling.setAttribute("velocity", direction.multiplyScalar(-10))


                var scene = document.querySelector("#scene")

                scene.appendChild(bowling)

            }
        })

    },


})