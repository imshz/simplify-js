/*
 Copyright (c) 2012, Vladimir Agafonkin
 Simplify.js is a high-performance polyline simplification library.
 http://mourner.github.com/simplify-js/
*/
(function(a,b){function c(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function d(a,b,c){var d=b.x,e=b.y,f=c.x-d,g=c.y-e,h;if(f!==0||g!==0)h=((a.x-d)*f+(a.y-e)*g)/(f*f+g*g),h>1?(d=c.x,e=c.y):h>0&&(d+=f*h,e+=g*h);return f=a.x-d,g=a.y-e,f*f+g*g}function e(a,b){var d,e=a.length,f,g=a[0],h=[g];for(d=1;d<e;d++)f=a[d],c(f,g)>b&&(h.push(f),g=f);return g!==f&&h.push(f),h}function f(a,c){var e=a.length,f=typeof Uint8Array!=b+""?Uint8Array:Array,g=new f(e),h=0,i=e-1,j,k,l,m,n=[],o=[],p=[];g[h]=g[i]=1;while(i){k=0;for(j=h+1;j<i;j++)l=d(a[j],a[h],a[i]),l>k&&(m=j,k=l);k>c&&(g[m]=1,n.push(h),o.push(m),n.push(m),o.push(i)),h=n.pop(),i=o.pop()}for(j=0;j<e;j++)g[j]&&p.push(a[j]);return p}"use strict";var g=typeof exports!=b+""?exports:a;g.simplify=function(a,c,d){var g=c!==b?c*c:1;return d||(a=e(a,g)),a=f(a,g),a}})(this)