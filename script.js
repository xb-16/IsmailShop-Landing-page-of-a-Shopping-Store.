let classeslis = document.querySelectorAll(".classes button");
let imgs = Array.from(document.querySelectorAll(".our-work .row .gallery"));

let i = 1;
function alli(){
    var hh = document.querySelector(".our-work .row");
    if(i === 1){
            hh.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 gallery bkhr">
                 <div class="boxe mb-3 bg-white" data-work="بخور">
                    <img class="img-fluid" src="media/bkhr/bkhr3.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery bkhr">
                 <div class="boxe mb-3 bg-white" data-work="بخور">
                    <img class="img-fluid" src="media/bkhr/bkhr4.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery farwa">
                 <div class="boxe mb-3 bg-white" data-work="سلهام">
                    <img class="img-fluid" src="media/farwa/farwa3.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery itr">
                 <div class="boxe mb-3 bg-white" data-work="عطر">
                    <img class="img-fluid" src="media/itr/itr3.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery itr">
                 <div class="boxe mb-3 bg-white" data-work="عطر">
                    <img class="img-fluid" src="media/itr/itr4.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery itr">
                 <div class="boxe mb-3 bg-white" data-work="عطر">
                    <img class="img-fluid" src="media/itr/itr5.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery itr">
                 <div class="boxe mb-3 bg-white" data-work="عطر">
                    <img class="img-fluid" src="media/itr/itr6.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery itr">
                 <div class="boxe mb-3 bg-white" data-work="عطر">
                    <img class="img-fluid" src="media/itr/itr7.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery nal">
                 <div class="boxe mb-3 bg-white" data-work="نعل عربي">
                    <img class="img-fluid" src="media/naal/nal6.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery nal">
                 <div class="boxe mb-3 bg-white" data-work="نعل عربي">
                    <img class="img-fluid" src="media/naal/nal8.webp" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery nal">
                 <div class="boxe mb-3 bg-white" data-work="نعل عربي">
                    <img class="img-fluid" src="media/naal/nal9.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery nal">
                 <div class="boxe mb-3 bg-white" data-work="نعل عربي">
                    <img class="img-fluid" src="media/naal/nal8.webp" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery nal">
                 <div class="boxe mb-3 bg-white" data-work="حذاء صحي">
                    <img class="img-fluid" src="media/naal/nal10.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery kamis">
                 <div class="boxe mb-3 bg-white" data-work="ثوب أبيض خليجي">
                    <img class="img-fluid" src="media/kamis/kamis1.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery kamis">
                 <div class="boxe mb-3 bg-white" data-work="ثوب أبيض خليجي">
                    <img class="img-fluid" src="media/kamis/kamis4.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery kamis">
                 <div class="boxe mb-3 bg-white" data-work="ثوب أبيض خليجي">
                    <img class="img-fluid" src="media/kamis/kamis6.jpg" alt="img">
                </div> 
            </div> 
            
            <div class="col-lg-3 col-md-4 col-sm-6 gallery kamis">
                 <div class="boxe mb-3 bg-white" data-work="ثوب أبيض خليجي">
                    <img class="img-fluid" src="media/kamis/kamis7.jpg" alt="img">
                </div> 
            </div>`;
            
            i = i + 1;

            imgs = Array.from(document.querySelectorAll(".our-work .row .gallery"));
    }

};

let more = document.querySelector(".more"); 
more.addEventListener("click",alli);


classeslis.forEach((button) => {
    button.addEventListener("click",removeActive);
    button.addEventListener("click",manageImgs);
});

function removeActive(){
    classeslis.forEach((button) => {
        button.classList.remove("rounded-pill", "pe-3", "text-uppercase", "active");
        this.classList.add("rounded-pill", "pe-3", "text-uppercase", "active");
    });
}

function manageImgs(){
    imgs.forEach((imgs) => {imgs.style.display = "none";})
    document.querySelectorAll(this.dataset.cat).forEach((el)=> {el.style.display = "block";});
};

let allBtn = document.querySelector(".allbtn");
allBtn.addEventListener("click",showAll);
function showAll(){
    imgs.forEach((imgs) =>{
        imgs.style.display = "block";
    });
};

/* Start Preloader */

let preloader = document.querySelector("#preloader");
window.addEventListener("load",function(){
    preloader.style.display = "none";
})


/* End Preloader */

/* */

/* */