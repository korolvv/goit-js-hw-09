const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let a=null;t.addEventListener("click",(t=>{a=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3),t.target.setAttribute("disabled","disabled")})),e.addEventListener("click",(()=>{clearInterval(a),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b4b30bc4.js.map