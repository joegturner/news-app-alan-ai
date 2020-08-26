(this.webpackJsonpalan_ai_news=this.webpackJsonpalan_ai_news||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(47),c=t.n(r),s=(t(55),t(17)),m=t(21),i=t.n(m),o=t(48),u=t.n(o),E=t(49),_=t.n(E),f=function(e){var a=e.article,t=e.i,r=e.activeArticle,c=Object(n.useState)([]),m=Object(s.a)(c,2),i=m[0],o=m[1];return Object(n.useEffect)((function(){o((function(e){return Array(20).fill().map((function(a,t){return e[t]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;t===r&&i[r]&&(e=i[r],window.scroll(0,e.current.offsetTop-50))}),[t,r,i]),l.a.createElement("div",{className:_()("card",r===t?"activeCard":null),key:t,ref:i[t]},l.a.createElement("img",{className:"card__image",src:a.urlToImage,alt:"Article Image"}),l.a.createElement("div",{className:"card__content"},l.a.createElement("div",{className:"card__source-box"},l.a.createElement("p",{className:"card__date"},new Date(a.publishedAt).toDateString()),l.a.createElement("p",{className:"card__source"},a.source.name)),l.a.createElement("h4",{className:"card__headline"},a.title),l.a.createElement("p",{className:"card__text"},a.content),l.a.createElement("div",{className:"card__footer"},l.a.createElement("a",{className:"card__learn-more",href:a.url,target:"_blank",rel:"noopener noreferrer"},"learn more"),l.a.createElement("p",{className:"card__index"},t+1))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"directions"},"Click or Touch the bottom right blue mic button to speak"," "),l.a.createElement("section",{className:"info-section"},l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"for ",l.a.createElement("strong",null,"Latest News")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},'"Give me the lastest news"'))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"for News ",l.a.createElement("strong",null,"by Categories")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},"\"Give me the lastest 'Technology' news\""),l.a.createElement("p",{className:"info__text-2"},"Categories:"),l.a.createElement("p",{className:"info__text-3"},"Business, Entertainment, General, Health, Science, Sports, Technology"))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"for News ",l.a.createElement("strong",null,"by Terms")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},"\"What's up with 'Playstation 5'\""),l.a.createElement("p",{className:"info__text-2"},"Terms:"),l.a.createElement("p",{className:"info__text-3"},"BitCoin, Playstation 5, Smartphones, Donald Trump, etc."))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"for News ",l.a.createElement("strong",null,"by Sources")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},"\"Give me the news from 'CNN'\""),l.a.createElement("p",{className:"info__text-2"},"Sources:"),l.a.createElement("p",{className:"info__text-3"},"ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN, etc.")))))},p=function(){return l.a.createElement("section",{className:"info-section info-section--articles"},l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"to ",l.a.createElement("strong",null,"Go back")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},'"Go back"'))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info__heading"},l.a.createElement("h4",null,"to ",l.a.createElement("strong",null,"open the article")),l.a.createElement("h5",null,"Try saying:")),l.a.createElement("div",{className:"info__text"},l.a.createElement("p",{className:"info__text-1"},"\"Open article '5'\""))))},h=function(e){var a=e.articles,t=e.activeArticle;return a.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),a?l.a.createElement("section",{className:"cards"},a.map((function(e,a){return l.a.createElement(f,{key:a,article:e,activeArticle:t,i:a})}))):null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"header__main"},"Voice Activated News App"),l.a.createElement("div",{className:"header__sub-box"},l.a.createElement("h2",{className:"header__sub"},"with the help of Alan AI"),l.a.createElement("a",{className:"header__link",href:"https://studio.alan.app/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"header__logo",src:"https://alan.app/voice/images/previews/preview.jpg",alt:"Alan AI Logo"})))),l.a.createElement(d,null))},N=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Created by \xa0"),l.a.createElement("a",{href:"https://joegturner.com/",target:"_blank",rel:"noopener noreferrer"},"Joe T"),l.a.createElement("p",null,"\xa0and the amazing AI: \xa0"),l.a.createElement("a",{href:"https://studio.alan.app/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"footer__logo",src:"https://alan.app/voice/images/previews/preview.jpg",alt:"Alan AI Logo"})))},g=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(-1),m=Object(s.a)(c,2),o=m[0],E=m[1];return Object(n.useEffect)((function(){i()({key:"597cb3ee182d1411750e5eb0f4caef962e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var a=e.command,t=e.articles,n=e.number;if("newHeadlines"===a)r(t),E(-1);else if("highlight"===a)E((function(e){return e+1}));else if("open"===a){var l=n.length>2?u()(n,{fuzzy:!0}):n,c=t[l-1];l>20?i()().playText("Please try that again."):c&&(window.open(c.url,"_blank"),i()().playText("Opening..."))}}})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{articles:t,activeArticle:o}),l.a.createElement(N,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))},50:function(e,a,t){e.exports=t(109)},55:function(e,a,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.33b4bae8.chunk.js.map