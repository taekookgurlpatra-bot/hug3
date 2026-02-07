
/* Auto intro loading → game */

setTimeout(()=>{
showPage("game")
},5000);


/* Page Switch */

function showPage(id){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active")
})

document.getElementById(id).classList.add("active")

window.scrollTo(0,0)
}


/* Hug Game */

const hugTypes=[
"🤗 Tight Hug",
"🫂 Warm Hug",
"🤪 Silly Hug",
"💞 Heartfelt Hug"
]

const reactions=[
"makes you smile!",
"fills your heart with joy!",
"gives you energy!",
"sparks laughter!"
]

function startGame(){

const player=document.getElementById("player").value || "Someone"
const num=parseInt(document.getElementById("numHugs").value) || 3
const output=document.getElementById("gameOutput")

output.innerHTML=""

for(let i=1;i<=num;i++){

let person=prompt(`Who should receive hug #${i}?`) || "Bestie"

let hug=hugTypes[Math.floor(Math.random()*hugTypes.length)]
let react=reactions[Math.floor(Math.random()*reactions.length)]

let p=document.createElement("p")
p.innerText=`${player} sends ${hug} to ${person} — ${react}`

output.appendChild(p)
}

}


/* ✅ Typing + Letter Reveal Animation */

const letterText = `Hii Ashraf jaanuu 🥺💗🌸

Happy Hug Day meri jaan Ashraf 🤭🫂💞✨

I am sooo sorry ki main abhi tumhe hug nahi de paa rahi hoon 😔🌙💭  
Lekin Ashraf, I promise 🤞🏻💖 jab bhi hum milenge na...  
main tumhe duniya ka sabse tightest, warmest aur longest hug dungi 🥹🫂💗🌹  
jisme tum bilkul escape hi nahi kar paoge 😋🤍✨  

I love you soooo much Ashraf 🫶🏻🌸💫  
Tum mere favourite insaan ho... meri comfort ho... meri safe place ho 🥺💞  

Abhi ke liye meri jaan...  
iss virtual hug se kaam chala looo 🤗💗🪄🌷`


let index = 0

function startTyping(){

const element=document.getElementById("loveLetter")

element.innerHTML=""
index=0

function type(){
if(index < letterText.length){
element.innerHTML += letterText.charAt(index)
index++
setTimeout(type,35)
}
}

type()

}
