let liIndex = 0
let limax = 3
function showItem() {
    let hideli = document.querySelectorAll('li')[liIndex]
    //hideli.className = ''
    for (let i = 0; i <= 100; i += 0.2) {
        let time = 0 + (i * 12) //let time = i*15 
        setTimeout(() => {
            hideli.style.left = '-' + i + '%'
        }, time)
    }

    if (liIndex >= limax) {
        liIndex = -1
    }

    let showli = document.querySelectorAll('li')[++liIndex]
    //showli.className = 'show'
    for (let i = 100; i >= 0; i -= .2) {
        let time = 1200 - (i * 12)
        setTimeout(() => {
            showli.style.left = i + '%'
        }, time)
    }
}

//showItem()
setInterval(showItem, 2000)