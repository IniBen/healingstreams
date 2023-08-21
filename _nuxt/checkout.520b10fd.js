import{_ as f,r as n,c as a,a as e,b as l,w as c,o as m,h as g,n as i,i as h,g as d,v as u,j as x}from"./entry.69586d52.js";const w={data(){return{selectedMethod:"cc",billingCycles:"monthly",termsApproval:!1,cardInfo:{name:void 0,number:void 0,expiryYear:void 0,expiryMonth:void 0,cvc:void 0}}}},k={class:"border border-blue-500 border-4 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3"},C={class:"lg:col-span-2"},I={class:"border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5"},M=e("div",null,[e("h3",{size:"sm",weight:"medium"}," Payment method "),e("text",{size:"xs",class:"text-muted-400"},"Select a payment method")],-1),V={class:"ms-auto"},z=e("span",null,"Cancel",-1),S=e("label",{class:"ms-4 text-sm font-medium"},"PayPal",-1),U={key:0,class:"flex items-center justify-between gap-4 p-8 pt-4"},P=e("div",{class:"max-w-xs"},[e("h3",{size:"md",weight:"medium",class:"mb-2"}," Pay with PayPal "),e("p",{size:"sm",class:"text-muted-400"},' After clicking on "start subscription", you will be redirected to PayPal website to complete your purchase securely. ')],-1),j={class:"grow"},Y={class:"border-muted-200 dark:border-muted-700 border-t"},D=e("label",{class:"ms-4 text-sm font-medium"},"Credit Card",-1),A={key:0,class:"grid grid-cols-2 gap-4 p-8 pt-4"},B={class:"grid grid-cols-12 gap-4"},N={class:"col-span-12"},T={class:"col-span-12"},E={class:"col-span-12"},O={class:"grid gap-4 sm:grid-cols-3"},R=e("option",{value:""},"Month",-1),F=e("option",{value:"01"},"01",-1),J=e("option",{value:"02"},"02",-1),q=e("option",{value:"03"},"03",-1),G=e("option",{value:"04"},"04",-1),H=e("option",{value:"05"},"05",-1),K=e("option",{value:"06"},"06",-1),L=e("option",{value:"07"},"07",-1),Q=e("option",{value:"08"},"08",-1),W=e("option",{value:"09"},"09",-1),X=e("option",{value:"10"},"10",-1),Z=e("option",{value:"11"},"11",-1),$=e("option",{value:"12"},"12",-1),ee=[R,F,J,q,G,H,K,L,Q,W,X,Z,$],te=e("option",{value:""},"Year",-1),oe=e("option",{value:"23"},"23",-1),se=e("option",{value:"24"},"24",-1),le=e("option",{value:"25"},"25",-1),ne=e("option",{value:"26"},"26",-1),de=e("option",{value:"27"},"27",-1),ie=e("option",{value:"28"},"28",-1),re=e("option",{value:"29"},"29",-1),ae=e("option",{value:"30"},"30",-1),ce=[te,oe,se,le,ne,de,ie,re,ae],me={class:"mt-6"},ue=e("div",{class:"border-muted-200 dark:border-muted-700 border-b px-8 py-5"},[e("h3",{size:"sm",weight:"medium"}," Order Summary "),e("text",{size:"xs",class:"text-muted-400"},"Check your order details")],-1),pe={class:"px-8 pt-5"},_e={class:"mb-6"},he=e("label",{class:"nui-label pb-3 text-[0.825rem]"},"Billing cycle",-1),xe={class:"flex items-center gap-6"},ve=e("div",{class:"flex items-center"},[e("h3",{size:"sm",weight:"medium",lead:"none"}," Fasterio pro plan "),e("div",{class:"ms-auto"},[e("text",{size:"sm",class:"text-muted-800 dark:text-muted-100"},[e("span",{class:"font-semibold"},"$29.99"),e("span",{class:"text-muted-500 dark:text-muted-400 text-xs"},"/mo")])])],-1),be=e("text",{class:"text-muted-500 dark:text-muted-400 mt-2 text-xs"},"Save 20% with annual billing ",-1),ye=e("div",{class:"mt-4 px-8 pb-5"},[e("div",{class:"flex items-end justify-between"},[e("h3",{size:"sm",weight:"medium",lead:"none"}," Taxes "),e("text",{size:"sm",class:"text-muted-800 dark:text-muted-100"},[e("span",{class:"font-semibold"},"$2.99")])])],-1),fe=e("div",{class:"border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5"},[e("div",{class:"flex items-end justify-between"},[e("h3",{size:"sm",weight:"medium",lead:"none"}," To pay today (USD) "),e("text",{size:"md",class:"text-muted-800 dark:text-muted-100"},[e("span",{class:"font-semibold"},"$0.00")])]),e("text",{class:"text-muted-500 dark:text-muted-400 mt-2 text-xs"},"Starting from next month: $29.99/mo. ")],-1),ge={class:"my-4 flex items-center px-8"},we=e("div",{class:"flex flex-col px-8 pt-4"},[e("button",{color:"primary",class:"!h-12 w-full"},"Start Subscription")],-1);function ke(v,o,Ce,Ie,t,Me){const p=n("Icon"),r=n("card"),b=n("DemoCreditCardReal"),_=n("radio"),y=n("checkbox");return m(),a("form",k,[e("div",C,[l(r,null,{default:c(()=>[e("div",I,[M,e("div",V,[e("button",{onClick:o[0]||(o[0]=g(s=>v.$router.back(),["prevent"]))},[l(p,{name:"lucide:arrow-left",class:"h-3 w-3"}),z])])]),e("div",null,[e("div",{role:"button",class:i(["flex cursor-pointer items-center px-8 py-5",t.selectedMethod==="paypal"?"bg-muted-50 dark:bg-muted-900/60":""]),onClick:o[1]||(o[1]=s=>t.selectedMethod="paypal")},[e("div",{class:i(["dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2 transition-colors",t.selectedMethod==="paypal"?"bg-primary-600 ring-primary-600":"ring-muted-400"])},null,2),S],2),t.selectedMethod==="paypal"?(m(),a("div",U,[P,e("div",j,[l(r,{shape:"curved",elevated:"",class:"mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"},{default:c(()=>[l(p,{name:"logos:paypal",class:"h-12 w-12"})]),_:1})])])):h("",!0)]),e("div",Y,[e("div",{role:"button",class:i(["flex cursor-pointer items-center px-8 py-5",t.selectedMethod==="cc"?"bg-muted-50 dark:bg-muted-900/60":""]),onClick:o[2]||(o[2]=s=>t.selectedMethod="cc")},[e("div",{class:i(["dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2",t.selectedMethod==="cc"?"bg-primary-600 ring-primary-600":"ring-muted-400"])},null,2),D],2),t.selectedMethod==="cc"?(m(),a("div",A,[e("div",null,[e("form",null,[e("div",B,[e("div",N,[d(e("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>t.cardInfo.name=s),label:"Name on card",placeholder:"ex: John Doe"},null,512),[[u,t.cardInfo.name]])]),e("div",T,[d(e("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>t.cardInfo.number=s),label:"Card number",placeholder:"ex: 4242 4242 4242 4242"},null,512),[[u,t.cardInfo.number]])]),e("div",E,[e("div",O,[e("div",null,[d(e("select",{name:"",id:"","onUpdate:modelValue":o[5]||(o[5]=s=>t.cardInfo.expiryMonth=s),label:"Exp. month"},ee,512),[[x,t.cardInfo.expiryMonth]])]),e("div",null,[d(e("select",{"onUpdate:modelValue":o[6]||(o[6]=s=>t.cardInfo.expiryYear=s),label:"Exp. year"},ce,512),[[x,t.cardInfo.expiryYear]])]),e("div",null,[d(e("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>t.cardInfo.cvc=s),label:"CVC",placeholder:"ex: 239"},null,512),[[u,t.cardInfo.cvc]])])])])])])]),e("div",me,[l(b,{name:t.cardInfo.name,number:t.cardInfo.number,"expiry-month":t.cardInfo.expiryMonth,"expiry-year":t.cardInfo.expiryYear,cvc:t.cardInfo.cvc},null,8,["name","number","expiry-month","expiry-year","cvc"])])])):h("",!0)])]),_:1})]),e("div",null,[l(r,{class:"pb-6"},{default:c(()=>[ue,e("div",pe,[e("div",_e,[he,e("div",xe,[l(_,{id:"demo-cycle-1",modelValue:t.billingCycles,"onUpdate:modelValue":o[8]||(o[8]=s=>t.billingCycles=s),name:"monthly_billing",label:"Monthly",value:"monthly",color:"primary",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"]),l(_,{id:"demo-cycle-2",modelValue:t.billingCycles,"onUpdate:modelValue":o[9]||(o[9]=s=>t.billingCycles=s),name:"yearly_billing",label:"Yearly",value:"yearly",color:"primary",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"])])]),ve,be]),ye,fe,e("div",ge,[l(y,{modelValue:t.termsApproval,"onUpdate:modelValue":o[10]||(o[10]=s=>t.termsApproval=s),color:"primary",shape:"full",label:"I agree to the Terms Of Service",classes:{label:"relative top-0.5 text-xs"}},null,8,["modelValue"])]),we]),_:1})])])}const ze=f(w,[["render",ke]]);export{ze as default};
