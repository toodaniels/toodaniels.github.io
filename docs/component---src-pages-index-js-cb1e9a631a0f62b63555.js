"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{1046:function(e,t,r){r.d(t,{w_:function(){return c},Pd:function(){return i}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var r,n=e.attr,i=e.size,s=e.title,c=o(e,["attr","size","title"]),m=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},5186:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(5444),i=r(6125),l=r(3201),o=r(1046),s=function(e){var t=e.social,r=e.user,i={twitter:{Component:l.fWC,url:"https://twitter.com/"+r},github:{Component:l.hJX,url:"https://github.com/"+r},facebook:{Component:l.Am9,url:"https://www.facebook.com/"+r},linkendin:{Component:l.ltd,url:"https://www.linkedin.com/in/"+r}},s=function(e){var t=e.s,r=i[t].Component;return a.createElement(r,null)};return a.createElement(o.Pd.Provider,{value:{className:"media-icon"}},a.createElement("div",null,a.createElement(n.Link,{to:i[t].url},a.createElement(s,{s:t}))))},c=function(){var e,t,l=(0,n.useStaticQuery)("209235977"),o=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/toodaniels.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(8445)}),(null==o?void 0:o.name)&&a.createElement("div",null,a.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",a.createElement("div",{className:"media-container"},Object.keys(c).map((function(e){return a.createElement(s,{key:e,social:e,user:c[e]})})))))}},5183:function(e,t,r){r.r(t),r.d(t,{default:function(){return ve}});var a=r(7294),n=r(3050),i=r(9183),l=r(559);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}var s=["as","viewBox","color","focusable","children","className","__css"],c={path:a.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},a.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),a.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),a.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},m=(0,n.Gp)((function(e,t){var r=e.as,i=e.viewBox,m=e.color,d=void 0===m?"currentColor":m,u=e.focusable,p=void 0!==u&&u,f=e.children,v=e.className,g=e.__css,h=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s),y={ref:t,focusable:p,className:(0,l.cx)("chakra-icon",v),__css:o({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},g)},b=null!=i?i:c.viewBox;if(r&&"string"!=typeof r)return a.createElement(n.m$.svg,o({as:r},y,h));var w=null!=f?f:c.path;return a.createElement(n.m$.svg,o({verticalAlign:"middle",viewBox:b},y,h),w)}));l.Ts&&(m.displayName="Icon");var d=r(9818);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var f=["ratio","children","className"],v=(0,n.Gp)((function(e,t){var r=e.ratio,i=void 0===r?4/3:r,o=e.children,s=e.className,c=p(e,f),m=a.Children.only(o),d=(0,l.cx)("chakra-aspect-ratio",s);return a.createElement(n.m$.div,u({ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,l.XQ)(i,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},c),m)}));l.Ts&&(v.displayName="AspectRatio");var g=["className"],h=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Badge",e),i=(0,n.Lr)(e);i.className;var o=p(i,g);return a.createElement(n.m$.span,u({ref:t,className:(0,l.cx)("chakra-badge",e.className)},o,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));l.Ts&&(h.displayName="Badge");var y=["size","centerContent"],b=["size"],w=(0,n.m$)("div");l.Ts&&(w.displayName="Box");var N=(0,n.Gp)((function(e,t){var r=e.size,n=e.centerContent,i=void 0===n||n,l=p(e,y),o=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.createElement(w,u({ref:t,boxSize:r,__css:u({},o,{flexShrink:0,flexGrow:0})},l))}));l.Ts&&(N.displayName="Square");var x=(0,n.Gp)((function(e,t){var r=e.size,n=p(e,b);return a.createElement(N,u({size:r,ref:t,borderRadius:"9999px"},n))}));l.Ts&&(x.displayName="Circle");var E=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});l.Ts&&(E.displayName="Center");var k=["className"],_=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Code",e),i=(0,n.Lr)(e);i.className;var o=p(i,k);return a.createElement(n.m$.code,u({ref:t,className:(0,l.cx)("chakra-code",e.className)},o,{__css:u({display:"inline-block"},r)}))}));l.Ts&&(_.displayName="Code");var C=["className","centerContent"],T=(0,n.Gp)((function(e,t){var r=(0,n.Lr)(e),i=r.className,o=r.centerContent,s=p(r,C),c=(0,n.mq)("Container",e);return a.createElement(n.m$.div,u({ref:t,className:(0,l.cx)("chakra-container",i)},s,{__css:u({},c,o&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));l.Ts&&(T.displayName="Container");var G=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],W=["className","orientation","__css"],S=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Divider",e),i=r.borderLeftWidth,o=r.borderBottomWidth,s=r.borderTopWidth,c=r.borderRightWidth,m=r.borderWidth,d=r.borderStyle,f=r.borderColor,v=p(r,G),g=(0,n.Lr)(e),h=g.className,y=g.orientation,b=void 0===y?"horizontal":y,w=g.__css,N=p(g,W),x={vertical:{borderLeftWidth:i||c||m||"1px",height:"100%"},horizontal:{borderBottomWidth:o||s||m||"1px",width:"100%"}};return a.createElement(n.m$.hr,u({ref:t,"aria-orientation":b},N,{__css:u({},v,{border:"0",borderColor:f,borderStyle:d},x[b],w),className:(0,l.cx)("chakra-divider",h)}))}));l.Ts&&(S.displayName="Divider");var j=["direction","align","justify","wrap","basis","grow","shrink"],L=(0,n.Gp)((function(e,t){var r=e.direction,i=e.align,l=e.justify,o=e.wrap,s=e.basis,c=e.grow,m=e.shrink,d=p(e,j),f={display:"flex",flexDirection:r,alignItems:i,justifyContent:l,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:m};return a.createElement(n.m$.div,u({ref:t,__css:f},d))}));l.Ts&&(L.displayName="Flex");var O=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],$=(0,n.Gp)((function(e,t){var r=e.area,i=e.templateAreas,l=e.gap,o=e.rowGap,s=e.columnGap,c=e.column,m=e.row,d=e.autoFlow,f=e.autoRows,v=e.templateRows,g=e.autoColumns,h=e.templateColumns,y=p(e,O),b={display:"grid",gridArea:r,gridTemplateAreas:i,gridGap:l,gridRowGap:o,gridColumnGap:s,gridAutoColumns:g,gridColumn:c,gridRow:m,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:v,gridTemplateColumns:h};return a.createElement(n.m$.div,u({ref:t,__css:b},y))}));l.Ts&&($.displayName="Grid");var B=["className"],A=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Heading",e),i=(0,n.Lr)(e);i.className;var o=p(i,B);return a.createElement(n.m$.h2,u({ref:t,className:(0,l.cx)("chakra-heading",e.className)},o,{__css:r}))}));l.Ts&&(A.displayName="Heading");var P=["className"],z=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Kbd",e),i=(0,n.Lr)(e),o=i.className,s=p(i,P);return a.createElement(n.m$.kbd,u({ref:t,className:(0,l.cx)("chakra-kbd",o)},s,{__css:u({fontFamily:"mono"},r)}))}));l.Ts&&(z.displayName="Kbd");var I=["className","isExternal"],R=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Link",e),i=(0,n.Lr)(e),o=i.className,s=i.isExternal,c=p(i,I);return a.createElement(n.m$.a,u({target:s?"_blank":void 0,rel:s?"noopener noreferrer":void 0,ref:t,className:(0,l.cx)("chakra-link",o)},c,{__css:r}))}));l.Ts&&(R.displayName="Link");var q=["children","styleType","stylePosition","spacing"],D=["as"],F=["as"],M=(0,n.Gp)((function(e,t){var r,i=(0,n.jC)("List",e),l=(0,n.Lr)(e),o=l.children,s=l.styleType,c=void 0===s?"none":s,m=l.stylePosition,f=l.spacing,v=p(l,q),g=(0,d.WR)(o),h=f?((r={})["& > *:not(style) ~ *:not(style)"]={mt:f},r):{};return a.createElement(n.Fo,{value:i},a.createElement(n.m$.ul,u({ref:t,listStyleType:c,listStylePosition:m,role:"list",__css:u({},i.container,h)},v),g))}));l.Ts&&(M.displayName="List");var X=(0,n.Gp)((function(e,t){e.as;var r=p(e,D);return a.createElement(M,u({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));l.Ts&&(X.displayName="OrderedList");var Q=(0,n.Gp)((function(e,t){e.as;var r=p(e,F);return a.createElement(M,u({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));l.Ts&&(Q.displayName="UnorderedList");var Z=(0,n.Gp)((function(e,t){var r=(0,n.yK)();return a.createElement(n.m$.li,u({ref:t},e,{__css:r.item}))}));l.Ts&&(Z.displayName="ListItem");var H=(0,n.Gp)((function(e,t){var r=(0,n.yK)();return a.createElement(m,u({ref:t,role:"presentation"},e,{__css:r.icon}))}));l.Ts&&(H.displayName="ListIcon");var K=["columns","spacingX","spacingY","spacing","minChildWidth"],Y=(0,n.Gp)((function(e,t){var r,n,i=e.columns,o=e.spacingX,s=e.spacingY,c=e.spacing,m=e.minChildWidth,d=p(e,K),f=m?(n=m,(0,l.XQ)(n,(function(e){return(0,l.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,l.hj)(t)?t+"px":t)+", 1fr))");var t}))):(r=i,(0,l.XQ)(r,(function(e){return(0,l.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return a.createElement($,u({ref:t,gap:c,columnGap:o,rowGap:s,templateColumns:f},d))}));l.Ts&&(Y.displayName="SimpleGrid");var J=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});l.Ts&&(J.displayName="Spacer");var U="& > *:not(style) ~ *:not(style)";var V=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return a.createElement(n.m$.div,u({className:"chakra-stack__item"},e,{__css:u({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},te=(0,n.Gp)((function(e,t){var r,i=e.isInline,o=e.direction,s=e.align,c=e.justify,m=e.spacing,f=void 0===m?"0.5rem":m,v=e.wrap,g=e.children,h=e.divider,y=e.className,b=e.shouldWrapChildren,w=p(e,V),N=i?"row":null!=o?o:"column",x=a.useMemo((function(){return function(e){var t,r=e.spacing,a=e.direction,n={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(t={flexDirection:a})[U]=(0,l.XQ)(a,(function(e){return n[e]})),t}({direction:N,spacing:f})}),[N,f]),E=a.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(r,(function(e){return a[e]}))}}({spacing:f,direction:N})}),[f,N]),k=!!h,_=!b&&!k,C=(0,d.WR)(g),T=_?C:C.map((function(e,t){var r=void 0!==e.key?e.key:t,n=t+1===C.length,i=b?a.createElement(ee,{key:r},e):e;if(!k)return i;var l=n?null:a.cloneElement(h,{__css:E});return a.createElement(a.Fragment,{key:r},i,l)})),G=(0,l.cx)("chakra-stack",y);return a.createElement(n.m$.div,u({ref:t,display:"flex",alignItems:s,justifyContent:c,flexDirection:x.flexDirection,flexWrap:v,className:G,__css:k?{}:(r={},r[U]=x[U],r)},w),T)}));l.Ts&&(te.displayName="Stack");var re=(0,n.Gp)((function(e,t){return a.createElement(te,u({align:"center"},e,{direction:"row",ref:t}))}));l.Ts&&(re.displayName="HStack");var ae=(0,n.Gp)((function(e,t){return a.createElement(te,u({align:"center"},e,{direction:"column",ref:t}))}));l.Ts&&(ae.displayName="VStack");var ne=["className","align","decoration","casing"],ie=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Text",e),i=(0,n.Lr)(e);i.className,i.align,i.decoration,i.casing;var o=p(i,ne),s=(0,l.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.createElement(n.m$.p,u({ref:t,className:(0,l.cx)("chakra-text",e.className)},s,o,{__css:r}))}));l.Ts&&(ie.displayName="Text");var le=["spacing","children","justify","direction","align","className","shouldWrapChildren"],oe=["className"],se=(0,n.Gp)((function(e,t){var r=e.spacing,o=void 0===r?"0.5rem":r,s=e.children,c=e.justify,m=e.direction,d=e.align,f=e.className,v=e.shouldWrapChildren,g=p(e,le),h=a.useMemo((function(){return{"--chakra-wrap-spacing":function(e){return(0,l.XQ)(o,(function(t){return(0,i.fr)("space",t)(e)}))},"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:d,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}}),[o,c,d,m]),y=v?a.Children.map(s,(function(e,t){return a.createElement(ce,{key:t},e)})):s;return a.createElement(n.m$.div,u({ref:t,className:(0,l.cx)("chakra-wrap",f)},g),a.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:h},y))}));l.Ts&&(se.displayName="Wrap");var ce=(0,n.Gp)((function(e,t){var r=e.className,i=p(e,oe);return a.createElement(n.m$.li,u({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r)},i))}));l.Ts&&(ce.displayName="WrapItem");var me=r(5186),de=r(7198),ue=r(3751),pe=r(5444),fe=function(e){var t=e.title,r=e.company,n=e.description,i=e.dates,l=e.technologies;return a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(pe.Link,{to:"/",itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("p",null,r),a.createElement("small",null,i)),a.createElement("section",null,a.createElement("p",{itemProp:"description"},n)),a.createElement("section",null,a.createElement(te,{direction:"row"},l.map((function(e,t){return a.createElement(h,{variant:"outline",color:"blue.700",key:e+t},e)})))))},ve=function(e){var t,r,n=e.data,i=e.location,l=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=null===(r=n.site.siteMetadata)||void 0===r?void 0:r.experience;return 0===o.length?a.createElement(de.Z,{location:i,title:l},a.createElement(ue.Z,{title:"All posts"}),a.createElement(me.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(de.Z,{location:i,title:l},a.createElement(ue.Z,{title:"All posts"}),a.createElement(me.Z,null),a.createElement(te,{spacing:8},o.map((function(e){var t=e.title,r=e.company,n=e.dates,i=e.description,l=e.technologies;return a.createElement(fe,{title:t,company:r,description:i,dates:n,technologies:l})}))))}},8445:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/0d66ebdbfdc22b4c410346081bf0a5ff/d24ee/toodaniels.jpg","srcSet":"/static/0d66ebdbfdc22b4c410346081bf0a5ff/d24ee/toodaniels.jpg 50w,\\n/static/0d66ebdbfdc22b4c410346081bf0a5ff/64618/toodaniels.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/0d66ebdbfdc22b4c410346081bf0a5ff/d4bf4/toodaniels.avif 50w,\\n/static/0d66ebdbfdc22b4c410346081bf0a5ff/ee81f/toodaniels.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/0d66ebdbfdc22b4c410346081bf0a5ff/3faea/toodaniels.webp 50w,\\n/static/0d66ebdbfdc22b4c410346081bf0a5ff/6a679/toodaniels.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-cb1e9a631a0f62b63555.js.map