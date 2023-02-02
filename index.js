const toggleOff = document.getElementById("toggle_off")
const toggleOn = document.getElementById("toggle_on")

toggleOff.addEventListener('click', ()=>{
    document.body.classList.add("dark_mode")
    toggleOn.style.visibility = "visible"
    toggleOn.style.color = "white"
    toggleOff.style.visibility = "hidden"
})

toggleOn.addEventListener("click", ()=>{
    document.body.classList.remove("dark_mode")
    toggleOn.style.visibility = "hidden"
    toggleOff.style.visibility = "visible"
})


