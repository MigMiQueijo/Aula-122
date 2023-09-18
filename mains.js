var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()
var content = ""
function start() {
    recognition.start()
    console.log("alguma mensagem")
}
recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
}
function setup() {
    canvas = createCanvas(731, 422)
}
function draw(){
    console.log(content)
    stroke("black")
    if (content == "rectangle." ||content == "Rectangle."){
        rectanguler()
    }
     if (content == "circle." ||content == "Circle."){ 
        circler()
    }
    if (content == "clear." || content == "Clear."){
        background("white")
    }
}
function circler(){
    r = Math.floor(Math.random()* 255)
    g = Math.floor(Math.random()* 255)
    b = Math.floor(Math.random()* 255)
    stroke("rgb(" + r + "," + g + "," + b + ")")
    fill("rgb(" + r + "," + g + "," + b + ")")
  x = Math.floor(Math.random()* 731)
  y = Math.floor(Math.random()* 422)
  radius = Math.floor(Math.random()*100)
  circle(x, y, radius)

}

function rectanguler(){
    r = Math.floor(Math.random()* 255)
    g = Math.floor(Math.random()* 255)
    b = Math.floor(Math.random()* 255)
    stroke("rgb(" + r + "," + g + "," + b + ")")
    fill("rgb(" + r + "," + g + "," + b + ")")
     x = Math.floor(Math.random()* 731)
     y = Math.floor(Math.random()* 422)
     width = Math.floor(Math.random()*200)
     height = Math.floor(Math.random()*100)
     rect(x, y, width, height)
    }
