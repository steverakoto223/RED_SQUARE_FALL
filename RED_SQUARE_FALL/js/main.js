$('.win').hide()
$('.lose').hide()
$('.scr').hide()

let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

function start() {
    $('.scr').show()
    let gravity = 1.5 //gravité
    //creaction joueur
    class Player {
        constructor() {
            this.position = {
                x: 100,
                y: 100
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30
            this.height = 30
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y,
                this.width, this.height
            )

        }
        uptade() {
            this.draw()
            this.position.x += this.velocity.x //pos par rapport amn x
            this.position.y += this.velocity.y // pos par rapport amn y
            //gravité
            if (this.position.y + this.height + this.velocity.y
                <= canvas.height)
                this.velocity.y += gravity

        }
    }
    // platform
    class Platform {
        constructor(x, y) {
            this.position = {
                x,
                y
            }
            this.width = 100
            this.height = 20
        }
        draw() {
            c.fillStyle = 'green'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    }



    let platform = new Platform()
    let platforms = []
    let player = new Player();
    function depart() {
        $('.stage').text('stage 1')
        $('.win').hide()
        $('.lose').hide(1000)
        platform = new Platform()
        platforms = [new Platform(
            0, 560
        ), new Platform(
            50, 560
        ), new Platform(
            150, 560
        ),
        new Platform( //2m platform
            499, 560
        ),
        new Platform(
            580, 560
        ),
        new Platform(
            650, 560
        ), new Platform( //3m platform
            1000, 560
        )
            , new Platform(
                1100, 560
            ), new Platform( //4m platform
                1499, 560),
        new Platform(
            1599, 560
        ),
        new Platform( //5m platform
            1999, 560),
        new Platform(
            2099, 560
        ),
        new Platform( //6m platform
            2499, 560),
        new Platform(
            2599, 560
        ),
        new Platform( //7m platform
            3000, 560),
        new Platform(
            2900, 560
        ),
        new Platform( //m platform
            3050, 560),
        new Platform(
            3150, 560
        ), new Platform(
            3250, 560
        ), new Platform(
            3350, 560
        ), new Platform(
            3450, 560
        )
        ]
        player = new Player();
        scrollOffset = 0
    }

    function nextstep1() {
        $('.stage').text('stage 2')
        $('.win').hide(1000)
        $('.lose').hide(1000)
        platform = new Platform()
        platforms = [new Platform(
            0, 560
        ), new Platform(
            100, 560
        ), new Platform(
            200, 560
        ),
        new Platform(
            300, 560
        ),
        new Platform( //2m platform
            500, 460
        ),
        new Platform(
            600, 460
        ), new Platform( //3m platform
            900, 360
        ),
        new Platform(
            1000, 360
        ), new Platform( //4m platform
            1400, 500),
        new Platform(
            1500, 500),
        new Platform( //5m platform
            1900, 300),
        new Platform(
            2000, 300),
        new Platform( //6m platform
            2400, 560),
        new Platform(
            2500, 560),
        new Platform(
            2900, 560),
        new Platform(
            3000, 560),
        new Platform(
            3100, 560),
        new Platform(
            3200, 560),
        new Platform(
            3300, 560),
        new Platform(
            3400, 560),
        new Platform(
            3500, 560)]
        player = new Player();
        scrollOffset = 2659
    }
    function nextstep2() {
        $('.stage').text('stage 3')
        $('.win').hide(1000)
        $('.lose').hide(1000)
        platform = new Platform()
        platforms = [new Platform(
            0, 260
        ),
        new Platform(
            100, 260
        ),
        new Platform(
            200, 260
        ),
        new Platform( //2m platform
            550, 160
        ),
        new Platform(
            650, 160
        ),
        new Platform(
            750, 160
        ), new Platform( //3m platform
            1000, 360
        ),
        new Platform(
            1100, 360
        ), new Platform( //4m platform
            1600, 560),
        new Platform(
            1700, 560),
        new Platform( //5m platform
            2000, 400),
        new Platform(
            2100, 400),
        new Platform( //6m platform
            2500, 360),
        new Platform(
            2600, 360),
        new Platform(
            2900, 260),
        new Platform(
            3000, 260),
        new Platform(
            3100, 260),
        new Platform(
            3200, 260),
        new Platform(
            3300, 260)];
        player = new Player();
        scrollOffset = 5500
    }
    function nextstep3() {
        $('.stage').text('stage 4')
        $('.win').hide(1000)
        $('.lose').hide(1000)
        platform = new Platform()
        platforms = [new Platform(
            0, 130
        ),
        new Platform(
            100, 130
        ),
        new Platform(
            200, 130
        ),
        new Platform(
            300, 130
        ),
        new Platform(
            400, 130
        ),

        new Platform( //2m platform
            600, 360
        ), new Platform( //3m platform
            800, 460
        ), new Platform( //4m platform
            1000, 360),
        new Platform( //5m platform
            1200, 200),
        new Platform( //6m platform
            1400, 560),
        new Platform( //7m platform
            1600, 360),
        new Platform( //8m platform
            2000, 560),
        new Platform( //9m platform
            2400, 360),
        new Platform( //10m platform
            2800, 260),
        new Platform( //11m platform
            2900, 160),
        new Platform( //12m platform
            3200, 460)
            ,
        new Platform(
            3300, 460
        ),
        new Platform(
            3400, 460
        ),
        new Platform(
            3500, 460
        ), new Platform(
            3600, 460
        ), new Platform(
            3700, 460
        ),
        new Platform(
            3800, 460
        ),
        new Platform(
            3900, 460
        ),]
        player = new Player();
        scrollOffset = 8520
    }
    let keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }//,
        //up: {
        //  pressed: false
        //}
    }

    let scrollOffset = 0
    player.uptade()

    //fonction pcpl
    function animate() {
        requestAnimationFrame(animate)
        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)

        platforms.forEach(platform => {
            platform.draw()
        })

        player.uptade()
        //evenement toucher a gauche et a droite
        if (keys.right.pressed && player.position.x < 400) {
            player.velocity.x = 10
        } else if ((keys.left.pressed
            && player.position.x > 100) || (keys.left.pressed
                && scrollOffset === 0 && player.position.x > 0)) {
            player.velocity.x = -10
        } else {
            player.velocity.x = 0
            //animation du platform

            if (keys.right.pressed) {
                scrollOffset += 5
                platforms.forEach(platform => {
                    platform.position.x -= 5
                })

            } else if (keys.left.pressed && scrollOffset > 0) {
                scrollOffset -= 5

                platforms.forEach(platform => {
                    platform.position.x += 5
                })

            }
        }
        $('.score').text(scrollOffset)
        console.log(scrollOffset)
        //platform empeche la chutte detecté la collision
        platforms.forEach(platform => {
            if (player.position.y + platform.height
                <= platform.position.y
                && player.position.y + player.height
                + player.velocity.y >= platform.position.y
                && player.position.x + player.width
                >= platform.position.x && player.position.x
                <= platform.position.x + platform.width) {
                player.velocity.y = 0
            }
        }) // victoires
        if (scrollOffset === 2600) {
            $('.win').show()
            console.log('tonga')
            nextstep1()
        }
        if (scrollOffset === 3600) {
            $('.win').show()
            console.log('tonga')
            nextstep2()
        }

        if (scrollOffset === 8210) {
            $('.win').show()
            console.log('tonga')
            nextstep3()
        }
        if (scrollOffset == 17100) {
            $('.win').show()
            console.log('tonga')
            depart()
        }
        // DEFAITE
        if ((player.position.y > canvas.height) || (player.velocity.y < - 50)) {
            console.log('maty ee')
            $('.lose').show()
            // nextstep1()
            depart()
        }
        //if scroll -0
        /* if (scrollOffset < -15) {
             depart()
         }*/
    }
    animate()
    //controle

    addEventListener('keydown', ({ keyCode }) => {

        switch (keyCode) {

            case 38:
                console.log('up')
                player.velocity.y -= 25 //miakatra 20 px par rapport amn y
                //    keys.up.pressed = true
                break

            case 39:
                console.log('rigth')
                // player.velocity.x += 1 // mihisaka 1px par rapport amn x
                keys.right.pressed = true
                break

            case 40:
                console.log('down')
                break


            case 37:
                console.log('left')
                keys.left.pressed = true
                break

        }
        console.log(keys.right.pressed)
    })

    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 38:
                console.log('up')
                //keys.up.pressed = false
                break

            case 39:
                console.log('rigth')
                keys.right.pressed = false
                break

            case 40:
                console.log('down')
                break


            case 37:
                console.log('left')
                keys.left.pressed = false
                break

        }



    })
    $('#start').hide()
}