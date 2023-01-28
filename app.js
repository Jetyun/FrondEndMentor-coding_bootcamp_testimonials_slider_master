const nextBtn= document.querySelector("#primary_nextBtn")
const prevBtn= document.querySelector("#primary_prevBtn")
const profPic= document.querySelector("#primary_img")
const explanation= document.querySelector("#primary_explanation")
const profName= document.querySelector("#primary_name")
const profTitle= document.querySelector("#primary_title")

let profile=1

nextBtn.addEventListener("click", ()=>{
   
    if(profile===1){
        profPic.src="images/image-john.jpg";
        explanation.innerHTML='“ If you want to lay the best foundation possible I&#39;d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. <img src="images/pattern-quotes.svg" alt="background img" class="absolute top-0 -z-20 left-28 min-[930px]:left-24 min-[930px]:w-24 min-[930px]:-top-10" height="50" width="50">”';
        profName.innerHTML="John Tarkpor";
        profTitle.innerHTML="Junior Front-end Developer";
    }
    if(profile===2){ 
        profPic.src="images/image-tanya.jpg";
        explanation.innerHTML='“ I&#39;ve been interested in coding for a while but never taken the jump, until now. I couldn&#39;t recommend this course enough. I&#39;m now in the job of my dreams and so excited about the future.<img src="images/pattern-quotes.svg" alt="background img" class="absolute top-0 -z-20 left-28 min-[930px]:left-24 min-[930px]:w-24 min-[930px]:-top-10" height="50" width="50">”';
        profName.innerHTML="Tanya Sinclair";
        profTitle.innerHTML="UX Engineer";
    }
    profile = (profile % 2) + 1
})

prevBtn.addEventListener("click", ()=>{
   
    if(profile===1){
        profPic.src="images/image-john.jpg";
        explanation.innerHTML='“ If you want to lay the best foundation possible I&#39;d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. <img src="images/pattern-quotes.svg" alt="background img" class="absolute top-0 -z-20 left-28 min-[930px]:left-24 min-[930px]:w-24 min-[930px]:-top-10" height="50" width="50">”';
        profName.innerHTML="John Tarkpor";
        profTitle.innerHTML="Junior Front-end Developer";
    }
    if(profile===2){ 
        profPic.src="images/image-tanya.jpg";
        explanation.innerHTML='“ I&#39;ve been interested in coding for a while but never taken the jump, until now. I couldn&#39;t recommend this course enough. I&#39;m now in the job of my dreams and so excited about the future.<img src="images/pattern-quotes.svg" alt="background img" class="absolute top-0 -z-20 left-28 min-[930px]:left-24 min-[930px]:w-24 min-[930px]:-top-10" height="50" width="50">”';
        profName.innerHTML="Tanya Sinclair";
        profTitle.innerHTML="UX Engineer";
    }
    profile = (profile % 2) + 1
})

document.addEventListener("keydown", (event)=>{
    if(event.key==="ArrowRight"){
        nextBtn.click()
    }else if(event.key==="ArrowLeft"){
        prevBtn.click()
    }

    })

