(function(){"use strict";var e={7584:function(e,t,a){var s=a(144),r=a(7356),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{style:{background:e.$vuetify.theme.themes.light.background}},[a("TheNavBar"),a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("router-view")],1)],1),a("v-snackbar",{attrs:{timeout:e.snackTimeout,color:e.snackColor,top:""},model:{value:e.showSnackMsg,callback:function(t){e.showSnackMsg=t},expression:"showSnackMsg"}},[e._v(" "+e._s(e.snackMsg)+" "),a("v-btn",{attrs:{text:""},nativeOn:{click:function(t){e.showSnackMsg=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-dialog",{attrs:{"max-width":"400"},model:{value:e.showWipDisclaimer,callback:function(t){e.showWipDisclaimer=t},expression:"showWipDisclaimer"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-icon",{staticStyle:{"padding-right":"5px"}},[e._v("mdi-information-outline")]),e._v(" Website Under Construction ")],1),a("v-card-text",[e._v(" The website is still being developed. Some areas are offline and visual design may change. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{nativeOn:{click:function(t){e.showWipDisclaimer=!1}}},[e._v("Close")])],1)],1)],1),a("TheFooter")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"primaryDark"}},[a("TheAppBarTitle"),a("v-spacer"),a("TheAppBarLinks")],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-btn",{attrs:{href:"mailto:stensig04@gmail.com",icon:""}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-email")])],1),a("v-btn",{attrs:{href:"https://github.com/denDAY04",target:"_blank",icon:""}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-github")])],1),a("v-btn",{attrs:{href:"https://www.linkedin.com/in/andreas-stensig-jensen-46784972/",target:"_blank",icon:""}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-linkedin")])],1),a("v-btn",{attrs:{href:"https://twitter.com/denDAY04",target:"_blank",icon:""}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-twitter")])],1)],1)},d=[],u={name:"TheAppBarLinks"},h=u,m=a(1001),p=a(3453),v=a.n(p),g=a(2144),f=a(4806),b=(0,m.Z)(h,c,d,!1,null,"735afd1e",null),y=b.exports;v()(b,{VBtn:g.Z,VIcon:f.Z});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"title"},[a("router-link",{staticClass:"nav-bar-link white--text",attrs:{to:{name:"Home"},"aria-label":"Home",title:"Home"}},[e._v(" stensig.net ")])],1)])},w=[],_={name:"TheAppBarTitle"},C=_,x=(0,m.Z)(C,k,w,!1,null,"0cd11349",null),Z=x.exports,E={name:"TheAppBar",components:{TheAppBarTitle:Z,TheAppBarLinks:y}},j=E,T=a(136),V=a(1111),S=(0,m.Z)(j,o,l,!1,null,"79dfda69",null),I=S.exports;v()(S,{VAppBar:T.Z,VSpacer:V.Z});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{app:"",color:"blue-grey darken-2"}},[a("v-spacer"),a("span",{staticClass:"white--text"},[e._v(" stensig.net © "+e._s(e.year)+" Andreas Stensig ")]),a("v-spacer")],1)},D=[],A={name:"TheFooter",data(){return{year:(new Date).getFullYear()}}},M=A,$=a(9979),B=(0,m.Z)(M,P,D,!1,null,"6a63be5a",null),L=B.exports;v()(B,{VFooter:$.Z,VSpacer:V.Z});var O={name:"App",components:{TheFooter:L,TheNavBar:I},methods:{displaySnackMsg(e){switch(this.snackMsg=e.msg,e.type){case"W":this.snackColor="warning";break;case"E":this.snackColor="error";break;default:this.snackColor="info"}this.showSnackMsg=!0}},mounted(){window.eventBus.$on("message",(e=>this.displaySnackMsg(e)))},data(){return{showWipDisclaimer:!1,showFeatureConstruction:!1,showSnackMsg:!1,snackMsg:"",snackColor:"",snackTimeout:3e3}}},F=O,Q=a(2502),R=a(3481),U=a(8520),H=a(7346),W=a(1576),N=a(7115),z=a(6664),J=(0,m.Z)(F,n,i,!1,null,null,null),Y=J.exports;v()(J,{VApp:Q.Z,VBtn:g.Z,VCard:R.Z,VCardActions:U.h7,VCardText:U.ZB,VCardTitle:U.EB,VContainer:H.Z,VContent:W.Z,VDialog:N.Z,VIcon:f.Z,VSnackbar:z.Z,VSpacer:V.Z});var q=a(1871);s.Z.use(q.Z);const K={primary:"#5c6bc0",primaryLight:"#8d98f2",primaryDark:"#23408e",secondary:"#00acc1",secondaryLight:"#5ddef4",secondaryDark:"#007c91",background:"#e0e0e0",backgroundLight:"#f5f3f3",backgroundDark:"#aeaeae",error:"#f44336",warning:"#ffc107",info:"#03a9f4",success:"#8bc34a"};var G=new q.Z({theme:{light:!0,themes:{light:K}}}),X=a(8345),ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticStyle:{height:"100%","min-height":"100%","max-height":"100%"}},[a("v-spacer"),a("v-col",{attrs:{cols:"12",lg:"8",md:"12"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center text-uppercase primary"},[a("h1",{staticClass:"area-title"},[e._v("Experience")])])],1),a("v-row",[a("v-switch",{staticClass:"mr-10",attrs:{label:"Employment","prepend-icon":"mdi-account-tie-outline"},on:{change:e.updateTimeline},model:{value:e.showEMP,callback:function(t){e.showEMP=t},expression:"showEMP"}}),a("v-switch",{staticClass:"mr-10",attrs:{label:"Education","prepend-icon":"mdi-school-outline"},on:{change:e.updateTimeline},model:{value:e.showEDU,callback:function(t){e.showEDU=t},expression:"showEDU"}}),a("v-switch",{staticClass:"mr-10",attrs:{label:"Certificate courses","prepend-icon":"mdi-certificate-outline"},on:{change:e.updateTimeline},model:{value:e.showCC,callback:function(t){e.showCC=t},expression:"showCC"}})],1),a("v-timeline",e._l(e.experiences,(function(t){return a("v-timeline-item",{key:t.date+t.title,attrs:{color:"primaryLight",large:"","fill-dot":""}},[a("span",{staticClass:"headline",attrs:{slot:"opposite"},slot:"opposite"},[e._v(" "+e._s(e._f("dateFormat")(t.date))+" ")]),a("span",{class:"v-icon notranslate mdi "+e.getTypeIcon(t.type),attrs:{slot:"icon",title:e.getTypeDescription(t.type)},slot:"icon"}),a("ExperienceItem",{attrs:{item:t}})],1)})),1)],1),a("v-spacer")],1)},te=[],ae=a(9669),se=a.n(ae),re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"py-5"},[a("h3",{staticClass:"title"},[e._v(e._s(e.item.title))]),a("div",{staticClass:"subtitle-2"},[a("a",{staticClass:"link font-italic",attrs:{href:e.item.companyLink,target:"_blank"}},[e._v(" "+e._s(e.item.company)+" ")])]),a("hr"),a("div",{staticClass:"py-2"},[e._v(" "+e._s(e.item.description)+" ")]),e.hasAttachments?a("div",{staticClass:"overline"},[a("span",[e._v("attachments:")]),e._l(e.item.attachments,(function(t){return a("a",{key:t.label,staticClass:"secondaryDark--text ml-2",attrs:{title:"Open in new window"},on:{click:function(a){return e.openAttachment(t)}}},[e._v(" "+e._s(t.label)+" ")])}))],2):e._e()])])},ne=[],ie={name:"ExperienceItem",props:{item:{}},computed:{hasAttachments(){return void 0!==this.item.attachments&&this.item.attachments.length>0}},methods:{openAttachment(e){window.open(e.href,"_blank")}}},oe=ie,le=(0,m.Z)(oe,re,ne,!1,null,"22c66120",null),ce=le.exports,de={name:"ExperiencePage",components:{ExperienceItem:ce},metaInfo:{title:"Experience"},data(){return{experiences:[],fetchedExp:[],showEDU:!0,showEMP:!0,showCC:!0}},async created(){const e=this;se().get("data/experiences.json").then((t=>{e.fetchedExp=t.data.sort(((e,t)=>e.date>t.date?-1:e.date<t.date?1:0)),e.updateTimeline()})).catch((e=>{window.eventBus.$emit("message",{type:"E",msg:`Error: ${e}`})}))},methods:{getTypeIcon(e){switch(e){default:return"";case"EDU":return"mdi-school-outline";case"EMP":return"mdi-account-tie-outline";case"CC":return"mdi-certificate-outline"}},getTypeDescription(e){switch(e){default:return"No type";case"EDU":return"Education";case"EMP":return"Employment";case"CC":return"Certificate course"}},updateTimeline(){const e=this;e.experiences=[],e.fetchedExp.forEach((t=>{("EMP"===t.type&&e.showEMP||"EDU"===t.type&&e.showEDU||"CC"===t.type&&e.showCC)&&e.experiences.push(t)}))}}},ue=de,he=a(1714),me=a(9383),pe=a(7202),ve=a(3760),ge=a(1619),fe=(0,m.Z)(ue,ee,te,!1,null,"a03f69b2",null),be=fe.exports;v()(fe,{VCard:R.Z,VCardTitle:U.EB,VCol:he.Z,VRow:me.Z,VSpacer:V.Z,VSwitch:pe.Z,VTimeline:ve.Z,VTimelineItem:ge.Z});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[a("v-avatar",{attrs:{size:"180"}},[a("v-img",{attrs:{src:"img/asj.jpg"}})],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v("Andreas Stensig")]),a("v-list-item-subtitle",[e._v(" MSc in Engineering ("),a("ins",{attrs:{title:"Computer Science and Engineering"}},[e._v("CSE")]),e._v(") ")]),a("v-list-item-subtitle",[e._v(" Bachelor of Engineering ("),a("ins",{attrs:{title:"Information Technology"}},[e._v("IT")]),e._v(") ")])],1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{raised:"",color:"backgroundLight"}},[a("v-card-title",[e._v("Welcome to STENSIG.NET")]),a("v-card-subtitle",[a("i",[e._v("Portfolio of a Software Engineer")])]),a("v-card-text",[a("p",[e._v(" On this website you can explore my professional experiences and the significant projects I have worked on. Simply click the banners below. ")]),a("p",[e._v(" You can also read more "),a("a",{staticClass:"secondaryDark--text",on:{click:function(t){return e.gotoAboutMe()}}},[e._v("about me")]),e._v(". ")])])],1)],1),a("v-col",{attrs:{lg:"8",md:"12",cols:"12"}},[a("v-carousel",{style:e.border,attrs:{height:"400",cycle:"","show-arrows":e.showArrows}},e._l(e.pages,(function(t,s){return a("v-carousel-item",{key:s},[a("v-img",{attrs:{height:"100%",src:e.backgroundImage(t)}},[a("v-row",{staticClass:"fill-height clickable",attrs:{align:"center",justify:"center"},on:{click:function(a){return e.navigateTo(t)}}},[a("div",{staticClass:"main-panel-title justify-center text-uppercase",style:e.fontSize},[e._v(" "+e._s(t.title)+" ")])])],1)],1)})),1)],1)],1)},ke=[],we={name:"HomePage",metaInfo:{title:"Home"},data(){return{showArrows:!1,pages:[{title:"Experience",target:"ExpPage",background:"books.jpg"},{title:"Projects",target:"ProjectsPage",background:"code.jpg"}]}},methods:{backgroundImage(e){return`img/${e.background}`},navigateTo(e){this.$router.push({name:e.target})},gotoAboutMe(){this.$router.push({name:"AboutPage"})}},computed:{fontSize(){return this.$vuetify.breakpoint.xs?"font-size: 2em":this.$vuetify.breakpoint.lg?"font-size: 3em":"font-size: 4em"},border(){return`border: 3px solid ${this.$vuetify.theme.themes.light.primary}; border-radius: 10px`}}},_e=we,Ce=a(3313),xe=a(4085),Ze=a(747),Ee=a(6791),je=a(5342),Te=a(4485),Ve=(0,m.Z)(_e,ye,ke,!1,null,"6bd8bc6a",null),Se=Ve.exports;v()(Ve,{VAvatar:Ce.Z,VCard:R.Z,VCardSubtitle:U.Qq,VCardText:U.ZB,VCardTitle:U.EB,VCarousel:xe.Z,VCarouselItem:Ze.Z,VCol:he.Z,VImg:Ee.Z,VListItem:je.Z,VListItemContent:Te.km,VListItemSubtitle:Te.oZ,VListItemTitle:Te.V9,VRow:me.Z});var Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticStyle:{height:"100%","min-height":"100%","max-height":"100%"}},[a("v-spacer"),a("v-col",{attrs:{cols:"12",lg:"8",md:"12"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center text-uppercase primary"},[a("h1",{staticClass:"area-title"},[e._v("Projects")])])],1),a("v-card-text",[a("v-combobox",{staticClass:"mb-n10",attrs:{items:e.skillsList,label:"Filter projects by skills",multiple:"",clearable:"",chips:"","deletable-chips":"",color:"primary","item-color":"secondaryDark"},on:{change:e.filterSkills},model:{value:e.skillsQuery,callback:function(t){e.skillsQuery=t},expression:"skillsQuery"}})],1),a("v-card-text",[e._l(e.displayProjects,(function(e){return a("ProjectItem",{key:e.title,attrs:{item:e}})})),this.noProjects?a("div",{staticClass:"mt-12 text-center text-uppercase headline",staticStyle:{height:"100%","min-height":"100%","max-height":"100%"}},[e._v(" No projects found ")]):e._e()],2)],1),a("v-spacer")],1)},Pe=[],De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"my-10",attrs:{raised:"",color:"backgroundLight"}},[a("v-card-title",{staticClass:"primary white--text"},[e._v(" "+e._s(e.item.title)+" ")]),a("v-card-subtitle",{staticClass:"mt-2 overline"},[e._v(" "+e._s(e.item.affiliate)+" project ")]),a("v-card-text",[a("div",[e._v(" "+e._s(e.item.description)+" ")]),e.hasLinks?a("div",{staticClass:"mt-3"},e._l(e.item.links,(function(t){return a("a",{key:t.label,staticClass:"link mr-4 text-uppercase secondaryDark--text",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.label)+" ")])})),0):e._e()]),a("v-divider"),a("v-card-text",[a("v-icon",{staticClass:"mr-2",attrs:{title:"Role"}},[e._v("mdi-shield-account")]),a("span",[e._v(e._s(e.roles))]),a("v-icon",{staticClass:"mx-2",attrs:{title:"Year"}},[e._v("mdi-clock-outline")]),a("span",[e._v(e._s(e.time))])],1),a("v-divider"),a("v-card-text",[a("v-chip-group",{attrs:{column:""}},e._l(e.item.skills,(function(t){return a("v-chip",{key:t,attrs:{color:"secondaryDark white--text"},on:{click:function(a){return e.addQueryFilter(t)}}},[e._v(" "+e._s(t)+" ")])})),1)],1)],1)},Ae=[],Me=(a(3948),{name:"ProjectItem",props:{item:{}},computed:{roles(){const e=this,t=e.item.roles[Symbol.iterator]();let a=t.next(),s=a.value;a=t.next();while(!a.done)s+=" -- ",s+=a.value,a=t.next();return s},time(){const e=this;let t=e.item.start;return null!==e.item.end&&e.item.end!==e.item.start?t+=` - ${e.item.end}`:null===e.item.end&&(t+=" - now"),t},hasLinks(){const e=this;return void 0!==e.item.links&&e.item.links.length>0}},methods:{addQueryFilter(e){window.eventBus.$emit("skillFilter",e)}}}),$e=Me,Be=a(4151),Le=a(6662),Oe=a(3745),Fe=(0,m.Z)($e,De,Ae,!1,null,"dce7af12",null),Qe=Fe.exports;v()(Fe,{VCard:R.Z,VCardSubtitle:U.Qq,VCardText:U.ZB,VCardTitle:U.EB,VChip:Be.Z,VChipGroup:Le.Z,VDivider:Oe.Z,VIcon:f.Z});var Re={name:"ProjectsPage",components:{ProjectItem:Qe},metaInfo:{title:"Projects"},data(){return{projects:[],skillsQuery:[],filteredProjectKeys:[],skillsList:[]}},async created(){const e=this;se().get("data/projects.json").then((t=>{e.projects=t.data.sort(e.projectComparator).reverse(),e.projects.forEach(e.processProject),e.skillsList.sort()})).catch((e=>{window.eventBus.$emit("message",{type:"E",msg:`Error: ${e}`})})),window.eventBus.$on("skillFilter",e.addQueryFilter)},computed:{noProjects(){const e=this;return void 0===e.displayProjects||e.displayProjects.length<1},displayProjects(){const e=this;return e.skillsQuery.length>0?e.projects.filter((t=>e.filteredProjectKeys.includes(t.title))):e.projects}},methods:{filterSkills(){const e=this;e.filteredProjectKeys=e.projects.filter(e.projectMatchesQuery).map((e=>e.title))},projectMatchesQuery(e){const t=this;return t.skillsQuery.every((t=>e.skills.includes(t)))},addQueryFilter(e){const t=this;t.skillsQuery.includes(e)?window.eventBus.$emit("message",{type:"I",msg:"Already filtering on this skill"}):(t.skillsQuery.push(e),t.filterSkills())},projectComparator(e,t){return null===e.end?1:null===t.end?-1:e.start>t.start?1:e.start<t.start?-1:e.end>t.start?1:e.start<t.end?-1:0},processProject(e){const t=this;e.roles.sort(),e.skills.sort(),e.skills.forEach((e=>{t.skillsList.includes(e)||t.skillsList.push(e)}))}}},Ue=Re,He=a(633),We=(0,m.Z)(Ue,Ie,Pe,!1,null,"dfdc6814",null),Ne=We.exports;v()(We,{VCard:R.Z,VCardText:U.ZB,VCardTitle:U.EB,VCol:he.Z,VCombobox:He.Z,VRow:me.Z,VSpacer:V.Z});var ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"8",md:"12"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center text-uppercase primary"},[a("h1",{staticClass:"area-title"},[e._v("About Me")])])],1),a("v-row",{staticClass:"mx-2",staticStyle:{"padding-top":"1em"},attrs:{align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-img",{ref:"andreas stensig jensen",style:e.border,attrs:{eager:"","max-height":"300",src:"img/asj2.jpg"}})],1),a("v-col",{attrs:{cols:"8"}},[a("h2",{staticClass:"mb-3"},[e._v("Andreas Stensig Jensen")]),a("p",[e._v(" My name is Andreas Stensig Jensen, and I am a "+e._s(this.age)+" year old software engineer; graduate of the "),a("a",{staticClass:"link secondaryDark--text",attrs:{href:"https://www.dtu.dk/",target:"_blank"}},[e._v(" Technical University of Denmark ")]),e._v(". ")]),a("p",[e._v(" I was born and raised near Slagelse, Denmark, and am currently living in Ringsted, Denmark. ")]),a("p",[e._v(" I grew up with both my parents and two older sisters, and have been used to having dogs in the home all throughout my childhood years. Hence, my love for animals. ")]),a("p",[e._v(" I would classify myself as slightly introverted, but once I know people I enjoy their company, and I love sharing knowledge and having well-informed discussions. I also find satisfaction in problem-solving. ")])])],1),a("v-row",{staticClass:"mx-2",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("h2",{staticClass:"mb-3"},[e._v("Science, Technology, Engineering, and Mathematics (STEM)")]),a("p",[e._v(" I have had a keen interest in mathematics and the natural sciences ever since grade-school, and my passion for technology and engineering really came into being during my high-school years. There I eventually set my focus on becoming a software engineer. ")]),a("p",[e._v(" Throughout all those years in school--and later at university--I developed a lingering interest in knowledge, especially within technology and many areas of physics. But even outside of these broad topics I am often intrigued by random knowledge of obscure subjects that will never be of any significant use, but nevertheless catches my interest and a desire to know more. ")]),a("p",[e._v(" Some people use the description of a "),a("i",[e._v("nerd")]),e._v(" as a derogatory term, but to me the embodiment of a nerd is something to be proud of, and our contributions to society are immeasurable through the areas of engineering and the sciences. A contribution I hope to be a part of with my work as a software engineer. ")])]),a("v-col",{attrs:{cols:"4"}},[a("v-img",{style:e.border,attrs:{eager:"",contain:"","max-height":"300",src:"img/dtu-diplom.jpg",alt:"Bachelor of IT engineering graduation"}})],1)],1),a("v-row",{staticClass:"mx-2",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-img",{style:this.border,attrs:{eager:"","max-height":"300",src:"img/jrrtolkien.jpg",alt:"Tolkien book collection"}})],1),a("v-col",{attrs:{cols:"8"}},[a("h2",{staticClass:"mb-3"},[e._v("Hobbies")]),a("p",[e._v(" Ever since high-school, computers, and technology has been a big hobby of mine, and many hours have been spend on playing videos games and watching many different documentaries. I also make frequent use of different streaming services to follow major tech channels and their news outlets. ")]),a("p",[e._v(" Yet my biggest hobby is my fandom for J.R.R. Tolkien and his mythology evolving around Middle-Earth (of which Lord of the Rings and The Hobbit are part). I consider myself a massive fan, with my knowledge and interest going far beyond Lord of the Rings and even The Silmarillion; going so far as to find great insight in the literature research aspects of his unfinished works. ")]),a("p",[e._v(" I am also an enthusiast of wine and craft beer, but more so do I enjoy a good glass of whisk(e)y, of which I have a steadily growing collection. ")])])],1)],1)],1)},Je=[],Ye={name:"AboutPage",metaInfo:{title:"About"},computed:{age(){const e=new Date-new Date(1993,10,4);return Math.floor(e/31536e6)},border(){return`border: 3px solid ${this.$vuetify.theme.themes.light.primary}; border-radius: 10px`}}},qe=Ye,Ke=(0,m.Z)(qe,ze,Je,!1,null,"0ce549b9",null),Ge=Ke.exports;v()(Ke,{VCard:R.Z,VCardTitle:U.EB,VCol:he.Z,VImg:Ee.Z,VRow:me.Z}),s.Z.use(X.Z);var Xe=new X.Z({routes:[{path:"/",name:"Home",component:Se},{path:"/experience",name:"ExpPage",component:be},{path:"/projects",name:"ProjectsPage",component:Ne},{path:"/about",name:"AboutPage",component:Ge},{path:"*",redirect:"/"}]});s.Z.config.productionTip=!1,s.Z.filter("dateFormat",(e=>{const t=/(\d{4})-(\d{2})/,a=t.exec(e);if(!a)return"";const s=a[1],r=a[2];let n="";switch(r){default:break;case"01":n="Jan";break;case"02":n="Feb";break;case"03":n="Mar";break;case"04":n="Apr";break;case"05":n="May";break;case"06":n="Jun";break;case"07":n="Jul";break;case"08":n="Aug";break;case"09":n="Sep";break;case"10":n="Oct";break;case"11":n="Nov";break;case"12":n="Dec";break}return`${n} ${s}`})),s.Z.use(r.Z),window.eventBus=new s.Z,new s.Z({router:Xe,vuetify:G,render:e=>e(Y)}).$mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,n){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],n=e[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(o=!1,n<i&&(i=n));if(o){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,i=s[0],o=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var d=l(a)}for(t&&t(s);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},s=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7584)}));s=a.O(s)})();
//# sourceMappingURL=app.df4c9e5a.js.map