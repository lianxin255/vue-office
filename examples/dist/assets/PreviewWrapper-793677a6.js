import{r as u,p as C,_ as I,w as N,q as n,a as d,c as k,u as t,g as i,f as r,s as g,t as S,e as x,m as y,l as V,v as A,x as R,b as T}from"./index-fa6302b8.js";function $(e){const p=u("url"),a=u(e),o=u(e),l=u(typeof e=="string"?e.endsWith(".xls"):!1),c=u([]);function h(_){l.value=_.name.endsWith("xls");let f=new FileReader;return f.onload=s=>{let v=s.target.result;o.value=v},f.readAsArrayBuffer(_),!1}return{type:p,inputSrc:a,src:o,xls:l,fileList:c,beforeUpload:h}}let w=u(!1),B;function q(e){B=C.loading(e,0),w.value=!0}function E(){w.value===!0&&(B(),w.value=!1)}const F={loading:w,showLoading:q,hideLoading:E};function j(){return location.href.includes("test")}const z=e=>(A("data-v-0bd825a5"),e=e(),R(),e),D={class:"preview-wrapper"},G={key:0,class:"operate-area"},H=z(()=>T("div",{class:"preview-wrapper-main"},null,-1)),J={__name:"PreviewWrapper",props:{accept:String,placeholder:String,defaultSrc:String},setup(e){const p=e,{type:a,inputSrc:o,src:l,xls:c,fileList:h,beforeUpload:_}=$(p.defaultSrc);return N(l,()=>{F.showLoading()},{immediate:!0}),(f,s)=>{const v=n("a-radio-button"),L=n("a-radio-group"),U=n("a-input"),b=n("a-button"),W=n("upload-outlined"),P=n("a-upload");return d(),k("div",D,[t(j)()?y("",!0):(d(),k("div",G,[i(L,{value:t(a),"onUpdate:value":s[0]||(s[0]=m=>S(a)?a.value=m:null),"button-style":"solid"},{default:r(()=>[i(v,{value:"url"},{default:r(()=>[g("远程文件地址")]),_:1}),i(v,{value:"upload"},{default:r(()=>[g("上传本地文件")]),_:1})]),_:1},8,["value"]),t(a)==="url"?(d(),x(U,{key:0,value:t(o),"onUpdate:value":s[1]||(s[1]=m=>S(o)?o.value=m:null),placeholder:p.placeholder,style:{width:"600px","margin-left":"10px"}},null,8,["value","placeholder"])):y("",!0),t(a)==="url"?(d(),x(b,{key:1,type:"primary",style:{"margin-left":"10px"},onClick:s[2]||(s[2]=m=>{l.value=t(o),c.value=t(o).endsWith("xls")})},{default:r(()=>[g(" 预览 ")]),_:1})):y("",!0),t(a)!=="url"?(d(),x(P,{key:2,accept:p.accept,action:"",beforeUpload:t(_),"file-list":[]},{default:r(()=>[i(b,{style:{"margin-left":"10px"}},{default:r(()=>[i(W),g(" 选择文件 ")]),_:1})]),_:1},8,["accept","beforeUpload"])):y("",!0)])),V(f.$slots,"default",{src:t(l),xls:t(c)},void 0,!0),H])}}},M=I(J,[["__scopeId","data-v-0bd825a5"]]);export{M as P,F as u};
