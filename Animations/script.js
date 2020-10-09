let bottleicon = document.getElementById("bottleicon"),
    info = document.getElementById("info"),
    morelink = document.getElementById("moreLink"),
    leftImage = document.getElementById("leftImage"),
    rightContent = document.getElementById("rightContent"),
    moreContent = document.getElementById("moreContent"),
    close = document.getElementById("close"),
    bottleBigImage = document.getElementById("bottleBigImage")

bottleicon.onclick = function() {
    bottleicon.style.animationName = "bottle"
    info.style.display = "block"
    info.style.animationName = "info"
}

morelink.onclick = function () {
    bottleicon.classList.add("removeBottle")
    bottleicon.style.animationName = "removeBottle"
    info.classList.add("removeInfo")
    info.style.animationName = "removeInfo"
    moreContent.style.animationName = "moreContentWrapper"
    leftImage.style.animationName = "productlargepic"
    rightContent.style.animationName = "productinfo"
}

close.onclick = function () {
    leftImage.classList.remove("left-image")
    leftImage.classList.add("removeLargeImage")
    leftImage.style.animationName = "removeLargeImage"
}