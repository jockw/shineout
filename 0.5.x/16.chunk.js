webpackJsonp([16],{1442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),a=n(119),o=n(118),l=n(78),c=n(765),u=n.n(c),s=n(766),m=n.n(s),h=Object(l.a)(u.a,m.a),d=[{name:"01-base",title:Object(l.a)("基本用法","Base"),component:n(767).default,rawText:n(768)},{name:"02-shape",title:Object(l.a)("形状","Shape"),component:n(769).default,rawText:n(770)},{name:"03-fit",title:Object(l.a)("适应","fit"),component:n(771).default,rawText:n(772)},{name:"04-alt",title:Object(l.a)("备用地址 \n 在 src 获取失败的情况下，自动使用 alt 属性设置的地址","alt"),component:n(773).default,rawText:n(774)},{name:"05-error",title:Object(l.a)("错误处理 \n alt 属性失效或没有 alt 属性时，会显示 title 属性","alt"),component:n(775).default,rawText:n(776)},{name:"06-target",title:Object(l.a)("原始图片","Target"),component:n(777).default,rawText:n(778)},{name:"07-group",title:Object(l.a)("图片组","Group"),component:n(779).default,rawText:n(780)},{name:"08-group",title:Object(l.a)("图片组","Group"),component:n(781).default,rawText:n(782)},{name:"09-lazy",title:Object(l.a)("延迟加载 \n lazy 属性为 true 时，图片会在进入屏幕可视区域后加载","Lazy load"),component:n(783).default,rawText:n(784)}];t.default=Object(a.a)(function(e){return i.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:d}))})},550:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=(n(4),n(48)),o=n.n(a),l=n(179),c=n(117),u={},s=null,m=!1,h=window.innerHeight||document.documentElement.clientHeight;document.addEventListener("scroll",function(){s&&clearTimeout(s),s=setTimeout(function(){m||(m=!0,Object.keys(u).forEach(function(e){var t=u[e],n=t.element,r=t.render,i=n.getBoundingClientRect();i.bottom<0||i.top>h||(delete u[e],r())}),m=!1),s=null},80)},l.a);var d=n(56),f=n(79),p=n.n(f),g=n(172),b=n(564),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={current:e.current,direction:"init"},n.handleScroll=n.handleScroll.bind(n),n.scrollX=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),v(t,[{key:"componentDidMount",value:function(){document.addEventListener("wheel",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("wheel",this.handleScroll)}},{key:"handleClick",value:function(e){var t=this,n=this.props.images.length;this.setState(Object(g.a)(function(t){t.current+=e,t.current<0?t.current=0:t.current>=n?t.current=n-1:t.direction=1===e?"forward":"backward"}),function(){setTimeout(function(){t.setState({direction:"init"})},400)})}},{key:"handleScroll",value:function(e){var t=this;if(e.preventDefault(),0===this.scrollX){var n=Object(b.a)(e);this.scrollX+=n.spinX,this.scrollX<0&&this.handleClick(-1),this.scrollX>0&&this.handleClick(1),this.scrollTimer=setTimeout(function(){t.scrollX=0},1e3)}}},{key:"renderImage",value:function(e,t){var n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth,a=void 0;return"center"!==t&&(a=this.handleClick.bind(this,"left"===t?-1:1)),i.a.createElement("div",{key:t,className:Object(d.k)(t,this.state.direction),onClick:a},i.a.createElement("img",{src:e.src,alt:"",style:{maxWidth:r-400,maxHeight:n-160}}))}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.images,r=t.onClose,a=n[e],o=[];return o.push(i.a.createElement("div",{key:"overlay",className:Object(d.k)("overlay"),onClick:r})),o.push(this.renderImage(a,"center")),n[e-1]&&o.push(this.renderImage(n[e-1],"left")),n[e+1]&&o.push(this.renderImage(n[e+1],"right")),o}}]),t}();y.defaultProps={current:0};var w=y,j=void 0;function k(){document.removeEventListener("keydown",_),p.a.unmountComponentAtNode(j),document.body.removeChild(j),j=null}function _(e){27===e.keyCode&&k()}var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Array.isArray(e)||(e=[e]);var n=j||(j=document.createElement("div"),document.body.appendChild(j),j.className=Object(d.k)("gallery"),j);document.addEventListener("keydown",_),p.a.render(i.a.createElement(w,{onClose:k,current:t,images:e}),n)},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var x=0,I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={status:x},n.bindElement=n.bindElement.bind(n),n.markToRender=n.markToRender.bind(n),n.handleAlt=n.handleAlt.bind(n),n.handleClick=n.handleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),E(t,[{key:"componentDidMount",value:function(){this.props.lazy?this.lazyId=function(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>h){var n=Object(c.b)();return u[n]=e,n}return e.render(),null}({element:this.element,render:this.markToRender}):this.markToRender()}},{key:"componentWillUnmount",value:function(){var e;(e=this.lazyId)&&delete u[e],delete this.image}},{key:"bindElement",value:function(e){this.element=e}},{key:"markToRender",value:function(){var e=this;if(this.props.src){delete this.image;var t=new window.Image;t.onload=function(){return e.setState({status:1})},t.onerror=this.handleAlt,t.src=this.props.src,this.image=t}else this.handleAlt()}},{key:"handleAlt",value:function(){var e=this,t=this.props.alt;if(t){var n=new window.Image;n.onload=function(){return e.setState({status:2})},n.onerror=function(){return e.setState({status:3})},n.src=t}else this.setState({status:3})}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.onClick,r=t.src,i=t.href;n?n():O({thumb:r,src:i||r})}},{key:"renderType",value:function(e){var t=this.props,n=t.title,r=t.fit;return"fill"===r||"fit"===r?i.a.createElement("div",{className:Object(d.k)("inner"),title:n,style:{backgroundImage:'url("'+e+'")'}}):i.a.createElement("div",{className:Object(d.k)("inner"),title:n},i.a.createElement("img",{alt:"",src:e}))}},{key:"renderImage",value:function(){var e=this.state.status,t=this.props,n=t.alt,r=t.placeholder,a=t.src,o=t.title;switch(e){case x:return r?i.a.createElement("div",{className:Object(d.k)("inner")},r):i.a.createElement("div",{className:Object(d.k)("inner","mask")},i.a.createElement("div",null,o," ",i.a.createElement("span",{className:Object(d.k)("ellipsis")})));case 1:return this.renderType(a);case 2:return this.renderType(n);case 3:return i.a.createElement("div",{className:Object(d.k)("inner","mask")},i.a.createElement("div",null,o||"no found"));default:return null}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.height,r=e.style,a=e.shape,l=e.fit,c=e.width,u=e.target,s=o()(Object(d.k)("_",a,l),this.props.className),m=t?"a":"div";return i.a.createElement(m,{ref:this.bindElement,href:"_modal"===u?"javascript:;":t,onClick:t&&"_modal"===u?this.handleClick:void 0,target:u,className:s,style:Object.assign({},r,{width:c,paddingBottom:n})},this.renderImage())}}]),t}();I.defaultProps={lazy:!1,target:"_modal",width:"100%",height:"100%"};var T=I,C=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),C(t,[{key:"handleClick",value:function(e){var t=this.props.children,n=[],i=0;r.Children.toArray(t).forEach(function(t,r){if(t&&t.type===T){e===r&&(i=n.length);var a=t.props,o=a.src,l=a.href;n.push({thumb:o,src:l||o})}}),O(n,i)}},{key:"render",value:function(){var e=this,t=this.props,n=(t.children,t.pile),a=t.style,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","pile","style"]);return i.a.createElement("div",{className:Object(d.k)("group",n&&"pile"),style:a},r.Children.toArray(this.props.children).map(function(t,n){return Object(r.cloneElement)(t,Object.assign({},o,{onClick:e.handleClick.bind(e,n)}))}))}}]),t}();T.Group=P;t.a=T},564:function(e,t,n){"use strict";t.a=function(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=10*t,i=10*n,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(1===e.deltaMode?(r*=40,i*=40):(r*=800,i*=800)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}},765:function(e,t){e.exports="# Image *图片*\n\n图片组件用来处理指定尺寸的图片，实现占位，异常处理，拉伸、填充，延时加载等功能。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| height | string \\| number | '100%' | 图片高度(值为百分比时，对比值为图片宽度) |\n| href | string | 无 | 原始图片地址 |\n| lazy | bool | false | 是否延迟加载 |\n| style | object | 无 | 最外层扩展样式 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | 图片宽度 |\n\n### Image.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| height | string \\| number | '100%' | 单个图片高度(值为百分比时，对比值为图片宽度) |\n| lazy | bool | false | 是否延迟加载 |\n| pile | bool | false | 是否堆叠 |\n| target | string | '_modal' | 可选值为 \\['_modal', '_blank', '_self'] |\n| width | string \\| number | '100%' | 单个图片宽度 |"},766:function(e,t){e.exports="# Image\n\n<example />\n\n## API"},767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement(r.a,{width:200,height:125,src:"http://lobos.github.io/react-ui/0.7/images/image1.jpg"})}},768:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"http://lobos.github.io/react-ui/0.7/images/image1.jpg\" />\n  )\n}\n"},769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement("div",null,a.a.createElement(r.a,{width:150,height:150,shape:"rounded",title:"rounded"}),a.a.createElement(r.a,{width:150,height:150,shape:"circle",title:"circle"}),a.a.createElement(r.a,{width:150,height:150,shape:"thumbnail",title:"thumbnail"}))}},770:function(e,t){e.exports='/**\n * cn - 形状\n * en - Shape\n */\nimport React from \'react\'\nimport { Image } from \'shineout\'\n\nexport default function () {\n  return (\n    <div>\n      <Image width={150} height={150} shape="rounded" title="rounded" />\n      <Image width={150} height={150} shape="circle" title="circle" />\n      <Image width={150} height={150} shape="thumbnail" title="thumbnail" />\n    </div>\n  )\n}\n'},771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement("div",null,["fill","center","fit","stretch"].map(function(e){return a.a.createElement("div",{key:e,style:{width:"25%",padding:4,display:"inline-block"}},a.a.createElement(r.a,{width:"100%",height:"75%",src:"http://lobos.github.io/react-ui/0.7/images/image1.jpg",shape:"thumbnail",fit:e}),a.a.createElement("div",{style:{textAlign:"center",paddingTop:4}},e))}))}},772:function(e,t){e.exports="/**\n * cn - 适应\n * en - fit\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst src = 'http://lobos.github.io/react-ui/0.7/images/image1.jpg'\n\nexport default function () {\n  return (\n    <div>\n      {\n        (['fill', 'center', 'fit', 'stretch']).map(fit => (\n          <div key={fit} style={{ width: '25%', padding: 4, display: 'inline-block' }}>\n            <Image width=\"100%\" height=\"75%\" src={src} shape=\"thumbnail\" fit={fit} />\n            <div style={{ textAlign: 'center', paddingTop: 4 }}>{fit}</div>\n          </div>\n        ))\n      }\n    </div>\n  )\n}\n"},773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement(r.a,{width:200,height:125,src:"notfound",alt:"http://lobos.github.io/react-ui/0.7/images/image1.jpg"})}},774:function(e,t){e.exports="/**\n * cn - 备用地址\n *    -- 在 src 获取失败的情况下，自动使用 alt 属性设置的地址\n * en - alt\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"notfound\" alt=\"http://lobos.github.io/react-ui/0.7/images/image1.jpg\" />\n  )\n}\n"},775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement(r.a,{width:200,height:125,src:"notfound",title:"Image not exist"})}},776:function(e,t){e.exports="/**\n * cn - 错误处理\n *    -- alt 属性失效或没有 alt 属性时，会显示 title 属性\n * en - alt\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image width={200} height={125} src=\"notfound\" title=\"Image not exist\" />\n  )\n}\n"},777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement("div",null,["_modal","_blank","_self"].map(function(e){return a.a.createElement(r.a,{width:80,height:80,key:e,target:e,style:{marginRight:12},shape:"thumbnail",src:"/images/1_s.jpg",href:"/images/1_b.jpg"})}))}},778:function(e,t){e.exports="/**\n * cn - 原始图片\n * en - Target\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      {\n        (['_modal', '_blank', '_self']).map(target => (\n          <Image\n            width={80}\n            height={80}\n            key={target}\n            target={target}\n            style={{ marginRight: 12 }}\n            shape=\"thumbnail\"\n            src=\"/images/1_s.jpg\"\n            href=\"/images/1_b.jpg\"\n          />\n        ))\n      }\n    </div>\n  )\n}\n"},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement(r.a.Group,null,[1,2,3,4].map(function(e){return a.a.createElement(r.a,{key:e,width:80,height:80,shape:"thumbnail",src:"/images/"+e+"_s.jpg",href:"/images/"+e+"_b.jpg"})}))}},780:function(e,t){e.exports="/**\n * cn - 图片组\n * en - Group\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image.Group>\n      {\n        ([1, 2, 3, 4]).map(i => (\n          <Image\n            key={i}\n            width={80}\n            height={80}\n            shape=\"thumbnail\"\n            src={`/images/${i}_s.jpg`}\n            href={`/images/${i}_b.jpg`}\n          />\n        ))\n      }\n    </Image.Group>\n  )\n}\n"},781:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i);t.default=function(){return a.a.createElement(r.a.Group,{pile:!0},[1,2,3,4].map(function(e){return a.a.createElement(r.a,{key:e,width:80,height:80,shape:"thumbnail",src:"/images/"+e+"_s.jpg",href:"/images/"+e+"_b.jpg"})}))}},782:function(e,t){e.exports="/**\n * cn - 图片组\n * en - Group\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nexport default function () {\n  return (\n    <Image.Group pile>\n      {\n        ([1, 2, 3, 4]).map(i => (\n          <Image\n            key={i}\n            width={80}\n            height={80}\n            shape=\"thumbnail\"\n            src={`/images/${i}_s.jpg`}\n            href={`/images/${i}_b.jpg`}\n          />\n        ))\n      }\n    </Image.Group>\n  )\n}\n"},783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(550),i=n(1),a=n.n(i),o=[1,2,3,4].map(function(e){return"/images/"+e+"_b.jpg"});t.default=function(){return a.a.createElement("div",null,o.map(function(e,t){return a.a.createElement(r.a,{lazy:!0,key:t,fit:"fill",height:"66%",src:e})}))}},784:function(e,t){e.exports="/**\n * cn - 延迟加载\n *    -- lazy 属性为 true 时，图片会在进入屏幕可视区域后加载\n * en - Lazy load\n */\nimport React from 'react'\nimport { Image } from 'shineout'\n\nconst data = ([1, 2, 3, 4]).map(i => `/images/${i}_b.jpg`)\n\nexport default function () {\n  return (\n    <div>\n      { data.map((img, i) => <Image lazy key={i} fit=\"fill\" height=\"66%\" src={img} />) }\n    </div>\n  )\n}\n"}});