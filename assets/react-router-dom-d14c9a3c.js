import{r,a as p}from"./react-99067adc.js";import{R as F}from"./react-router-e1e7eade.js";import{c as R}from"./@remix-run-3dbd2488.js";/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b="startTransition",l=p[b];function y(e){let{basename:S,children:f,future:h,window:T}=e,s=r.useRef();s.current==null&&(s.current=R({window:T,v5Compat:!0}));let t=s.current,[n,i]=r.useState({action:t.action,location:t.location}),{v7_startTransition:o}=h||{},a=r.useCallback(c=>{o&&l?l(()=>i(c)):i(c)},[i,o]);return r.useLayoutEffect(()=>t.listen(a),[t,a]),r.createElement(F,{basename:S,children:f,location:n.location,navigationType:n.action,navigator:t})}var u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{y as B};
