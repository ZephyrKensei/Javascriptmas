/* 
Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css
*/ 
const snowGlobe = document.querySelector('.snow-globe')

function createSnowflake() {
    //Create snowflake
    const snowflake = document.createElement('div')
    snowflake.classList.add('snowflake')
    
    //starting position of snowflake]
    const start = Math.random() * (snowGlobe.offsetWidth - 20)
    snowflake.style.left = `${start}px`
    snowflake.style.top = `0px` // start from top
    
    //animation duration
    const duration = Math.random() * 10 + 5; //5s - 15s
    snowflake.style.animationDuration = `${duration}s`
    
    //Add snowflake to snowglobe
    snowGlobe.appendChild(snowflake)
    
    //Remove snowflake after animation is complete
    setTimeout(() => {
        snowflake.remove()
    }, duration * 1000)
}

setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!