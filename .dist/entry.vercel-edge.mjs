import{s as v,m as h,r as w,a as g,b as E}from"./assets/entry.ssr-31952c23.mjs";import{getNotFound as R}from"./@qwik-city-not-found-paths.js";import{isStaticPath as y}from"./@qwik-city-static-paths.js";import{_,a as C,v as S,q as b}from"./assets/@qwik-city-plan-43be2807.mjs";import"@builder.io/partytown/integration";import"react";import"react-dom/server";import"react/jsx-runtime";import"react-webcam";import"drizzle-orm/mysql-core";import"drizzle-orm/mysql2";import"mysql2/promise";import"zod";import"@auth/core";import"@auth/core/providers/discord";import"@auth/drizzle-adapter";var x="x-vercel-ip-country",z="x-real-ip";function H(n){const s={_deserializeData:_,_serializeData:C,_verifySerializable:S};n.manifest&&v(n.manifest);async function i(t){try{const e=new URL(t.url);if(y(t.method,e))return new Response(null,{headers:{"x-middleware-next":"1"}});const m=(()=>globalThis.process)(),a=await w({mode:"server",locale:void 0,url:e,request:t,env:{get(r){return m.env[r]}},getWritableStream:(r,o,p,c)=>{const{readable:d,writable:u}=new TransformStream,f=new Response(d,{status:r,headers:h(o,p)});return c(f),u},platform:{},getClientConn:()=>({ip:t.headers.get(z)??void 0,country:t.headers.get(x)??void 0})},n,s);if(a){a.completion.then(o=>{o&&console.error(o)});const r=await a.response;if(r)return r}const l=R(e.pathname);return new Response(l,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":e.pathname}})}catch(e){return console.error(e),new Response(String(e||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"vercel-edge"}})}}return i}const Y=H({render:g,qwikCityPlan:b,manifest:E});export{Y as default};
