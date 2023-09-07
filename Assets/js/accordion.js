if(!customElements.get("accordion-element")){let a=0;window.accordions=[];class b extends HTMLElement{#title;#id;#isOpen;#group;#titleElement;#bodyElement;#parentAccordion;#initialParentAccordionHeight;constructor({title:b,id:c,isOpen:d,group:e}={}){super(),this.#title=b??this.dataset.title??"",this.#id=c??this.dataset.id??a++,this.#isOpen=d??this.dataset.isOpen??!1,this.#group=e??this.dataset.group??"",this.#titleElement=this._createTitleElement(),this.#bodyElement=this._createBodyElement(),window.accordions.push(this),this.#parentAccordion=null}_createTitleElement(){const a=document.createElement("div");return a.classList.add("ploiu-accordion-title"),a.innerText=this.#title,a.addEventListener("click",()=>this.toggle()),a}_createBodyElement(){const a=document.createElement("div");for(a.classList.add("ploiu-accordion-body");0<this.childElementCount;){const b=this.children[0];a.appendChild(b.cloneNode(!0)),b.remove()}return a}get id(){return this.#id}get group(){return this.#group}set group(a){this.#group=a,this.dataset.group=a}get title(){return this.#title}set title(a){this.#title=a,this.#titleElement.innerText=a}get isOpen(){return this.#isOpen}get bodyElement(){return this.#bodyElement}set body(a){Array.from(this.#bodyElement.children).forEach(a=>a?.remove()),this.#bodyElement.appendChild(a)}expand(){b.findAccordionsByGroup(this.#group).filter(a=>a!==this&&a!==this.#parentAccordion).forEach(a=>a.collapse()),this.#isOpen=!0,this.#bodyElement.style.height=`${this.#bodyElement.scrollHeight}px`,this.#parentAccordion?.isOpen&&(this.#parentAccordion.bodyElement.style.height=Number.parseFloat(this.#parentAccordion.bodyElement.style.height.replace(/px/,""))+this.bodyElement.scrollHeight+"px"),this.classList.add("open")}collapse(){this.#isOpen&&(this.#isOpen=!1,this.#parentAccordion&&(this.#parentAccordion.bodyElement.style.height=this.#parentAccordion.bodyElement.clientHeight-this.bodyElement.scrollHeight+"px"),this.#bodyElement.style.height="0",this.classList.remove("open"),Array.from(this.querySelectorAll("accordion-element")).forEach(a=>a.collapse()))}toggle(){this.#isOpen?this.collapse():this.expand()}_getParentAccordion(){let a=[],b=this;for(;b?.parentNode;)a.push(b.parentNode),b=b.parentNode;return a=a.filter(a=>"ACCORDION-ELEMENT"===a?.tagName),0<a.length?a[0]:null}connectedCallback(){this.isConnected&&(this.appendChild(this.#titleElement),this.appendChild(this.#bodyElement),(this.dataset.open!==void 0||this.#isOpen)&&this.expand(),this.#parentAccordion=this._getParentAccordion(),this.#initialParentAccordionHeight=null===this.#parentAccordion?0:this.#parentAccordion.scrollHeight)}static findAccordionById(a){try{return window.accordions.filter(b=>b.id===a)[0]}catch(a){return null}}static findAccordionsByGroup(a){return window.accordions.filter(b=>b.group.toLowerCase()===a.toLowerCase())}}class c extends HTMLElement{constructor(){super(),Array.from(this.querySelectorAll("accordion-element")).forEach(b=>b.group=`fan-${a}`),a++}}customElements.define("accordion-element",b),customElements.define("accordion-fan",c),window.AccordionElement=b}