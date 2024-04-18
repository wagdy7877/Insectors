
// start date in shap
date=document.querySelector(".date_shap span");
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
date.innerHTML = ` ${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
// end date in shap

// end date in shap
    var feat = document.querySelector(".feature");
    window.onscroll = function() {
      if (window.scrollY >= 200) {
        feat.style.display = "block";
        feat.classList.add("animate__animated", "animate__fadeInUp");
      } 
    };
// end date in shap


