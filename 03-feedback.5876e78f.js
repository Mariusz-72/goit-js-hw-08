!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,a,o,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=a;return i=a=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),s?y(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function O(){var e=p();if(w(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,o-(e-c)):n}(e))}function T(e){return f=void 0,m&&i?y(e):(i=a=void 0,u)}function h(){var e=p(),n=w(e);if(i=arguments,a=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,o=(d="maxWait"in n)?v(S(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=a=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:i,maxWait:t,trailing:a})};var j="feedback-form-state",w=document.querySelector(".feedback-form"),O=w.querySelector('input[name="email"]'),T=w.querySelector('textarea[name="message"]'),h={email:"",message:""};var x=localStorage.getItem(j);x&&(h=JSON.parse(x),O.value=h.email,T.value=h.message);var N=e(t)((function(e){localStorage.setItem(j,JSON.stringify(e))}),500);w.addEventListener("input",(function(e){h[e.target.name]=e.target.value,N()})),window.addEventListener("load",(function(){var e;(e=localStorage.getItem(j))&&(h=JSON.parse(e),O.value=h.email,T.value=h.message)}));w.addEventListener("submit",(function(e){if(eventSent.preventDefault(),h.email&&h.message||(alert('required fields: "email"  and  "message" '),0)){var t=eventSent.currentTarget.elements,n=t.email,i=t.message,r={email:n.value,message:i.value};console.log(r),localStorage.removeItem(j),h={email:"",message:""},w.reset()}}))}();
//# sourceMappingURL=03-feedback.5876e78f.js.map
