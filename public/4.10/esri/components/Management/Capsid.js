// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["../Component"],function(k){return function(f){function a(b){if(d[b])return d[b].exports;var c=d[b]={i:b,l:!1,exports:{}};return f[b].call(c.exports,c,c.exports,a),c.l=!0,c.exports}var d={};return a.m=f,a.c=d,a.d=function(b,c,e){a.o(b,c)||Object.defineProperty(b,c,{enumerable:!0,get:e})},a.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"});Object.defineProperty(b,"__esModule",{value:!0})},a.t=function(b,c){if((1&c&&(b=
a(b)),8&c)||4&c&&"object"==typeof b&&b&&b.__esModule)return b;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:b}),2&c&&"string"!=typeof b)for(var g in b)a.d(e,g,function(c){return b[c]}.bind(null,g));return e},a.n=function(b){var c=b&&b.__esModule?function(){return b.default}:function(){return b};return a.d(c,"a",c),c},a.o=function(b,c){return Object.prototype.hasOwnProperty.call(b,c)},a.p="",a(a.s=295)}({0:function(f,a,d){function b(b,a){function h(){this.constructor=
b}c(b,a);b.prototype=null===a?Object.create(a):(h.prototype=a.prototype,new h)}d.d(a,"b",function(){return b});d.d(a,"a",function(){return e});var c=function(b,a){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])})(b,a)},e=function(){return(e=Object.assign||function(b){for(var a,c=1,e=arguments.length;c<e;c++)for(var d in a=arguments[c])Object.prototype.hasOwnProperty.call(a,d)&&(b[d]=a[d]);return b}).apply(this,
arguments)}},1:function(f,a){f.exports=k},14:function(f,a,d){function b(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];return function(a){return b.reduceRight(function(b,a){return a(b)},a)}}d.d(a,"a",function(){return b})},295:function(f,a,d){d.r(a);var b=d(0),c=d(14),e=d(1);f=function(a){function d(){return null!==a&&a.apply(this,arguments)||this}return b.b(d,a),d.prototype.componentDidConnect=function(){var a=this.props,b=a.enhancer,d=a.reducer,f=a.state,a=a.onChange||function(){};
this.store=(b?Object(c.a)(b,Object(e.shunt)(a)):Object(e.shunt)(a))(e.createStore)(d,f);this.props.onStoreCreate&&this.props.onStoreCreate(this.store)},d.prototype.componentWillReceiveProps=function(a){this.props.state!==a.state&&this.store.dispatch({type:"@@shunt/SETSTATE",payload:a.state})},d.prototype.render=function(a){return this.props.render.bind(this)(a)},d}(e.Component);a.default=f}})});