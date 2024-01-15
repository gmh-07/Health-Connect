gsap.from("#lowest",{
    color:"red",
    duration:3
})

gsap.from("#second-lowest",{
    color:"green",
    duration:7
})

gsap.from("#second-top",{
    color:"blue",
    duration:11
})

gsap.to("#top",{
    color:"yellow",
    duration:15
})

var tl=gsap.timeline();
tl
.from("#lowest", {
    onStart: function () {
        $('#lowest').textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $('#lowest').textillate('out')
                }
            },
            out: { effect: 'fadeOutUp' }
        });
    }
})

.from("#second-lowest", {
    opacity:0,
    delay:1,
    onStart: function () {
        $('#second-lowest').textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $('#second-lowest').textillate('out')
                }
            },
            out: { effect: 'fadeOutUp' }
        });
    }
})

.from("#second-top", {
    opacity:0,
    delay:0.8,
    onStart: function () {
        $('#second-top').textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $('#second-top').textillate('out')
                }
            },
            out: { effect: 'fadeOutUp' }
        });
    }
})

.from("#top", {
    opacity:0,
    delay:1,
    onStart: function () {
        $('#top').textillate({
            in: {
                effect: 'fadeInUp',
                
            },
            
        });
    }
})


