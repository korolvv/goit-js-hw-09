!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),a=null;t.addEventListener("click",(function(t){a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor=t}),1e3),t.target.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e9648b0a.js.map