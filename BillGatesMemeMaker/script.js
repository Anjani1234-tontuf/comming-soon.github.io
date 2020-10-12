// WHAT ARE YOU DOING LOOKING IN HERE???

const sleep = (time) => new Promise(r => setTimeout(r, time))

var memeURL, memeName, background, meme, ids, canvas, ctx, positions, loadedImages
var helpVal = false
const fileName = "Bill-Gates-Coding-Meme.jpg"

async function setup() {
    memeURL = "./images/BillGatesMemeTemplate.png"
    memeName = "BillGatesTemplate"
    backgroundURL = "./images/BillGatesMemeTemplateBackground.jpg"
    ids = ["main", "secondary", "binder"]
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d')

    positions = Array(ids.length).fill().map(_ => [0, 0])
    loadedImages = Array(ids.length).fill()

    background = await loadImage(backgroundURL)
    meme = await loadImage(memeURL)

    ids.forEach(id => {
        document.getElementById(`upload-${id}`).addEventListener('change', uploadImage)
    })
}

// Put the element ID's of each file uploader along with the corresponding corners here
const getCorners = (pos) => {
    if(pos === "main") {
        return {
            topLeft: [785, 723],
            topRight: [1133, 743],
            bottomLeft: [786, 974],
            bottomRight: [1126, 990]
        }
    } else if (pos === "secondary") {
        return {
            topLeft: [332, 179],
            topRight: [481, 170],
            bottomLeft: [358, 314],
            bottomRight: [496, 277]
        }
    } else {
        return {
            topLeft: [195, 880],
            topRight: [473, 856],
            bottomLeft: [358, 1016],
            bottomRight: [636, 974]
        }
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    await setup()
    loadingAnimation()
    let meme = await loadImage(memeURL)
    ctx.drawImage(meme, 0, 0, canvas.width, canvas.height)
    // Checks if browser is chrome and shows message
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    if (isChrome) { document.getElementById('chromeWarning').classList.add('ChromeMessageHidden') }
})

const generate = () => {
    const canvas = document.getElementById('canvas'),
    image = canvas.toDataURL('image/jpeg', 1.0)
    document.getElementById('GeneratedImage').src = image
    openPopUp()
}

const  downloadCanvas = () => {
    const canvas = document.getElementById('canvas'),
    image = canvas.toDataURL('image/jpeg', 1.0),
    link = document.createElement('a')
    link.download = fileName
    link.href = image
    link.click()
    closePopUp()
}

const openPopUp = async() => {
    // Wink Animation
    document.getElementById('wink').classList.add('visible')
    document.getElementById('wink-text').classList.add('visible')
    await sleep(300)
    document.getElementById('wink').classList.remove('visible')
    document.getElementById('wink-text').classList.remove('visible')
    await sleep(100)
    // Opens Popup
    document.getElementById('download-popup').classList.add('popup-visible')
}

const closePopUp = () => {
    document.getElementById('download-popup').classList.remove('popup-visible')
}

const loadingAnimation = async() => {
    document.getElementById('loadingBill').classList.add('puff-in-center')
    await sleep(1000)
    document.getElementById('loadingScreen').classList.add('hidden')
}

const selected = (selection) => {
    let input = document.getElementById(`upload-${selection}`)
    input.click()
}

const uploadImage = async (e) => {
    if(!e.target.value){
        alert("No file selected") // Add windows error popup with old sound maybe
        return
    }
    let name = e.target.id.split('-')[1]
    loadedImagesIndex = ids.findIndex(el => el === name)
    loadedImages[loadedImagesIndex] = await loadUploadImage(canvas, name)
    draw()
}

const draw = async() => {
    // Start Loading animation
    document.getElementById('loadingUpdateWrapper').classList.add('visible')
    const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d')
    // Then draw all at once
    updateButtonVis()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    loadedImages.forEach((img, i) => img ? ctx.drawImage(img, positions[i][0], positions[i][1]) : null)
    ctx.drawImage(meme, 0, 0, canvas.width, canvas.height)
    // Finish Loading
    await sleep(300)
    document.getElementById('loadingUpdateWrapper').classList.remove('visible')
}

const loadUploadImage = async (canvas, elementID) => {
    const element = document.getElementById(`upload-${elementID}`)
    if(!element.value) return
    const f = element.files[0]
    const url = window.URL || window.webkitURL
    const src = url.createObjectURL(f)
    const img = await loadImage(src)
    const corners = getCorners(elementID)
    url.revokeObjectURL(src)
    return skewImage(canvas, img, corners)
}

const clearCanvas = async () => {
    ids.forEach(id => {
        document.getElementById(`upload-${id}`).value = null
    })
    loadedImages = loadedImages.map(_ => null)
    draw()
    updateButtonVis()
}

const downloadTemplateImage = () => {
    const link = document.createElement('a')
    link.download = memeName
    link.href = memeURL
    link.click()
}

const updateButtonVis = () => {
    ids.forEach(id => {
        let button = document.getElementById(id)
        let upload = document.getElementById(`upload-${id}`)
        if(upload.value){
            button.classList.remove('visible')
            button.classList.add('hidden')
        } else {
            button.classList.remove('hidden')
            button.classList.add('visible')
        }
    })
}

const help = async() => {
    helpButton = document.getElementById('helpButton')
    helpVal = !helpVal
    helpVal? helpButton.classList.add('button-selected') : helpButton.classList.remove('button-selected')
    if (helpVal) {
        document.getElementById('bubble1').classList.add('bubble-visible')
        await sleep(200)
        document.getElementById('bubble2').classList.add('bubble-visible')
        await sleep(200)
        document.getElementById('bubble3').classList.add('bubble-visible')
    } else {
        document.getElementById('bubble1').classList.remove('bubble-visible')
        document.getElementById('bubble2').classList.remove('bubble-visible')
        document.getElementById('bubble3').classList.remove('bubble-visible')
    }
}

// CREATED BY ALEX LEYBOURNE AND NICOLAS JENSEN 2020

