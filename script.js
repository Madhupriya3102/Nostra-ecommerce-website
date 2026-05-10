 
 //offer Bar
        var offbar=document.querySelector(".offer-bar")
        var closebar=document.getElementById("offer-close")
        if(closebar){
        closebar.addEventListener("click",function(){
            offbar.classList.add("hidden")
        })
    }
        //side menu
        var openbtn=document.getElementById("option");
        var sidemenu=document.getElementById("sidemenu")
        var closebtn=document.getElementById("menu-close")
openbtn.addEventListener("click",function(){
    sidemenu.classList.add("open")

})
closebtn.addEventListener("click",function(){
    sidemenu.classList.remove("open")
})
// Slider   
var wrapper = document.querySelector(".slide-wrapper")
if(wrapper){
var slides = document.querySelectorAll(".slide")
var current = 0
var isAnimating = false
 
document.getElementById("next").addEventListener("click", function(){
    if(isAnimating) return
    isAnimating = true
    current = (current + 1) % slides.length
    wrapper.style.transform = "translateX(-" + (current * 100) + "%)"
    setTimeout(function(){ isAnimating = false }, 2000)
})
 
document.getElementById("prev").addEventListener("click", function(){
    if(isAnimating) return
    isAnimating = true
    current = (current - 1 + slides.length) % slides.length
    wrapper.style.transform = "translateX(-" + (current * 100) + "%)"
    setTimeout(function(){ isAnimating = false }, 2000)
})
}
//heart color
var heart =document.querySelectorAll(".fa-heart")
heart.forEach(function(heart) {
    

heart.addEventListener("click",function(){
   this.classList.toggle("fa-solid")    // ← fills heart! ✅
        this.classList.toggle("fa-regular")  // ← removes outline!
        this.classList.toggle("liked")       // ← makes red!
    })
})
//collection
// collection filter
// collection filter
var checkboxes = document.querySelectorAll(".filters input")  // ← ADD THIS!

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function(){
        filterProducts()
    })
})  

function filterProducts(){
    var checked = []
    checkboxes.forEach(function(cb){
        if(cb.checked){
            checked.push(cb.value.toLowerCase())
        }
    })

    var cards = document.querySelectorAll(".product-card")
    cards.forEach(function(card){
        if(checked.length === 0){
            card.classList.remove("hidden")
        } else {
            var tags = card.getAttribute("data-tags").toLowerCase()
            var match = false

            checked.forEach(function(filter){
                if(tags.includes(filter)){
                    match = true
                }
            })

            if(match){
                card.classList.remove("hidden")
            } else {
                card.classList.add("hidden")
            }
        }
    })
}
