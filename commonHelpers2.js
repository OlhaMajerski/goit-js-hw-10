import{c as a}from"./assets/alert-icon-7f42f61d.js";import{i as c}from"./assets/vendor-77e16229.js";const i="/goit-js-hw-10/assets/ok-286069d5.svg",f=document.querySelector(".form");f.addEventListener("submit",u);function u(o){o.preventDefault();const r=o.target.delay,s=r.value,l=o.target.state.value,t=new Promise((e,n)=>{setTimeout(()=>{l==="fulfilled"?e(s):n(s)},s)});t.then(e=>{c.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topLeft",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:i})}).catch(e=>{c.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topLeft",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:a,iconColor:"#fff"})}),r.value="",console.log(t)}
//# sourceMappingURL=commonHelpers2.js.map