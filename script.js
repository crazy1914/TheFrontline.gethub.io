
var slideImg = document.getElementById("slideImg")
var slideImg2 = document.getElementById("slideImg-2")
let Germany = document.querySelector(".germans");
let Soviets = document.querySelector(".soviet");
const form = document.querySelector("form");



var images = new Array("images/homeBageSlide3f.jpg",
                       "images/homeBageSlide1.jpg",
                       "images/homeBageSlide2.jpg",
                       "images/homeBageSlide8.jpg",
                       "images/homeBageSlide5.jpg",
                       "images/homeBageSlide7.jpg",
                       "images/homeBageSlide4.jpg",
                       "images/homeBageSlide6.jpg",
                       "images/homeBageSlide9.jpg",
                       "images/homeBageSlide10.jpg")
var len = images.length;
var i=0;


var images2 = new Array("images/image1.jpg",
                       "images/image2.jpg",
                       "images/image3.jpg",
                       "images/image4.jpg",
                       "images/image5.jpg",
                       "images/image6.jpg",
                       "images/image7.jpg",
                       "images/image8.jpg",
                       "images/image9.jpg",
                     )
var len2 = images2.length;
var x=0;
//Auto slider

function slider(){
   if(i > len-1){
       i = 0;
   }
   slideImg.src = images[i];
   i++;
   setTimeout(slider,5000);
}



function slider2(){
   if(x > len2-1){
       x = 0;
   }
   slideImg2.src = images2[x];
   x++;
   setTimeout(slider2,5000);
}

// change bage

function goToLink(link){
    location.href = link.value;
}

// send email

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "moazr69@gmail.com",
        Password : "E0B117679D44B2341DBEEE110EE6CEB75BB8",
        To : 'moazr69@gmail.com',
        From : "moazr69@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Messge Send Succesfully!")
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
     sendEmail();
})

// hied and show

function hiedGermany(){
    Germany.style.display="none";
    Soviets.style.display="block";
}
function hideSoviet() {
    Soviets.style.display="none";
    Germany.style.display="block";
}

function showAll(){
    Soviets.style.display="block";
    Germany.style.display="block";
}







