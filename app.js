let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let sec_dot = document.querySelector(".sec_dot");
let min_dot = document.querySelector(".min_dot");
let hr_dot = document.querySelector(".hr_dot");

let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

setInterval(()=>{
  let h =new Date().getHours();
  if (h>12) {
     h =h-12;
  }
  
  let m =new Date().getMinutes();
  let s =new Date().getSeconds();

  hh.style.strokeDashoffset = 510 - ( 510 * h ) / 12;
  mm.style.strokeDashoffset = 630 - ( 630 * m ) / 60;
  ss.style.strokeDashoffset = 760 - ( 760 * s ) / 60;

  sec_dot.style.transform = `rotatez(${ s * 6 }deg)`;
  min_dot.style.transform = `rotatez(${ m * 6 }deg)`;
  hr_dot.style.transform = `rotatez(${ h * 30 }deg)`;

  sc.style.transform = `rotatez(${s * 6 }deg)`;
  mn.style.transform = `rotatez(${m * 6 }deg)`;
  hr.style.transform = `rotatez(${h * 30 }deg)`;
})


