/* empty css                      */import{f as h,i as y}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector("#datetime-picker"),s=document.querySelector("button[data-start]"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),L=document.querySelector("[data-seconds]");s.disabled=!0;s.classList.add("disabled");let u,i;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){o[0]<Date.now()?(y.show({title:"Error",message:"Please choose a date in the future",titleColor:"#ffffff",titleSize:"16",messageColor:"#ffffff",class:"resolved-promise",backgroundColor:"#b51b1b",position:"topRight",theme:"dark"}),s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"),u=o[0])}};h(c,v);s.addEventListener("click",()=>{s.disabled=!0,s.classList.add("disabled"),c.disabled=!0,i=setInterval(()=>{const o=Date.now(),r=u-o;if(r<=0){clearInterval(i),c.disabled=!1,l(0,0,0,0);return}const{days:a,hours:n,minutes:e,seconds:t}=C(r);l(a,n,e,t)},1e3)});function C(o){const t=Math.floor(o/864e5),d=Math.floor(o%864e5/36e5),m=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:d,minutes:m,seconds:p}}function l(o,r,a,n){b.textContent=String(o).padStart(2,"0"),g.textContent=String(r).padStart(2,"0"),S.textContent=String(a).padStart(2,"0"),L.textContent=String(n).padStart(2,"0")}const f=document.createElement("style");f.innerHTML=`
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
`;document.head.appendChild(f);
//# sourceMappingURL=commonHelpers.js.map
