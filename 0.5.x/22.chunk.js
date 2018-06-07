webpackJsonp([22],{1302:function(e,n){e.exports="# Alert *提示框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | any | 无 | 内容，文字或react组件 |\n| className | string | 无 | 扩展className |\n| icon | ReactElement \\| boolean | 无 | 为true时，根据type属性显示状态图标。如果需要显示自定义图标，传入ReactElement。 |\n| iconSize | number | 14 | icon 的尺寸 |\n| onClose | func \\| boolean | 无 | 当 onClose 为空时，不显示关闭。如果需要关闭又不需要处理回调，设置为true即可 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | *warning* |  4 选 1，\\[*success*, *info*, *warning*, *danger(error)*] |"},1303:function(e,n){e.exports="# Alert\n\n<example />"},1304:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(535),o=t(1),c=t.n(o);n.default=function(){return c.a.createElement(r.a,null,c.a.createElement("h3",null,"Title"),"Some content.")}},1305:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Alert } from 'shineout'\n\nexport default function () {\n  return (\n    <Alert>\n      <h3>Title</h3>\n      Some content.\n    </Alert>\n  )\n}\n"},1306:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(535),o=t(1),c=t.n(o);n.default=function(){return c.a.createElement(o.Fragment,null,c.a.createElement(r.a,{type:"success"},"Success Type."),c.a.createElement(r.a,{type:"info"},"Info Type."),c.a.createElement(r.a,{type:"warning"},"Warning Type."),c.a.createElement(r.a,{type:"danger"},"Danger Type."))}},1307:function(e,n){e.exports='/**\n * cn - 类型 type\n * en - type\n */\nimport React, { Fragment } from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Alert type="success">Success Type.</Alert>\n      <Alert type="info">Info Type.</Alert>\n      <Alert type="warning">Warning Type.</Alert>\n      <Alert type="danger">Danger Type.</Alert>\n    </Fragment>\n  )\n}\n'},1308:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(535),o=t(1),c=t.n(o),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={placeholder:""},t.handleClose=t.handleClose.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),a(n,[{key:"handleClose",value:function(){this.setState({placeholder:"Alert was dismissed."})}},{key:"render",value:function(){var e=this.state.placeholder;return c.a.createElement(o.Fragment,null,c.a.createElement(r.a,{onClose:!0},"Alert onClose=true"),c.a.createElement(r.a,{onClose:this.handleClose},"Alert onClose=function"),e&&c.a.createElement(r.a,{type:"info"},e))}}]),n}();n.default=s},1309:function(e,n){e.exports="/**\n * cn - 关闭 onClose\n * en - onClose\n */\nimport React, { Fragment, PureComponent } from 'react'\nimport { Alert } from 'shineout'\n\nexport default class extends PureComponent {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      placeholder: '',\n    }\n\n    this.handleClose = this.handleClose.bind(this)\n  }\n\n  handleClose() {\n    this.setState({\n      placeholder: 'Alert was dismissed.',\n    })\n  }\n\n  render() {\n    const { placeholder } = this.state\n    return (\n      <Fragment>\n        <Alert onClose>\n          Alert onClose=true\n        </Alert>\n\n        <Alert onClose={this.handleClose}>\n          Alert onClose=function\n        </Alert>\n\n        {\n          placeholder && <Alert type=\"info\">{placeholder}</Alert>\n        }\n      </Fragment>\n    )\n  }\n}\n"},1310:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(535),o=t(1),c=t.n(o);n.default=function(){return c.a.createElement(o.Fragment,null,c.a.createElement(r.a,{type:"success",icon:!0},"Success Type."),c.a.createElement(r.a,{type:"info",icon:!0},"Info Type."),c.a.createElement(r.a,{type:"warning",icon:!0},"Warning Type."),c.a.createElement(r.a,{type:"danger",icon:!0},"Danger Type."),c.a.createElement(r.a,{icon:!0,iconSize:24},c.a.createElement("h3",null,"Set iconSize"),"iconSize=24"))}},1311:function(e,n){e.exports='/**\n * cn - 图标 icon\n * en - with icon\n */\nimport React, { Fragment } from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Alert type="success" icon>Success Type.</Alert>\n      <Alert type="info" icon>Info Type.</Alert>\n      <Alert type="warning" icon>Warning Type.</Alert>\n      <Alert type="danger" icon>Danger Type.</Alert>\n\n      <Alert icon iconSize={24}>\n        <h3>Set iconSize</h3>\n        iconSize=24\n      </Alert>\n    </Fragment>\n  )\n}\n'},1456:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t.n(r),c=t(119),a=t(118),s=t(78),i=t(1302),l=t.n(i),u=t(1303),p=t.n(u),f=Object(s.a)(l.a,p.a),m=[{name:"1-base",title:Object(s.a)("基本用法","Base"),component:t(1304).default,rawText:t(1305)},{name:"2-type",title:Object(s.a)("类型 type","type"),component:t(1306).default,rawText:t(1307)},{name:"3-close",title:Object(s.a)("关闭 onClose","onClose"),component:t(1308).default,rawText:t(1309)},{name:"4-icon",title:Object(s.a)("图标 icon","with icon"),component:t(1310).default,rawText:t(1311)}];n.default=Object(c.a)(function(e){return o.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:f,examples:m}))})},521:function(e,n,t){"use strict";var r=t(1),o=t.n(r);function c(e){return o.a.createElement("svg",{viewBox:"0 0 1024 1024"},e.map(function(e,n){return o.a.createElement("path",{key:n,d:e})}))}var a=["M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z"];n.a={AngleLeft:c(["M304.905 561.68c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.123l-402.521 402.521c-8.992 8.993-20.776 13.488-32.562 13.488z","M707.426 964.201c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.522c-17.984-17.983-17.984-47.139 0-65.122 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.983 17.984 47.139 0 65.122-8.991 8.992-20.776 13.488-32.561 13.488z"]),AngleRight:c(["M728.76 561.68c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.521c-17.984-17.984-17.984-47.14 0-65.123 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.984 17.984 47.14 0 65.122-8.991 8.993-20.776 13.488-32.561 13.488z","M326.238 964.202c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.122l-402.521 402.522c-8.992 8.992-20.776 13.488-32.562 13.488z"]),AngleDoubleLeft:c(["M219.5 511.3l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L86.5 463.5c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z","M601.5 511.5l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L468.5 463.7c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z"]),AngleDoubleRight:c(["M802.5 511.3L465.8 174.6c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L556.9 937.7c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z","M420.5 511.5L83.8 174.8c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L174.9 937.9c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z"]),Calendar:c(["M888 128H768v-28c0-19.9-16.1-36-36-36s-36 16.1-36 36v28H328v-28c0-19.9-16.1-36-36-36s-36 16.1-36 36v28H136c-39.8 0-72 32.2-72 72v688c0 39.8 32.2 72 72 72h752c39.8 0 72-32.3 72-72V200c0-39.8-32.2-72-72-72z m-752 72h120v20c0 19.9 16.1 36 36 36s36-16.1 36-36v-20h368v20c0 19.9 16.1 36 36 36s36-16.1 36-36v-20h120v112H136V200z m752 688H136V384h752v504zM288 512h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM288 706h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]),Clock:c(["M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m311.1 823.1c-40.4 40.4-87.5 72.2-139.9 94.3C629 940.4 571.4 952 512 952s-117-11.6-171.2-34.5c-52.4-22.2-99.4-53.9-139.9-94.3-40.4-40.4-72.2-87.5-94.3-139.9C83.6 629 72 571.4 72 512s11.6-117 34.5-171.2c22.2-52.4 53.9-99.4 94.3-139.9 40.4-40.4 87.5-72.2 139.9-94.3C395 83.6 452.6 72 512 72s117 11.6 171.2 34.5c52.4 22.2 99.4 53.9 139.9 94.3 40.4 40.4 72.2 87.5 94.3 139.9C940.4 395 952 452.6 952 512s-11.6 117-34.5 171.2c-22.2 52.4-53.9 99.5-94.4 139.9zM733 504H548V264c0-19.9-16.1-36-36-36s-36 16.1-36 36v240c0 39.8 32.2 72 72 72h185c19.9 0 36-16.1 36-36s-16.1-36-36-36z"]),Close:c(["M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"]),CloseCircle:c(["M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m205.3 666.9c14 14.1 14 36.9-0.1 50.9-7 7-16.2 10.5-25.4 10.5s-18.5-3.5-25.5-10.6L512 563 357.7 717.7c-7 7.1-16.3 10.6-25.5 10.6s-18.4-3.5-25.4-10.5c-14.1-14-14.1-36.8-0.1-50.9L461.2 512 306.7 357.1c-14-14.1-14-36.9 0.1-50.9s36.9-14 50.9 0.1L512 461l154.3-154.8c14-14.1 36.8-14.1 50.9-0.1 14.1 14 14.1 36.8 0.1 50.9L562.8 512l154.5 154.9z"]),Danger:c(a),Error:c(a),Info:c(["M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z"]),Success:c(["M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"]),Warning:c(["M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z"]),Confirm:c(["M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z"])}},525:function(e,n,t){"use strict";n.a=function(e){return e&&e[0].toUpperCase()+e.slice(1)},n.b=function(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,t){return"\\"===e.charAt(0)?e.slice(1):null===n[t]||void 0===n[t]?"":n[t]});if("function"==typeof e){var t=e(n);return t===n&&"object"===(void 0===t?"undefined":r(t))&&(t=Object.assign({},n)),t}return""};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},535:function(e,n,t){"use strict";var r=t(1),o=t.n(r),c=t(4),a=(t.n(c),t(172)),s=t(525),i=t(49),l=t(56),u=t(521),p=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var f=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={dismiss:0},t.bindRef=t.bindRef.bind(t),t.dismiss=t.dismiss.bind(t),t.handleClose=t.handleClose.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),p(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(this.state.dismiss>0)){var n=this.props.duration;n>0?this.setState({dismiss:1},function(){setTimeout(e.dismiss,n)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,n=this.props,t=n.type,r=n.iconSize;if("boolean"==typeof e&&(e=u.a[Object(s.a)(t)]),!e)return null;var c=r>0?{width:r,height:r}:void 0;return o.a.createElement("div",{className:Object(l.a)("icon"),style:c},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var n=this.props,t=n.children,r=n.className,c=n.type,s=n.iconSize,i=n.onClose,p=this.renderIcon(),f=this.props.style,m=Object(l.a)("_",c,1===e&&"dismissed",i&&"with-close",p&&"with-icon");return r&&(m+=" "+r),p&&s>0&&(f=Object(a.a)(f,function(e){e.paddingLeft=s+25})),o.a.createElement("div",{ref:this.bindRef,className:m,style:f},i&&o.a.createElement("a",{href:"javascript:;",className:Object(l.a)("close"),onClick:this.handleClose},u.a.Close),p,t)}}]),n}();f.defaultProps=Object.assign({},i.a,{duration:216,iconSize:0,type:"warning"}),n.a=f}});