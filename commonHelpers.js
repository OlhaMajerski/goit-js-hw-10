import{c as h}from"./assets/alert-icon-7f42f61d.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");e.disabled=!0;e.classList.add("disabled");let l,c;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<Date.now()?(y.show({title:"Error",message:"Please choose a date in the future",titleColor:"#ffffff",titleSize:"16",messageColor:"#ffffff",class:"resolved-promise",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"}),e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled"),l=t[0])}};p(a,v);e.addEventListener("click",()=>{e.disabled=!0,e.classList.add("disabled"),a.disabled=!0,c=setInterval(()=>{const t=Date.now(),o=l-t;if(o<=0){clearInterval(c),a.disabled=!1,i(0,0,0,0);return}const{days:n,hours:s,minutes:d,seconds:r}=E(o);i(n,s,d,r)},1e3)});function E(t){const r=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),b=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:f,minutes:m,seconds:b}}function i(t,o,n,s){S.textContent=String(t).padStart(2,"0"),g.textContent=String(o).padStart(2,"0"),C.textContent=String(n).padStart(2,"0"),k.textContent=String(s).padStart(2,"0")}const u=document.createElement("style");u.innerHTML=`
  .disabled {
    background-color: #cfcfcf;
    color: #989898;
    cursor: not-allowed;
  }
  button[data-start]:not(.disabled) {
    background-color: #4e75ff;
    color: #fff;
    cursor: pointer;
  }
`;document.head.appendChild(u);
//# sourceMappingURL=commonHelpers.js.map
