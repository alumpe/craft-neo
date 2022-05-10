(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=jQuery;var n=t.n(e);n().fn.insertAt=function(t,e){return this.each((function(){0===t?e.prepend(this):e.children().eq(t-1).after(this)}))};const s=Garnish;var i=t.n(s);const o=Craft;var a,l=t.n(o),c=new Uint8Array(16);function r(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(c)}const d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const h=function(t){return"string"==typeof t&&d.test(t)};for(var p=[],u=0;u<256;++u)p.push((u+256).toString(16).substr(1));const g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase();if(!h(n))throw TypeError("Stringified UUID is invalid");return n};const m=function(t,e,n){var s=(t=t||{}).random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=s[i];return e}return g(s)},k={_stack:[[]],enter(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"==typeof t&&(t=this.fromFieldName(t)),e){const e=this.getNamespace();e.push(...t),t=e}this._stack.push(t)},enterByFieldName(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.enter(this.fromFieldName(t),e)},leave(){return this._stack.length>1?this._stack.pop():this.getNamespace()},getNamespace(){return Array.from(this._stack[this._stack.length-1])},parse(t){return"string"==typeof t?t.indexOf("[")>-1?this.fromFieldName(t):t.indexOf("-")>-1?t.split("-"):t.indexOf(".")>-1?t.split("."):t:Array.from(t)},value(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";const n=this.getNamespace();return n.push(t),n.join(e)},fieldName(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=this.toFieldName();return e?e+t.replace(/([^'"[\]]+)([^'"]*)/,"[$1]$2"):t},toString(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return this.getNamespace().join(t)},toFieldName(){const t=this.getNamespace();switch(t.length){case 0:return"";case 1:return t[0]}return t[0]+"["+t.slice(1).join("][")+"]"},fromFieldName:t=>t.match(/[^[\]\s]+/g)||[]},f={settings:null},y=i().Base.extend({_selected:!1,init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},f,t),this._settings=t.settings},getSettings(){return this._settings},select(){this.toggleSelect(!0)},deselect(){this.toggleSelect(!1)},toggleSelect:function(t){this._selected="boolean"==typeof t?t:!this._selected,this.trigger("toggleSelect",{selected:this._selected})},isSelected(){return this._selected}}),b={namespace:[],fieldLayout:null},B=y.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(t);const e=this.getSettings();t=Object.assign({},b,t),this._templateNs=k.parse(t.namespace),this._fieldLayout=t.fieldLayout,this.$container=this._generateBlockType(e);const n=this.$container.find("[data-neo-bt]");this.$nameText=n.filter('[data-neo-bt="text.name"]'),this.$handleText=n.filter('[data-neo-bt="text.handle"]'),this.$moveButton=n.filter('[data-neo-bt="button.move"]'),this.$actionsButton=n.filter('[data-neo-bt="button.actions"]'),this.$actionsMenu=n.filter('[data-neo-bt="container.menu"]'),this._actionsMenu=new(i().MenuBtn)(this.$actionsButton),this._actionsMenu.on("optionSelect",(t=>this["@actionSelect"](t))),this.addListener(this.$actionsButton,"click",(t=>t.stopPropagation())),e&&(e.on("change",(()=>this._updateTemplate())),e.on("destroy",(()=>this.trigger("destroy"))),this._updateTemplate()),this.deselect()},_generateBlockType(t){const e=t.getErrors(),s=(Array.isArray(e)?e:Object.keys(e)).length>0;return n()('\n      <div class="nc_sidebar_list_item'.concat(s?" has-errors":"",'">\n        <div class="label" data-neo-bt="text.name">').concat(t.getName(),'</div>\n        <div class="smalltext light code" data-neo-bt="text.handle">').concat(t.getHandle(),'</div>\n        <a class="move icon" title="').concat(l().t("neo","Reorder"),'" role="button" data-neo-bt="button.move"></a>\n        <button class="settings icon menubtn" title="').concat(l().t("neo","Actions"),'" role="button" type="button" data-neo-bt="button.actions"></button>\n        <div class="menu" data-neo-bt="container.menu">\n          <ul class="padded">\n            <li><a data-icon="field" data-action="copy">').concat(l().t("neo","Copy"),'</a></li>\n            <li class="disabled"><a data-icon="brush" data-action="paste">').concat(l().t("neo","Paste"),'</a></li>\n            <li><a data-icon="share" data-action="clone">').concat(l().t("neo","Clone"),'</a></li>\n            <li><a class="error" data-icon="remove" data-action="delete">').concat(l().t("neo","Delete"),"</a></li>\n          </ul>\n        </div>\n      </div>"))},getFieldLayout(){return this._fieldLayout},toggleSelect:function(t){this.base(t);const e=this.getSettings(),n=this.getFieldLayout(),s=this.isSelected();e&&e.$container.toggleClass("hidden",!s),n&&n.$container.toggleClass("hidden",!s),this.$container.toggleClass("is-selected",s)},_updateTemplate(){const t=this.getSettings();t&&(this.$nameText.text(t.getName()),this.$handleText.text(t.getHandle()),this.$container.toggleClass("is-child",!t.getTopLevel()))},"@actionSelect"(t){const e=n()(t.option);if(!e.hasClass("disabled"))switch(e.attr("data-action")){case"copy":this.trigger("copy");break;case"paste":this.trigger("paste");break;case"clone":this.trigger("clone");break;case"delete":window.confirm(l().t("neo","Are you sure you want to delete this block type?"))&&this.getSettings().destroy()}}}),_=i().Base.extend({$container:new(n()),_sortOrder:0,getSortOrder(){return this._sortOrder},setSortOrder(t){const e=this._sortOrder;this._sortOrder=0|t,e!==this._sortOrder&&this.trigger("change",{property:"sortOrder",oldValue:e,newValue:this._sortOrder})},getFocusElement:()=>new(n()),destroy(){this.trigger("destroy")},_refreshSetting(t,e,n){(n=!i().prefersReducedMotion()&&("boolean"!=typeof n||n))?e?t.hasClass("hidden")&&t.removeClass("hidden").css({opacity:0,marginBottom:-t.outerHeight()}).velocity({opacity:1,marginBottom:24},"fast"):t.hasClass("hidden")||t.css({opacity:1,marginBottom:24}).velocity({opacity:0,marginBottom:-t.outerHeight()},"fast",(()=>{t.addClass("hidden")})):t.toggleClass("hidden",!e).css("margin-bottom",e?24:"")}}),v={namespace:[],id:null,sortOrder:0,name:"",handle:"",maxBlocks:0,maxSiblingBlocks:0,maxChildBlocks:0,topLevel:!0,childBlocks:null,childBlockTypes:[],errors:{}},w=_.extend({_templateNs:[],_childBlockTypes:[],$sortOrderInput:new(n()),$nameInput:new(n()),$handleInput:new(n()),$maxBlocksInput:new(n()),$maxSiblingBlocksInput:new(n()),$maxChildBlocksInput:new(n()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},v,t),this._templateNs=k.parse(t.namespace),this._childBlockTypes=[],this._id=t.id,this._errors=t.errors,this.setSortOrder(t.sortOrder),this.setName(t.name),this.setHandle(t.handle),this.setMaxBlocks(t.maxBlocks),this.setMaxSiblingBlocks(t.maxSiblingBlocks),this.setMaxChildBlocks(t.maxChildBlocks),this.setTopLevel(t.topLevel),this.$container=this._generateBlockTypeSettings();const e=this.$container.find("[data-neo-bts]");this.$sortOrderInput=e.filter('[data-neo-bts="input.sortOrder"]'),this.$nameInput=e.filter('[data-neo-bts="input.name"]'),this.$handleInput=e.filter('[data-neo-bts="input.handle"]'),this.$maxBlocksInput=e.filter('[data-neo-bts="input.maxBlocks"]'),this.$maxSiblingBlocksInput=e.filter('[data-neo-bts="input.maxSiblingBlocks"]'),this.$maxChildBlocksInput=e.filter('[data-neo-bts="input.maxChildBlocks"]'),this.$maxChildBlocksContainer=e.filter('[data-neo-bts="container.maxChildBlocks"]'),this.$topLevelInput=e.filter('[data-neo-bts="input.topLevel"]'),this.$topLevelContainer=e.filter('[data-neo-bts="container.topLevel"]'),this.$childBlocksInput=e.filter('[data-neo-bts="input.childBlocks"]'),this.$childBlocksContainer=e.filter('[data-neo-bts="container.childBlocks"]'),this.$deleteButton=e.filter('[data-neo-bts="button.delete"]'),l().initUiElements(this.$container),this._childBlocksSelect=this.$childBlocksInput.data("checkboxSelect"),this._topLevelLightswitch=this.$topLevelInput.data("lightswitch"),this._handleGenerator=new(l().HandleGenerator)(this.$nameInput,this.$handleInput),""!==this.getHandle()&&this._handleGenerator.stopListening();for(const e of t.childBlockTypes)this.addChildBlockType(e);this.setChildBlocks(t.childBlocks),i().Base.prototype.on.call(this._topLevelLightswitch,"change",(()=>this.setTopLevel(this._topLevelLightswitch.on))),this.addListener(this.$nameInput,"keyup change",(()=>{this.setName(this.$nameInput.val()),this._handleGenerator.listening&&setTimeout((()=>this.setHandle(this.$handleInput.val())),200)})),this.addListener(this.$handleInput,"keyup change textchange",(()=>this.setHandle(this.$handleInput.val()))),this.addListener(this.$maxBlocksInput,"keyup change",(()=>this.setMaxBlocks(this.$maxBlocksInput.val()))),this.addListener(this.$maxSiblingBlocksInput,"keyup change",(()=>this.setMaxSiblingBlocks(this.$maxSiblingBlocksInput.val()))),this.addListener(this.$maxChildBlocksInput,"keyup change",(()=>this.setMaxChildBlocks(this.$maxChildBlocksInput.val()))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(l().t("neo","Are you sure you want to delete this block type?"))&&this.destroy()})),this.$childBlocksInput.on("change","input",(()=>this._refreshMaxChildBlocks()))},_generateBlockTypeSettings(){const t=this.getErrors(),e=this.getMaxBlocks(),s=this.getMaxSiblingBlocks(),i=this.getMaxChildBlocks();k.enter(this._templateNs);const o=k.fieldName("sortOrder"),a=k.value("name","-"),c=k.fieldName("name"),r=k.value("handle","-"),d=k.fieldName("handle"),h=k.value("maxBlocks","-"),p=k.fieldName("maxBlocks"),u=k.value("maxSiblingBlocks","-"),g=k.fieldName("maxSiblingBlocks"),m=k.value("childBlocks","-"),f=k.fieldName("childBlocks"),y=k.value("maxChildBlocks","-"),b=k.fieldName("maxChildBlocks"),B=k.value("topLevel","-"),_=k.fieldName("topLevel");k.leave();const v=l().ui.createTextField({type:"text",id:a,name:c,label:l().t("neo","Name"),instructions:l().t("neo","What this block type will be called in the CP."),required:!0,value:this.getName(),errors:t.name});v.find("input").attr("data-neo-bts","input.name");const w=l().ui.createTextField({type:"text",id:r,name:d,label:l().t("neo","Handle"),instructions:l().t("neo","How you’ll refer to this block type in the templates."),required:!0,class:"code",value:this.getHandle(),errors:t.handle});w.find("input").attr("data-neo-bts","input.handle");const x=l().ui.createTextField({type:"number",id:h,name:p,label:l().t("neo","Max Blocks"),instructions:l().t("neo","The maximum number of blocks of this type the field is allowed to have."),value:e>0?e:null,min:0,errors:t.maxBlocks});x.find("input").removeClass("fullwidth").css("width","80px").attr("data-neo-bts","input.maxBlocks");const $=l().ui.createTextField({type:"number",id:u,name:g,label:l().t("neo","Max Sibling Blocks of This Type"),instructions:l().t("neo","The maximum number of blocks of this type allowed under one parent block or at the top level."),value:s>0?s:null,min:0,errors:t.maxSiblingBlocks});$.find("input").removeClass("fullwidth").css("width","80px").attr("data-neo-bts","input.maxSiblingBlocks");const S=l().ui.createField(n()('\n        <fieldset class="checkbox-select" data-neo-bts="input.childBlocks">\n          <div>\n            <input type="hidden" name="'.concat(f,'">\n            <input type="checkbox" value="*" id="').concat(m,'" class="all checkbox" name="').concat(f,'">\n            <label for="').concat(m,'"><strong>').concat(l().t("neo","All"),'</strong></label>\n          </div>\n          <div data-neo-bts="container.childBlocks"></div>\n        </fieldset>')),{id:m,label:l().t("neo","Child Blocks"),instructions:l().t("neo","Which block types do you want to allow as children?")}),C=l().ui.createTextField({type:"number",id:y,name:b,label:l().t("neo","Max Child Blocks"),instructions:l().t("neo","The maximum number of child blocks this block type is allowed to have."),value:i>0?i:null,min:0,errors:t.maxChildBlocks,attributes:{style:"width: 80px;","data-neo-bts":"input.maxChildBlocks"}});C.find("input").removeClass("fullwidth").css("width","80px").attr("data-neo-bts","input.maxChildBlocks");const T=l().ui.createField(n()('\n        <div class="lightswitch'.concat(this.getTopLevel()?" on":"",'" tabindex="0" data-neo-bts="input.topLevel">\n          <div class="lightswitch-container">\n            <div class="label on"></div>\n            <div class="handle"></div>\n            <div class="label off"></div>\n          </div>\n          <input type="hidden" name="').concat(_,'" value="').concat(this.getTopLevel()?"1":"",'">\n        </div>')),{id:B,label:l().t("neo","Top Level"),instructions:l().t("neo","Will this block type be allowed at the top level?")});return n()('\n      <div>\n        <input type="hidden" name="'.concat(o,'" value="').concat(this.getSortOrder(),'" data-neo-bts="input.sortOrder">\n        <div>\n          ').concat(n()('<div class="field"/>').append(v).html(),"\n          ").concat(n()('<div class="field"/>').append(w).html(),"\n          ").concat(n()('<div class="field"/>').append(x).html(),"\n          ").concat(n()('<div class="field"/>').append($).html(),"\n          ").concat(n()('<div class="field"/>').append(S).html(),'\n          <div data-neo-bts="container.maxChildBlocks">\n            ').concat(n()('<div class="field"/>').append(C).html(),'\n          </div>\n          <div data-neo-bts="container.topLevel">\n            ').concat(n()('<div class="field"/>').append(T).html(),'\n          </div>\n        </div>\n        <hr>\n        <a class="error delete" data-neo-bts="button.delete">').concat(l().t("neo","Delete block type"),"</a>\n      </div>"))},_generateChildBlocksCheckbox(t){k.enter(this._templateNs);const e=k.value("childBlock-"+t.getId(),"-"),s=k.fieldName("childBlocks");return k.leave(),n()('\n      <div>\n        <input type="checkbox" value="'.concat(t.getHandle(),'" id="').concat(e,'" class="checkbox" name="').concat(s,'[]" data-neo-btsc="input">\n        <label for="').concat(e,'" data-neo-btsc="text.label">').concat(t.getName(),"</label>\n      </div>"))},getFocusInput(){return this.$nameInput},getId(){return this._id},isNew(){return/^new/.test(this.getId())},getErrors(){return this._errors},setSortOrder(t){this.base(t),this.$sortOrderInput.val(this.getSortOrder())},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val()!==this._name&&this.$nameInput.val(this._name),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getHandle(){return this._handle},setHandle(t){if(t!==this._handle){const e=this._handle;this._handle=t,this.$handleInput.val()!==this._handle&&this.$handleInput.val(this._handle),this.trigger("change",{property:"handle",oldValue:e,newValue:this._handle})}},getMaxBlocks(){return this._maxBlocks},setMaxBlocks(t){const e=this._maxBlocks,n=Math.max(0,0|t);0===n&&this.$maxBlocksInput.val(null),e!==n&&(this._maxBlocks=n,this._maxBlocks>0&&parseInt(this.$maxBlocksInput.val())!==this._maxBlocks&&this.$maxBlocksInput.val(this._maxBlocks),this.trigger("change",{property:"maxBlocks",oldValue:e,newValue:this._maxBlocks}))},getMaxSiblingBlocks(){return this._maxSiblingBlocks},setMaxSiblingBlocks(t){const e=this._maxSiblingBlocks,n=Math.max(0,0|t);0===n&&this.$maxSiblingBlocksInput.val(null),e!==n&&(this._maxSiblingBlocks=n,this._maxSiblingBlocks>0&&parseInt(this.$maxSiblingBlocksInput.val())!==this._maxSiblingBlocks&&this.$maxSiblingBlocksInput.val(this._maxSiblingBlocks),this.trigger("change",{property:"maxSiblingBlocks",oldValue:e,newValue:this._maxSiblingBlocks}))},getMaxChildBlocks(){return this._maxChildBlocks},setMaxChildBlocks(t){const e=this._maxChildBlocks,n=Math.max(0,0|t);0===n&&this.$maxChildBlocksInput.val(null),e!==n&&(this._maxChildBlocks=n,this._maxChildBlocks>0&&parseInt(this.$maxChildBlocksInput.val())!==this._maxChildBlocks&&this.$maxChildBlocksInput.val(this._maxChildBlocks),this.trigger("change",{property:"maxChildBlocks",oldValue:e,newValue:this._maxChildBlocks}))},getTopLevel(){return this._topLevel},setTopLevel(t){const e=this._topLevel,n=!!t;e!==n&&(this._topLevel=n,this._topLevelLightswitch&&this._topLevelLightswitch.on!==this._topLevel&&(this._topLevelLightswitch.on=this._topLevel,this._topLevelLightswitch.toggle()),this.trigger("change",{property:"topLevel",oldValue:e,newValue:this._topLevel}))},getChildBlocks(){const t=this._childBlocksSelect,e=[];return!!t.$all.prop("checked")||(t.$options.each((function(t){const s=n()(this);s.prop("checked")&&e.push(s.val())})),e.length>0&&e)},setChildBlocks(t){const e=this._childBlocksSelect;if(!0===t||"*"===t)e.$all.prop("checked",!0),e.onAllChange();else if(Array.isArray(t)){e.$all.prop("checked",!1);for(const n of t)e.$options.filter('[value="'.concat(n,'"]')).prop("checked",!0)}else e.$all.prop("checked",!1),e.$options.prop("checked",!1);this._refreshMaxChildBlocks(!1)},addChildBlockType(t){if(!this._childBlockTypes.includes(t)){const e=t.getSettings(),n=this._generateChildBlocksCheckbox(e);this._childBlockTypes.push(t),this.$childBlocksContainer.append(n),this._refreshChildBlocks();const s=this._childBlocksSelect,i=s.$all.prop("checked");s.$options=s.$options.add(n.find("input")),i&&s.onAllChange();const o=".childBlock"+this.getId();e.on("change"+o,(e=>this["@onChildBlockTypeChange"](e,t,n))),e.on("destroy"+o,(e=>this.removeChildBlockType(t)))}},removeChildBlockType(t){const e=this._childBlockTypes.indexOf(t);if(e>=0){this._childBlockTypes.splice(e,1);const n=t.getSettings(),s=this.$childBlocksContainer.children().eq(e);s.remove();const i=this._childBlocksSelect;i.$options=i.$options.remove(s.find("input"));const o=".childBlock"+this.getId();n.off(o),this._refreshChildBlocks()}},_refreshChildBlocks(){const t=Array.from(this._childBlockTypes),e=this.$childBlocksContainer.children(),n=n=>e.get(t.indexOf(n));this._childBlockTypes=this._childBlockTypes.sort(((t,e)=>t.getSettings().getSortOrder()-e.getSettings().getSortOrder())),e.remove();for(const t of this._childBlockTypes){const e=n(t);this.$childBlocksContainer.append(e)}},_refreshMaxChildBlocks(t){this._refreshSetting(this.$maxChildBlocksContainer,!!this.getChildBlocks(),t)},"@onChildBlockTypeChange"(t,e,n){const s=n.find("[data-neo-btsc]"),i=s.filter('[data-neo-btsc="input"]'),o=s.filter('[data-neo-btsc="text.label"]');switch(t.property){case"name":o.text(t.newValue);break;case"handle":i.val(t.newValue);break;case"sortOrder":this._refreshChildBlocks()}}},{_totalNewBlockTypes:0,getNewId(){return"new".concat(this._totalNewBlockTypes++)}}),x={namespace:[],html:"",layout:null,id:-1,blockId:null,blockName:""},$=i().Base.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},x,t),this._templateNs=k.parse(t.namespace),this._id=0|t.id,this._blockTypeId=t.blockTypeId,this.$container=n()(t.html).find(".layoutdesigner"),this.$container.removeAttr("id");const e=this.$container.find('input[name="fieldLayout"]');e.length>0&&(e[0].name="neoBlockType".concat(this._blockTypeId,"[fieldLayout]"),t.layout&&(e[0].value=JSON.stringify(t.layout))),k.enter(this._templateNs),this._fld=new(l().FieldLayoutDesigner)(this.$container,{customizableTabs:!0,customizableUi:!0}),k.leave();const s=()=>{const t="[data-type=benf-neo-fieldlayoutelements-ChildBlocksUiElement]",e=this._fld.$uiLibraryElements.filter(t),s=this._fld.$tabContainer.find(t);e.toggleClass("hidden",s.length>0||n()("body.dragging .draghelper"+t).length>0),s.hasClass("velocity-animating")&&s.removeClass("hidden")};s(),this._tabObserver=new window.MutationObserver(s),this._tabObserver.observe(this._fld.$tabContainer[0],{childList:!0,subtree:!0})},getId(){return this._id},getBlockTypeId(){return this._blockTypeId},getConfig(){const t={tabs:[]};for(const e of this._fld.config.tabs){const n=[];for(const t of e.elements){const e={};for(const n in t)e[n]="required"!==n||t[n]?t[n]:"";n.push(e)}t.tabs.push({elements:n,name:e.name.slice()})}return t}}),S={namespace:[]},C=y.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(t),t=Object.assign({},S,t);const e=this.getSettings();this._templateNs=k.parse(t.namespace),this.$container=this._generateGroup(e);const n=this.$container.find("[data-neo-g]");this.$nameText=n.filter('[data-neo-g="text.name"]'),this.$moveButton=n.filter('[data-neo-g="button.move"]'),e&&(e.on("change",(()=>this._updateTemplate())),e.on("destroy",(()=>this.trigger("destroy")))),this.deselect()},_generateGroup:t=>n()('\n      <div class="nc_sidebar_list_item type-heading">\n        <div class="label" data-neo-g="text.name">'.concat(t.getName(),'</div>\n        <a class="move icon" title="').concat(l().t("neo","Reorder"),'" role="button" data-neo-g="button.move"></a>\n      </div>')),toggleSelect:function(t){this.base(t);const e=this.getSettings(),n=this.isSelected();e&&e.$container.toggleClass("hidden",!n),this.$container.toggleClass("is-selected",n)},_updateTemplate(){const t=this.getSettings();t&&this.$nameText.text(t.getName())}}),T={namespace:[],id:null,sortOrder:0,name:"",alwaysShowDropdown:null,defaultAlwaysShowGroupDropdowns:!0},I=_.extend({_templateNs:[],$sortOrderInput:new(n()),$nameInput:new(n()),$handleInput:new(n()),$maxBlocksInput:new(n()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},T,t),this._templateNs=k.parse(t.namespace),this._id=t.id,this._alwaysShowDropdown=t.alwaysShowDropdown,this._defaultAlwaysShowGroupDropdowns=t.defaultAlwaysShowGroupDropdowns,this.$container=this._generateGroupSettings();const e=this.$container.find("[data-neo-gs]");this.$sortOrderInput=e.filter('[data-neo-gs="input.sortOrder"]'),this.$nameInput=e.filter('[data-neo-gs="input.name"]'),this.$deleteButton=e.filter('[data-neo-gs="button.delete"]'),this.$alwaysShowDropdownContainer=e.filter('[data-neo-gs="container.alwaysShowDropdown"]'),this.setSortOrder(t.sortOrder),this.setName(t.name),this.addListener(this.$nameInput,"keyup change",(()=>this.setName(this.$nameInput.val()))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(l().t("neo","Are you sure you want to delete this group?"))&&this.destroy()}))},_generateGroupSettings(){k.enter(this._templateNs);const t=k.fieldName("sortOrder"),e=k.value("name","-"),s=k.fieldName("name"),i=k.value("alwaysShowDropdown","-"),o=k.fieldName("alwaysShowDropdown");k.leave();const a=[{value:"show",label:l().t("neo","Show")},{value:"hide",label:l().t("neo","Hide")},{value:"global",label:this._defaultAlwaysShowGroupDropdowns?l().t("neo","Use global setting (Show)"):l().t("neo","Use global setting (Hide)")}],c=l().ui.createTextField({type:"text",id:e,name:s,label:l().t("neo","Name"),instructions:l().t("neo","This can be left blank if you just want an unlabeled separator."),value:this.getName()});return c.find("input").attr("data-neo-gs","input.name"),n()('\n      <div>\n      <input type="hidden" name="'.concat(t,'" value="').concat(this.getSortOrder(),'" data-neo-gs="input.sortOrder">\n      <div>\n        ').concat(n()('<div class="field">').append(c).html(),'\n        <div data-neo-gs="container.alwaysShowDropdown">\n          <div class="field">\n            ').concat(l().ui.createSelectField({label:l().t("neo","Always Show Dropdown?"),instructions:l().t("neo","Whether to show the dropdown for this group if it only has one available block type."),id:i,name:o,options:a,value:this._alwaysShowDropdown?"show":!1===this._alwaysShowDropdown?"hide":"global"}).html(),'\n          </div>\n        </div>\n      </div>\n      <hr>\n      <a class="error delete" data-neo-gs="button.delete">').concat(l().t("neo","Delete group"),"</a>\n    </div>"))},getFocusInput(){return this.$nameInput},getId(){return this._id},setSortOrder(t){this.base(t),this.$sortOrderInput.val(this.getSortOrder())},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val(this._name),this._refreshAlwaysShowDropdown(),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getAlwaysShowDropdown(){return this._alwaysShowDropdown},_refreshAlwaysShowDropdown(t){this._refreshSetting(this.$alwaysShowDropdownContainer,!!this._name,t)}},{_totalNewGroups:0,getNewId(){return"new".concat(this._totalNewGroups++)}}),L={namespace:[],blockTypes:[],groups:[],fieldLayoutHtml:""},N=i().Base.extend({_templateNs:[],_items:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},L,t);const e=l().formatInputId(t.namespace),s=n()("#".concat(e,"-neo-configurator")).children(".field").children(".input");this._templateNs=k.parse(t.namespace),this._fieldLayoutHtml=t.fieldLayoutHtml,this._items=[],this.$container=this._generateConfigurator(),s.append(this.$container);const o=this.$container.find("[data-neo]");this.$mainContainer=o.filter('[data-neo="container.main"]'),this.$sidebarContainer=o.filter('[data-neo="container.sidebar"]'),this.$blockTypesContainer=o.filter('[data-neo="container.blockTypes"]'),this.$settingsContainer=o.filter('[data-neo="container.settings"]'),this.$fieldLayoutContainer=o.filter('[data-neo="container.fieldLayout"]'),this.$blockTypeButton=o.filter('[data-neo="button.blockType"]'),this.$groupButton=o.filter('[data-neo="button.group"]'),this.$settingsButton=o.filter('[data-neo="button.settings"]'),this.$fieldLayoutButton=o.filter('[data-neo="button.fieldLayout"]'),this._itemSort=new(i().DragSort)(null,{container:this.$blockTypeItemsContainer,handle:'[data-neo-bt="button.move"], [data-neo-g="button.move"]',axis:"y",onSortChange:()=>this._updateItemOrder()});const a=[],c=[...this._templateNs,"blockTypes"],r=[...this._templateNs,"groups"];for(const e of t.blockTypes){const t=new w({namespace:[...c,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,handle:e.handle,maxBlocks:e.maxBlocks,maxSiblingBlocks:e.maxSiblingBlocks,maxChildBlocks:e.maxChildBlocks,topLevel:e.topLevel,errors:e.errors,childBlockTypes:a.filter((t=>t instanceof B))}),n=new $({namespace:[...c,e.id],html:e.fieldLayoutHtml,id:e.fieldLayoutId,blockTypeId:e.id}),s=new B({namespace:c,settings:t,fieldLayout:n});s.on("copy.configurator",(()=>this._copyBlockType(s))),s.on("paste.configurator",(()=>this._pasteBlockType())),s.on("clone.configurator",(()=>this._createBlockTypeFrom(s))),a.push(s)}for(const e of t.groups){const n=new I({namespace:[...r,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,alwaysShowDropdown:e.alwaysShowDropdown,defaultAlwaysShowGroupDropdowns:t.defaultAlwaysShowGroupDropdowns}),s=new C({namespace:r,settings:n});a.push(s)}for(const t of a.sort(((t,e)=>t.getSettings().getSortOrder()-e.getSettings().getSortOrder())))this.addItem(t);for(const e of this.getBlockTypes()){const n=e.getSettings(),s=t.blockTypes.find((t=>t.handle===n.getHandle()));n.setChildBlocks(s.childBlocks)}const d=()=>{const t=!window.localStorage.getItem("neo:copyBlockType");for(const e of this.getBlockTypes())e.$actionsMenu.find('[data-action="paste"]').parent().toggleClass("disabled",t)};d(),this.addListener(document,"visibilitychange.configurator",d),this.selectTab("settings"),this.addListener(this.$blockTypeButton,"click","@newBlockType"),this.addListener(this.$groupButton,"click","@newGroup"),this.addListener(this.$settingsButton,"click",(()=>this.selectTab("settings"))),this.addListener(this.$fieldLayoutButton,"click",(()=>this.selectTab("fieldLayout")))},_generateConfigurator:()=>n()('\n      <div class="nc_sidebar" data-neo="container.sidebar">\n        <div class="nc_sidebar_title">'.concat(l().t("neo","Block Types"),'</div>\n        <div class="nc_sidebar_list" data-neo="container.blockTypes"></div>\n        <div class="nc_sidebar_buttons btngroup">\n          <a class="btn add icon" role="button" data-neo="button.blockType">').concat(l().t("neo","Block type"),'</a>\n          <a class="btn type-heading" role="button" data-neo="button.group">').concat(l().t("neo","Group"),'</a>\n        </div>\n      </div>\n      <div class="nc_main" data-neo="container.main">\n        <div class="nc_main_tabs">\n          <a class="nc_main_tabs_tab is-selected" role="button" data-neo="button.settings">').concat(l().t("neo","Settings"),'</a>\n          <a class="nc_main_tabs_tab" role="button" data-neo="button.fieldLayout">').concat(l().t("neo","Field Layout"),'</a>\n        </div>\n        <div class="nc_main_content" data-neo="container.settings"></div>\n        <div class="nc_main_content" data-neo="container.fieldLayout"></div>\n      </div>')),addItem(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;const n=t.getSettings();if(this._insertAt(t.$container,e),this._itemSort.addItems(t.$container),n&&this.$settingsContainer.append(n.$container),this.$mainContainer.removeClass("hidden"),this.addListener(t.$container,"click","@selectItem"),t.on("destroy.configurator",(()=>this.removeItem(t,!1))),t instanceof B){const e=t.getFieldLayout();e&&this.$fieldLayoutContainer.append(e.$container)}if(this._items.push(t),this._updateItemOrder(),t instanceof B)for(const e of this.getBlockTypes()){const n=e.getSettings();n&&n.addChildBlockType(t)}this.trigger("addItem",{item:t,index:e})},removeItem(t,e){if(e="boolean"==typeof e&&e){const e=l().t("neo","Are you sure you want to delete this {type}?",{type:t instanceof B?"block type":t instanceof C?"group":"item"});window.confirm(e)&&this.removeItem(t,!1)}else{const e=t.getSettings();if(this._itemSort.removeItems(t.$container),t.$container.remove(),e&&e.$container.remove(),t instanceof B){const e=t.getFieldLayout();e&&e.$container.remove()}this.removeListener(t.$container,"click"),t.off(".configurator"),this._updateItemOrder(),0===this._items.length&&this.$mainContainer.addClass("hidden"),this.trigger("removeItem",{item:t})}},getItems(){return Array.from(this._items)},getItemByElement(t){return this._items.find((e=>e.$container.is(t)))},getSelectedItem(){return this._items.find((t=>t.isSelected()))},selectItem(t,e){e="boolean"!=typeof e||e;const n=t?t.getSettings():null;for(const e of this._items){const n=e===t;if(e.toggleSelect(n),n){const t=!(e instanceof B);this.$fieldLayoutButton.toggleClass("hidden",t),t&&this.selectTab("settings")}}e&&n&&!i().isMobileBrowser()&&setTimeout((()=>n.getFocusInput().focus()),100)},getBlockTypes(){return this._items.filter((t=>t instanceof B))},getGroups(){return this._items.filter((t=>t instanceof C))},selectTab(t){this.$settingsContainer.toggleClass("hidden","settings"!==t),this.$fieldLayoutContainer.toggleClass("hidden","fieldLayout"!==t),this.$settingsButton.toggleClass("is-selected","settings"===t),this.$fieldLayoutButton.toggleClass("is-selected","fieldLayout"===t)},_getNewFieldLayoutHtml(){return this._fieldLayoutHtml.replace(/&quot;uid&quot;:&quot;([a-f0-9-]+)&quot;/,"&quot;uid&quot;:&quot;".concat(m(),"&quot;"))},_updateItemOrder(){const t=[];this._itemSort.$items.each(((e,n)=>{const s=this.getItemByElement(n);if(s){const n=s.getSettings();n&&n.setSortOrder(e+1),t.push(s)}})),this._items=t},_createBlockTypeFrom(t){const e=[...this._templateNs,"blockTypes"],s=w.getNewId(),i=this.getSelectedItem(),o=i?i.getSettings().getSortOrder():-1;if(null===t){const t=new w({childBlockTypes:this.getBlockTypes(),id:s,namespace:[...e,s],sortOrder:this._items.length}),n=new $({blockTypeId:s,html:this._getNewFieldLayoutHtml(),namespace:[...e,s]});this._initBlockType(e,t,n,o)}else{const i=t.getSettings(),a=new w({childBlocks:i.getChildBlocks(),childBlockTypes:this.getBlockTypes(),handle:"".concat(i.getHandle(),"_").concat(Date.now()),id:s,maxBlocks:i.getMaxBlocks(),maxChildBlocks:i.getMaxChildBlocks(),maxSiblingBlocks:i.getMaxSiblingBlocks(),name:i.getName(),namespace:[...e,s],sortOrder:this._items.length,topLevel:i.getTopLevel()}),c=t.getFieldLayout().getConfig();if(c.tabs.length>0){const t=n()('<div class="nc_sidebar_list_item type-spinner"><span class="spinner"></span></div>');this._insertAt(t,o),l().postActionRequest("neo/configurator/render-field-layout",{layout:c},(t=>{const n=new $({blockTypeId:s,html:t.success?t.html:this._getNewFieldLayoutHtml(),namespace:[...e,s]});this.$blockTypesContainer.find(".type-spinner").remove(),this._initBlockType(e,a,n,o)}))}else{const t=new $({blockTypeId:s,html:this._getNewFieldLayoutHtml(),namespace:[...e,s]});this._initBlockType(e,a,t,o)}}},_initBlockType(t,e,n,s){const i=new B({namespace:t,settings:e,fieldLayout:n});this.addItem(i,s),this.selectItem(i),this.selectTab("settings"),i.on("copy.configurator",(()=>this._copyBlockType(i))),i.on("paste.configurator",(()=>this._pasteBlockType())),i.on("clone.configurator",(()=>this._createBlockTypeFrom(i)))},_copyBlockType(t){const e=t.getSettings(),n={childBlocks:e.getChildBlocks(),handle:e.getHandle(),layout:t.getFieldLayout().getConfig(),maxBlocks:e.getMaxBlocks(),maxChildBlocks:e.getMaxChildBlocks(),maxSiblingBlocks:e.getMaxSiblingBlocks(),name:e.getName(),topLevel:e.getTopLevel()};window.localStorage.setItem("neo:copyBlockType",JSON.stringify(n)),this.getBlockTypes().forEach((t=>t.$actionsMenu.find('[data-action="paste"]').parent().removeClass("disabled")))},_pasteBlockType(){const t=window.localStorage.getItem("neo:copyBlockType");if(!t)return;const e=JSON.parse(t),n=this.getBlockTypes().map((t=>t.getSettings().getHandle())),s=Array.isArray(e.childBlocks)?e.childBlocks.filter((t=>n.includes(t))):!!e.childBlocks||[],i=new w({childBlocks:s,childBlockTypes:this.getBlockTypes(),handle:e.handle,maxBlocks:e.maxBlocks,maxChildBlocks:e.maxChildBlocks,maxSiblingBlocks:e.maxSiblingBlocks,name:e.name,topLevel:e.topLevel}),o=new $({html:this._getNewFieldLayoutHtml(),layout:e.layout}),a=new B({settings:i,fieldLayout:o});this._createBlockTypeFrom(a)},_insertAt(t,e){const s=n()(t);e>=0&&e<this._items.length?s.insertAt(e,this.$blockTypesContainer):this.$blockTypesContainer.append(s)},"@newBlockType"(){this._createBlockTypeFrom(null)},"@newGroup"(){const t=[...this._templateNs,"groups"],e=I.getNewId(),n=new I({namespace:[...t,e],sortOrder:this._items.length,id:e}),s=new C({namespace:t,settings:n}),i=this.getSelectedItem(),o=i?i.getSettings().getSortOrder():-1;this.addItem(s,o),this.selectItem(s)},"@selectItem"(t){const e=this.getItemByElement(t.currentTarget);this.selectItem(e)}});var O;const M=null!==(O=window)&&void 0!==O?O:void 0,F=[];M.Neo={Configurator:N,configurators:F,createConfigurator(){const t=new N(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return F.push(t),t}}})();