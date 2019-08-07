"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,
sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz)
{return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),
new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:
null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null)
{$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int",
"I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache
=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack)
{var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if
(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,
0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]
=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.qu=f;}
function $rt_cls(cls){return QB(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return G2(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.ca.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(DJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Cv();}
function $rt_setThread(t){return Gn(t);}
function $rt_createException(message){return ATB(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var F=$rt_throw;var BM=$rt_compare;var AXc=$rt_nullCheck;var D=$rt_cls;var G=$rt_createArray;var AOw=$rt_isInstance;var ANq=$rt_nativeThread;var AT7=$rt_suspending;var AUi=$rt_resuming;var ASM=$rt_invalidPointer;var B=$rt_s;var N=$rt_eraseClinit;var BE=$rt_imul;var P=$rt_wrapException;
function C(){this.bB=null;this.$id$=0;}
function M_(){var a=new C();I(a);return a;}
function RV(b){var c;if(b.bB===null)IS(b);if(b.bB.cI===null)b.bB.cI=Cv();else if(b.bB.cI!==Cv())F(CC(B(0)));c=b.bB;c.cW=c.cW+1|0;}
function GS(b){var c,d;if(!DQ(b)&&b.bB.cI===Cv()){c=b.bB;d=c.cW-1|0;c.cW=d;if(!d)b.bB.cI=null;DQ(b);return;}F(ANf());}
function AVt(b){AD4(b,1);}
function AD4(b,c){var d,$p,$z;$p=0;if(AUi()){var $T=ANq();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.bB===null)IS(b);if(b.bB.cI===null)b.bB.cI=Cv();if(b.bB.cI===Cv()){d=b.bB;d.cW=d.cW+c|0;return;}$p=1;case 1:AF0(b,c);if(AT7()){break _;}return;default:ASM();}}ANq().s(b,c,d,$p);}
function IS(b){b.bB=AUx();}
function AF0(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.lm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.Bx=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AUR(callback);return thread.suspend(function(){try{AUP(b,c,callback);}catch($e){callback.Bx($rt_exception($e));}});}
function AUP(b,c,d){var e,f,g;e=Cv();if(b.bB===null){IS(b);Gn(e);f=b.bB;f.cW=f.cW+c|0;d.lm(null);return;}if(b.bB.cI===null){b.bB.cI=e;Gn(e);f=b.bB;f.cW=f.cW+c|0;d.lm(null);return;}g=b.bB;if(g.d_===null)g.d_=Vq();AH6(g.d_,AWL(e,b,c,d));}
function AVz(b){Wg(b,1);}
function Wg(b,c){var d;if(!DQ(b)&&b.bB.cI===Cv()){d=b.bB;d.cW=d.cW-c|0;if(d.cW>0)return;d.cI=null;if(d.d_!==null&&!Gv(d.d_))AHJ(ATW(b));else DQ(b);return;}F(ANf());}
function ANI(b){var c,d,e;if(!DQ(b)&&b.bB.cI===null){c=b.bB;if(c.d_!==null&&!Gv(c.d_)){d=c.d_;e=AKj(d);if(d===null)c.d_=null;e.mq();}return;}}
function DQ(a){var b,c;b=a.bB;if(b===null)return 1;a:{b:{if(b.cI===null){if(b.d_!==null){c=b.d_;if(!Gv(c))break b;}if(b.uB===null)break a;c=b.uB;if(Gv(c))break a;}}return 0;}T$(a);return 1;}
function T$(a){a.bB=null;}
function I(a){return;}
function Cq(a){return QB(a.constructor);}
function AAP(a){return G6(a);}
function AHW(a,b){return a!==b?0:1;}
function Mv(a){return J().a(Cq(a).B()).a(B(1)).a(Kj(G6(a))).b();}
function G6(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AGI(a){var b,c,d;if(!AOw(a,CI)){b=a;if(b.constructor.$meta.item===null)F(AU$());}c=VU(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function AGj(b){ANI(b);}
function AIJ(b,c,d,e){var f;Gn(b);c.bB.cI=b;f=c.bB;f.cW=f.cW+d|0;e.lm(null);}
function O(){var a=this;C.call(a);a.pj=null;a.n0=null;}
function AXd(){var a=new O();Bc(a);return a;}
function Bc(a){I(a);}
function AMt(a,b){if(!b&&a.pj===null)a.pj=a.V();else if(b&&a.n0===null)a.n0=a.V().f0(1);if(b)return a.n0;return a.pj;}
function Py(){O.call(this);}
function ATe(){var a=new Py();ANe(a);return a;}
function ANe(a){Bc(a);}
function AAS(a){return B9().cJ(32).cJ(9);}
function Nc(){O.call(this);}
function ATY(){var a=new Nc();AQw(a);return a;}
function AQw(a){Bc(a);}
function AH9(a){return B9().bL(0,31).cJ(127);}
function Tg(){var a=this;C.call(a);a.uA=null;a.Dq=0;a.Aq=0;a.Bd=0;a.xb=0;a.B3=0;}
function AUq(){var a=new Tg();AAJ(a);return a;}
function AAJ(a){I(a);}
function AQ0(a){return a.uA;}
function AOd(a,b){a.uA=b;}
function AEF(a){return a.Dq;}
function ARW(a){return a.Aq;}
function AQt(a){return a.Bd;}
function AFV(a){return a.xb;}
function AOy(a){return a.B3;}
function Ke(){}
function E6(){}
function Ed(){C.call(this);}
function AXe(){var a=new Ed();H7(a);return a;}
function H7(a){I(a);}
function AKx(a,b){return a.fi(b,0,b.data.length);}
function C$(){Ed.call(this);this.id=null;}
function AXf(a){var b=new C$();Gy(b,a);return b;}
function Gy(a,b){H7(a);a.id=b;}
function AJT(a,b){return a.fi(b,0,b.data.length);}
function Nq(){var a=this;C$.call(a);a.gj=null;a.fd=0;a.kw=0;a.ep=0;a.cg=0;}
function AVB(a){var b=new Nq();APY(b,a);return b;}
function APY(a,b){Gy(a,b);a.ep=(-1);a.gj=$rt_createByteArray(8192);}
function AR0(a){var b;b=a.id;if(a.gj!==null&&b!==null)return (a.fd-a.cg|0)+b.iY()|0;F(EI(B(2)));}
function Rn(a,b,c){var d,e,f,g,h,i,j;if(a.ep!=(-1)&&(a.cg-a.ep|0)<a.kw){a:{if(!a.ep){d=c.data;e=a.kw;f=d.length;if(e>f){g=f*2|0;if(g>a.kw)g=a.kw;h=$rt_createByteArray(g);W(c,0,h,0,f);a.gj=h;c=a.gj;break a;}}if(a.ep>0){d=c.data;W(c,a.ep,c,0,d.length-a.ep|0);}}d=c.data;a.cg=a.cg-a.ep|0;a.fd=0;a.ep=0;i=b.fi(c,a.cg,d.length-a.cg|0);a.fd=i<=0?a.cg:a.cg+i|0;return i;}j=b.lP(c);if(j>0){a.ep=(-1);a.cg=0;a.fd=j;}return j;}
function AE4(a,b,c,d){var e,f,g,h,i;RV(a);try{e=a.gj;if(e===null)F(EI(B(2)));if(c<=(b.data.length-d|0)&&c>=0&&d>=0){if(!d)return 0;f=a.id;if(f===null)F(EI(B(2)));if(a.cg>=a.fd)g=d;else{h=(a.fd-a.cg|0)>=d?d:a.fd-a.cg|0;W(e,a.cg,b,c,h);a.cg=a.cg+h|0;if(h!=d&&f.iY()){c=c+h|0;g=d-h|0;}else return h;}while(true){if(a.ep==(-1)&&g>=e.data.length){i=f.fi(b,c,g);if(i==(-1))return g!=d?d-g|0:(-1);}else{if(Rn(a,f,e)==(-1))return g!=d?d-g|0:(-1);if(e!==a.gj){e=a.gj;if(e===null)F(EI(B(2)));}i=(a.fd-a.cg|0)>=g?g:a.fd-a.cg
|0;W(e,a.cg,b,c,i);a.cg=a.cg+i|0;}g=g-i|0;if(!g)break;if(!f.iY())return d-g|0;c=c+i|0;}return d;}F(B3());}finally{GS(a);}}
function IF(){var a=this;C.call(a);a.S=0;a.jA=0;a.mz=Long_ZERO;a.F=Long_ZERO;a.jH=0;a.cq=0;a.px=0;a.e2=null;a.n=null;a.cQ=0;a.e_=0;a.oZ=null;a.bt=null;a.du=null;}
var AXg=null;function AUn(){AUn=N(IF);AJP();}
function ATH(a){var b=new IF();Qs(b,a);return b;}
function SA(a){var b;if(a.n===null)return (-2);b=a.n;a.n.f6=Long_ZERO;b.o=Long_ZERO;a.n.bd=null;a.S=14;a.e_=(-1);E$(a.e2);return 0;}
function SC(a){if(a.e2!==null)Kf(a.e2);return 0;}
function Qs(a,b){AUn();I(a);a.mz=Long_fromInt(-1);a.e_=(-1);a.oZ=$rt_createByteArray(4);a.bt=null;a.du=null;a.n=b;}
function Ks(a,b){a.n.bd=null;a.e2=null;a.cq=0;if(b<0)b= -b;else if(b&1073741824){a.cq=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.cq=4;b=b&15;}else{a.cq=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.e2!==null&&a.px!=b){Kf(a.e2);a.e2=null;}a.px=b;a.e2=AS5(a.n,1<<b);SA(a);return 0;}SC(a);return (-2);}
function TI(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;if(a.n!==null&&a.n.bh!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.S){case 6:a.S=13;a.n.bd=B(3);a.jH=0;return (-2);case 7:d=L8(a.e2,d);if(d==(-3)){a.S=13;a.jH=0;continue i;}if(!d)d=c;if(d!=1)break i;a.mz=a.n.ds.qh();E$(a.e2);if(!a.cq){a.S=12;d=c;continue i;}a.S=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=C8(a,2,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ)
{e=$$je;return e.ec;}else{throw $$e;}}a.cQ=a.F.lo&65535;if((a.cQ&255)!=8){a.n.bd=B(4);a.S=13;continue i;}if(a.cQ&57344){a.n.bd=B(5);a.S=13;continue i;}if(a.cQ&512)DN(a,2,a.F);a.S=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o
=Long_add(f.o,Long_fromInt(1));g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_and(Long_fromInt((g[h]&255)<<24),new Long(4278190080, 0));a.S=9;d=c;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_add(i,Long_and(Long_fromInt((g[h]&255)<<16),Long_fromInt(16711680)));a.S=10;d=c;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_add(i,Long_and(Long_fromInt((g[h]
&255)<<8),Long_fromInt(65280)));a.S=11;d=c;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_add(i,Long_and(Long_fromInt(g[h]),Long_fromInt(255)));if(a.cQ)a.F=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.F,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.F,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.F,Long_fromInt(65280)),8)),Long_shl(Long_and(a.F,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.mz.lo!=a.F.lo)a.n.bd
=B(6);else if(a.cQ&&a.bt!==null)a.bt.xU=a.F;a.S=15;d=c;}if(!(a.cq&&a.cQ)){if(a.n.bd===null)break f;if(!a.n.bd.R(B(6)))break f;a.S=13;a.jH=5;continue i;}try{d=C8(a,4,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}if(a.n.bd!==null&&a.n.bd.R(B(6))){a.S=13;a.jH=5;continue i;}if(Long_eq(a.F,Long_and(a.n.f6,new Long(4294967295, 0)))){a.n.bd=null;break f;}a.n.bd=B(7);a.S=13;continue i;}if(!a.cq){a.S=7;continue i;}try{d=C8(a,2,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ)
{e=$$je;return e.ec;}else{throw $$e;}}if(!(a.cq!=4&&!(a.cq&2))&&Long_eq(a.F,Long_fromInt(35615))){if(a.cq==4)a.cq=2;a.n.ds=ADm();DN(a,2,a.F);if(a.bt===null)a.bt=AVr();a.S=23;continue i;}if(a.cq&2){a.S=13;a.n.bd=B(8);continue i;}a.cQ=0;a.jA=a.F.lo&255;j=Long_shr(a.F,8).lo&255;if(!(a.cq&1&&!(((a.jA<<8)+j|0)%31|0))&&(a.jA&15)!=8){if(a.cq!=4){a.S=13;a.n.bd=B(8);continue i;}f=a.n;f.l=f.l-2|0;f=a.n;f.q=f.q+2|0;f=a.n;f.o=Long_sub(f.o,Long_fromInt(2));a.cq=0;a.S=7;continue i;}if((a.jA&15)!=8){a.S=13;a.n.bd=B(4);continue i;}if
(a.cq==4)a.cq=1;if(((a.jA>>4)+8|0)>a.px){a.S=13;a.n.bd=B(9);continue i;}a.n.ds=ANP();if(j&32){a.S=2;break d;}a.S=7;continue i;}break m;}try{d=C8(a,4,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}if(a.bt!==null)a.bt.yZ=a.F;if(a.cQ&512)DN(a,4,a.F);a.S=17;}try{d=C8(a,2,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}if(a.bt!==null){a.bt.BH=a.F.lo&255;a.bt.vN=a.F.lo>>8&255;}if(a.cQ&512)DN(a,2,a.F);a.S=18;}if(a.cQ&1024){try{d=C8(a,
2,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}if(a.bt!==null)a.bt.i6=$rt_createByteArray(a.F.lo&65535);if(a.cQ&512)DN(a,2,a.F);}else if(a.bt!==null)a.bt.i6=null;a.S=19;}if(a.cQ&1024)x:{try{d=PN(a,d,c);if(a.bt===null)break x;k=a.du.o7();g=k.data;a.du=null;h=g.length;if(h!=a.bt.i6.data.length){a.n.bd=B(10);a.S=13;continue i;}W(k,0,a.bt.i6,0,h);break x;}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}}else if(a.bt!==null)a.bt.i6=null;a.S
=20;}y:{if(a.cQ&2048){z:{try{d=HN(a,d,c);if(a.bt===null)break z;a.bt.qK=a.du.o7();break z;}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;break h;}else{throw $$e;}}}try{a.du=null;break y;}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;break h;}else{throw $$e;}}}else if(a.bt!==null)a.bt.qK=null;}a.S=21;}ba:{if(a.cQ&4096){bb:{try{d=HN(a,d,c);if(a.bt===null)break bb;a.bt.ur=a.du.o7();break bb;}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;break g;}else{throw $$e;}}}try{a.du=null;break ba;}catch
($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;break g;}else{throw $$e;}}}else if(a.bt!==null)a.bt.ur=null;}a.S=22;}if(a.cQ&512){try{d=C8(a,2,d,c);}catch($$e){$$je=P($$e);if($$je instanceof BQ){e=$$je;return e.ec;}else{throw $$e;}}if(a.bt!==null)a.bt.DK=Long_and(a.F,Long_fromInt(65535)).lo;if(Long_ne(a.F,Long_and(a.n.ds.qh(),Long_fromInt(65535)))){a.S=13;a.n.bd=B(11);a.jH=5;continue;}}a.n.ds=ADm();a.S=7;}return d;}return e.ec;}return e.ec;}a.S=12;}return 1;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,
Long_fromInt(1));g=a.n.bh.data;f=a.n;l=f.l;f.l=l+1|0;a.F=Long_and(Long_fromInt((g[l]&255)<<24),new Long(4278190080, 0));a.S=3;d=c;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;l=f.l;f.l=l+1|0;a.F=Long_add(i,Long_and(Long_fromInt((g[l]&255)<<16),Long_fromInt(16711680)));a.S=4;d=c;}if(!a.n.q)return d;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_add(i,Long_and(Long_fromInt((g[h]&255)<<8),Long_fromInt(65280)));a.S
=5;}if(!a.n.q)return c;f=a.n;f.q=f.q-1|0;f=a.n;f.o=Long_add(f.o,Long_fromInt(1));i=a.F;g=a.n.bh.data;f=a.n;h=f.l;f.l=h+1|0;a.F=Long_add(i,Long_and(Long_fromInt(g[h]),Long_fromInt(255)));a.n.ds.wx(a.F);a.S=6;return 2;}if(b==4&&a.S==14)return 0;return (-2);}
function C8(a,b,c,d){var e,f,g,h;if(a.e_==(-1)){a.e_=b;a.F=Long_ZERO;}while(true){if(a.e_<=0){if(b==2)a.F=Long_and(a.F,Long_fromInt(65535));else if(b==4)a.F=Long_and(a.F,new Long(4294967295, 0));a.e_=(-1);return c;}if(!a.n.q)break;e=a.n;e.q=e.q-1|0;e=a.n;e.o=Long_add(e.o,Long_fromInt(1));f=a.F;g=a.n.bh.data;e=a.n;h=e.l;e.l=h+1|0;a.F=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.e_|0)*8|0)));a.e_=a.e_-1|0;c=d;}F(T6(a,c));}
function HN(a,b,c){var d,e;if(a.du===null)a.du=AH7();while(true){if(!a.n.q)F(T6(a,b));d=a.n;d.q=d.q-1|0;d=a.n;d.o=Long_add(d.o,Long_fromInt(1));e=a.n.bh.data[a.n.l];if(e)a.du.rN(a.n.bh,a.n.l,1);a.n.ds.hM(a.n.bh,a.n.l,1);d=a.n;d.l=d.l+1|0;if(!e)break;b=c;}return c;}
function PN(a,b,c){var d;if(a.du===null)a.du=AH7();while(Long_gt(a.F,Long_ZERO)){if(!a.n.q)F(T6(a,b));d=a.n;d.q=d.q-1|0;d=a.n;d.o=Long_add(d.o,Long_fromInt(1));a.du.rN(a.n.bh,a.n.l,1);a.n.ds.hM(a.n.bh,a.n.l,1);d=a.n;d.l=d.l+1|0;a.F=Long_sub(a.F,Long_fromInt(1));b=c;}return b;}
function DN(a,b,c){var d;d=0;while(d<b){a.oZ.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.n.ds.hM(a.oZ,0,b);}
function AJP(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);AXg=b;}
function Il(){}
function BI(){}
function BC(){}
function Bv(){var a=this;C.call(a);a.ri=null;a.vw=0;}
function AXh(a,b){var c=new Bv();Ck(c,a,b);return c;}
function Ck(a,b,c){I(a);a.ri=b;a.vw=c;}
function CJ(a){return a.vw;}
function AD8(a){return a.ri.b();}
function C2(){Bv.call(this);}
var AXi=null;var AXj=null;var AXk=null;var AXl=null;var AXm=null;function Dd(){Dd=N(C2);AHP();}
function Ih(a,b){var c=new C2();UQ(c,a,b);return c;}
function UQ(a,b,c){Dd();Ck(a,b,c);}
function AHP(){var b,c;AXi=Ih(B(12),0);AXj=Ih(B(13),1);AXk=Ih(B(14),2);AXl=Ih(B(15),3);b=G(C2,4);c=b.data;c[0]=AXi;c[1]=AXj;c[2]=AXk;c[3]=AXl;AXm=b;}
function CS(){C.call(this);}
function AXn(){var a=new CS();J4(a);return a;}
function J4(a){I(a);}
function CT(){CS.call(this);this.gc=0;}
var AXo=null;var AXp=null;function Co(){Co=N(CT);ANV();}
function S4(a){var b=new CT();FF(b,a);return b;}
function FF(a,b){Co();J4(a);a.gc=b;}
function M1(b,c){Co();if(!(c>=2&&c<=36))c=10;return AWK(20).ra(b,c).b();}
function Kj(b){Co();return VV(b,4);}
function Jn(b){Co();return M1(b,10);}
function EG(b,c){var d,e,f,g,h;Co();if(c>=2&&c<=36){if(b!==null&&!b.b9()){a:{d=0;e=0;switch(b.g(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.h())F(GY());while(e<b.h()){g=e+1|0;h=PB(b.g(e));if(h<0)F(Ga(J().a(B(16)).a(b).b()));if(h>=c)F(Ga(J().a(B(17)).j(c).a(B(18)).a(b).b()));f=BE(c,f)+h|0;if(f<0){if(g==b.h()&&f==(-2147483648)&&d)return (-2147483648);F(Ga(J().a(B(19)).a(b).b()));}e=g;}if(d)f= -f;return f;}F(Ga(B(20)));}F(Ga(J().a(B(21)).j(c).b()));}
function Bn(b){Co();return EG(b,10);}
function Hq(b){Co();if(b>=(-128)&&b<=127){LD();return AXp.data[b+128|0];}return S4(b);}
function LD(){var b;Co();a:{if(AXp===null){AXp=G(CT,256);b=0;while(true){if(b>=AXp.data.length)break a;AXp.data[b]=S4(b-128|0);b=b+1|0;}}}}
function AQj(a){return Jn(a.gc);}
function VD(a){return a.gc>>>4^a.gc<<28^a.gc<<8^a.gc>>>24;}
function ARj(a,b){if(a===b)return 1;return b instanceof CT&&b.gc==a.gc?1:0;}
function Hp(b){var c,d,e;Co();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function BS(b){var c,d,e;Co();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function NY(b,c){var d;Co();d=c&31;return b<<d|b>>>(32-d|0);}
function ANV(){AXo=D($rt_intcls());}
function Dx(){C.call(this);}
var AXq=null;var AXr=null;var AXs=null;var AXt=null;var AXu=null;function ATE(){ATE=N(Dx);AFu();}
function AFu(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AXq=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AXr=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AXs=b;AXt=AVh();AXu=AUb();}
function Bf(){var a=this;C.call(a);a.i=null;a.cG=0;a.nA=null;a.vf=0;}
var AXv=0;function MJ(){MJ=N(Bf);ARC();}
function AXw(){var a=new Bf();BL(a);return a;}
function AXx(a){var b=new Bf();F1(b,a);return b;}
function BL(a){var b,c;MJ();I(a);b=new CT;c=AXv;AXv=c+1|0;FF(b,c);a.nA=b.b();}
function F1(a,b){var c,d;MJ();I(a);c=new CT;d=AXv;AXv=d+1|0;FF(c,d);a.nA=c.b();a.i=b;}
function ER(a,b,c,d){var e;e=d.L();while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function EY(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AAc(a,b){a.vf=b;}
function Y2(a){return a.vf;}
function AIC(a){return J().a(B(22)).a(a.nA).a(B(23)).a(a.B()).a(B(24)).b();}
function AMr(a){return a.xk();}
function ANG(a){return a.i;}
function JT(a,b){a.i=b;}
function APk(a,b){return 1;}
function AQV(a){return null;}
function KG(a){var b;a.cG=1;if(a.i!==null){if(!a.i.cG){b=a.i.gG();if(b!==null){a.i.cG=1;a.i=b;}a.i.ev();}else if(a.i instanceof D2&&a.i.dA.ng)a.i=a.i.i;}}
function ARC(){AXv=1;}
function Bl(){var a=this;Bf.call(a);a.bU=null;a.dA=null;a.bp=0;}
function AXy(){var a=new Bl();B5(a);return a;}
function AUJ(a,b){var c=new Bl();QM(c,a,b);return c;}
function B5(a){BL(a);}
function QM(a,b,c){BL(a);a.bU=b;a.dA=c;a.bp=c.iF();}
function ADQ(a,b,c,d){var e,f,g,h,i;if(a.bU===null)return (-1);e=d.g7(a.bp);d.eK(a.bp,b);f=a.bU.bm();g=0;while(true){if(g>=f){d.eK(a.bp,e);return (-1);}h=a.bU.t(g);i=h.d(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AKL(a,b){a.dA.T(b);}
function AFO(a){return B(25);}
function AG6(a,b){var c;a:{if(a.bU!==null){c=a.bU.lQ();while(true){if(!c.j$())break a;if(!c.ks().cn(b))continue;else return 1;}}}return 0;}
function ALG(a,b){var c,d;a:{if(b.k$(a.bp)>=0){c=b.g7(a.bp);d=a.bp;if(c==b.k$(d)){c=0;break a;}}c=1;}return c;}
function ZJ(a){var b,c,d,e;a.cG=1;if(a.dA!==null&&!a.dA.cG)a.dA.ev();a:{if(a.bU!==null){b=a.bU.bm();c=0;while(true){if(c>=b)break a;d=a.bU.t(c);e=d.gG();if(e===null)e=d;else{d.cG=1;a.bU.iq(c);a.bU.Dy(c,e);}if(!e.cG)e.ev();c=c+1|0;}}}if(a.i!==null)KG(a);}
function D2(){Bl.call(this);this.c8=null;}
function AVv(a,b){var c=new D2();MW(c,a,b);return c;}
function MW(a,b,c){B5(a);a.c8=b;a.dA=c;a.bp=c.iF();}
function Wi(a,b,c,d){var e,f;e=d.g7(a.bp);d.eK(a.bp,b);f=a.c8.d(b,c,d);if(f>=0)return f;d.eK(a.bp,e);return (-1);}
function AHv(a,b,c,d){var e;e=a.c8.cM(b,c,d);if(e>=0)d.eK(a.bp,e);return e;}
function AM8(a,b,c,d,e){var f;f=a.c8.cP(b,c,d,e);if(f>=0)e.eK(a.bp,f);return f;}
function AGX(a,b){return a.c8.cn(b);}
function AKO(a){var b;b=AVq(a);a.i=b;return b;}
function AQ1(a){var b;a.cG=1;if(a.dA!==null&&!a.dA.cG)a.dA.ev();if(a.c8!==null&&!a.c8.cG){b=a.c8.gG();if(b!==null){a.c8.cG=1;a.c8=b;}a.c8.ev();}}
function Jd(){}
function D8(){var a=this;C.call(a);a.C9=Long_ZERO;a.AD=Long_ZERO;a.ya=null;a.zf=null;a.xD=0;a.Dv=null;}
var AXz=null;var AXA=null;var AXB=Long_ZERO;var AXC=0;function Kd(){Kd=N(D8);XX();}
function AUU(a){var b=new D8();L7(b,a);return b;}
function AXD(a,b){var c=new D8();JC(c,a,b);return c;}
function L7(a,b){Kd();JC(a,null,b);}
function JC(a,b,c){var d;Kd();I(a);a.ya=M_();a.xD=1;a.zf=c;a.Dv=b;d=AXB;AXB=Long_add(d,Long_fromInt(1));a.C9=d;}
function Gn(b){Kd();if(AXA!==b)AXA=b;AXA.AD=Si();}
function Cv(){Kd();return AXA;}
function XX(){AXz=AUU(B(26));AXA=AXz;AXB=Long_fromInt(1);AXC=1;}
function F5(){O.call(this);}
function AWv(){var a=new F5();MQ(a);return a;}
function MQ(a){Bc(a);}
function MH(a){return B9().bL(97,122).bL(65,90);}
function K4(){D2.call(this);}
function AVq(a){var b=new K4();AMc(b,a);return b;}
function AMc(a,b){MW(a,b.c8,b.dA);}
function ACY(a,b,c,d){var e,f,g;e=0;f=d.L();a:{while(true){if(b>f){b=e;break a;}g=d.g7(a.bp);d.eK(a.bp,b);e=a.c8.d(b,c,d);if(e>=0)break;d.eK(a.bp,g);b=b+1|0;}}return b;}
function AR_(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=e.g7(a.bp);e.eK(a.bp,c);f=a.c8.d(c,d,e);if(f>=0)break;e.eK(a.bp,g);c=c+(-1)|0;}}return c;}
function ZX(a){return null;}
function BO(){}
function AC9(b){return b;}
function K5(){C.call(this);}
function AIP(b){return b;}
function Gv(b){return b.length?0:1;}
function AH6(b,c){var d;d=AIP(c);b.push(d);}
function AKj(b){return b.shift();}
function Fu(){O.call(this);}
function AVg(){var a=new Fu();Nr(a);return a;}
function Nr(a){Bc(a);}
function PA(a){return B9().bL(97,122).bL(65,90).bL(48,57).cJ(95);}
function SP(){Fu.call(this);}
function AS9(){var a=new SP();AET(a);return a;}
function AET(a){Nr(a);}
function AIR(a){var b;b=PA(a).f0(1);b.bi=1;return b;}
function Cl(){Bv.call(this);}
var AXE=null;var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AXJ=null;var AXK=null;function Ey(){Ey=N(Cl);AAa();}
function E9(a,b){var c=new Cl();LS(c,a,b);return c;}
function LS(a,b,c){Ey();Ck(a,b,c);}
function AAa(){var b,c;AXE=E9(B(27),0);AXF=E9(B(28),1);AXG=E9(B(29),2);AXH=E9(B(30),3);AXI=E9(B(14),4);AXJ=E9(B(31),5);b=G(Cl,6);c=b.data;c[0]=AXE;c[1]=AXF;c[2]=AXG;c[3]=AXH;c[4]=AXI;c[5]=AXJ;AXK=b;}
function Bo(){Bf.call(this);this.bW=0;}
function AXL(a){var b=new Bo();Le(b,a);return b;}
function AXM(){var a=new Bo();Cc(a);return a;}
function Le(a,b){F1(a,b);a.bW=1;a.qH(1);}
function Cc(a){BL(a);a.bW=1;}
function ARI(a,b,c,d){var e;if((b+a.cr()|0)>d.L()){d.eh=1;return (-1);}e=a.bO(b,c);if(e<0)return (-1);return a.i.d(b+e|0,c,d);}
function AOm(a){return a.bW;}
function AFy(a,b){return 1;}
function Lf(){Bo.call(this);this.hQ=null;}
function AXb(a){var b=new Lf();AEc(b,a);return b;}
function AEc(a,b){Cc(a);a.hQ=b.b();a.bW=b.h();}
function ANd(a,b,c){var d,e,f,g;d=0;while(true){if(d>=a.hQ.h())return a.hQ.h();e=a.hQ.g(d);f=b+d|0;if(e!=c.g(f)){g=a.hQ;if(EP(g.g(d))!=c.g(f))break;}d=d+1|0;}return (-1);}
function AO0(a){return J().a(B(32)).a(a.hQ).b();}
function Et(){}
function CW(){var a=this;C.call(a);a.vc=null;a.tq=null;a.lA=0;a.mu=0;}
function AXN(){var a=new CW();N_(a);return a;}
function AXO(a){var b=new CW();J_(b,a);return b;}
function AXP(a,b){var c=new CW();Pt(c,a,b);return c;}
function AXQ(a){var b=new CW();JS(b,a);return b;}
function N_(a){a.lA=1;a.mu=1;a.l5();}
function J_(a,b){a.lA=1;a.mu=1;a.l5();a.vc=b;}
function Pt(a,b,c){a.lA=1;a.mu=1;a.l5();a.vc=b;a.tq=c;}
function JS(a,b){a.lA=1;a.mu=1;a.l5();a.tq=b;}
function ACM(a){return a;}
function D0(){CW.call(this);}
function AXR(a){var b=new D0();Ne(b,a);return b;}
function AXS(a){var b=new D0();Q0(b,a);return b;}
function Ne(a,b){J_(a,b);}
function Q0(a,b){JS(a,b);}
function Ew(){D0.call(this);}
function AXT(a){var b=new Ew();KR(b,a);return b;}
function KR(a,b){Ne(a,b);}
function Po(){var a=this;C.call(a);a.bb=0;a.b4=null;a.bT=0;a.ee=0;a.h5=0;a.wG=0.0;a.ki=0;a.fO=0;a.d6=0;a.jy=0;a.oe=0;}
function AWr(){var a=new Po();ABq(a);return a;}
function AXU(a,b){var c=new Po();Nn(c,a,b);return c;}
function ABq(a){Nn(a,51,0.800000011920929);}
function Nn(a,b,c){var d;I(a);if(b<0)F(U(J().a(B(33)).j(b).b()));d=EV(B6(b/c)|0);if(d>1073741824)F(U(J().a(B(34)).j(d).b()));a.bT=d;if(c<=0.0)F(U(J().a(B(35)).dJ(c).b()));a.wG=c;a.d6=a.bT*c|0;a.fO=a.bT-1|0;a.ki=31-BS(a.bT)|0;a.jy=S(3,(B6(CQ(a.bT))|0)*2|0);a.oe=S(Bd(a.bT,8),(CL(a.bT)|0)/8|0);a.b4=$rt_createIntArray(a.bT+a.jy|0);}
function AAE(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!b){if(a.h5)return 0;a.h5=1;a.bb=a.bb+1|0;return 1;}c=a.b4;d=c.data;e=b&a.fO;f=d[e];if(f==b)return 0;g=EC(a,b);h=d[g];if(h==b)return 0;i=EU(a,b);j=d[i];if(j==b)return 0;k=a.bT;l=k+a.ee|0;while(true){if(k>=l){if(!f){d[e]=b;m=a.bb;a.bb=m+1|0;if(m>=a.d6)Cb(a,a.bT<<1);return 1;}if(!h){d[g]=b;m=a.bb;a.bb=m+1|0;if(m>=a.d6)Cb(a,a.bT<<1);return 1;}if(j){Iq(a,b,e,f,g,h,i,j);return 1;}d[i]=b;m=a.bb;a.bb=m+1|0;if(m>=a.d6)Cb(a,a.bT<<1);return 1;}if(d[k]==b)break;k=k+1|0;}return 0;}
function H9(a,b){var c,d,e,f,g,h,i;if(!b){a.h5=1;return;}c=b&a.fO;d=a.b4.data[c];if(!d){a.b4.data[c]=b;e=a.bb;a.bb=e+1|0;if(e>=a.d6)Cb(a,a.bT<<1);return;}f=EC(a,b);g=a.b4.data[f];if(!g){a.b4.data[f]=b;e=a.bb;a.bb=e+1|0;if(e>=a.d6)Cb(a,a.bT<<1);return;}h=EU(a,b);i=a.b4.data[h];if(i){Iq(a,b,c,d,f,g,h,i);return;}a.b4.data[h]=b;e=a.bb;a.bb=e+1|0;if(e>=a.d6)Cb(a,a.bT<<1);}
function Iq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=a.b4;j=a.fO;k=0;l=a.oe;while(true){a:{switch(ED(2)){case 0:break;case 1:i.data[e]=b;d=f;break a;default:i.data[g]=b;d=h;break a;}i.data[c]=b;}m=i.data;c=d&j;n=m[c];if(!n){m[c]=d;n=a.bb;a.bb=n+1|0;if(n>=a.d6)Cb(a,a.bT<<1);return;}e=EC(a,d);f=m[e];if(!f){m[e]=d;n=a.bb;a.bb=n+1|0;if(n>=a.d6)Cb(a,a.bT<<1);return;}g=EU(a,d);h=m[g];if(!h){m[g]=d;o=a.bb;a.bb=o+1|0;if(o>=a.d6)Cb(a,a.bT<<1);return;}k=k+1|0;if(k==l)break;b=d;d=n;}RA(a,d);}
function RA(a,b){var c;if(a.ee==a.jy){Cb(a,a.bT<<1);H9(a,b);return;}c=a.bT+a.ee|0;a.b4.data[c]=b;a.ee=a.ee+1|0;a.bb=a.bb+1|0;}
function APC(a,b){var c,d,e;if(!b){if(!a.h5)return 0;a.h5=0;a.bb=a.bb-1|0;return 1;}c=b&a.fO;if(a.b4.data[c]==b){a.b4.data[c]=0;a.bb=a.bb-1|0;return 1;}d=EC(a,b);if(a.b4.data[d]==b){a.b4.data[d]=0;a.bb=a.bb-1|0;return 1;}e=EU(a,b);if(a.b4.data[e]!=b)return a.xC(b);a.b4.data[e]=0;a.bb=a.bb-1|0;return 1;}
function AEG(a,b){var c,d,e;c=a.b4;d=a.bT;e=d+a.ee|0;while(d<e){if(c.data[d]==b){a.nL(d);a.bb=a.bb-1|0;return 1;}d=d+1|0;}return 0;}
function AC1(a,b){var c;a.ee=a.ee-1|0;c=a.bT+a.ee|0;if(b<c)a.b4.data[b]=a.b4.data[c];}
function Cb(a,b){var c,d,e,f,g,h,i;c=a.bT+a.ee|0;a.bT=b;a.d6=b*a.wG|0;a.fO=b-1|0;a.ki=31-BS(b)|0;d=b;a.jy=S(3,(B6(CQ(d))|0)*2|0);a.oe=S(Bd(b,8),(CL(d)|0)/8|0);e=a.b4;a.b4=$rt_createIntArray(b+a.jy|0);f=a.bb;g=!a.h5?0:1;a:{a.bb=g;a.ee=0;if(f>0){h=0;while(true){if(h>=c)break a;i=e.data[h];if(i)H9(a,i);h=h+1|0;}}}}
function EC(a,b){var c;c=BE(b,(-1262997959));return (c^c>>>a.ki)&a.fO;}
function EU(a,b){var c;c=BE(b,(-825114047));return (c^c>>>a.ki)&a.fO;}
function Bz(){CW.call(this);}
function AXV(){var a=new Bz();Dy(a);return a;}
function AXW(a,b){var c=new Bz();Lq(c,a,b);return c;}
function AXX(a){var b=new Bz();Ez(b,a);return b;}
function AXY(a){var b=new Bz();Lc(b,a);return b;}
function Dy(a){N_(a);}
function Lq(a,b,c){Pt(a,b,c);}
function Ez(a,b){J_(a,b);}
function Lc(a,b){JS(a,b);}
function Bh(){Bz.call(this);}
function AXZ(){var a=new Bh();B2(a);return a;}
function AX0(a,b){var c=new Bh();Mz(c,a,b);return c;}
function ATB(a){var b=new Bh();Es(b,a);return b;}
function B2(a){Dy(a);}
function Mz(a,b,c){Lq(a,b,c);}
function Es(a,b){Ez(a,b);}
function Dh(){Bh.call(this);}
function B3(){var a=new Dh();HD(a);return a;}
function Y(a){var b=new Dh();OM(b,a);return b;}
function HD(a){B2(a);}
function OM(a,b){Es(a,b);}
function T_(){Dh.call(this);}
function HI(){var a=new T_();AOx(a);return a;}
function AOx(a){HD(a);}
function Hc(){var a=this;Bh.call(a);a.C_=null;a.CK=null;}
function AU9(a,b,c){var d=new Hc();ACG(d,a,b,c);return d;}
function ACG(a,b,c,d){Es(a,b);a.C_=c;a.CK=d;}
function Ik(){C.call(this);}
var AX1=null;function Ib(){Ib=N(Ik);AJy();}
function Ta(b,c){var d;Ib();d=AX1.e5(b);if(d===null){d=AUX(4,c,b);AX1.Q(b,d);}return d;}
function Fa(b){Ib();return Ta(b,100);}
function RL(b){Ib();return Fa(b).g8();}
function Qt(b,c){var d,e,f,g;Ib();if(b===null)F(U(B(36)));d=null;e=0;f=b.u;while(e<f){a:{g=b.t(e);if(g!==null){if(d===null){d=AX1.e5(Cq(g));if(d===null)break a;}d.g$(g);if(!c)d=null;}}e=e+1|0;}}
function AJy(){AX1=IP();}
function GH(){var a=this;C.call(a);a.y_=null;a.xd=0.0;a.zZ=0.0;a.gq=null;a.hh=null;a.lV=null;a.hJ=0;}
function AX2(a,b,c){var d=new GH();UB(d,a,b,c);return d;}
function UB(a,b,c,d){I(a);a.gq=B(37);Fl();a.hh=AX3;a.lV=AX3;if(c<=0.0)F(U(J().a(B(38)).dJ(c).b()));if(d>0.0){a.y_=b;a.xd=c;a.zZ=d;return;}F(U(J().a(B(39)).dJ(d).b()));}
function Ti(a,b){if(b!==null){a.hh=b;a.CZ(b);return a;}F(U(B(40)));}
function APy(a,b){return;}
function QA(a,b){if(b!==null){a.lV=b;a.y4(b);return a;}F(U(B(40)));}
function AEh(a,b){return;}
function NO(a,b,c,d){var e,f,g,$$je;if(!(a.hJ==2&&!d)&&a.hJ!=3){a.hJ=d?2:1;while(true){try{e=a.xr(b,c);}catch($$e){$$je=P($$e);if($$je instanceof Bh){f=$$je;F(ATG(f));}else{throw $$e;}}if(e.uw())return e;if(e.tM()){if(d&&Ci(b)){g=a.hh;Fl();if(g===AX3)return Dv(X(b));if(X(c)<=a.gq.h())return AX4;Bw(b,CD(b)+X(b)|0);if(a.hh===AX5)FK(c,a.gq);}return e;}if(e.vJ()){g=a.hh;Fl();if(g===AX3)return e;if(a.hh===AX5){if(X(c)<a.gq.h())return AX4;FK(c,a.gq);}Bw(b,CD(b)+e.h()|0);}else if(e.s7()){g=a.lV;Fl();if(g===AX3)break;if
(a.lV===AX5){if(X(c)<a.gq.h())return AX4;FK(c,a.gq);}Bw(b,CD(b)+e.h()|0);}}return e;}F(Gl());}
function Pe(a,b){if(a.hJ!=3&&a.hJ!=2)F(Gl());a.hJ=3;return a.yY(b);}
function AIS(a,b){CE();return AX6;}
function HO(){}
function Px(){var a=this;C.call(a);a.yU=null;a.i_=null;a.mZ=null;a.ea=null;a.hi=null;a.rr=null;a.rG=null;a.n1=null;a.w3=null;a.zV=null;a.qm=0;a.mo=null;a.zC=null;a.Dl=null;a.qc=null;a.mF=0;a.nN=0;}
function AWY(a,b){var c=new Px();W7(c,a,b);return c;}
function W7(a,b,c){I(a);a.yU=window;a.qm=1;a.mo=CK();a.zC=CK();a.Dl=IP();a.mF=(-1);a.nN=1;a.i_=b;a.mZ=c;}
function ADF(a){Lw(AWZ(a));}
function Sn(a){a.ea=a.mZ.De();a.hi=ASD(a.ea,a.mZ);a.rr=AU7();a.rG=AV6();a.n1=ATU(a.ea);a.w3=ATF();a.qc=AJ$();a.zV=AUg();AX7=a;AX8=a.hi;AX9=a.hi.qO();AX$=a.hi.qO();AX_=a.rr;AYa=a.w3;AYb=a.rG;AYc=a.n1;a.i_.zk();a.i_.j6(a.ea.width,a.ea.height);HS(a);}
function HS(a){setTimeout(BB(AWf(a),"onTimer"),10);}
function Us(a){var b,c,d;a.hi.bA();b=a.hi;b.p1=Long_add(b.p1,Long_fromInt(1));c=a.mo.u;d=0;while(d<c){a.mo.t(d).mq();d=d+1|0;}if(c>0)a.mo.hn(0,c-1|0);if(!(a.mF==a.ea.width&&a.nN==a.ea.height)){a.i_.j6(a.ea.width,a.ea.height);a.mF=a.ea.width;a.nN=a.ea.height;}a.i_.lg();a.n1.eE();HS(a);}
function AB$(a,b,c){if(a.qm>2)a.qc.pO(b,c);}
function AJU(a,b,c){if(a.qm>1)a.qc.kx(b,c);}
function AP8(a){Ey();return AXI;}
function K9(a){Us(a);}
function ARO(b){Sn(b);}
function DF(){}
function Ia(){var a=this;C.call(a);a.Bu=null;a.Az=0;a.xf=0;a.BB=0;}
function ATn(){var a=new Ia();YL(a);return a;}
function YL(a){I(a);a.Az=0;a.xf=1;a.BB=0;a.Bu=E4();}
function Ep(){var a=this;Bl.call(a);a.qW=0;a.is=0;}
function AWX(a,b){var c=new Ep();HF(c,a,b);return c;}
function HF(a,b,c){B5(a);a.qW=b;a.is=c;}
function Xb(a,b,c,d){var e,f,g,h;e=a.iB(d);if(e!==null&&(b+e.h()|0)<=d.L()){f=0;while(true){if(f>=e.h()){d.bC(a.is,e.h());return a.i.d(b+e.h()|0,c,d);}g=e.g(f);h=b+f|0;if(g!=c.g(h)&&EP(e.g(f))!=c.g(h))break;f=f+1|0;}return (-1);}return (-1);}
function ALM(a,b){a.i=b;}
function AAu(a,b){var c;c=b.Bq(a.qW);return c;}
function WP(a){return J().a(B(41)).j(a.bp).b();}
function AMj(a,b){var c;c=!b.ez(a.is)?0:1;b.bC(a.is,(-1));return c;}
function Ov(){Ep.call(this);this.xW=0;}
function AUk(a,b){var c=new Ov();ADd(c,a,b);return c;}
function ADd(a,b,c){HF(a,b,c);}
function AHq(a,b,c,d){var e,f,g,h;e=a.iB(d);if(e!==null&&(b+e.h()|0)<=d.L()){f=0;while(true){if(f>=e.h()){d.bC(a.is,e.h());return a.i.d(b+e.h()|0,c,d);}g=C7(CO(e.g(f)));h=b+f|0;h=CO(c.g(h));if(g!=C7(h))break;f=f+1|0;}return (-1);}return (-1);}
function YI(a){return J().a(B(42)).j(a.xW).b();}
function Io(){C.call(this);}
var AYd=null;function AW6(){AW6=N(Io);ANj();}
function ANj(){AYd=$rt_createByteArray(0);}
function Fm(b){AW6();}
function FS(){C.call(this);this.By=null;}
var AYe=null;var AYf=null;function E0(){E0=N(FS);ARZ();}
function ABT(a){var b=new FS();Ku(b,a);return b;}
function Ku(a,b){E0();I(a);a.By=b;}
function Dp(){E0();return AYe;}
function ARZ(){AYe=ABT(B(43));AYf=ABT(B(44));}
function DO(){Bv.call(this);}
var AYg=null;var AYh=null;var AYi=null;function KY(){KY=N(DO);ZQ();}
function AK6(a,b){var c=new DO();S$(c,a,b);return c;}
function S$(a,b,c){KY();Ck(a,b,c);}
function ZQ(){var b,c;AYg=AK6(B(45),0);AYh=AK6(B(46),1);b=G(DO,2);c=b.data;c[0]=AYg;c[1]=AYh;AYi=b;}
function OY(){var a=this;O.call(a);a.pH=0;a.mA=0;a.sb=0;}
function Bj(a,b){var c=new OY();Z4(c,a,b);return c;}
function AUS(a,b,c){var d=new OY();AQG(d,a,b,c);return d;}
function Z4(a,b,c){Bc(a);a.mA=c;a.pH=b;}
function AQG(a,b,c,d){Bc(a);a.sb=d;a.mA=c;a.pH=b;}
function ACX(a){var b;b=AWP(a.pH);if(a.sb)b.bN.lU(0,2048);b.bi=a.mA;return b;}
function Is(){}
function B$(){}
function G5(){}
function Cr(){Bf.call(this);this.Z=null;}
function AYj(a,b,c){var d=new Cr();EK(d,a,b,c);return d;}
function EK(a,b,c,d){F1(a,c);a.Z=b;a.qH(d);}
function ARV(a){return a.Z;}
function AM_(a,b){return !a.Z.cn(b)&&!a.i.cn(b)?0:1;}
function APJ(a,b){return 1;}
function AIb(a){var b;a.cG=1;if(a.i!==null&&!a.i.cG){b=a.i.gG();if(b!==null){a.i.cG=1;a.i=b;}a.i.ev();}if(a.Z!==null){if(!a.Z.cG){b=a.Z.gG();if(b!==null){a.Z.cG=1;a.Z=b;}a.Z.ev();}else if(a.Z instanceof D2&&a.Z.dA.ng)a.Z=a.Z.i;}}
function O8(){Cr.call(this);}
function AUa(a,b,c){var d=new O8();Xj(d,a,b,c);return d;}
function Xj(a,b,c,d){EK(a,b,c,d);}
function ARS(a,b,c,d){var e;e=d.L();if(e>b)return a.i.cP(b,e,c,d);return a.i.d(b,c,d);}
function AOc(a,b,c,d){var e;e=d.L();if(a.i.cP(b,e,c,d)>=0)return b;return (-1);}
function ALn(a){return B(47);}
function BR(){var a=this;Bf.call(a);a.ng=0;a.iD=0;}
var AYk=null;function GW(){GW=N(BR);ACo();}
function AVX(a){var b=new BR();Dn(b,a);return b;}
function Dn(a,b){GW();BL(a);a.iD=b;}
function XN(a,b,c,d){var e,f;e=d.k$(a.iD);d.pG(a.iD,b);f=a.i.d(b,c,d);if(f<0)d.pG(a.iD,e);return f;}
function AH2(a){return a.iD;}
function AEw(a){return B(48);}
function Yy(a,b){return 0;}
function ACo(){AYk=ATv();}
function H4(){BR.call(this);}
function AYl(a){var b=new H4();Tt(b,a);return b;}
function Tt(a,b){Dn(a,b);}
function YS(a,b,c,d){var e,f;e=a.iF();f=d.ez(e);if(f!=b)b=(-1);return b;}
function AO6(a){return B(49);}
function Cs(){var a=this;C.call(a);a.C=null;a.ci=null;}
function AYm(a,b,c,d){var e=new Cs();Ff(e,a,b,c,d);return e;}
function Ff(a,b,c,d,e){I(a);a.C=Fv(b,c);a.ci=B0(b-d/2.0,c-e/2.0,d,e);}
function KO(){var a=this;Bl.call(a);a.nY=null;a.qL=0;}
function ASK(a){var b=new KO();AO9(b,a);return b;}
function AO9(a,b){B5(a);a.nY=b.jq();a.qL=b.bF;}
function ACK(a,b){a.i=b;}
function AER(a,b,c,d){var e,f,g,h,i,j,k;e=d.dH();f=d.L();g=b+1|0;h=BM(g,f);if(h>0){d.eh=1;return (-1);}i=c.g(b);if(!a.nY.s(i))return (-1);if(BP(i)){if(h<0){j=c.g(g);if(B_(j))return (-1);}}else if(B_(i)&&b>e){k=c.g(b-1|0);if(BP(k))return (-1);}return a.i.d(g,c,d);}
function AKV(a){return J().a(B(50)).a(!a.qL?B(51):B(52)).a(a.nY.b()).b();}
function Jt(){}
function FU(){C.call(this);}
function AYn(){var a=new FU();Ko(a);return a;}
function Ko(a){I(a);}
function Un(){var a=this;FU.call(a);a.gh=null;a.mn=0;}
function AH7(){var a=new Un();AGy(a);return a;}
function AYo(a){var b=new Un();LJ(b,a);return b;}
function AGy(a){LJ(a,32);}
function LJ(a,b){Ko(a);a.gh=$rt_createByteArray(b);}
function AJ2(a,b,c,d){var e,f,g,h,i;QN(a,a.mn+d|0);e=0;while(e<d){f=b.data;g=a.gh.data;h=a.mn;a.mn=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function QN(a,b){var c;if(a.gh.data.length<b){c=S(b,(a.gh.data.length*3|0)/2|0);a.gh=GG(a.gh,c);}}
function V4(a){return GG(a.gh,a.mn);}
function BZ(){Cr.call(this);}
function ATt(a,b,c){var d=new BZ();Ek(d,a,b,c);return d;}
function Ek(a,b,c,d){EK(a,b,c,d);}
function Wh(a,b,c,d){var e;if(!a.Z.ba(d))return a.i.d(b,c,d);e=a.Z.d(b,c,d);if(e>=0)return e;return a.i.d(b,c,d);}
function AE5(a){return B(53);}
function O6(){BZ.call(this);}
function AT5(a,b,c){var d=new O6();Zk(d,a,b,c);return d;}
function Zk(a,b,c,d){Ek(a,b,c,d);}
function ARg(a,b,c,d){var e;if(!a.Z.ba(d))return a.i.d(b,c,d);e=a.i.d(b,c,d);if(e>=0)return e;return a.Z.d(b,c,d);}
function Ce(){C.call(this);}
var AX7=null;var AX8=null;var AYb=null;var AYc=null;var AX_=null;var AYa=null;var AX9=null;var AX$=null;var AYp=null;function QT(){D0.call(this);}
function ATG(a){var b=new QT();AIm(b,a);return b;}
function AIm(a,b){Q0(a,b);}
function Ni(){BZ.call(this);}
function AU8(a,b,c){var d=new Ni();AF1(d,a,b,c);return d;}
function AF1(a,b,c,d){Ek(a,b,c,d);GW();b.T(AYk);}
function AIG(a,b,c,d){var e,f;e=a.Z.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){f=a.Z.d(e,c,d);if(f<=e)break;e=f;}b=e;}return a.i.d(b,c,d);}
function DX(){var a=this;C.call(a);a.E=null;a.bv=0;}
function AYq(){var a=new DX();Ht(a);return a;}
function AWK(a){var b=new DX();Hh(b,a);return b;}
function Ht(a){Hh(a,16);}
function Hh(a,b){I(a);a.E=$rt_createCharArray(b);}
function Je(a,b){return a.lY(a.bv,b);}
function JI(a,b,c){var d,e,f;if(b>=0&&b<=a.bv){if(c===null)c=B(54);else if(c.b9())return a;a.e4(a.bv+c.h()|0);d=a.bv-1|0;while(d>=b){a.E.data[d+c.h()|0]=a.E.data[d];d=d+(-1)|0;}a.bv=a.bv+c.h()|0;d=0;while(d<c.h()){e=a.E.data;f=b+1|0;e[b]=c.g(d);d=d+1|0;b=f;}return a;}F(HI());}
function LZ(a,b){return a.ra(b,10);}
function Xd(a,b,c){return a.xA(a.bv,b,c);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)BY(a,b,b+1|0);else{BY(a,b,b+2|0);f=a.E.data;g=b+1|0;f[b]=45;b=g;}a.E.data[b]=GV(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=BE(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;BY(a,b,b+i|0);if(e)l=b;else{f=a.E.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.E.data;g=l+1|0;f[l]=GV(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Sx(a,b){return a.tr(a.bv,b);}
function Qn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BM(c,0.0);if(!d){BY(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=48;e=a.E.data;f=d+1|0;e[d]=46;a.E.data[f]=48;return a;}if(!d){BY(a,b,b+4|0);e=a.E.data;d=b+1|0;e[b]=45;e=a.E.data;f=d+1|0;e[d]=48;e=a.E.data;d=f+1|0;e[f]=46;a.E.data[d]=48;return a;}if(isNaN(c)?1:0){BY(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=78;e=a.E.data;f=d+1|0;e[d]=97;a.E.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){BY(a,b,b+8|0);d=b;}else{BY(a,b,b+9|0);e=a.E.data;d=b+1|0;e[b]=45;}e=a.E.data;f=d+
1|0;e[d]=73;e=a.E.data;d=f+1|0;e[f]=110;e=a.E.data;f=d+1|0;e[d]=102;e=a.E.data;d=f+1|0;e[f]=105;e=a.E.data;f=d+1|0;e[d]=110;e=a.E.data;d=f+1|0;e[f]=105;e=a.E.data;f=d+1|0;e[d]=116;a.E.data[f]=121;return a;}ATE();g=AXu;Qa(c,g);h=g.n3;i=g.ny;j=g.rq;k=1;l=1;if(j){j=1;l=2;}m=9;n=AOp(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=S(m,k+1|0);i=0;}else if(i<0){h=h/AXq.data[ -i]|0;m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;BY(a,b,b+d|0);if(!j)f=b;else{e
=a.E.data;f=b+1|0;e[b]=45;}o=100000000;p=0;while(p<m){if(o<=0)q=0;else{q=h/o|0;h=h%o|0;}e=a.E.data;d=f+1|0;e[f]=(48+q|0)&65535;k=k+(-1)|0;if(k)f=d;else{e=a.E.data;f=d+1|0;e[d]=46;}o=o/10|0;p=p+1|0;}if(i){e=a.E.data;d=f+1|0;e[f]=69;if(i>=0)f=d;else{i= -i;e=a.E.data;f=d+1|0;e[d]=45;}if(i<10)r=f;else{e=a.E.data;r=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.E.data[r]=(48+(i%10|0)|0)&65535;}return a;}
function AOp(b){var c,d,e,f;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;f=e*100|0;if(b%f|0)f=e;else c=c|2;if(!(b%(f*10|0)|0))c=c|1;return c;}
function IH(a,b){return a.pV(a.bv,b);}
function J9(a,b,c){BY(a,b,b+1|0);a.E.data[b]=c;return a;}
function OW(a,b){return a.sj(a.bv,b);}
function NE(a,b,c){return a.lY(b,c===null?B(54):c.b());}
function Hr(a,b){var c,d;if(a.E.data.length>=b)return;if(a.E.data.length>=1073741823)c=2147483647;else{d=a.E.data.length*2|0;c=S(b,S(d,5));}a.E=Xv(a.E,c);}
function I5(a){return EQ(a.E,0,a.bv);}
function Ir(a){return a.bv;}
function KX(a,b){if(b>=0&&b<a.bv)return a.E.data[b];F(B3());}
function L9(a,b,c,d){return a.qB(a.bv,b,c,d);}
function P9(a,b,c,d,e){var f,g;if(d<=e&&e<=c.h()&&d>=0){BY(a,b,(b+e|0)-d|0);while(d<e){f=a.E.data;g=b+1|0;f[b]=c.g(d);d=d+1|0;b=g;}return a;}F(B3());}
function UJ(a,b){return a.vZ(b,0,b.h());}
function J2(a,b,c,d){return a.pg(a.bv,b,c,d);}
function Hd(a,b,c,d,e){var f,g,h,i,j;BY(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.E.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Ji(a,b){return a.od(b,0,b.data.length);}
function Sb(a,b,c){return a.c2(b,c);}
function S1(a,b){a.bv=b;}
function Tl(a,b){var c,d,e;if(b>=0&&b<a.bv){a.bv=a.bv-1|0;while(b<a.bv){c=a.E.data;d=a.E.data;e=b+1|0;c[b]=d[e];b=e;}return a;}F(HI());}
function TL(a,b,c){var d,e,f,g,h,i;d=BM(b,c);if(d<=0&&b<=a.bv){if(!d)return a;e=a.bv-c|0;a.bv=a.bv-(c-b|0)|0;f=0;while(f<e){g=a.E.data;d=b+1|0;h=a.E.data;i=c+1|0;g[b]=h[c];f=f+1|0;b=d;c=i;}return a;}F(HI());}
function BY(a,b,c){var d,e;d=a.bv-b|0;a.e4((a.bv+c|0)-b|0);e=d-1|0;while(e>=0){a.E.data[c+e|0]=a.E.data[b+e|0];e=e+(-1)|0;}a.bv=a.bv+(c-b|0)|0;}
function MK(a,b,c){if(b<=c&&b>=0&&c<=a.bv)return EQ(a.E,b,c-b|0);F(B3());}
function DY(){}
function L2(){DX.call(this);}
function AL3(){var a=new L2();AEr(a);return a;}
function AEr(a){Ht(a);}
function AA7(a,b){Je(a,b);return a;}
function AOf(a,b){IH(a,b);return a;}
function ARf(a,b,c,d){J2(a,b,c,d);return a;}
function ABW(a,b){Ji(a,b);return a;}
function Xr(a,b,c,d){L9(a,b,c,d);return a;}
function APd(a,b){UJ(a,b);return a;}
function AHM(a,b,c,d,e){P9(a,b,c,d,e);return a;}
function AH_(a,b,c,d,e){Hd(a,b,c,d,e);return a;}
function AP5(a,b,c){J9(a,b,c);return a;}
function AMX(a,b,c){JI(a,b,c);return a;}
function ACT(a,b,c,d,e){return a.Ba(b,c,d,e);}
function Yv(a,b,c,d){return a.DM(b,c,d);}
function ADs(a,b,c,d,e){return a.AH(b,c,d,e);}
function AMh(a,b,c,d){return a.zX(b,c,d);}
function VE(a,b){return KX(a,b);}
function ARM(a){return Ir(a);}
function YO(a){return I5(a);}
function Zf(a,b){Hr(a,b);}
function AOk(a,b,c){return a.Dw(b,c);}
function V1(a,b,c){return a.zq(b,c);}
function BT(){var a=this;C.call(a);a.ey=0;a.x=0;a.bx=0;a.ei=0;}
function AYr(a){var b=new BT();El(b,a);return b;}
function El(a,b){I(a);a.ei=(-1);a.ey=b;a.bx=b;}
function CA(a){return a.ey;}
function CD(a){return a.x;}
function Bw(a,b){if(b>=0&&b<=a.bx){a.x=b;if(b<a.ei)a.ei=0;return a;}F(U(J().a(B(55)).j(b).a(B(56)).j(a.bx).a(B(57)).b()));}
function Bq(a){return a.bx;}
function BF(a,b){if(b>=0&&b<=a.ey){if(a.ei>b)a.ei=(-1);a.bx=b;if(a.x>a.bx)a.x=a.bx;return a;}F(U(J().a(B(58)).j(b).a(B(56)).j(a.ey).a(B(57)).b()));}
function B4(a){a.x=0;a.bx=a.ey;a.ei=(-1);return a;}
function BJ(a){a.bx=a.x;a.x=0;a.ei=(-1);return a;}
function X(a){return a.bx-a.x|0;}
function Ci(a){return a.x>=a.bx?0:1;}
function JN(){C.call(this);}
var AYs=null;function ACD(){ACD=N(JN);Vy();}
function MY(b){ACD();return AYs.e5(b);}
function Ud(){var b;ACD();AYs.cj();b=AYs;EM();b.Q(B(59),AYt);AYs.Q(B(60),AYu);AYs.Q(B(61),AYv);AYs.Q(B(62),AYw);AYs.Q(B(63),AYx);AYs.Q(B(64),AYy);AYs.Q(B(65),AYz);AYs.Q(B(66),AYA);AYs.Q(B(67),AYB);AYs.Q(B(68),AYC);AYs.Q(B(69),AYD);AYs.Q(B(70),AYE);AYs.Q(B(71),AYF);AYs.Q(B(72),AYG);AYs.Q(B(73),AYH);AYs.Q(B(74),AYI);AYs.Q(B(75),AYJ);AYs.Q(B(76),AYK);AYs.Q(B(77),AYL);AYs.Q(B(78),AYM);AYs.Q(B(79),AYN);AYs.Q(B(80),AYO);AYs.Q(B(81),AYP);AYs.Q(B(82),AYQ);AYs.Q(B(83),AYR);AYs.Q(B(84),AYS);AYs.Q(B(85),AYT);AYs.Q(B(86),
AYU);AYs.Q(B(87),AYV);AYs.Q(B(88),AYW);AYs.Q(B(89),AYX);AYs.Q(B(90),AYY);AYs.Q(B(91),AYZ);AYs.Q(B(92),AY0);}
function Vy(){AYs=IP();Ud();}
function Ec(){C.call(this);}
function AY1(){var a=new Ec();G4(a);return a;}
function G4(a){I(a);}
function M(){var a=this;Ec.call(a);a.bF=0;a.b$=0;a.bN=null;a.jN=null;a.ko=null;a.bi=0;}
var AY2=null;function HA(){HA=N(M);AAB();}
function AY3(){var a=new M();T(a);return a;}
function T(a){HA();G4(a);a.bN=AVO(2048);}
function Yq(a){return null;}
function Xf(a){return a.bN;}
function AHX(a){var b,c;if(!a.b$){b=a.bN;c=b.jM(0)>=2048?0:1;}else c=a.bN.CP(0)>=2048?0:1;return c;}
function AEd(a){return a.bi;}
function AOa(a){return a;}
function XE(a){var b;if(a.ko===null){b=a.cv();a.ko=AXa(a,b);a.ko.f0(a.b$);}return a.ko;}
function YC(a){var b;if(a.jN===null){b=a.cv();a.jN=AUM(a,b,a);a.jN.f0(a.hV());a.jN.bi=a.bi;}return a.jN;}
function AQS(a){return 0;}
function APh(a,b){if(a.bF^b){a.bF=a.bF?0:1;a.b$=a.b$?0:1;}if(!a.bi)a.bi=1;return a;}
function ACO(a){return a.bF;}
function FM(b,c){HA();return b.s(c);}
function E7(b,c){HA();if(b.bQ()!==null&&c.bQ()!==null)return b.bQ().yg(c.bQ());return 1;}
function IM(b,c){HA();return TH(AY2,b).zc(c);}
function AAB(){AY2=AUs();}
function PH(){M.call(this);this.xh=null;}
function AU5(a){var b=new PH();AFT(b,a);return b;}
function AFT(a,b){a.xh=b;T(a);}
function AQ6(a,b){return NU(b);}
function Fh(){C.call(this);}
var AY4=null;var AY5=null;var AY6=null;function AVV(){AVV=N(Fh);ABD();}
function AUs(){var a=new Fh();ST(a);return a;}
function ST(a){AVV();I(a);}
function TH(a,b){var c,d,e;c=0;while(true){if(c>=AY6.data.length)F(AU9(B(93),B(93),b));d=AY6.data[c];e=d.data;if(b.R(e[0]))break;c=c+1|0;}return e[1];}
function ABD(){var b,c,d,e;AY4=AWe();AY5=AUG();b=G($rt_arraycls(C),194);c=b.data;d=G(C,2);e=d.data;e[0]=B(94);e[1]=AWW();c[0]=d;d=G(C,2);e=d.data;e[0]=B(95);e[1]=ASL();c[1]=d;d=G(C,2);e=d.data;e[0]=B(96);e[1]=AWb();c[2]=d;d=G(C,2);e=d.data;e[0]=B(97);e[1]=AWv();c[3]=d;d=G(C,2);e=d.data;e[0]=B(98);e[1]=AY5;c[4]=d;d=G(C,2);e=d.data;e[0]=B(99);e[1]=AU1();c[5]=d;d=G(C,2);e=d.data;e[0]=B(100);e[1]=AUA();c[6]=d;d=G(C,2);e=d.data;e[0]=B(101);e[1]=AS8();c[7]=d;d=G(C,2);e=d.data;e[0]=B(102);e[1]=ASX();c[8]=d;d=G(C,2);e
=d.data;e[0]=B(103);e[1]=ATe();c[9]=d;d=G(C,2);e=d.data;e[0]=B(104);e[1]=ATY();c[10]=d;d=G(C,2);e=d.data;e[0]=B(105);e[1]=AS_();c[11]=d;d=G(C,2);e=d.data;e[0]=B(106);e[1]=AVH();c[12]=d;d=G(C,2);e=d.data;e[0]=B(107);e[1]=ASG();c[13]=d;d=G(C,2);e=d.data;e[0]=B(108);e[1]=AWq();c[14]=d;d=G(C,2);e=d.data;e[0]=B(109);e[1]=ATT();c[15]=d;d=G(C,2);e=d.data;e[0]=B(110);e[1]=AUZ();c[16]=d;d=G(C,2);e=d.data;e[0]=B(111);e[1]=ATO();c[17]=d;d=G(C,2);e=d.data;e[0]=B(112);e[1]=AU0();c[18]=d;d=G(C,2);e=d.data;e[0]=B(113);e[1]
=ATl();c[19]=d;d=G(C,2);e=d.data;e[0]=B(114);e[1]=AWI();c[20]=d;d=G(C,2);e=d.data;e[0]=B(115);e[1]=ATy();c[21]=d;d=G(C,2);e=d.data;e[0]=B(116);e[1]=AU6();c[22]=d;d=G(C,2);e=d.data;e[0]=B(117);e[1]=AV_();c[23]=d;d=G(C,2);e=d.data;e[0]=B(118);e[1]=AV4();c[24]=d;d=G(C,2);e=d.data;e[0]=B(119);e[1]=AWA();c[25]=d;d=G(C,2);e=d.data;e[0]=B(120);e[1]=ATk();c[26]=d;d=G(C,2);e=d.data;e[0]=B(121);e[1]=AVQ();c[27]=d;d=G(C,2);e=d.data;e[0]=B(122);e[1]=AY4;c[28]=d;d=G(C,2);e=d.data;e[0]=B(123);e[1]=AVg();c[29]=d;d=G(C,2);e
=d.data;e[0]=B(124);e[1]=AS9();c[30]=d;d=G(C,2);e=d.data;e[0]=B(125);e[1]=AY4;c[31]=d;d=G(C,2);e=d.data;e[0]=B(126);e[1]=ASC();c[32]=d;d=G(C,2);e=d.data;e[0]=B(127);e[1]=AY5;c[33]=d;d=G(C,2);e=d.data;e[0]=B(128);e[1]=AUc();c[34]=d;d=G(C,2);e=d.data;e[0]=B(129);e[1]=K(0,127);c[35]=d;d=G(C,2);e=d.data;e[0]=B(130);e[1]=K(128,255);c[36]=d;d=G(C,2);e=d.data;e[0]=B(131);e[1]=K(256,383);c[37]=d;d=G(C,2);e=d.data;e[0]=B(132);e[1]=K(384,591);c[38]=d;d=G(C,2);e=d.data;e[0]=B(133);e[1]=K(592,687);c[39]=d;d=G(C,2);e=d.data;e[0]
=B(134);e[1]=K(688,767);c[40]=d;d=G(C,2);e=d.data;e[0]=B(135);e[1]=K(768,879);c[41]=d;d=G(C,2);e=d.data;e[0]=B(136);e[1]=K(880,1023);c[42]=d;d=G(C,2);e=d.data;e[0]=B(137);e[1]=K(1024,1279);c[43]=d;d=G(C,2);e=d.data;e[0]=B(138);e[1]=K(1280,1327);c[44]=d;d=G(C,2);e=d.data;e[0]=B(139);e[1]=K(1328,1423);c[45]=d;d=G(C,2);e=d.data;e[0]=B(140);e[1]=K(1424,1535);c[46]=d;d=G(C,2);e=d.data;e[0]=B(141);e[1]=K(1536,1791);c[47]=d;d=G(C,2);e=d.data;e[0]=B(142);e[1]=K(1792,1871);c[48]=d;d=G(C,2);e=d.data;e[0]=B(143);e[1]=
K(1872,1919);c[49]=d;d=G(C,2);e=d.data;e[0]=B(144);e[1]=K(1920,1983);c[50]=d;d=G(C,2);e=d.data;e[0]=B(145);e[1]=K(2304,2431);c[51]=d;d=G(C,2);e=d.data;e[0]=B(146);e[1]=K(2432,2559);c[52]=d;d=G(C,2);e=d.data;e[0]=B(147);e[1]=K(2560,2687);c[53]=d;d=G(C,2);e=d.data;e[0]=B(148);e[1]=K(2688,2815);c[54]=d;d=G(C,2);e=d.data;e[0]=B(149);e[1]=K(2816,2943);c[55]=d;d=G(C,2);e=d.data;e[0]=B(150);e[1]=K(2944,3071);c[56]=d;d=G(C,2);e=d.data;e[0]=B(151);e[1]=K(3072,3199);c[57]=d;d=G(C,2);e=d.data;e[0]=B(152);e[1]=K(3200,3327);c[58]
=d;d=G(C,2);e=d.data;e[0]=B(153);e[1]=K(3328,3455);c[59]=d;d=G(C,2);e=d.data;e[0]=B(154);e[1]=K(3456,3583);c[60]=d;d=G(C,2);e=d.data;e[0]=B(155);e[1]=K(3584,3711);c[61]=d;d=G(C,2);e=d.data;e[0]=B(156);e[1]=K(3712,3839);c[62]=d;d=G(C,2);e=d.data;e[0]=B(157);e[1]=K(3840,4095);c[63]=d;d=G(C,2);e=d.data;e[0]=B(158);e[1]=K(4096,4255);c[64]=d;d=G(C,2);e=d.data;e[0]=B(159);e[1]=K(4256,4351);c[65]=d;d=G(C,2);e=d.data;e[0]=B(160);e[1]=K(4352,4607);c[66]=d;d=G(C,2);e=d.data;e[0]=B(161);e[1]=K(4608,4991);c[67]=d;d=G(C,
2);e=d.data;e[0]=B(162);e[1]=K(4992,5023);c[68]=d;d=G(C,2);e=d.data;e[0]=B(163);e[1]=K(5024,5119);c[69]=d;d=G(C,2);e=d.data;e[0]=B(164);e[1]=K(5120,5759);c[70]=d;d=G(C,2);e=d.data;e[0]=B(165);e[1]=K(5760,5791);c[71]=d;d=G(C,2);e=d.data;e[0]=B(166);e[1]=K(5792,5887);c[72]=d;d=G(C,2);e=d.data;e[0]=B(167);e[1]=K(5888,5919);c[73]=d;d=G(C,2);e=d.data;e[0]=B(168);e[1]=K(5920,5951);c[74]=d;d=G(C,2);e=d.data;e[0]=B(169);e[1]=K(5952,5983);c[75]=d;d=G(C,2);e=d.data;e[0]=B(170);e[1]=K(5984,6015);c[76]=d;d=G(C,2);e=d.data;e[0]
=B(171);e[1]=K(6016,6143);c[77]=d;d=G(C,2);e=d.data;e[0]=B(172);e[1]=K(6144,6319);c[78]=d;d=G(C,2);e=d.data;e[0]=B(173);e[1]=K(6400,6479);c[79]=d;d=G(C,2);e=d.data;e[0]=B(174);e[1]=K(6480,6527);c[80]=d;d=G(C,2);e=d.data;e[0]=B(175);e[1]=K(6528,6623);c[81]=d;d=G(C,2);e=d.data;e[0]=B(176);e[1]=K(6624,6655);c[82]=d;d=G(C,2);e=d.data;e[0]=B(177);e[1]=K(6656,6687);c[83]=d;d=G(C,2);e=d.data;e[0]=B(178);e[1]=K(7424,7551);c[84]=d;d=G(C,2);e=d.data;e[0]=B(179);e[1]=K(7552,7615);c[85]=d;d=G(C,2);e=d.data;e[0]=B(180);e[1]
=K(7616,7679);c[86]=d;d=G(C,2);e=d.data;e[0]=B(181);e[1]=K(7680,7935);c[87]=d;d=G(C,2);e=d.data;e[0]=B(182);e[1]=K(7936,8191);c[88]=d;d=G(C,2);e=d.data;e[0]=B(183);e[1]=K(8192,8303);c[89]=d;d=G(C,2);e=d.data;e[0]=B(184);e[1]=K(8304,8351);c[90]=d;d=G(C,2);e=d.data;e[0]=B(185);e[1]=K(8352,8399);c[91]=d;d=G(C,2);e=d.data;e[0]=B(186);e[1]=K(8400,8447);c[92]=d;d=G(C,2);e=d.data;e[0]=B(187);e[1]=K(8448,8527);c[93]=d;d=G(C,2);e=d.data;e[0]=B(188);e[1]=K(8528,8591);c[94]=d;d=G(C,2);e=d.data;e[0]=B(189);e[1]=K(8592,
8703);c[95]=d;d=G(C,2);e=d.data;e[0]=B(190);e[1]=K(8704,8959);c[96]=d;d=G(C,2);e=d.data;e[0]=B(191);e[1]=K(8960,9215);c[97]=d;d=G(C,2);e=d.data;e[0]=B(192);e[1]=K(9216,9279);c[98]=d;d=G(C,2);e=d.data;e[0]=B(193);e[1]=K(9280,9311);c[99]=d;d=G(C,2);e=d.data;e[0]=B(194);e[1]=K(9312,9471);c[100]=d;d=G(C,2);e=d.data;e[0]=B(195);e[1]=K(9472,9599);c[101]=d;d=G(C,2);e=d.data;e[0]=B(196);e[1]=K(9600,9631);c[102]=d;d=G(C,2);e=d.data;e[0]=B(197);e[1]=K(9632,9727);c[103]=d;d=G(C,2);e=d.data;e[0]=B(198);e[1]=K(9728,9983);c[104]
=d;d=G(C,2);e=d.data;e[0]=B(199);e[1]=K(9984,10175);c[105]=d;d=G(C,2);e=d.data;e[0]=B(200);e[1]=K(10176,10223);c[106]=d;d=G(C,2);e=d.data;e[0]=B(201);e[1]=K(10224,10239);c[107]=d;d=G(C,2);e=d.data;e[0]=B(202);e[1]=K(10240,10495);c[108]=d;d=G(C,2);e=d.data;e[0]=B(203);e[1]=K(10496,10623);c[109]=d;d=G(C,2);e=d.data;e[0]=B(204);e[1]=K(10624,10751);c[110]=d;d=G(C,2);e=d.data;e[0]=B(205);e[1]=K(10752,11007);c[111]=d;d=G(C,2);e=d.data;e[0]=B(206);e[1]=K(11008,11263);c[112]=d;d=G(C,2);e=d.data;e[0]=B(207);e[1]=K(11264,
11359);c[113]=d;d=G(C,2);e=d.data;e[0]=B(208);e[1]=K(11392,11519);c[114]=d;d=G(C,2);e=d.data;e[0]=B(209);e[1]=K(11520,11567);c[115]=d;d=G(C,2);e=d.data;e[0]=B(210);e[1]=K(11568,11647);c[116]=d;d=G(C,2);e=d.data;e[0]=B(211);e[1]=K(11648,11743);c[117]=d;d=G(C,2);e=d.data;e[0]=B(212);e[1]=K(11776,11903);c[118]=d;d=G(C,2);e=d.data;e[0]=B(213);e[1]=K(11904,12031);c[119]=d;d=G(C,2);e=d.data;e[0]=B(214);e[1]=K(12032,12255);c[120]=d;d=G(C,2);e=d.data;e[0]=B(215);e[1]=K(12272,12287);c[121]=d;d=G(C,2);e=d.data;e[0]=B(216);e[1]
=K(12288,12351);c[122]=d;d=G(C,2);e=d.data;e[0]=B(217);e[1]=K(12352,12447);c[123]=d;d=G(C,2);e=d.data;e[0]=B(218);e[1]=K(12448,12543);c[124]=d;d=G(C,2);e=d.data;e[0]=B(219);e[1]=K(12544,12591);c[125]=d;d=G(C,2);e=d.data;e[0]=B(220);e[1]=K(12592,12687);c[126]=d;d=G(C,2);e=d.data;e[0]=B(221);e[1]=K(12688,12703);c[127]=d;d=G(C,2);e=d.data;e[0]=B(222);e[1]=K(12704,12735);c[128]=d;d=G(C,2);e=d.data;e[0]=B(223);e[1]=K(12736,12783);c[129]=d;d=G(C,2);e=d.data;e[0]=B(224);e[1]=K(12784,12799);c[130]=d;d=G(C,2);e=d.data;e[0]
=B(225);e[1]=K(12800,13055);c[131]=d;d=G(C,2);e=d.data;e[0]=B(226);e[1]=K(13056,13311);c[132]=d;d=G(C,2);e=d.data;e[0]=B(227);e[1]=K(13312,19893);c[133]=d;d=G(C,2);e=d.data;e[0]=B(228);e[1]=K(19904,19967);c[134]=d;d=G(C,2);e=d.data;e[0]=B(229);e[1]=K(19968,40959);c[135]=d;d=G(C,2);e=d.data;e[0]=B(230);e[1]=K(40960,42127);c[136]=d;d=G(C,2);e=d.data;e[0]=B(231);e[1]=K(42128,42191);c[137]=d;d=G(C,2);e=d.data;e[0]=B(232);e[1]=K(42752,42783);c[138]=d;d=G(C,2);e=d.data;e[0]=B(233);e[1]=K(43008,43055);c[139]=d;d=G(C,
2);e=d.data;e[0]=B(234);e[1]=K(44032,55203);c[140]=d;d=G(C,2);e=d.data;e[0]=B(235);e[1]=K(55296,56191);c[141]=d;d=G(C,2);e=d.data;e[0]=B(236);e[1]=K(56192,56319);c[142]=d;d=G(C,2);e=d.data;e[0]=B(237);e[1]=K(56320,57343);c[143]=d;d=G(C,2);e=d.data;e[0]=B(238);e[1]=K(57344,63743);c[144]=d;d=G(C,2);e=d.data;e[0]=B(239);e[1]=K(63744,64255);c[145]=d;d=G(C,2);e=d.data;e[0]=B(240);e[1]=K(64256,64335);c[146]=d;d=G(C,2);e=d.data;e[0]=B(241);e[1]=K(64336,65023);c[147]=d;d=G(C,2);e=d.data;e[0]=B(242);e[1]=K(65024,65039);c[148]
=d;d=G(C,2);e=d.data;e[0]=B(243);e[1]=K(65040,65055);c[149]=d;d=G(C,2);e=d.data;e[0]=B(244);e[1]=K(65056,65071);c[150]=d;d=G(C,2);e=d.data;e[0]=B(245);e[1]=K(65072,65103);c[151]=d;d=G(C,2);e=d.data;e[0]=B(246);e[1]=K(65104,65135);c[152]=d;d=G(C,2);e=d.data;e[0]=B(247);e[1]=K(65136,65279);c[153]=d;d=G(C,2);e=d.data;e[0]=B(248);e[1]=K(65280,65519);c[154]=d;d=G(C,2);e=d.data;e[0]=B(249);e[1]=K(0,1114111);c[155]=d;d=G(C,2);e=d.data;e[0]=B(250);e[1]=ATa();c[156]=d;d=G(C,2);e=d.data;e[0]=B(251);e[1]=Bj(0,1);c[157]
=d;d=G(C,2);e=d.data;e[0]=B(252);e[1]=Fk(62,1);c[158]=d;d=G(C,2);e=d.data;e[0]=B(253);e[1]=Bj(1,1);c[159]=d;d=G(C,2);e=d.data;e[0]=B(254);e[1]=Bj(2,1);c[160]=d;d=G(C,2);e=d.data;e[0]=B(255);e[1]=Bj(3,0);c[161]=d;d=G(C,2);e=d.data;e[0]=B(256);e[1]=Bj(4,0);c[162]=d;d=G(C,2);e=d.data;e[0]=B(257);e[1]=Bj(5,1);c[163]=d;d=G(C,2);e=d.data;e[0]=B(258);e[1]=Fk(448,1);c[164]=d;d=G(C,2);e=d.data;e[0]=B(259);e[1]=Bj(6,1);c[165]=d;d=G(C,2);e=d.data;e[0]=B(260);e[1]=Bj(7,0);c[166]=d;d=G(C,2);e=d.data;e[0]=B(261);e[1]=Bj(8,
1);c[167]=d;d=G(C,2);e=d.data;e[0]=B(262);e[1]=Fk(3584,1);c[168]=d;d=G(C,2);e=d.data;e[0]=B(263);e[1]=Bj(9,1);c[169]=d;d=G(C,2);e=d.data;e[0]=B(264);e[1]=Bj(10,1);c[170]=d;d=G(C,2);e=d.data;e[0]=B(265);e[1]=Bj(11,1);c[171]=d;d=G(C,2);e=d.data;e[0]=B(266);e[1]=Fk(28672,0);c[172]=d;d=G(C,2);e=d.data;e[0]=B(267);e[1]=Bj(12,0);c[173]=d;d=G(C,2);e=d.data;e[0]=B(268);e[1]=Bj(13,0);c[174]=d;d=G(C,2);e=d.data;e[0]=B(269);e[1]=Bj(14,0);c[175]=d;d=G(C,2);e=d.data;e[0]=B(270);e[1]=AUu(983040,1,1);c[176]=d;d=G(C,2);e=d.data;e[0]
=B(271);e[1]=Bj(15,0);c[177]=d;d=G(C,2);e=d.data;e[0]=B(272);e[1]=Bj(16,1);c[178]=d;d=G(C,2);e=d.data;e[0]=B(273);e[1]=Bj(18,1);c[179]=d;d=G(C,2);e=d.data;e[0]=B(274);e[1]=AUS(19,0,1);c[180]=d;d=G(C,2);e=d.data;e[0]=B(275);e[1]=Fk(1643118592,1);c[181]=d;d=G(C,2);e=d.data;e[0]=B(276);e[1]=Bj(20,0);c[182]=d;d=G(C,2);e=d.data;e[0]=B(277);e[1]=Bj(21,0);c[183]=d;d=G(C,2);e=d.data;e[0]=B(278);e[1]=Bj(22,0);c[184]=d;d=G(C,2);e=d.data;e[0]=B(279);e[1]=Bj(23,0);c[185]=d;d=G(C,2);e=d.data;e[0]=B(280);e[1]=Bj(24,1);c[186]
=d;d=G(C,2);e=d.data;e[0]=B(281);e[1]=Fk(2113929216,1);c[187]=d;d=G(C,2);e=d.data;e[0]=B(282);e[1]=Bj(25,1);c[188]=d;d=G(C,2);e=d.data;e[0]=B(283);e[1]=Bj(26,0);c[189]=d;d=G(C,2);e=d.data;e[0]=B(284);e[1]=Bj(27,0);c[190]=d;d=G(C,2);e=d.data;e[0]=B(285);e[1]=Bj(28,1);c[191]=d;d=G(C,2);e=d.data;e[0]=B(286);e[1]=Bj(29,0);c[192]=d;d=G(C,2);e=d.data;e[0]=B(287);e[1]=Bj(30,0);c[193]=d;AY6=b;}
function I$(){}
function FE(){O.call(this);}
function AUG(){var a=new FE();SO(a);return a;}
function SO(a){Bc(a);}
function PL(a){return B9().bL(48,57);}
function PC(){O.call(this);}
function AU6(){var a=new PC();Zv(a);return a;}
function Zv(a){Bc(a);}
function ADy(a){var b;b=ATI(a);b.bi=1;return b;}
function Dk(){var a=this;Bl.call(a);a.ju=0;a.nC=null;a.mN=null;a.mB=0;}
function AW7(a,b){var c=new Dk();Hs(c,a,b);return c;}
function Hs(a,b,c){B5(a);a.ju=1;a.mN=b;a.mB=c;}
function AQX(a,b){a.i=b;}
function AKk(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=$rt_createIntArray(4);f=0;g=d.L();if(b>=g)return (-1);h=a.qg(b,c,g);i=b+a.ju|0;j=S5(h);if(j===null){k=e.data;l=1;k[f]=h;}else{l=j.data.length;W(j,0,e,0,l);l=f+l|0;}a:{if(i<g){m=a.qg(i,c,g);while(l<4){if(!AKU(m)){k=e.data;n=l+1|0;k[l]=m;}else{k=S5(m).data;if(k.length!=2){o=e.data;n=l+1|0;o[l]=k[0];}else{o=e.data;m=l+1|0;o[l]=k[0];n=m+1|0;o[m]=k[1];}}i=i+a.ju|0;if(i>=g){l=n;break a;}m=a.qg(i,c,g);l=n;}}}if(l!=a.mB)return (-1);p=0;while(true){if(p>=l)return a.i.d(i,
c,d);if(e.data[p]!=a.mN.data[p])break;p=p+1|0;}return (-1);}
function GF(a){var b,c;if(a.nC===null){b=J();c=0;while(c<a.mB){b.nH(Do(a.mN.data[c]));c=c+1|0;}a.nC=b.b();}return a.nC;}
function AJZ(a){return J().a(B(288)).a(GF(a)).b();}
function AFl(a,b,c,d){var e,f,g,h,i;a.ju=1;if(b>=(d-1|0))e=c.g(b);else{f=b+1|0;e=c.g(b);g=c.g(f);if(EA(e,g)){h=$rt_createCharArray(2);i=h.data;i[0]=e;i[1]=g;e=Q$(h,0);a.ju=2;}}return e;}
function AGf(a,b){var c,d;a:{if(b instanceof Dk){c=b;if(!GF(c).R(GF(a))){d=0;break a;}}d=1;}return d;}
function ALU(a,b){return 1;}
function QO(){Dk.call(this);}
function AUK(a,b){var c=new QO();Y6(c,a,b);return c;}
function Y6(a,b,c){Hs(a,b,c);}
function Pk(){C.call(this);}
function ABC(){return {};}
function Du(){var a=this;C.call(a);a.nc=0;a.nZ=0;a.s5=null;a.er=null;a.cm=null;a.nM=0;a.me=0;a.mf=0;a.mg=0;a.wa=0.0;a.kv=null;a.tj=null;a.lZ=null;}
var AY7=null;var AY8=null;var AY9=null;var AY$=0;var AY_=null;function P5(){P5=N(Du);AGr();}
function ALH(a){var b=new Du();K7(b,a);return b;}
function KU(a,b,c){var d=new Du();Tm(d,a,b,c);return d;}
function K7(a,b){var c,d,e,f,g,h,i;P5();I(a);a.me=255;a.mf=255;a.mg=255;a.kv=Gm(a.me,a.mf,a.mg,a.wa);c=b;d=c.s1();e=d.wJ;if(e===null)F(Bk(J().a(B(289)).a(b.oy()).a(B(290)).b()));f=e.width;g=e.height;HT();IW(a,f,g,AZa);h=a.cm;i="copy";h.globalCompositeOperation=i;a.cm.drawImage(e,0.0,0.0);h=a.cm;i="source-over";h.globalCompositeOperation=i;}
function Tm(a,b,c,d){P5();I(a);a.me=255;a.mf=255;a.mg=255;a.kv=Gm(a.me,a.mf,a.mg,a.wa);IW(a,b,c,d);}
function IW(a,b,c,d){var e,f,g,h;a.nc=b;a.nZ=c;HT();a.s5=AZa;a.er=AY8.createElement("canvas");a.er.style.setProperty("display","none");e=AY8.body;f=a.er;e.appendChild(f);e=a.er;g=b;e.width=g;g=a.er;f=c;g.height=f;a.cm=a.er.getContext("2d");g=a.cm;f="source-over";g.globalCompositeOperation=f;h=AY$;AY$=h+1|0;a.nM=h;AY9.Q(Hq(a.nM),a);}
function Gm(b,c,d,e){P5();return J().a(B(291)).j(b).a(B(292)).j(c).a(B(292)).j(d).a(B(292)).dJ(e).a(B(293)).b();}
function V5(a,b){var c,d,e,f;a.tj=b;c=AY9.xt().lQ();while(c.j$()){d=c.ks();e=d.cm;f="source-over";e.globalCompositeOperation=f;}}
function AA2(a){return a.s5;}
function AFs(a){return 6408;}
function AIY(a){return 6408;}
function ANt(a){return 5121;}
function ADZ(a){return a.nc;}
function AH5(a){return a.nZ;}
function Zu(a){var b,c,d;b=AY9.t4(Hq(a.nM));if(b.er!==null){c=b.er.parentNode;d=b.er;c.removeChild(d);}}
function ABE(a,b,c,d,e,f,g,h){var i;i=b.er;JR(a,i,e,f,g,h,c,d,g,h);}
function ALu(a,b,c,d,e,f,g,h,i,j){JR(a,b.er,c,d,e,f,g,h,i,j);}
function AMU(a){var b,c,d;if(a.lZ===null){b=a.cm;c=a.nc;d=a.nZ;a.lZ=b.getImageData(0.0,0.0,c,d).data;}return H3(Uk(a,a.lZ.buffer));}
function Uk(a,b){return $rt_wrapArray($rt_bytecls(), new Int8Array(b));}
function JR(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;k=a.tj;JQ();if(k===AZb){l=a.cm;k=$rt_ustr(AY_);l.fillStyle=k;l=a.cm;k=$rt_ustr(AY_);l.strokeStyle=k;l=a.cm;k="clear";l.globalCompositeOperation=k;a.cm.beginPath();l=a.cm;m=g;n=h;o=i;p=j;l.rect(m,n,o,p);Qu();Uu(a,AZc);a.cm.closePath();l=a.cm;k=$rt_ustr(a.kv);l.fillStyle=k;k=a.cm;q=$rt_ustr(a.kv);k.strokeStyle=q;q=a.cm;l="source-over";q.globalCompositeOperation=l;}l=a.cm;m=c;n=d;o=e;p=f;r=g;s=h;t=i;u=j;l.drawImage(b,m,n,o,p,r,s,t,u);a.lZ=null;}
function Uu(a,b){a:{ATf();switch(AZd.data[CJ(b)]){case 1:break;case 2:a.cm.stroke();break a;default:break a;}a.cm.fill();}}
function AGr(){AY7=window;AY8=AY7.document;AY9=E4();AY$=0;AY_=Gm(255,255,255,1.0);}
function Ul(){BR.call(this);}
function ASN(){var a=new Ul();U8(a);return a;}
function U8(a){Dn(a,(-1));}
function Z_(a,b,c,d){return b;}
function AFE(a){return B(294);}
function Jg(){}
function Om(){var a=this;C.call(a);a.ns=null;a.Ap=null;a.lz=null;a.p1=Long_ZERO;a.pZ=0.0;a.rl=Long_ZERO;a.kg=Long_ZERO;a.lN=0;a.ze=0.0;a.iQ=null;a.Ai=null;}
function ASD(a,b){var c=new Om();ARo(c,a,b);return c;}
function ARo(a,b,c){var d,e,f,g,h,i,j;I(a);a.p1=Long_fromInt(-1);a.ns=b;a.Ap=c;d=ABC();e=!!c.Ab();d.alpha=e;e=!!c.DE();d.antialias=e;e=!!c.yp();d.stencil=e;e=!!c.AN();d.premultipliedAlpha=e;e=!!c.yy();d.preserveDrawingBuffer=e;a.lz=b.getContext("webgl");e=a.lz;f=b.width;g=b.height;e.viewport(0,0,f,g);a.iQ=AW_(a.lz);h=a.iQ.op(7938);i=a.iQ.op(7936);j=a.iQ.op(7937);e=new H6;Ey();Pq(e,AXI,h,i,j);a.Ai=e;}
function AEb(a){return a.iQ;}
function ARQ(a){return a.ns.width;}
function Wz(a){return a.ns.height;}
function AIA(a){return a.pZ;}
function AIc(a,b){var c,d;c=a.lz.getSupportedExtensions();d=0;while(d<c.length){if(ALO(c[d]).R(b))return 1;d=d+1|0;}return 0;}
function AO2(a){var b;b=Si();a.pZ=Long_toNumber(Long_sub(b,a.rl))/1000.0;a.rl=b;a.kg=Long_fromNumber(Long_toNumber(a.kg)+a.pZ);a.lN=a.lN+1|0;if(Long_gt(a.kg,Long_fromInt(1))){a.ze=a.lN;a.kg=Long_ZERO;a.lN=0;}}
function GT(){Bl.call(this);}
function AWN(a,b){var c=new GT();Lr(c,a,b);return c;}
function Lr(a,b,c){QM(a,b,c);}
function AKl(a,b,c,d){var e,f,g,h,i;e=d.ez(a.bp);d.bC(a.bp,b);f=a.bU.bm();g=0;while(true){if(g>=f){d.bC(a.bp,e);return (-1);}h=a.bU.t(g);i=h.d(b,c,d);if(i>=0)break;g=g+1|0;}return i;}
function AHl(a){return B(295);}
function AMi(a,b){var c;c=b.ez(a.bp);return !c?0:1;}
function Cu(){GT.call(this);}
function AS0(a,b){var c=new Cu();EZ(c,a,b);return c;}
function EZ(a,b,c){Lr(a,b,c);}
function AA$(a,b,c,d){var e,f,g,h,i;e=d.ez(a.bp);d.bC(a.bp,b);f=a.bU.bm();g=0;while(g<f){h=a.bU.t(g);i=h.d(b,c,d);if(i>=0)return a.i.d(a.dA.dV(),c,d);g=g+1|0;}d.bC(a.bp,e);return (-1);}
function ALS(a,b){a.i=b;}
function WK(a){return B(295);}
function KH(){Cu.call(this);}
function ATK(a,b){var c=new KH();ADE(c,a,b);return c;}
function ADE(a,b,c){EZ(a,b,c);}
function AKz(a,b,c,d){var e,f,g,h;e=a.bU.bm();f=0;while(f<e){g=a.bU.t(f);h=g.d(b,c,d);if(h>=0)return a.i.d(b,c,d);f=f+1|0;}return (-1);}
function APs(a,b){return 0;}
function AQU(a){return B(296);}
function Iy(){}
function BA(){C.call(this);}
function AZe(){var a=new BA();Cp(a);return a;}
function Cp(a){I(a);}
function WT(a,b,c){return;}
function ANU(a){return;}
function ADz(a){return;}
function TN(){var a=this;BA.call(a);a.dM=null;a.iX=null;a.tv=null;a.ls=null;a.mC=null;a.qG=null;}
function AVk(a){var b=new TN();AMv(b,a);return b;}
function AMv(a,b){Cp(a);a.dM=b;a.iX=DD(320.0,480.0);a.iX.cN.bq(160.0,240.0,0.0);a.tv=B0(256.0,0.0,64.0,64.0);a.ls=Ba();a.mC=Dq(B(297));a.qG=Bb(a.mC,0,0,320,480);}
function XS(a){if(AYc.dy()){a.iX.fB(a.ls.bq(AYc.e9(),AYc.fp(),0.0));if(a.tv.dw(a.ls.K,a.ls.G)){BH(AZf);a.dM.dh(AVf(a.dM));}}}
function AHd(a){var b;b=AX9;b.fr(16384);a.iX.bA();a.dM.p.eX(a.iX.dp);a.dM.p.fQ();a.dM.p.b3();a.dM.p.bo(a.qG,0.0,0.0,320.0,480.0);a.dM.p.b7();a.dM.p.fb();a.dM.p.b3();a.dM.p.bo(AZg,320.0,0.0,(-64.0),64.0);a.dM.p.b7();b.hb(3042);}
function ABh(a,b){a.c1();a.bA();}
function AM5(a){a.mC.d9();}
function TP(){var a=this;BA.call(a);a.dF=null;a.iE=null;a.tL=null;a.lj=null;a.m5=null;a.q_=null;}
function AT6(a){var b=new TP();AQa(b,a);return b;}
function AQa(a,b){Cp(a);a.dF=b;a.iE=DD(320.0,480.0);a.iE.cN.bq(160.0,240.0,0.0);a.tL=B0(256.0,0.0,64.0,64.0);a.lj=Ba();a.m5=Dq(B(298));a.q_=Bb(a.m5,0,0,320,480);}
function ADO(a){if(AYc.dy()){a.iE.fB(a.lj.bq(AYc.e9(),AYc.fp(),0.0));if(a.tL.dw(a.lj.K,a.lj.G)){BH(AZf);a.dF.dh(AVk(a.dF));}}}
function AL$(a){var b;b=AX9;b.fr(16384);a.iE.bA();a.dF.p.eX(a.iE.dp);a.dF.p.fQ();a.dF.p.b3();a.dF.p.bo(a.q_,0.0,0.0,320.0,480.0);a.dF.p.b7();a.dF.p.fb();a.dF.p.b3();a.dF.p.bo(AZg,320.0,0.0,(-64.0),64.0);a.dF.p.b7();b.hb(3042);}
function YD(a,b){a.c1();a.bA();}
function ABr(a){a.m5.d9();}
function SM(){Cu.call(this);}
function ASI(a,b){var c=new SM();ACF(c,a,b);return c;}
function ACF(a,b,c){EZ(a,b,c);}
function Yl(a,b,c,d){var e,f,g;e=a.bU.bm();f=0;while(true){if(f>=e)return a.i.d(b,c,d);g=a.bU.t(f);if(g.d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AOB(a,b){return 0;}
function ADB(a){return B(299);}
function TO(){var a=this;BA.call(a);a.d0=null;a.jp=null;a.sE=null;a.mm=null;a.oc=null;a.rf=null;}
function AV2(a){var b=new TO();ZH(b,a);return b;}
function ZH(a,b){Cp(a);a.d0=b;a.jp=DD(320.0,480.0);a.jp.cN.bq(160.0,240.0,0.0);a.sE=B0(256.0,0.0,64.0,64.0);a.mm=Ba();a.oc=Dq(B(300));a.rf=Bb(a.oc,0,0,320,480);}
function WV(a){if(AYc.dy()){a.jp.fB(a.mm.bq(AYc.e9(),AYc.fp(),0.0));if(a.sE.dw(a.mm.K,a.mm.G)){BH(AZf);a.d0.dh(Ex(a.d0));}}}
function ADC(a){var b;b=AX9;b.fr(16384);a.jp.bA();a.d0.p.eX(a.jp.dp);a.d0.p.fQ();a.d0.p.b3();a.d0.p.bo(a.rf,0.0,0.0,320.0,480.0);a.d0.p.b7();a.d0.p.fb();a.d0.p.b3();a.d0.p.bo(AZg,320.0,0.0,(-64.0),64.0);a.d0.p.b7();b.hb(3042);}
function AQD(a,b){a.c1();a.bA();}
function ANl(a){a.oc.d9();}
function TM(){var a=this;BA.call(a);a.dT=null;a.jV=null;a.wC=null;a.k8=null;a.mY=null;a.tp=null;}
function AVf(a){var b=new TM();AHb(b,a);return b;}
function AHb(a,b){Cp(a);a.dT=b;a.jV=DD(320.0,480.0);a.jV.cN.bq(160.0,240.0,0.0);a.wC=B0(256.0,0.0,64.0,64.0);a.k8=Ba();a.mY=Dq(B(301));a.tp=Bb(a.mY,0,0,320,480);}
function XB(a){if(AYc.dy()){a.jV.fB(a.k8.bq(AYc.e9(),AYc.fp(),0.0));if(a.wC.dw(a.k8.K,a.k8.G)){BH(AZf);a.dT.dh(AV2(a.dT));}}}
function AG3(a){var b;b=AX9;b.fr(16384);a.jV.bA();a.dT.p.eX(a.jV.dp);a.dT.p.fQ();a.dT.p.b3();a.dT.p.bo(a.tp,0.0,0.0,320.0,480.0);a.dT.p.b7();a.dT.p.fb();a.dT.p.b3();a.dT.p.bo(AZg,320.0,0.0,(-64.0),64.0);a.dT.p.b7();b.hb(3042);}
function AB6(a,b){a.c1();a.bA();}
function AJk(a){a.mY.d9();}
function I8(){}
function HU(){var a=this;C.call(a);a.i7=null;a.k1=0;a.kz=0;a.iZ=null;a.dB=null;a.tX=0;a.h4=0;}
function AUF(a,b,c,d){var e=new HU();Z8(e,a,b,c,d);return e;}
function Z8(a,b,c,d,e){I(a);a.k1=0;a.kz=0;a.h4=0;a.i7=b;a.dB=c;a.iZ=d;a.tX=e;if(a.dB!==null){a.k1=a.dB.bE();a.kz=a.dB.by();if(d===null)a.iZ=a.dB.gA();}}
function Vw(a){return a.h4;}
function Z$(a){if(a.h4)F(Bk(B(302)));if(a.dB===null){if(a.i7.Dg().R(B(303)))a.dB=ZC(a.i7);else a.dB=ALH(a.i7);a.k1=a.dB.bE();a.kz=a.dB.by();if(a.iZ===null)a.iZ=a.dB.gA();}a.h4=1;}
function AHt(a){var b;if(!a.h4)F(Bk(B(304)));a.h4=0;b=a.dB;a.dB=null;return b;}
function AFv(a){return 1;}
function AGo(a){return a.k1;}
function AAn(a){return a.kz;}
function ACr(a){return a.iZ;}
function W2(a){return a.tX;}
function ABi(a){return 1;}
function AIL(a){KY();return AYg;}
function AAT(a,b){F(Bk(B(305)));}
function AIx(a){return a.i7.b();}
function Gt(){C.call(this);}
var AZh=null;var AZi=null;function D1(){D1=N(Gt);AP6();}
function Lw(b){var c,d;D1();c=AZi;d=BB(AUt(b),"stateChanged");c.onreadystatechange=d;AZi.open("GET","filesystem.json");AZi.send();}
function Ns(b){var c,d;D1();c=AW9();Sk(c);d=AWM(c,ATb(b));d.gS();}
function Sk(b){var c;D1();c=JSON.parse($rt_ustr($rt_str(AZi.responseText)));PJ();JU(AZj,c,B(306),b);}
function JU(b,c,d,e){var f,g,h,i,j;D1();f=0;while(f<c.length){g=c[f];h=AOi();i=$rt_str(g.name);h.uj=g.directory?1:0;b.of.Q(i,h);j=J().a(d).a(B(307)).a(i).b();AJ$().kx(B(308),j);if(h.uj)JU(h,g.childFiles,j,e);else{e.c3(AVc(h,j));if(!(!i.gF(B(309))&&!i.gF(B(310))&&!i.gF(B(311))&&!i.gF(B(312))&&!i.gF(B(313))))e.c3(ASJ(h,j));}f=f+1|0;}}
function Rv(b){D1();if(AZi.readyState!=4)return;if(AZi.status==200){Ns(b);return;}b.g4();}
function C5(){D1();return AZi;}
function IA(){D1();return AZh;}
function AP6(){AZh=window;AZi=new XMLHttpRequest();}
function FN(){Bh.call(this);}
function Tk(){var a=new FN();PT(a);return a;}
function PT(a){B2(a);}
function Uz(){FN.call(this);}
function CN(){var a=new Uz();AFA(a);return a;}
function AFA(a){PT(a);}
function Qj(){C.call(this);}
function Rf(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(DK());}return b.data.length;}
function Ju(b,c){if(b===null)F(DJ());if(b===D($rt_voidcls()))F(DK());if(c<0)F(AP$());return AQv(b.Dh(),c);}
function AQv(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ip(){var a=this;C.call(a);a.c7=0;a.g_=0;a.c$=null;a.gX=0;a.hF=0;a.q$=0;a.k6=0;a.kU=0;a.oz=0;a.n6=0;a.qz=null;a.p4=0;a.pS=null;a.p$=0;a.v=null;a.m=null;}
var AZk=null;function AUz(){AUz=N(Ip);AEJ();}
function AU_(a,b){var c=new Ip();Og(c,a,b);return c;}
function Og(a,b,c){AUz();I(a);a.gX=0;a.v=b;a.m=c;}
function J7(a,b,c,d,e,f,g){a.c7=0;a.oz=b<<24>>24;a.n6=c<<24>>24;a.qz=d;a.p4=e;a.pS=f;a.p$=g;a.c$=null;}
function Ot(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.v.l;d=a.v.q;e=a.m.O;f=a.m.P;g=a.m.z;h=g>=a.m.U?a.m.bz-g|0:(a.m.U-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.c7){case 0:break f;case 2:i=a.k6;while(f<i){if(!d){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,b);}b=0;d=d+(-1)|0;k=a.v.bh.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.g_=a.g_+(e&AZk.data[i])|0;e=e>>i;f=f-i|0;a.hF=a.n6;a.c$=a.pS;a.gX=a.p$;a.c7=3;break g;case 4:i=a.k6;while(f<i){if(!d)
{a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,b);}b=0;d=d+(-1)|0;k=a.v.bh.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.kU=a.kU+(e&AZk.data[i])|0;e=e>>i;f=f-i|0;a.c7=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.m.z=g;i=Z(a.m,b);g=a.m.z;if(a.m.U!=a.m.z){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,i);}a.c7=8;break a;case 9:a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c
-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,(-2));}}l=a.hF;while(f<l){if(!d){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,b);}b=0;d=d+(-1)|0;k=a.v.bh.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.gX+(e&AZk.data[l])|0)*3|0;k=a.c$.data;i=m+1|0;e=e>>k[i];f=f-a.c$.data[i]|0;l=a.c$.data[m];if
(l&16){a.k6=l&15;a.kU=a.c$.data[m+2|0];a.c7=4;continue b;}if(l&64){a.c7=9;a.v.bd=B(314);a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,(-3));}a.hF=l;a.gX=(m/3|0)+a.c$.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;b=Pf(a,a.oz,a.n6,a.qz,a.p4,a.pS,a.p$,a.m,a.v);c=a.v.l;d=a.v.q;e=a.m.O;f=a.m.P;g=a.m.z;h=g>=a.m.U?a.m.bz-g|0:(a.m.U-g|0)-1|0;if(b){a.c7=b!=1?9:7;continue b;}}a.hF
=a.oz;a.c$=a.qz;a.gX=a.p4;a.c7=1;}n=a.hF;while(f<n){if(!d)break b;b=0;d=d+(-1)|0;k=a.v.bh.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}o=(a.gX+(e&AZk.data[n])|0)*3|0;k=a.c$.data;i=o+1|0;e=e>>>k[i];f=f-a.c$.data[i]|0;p=a.c$.data[o];if(!p){a.q$=a.c$.data[o+2|0];a.c7=6;continue b;}if(p&16){a.k6=p&15;a.g_=a.c$.data[o+2|0];a.c7=2;continue b;}if(!(p&64)){a.hF=p;a.gX=(o/3|0)+a.c$.data[o+2|0]|0;continue b;}if(!(p&32)){a.c7=9;a.v.bd=B(315);a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=
c;a.m.z=g;return Z(a.m,(-3));}a.c7=7;continue b;}if(h)i=g;else{if(g!=a.m.bz)i=g;else if(!a.m.U)i=g;else{i=0;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;}if(!h){a.m.z=i;l=Z(a.m,b);i=a.m.z;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;if(i==a.m.bz&&a.m.U){i=0;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;}if(!h){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=i;return Z(a.m,l);}}}b=0;k=a.m.bI.data;g=i+1|0;k[i]=a.q$<<24>>24;h=h+(-1)|0;a.c7=0;continue b;}q=g-a.kU|0;while(q<0){q=q+a.m.bz|0;}while
(a.g_){if(h)i=g;else{if(g!=a.m.bz)i=g;else if(!a.m.U)i=g;else{i=0;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;}if(!h){a.m.z=i;b=Z(a.m,b);i=a.m.z;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;if(i==a.m.bz&&a.m.U){i=0;h=i>=a.m.U?a.m.bz-i|0:(a.m.U-i|0)-1|0;}if(!h){a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=i;return Z(a.m,b);}}}r=a.m.bI.data;g=i+1|0;k=a.m.bI.data;l=q+1|0;r[i]=k[q];h=h+(-1)|0;q=l==a.m.bz?0:l;a.g_=a.g_-1|0;}a.c7=0;}a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c
-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,b);}a.m.O=e;a.m.P=f;a.v.q=d;j=a.v;j.o=Long_add(j.o,Long_fromInt(c-a.v.l|0));a.v.l=c;a.m.z=g;return Z(a.m,1);}
function H_(a,b){return;}
function Pf(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;j=i.l;k=i.q;l=h.O;m=h.P;n=h.z;o=n>=h.U?h.bz-n|0:(h.U-n|0)-1|0;p=AZk.data[b];q=AZk.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.bh.data;s=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=s;continue;}a:{t=d.data;u=l&p;v=(e+u|0)*3|0;w=t[v];if(!w){s=v+1|0;l=l>>t[s];m=m-t[s]|0;r=h.bI.data;w=n+1|0;r[n]=t[v+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){s=v+1|0;l=l>>t[s];m=m-t[s]|0;if(w&16){s=w&15;x=t[v+2|0]+(l&AZk.data[s])|0;y=l>>s;z=m-s|0;while(z<15){k=
k+(-1)|0;r=i.bh.data;s=j+1|0;y=y|(r[j]&255)<<z;z=z+8|0;j=s;}r=f.data;s=y&q;ba=(g+s|0)*3|0;w=r[ba];while(true){bb=ba+1|0;y=y>>r[bb];z=z-r[bb]|0;if(w&16)break;if(w&64){i.bd=B(314);s=i.q-k|0;w=z>>3;if(w<s)s=w;w=k+s|0;ba=j-s|0;s=z-(s<<3)|0;h.O=y;h.P=s;i.q=w;i.o=Long_add(i.o,Long_fromInt(ba-i.l|0));i.l=ba;h.z=n;return (-3);}s=s+r[ba+2|0]|0;s=s+(y&AZk.data[w])|0;ba=(g+s|0)*3|0;w=r[ba];}s=w&15;while(z<s){k=k+(-1)|0;t=i.bh.data;w=j+1|0;y=y|(t[j]&255)<<z;z=z+8|0;j=w;}bc=r[ba+2|0]+(y&AZk.data[s])|0;l=y>>s;m=z-s|0;o=o
-x|0;if(n>=bc){bd=n-bc|0;s=n-bd|0;if(s>0&&2>s){t=h.bI.data;s=n+1|0;r=h.bI.data;w=bd+1|0;t[n]=r[bd];t=h.bI.data;n=s+1|0;r=h.bI.data;bd=w+1|0;t[s]=r[w];x=x+(-2)|0;}else{W(h.bI,bd,h.bI,n,2);n=n+2|0;bd=bd+2|0;x=x+(-2)|0;}}else{bd=n-bc|0;while(true){bd=bd+h.bz|0;if(bd>=0)break;}s=h.bz-bd|0;if(x>s){x=x-s|0;w=n-bd|0;if(w>0&&s>w){w=n;while(true){t=h.bI.data;n=w+1|0;r=h.bI.data;ba=bd+1|0;t[w]=r[bd];s=s+(-1)|0;if(!s)break;w=n;bd=ba;}}else{W(h.bI,bd,h.bI,n,s);n=n+s|0;}bd=0;}}s=n-bd|0;if(s>0&&x>s){while(true){t=h.bI.data;w
=n+1|0;r=h.bI.data;s=bd+1|0;t[n]=r[bd];x=x+(-1)|0;if(!x)break;n=w;bd=s;}break a;}W(h.bI,bd,h.bI,n,x);w=n+x|0;break a;}if(w&64){if(w&32){x=i.q-k|0;s=m>>3;if(s<x)x=s;s=k+x|0;w=j-x|0;ba=m-(x<<3)|0;h.O=l;h.P=ba;i.q=s;i.o=Long_add(i.o,Long_fromInt(w-i.l|0));i.l=w;h.z=n;return 1;}i.bd=B(315);x=i.q-k|0;s=m>>3;if(s<x)x=s;ba=k+x|0;s=j-x|0;w=m-(x<<3)|0;h.O=l;h.P=w;i.q=ba;i.o=Long_add(i.o,Long_fromInt(s-i.l|0));i.l=s;h.z=n;return (-3);}s=u+t[v+2|0]|0;u=s+(l&AZk.data[w])|0;v=(e+u|0)*3|0;w=t[v];if(!w)break;}s=v+1|0;l=l>>
t[s];m=m-t[s]|0;r=h.bI.data;w=n+1|0;r[n]=t[v+2|0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=w;}x=i.q-k|0;s=m>>3;if(s<x)x=s;s=k+x|0;ba=j-x|0;y=m-(x<<3)|0;h.O=l;h.P=y;i.q=s;i.o=Long_add(i.o,Long_fromInt(ba-i.l|0));i.l=ba;h.z=w;return 0;}
function AEJ(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;AZk=b;}
function BU(){C.call(this);}
function Sp(){BU.call(this);}
function Q1(){C.call(this);}
function AVh(){var a=new Q1();YZ(a);return a;}
function YZ(a){I(a);}
function FJ(){C.call(this);}
var AZl=null;var AZm=null;function ASH(){ASH=N(FJ);AMS();}
function QL(b){var c,d,e,f,g,h,i,j,k,l,m,$$je;ASH();c=null;a:{b:{try{c=ASV(AW3(AVB(b.rv())));d=Gz(c);e=Gz(c);f=TQ(Gz(c));g=KU(d,e,f);h=g.hw();Bw(h,0);BF(h,CA(h));i=AZm;RV(i);c:{try{while(true){j=Qx(c,AZm);if(j<=0)break;h.zi(AZm,0,j);}GS(i);break c;}catch($$e){$$je=P($$e);k=$$je;}GS(i);F(k);}Bw(h,0);BF(h,CA(h));}catch($$e){$$je=P($$e);if($$je instanceof Bz){l=$$je;break b;}else{k=$$je;break a;}}Fm(c);return g;}try{F(PP(J().a(B(316)).gb(b).a(B(317)).b(),l));}catch($$e){$$je=P($$e);k=$$je;}}Fm(m);F(k);}
function AMS(){AZl=$rt_createByteArray(32000);AZm=$rt_createByteArray(32000);}
function Eo(){Ew.call(this);}
function AZn(a){var b=new Eo();Im(b,a);return b;}
function Im(a,b){KR(a,b);}
function C1(){Eo.call(this);}
function AZo(a){var b=new C1();Zi(b,a);return b;}
function Zi(a,b){Im(a,b);}
function LG(){O.call(this);}
function ATO(){var a=new LG();Zj(a);return a;}
function Zj(a){Bc(a);}
function ABu(a){var b;b=AVj(a);b.bi=1;return b;}
function C6(){}
function EJ(){}
function CY(){C.call(this);}
function AZp(){var a=new CY();GI(a);return a;}
function GI(a){I(a);}
function ACc(a,b){var c,d,e,f;c=b.data;d=a.bm();e=c.length;if(e<d)b=Ju(Cq(b).iz(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.lQ();while(f.j$()){c=b.data;e=d+1|0;c[d]=f.ks();d=e;}return b;}
function Sr(){var a=this;Ed.call(a);a.so=null;a.jx=0;a.Aa=0;a.nu=0;}
function AZq(a,b,c){var d=new Sr();US(d,a,b,c);return d;}
function ATC(a){var b=new Sr();Yr(b,a);return b;}
function US(a,b,c,d){H7(a);a.so=b;a.jx=c;a.Aa=c;a.nu=c+d|0;}
function Yr(a,b){US(a,b,0,b.data.length);}
function AQ9(a,b,c,d){var e,f,g,h,i,j;e=Bd(d,a.nu-a.jx|0);f=0;while(f<e){g=b.data;h=c+1|0;i=a.so.data;j=a.jx;a.jx=j+1|0;g[c]=i[j];f=f+1|0;c=h;}if(e<=0)e=(-1);return e;}
function ACd(a){return a.nu-a.jx|0;}
function R3(){C.call(this);}
function VV(b,c){var d,e,f,g,h,i,j,k;if(!b)return B(318);d=1<<c;e=d-1|0;f=(((32-Hp(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=BE(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=GV(b>>>h&e,d);h=h-c|0;i=k;}return G2(g);}
function Dg(){BT.call(this);}
function AZr(a,b,c){var d=new Dg();QU(d,a,b,c);return d;}
function QU(a,b,c,d){El(a,b);a.x=c;a.bx=d;}
function R4(){var a=this;BA.call(a);a.es=null;a.lH=null;a.q2=null;a.pi=null;a.g1=0;}
function AWj(a){var b=new R4();AOs(b,a);return b;}
function AOs(a,b){var c,d;Cp(a);c=G(Br,7);d=c.data;d[0]=B(319);d[1]=B(320);d[2]=B(321);d[3]=B(322);d[4]=B(323);d[5]=B(324);d[6]=B(325);a.pi=c;a.g1=0;a.es=b;a.lH=AGd();a.lH.wk(0,320.0,480.0);a.q2=Bb(AZg.m_(),210,122,(-40),38);}
function AQz(a,b){if(AYc.dy()){a.g1=a.g1+1|0;if(a.g1==a.pi.data.length){a.g1=a.g1-1|0;a.es.dh(Ex(a.es));}}AX9.fr(16384);a.lH.bA();a.es.p.eX(a.lH.dp);a.es.p.b3();a.es.p.kZ(AZs,0.0,0.0);a.es.p.bo(AZt,60.0,120.0,200.0,200.0);a.es.p.kZ(AZu.ie(0.0,0),120.0,200.0);AZv.A3(a.es.p,a.pi.data[a.g1],0.0,400.0,320.0,1,0);a.es.p.kZ(a.q2,150.0,200.0);a.es.p.b7();}
function BX(){Cr.call(this);this.bw=null;}
function AVK(a,b,c){var d=new BX();Ea(d,a,b,c);return d;}
function Ea(a,b,c,d){EK(a,b,c,d);a.bw=b;}
function VN(a,b,c,d){var e,f;e=0;a:{while((b+a.bw.cr()|0)<=d.L()){f=a.bw.bO(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.i.d(b,c,d);if(f>=0)break;b=b-a.bw.cr()|0;e=e+(-1)|0;}return f;}
function ZG(a){return B(326);}
function Db(){BX.call(this);}
function AU4(a,b,c){var d=new Db();IX(d,a,b,c);return d;}
function IX(a,b,c,d){Ea(a,b,c,d);}
function AHC(a,b,c,d){var e;e=a.Z.d(b,c,d);if(e<0)e=a.i.d(b,c,d);return e;}
function ASv(a,b){JT(a,b);a.Z.T(b);}
function SV(){Db.call(this);}
function ASR(a,b,c){var d=new SV();ARd(d,a,b,c);return d;}
function ARd(a,b,c,d){IX(a,b,c,d);}
function AIB(a,b,c,d){var e;if((b+a.bw.cr()|0)<=d.L()){e=a.bw.bO(b,c);if(e>=1)b=b+e|0;}return a.i.d(b,c,d);}
function IR(){}
function MT(){C.call(this);}
function BB(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Gj(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function KS(){M.call(this);this.DD=null;}
function AUL(a){var b=new KS();AMm(b,a);return b;}
function AMm(a,b){a.DD=b;T(a);}
function AAQ(a,b){return TY(b);}
function Mt(){C.call(this);}
function AMs(b){var c,d,e,f;c=AVY(b.oA());d=K8(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=K8(c);f=f+1|0;}return e;}
function FZ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ASr(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=G(Hl,16384);d=$rt_createByteArray(16384);e=0;f=0;g=0;h=0;while(h<b.h()){i=FZ(b.g(h));if(i==64){h=h+1|0;i=FZ(b.g(h));j=0;k=1;l=0;while(l<3){h=h+1|0;m=FZ(b.g(h));j=j|BE(k,m);k=k*64|0;l=l+1|0;}}else if(i<32)j=1;else{i=(i-32|0)<<24>>24;h=h+1|0;j=FZ(b.g(h));}if(!i&&j>=128){if(e>0){n=c.data;o=f+1|0;n[f]=ACV(g,g+e|0,GG(d,e));f=o;}g=g+(e+j|0)|0;e=0;}else{p=d.data;o=e+j|0;if(o<p.length)q=f;else{n=c.data;q=f+1|0;n[f]=ACV(g,g+e|0,GG(d,e));g=g+o|0;e=0;}while(true){o
=j+(-1)|0;if(j<=0)break;r=e+1|0;p[e]=i;e=r;j=o;}f=q;}h=h+1|0;}return OZ(c,f);}
function FA(){}
function P6(){var a=this;C.call(a);a.sg=null;a.sh=null;a.se=0;a.sf=null;}
function AWL(a,b,c,d){var e=new P6();ADa(e,a,b,c,d);return e;}
function ADa(a,b,c,d,e){I(a);a.sg=b;a.sh=c;a.se=d;a.sf=e;}
function AFc(a){AIJ(a.sg,a.sh,a.se,a.sf);}
function GU(){}
function OB(){C.call(this);this.vj=null;}
function AUt(a){var b=new OB();U5(b,a);return b;}
function U5(a,b){I(a);a.vj=b;}
function AQ4(a){Rv(a.vj);}
function ACU(a){a.mS();}
function GN(){}
function EW(){}
function QH(){var a=this;C.call(a);a.wF=null;a.wr=null;a.sZ=null;}
function ASJ(a,b){var c=new QH();AML(c,a,b);return c;}
function AML(a,b,c){I(a);a.wF=b;a.wr=c;}
function AFG(a,b){var c,d;a.sZ=b;c=IA().document.createElement("img");IA().document.body.appendChild(c);c.style.setProperty("display","none");d=$rt_ustr(a.wr);c.src=d;c.addEventListener("load",BB(a,"handleEvent"));a.wF.wJ=c;}
function AM7(a,b){a.sZ.gS();}
function ADf(a,b){a.i8(b);}
function Go(){F5.call(this);}
function AU1(){var a=new Go();O1(a);return a;}
function O1(a){MQ(a);}
function NZ(a){return MH(a).bL(48,57);}
function G0(){Go.call(this);}
function AS8(){var a=new G0();Rl(a);return a;}
function Rl(a){O1(a);}
function Kw(a){return NZ(a).bL(33,64).bL(91,96).bL(123,126);}
function O$(){G0.call(this);}
function ASX(){var a=new O$();AN_(a);return a;}
function AN_(a){Rl(a);}
function AIf(a){return Kw(a).cJ(32);}
function RR(){O.call(this);}
function AV4(){var a=new RR();AJt(a);return a;}
function AJt(a){Bc(a);}
function APf(a){return AWB(a);}
function OE(){Cu.call(this);}
function ATz(a,b){var c=new OE();AOq(c,a,b);return c;}
function AOq(a,b,c){EZ(a,b,c);}
function ZA(a,b,c,d){var e,f,g,h,i;e=a.bU.bm();f=!d.iM()?d.dH():0;a:{g=a.i.d(b,c,d);if(g>=0){d.bC(a.bp,b);h=0;while(true){if(h>=e)break a;i=a.bU.t(h);if(i.cP(f,b,c,d)>=0){d.bC(a.bp,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASn(a,b){return 0;}
function AJV(a){return B(327);}
function Pa(){var a=this;Bo.call(a);a.cF=null;a.nI=null;a.oR=null;}
function AUv(a){var b=new Pa();AAX(b,a);return b;}
function AAX(a,b){var c;Cc(a);a.cF=b.b();a.bW=b.h();a.nI=AJD(a.bW);a.oR=AJD(a.bW);c=0;while(c<(a.bW-1|0)){a.nI.wQ(a.cF.g(c),(a.bW-c|0)-1|0);a.oR.wQ(a.cF.g((a.bW-c|0)-1|0),(a.bW-c|0)-1|0);c=c+1|0;}}
function AA5(a,b,c){return !a.pW(c,b)?(-1):a.bW;}
function X8(a,b,c,d){var e,f;e=d.L();while(true){if(b>e)return (-1);f=a.AR(c,b,e);if(f<0)return (-1);if(a.i.d(f+a.bW|0,c,d)>=0)break;b=f+1|0;}return f;}
function ADp(a,b,c,d,e){var f;while(true){if(c<b)return (-1);f=a.xz(d,b,c);if(f<0)return (-1);if(a.i.d(f+a.bW|0,d,e)>=0)break;c=f+(-1)|0;}return f;}
function AKs(a){return J().a(B(328)).a(a.cF).b();}
function AEt(a,b){var c,d,e,f,g;if(b instanceof CH)return b.lq()!=a.cF.g(0)?0:1;if(b instanceof CB)return b.bO(0,a.cF.c2(0,1))<=0?0:1;if(!(b instanceof Cd)){if(!(b instanceof Cy))return 1;a:{if(a.cF.h()>1){c=b;d=c.qw();e=a.cF.g(0);c=a.cF;f=c.g(1);if(d==C9(e,f)){e=1;break a;}}e=0;}return e;}b:{c:{c=b;if(!c.s(a.cF.g(0))){g=a.cF;if(g.h()<=1)break c;g=a.cF;e=C9(g.g(0),a.cF.g(1));if(!c.s(e))break c;}e=1;break b;}e=0;}return e;}
function APA(a,b,c,d){var e,f;e=a.cF.g(a.bW-1|0);while(true){if(c>(d-a.bW|0))return (-1);f=b.g((c+a.bW|0)-1|0);if(f==e&&a.pW(b,c))break;c=c+a.nI.cC(f)|0;}return c;}
function AOl(a,b,c,d){var e,f,g,h;e=a.cF.g(0);f=b.h();g=(f-d|0)-a.bW|0;if(g<=0)d=d+g|0;while(true){if(d<c)return (-1);h=b.g(d);if(h==e&&a.pW(b,d))break;d=d-a.oR.cC(h)|0;}return d;}
function AES(a,b,c){var d;d=0;while(d<a.bW){if(b.g(d+c|0)!=a.cF.g(d))return 0;d=d+1|0;}return 1;}
function GA(){C.call(this);}
var AZw=0;var AZx=null;function CZ(){CZ=N(GA);AGJ();}
function UM(){var b,c,d,e,f,g,$$je;CZ();a:{try{b=AX_.rA(B(329));c=b.Ed().wR(B(330));d=c.data;AZw=NC(d[0]);e=0;while(e<5){f=AZx.data;g=e+1|0;f[e]=Bn(d[g]);e=g;}break a;}catch($$e){$$je=P($$e);if($$je instanceof CW){}else{throw $$e;}}}}
function TK(){var b,c,$$je;CZ();a:{try{b=AX_.rA(B(329));b.CE(J().a(NB(AZw)).a(B(330)).b(),0);c=0;while(c<5){b.CE(J().a(Jn(AZx.data[c])).a(B(330)).b(),1);c=c+1|0;}break a;}catch($$e){$$je=P($$e);if($$je instanceof CW){}else{throw $$e;}}}}
function Ql(b){var c,d;CZ();c=0;a:{while(true){if(c>=5)break a;if(AZx.data[c]<b)break;c=c+1|0;}d=4;while(d>c){AZx.data[d]=AZx.data[d-1|0];d=d+(-1)|0;}AZx.data[c]=b;}}
function AGJ(){var b,c;AZw=1;b=$rt_createIntArray(5);c=b.data;c[0]=100;c[1]=80;c[2]=50;c[3]=30;c[4]=10;AZx=b;}
function IL(){var a=this;C.call(a);a.cV=null;a.ck=0;}
var AZy=null;function AEY(){AEY=N(IL);AJd();}
function AWQ(a){var b=new IL();M$(b,a);return b;}
function L0(b,c){var d;AEY();d=b>=0?1:2;while(true){b=b/c|0;if(!b)break;d=d+1|0;}return d;}
function M$(a,b){AEY();I(a);if(b>=0){a.cV=$rt_createCharArray(b);return;}F(AP$());}
function FC(a,b){var c,d;c=((a.cV.data.length>>1)+a.cV.data.length|0)+2|0;if(b>c)c=b;d=$rt_createCharArray(c);W(a.cV,0,d,0,a.ck);a.cV=d;}
function SF(a){var b,c,d,e;b=a.ck+4|0;if(b>a.cV.data.length)FC(a,b);c=a.cV.data;d=a.ck;a.ck=d+1|0;c[d]=110;c=a.cV.data;e=a.ck;a.ck=e+1|0;c[e]=117;c=a.cV.data;e=a.ck;a.ck=e+1|0;c[e]=108;c=a.cV.data;e=a.ck;a.ck=e+1|0;c[e]=108;}
function BV(a,b){var c,d;if(a.ck==a.cV.data.length)FC(a,a.ck+1|0);c=a.cV.data;d=a.ck;a.ck=d+1|0;c[d]=b;}
function Hu(a,b){var c,d;if(b===null){SF(a);return;}c=b.h();d=a.ck+c|0;if(d>a.cV.data.length)FC(a,d);b.Bo(0,c,a.cV,a.ck);a.ck=d;}
function WJ(a){if(!a.ck)return B(93);return EQ(a.cV,0,a.ck);}
function ALy(a,b){BV(a,b);return a;}
function AMN(a,b){return a.yv(b,0);}
function AAq(a,b,c){return a.Cw(b,c,48);}
function W4(a,b,c,d){var e;if(b==(-2147483648)){Hu(a,B(331));return a;}if(b<0){BV(a,45);b= -b;}a:{if(c>1){e=c-L0(b,10)|0;while(true){if(e<=0)break a;a.mM(d);e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000)BV(a,AZy.data[Long_div(Long_rem(Long_fromInt(b),new Long(1410065408, 2)),Long_fromInt(1000000000)).lo]);if(b>=100000000)BV(a,AZy.data[(b%1000000000|0)/100000000|0]);if(b>=10000000)BV(a,AZy.data[(b%100000000|0)/10000000|0]);if(b>=1000000)BV(a,AZy.data[(b%10000000|0)/1000000|0]);if(b>=100000)BV(a,AZy.data[(b%1000000
|0)/100000|0]);BV(a,AZy.data[(b%100000|0)/10000|0]);}if(b>=1000)BV(a,AZy.data[(b%10000|0)/1000|0]);if(b>=100)BV(a,AZy.data[(b%1000|0)/100|0]);if(b>=10)BV(a,AZy.data[(b%100|0)/10|0]);BV(a,AZy.data[b%10|0]);return a;}
function ADL(a,b){Hu(a,b);return a;}
function AJd(){var b,c;b=$rt_createCharArray(10);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;AZy=b;}
function Hv(){}
function Tq(){Bh.call(this);}
function No(){var a=new Tq();ACL(a);return a;}
function ACL(a){B2(a);}
function Ev(){BZ.call(this);}
function AWR(a,b,c){var d=new Ev();G8(d,a,b,c);return d;}
function G8(a,b,c,d){Ek(a,b,c,d);}
function ANW(a,b,c,d){var e;if(!a.Z.ba(d))return a.i.d(b,c,d);e=a.Z.d(b,c,d);if(e>=0)return e;return a.i.d(b,c,d);}
function AP0(a,b){JT(a,b);a.Z.T(b);}
function NM(){C$.call(this);this.g9=null;}
function ASV(a){var b=new NM();Ws(b,a);return b;}
function Ws(a,b){Gy(a,b);a.g9=$rt_createByteArray(8);}
function Qx(a,b){var c;c=b.data;return a.id.fi(b,0,c.length);}
function Lm(a,b){var c,d;c=0;while(c<b){d=a.id.fi(a.g9,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function Gz(a){if(Lm(a,4)<0)F(Nj());return (a.g9.data[0]&255)<<24|(a.g9.data[1]&255)<<16|(a.g9.data[2]&255)<<8|a.g9.data[3]&255;}
function F_(){}
function Ux(){C.call(this);this.mP=null;}
function ATb(a){var b=new Ux();Wq(b,a);return b;}
function Wq(a,b){a.mP=b;I(a);}
function AIF(a){a.mP.gS();}
function AHn(a){a.mP.g4();}
function GE(){}
function JD(){var a=this;C.call(a);a.dP=null;a.jY=null;a.ox=null;a.la=null;a.r8=0;a.k7=0;a.nq=0;a.w4=0;a.eo=0;a.AJ=0;a.AG=0;a.eh=0;a.Cm=0;a.gL=0;a.pE=0;}
function AZz(a,b,c,d,e,f){var g=new JD();Qm(g,a,b,c,d,e,f);return g;}
function Qm(a,b,c,d,e,f,g){var h;I(a);a.gL=(-1);h=e+1|0;a.r8=h;a.dP=$rt_createIntArray(h*2|0);a.jY=$rt_createIntArray(g);Fx(a.jY,(-1));if(f>0)a.ox=$rt_createIntArray(f);Fx(a.dP,(-1));a.nU(b,c,d);}
function APO(a,b,c){a.jY.data[b]=c;}
function AHc(a,b){return a.jY.data[b];}
function Vs(a){return a.k2(0);}
function AGw(a,b){IJ(a,b);return a.dP.data[(b*2|0)+1|0];}
function AAt(a,b,c){a.dP.data[b*2|0]=c;}
function X$(a,b,c){a.dP.data[(b*2|0)+1|0]=c;}
function ALv(a,b){return a.dP.data[b*2|0];}
function ALR(a,b){return a.dP.data[(b*2|0)+1|0];}
function Xw(a,b){if(a.iG(b)<0)return null;return a.la.em(a.iG(b),a.k2(b)).b();}
function AF9(a,b){var c,d;c=a.g7(b);d=a.k$(b);if((d|c|(d-c|0))>=0&&d<=a.la.h())return a.la.em(c,d).b();return null;}
function ALA(a){return a.iG(0);}
function ZR(a,b){IJ(a,b);return a.dP.data[b*2|0];}
function AHE(a){if(a.dP.data[0]==(-1)){a.dP.data[0]=a.eo;a.dP.data[1]=a.eo;}a.gL=a.l4();}
function V_(a,b){return a.ox.data[b];}
function ZF(a,b,c){a.ox.data[b]=c;}
function IJ(a,b){if(!a.k7)F(Gl());if(b>=0&&b<a.r8)return;F(Y(I_(b)));}
function AQb(a){a.k7=1;}
function AQd(a){return a.k7;}
function ARi(a,b,c,d){a.k7=0;a.pE=2;Fx(a.dP,(-1));Fx(a.jY,(-1));if(b!==null)a.la=b;if(c>=0)TA(a,c,d);a.eo=a.nq;}
function AAR(a){a.nU(null,(-1),(-1));}
function TA(a,b,c){a.nq=b;a.w4=c;}
function AMY(a,b){a.eo=b;if(a.gL>=0)b=a.gL;a.gL=b;}
function Y1(a){return a.nq;}
function AHD(a){return a.w4;}
function ABA(a,b){a.pE=b;}
function ADh(a){return a.pE;}
function AEp(a){return a.AG;}
function V8(a){return a.AJ;}
function Xm(a){return a.gL;}
function Mx(){var a=this;Bo.call(a);a.om=null;a.sV=0;}
function AEe(a){var b=new Mx();AJE(b,a);return b;}
function AJE(a,b){Cc(a);a.om=b.jq();a.sV=b.bF;}
function AGe(a,b,c){var d,e;d=a.om;e=CO(c.g(b));return !d.s(C7(e))?(-1):1;}
function YE(a){return J().a(B(332)).a(!a.sV?B(51):B(52)).a(a.om.b()).b();}
function GQ(){var a=this;C.call(a);a.eF=0;a.na=0;a.nb=0;a.cK=0;a.cT=0;a.qF=0.0;a.mK=0.0;a.rC=0.0;a.ni=0.0;a.dL=0;a.iv=0;a.fM=0;a.hI=null;a.mp=0;a.ic=0;}
function YG(){var a=new GQ();ANZ(a);return a;}
function ANZ(a){I(a);a.ic=0;}
function AGC(a,b){var c;if(a.hI!==null){c=a.hI.data[b>>>9];if(c!==null)return c.data[b&511];}return 0;}
function ALo(a,b,c){var d,e,f;if(a.hI===null)a.hI=G($rt_arraycls($rt_bytecls()),128);d=a.hI.data;e=b>>>9;f=d[e];if(f===null){d=a.hI.data;f=$rt_createByteArray(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function AD3(a){return GK(a.eF&65535);}
function KF(){M.call(this);this.w_=null;}
function AVn(a){var b=new KF();AFW(b,a);return b;}
function AFW(a,b){a.w_=b;T(a);}
function ARB(a,b){return Ut(b);}
function GZ(){var a=this;C.call(a);a.gn=0;a.hO=0;a.kI=null;a.my=null;a.kb=null;a.kK=null;}
function AZA(a,b){var c=new GZ();N3(c,a,b);return c;}
function N3(a,b,c){I(a);Z2();a.kI=AZB;a.my=AZB;Vl();a.kb=AZC;a.kK=AZC;a.gn=b;a.hO=c;}
function AIk(a){AX9.v0(a.gn,a.hO);}
function AK1(a,b,c,d){if(b!==null&&!(!d&&a.kb===b)){AX9.mr(a.gn,10242,Kg(b));a.kb=b;}if(c!==null&&!(!d&&a.kK===c)){AX9.mr(a.gn,10243,Kg(c));a.kK=c;}}
function VW(a,b,c,d){if(b!==null&&!(!d&&a.kI===b)){AX9.mr(a.gn,10241,JO(b));a.kI=b;}if(c!==null&&!(!d&&a.my===c)){AX9.mr(a.gn,10240,JO(c));a.my=c;}}
function APU(a){if(a.hO){AX9.Co(a.hO);a.hO=0;}}
function AQQ(b,c){AQO(b,c,0);}
function AQO(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c===null)return;if(!c.tQ())c.wo();e=c.AX();KY();if(e===AYh){c.yT(b);return;}f=c.Dc();g=c.wn();if(c.gA()===f.gA())h=f;else{h=KU(f.bE(),f.by(),c.gA());JQ();h.uZ(AZb);h.Ck(f,0,0,0,0,f.bE(),f.by());if(c.wn())f.d9();g=1;}AX9.ym(3317,1);if(c.Dx())RM(b,h,h.bE(),h.by());else{i=AX9;j=h.i3();k=h.bE();l=h.by();m=h.i5();n=h.jR();o=h.hw();i.i9(b,d,j,k,l,0,m,n,o);}if(g)h.d9();}
function JK(){GZ.call(this);this.fR=null;}
var AZD=null;function EN(){EN=N(JK);ALT();}
function AUH(a){var b=new JK();ON(b,a);return b;}
function AO_(a,b){var c=new JK();Q_(c,a,b);return c;}
function AZE(a,b,c){var d=new JK();Gq(d,a,b,c);return d;}
function AZF(a){var b=new JK();G$(b,a);return b;}
function AZG(a,b,c){var d=new JK();Js(d,a,b,c);return d;}
function ON(a,b){EN();Gq(a,b,null,0);}
function Q_(a,b,c){EN();Gq(a,b,null,c);}
function Gq(a,b,c,d){EN();G$(a,AQH(b,c,d));}
function G$(a,b){EN();Js(a,3553,AX9.Bn(),b);}
function Js(a,b,c,d){EN();N3(a,b,c);a.zA(d);if(d.kA())LE(AX7,a);}
function APH(a,b){if(a.fR!==null&&b.kA()!=a.fR.kA())F(Bk(B(333)));a.fR=b;if(!b.tQ())b.wo();a.g6();AQQ(3553,b);a.A1(a.kI,a.my,1);a.yH(a.kb,a.kK,1);AX9.v0(a.gn,0);}
function AJ4(a){return a.fR.bE();}
function AOZ(a){return a.fR.by();}
function AFn(a){if(!a.hO)return;a.Dm();if(a.fR.kA()&&AZD.e5(AX7)!==null)AZD.e5(AX7).xm(a,1);}
function AIV(a){if(!(a.fR instanceof HU))return Mv(a);return a.fR.b();}
function LE(b,c){var d;EN();d=AZD.e5(b);if(d===null)d=CK();d.c4(c);AZD.Q(b,d);}
function ALT(){AZD=E4();}
function It(){Bh.call(this);}
function Bk(a){var b=new It();Nu(b,a);return b;}
function PP(a,b){var c=new It();WL(c,a,b);return c;}
function Nu(a,b){Es(a,b);}
function WL(a,b,c){Mz(a,b,c);}
function Mu(){C.call(this);}
function VU(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AJs(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&QF(b.constructor,c)?1:0;}
function QF(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(QF(d[e],c))return 1;e=e+1|0;}return 0;}
function AS6(b){b.mq();}
function AHJ(b){ANJ(b,0);}
function ANJ(b,c){return setTimeout(function(){AS6(b);},c);}
function Vq(){return AF3();}
function R$(b){return AC9(String.fromCharCode(b));}
function ANQ(b){return b.$meta.primitive?1:0;}
function AQ7(b){return b.$meta.item;}
function AND(b){return $rt_str(b.$meta.name);}
function AF3(){return [];}
function Fr(){var a=this;C.call(a);a.xe=null;a.zw=null;}
function AZH(a,b){var c=new Fr();ME(c,a,b);return c;}
function ME(a,b,c){var d,e,f,g;d=c.data;I(a);RN(b);e=d.length;f=0;while(f<e){g=d[f];RN(g);f=f+1|0;}a.xe=b;a.zw=c.qu();}
function RN(b){var c,d;if(b.b9())F(N1(b));if(!RP(b.g(0)))F(N1(b));c=1;while(c<b.h()){a:{d=b.g(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(RP(d))break a;else F(N1(b));}}c=c+1|0;}}
function RP(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function ES(){C.call(this);this.CG=null;}
var AZI=null;var AX5=null;var AX3=null;function Fl(){Fl=N(ES);AHT();}
function TR(a){var b=new ES();RH(b,a);return b;}
function RH(a,b){Fl();I(a);a.CG=b;}
function AHT(){AZI=TR(B(334));AX5=TR(B(335));AX3=TR(B(336));}
function E1(){C.call(this);this.C$=0;}
var AZJ=null;var AZK=null;var AZL=null;function K2(){K2=N(E1);Yc();}
function AK7(a){var b=new E1();Rb(b,a);return b;}
function Rb(a,b){K2();I(a);a.C$=b;}
function NC(b){K2();return b!==null&&b.Ib().R(B(337))?1:0;}
function NB(b){K2();return !b?B(338):B(337);}
function Yc(){AZJ=AK7(1);AZK=AK7(0);AZL=D($rt_booleancls());}
function CU(){Bh.call(this);}
function DK(){var a=new CU();Fz(a);return a;}
function U(a){var b=new CU();UR(b,a);return b;}
function Fz(a){B2(a);}
function UR(a,b){Es(a,b);}
function R2(){CU.call(this);this.x2=null;}
function N1(a){var b=new R2();AOF(b,a);return b;}
function AOF(a,b){Fz(a);a.x2=b;}
function UN(){Bh.call(this);}
function ABx(){var a=new UN();AIE(a);return a;}
function AIE(a){B2(a);}
function Qz(){Cu.call(this);}
function AT8(a,b){var c=new Qz();Wx(c,a,b);return c;}
function Wx(a,b,c){EZ(a,b,c);}
function VL(a,b,c,d){var e,f,g,h;e=a.bU.bm();d.bC(a.bp,b);f=0;while(true){if(f>=e)return a.i.d(b,c,d);g=a.bU.t(f);h=g.cP(0,b,c,d);if(h>=0)break;f=f+1|0;}return (-1);}
function AMF(a,b){return 0;}
function YV(a){return B(339);}
function FT(){Dg.call(this);}
function AZM(a,b,c){var d=new FT();MG(d,a,b,c);return d;}
function MG(a,b,c,d){QU(a,b,c,d);}
function AOR(a){var b;if(a.x>=a.bx)F(GM());b=a.x;a.x=b+1|0;return a.qb(b);}
function AIU(a,b){var c;if(a.cb())F(CN());if(a.x>=a.bx)F(EO());c=a.x;a.x=c+1|0;a.o3(c,b);return a;}
function AHL(a,b){if(b>=0&&b<a.bx)return a.qb(b);F(Y(J().a(B(340)).j(b).a(B(56)).j(a.bx).a(B(293)).b()));}
function AO$(a,b,c){if(a.cb())F(CN());if(b>=0&&b<a.bx){a.o3(b,c);return a;}F(Y(J().a(B(340)).j(b).a(B(56)).j(a.bx).a(B(293)).b()));}
function AG9(a){return a.gs();}
function Eg(){var a=this;FT.call(a);a.cA=null;a.tG=0;a.cB=0;}
function AZN(a,b,c,d,e,f){var g=new Eg();Hb(g,a,b,c,d,e,f);return g;}
function Hb(a,b,c,d,e,f,g){MG(a,c,e,f);a.cB=b;a.cA=d;a.tG=g;}
function AGN(a){return a.tG;}
function LQ(){Eg.call(this);}
function AVA(a,b,c,d,e,f){var g=new LQ();ABZ(g,a,b,c,d,e,f);return g;}
function ABZ(a,b,c,d,e,f,g){Hb(a,b,c,d,e,f,g);}
function ADb(a,b){var c,d,e;c=a.cA.H.data;d=a.cB;e=b*4|0;return c[d+e|0]&255|(a.cA.H.data[(a.cB+e|0)+1|0]&255)<<8|(a.cA.H.data[(a.cB+e|0)+2|0]&255)<<16|(a.cA.H.data[(a.cB+e|0)+3|0]&255)<<24;}
function Vg(a,b,c){var d,e,f;d=a.cA.H.data;e=a.cB;f=b*4|0;d[e+f|0]=c<<24>>24;a.cA.H.data[(a.cB+f|0)+1|0]=c>>8<<24>>24;a.cA.H.data[(a.cB+f|0)+2|0]=c>>16<<24>>24;a.cA.H.data[(a.cB+f|0)+3|0]=c>>24<<24>>24;}
function S_(){Ep.call(this);}
function ASZ(a,b){var c=new S_();APK(c,a,b);return c;}
function APK(a,b,c){HF(a,b,c);}
function AAf(a,b,c,d){var e,f;e=a.iB(d);if(e!==null&&(b+e.h()|0)<=d.L()){f=!c.b().v8(e,b)?(-1):e.h();if(f<0)return (-1);d.bC(a.is,f);return a.i.d(b+f|0,c,d);}return (-1);}
function APn(a,b,c,d){var e,f,g,h;e=a.iB(d);f=d.dH();if(e!==null&&(b+e.h()|0)<=f){g=c.b();while(true){if(b>f)return (-1);h=g.o0(e,b);if(h<0)return (-1);if(a.i.d(h+e.h()|0,c,d)>=0)break;b=h+1|0;}return h;}return (-1);}
function WI(a,b,c,d,e){var f,g,h;f=a.iB(e);if(f===null)return (-1);g=d.b();a:{while(true){if(c<b)return (-1);h=g.Do(f,c);if(h<0)break a;if(h<b)break a;if(a.i.d(h+f.h()|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AIn(a,b){return 1;}
function APW(a){return J().a(B(341)).j(a.bp).b();}
function L_(){Cr.call(this);this.nQ=null;}
function ATj(a,b,c,d){var e=new L_();ALc(e,a,b,c,d);return e;}
function ALc(a,b,c,d,e){EK(a,b,c,d);a.nQ=e;}
function AKP(a,b,c,d){var e,f;e=d.L();f=JA(a,b,e,c);if(f>=0)e=f;if(e>b)return a.i.cP(b,e,c,d);return a.i.d(b,c,d);}
function VB(a,b,c,d){var e,f,g,h,i;e=d.L();f=a.i.cM(b,c,d);if(f<0)return (-1);g=JA(a,f,e,c);if(g>=0)e=g;h=a.i.cP(f,e,c,d);if(f<h)f=h;i=f>0?Te(a,b,f-1|0,c):f?(-1):0;if(i>=b)b=i>=f?i:i+1|0;return b;}
function JA(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nQ.jC(d.g(b)))break;b=b+1|0;}return b;}
function Te(a,b,c,d){while(true){if(c<b)return (-1);if(a.nQ.jC(d.g(c)))break;c=c+(-1)|0;}return c;}
function AM1(a){return B(342);}
function Jj(){BT.call(this);}
function RW(){O.call(this);}
function AWI(){var a=new RW();AEK(a);return a;}
function AEK(a){Bc(a);}
function AGx(a){var b;b=AVn(a);b.bi=1;return b;}
function FH(){C.call(this);}
var AZO=null;var AZP=null;function Uo(){Uo=N(FH);ACA();}
function Qa(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Uo();d=$rt_floatToIntBits(b);c.rq=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.n3=0;c.ny=0;return;}g=0;if(f)h=e|8388608;else{h=e<<1;while(Long_eq(Long_and(Long_fromInt(h),Long_fromInt(8388608)),Long_ZERO)){h=h<<1;f=f+(-1)|0;g=g+1|0;}}i=AJp(AZP,f);if(i<0)i= -i-2|0;j=f-AZP.data[i]|0;k=9+j|0;l=Long_fromInt(h);m=Long_shru(Long_mul(l,Long_fromInt(AZO.data[i])),32-k|0).lo;if(m>=1000000000){i=i+1|0;n=f-AZP.data[i]|0;k=9+n|0;m=Long_shru(Long_mul(l,
Long_fromInt(AZO.data[i])),32-k|0).lo;}n=(31-k|0)-g|0;o=n>=0?AZO.data[i]>>>n:AZO.data[i]<< -n;p=(o+1|0)>>1;q=o>>1;if(h==4194304)q=q>>2;r=Qd(m,q);s=NV(m,p);h=BM(r,s);h=h>0?BE(m/r|0,r):h<0?BE(m/s|0,s)+s|0:BE((m+(s/2|0)|0)/s|0,s);if(h>=1000000000){i=i+1|0;h=h/10|0;}else if(h<100000000){i=i+(-1)|0;h=h*10|0;}c.n3=h;c.ny=i-50|0;}
function Qd(b,c){var d,e;Uo();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if(e>=(c/2|0))d=d/10|0;return d;}
function NV(b,c){var d,e;Uo();d=10;while(d<=c){d=d*10|0;}e=b%d|0;if((d-e|0)>(c/2|0))d=d/10|0;return d;}
function ACA(){var b,c,d,e,f,g,h,i,j,k,l;AZO=$rt_createIntArray(100);AZP=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AZO.data;g=d+50|0;f[g]=$rt_udiv(e,20);AZP.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}i=214748364;e=127;d=0;while(d<50){j=0;k=b;while(k>i){k=k>>1;j=j+1|0;e=e+(-1)|0;}k=k*10|0;if(j<=0)b=k;else{l=Long_fromInt(b&((1<<j)-1|0));b=Long_add(Long_fromInt(k),Long_shr(Long_mul(l,Long_fromInt(10)),j)).lo;}f
=AZO.data;k=(50-d|0)-1|0;f[k]=$rt_udiv(b,20);AZP.data[k]=e;d=d+1|0;}}
function V(){var a=this;C.call(a);a.eJ=0.0;a.eI=0.0;a.eH=0.0;a.eG=0.0;}
var AYv=null;var AYw=null;var AYx=null;var AYy=null;var AYu=null;var AZQ=0.0;var AYt=null;var AYz=null;var AYA=null;var AYB=null;var AYC=null;var AYD=null;var AYE=null;var AYF=null;var AYG=null;var AYH=null;var AYI=null;var AYJ=null;var AYK=null;var AYL=null;var AYM=null;var AYN=null;var AYO=null;var AYP=null;var AYQ=null;var AYR=null;var AYS=null;var AYT=null;var AYU=null;var AYV=null;var AYW=null;var AYX=null;var AYY=null;var AYZ=null;var AY0=null;function EM(){EM=N(V);Vv();}
function Yt(){var a=new V();UL(a);return a;}
function Bp(a){var b=new V();Tc(b,a);return b;}
function Cn(a,b,c,d){var e=new V();QX(e,a,b,c,d);return e;}
function UL(a){EM();I(a);}
function Tc(a,b){EM();I(a);JP(a,b);}
function QX(a,b,c,d,e){EM();I(a);a.eJ=b;a.eI=c;a.eH=d;a.eG=e;a.Am();}
function XH(a,b){a.eJ=b.eJ;a.eI=b.eI;a.eH=b.eH;a.eG=b.eG;return a;}
function ANn(a){if(a.eJ<0.0)a.eJ=0.0;else if(a.eJ>1.0)a.eJ=1.0;if(a.eI<0.0)a.eI=0.0;else if(a.eI>1.0)a.eI=1.0;if(a.eH<0.0)a.eH=0.0;else if(a.eH>1.0)a.eH=1.0;if(a.eG<0.0)a.eG=0.0;else if(a.eG>1.0)a.eG=1.0;return a;}
function APz(a){var b;b=(255.0*a.eG|0)<<24|(255.0*a.eH|0)<<16|(255.0*a.eI|0)<<8|255.0*a.eJ|0;return YK(b);}
function AAF(a){var b,c;b=(255.0*a.eJ|0)<<24|(255.0*a.eI|0)<<16|(255.0*a.eH|0)<<8|255.0*a.eG|0;c=Kj(b);while(c.h()<8){c=J().a(B(318)).a(c).b();}return c;}
function JP(b,c){EM();b.eJ=((c&(-16777216))>>>24)/255.0;b.eI=((c&16711680)>>>16)/255.0;b.eH=((c&65280)>>>8)/255.0;b.eG=(c&255)/255.0;}
function Vv(){AYv=Cn(1.0,1.0,1.0,1.0);AYw=Bp((-1077952513));AYx=Bp(2139062271);AYy=Bp(1061109759);AYu=Cn(0.0,0.0,0.0,1.0);AZQ=AYv.s$();AYt=Cn(0.0,0.0,0.0,0.0);AYz=Cn(0.0,0.0,1.0,1.0);AYA=Cn(0.0,0.0,0.5,1.0);AYB=Bp(1097458175);AYC=Bp(1887473919);AYD=Bp((-2016482305));AYE=Cn(0.0,1.0,1.0,1.0);AYF=Cn(0.0,0.5,0.5,1.0);AYG=Bp(16711935);AYH=Bp(2147418367);AYI=Bp(852308735);AYJ=Bp(579543807);AYK=Bp(1804477439);AYL=Bp((-65281));AYM=Bp((-2686721));AYN=Bp((-626712321));AYO=Bp((-5963521));AYP=Bp((-1958407169));AYQ=Bp((-759919361));AYR
=Bp((-1306385665));AYS=Bp((-16776961));AYT=Bp((-13361921));AYU=Bp((-8433409));AYV=Bp((-92245249));AYW=Bp((-9849601));AYX=Cn(1.0,0.0,1.0,1.0);AYY=Bp((-1608453889));AYZ=Bp((-293409025));AY0=Bp((-1339006721));}
function GB(){var a=this;C.call(a);a.jj=0;a.c6=0;a.kd=0;a.jc=0;a.dI=0;a.fu=null;a.Ci=0;a.Bw=0;}
function RG(a,b,c){var d=new GB();AI8(d,a,b,c);return d;}
function AZR(a,b,c,d){var e=new GB();Ui(e,a,b,c,d);return e;}
function AZS(a,b,c,d,e,f){var g=new GB();Rs(g,a,b,c,d,e,f);return g;}
function AI8(a,b,c,d){Ui(a,b,c,d,0);}
function Ui(a,b,c,d,e){var f;f=BM(b,4);Rs(a,b,c,f?5126:5121,f?0:1,d,e);}
function Rs(a,b,c,d,e,f,g){I(a);a.jj=b;a.c6=c;a.jc=d;a.kd=e;a.fu=f;a.Ci=g;a.Bw=BS(b);}
function Nw(a){a:{switch(a.jc){case 5120:case 5121:break;case 5122:case 5123:return 2*a.c6|0;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break a;case 5126:case 5132:return 4*a.c6|0;default:break a;}return a.c6;}return 0;}
function Gw(){var a=this;C.call(a);a.hs=0;a.uE=0;a.gN=null;a.hH=null;a.sP=null;a.jv=null;}
function AZT(a){var b=new Gw();PI(b,a);return b;}
function PI(a,b){I(a);a.jv=b;a.uE=b.ge;a.gN=null;}
function WU(a){if(a.gN!==null)return 1;while(a.hs<a.jv.cd.data.length){if(a.jv.cd.data[a.hs]!==null)return 1;a.hs=a.hs+1|0;}return 0;}
function Nb(a){if(a.uE==a.jv.ge)return;F(YY());}
function Q6(a){var b,c;Nb(a);if(!a.j$())F(ABx());if(a.gN===null){b=a.jv.cd.data;c=a.hs;a.hs=c+1|0;a.hH=b[c];a.gN=a.hH.dX;a.sP=null;}else{if(a.hH!==null)a.sP=a.hH;a.hH=a.gN;a.gN=a.gN.dX;}}
function Gu(){}
function OD(){Gw.call(this);}
function AUr(a){var b=new OD();AGY(b,a);return b;}
function AGY(a,b){PI(a,b);}
function AMG(a){Q6(a);return a.hH.hv;}
function S6(){BX.call(this);}
function ATu(a){var b=new S6();AFq(b,a);return b;}
function AFq(a,b){Ea(a,b.ma(),b.BJ(),b.ii());a.Z.T(a);}
function ARz(a,b,c,d){var e;while((b+a.bw.cr()|0)<=d.L()){e=a.bw;if(e.bO(b,c)<=0)break;b=b+a.bw.cr()|0;}return a.i.d(b,c,d);}
function AI$(a,b,c,d){var e,f,g;e=a.i.cM(b,c,d);if(e<0)return (-1);f=e-a.bw.cr()|0;while(f>=b&&a.bw.bO(f,c)>0){g=f-a.bw.cr()|0;e=f;f=g;}return e;}
function Dr(){var a=this;C.call(a);a.fh=null;a.jT=0;a.ka=null;a.ta=null;a.u0=null;a.tK=null;a.jI=null;a.tJ=null;a.vl=null;a.sp=null;a.dZ=0;a.nO=0;a.mO=0;a.C1=null;a.rn=null;a.r$=null;a.uJ=0;a.Cx=0;a.cU=null;a.gi=null;}
var AZU=0;var AZV=null;var AZW=null;var AZX=null;var AZY=null;function AWV(){AWV=N(Dr);AL1();}
function AT$(a,b){var c=new Dr();Uw(c,a,b);return c;}
function Uw(a,b,c){AWV();I(a);a.fh=B(93);a.ka=Fb();a.ta=Fb();a.u0=Fb();a.jI=Fb();a.tJ=Fb();a.vl=Fb();a.Cx=0;a.cU=Er(1);a.gi=Er(1);if(b===null)F(U(B(343)));if(c===null)F(U(B(344)));if(AZV!==null&&AZV.h()>0)b=J().a(AZV).a(b).b();if(AZW!==null&&AZW.h()>0)c=J().a(AZW).a(c).b();a.rn=b;a.r$=c;a.C1=Ge(16);H1(a,b,c);if(a.uM()){NP(a);PX(a);QW(a,AX7,a);}}
function H1(a,b,c){a.nO=Km(a,35633,b);a.mO=Km(a,35632,c);if(a.nO!=(-1)&&a.mO!=(-1)){a.dZ=SN(a,a.AK());if(a.dZ!=(-1)){a.jT=1;return;}a.jT=0;return;}a.jT=0;}
function Km(a,b,c){var d,e,f,g,h;d=AX$;e=Er(1);f=d.A6(b);if(!f)return (-1);d.Dp(f,c);d.Aj(f);d.An(f,35713,e);g=e.cC(0);if(g)return f;h=d.Av(f);a.fh=J().a(a.fh).a(b!=35633?B(345):B(346)).b();a.fh=J().a(a.fh).a(h).b();return (-1);}
function AFk(a){var b,c;b=AX$;c=b.zn();if(!c)c=(-1);return c;}
function SN(a,b){var c,d,e,f;c=AX$;if(b==(-1))return (-1);c.sJ(b,a.nO);c.sJ(b,a.mO);c.xc(b);d=EH(4);DA(d,Dp());e=d.uL();c.m1(b,35714,e);f=e.cC(0);if(f)return b;a.fh=AX$.wV(b);return (-1);}
function AOe(a){if(!a.jT)return a.fh;a.fh=AX$.wV(a.dZ);return a.fh;}
function APL(a){return a.jT;}
function OC(a,b){var c,d;c=AX$;d=a.jI.nP(b,(-2));if(d==(-2)){d=c.tT(a.dZ,b);a.jI.fP(b,d);}return d;}
function Hm(a,b){return a.xL(b,AZU);}
function AG7(a,b,c){var d,e;d=AX$;e=a.ka.nP(b,(-2));if(e==(-2)){e=d.q0(a.dZ,b);if(e==(-1)&&c)F(U(J().a(B(347)).a(b).a(B(348)).b()));a.ka.fP(b,e);}return e;}
function AE0(a,b,c){var d,e;d=AX$;CV(a);e=Hm(a,b);d.zD(e,c);}
function ACl(a,b,c){a.AT(b,c,0);}
function W8(a,b,c,d){a.Cy(Hm(a,b),c,d);}
function AIw(a,b,c,d){var e;e=AX$;CV(a);e.AU(b,1,d,c.c,0);}
function ARv(a,b,c,d,e,f,g){var h;h=AX$;CV(a);h.B8(b,c,d,e,f,g);}
function W0(a){var b;b=AX$;CV(a);b.vD(a.dZ);}
function ACy(a){var b;b=AX$;b.vD(0);}
function Yb(a,b){var c,d;c=AX$;CV(a);d=OC(a,b);if(d==(-1))return;c.td(d);}
function AGZ(a,b){var c;c=AX$;CV(a);c.td(b);}
function ALj(a,b){var c;c=AX$;CV(a);c.Di(b);}
function CV(a){if(a.uJ){H1(a,a.rn,a.r$);a.uJ=0;}}
function QW(a,b,c){var d;d=AZX.e5(b);if(d===null)d=CK();d.c4(c);AZX.Q(b,d);}
function PX(a){var b,c,d,e;B4(a.cU);AX$.m1(a.dZ,35718,a.cU);b=a.cU.cC(0);a.tK=G(Br,b);c=0;while(c<b){B4(a.cU);a.cU.rz(0,1);B4(a.gi);d=AX$.A7(a.dZ,c,a.cU,a.gi);e=AX$.q0(a.dZ,d);a.ka.fP(d,e);a.ta.fP(d,a.gi.cC(0));a.u0.fP(d,a.cU.cC(0));a.tK.data[c]=d;c=c+1|0;}}
function NP(a){var b,c,d,e;B4(a.cU);AX$.m1(a.dZ,35721,a.cU);b=a.cU.cC(0);a.sp=G(Br,b);c=0;while(c<b){B4(a.cU);a.cU.rz(0,1);B4(a.gi);d=AX$.x0(a.dZ,c,a.cU,a.gi);e=AX$.tT(a.dZ,d);a.jI.fP(d,e);a.tJ.fP(d,a.gi.cC(0));a.vl.fP(d,a.cU.cC(0));a.sp.data[c]=d;c=c+1|0;}}
function X4(a,b){return a.jI.nP(b,(-1));}
function AL1(){AZU=1;AZV=B(93);AZW=B(93);AZX=IP();AZY=Er(1);}
function CM(){Bv.call(this);}
var AZZ=null;var AZ0=null;var AZ1=null;var AZ2=null;var AZ3=null;var AZ4=null;function I6(){I6=N(CM);ACe();}
function Gp(a,b){var c=new CM();L$(c,a,b);return c;}
function L$(a,b,c){I6();Ck(a,b,c);}
function ACe(){var b,c;AZZ=Gp(B(349),0);AZ0=Gp(B(350),1);AZ1=Gp(B(351),2);AZ2=Gp(B(352),3);AZ3=Gp(B(353),4);b=G(CM,5);c=b.data;c[0]=AZZ;c[1]=AZ0;c[2]=AZ1;c[3]=AZ2;c[4]=AZ3;AZ4=b;}
function Hf(){}
function S8(){var a=this;C.call(a);a.nD=null;a.ht=null;}
function AVM(a){var b=new S8();AN$(b,a);return b;}
function AN$(a,b){var c;I(a);a.ht=b;c=a;b.classObject=c;}
function QB(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=AVM(b);return c;}
function X3(a){return a.ht;}
function ABv(a,b){return AJs(b,a.ht);}
function AGp(a){if(a.nD===null)a.nD=AND(a.ht);return a.nD;}
function ADS(a){return ANQ(a.ht);}
function AHR(a){return QB(AQ7(a.ht));}
function Pg(){BU.call(this);}
function CI(){}
function TG(){var a=this;C.call(a);a.I=null;a.bl=0;}
function ASt(){var a=new TG();Zh(a);return a;}
function AVO(a){var b=new TG();Wk(b,a);return b;}
function Zh(a){I(a);a.I=$rt_createIntArray(0);}
function Wk(a,b){I(a);a.I=$rt_createIntArray(((b+32|0)-1|0)/32|0);}
function ALD(a,b){var c,d;c=b/32|0;if(b>=a.bl){E_(a,c+1|0);a.bl=b+1|0;}d=a.I.data;d[c]=d[c]|1<<(b%32|0);}
function AEv(a,b,c){var d,e,f,g;if(b>c)F(B3());d=b/32|0;e=c/32|0;if(c>a.bl){E_(a,e+1|0);a.bl=c;}if(d==e){f=a.I.data;f[d]=f[d]|ET(a,b)&E5(a,c);}else{f=a.I.data;f[d]=f[d]|ET(a,b);g=d+1|0;while(g<e){a.I.data[g]=(-1);g=g+1|0;}f=a.I.data;f[e]=f[e]|E5(a,c);}}
function ET(a,b){var c;c=b%32|0;return (-1)<<c;}
function E5(a,b){var c;c=b%32|0;return !c?0:(-1)>>>(32-c|0);}
function ASq(a,b){var c,d;c=b/32|0;if(c<a.I.data.length){d=a.I.data;d[c]=d[c]&NY((-2),b%32|0);if(b==(a.bl-1|0))Eq(a);}}
function WC(a,b,c){var d,e,f,g,h;if(b>c)F(B3());if(b>=a.bl)return;d=Bd(a.bl,c);e=b/32|0;f=d/32|0;if(e==f){g=a.I.data;g[e]=g[e]&(E5(a,b)|ET(a,d));}else{g=a.I.data;g[e]=g[e]&E5(a,b);h=e+1|0;while(h<f){a.I.data[h]=0;h=h+1|0;}g=a.I.data;g[f]=g[f]&ET(a,d);}Eq(a);}
function WN(a,b){var c;c=b/32|0;return c<a.I.data.length&&a.I.data[c]&1<<(b%32|0)?1:0;}
function ARx(a,b){var c,d,e,f,g;if(b>=a.bl)return (-1);c=b/32|0;d=a.I.data[c];e=d>>>(b%32|0);if(e)return BS(e)+b|0;f=(a.bl+31|0)/32|0;g=c+1|0;while(g<f){if(a.I.data[g])return (g*32|0)+BS(a.I.data[g])|0;g=g+1|0;}return (-1);}
function ALa(a,b){var c,d,e,f,g;if(b>=a.bl)return b;c=b/32|0;d=a.I.data[c]^(-1);e=d>>>(b%32|0);if(e)return BS(e)+b|0;f=(a.bl+31|0)/32|0;g=c+1|0;while(g<f){if(a.I.data[g]!=(-1))return (g*32|0)+BS(a.I.data[g]^(-1))|0;g=g+1|0;}return a.bl;}
function E_(a,b){var c;if(a.I.data.length>=b)return;c=S((b*3|0)/2|0,(a.I.data.length*2|0)+1|0);a.I=ARn(a.I,c);}
function Eq(a){var b,c,d;b=(a.bl+31|0)/32|0;a.bl=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Hp(a.I.data[c]);if(d<32)break;c=c+(-1)|0;a.bl=a.bl-32|0;}a.bl=a.bl-d|0;}}
function AKG(a,b){var c,d;c=Bd(a.I.data.length,b.I.data.length);d=0;while(d<c){if(a.I.data[d]&b.I.data[d])return 1;d=d+1|0;}return 0;}
function AQp(a,b){var c,d,e;c=Bd(a.I.data.length,b.I.data.length);d=0;while(d<c){e=a.I.data;e[d]=e[d]&b.I.data[d];d=d+1|0;}while(c<a.I.data.length){a.I.data[c]=0;c=c+1|0;}a.bl=Bd(a.bl,b.bl);Eq(a);}
function ARL(a,b){var c,d,e;c=Bd(a.I.data.length,b.I.data.length);d=0;while(d<c){e=a.I.data;e[d]=e[d]&(b.I.data[d]^(-1));d=d+1|0;}Eq(a);}
function AQc(a,b){var c,d,e;a.bl=S(a.bl,b.bl);E_(a,(a.bl+31|0)/32|0);c=Bd(a.I.data.length,b.bl);d=0;while(d<c){e=a.I.data;e[d]=e[d]|b.I.data[d];d=d+1|0;}}
function AGD(a,b){var c,d,e;a.bl=S(a.bl,b.bl);E_(a,(a.bl+31|0)/32|0);c=Bd(a.I.data.length,b.bl);d=0;while(d<c){e=a.I.data;e[d]=e[d]^b.I.data[d];d=d+1|0;}Eq(a);}
function AQy(a){return a.bl?0:1;}
function KJ(){M.call(this);this.Bt=null;}
function ATL(a){var b=new KJ();AR2(b,a);return b;}
function AR2(a,b){a.Bt=b;T(a);}
function ABc(a,b){return O3(b);}
function JF(){}
function GL(){var a=this;C.call(a);a.cN=null;a.le=null;a.lB=null;a.n2=null;a.pB=null;a.dp=null;a.jb=null;a.l$=0.0;a.uG=0.0;a.i1=0.0;a.jn=0.0;a.ux=null;a.yE=null;a.xR=null;}
function AZ5(){var a=new GL();Jx(a);return a;}
function Jx(a){I(a);a.cN=Ba();a.le=B1(0.0,0.0,(-1.0));a.lB=B1(0.0,1.0,0.0);a.n2=C_();a.pB=C_();a.dp=C_();a.jb=C_();a.l$=1.0;a.uG=100.0;a.i1=0.0;a.jn=0.0;a.ux=AVG();a.yE=Ba();a.xR=AS7(Ba(),Ba());}
function AJY(a,b,c,d,e,f){var g,h,i,j;g=b.K;h=b.G;i=g-c;j=AX8.by()-h-1.0;j=j-d;b.K=2.0*i/e-1.0;b.G=2.0*j/f-1.0;b.bn=2.0*b.bn-1.0;b.w9(a.jb);return b;}
function AHr(a,b){a.yC(b,0.0,0.0,AX8.bE(),AX8.by());return b;}
function Nz(){var a=this;GL.call(a);a.fH=0.0;a.ps=null;}
function AGd(){var a=new Nz();Zm(a);return a;}
function DD(a,b){var c=new Nz();AAV(c,a,b);return c;}
function Zm(a){Jx(a);a.fH=1.0;a.ps=Ba();a.l$=0.0;}
function AAV(a,b,c){Jx(a);a.fH=1.0;a.ps=Ba();a.i1=b;a.jn=c;a.l$=0.0;a.bA();}
function AAx(a){a.xo(1);}
function ASd(a,b){a.n2.vn(a.fH* -a.i1/2.0,a.fH*a.i1/2.0,a.fH* -(a.jn/2.0),a.fH*a.jn/2.0,a.l$,a.uG);a.pB.za(a.cN,a.ps.fk(a.cN).zM(a.le),a.lB);a.dp.lK(a.n2);Uv(a.dp.c,a.pB.c);if(b){a.jb.lK(a.dp);NF(a.jb.c);a.ux.xx(a.jb);}}
function V9(a,b,c,d){if(!b){a.lB.bq(0.0,1.0,0.0);a.le.bq(0.0,0.0,(-1.0));}else{a.lB.bq(0.0,(-1.0),0.0);a.le.bq(0.0,0.0,1.0);}a.cN.bq(a.fH*c/2.0,a.fH*d/2.0,0.0);a.i1=c;a.jn=d;a.bA();}
function EB(){}
function Nf(){var a=this;C.call(a);a.dU=null;a.p0=0;a.w$=0;a.hr=0;a.lR=0;a.pt=0;}
function AWH(a){var b=new Nf();AKa(b,a);return b;}
function AKa(a,b){I(a);a.hr=1;a.lR=0;a.w$=1;a.dU=JE(b);BJ(a.dU);a.p0=AX$.gM();a.pt=35044;}
function AHB(a){return Bq(a.dU);}
function Vk(a){return CA(a.dU);}
function AO7(a,b,c,d){a.hr=1;B4(a.dU);a.dU.pa(b,c,d);BJ(a.dU);if(a.lR){AX$.dv(34963,Bq(a.dU),a.dU,a.pt);a.hr=0;}}
function ADM(a){a.hr=1;return a.dU;}
function XO(a){if(!a.p0)F(Bk(B(354)));AX$.ct(34963,a.p0);if(a.hr){AX$.dv(34963,Bq(a.dU),a.dU,a.pt);a.hr=0;}a.lR=1;}
function AK8(a){AX$.ct(34963,0);a.lR=0;}
function Pl(){var a=this;C.call(a);a.dC=null;a.np=0;a.zl=0;a.iu=0;a.kV=0;a.oU=0;}
function AUf(a,b){var c=new Pl();AAz(c,a,b);return c;}
function AAz(a,b,c){I(a);a.iu=1;a.kV=0;a.zl=1;a.dC=JE(c);BJ(a.dC);a.np=AX$.gM();a.oU=!b?35048:35044;}
function AEA(a){return Bq(a.dC);}
function Wy(a){return CA(a.dC);}
function AJu(a,b,c,d){a.iu=1;B4(a.dC);a.dC.pa(b,c,d);BJ(a.dC);if(a.kV){AX$.dv(34963,Bq(a.dC),a.dC,a.oU);a.iu=0;}}
function Vu(a){a.iu=1;return a.dC;}
function AQe(a){if(!a.np)F(Bk(B(354)));AX$.ct(34963,a.np);if(a.iu){AX$.dv(34963,Bq(a.dC),a.dC,a.oU);a.iu=0;}a.kV=1;}
function AMB(a){AX$.ct(34963,0);a.kV=0;}
function GO(){CS.call(this);}
var AZ6=0.0;var AZ7=null;function ABB(){ABB=N(GO);AK2();}
function C0(b){var c,d,e,f,g,h,i,j,k,l,m,n;ABB();c=b.y6();d=0;e=0;if(c.g(e)==45){e=1;d=1;}else if(c.g(e)==43)e=1;a:{f=c.g(e);g=0;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){while(true){if(c.g(e)!=48){while(e<c.h()){j=c.g(e);if(j<48)break a;if(j>57)break a;if(g>=1.0E8)h=h+1|0;else g=(g*10|0)+(j-48|0)|0;e=e+1|0;}break a;}e=e+1|0;if(e==c.h())break;}return 0.0;}F(GY());}}if(e<c.h()&&c.g(e)==46){e=e+1|0;b:{while(true){if(e>=c.h())break b;j=c.g(e);if(j<48)break b;if(j>57)break;if(g<1.0E38){g=(g*10|0)+(j-48|0)|0;h=h+(-1)
|0;}e=e+1|0;i=1;}}if(!i)F(GY());}if(e<c.h()){k=c.g(e);if(k!=101&&k!=69)F(GY());l=e+1|0;m=0;if(c.g(l)==45){l=l+1|0;m=1;}else if(c.g(l)==43)l=l+1|0;n=0;j=0;c:{while(true){if(l>=c.h())break c;k=c.g(l);if(k<48)break c;if(k>57)break;n=(10*n|0)+(k-48|0)|0;j=1;l=l+1|0;}}if(!j)F(GY());if(m)n= -n;h=h+n|0;}d:{j=BM(h,38);if(j<=0){if(j)break d;if(g<=34028234)break d;}return d?(-Infinity):Infinity;}if(d)g= -g;return g*RD(h);}
function RD(b){var c,d;ABB();if(b>=0)c=10.0;else{c=0.1;b= -b;}d=1.0;while(b){if(b%2|0)d=d*c;c=c*c;b=b/2|0;}return d;}
function AK2(){AZ6=NaN;AZ7=D($rt_floatcls());}
function LI(){C.call(this);}
function Xv(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function GG(b,c){var d,e,f,g;d=b.data;e=$rt_createByteArray(c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ARn(b,c){var d,e,f,g;d=b.data;e=$rt_createIntArray(c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function OZ(b,c){var d,e,f,g;d=b.data;e=Ju(Cq(b).iz(),c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ACz(b,c,d,e){var f,g;if(c>d)F(DK());while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Fx(b,c){ACz(b,0,b.data.length,c);}
function AJp(b,c){return AKH(b,0,b.data.length,c);}
function AKH(b,c,d,e){var f,g,h,i;if(c>d)F(DK());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function CH(){Bo.call(this);this.fc=0;}
function M9(a){var b=new CH();ALp(b,a);return b;}
function ALp(a,b){Cc(a);a.fc=b;}
function AFP(a){return 1;}
function AEa(a,b,c){return a.fc!=c.g(b)?(-1):1;}
function AB4(a,b,c,d){var e,f,g,h;if(!(c instanceof Br))return ER(a,b,c,d);e=c;f=d.L();while(true){if(b>=f)return (-1);g=e.eg(a.fc,b);if(g<0)return (-1);h=a.i;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function AFX(a,b,c,d,e){var f,g;if(!(d instanceof Br))return EY(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.it(a.fc,c);if(g<0)break a;if(g<b)break a;if(a.i.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function APx(a){return J().a(B(93)).cc(a.fc).b();}
function Ym(a){return a.fc;}
function AOT(a,b){if(b instanceof CH)return b.lq()!=a.fc?0:1;if(!(b instanceof CB)){if(b instanceof Cd)return b.s(a.fc);if(!(b instanceof Cy))return 1;return 0;}return b.bO(0,GK(a.fc))<=0?0:1;}
function Mi(){var a=this;M.call(a);a.mG=0;a.rZ=null;a.n8=null;}
function ASE(a,b,c){var d=new Mi();ARe(d,a,b,c);return d;}
function ARe(a,b,c,d){a.n8=b;a.mG=c;a.rZ=d;T(a);}
function ANh(a,b){return !(a.mG^a.n8.Y.eY(b))&&!(a.mG^a.n8.eW^a.rZ.s(b))?0:1;}
function Mo(){var a=this;M.call(a);a.tD=0;a.to=null;a.sY=null;a.Dn=null;}
function AW$(a,b,c,d){var e=new Mo();ACZ(e,a,b,c,d);return e;}
function ACZ(a,b,c,d,e){a.Dn=b;a.tD=c;a.to=d;a.sY=e;T(a);}
function U4(a,b){return a.tD^(!a.to.s(b)&&!a.sY.s(b)?0:1)?0:1;}
function Mk(){var a=this;M.call(a);a.tx=null;a.AO=null;}
function AT1(a,b){var c=new Mk();Vo(c,a,b);return c;}
function Vo(a,b,c){a.AO=b;a.tx=c;T(a);}
function AMn(a,b){return a.tx.s(b);}
function Mj(){var a=this;M.call(a);a.mR=0;a.vP=null;a.pd=null;}
function ATJ(a,b,c){var d=new Mj();VJ(d,a,b,c);return d;}
function VJ(a,b,c,d){a.pd=b;a.mR=c;a.vP=d;T(a);}
function AHw(a,b){return !(a.mR^a.pd.Y.eY(b))&&!(a.mR^a.pd.eW^a.vP.s(b))?1:0;}
function Jh(){}
function Sc(){C.call(this);}
function AJ$(){var a=new Sc();AA3(a);return a;}
function AA3(a){I(a);}
function AJj(a,b,c){console.log("TeaVM: "+$rt_ustr(J().a(B(355)).a(b).a(B(356)).a(c).b()));}
function Wa(a,b,c){console.log("TeaVM: "+$rt_ustr(J().a(B(355)).a(b).a(B(356)).a(c).b()));}
function IV(){}
function Ki(){var a=this;C.call(a);a.dR=null;a.pm=0;a.fK=null;a.n9=0;a.nw=null;a.nB=0;a.zm=null;a.zN=0;a.yi=null;a.C5=0;a.jX=null;a.qq=0;a.lp=null;a.n4=0;a.pC=0;a.BV=null;a.Cg=null;a.AC=null;a.A=null;}
var AZ8=null;function ATo(){ATo=N(Ki);APP();}
function AW_(a){var b=new Ki();P8(b,a);return b;}
function P8(a,b){ATo();I(a);a.dR=Dm();a.pm=1;a.fK=Dm();a.n9=1;a.nw=Dm();a.nB=1;a.zm=Dm();a.zN=1;a.yi=Dm();a.C5=1;a.jX=Dm();a.qq=1;a.lp=Dm();a.n4=1;a.pC=0;a.BV=new Float32Array(40000);a.Cg=new Int32Array(12000);a.AC=new Int16Array(12000);a.A=Lt(b);a.A.pixelStorei(37441,0);}
function AMC(a,b){var c,d,e,f,g,h;c=b.uX();d=new Float32Array(X(c));if(Sz(c))e=My(c);else{e=$rt_createFloatArray(X(c));c.y3(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f];d[f]=h;f=f+1|0;}return d;}
function AM9(a,b){var c,d,e,f,g,h;c=b.Hd();d=new Float64Array(X(c));if(AUe(c))e=AWd(c);else{e=$rt_createDoubleArray(X(c));c.FC(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f];d[f]=h;f=f+1|0;}return d;}
function AI6(a,b){var c,d,e,f,g,h;c=b.zO();d=new Int16Array(X(c));if(UF(c))e=OS(c);else{e=$rt_createShortArray(X(c));c.xM(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f];d[f]=h;f=f+1|0;}return d;}
function AGE(a,b){var c,d,e,f,g,h;c=b.I5();d=new Int32Array(X(c));if(AT_(c))e=AVS(c);else{e=$rt_createIntArray(X(c));c.Go(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f];d[f]=h;f=f+1|0;}return d;}
function Y0(a,b){var c,d,e,f,g,h;c=b.qI();d=new Int8Array(X(c));if(c.kQ())e=FX(c);else{e=$rt_createByteArray(X(c));c.t8(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f];d[f]=h;f=f+1|0;}return d;}
function AE_(a,b){var c,d,e,f,g,h;c=b.qI();d=new Uint8Array(X(c));if(c.kQ())e=FX(c);else{e=$rt_createByteArray(X(c));c.t8(e);}f=0;while(true){g=e.data;if(f>=g.length)break;h=g[f]<<16>>16;d[f]=h;f=f+1|0;}return d;}
function Lb(a,b,c){var d,e;d=a.lp.t(b);if(d===null){d=Dm();a.lp.g3(b,d);}e=a.n4;a.n4=e+1|0;d.g3(e,c);return e;}
function Jq(a,b){return a.lp.t(a.pC).t(b);}
function QC(a,b){var c;c=a.n9;a.n9=c+1|0;a.fK.g3(c,b);return c;}
function K_(a,b){var c;c=a.pm;a.pm=c+1|0;a.dR.g3(c,b);return c;}
function RC(a,b){var c;c=a.nB;a.nB=c+1|0;a.nw.g3(c,b);return c;}
function Ue(a,b){var c;c=a.qq;a.qq=c+1|0;a.jX.g3(c,b);return c;}
function PV(a,b){a.jX.iq(b);}
function AKg(a,b,c){var d,e;d=a.A;e=a.jX.t(c);d.bindTexture(b,e);}
function Wt(a,b){a.A.clear(b);}
function AC2(a,b,c,d,e){a.A.clearColor(b,c,d,e);}
function Zq(a,b){var c;c=a.jX.t(b);PV(a,b);a.A.deleteTexture(c);}
function AJn(a,b){a.A.depthMask(!!b);}
function ZZ(a,b){a.A.disable(b);}
function AIW(a,b,c,d){a.A.drawArrays(b,c,d);}
function ABY(a,b,c,d,e){var f,g;f=a.A;g=CD(e);f.drawElements(b,c,d,g);}
function ZT(a,b){a.A.enable(b);}
function AJC(a){var b;b=a.A.createTexture();return Ue(a,b);}
function AG8(a,b){return $rt_str(a.A.getParameter(b));}
function AMa(a,b,c){a.A.pixelStorei(b,c);}
function AMe(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;if(j===null){k=a.A;l=null;k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(j instanceof Cz){k=a.A;m=j;l=a.yh(m);k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(j instanceof Di){k=a.A;m=j;l=a.nl(m);k.texImage2D(b,c,d,e,f,g,h,i,l);}else if(j instanceof Dg){n=a.A;m=j;o=a.m4(m);n.texImage2D(b,c,d,e,f,g,h,i,o);}else if(j instanceof CF){n=a.A;m=j;o=a.nT(m);n.texImage2D(b,c,d,e,f,g,h,i,o);}else{if(!(j instanceof Jj))F(Bk(B(357)));m=a.A;n=j;n=a.yb(n);m.texImage2D(b,c,d,e,f,g,h,i,n);}}
function AEn(a,b,c,d,e){a.A.viewport(b,c,d,e);}
function AMA(a,b,c){var d,e;d=a.dR.t(b);e=a.fK.t(c);a.A.attachShader(d,e);}
function AOz(a,b,c){var d,e;d=a.A;e=a.nw.t(c);d.bindBuffer(b,e);}
function YW(a,b,c,d,e){a.A.blendFuncSeparate(b,c,d,e);}
function Z6(a,b,c,d,e){var f,g,h;if(d instanceof CF){f=a.A;g=a.nT(d);f.bufferData(b,g,e);}else if(d instanceof Di){f=a.A;g=a.nl(d);f.bufferData(b,g,e);}else if(d instanceof Dg){g=a.A;h=a.m4(d);g.bufferData(b,h,e);}else{if(!(d instanceof Cz))F(Bk(B(358)));f=a.A;g=a.wS(d);f.bufferData(b,g,e);}}
function ANu(a,b,c,d,e){var f,g;if(e instanceof CF){f=a.A;g=a.nT(e);f.bufferSubData(b,c,g);}else if(e instanceof Di){f=a.A;g=a.nl(e);f.bufferSubData(b,c,g);}else if(e instanceof Dg){f=a.A;g=a.m4(e);f.bufferSubData(b,c,g);}else{if(!(e instanceof Cz))F(Bk(B(358)));f=a.A;g=a.wS(e);f.bufferSubData(b,c,g);}}
function XT(a,b){var c;c=a.fK.t(b);a.A.compileShader(c);}
function AI3(a){var b;b=a.A.createProgram();return K_(a,b);}
function ABV(a,b){var c;c=a.A.createShader(b);return QC(a,c);}
function AOC(a,b){a.A.disableVertexAttribArray(b);}
function AJB(a,b,c,d,e){a.A.drawElements(b,c,d,e);}
function AOt(a,b){a.A.enableVertexAttribArray(b);}
function V2(a){var b;b=a.A.createBuffer();return RC(a,b);}
function ABt(a,b){a.A.generateMipmap(b);}
function ALJ(a,b,c,d,e){var f,g,h;f=a.A;g=a.dR.t(b);h=f.getActiveAttrib(g,c);d.fG(h.size);e.fG(h.type);return $rt_str(h.name);}
function AIq(a,b,c,d,e){var f,g,h;f=a.A;g=a.dR.t(b);h=f.getActiveUniform(g,c);d.fG(h.size);e.fG(h.type);return $rt_str(h.name);}
function WR(a,b,c){var d;d=a.dR.t(b);return a.A.getAttribLocation(d,$rt_ustr(c));}
function ALQ(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.A;f=a.dR.t(b);d.fG(e.getProgramParameter(f,c));}else{g=a.A;h=a.dR.t(b);i=g.getProgramParameter(h,c)?1:0;d.fG(!i?0:1);}}
function AOS(a,b){var c,d;c=a.A;d=a.dR.t(b);return $rt_str(c.getProgramInfoLog(d));}
function AKo(a,b,c,d){var e,f,g,h;if(c!=35713&&c!=35712){e=a.A;f=a.fK.t(b);g=e.getShaderParameter(f,c);d.fG(g);}else{h=a.A;e=a.fK.t(b);g=h.getShaderParameter(e,c)?1:0;d.fG(!g?0:1);}}
function VZ(a,b){var c,d;c=a.A;d=a.fK.t(b);return $rt_str(c.getShaderInfoLog(d));}
function ARl(a,b,c){var d,e,f;d=a.A;e=a.dR.t(b);f=d.getUniformLocation(e,$rt_ustr(c));return Lb(a,b,f);}
function AOh(a,b){var c,d;c=a.A;d=a.dR.t(b);c.linkProgram(d);}
function AL2(a,b,c){var d,e;d=a.A;e=a.fK.t(b);d.shaderSource(e,$rt_ustr(c));}
function AL9(a,b,c,d){var e,f;e=a.A;f=d;e.texParameterf(b,c,f);}
function AAh(a,b,c){var d;d=Jq(a,b);a.A.uniform1i(d,c);}
function AL6(a,b,c,d,e,f){var g;g=Jq(a,b);a.A.uniformMatrix4fv(g,!!d,e.data);}
function AFJ(a,b){var c,d;a.pC=b;c=a.A;d=a.dR.t(b);c.useProgram(d);}
function AQZ(a,b,c,d,e,f,g){a.A.vertexAttribPointer(b,c,d,!!e,f,g);}
function APP(){AZ8=window;}
function Lt(b){if(typeof WebGLDebugUtils=='undefined'){return b;}return WebGLDebugUtils.makeDebugContext(b);}
function Ml(){var a=this;M.call(a);a.sN=null;a.DA=null;}
function ATX(a,b){var c=new Ml();VG(c,a,b);return c;}
function VG(a,b,c){a.DA=b;a.sN=c;T(a);}
function ADT(a,b){return a.sN.s(b);}
function Mr(){var a=this;M.call(a);a.uu=null;a.uH=0;a.ug=null;}
function AST(a,b,c){var d=new Mr();AA9(d,a,b,c);return d;}
function AA9(a,b,c,d){a.ug=b;a.uu=c;a.uH=d;T(a);}
function AAr(a,b){return !a.uu.s(b)&&!(a.uH^a.ug.Y.eY(b))?1:0;}
function Mn(){var a=this;M.call(a);a.wm=0;a.vS=null;a.vL=null;a.ys=null;}
function AWs(a,b,c,d){var e=new Mn();Wl(e,a,b,c,d);return e;}
function Wl(a,b,c,d,e){a.ys=b;a.wm=c;a.vS=d;a.vL=e;T(a);}
function ABy(a,b){return a.wm^(!a.vS.s(b)&&!a.vL.s(b)?0:1);}
function D_(){}
function Mm(){var a=this;M.call(a);a.vW=null;a.yV=null;}
function AWx(a,b){var c=new Mm();VI(c,a,b);return c;}
function VI(a,b,c){a.yV=b;a.vW=c;T(a);}
function AHz(a,b){return a.vW.s(b)?0:1;}
function MA(){Bl.call(this);this.oD=null;}
function AVT(a){var b=new MA();ZW(b,a);return b;}
function ZW(a,b){B5(a);a.oD=b;}
function AJ1(a,b,c,d){var e,f,g,h,i;e=d.L();f=b+1|0;if(f>e){d.eh=1;return (-1);}g=c.g(b);if(BP(g)){h=b+2|0;if(h<=e){i=c.g(f);if(EA(g,i))return a.oD.jC(C9(g,i))?(-1):a.i.d(h,c,d);}}return a.oD.jC(g)?(-1):a.i.d(f,c,d);}
function AAg(a){return B(359);}
function AMZ(a,b){a.i=b;}
function U2(a){return (-2147483602);}
function ARG(a,b){return 1;}
function Mp(){var a=this;M.call(a);a.tW=null;a.tt=0;a.vd=null;}
function ATh(a,b,c){var d=new Mp();ADJ(d,a,b,c);return d;}
function ADJ(a,b,c,d){a.vd=b;a.tW=c;a.tt=d;T(a);}
function APt(a,b){return !a.tW.s(b)&&!(a.tt^a.vd.Y.eY(b))?0:1;}
function CG(){C.call(this);}
var AZ9=null;var AZ$=null;var AZ_=null;var A0a=null;var A0b=null;var A0c=null;function R(){R=N(CG);W$();}
function GK(b){var c,d;R();c=new Br;d=$rt_createCharArray(1);d.data[0]=b;Fp(c,d);return c;}
function KQ(b){R();return b>0&&b<=65535?1:0;}
function GJ(b){R();return b>=65536&&b<=1114111?1:0;}
function BP(b){R();return (b&64512)!=55296?0:1;}
function B_(b){R();return (b&64512)!=56320?0:1;}
function J3(b){R();return !BP(b)&&!B_(b)?0:1;}
function EA(b,c){R();return BP(b)&&B_(c)?1:0;}
function C9(b,c){R();return ((b&1023)<<10|c&1023)+65536|0;}
function Q$(b,c){R();return Mq(b,c,b.data.length);}
function Mq(b,c,d){var e,f;R();if(c<(d-1|0)){e=b.data;if(BP(e[c])){f=c+1|0;if(B_(e[f]))return C9(e[c],e[f]);}}return b.data[c];}
function E3(b){var c;R();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fi(b){R();return (56320|b&1023)&65535;}
function C7(b){R();return D5(b)&65535;}
function D5(b){R();return R$(b).toLowerCase().charCodeAt(0);}
function CO(b){R();return D4(b)&65535;}
function D4(b){R();return R$(b).toUpperCase().charCodeAt(0);}
function Jv(b,c){R();return Sh(b,c);}
function Sh(b,c){var d;R();if(c>=2&&c<=36){d=HJ(b);if(d>=c)d=(-1);return d;}return (-1);}
function PB(b){R();return HJ(b);}
function HJ(b){var c,d,e,f,g,h,i,j;R();c=KN();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BM(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function GV(b,c){R();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Up(b){R();return BN(b)!=9?0:1;}
function KN(){R();if(AZ$===null)AZ$=AMs((PS().value!==null?$rt_str(PS().value):null));return AZ$;}
function PS(){R();if(A0b===null)A0b=Ow();return A0b;}
function Oz(){R();if(AZ_===null)AZ_=ASr((NS().value!==null?$rt_str(NS().value):null));return AZ_;}
function NS(){R();if(A0c===null)A0c=UH();return A0c;}
function Do(b){var c,d;R();if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=E3(b);d[1]=Fi(b);return c;}
function Oe(b){var c;R();a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}c=1;break a;}c=0;}return c;}
function EX(b){R();return BN(b);}
function BN(b){var c,d,e,f,g,h;R();if(KQ(b)&&J3(b&65535))return 19;c=Oz();d=c.data;e=0;f=d.length-1|0;while(e<=f){g=(e+f|0)/2|0;h=d[g];if(b>=h.t3)e=g+1|0;else{if(b>=h.nX)return h.sD.data[b-h.nX|0];f=g-1|0;}}return 0;}
function Tx(b){R();return BN(b)!=2?0:1;}
function Kx(b){R();return BN(b)!=1?0:1;}
function K0(b){R();return BN(b)!=3?0:1;}
function Pv(b){R();return !BN(b)?0:1;}
function Ts(b){R();switch(BN(b)){case 1:case 2:case 3:case 4:case 5:break;default:return 0;}return 1;}
function Iz(b){R();return Ho(b);}
function Ho(b){R();a:{switch(BN(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function O3(b){R();a:{switch(BN(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return DZ(b);}
function Ut(b){R();a:{switch(BN(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}return 1;}return DZ(b);}
function TY(b){R();a:{switch(BN(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}return 1;}return DZ(b);}
function NU(b){R();a:{switch(BN(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}return 1;}return DZ(b);}
function DZ(b){R();a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return BN(b)!=16?0:1;}
function HY(b){R();switch(BN(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rm(b){R();return Iv(b);}
function Iv(b){R();switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return HY(b);}return 1;}
function W$(){AZ9=D($rt_charcls());A0a=G(CG,128);}
function Ow(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function UH(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function KI(){var a=this;Bo.call(a);a.p6=0;a.re=0;}
function Zo(a){var b=new KI();AMy(b,a);return b;}
function AMy(a,b){Cc(a);a.p6=b;a.re=EP(b);}
function V6(a,b,c){return a.p6!=c.g(b)&&a.re!=c.g(b)?(-1):1;}
function AEH(a){return J().a(B(360)).cc(a.p6).b();}
function Cy(){var a=this;Bo.call(a);a.j5=0;a.i0=0;a.kp=0;}
function ATc(a){var b=new Cy();ARE(b,a);return b;}
function ARE(a,b){var c,d;Cc(a);a.bW=2;a.kp=b;c=Do(b);d=c.data;a.j5=d[0];a.i0=d[1];}
function AMk(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.j5==e&&a.i0==f?2:(-1);}
function AJo(a,b,c,d){var e,f,g,h;if(!(c instanceof Br))return ER(a,b,c,d);e=c;f=d.L();while(b<f){g=e.eg(a.j5,b);if(g<0)return (-1);b=g+1|0;if(b>=f)continue;h=e.g(b);if(a.i0==h&&a.i.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function Zd(a,b,c,d,e){var f,g,h;if(!(d instanceof Br))return EY(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=f.it(a.i0,c);h=g+(-1)|0;if(h<0)break a;if(h<b)break a;if(a.j5==f.g(h)&&a.i.d(h+2|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AP1(a){return J().a(B(93)).cc(a.j5).cc(a.i0).b();}
function VP(a){return a.kp;}
function AL0(a,b){if(b instanceof Cy)return b.qw()!=a.kp?0:1;if(b instanceof Cd)return b.s(a.kp);if(b instanceof CH)return 0;if(!(b instanceof CB))return 1;return 0;}
function O_(){var a=this;O.call(a);a.pF=0;a.mU=0;a.q5=0;}
function Fk(a,b){var c=new O_();ABJ(c,a,b);return c;}
function AUu(a,b,c){var d=new O_();Vf(d,a,b,c);return d;}
function ABJ(a,b,c){Bc(a);a.mU=c;a.pF=b;}
function Vf(a,b,c,d){Bc(a);a.q5=d;a.mU=c;a.pF=b;}
function Ve(a){var b;b=AS4(a.pF);if(a.q5)b.bN.lU(0,2048);b.bi=a.mU;return b;}
function CX(){C.call(this);}
var A0d=null;var A0e=null;function A0f(){var a=new CX();HM(a);return a;}
function HM(a){I(a);}
function HV(b){if(!(b&1)){if(A0e!==null)return A0e;A0e=AWh();return A0e;}if(A0d!==null)return A0d;A0d=AVJ();return A0d;}
function Gc(){BT.call(this);}
function A0g(a,b,c){var d=new Gc();PO(d,a,b,c);return d;}
function PO(a,b,c,d){El(a,b);a.x=c;a.bx=d;}
function AF6(b,c,d){return AVI(0,b.data.length,b,c,c+d|0,0);}
function AIO(b){return AF6(b,0,b.data.length);}
function Xe(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(361)).j(g).a(B(362)).j(f).b()));if(X(a)<d)F(GM());if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.ws(h);i=i+1|0;c=g;h=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function AR3(a,b,c,d){var e,f,g,h,i;if(a.cb())F(CN());if(X(a)<d)F(EO());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(366)).j(g).a(B(362)).j(f).b()));if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=h+1|0;f=c+1|0;a.pn(h,e[c]);i=i+1|0;h=g;c=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function XV(a,b,c,d){var e,f,g,h,i,j;if(a.cb())F(CN());e=d-c|0;if(X(a)<e)F(EO());if(c>=0&&c<b.h()){if(d>b.h()){f=new Dh;g=J().a(B(366)).j(d).a(B(367));OM(f,g.j(b.h()).b());F(f);}if(c>d)F(Y(J().a(B(368)).j(c).a(B(369)).j(d).b()));h=a.x;while(c<d){i=h+1|0;j=c+1|0;a.pn(h,b.g(c));h=i;c=j;}a.x=a.x+e|0;return a;}F(Y(J().a(B(368)).j(c).a(B(56)).j(b.h()).a(B(293)).b()));}
function FK(a,b){return a.zP(b,0,b.h());}
function FG(){Gc.call(this);}
function A0h(a,b,c){var d=new FG();MU(d,a,b,c);return d;}
function MU(a,b,c,d){PO(a,b,c,d);}
function Xg(a){var b,c,d,e;if(a.cb())F(CN());a:{b=X(a);if(a.x>0){c=a.x;d=0;while(true){if(d>=b)break a;e=c+1|0;a.pn(d,a.ws(c));d=d+1|0;c=e;}}}a.x=b;a.bx=a.ey;a.ei=(-1);return a;}
function ARu(a){return a.gs();}
function OL(){var a=this;FG.call(a);a.wI=0;a.pQ=0;a.oC=null;}
function AVI(a,b,c,d,e,f){var g=new OL();ASe(g,a,b,c,d,e,f);return g;}
function ASe(a,b,c,d,e,f,g){MU(a,c,e,f);a.pQ=b;a.wI=g;a.oC=d;}
function AJ8(a,b){return a.oC.data[b+a.pQ|0];}
function AHi(a,b,c){a.oC.data[b+a.pQ|0]=c;}
function AQ$(a){return a.wI;}
function MB(){C.call(this);}
function AWT(b){var c,d,e;c=window;d=c.document;e=AUq();e.Bc(d.getElementById("superjumper-canvas"));AWY(ATs(),e).yJ();}
function Rk(){var a=this;C.call(a);a.bf=0;a.bG=null;a.bk=null;a.bM=0;a.dS=0;a.ip=null;a.g0=0;a.sF=0.0;a.j_=0;a.fl=0;a.d3=0;a.hU=0;a.n_=0;}
function Dm(){var a=new Rk();ARh(a);return a;}
function ATi(a){var b=new Rk();ANg(b,a);return b;}
function A0i(a,b){var c=new Rk();Ii(c,a,b);return c;}
function ARh(a){Ii(a,51,0.800000011920929);}
function ANg(a,b){Ii(a,b,0.800000011920929);}
function Ii(a,b,c){var d;I(a);if(b<0)F(U(J().a(B(33)).j(b).b()));d=EV(B6(b/c)|0);if(d>1073741824)F(U(J().a(B(34)).j(d).b()));a.bM=d;if(c<=0.0)F(U(J().a(B(35)).dJ(c).b()));a.sF=c;a.d3=a.bM*c|0;a.fl=a.bM-1|0;a.j_=31-BS(a.bM)|0;a.hU=S(3,(B6(CQ(a.bM))|0)*2|0);a.n_=S(Bd(a.bM,8),(CL(a.bM)|0)/8|0);a.bG=$rt_createIntArray(a.bM+a.hU|0);a.bk=G(C,a.bG.data.length);}
function AD0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;if(!b){d=a.ip;a.ip=c;if(!a.g0){a.g0=1;a.bf=a.bf+1|0;}return d;}e=a.bG;f=e.data;g=b&a.fl;h=f[g];if(h==b){d=a.bk.data[g];a.bk.data[g]=c;return d;}i=DL(a,b);j=f[i];if(j==b){d=a.bk.data[i];a.bk.data[i]=c;return d;}k=Eu(a,b);l=f[k];if(l==b){d=a.bk.data[k];a.bk.data[k]=c;return d;}m=a.bM;n=m+a.dS|0;while(true){if(m>=n){if(!h){f[g]=b;a.bk.data[g]=c;o=a.bf;a.bf=o+1|0;if(o>=a.d3)Cg(a,a.bM<<1);return null;}if(!j){f[i]=b;a.bk.data[i]=c;o=a.bf;a.bf=o+1|0;if(o>=a.d3)Cg(a,a.bM
<<1);return null;}if(l){Hy(a,b,c,g,h,i,j,k,l);return null;}f[k]=b;a.bk.data[k]=c;o=a.bf;a.bf=o+1|0;if(o>=a.d3)Cg(a,a.bM<<1);return null;}if(f[m]==b)break;m=m+1|0;}d=a.bk.data[m];a.bk.data[m]=c;return d;}
function HP(a,b,c){var d,e,f,g,h,i,j;if(!b){a.ip=c;a.g0=1;return;}d=b&a.fl;e=a.bG.data[d];if(!e){a.bG.data[d]=b;a.bk.data[d]=c;f=a.bf;a.bf=f+1|0;if(f>=a.d3)Cg(a,a.bM<<1);return;}g=DL(a,b);h=a.bG.data[g];if(!h){a.bG.data[g]=b;a.bk.data[g]=c;f=a.bf;a.bf=f+1|0;if(f>=a.d3)Cg(a,a.bM<<1);return;}i=Eu(a,b);j=a.bG.data[i];if(j){Hy(a,b,c,d,e,g,h,i,j);return;}a.bG.data[i]=b;a.bk.data[i]=c;f=a.bf;a.bf=f+1|0;if(f>=a.d3)Cg(a,a.bM<<1);}
function Hy(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s;j=a.bG;k=a.bk;l=a.fl;m=0;n=a.n_;while(true){a:{switch(ED(2)){case 0:break;case 1:o=k.data;p=j.data;q=o[f];p[f]=b;o[f]=c;e=g;break a;default:o=k.data;p=j.data;q=o[h];p[h]=b;o[h]=c;e=i;break a;}o=k.data;p=j.data;q=o[d];p[d]=b;o[d]=c;}p=j.data;d=e&l;r=p[d];if(!r){o=k.data;p[d]=e;o[d]=q;r=a.bf;a.bf=r+1|0;if(r>=a.d3)Cg(a,a.bM<<1);return;}f=DL(a,e);g=p[f];if(!g){o=k.data;p[f]=e;o[f]=q;r=a.bf;a.bf=r+1|0;if(r>=a.d3)Cg(a,a.bM<<1);return;}h=Eu(a,e);i=p[h];if(!i){o
=k.data;p[h]=e;o[h]=q;s=a.bf;a.bf=s+1|0;if(s>=a.d3)Cg(a,a.bM<<1);return;}m=m+1|0;if(m==n)break;b=e;e=r;c=q;}NG(a,e,q);}
function NG(a,b,c){var d;if(a.dS==a.hU){Cg(a,a.bM<<1);HP(a,b,c);return;}d=a.bM+a.dS|0;a.bG.data[d]=b;a.bk.data[d]=c;a.dS=a.dS+1|0;a.bf=a.bf+1|0;}
function AR6(a,b){var c;if(!b){if(a.g0)return a.ip;return null;}c=b&a.fl;if(a.bG.data[c]!=b){c=DL(a,b);if(a.bG.data[c]!=b){c=Eu(a,b);if(a.bG.data[c]!=b)return TJ(a,b,null);}}return a.bk.data[c];}
function TJ(a,b,c){var d,e,f;d=a.bG;e=a.bM;f=e+a.dS|0;while(e<f){if(d.data[e]==b)return a.bk.data[e];e=e+1|0;}return c;}
function AP2(a,b){var c,d,e,f;if(!b){if(!a.g0)return null;c=a.ip;a.ip=null;a.g0=0;a.bf=a.bf-1|0;return c;}d=b&a.fl;if(a.bG.data[d]==b){a.bG.data[d]=0;c=a.bk.data[d];a.bk.data[d]=null;a.bf=a.bf-1|0;return c;}e=DL(a,b);if(a.bG.data[e]==b){a.bG.data[e]=0;c=a.bk.data[e];a.bk.data[e]=null;a.bf=a.bf-1|0;return c;}f=Eu(a,b);if(a.bG.data[f]!=b)return a.xS(b);a.bG.data[f]=0;c=a.bk.data[f];a.bk.data[f]=null;a.bf=a.bf-1|0;return c;}
function AFp(a,b){var c,d,e,f;c=a.bG;d=a.bM;e=d+a.dS|0;while(d<e){if(c.data[d]==b){f=a.bk.data[d];a.nL(d);a.bf=a.bf-1|0;return f;}d=d+1|0;}return null;}
function AKB(a,b){var c;a.dS=a.dS-1|0;c=a.bM+a.dS|0;if(b>=c)a.bk.data[b]=null;else{a.bG.data[b]=a.bG.data[c];a.bk.data[b]=a.bk.data[c];a.bk.data[c]=null;}}
function Cg(a,b){var c,d,e,f,g,h,i,j;c=a.bM+a.dS|0;a.bM=b;a.d3=b*a.sF|0;a.fl=b-1|0;a.j_=31-BS(b)|0;d=b;a.hU=S(3,(B6(CQ(d))|0)*2|0);a.n_=S(Bd(b,8),(CL(d)|0)/8|0);e=a.bG;f=a.bk;a.bG=$rt_createIntArray(b+a.hU|0);a.bk=G(C,b+a.hU|0);g=a.bf;h=!a.g0?0:1;a:{a.bf=h;a.dS=0;if(g>0){i=0;while(true){if(i>=c)break a;j=e.data[i];if(j)HP(a,j,f.data[i]);i=i+1|0;}}}}
function DL(a,b){var c;c=BE(b,(-1262997959));return (c^c>>>a.j_)&a.fl;}
function Eu(a,b){var c;c=BE(b,(-825114047));return (c^c>>>a.j_)&a.fl;}
function QK(){M.call(this);this.BF=null;}
function AWS(a){var b=new QK();Vr(b,a);return b;}
function Vr(a,b){a.BF=b;T(a);}
function APu(a,b){return K0(b);}
function GX(){var a=this;C.call(a);a.BT=0.0;a.BN=0.0;a.BO=0.0;a.BS=0.0;}
var A0j=null;var A0k=null;function AMl(){AMl=N(GX);AEz();}
function AL4(a,b,c,d){var e=new GX();NN(e,a,b,c,d);return e;}
function Xz(){var a=new GX();OT(a);return a;}
function NN(a,b,c,d,e){AMl();I(a);a.s8(b,c,d,e);}
function OT(a){AMl();I(a);a.zs();}
function AB3(a,b,c,d,e){a.BT=b;a.BN=c;a.BO=d;a.BS=e;return a;}
function ARs(a){return a.s8(0.0,0.0,0.0,1.0);}
function AEz(){A0j=AL4(0.0,0.0,0.0,0.0);A0k=AL4(0.0,0.0,0.0,0.0);}
function UC(){C.call(this);}
function AV6(){var a=new UC();APc(a);return a;}
function APc(a){I(a);}
function AFw(a,b){return AUd(b);}
function AGs(a,b){return ARy(b);}
function JH(){Cs.call(this);this.kn=0.0;}
function A0l(a,b){var c=new JH();Tr(c,a,b);return c;}
function Tr(a,b,c){Ff(a,b,c,0.5,0.800000011920929);a.kn=0.0;}
function AAO(a,b){a.kn=a.kn+b;}
function Jf(){C.call(this);}
var A0m=0;function I7(){I7=N(Jf);AGS();}
function RM(b,c,d,e){var f;I7();if(!A0m){H0(b,c,d,e);return;}a:{f=AX7.l2();Ey();if(f!==AXE&&AX7.l2()!==AXI){f=AX7;if(f.l2()!==AXJ){Ro(b,c,d,e);break a;}}M5(b,c);}}
function M5(b,c){var d,e,f,g,h,i,j;I7();d=AX9;e=c.i3();f=c.bE();g=c.by();h=c.i5();i=c.jR();j=c.hw();d.i9(b,0,e,f,g,0,h,i,j);AX$.sx(b);}
function Ro(b,c,d,e){var f,g,h,i,j,k,l;I7();a:{if(!AX8.s0(B(370))){f=AX8;if(!f.s0(B(371))&&AYp===null){H0(b,c,d,e);break a;}}f=AX9;g=c.i3();h=c.bE();i=c.by();j=c.i5();k=c.jR();l=c.hw();f.i9(b,0,g,h,i,0,j,k,l);AX$.sx(b);}}
function H0(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;I7();f=AX9;g=c.i3();h=c.bE();i=c.by();j=c.i5();k=c.jR();l=c.hw();f.i9(b,0,g,h,i,0,j,k,l);if(AX$===null&&d!=e)F(Bk(B(372)));m=c.bE()/2|0;n=c.by()/2|0;o=1;while(m>0&&n>0){p=KU(m,n,c.gA());JQ();p.uZ(AZb);p.xg(c,0,0,c.bE(),c.by(),0,0,m,n);if(o>1)c.d9();f=AX9;j=p.i3();k=p.bE();q=p.by();g=p.i5();h=p.jR();l=p.hw();f.i9(b,o,j,k,q,0,g,h,l);m=p.bE()/2|0;n=p.by()/2|0;o=o+1|0;c=p;}}
function AGS(){A0m=1;}
function Pp(){M.call(this);this.y5=null;}
function AVx(a){var b=new Pp();AC3(b,a);return b;}
function AC3(a,b){a.y5=b;T(a);}
function ACW(a,b){return 0;}
function Di(){BT.call(this);}
function A0n(a,b,c){var d=new Di();LR(d,a,b,c);return d;}
function LR(a,b,c,d){El(a,b);a.x=c;a.bx=d;}
function AGR(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(373)).j(g).a(B(362)).j(f).b()));if(X(a)<d)F(GM());if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.wu(h);i=i+1|0;c=g;h=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function AQL(a,b){return a.DC(b,0,b.data.length);}
function AOA(a,b,c,d){var e,f,g,h,i;if(a.cb())F(CN());if(X(a)<d)F(EO());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(374)).j(g).a(B(362)).j(f).b()));if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=h+1|0;f=c+1|0;a.si(h,e[c]);i=i+1|0;h=g;c=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function UF(a){return a.o2();}
function OS(a){return a.z3();}
function GD(){Di.call(this);}
function A0o(a,b,c){var d=new GD();Q9(d,a,b,c);return d;}
function Q9(a,b,c,d){LR(a,b,c,d);}
function AHY(a){return a.ty(0,a.ey,a.x,a.bx,a.cb());}
function AGh(a){return a.gs();}
function DI(){var a=this;GD.call(a);a.et=null;a.sc=0;a.ef=0;}
function A0p(a,b,c,d,e,f){var g=new DI();Jr(g,a,b,c,d,e,f);return g;}
function Jr(a,b,c,d,e,f,g){Q9(a,c,e,f);a.ef=b;a.et=d;a.sc=g;}
function Zn(a){return 0;}
function ALx(a){F(Tk());}
function AEq(a){return a.sc;}
function Ld(){DI.call(this);}
function APp(a,b,c,d,e,f){var g=new Ld();AHe(g,a,b,c,d,e,f);return g;}
function AHe(a,b,c,d,e,f,g){Jr(a,b,c,d,e,f,g);}
function ZD(a,b,c,d,e,f){return APp(a.ef+(b*2|0)|0,c,a.et,d,e,f);}
function AAp(a,b){var c,d,e,f;c=a.et.H.data;d=a.ef;e=b*2|0;f=c[d+e|0]&255|(a.et.H.data[(a.ef+e|0)+1|0]&255)<<8;return f<<16>>16;}
function Zs(a,b,c){var d,e,f;d=a.et.H.data;e=a.ef;f=b*2|0;d[e+f|0]=c<<24>>24;a.et.H.data[(a.ef+f|0)+1|0]=c>>8<<24>>24;}
function Oj(){M.call(this);this.At=null;}
function ATA(a){var b=new Oj();AC7(b,a);return b;}
function AC7(a,b){a.At=b;T(a);}
function AMD(a,b){return Oe(b);}
function CF(){BT.call(this);}
function A0q(a,b,c){var d=new CF();Rc(d,a,b,c);return d;}
function Rc(a,b,c,d){El(a,b);a.x=c;a.bx=d;}
function AII(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(375)).j(g).a(B(362)).j(f).b()));if(X(a)<d)F(GM());if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.wv(h);i=i+1|0;c=g;h=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function AIH(a,b){return a.xK(b,0,b.data.length);}
function AI2(a,b,c,d){var e,f,g,h,i;if(a.cb())F(CN());if(X(a)<d)F(EO());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(376)).j(g).a(B(362)).j(f).b()));if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x;i=0;while(i<d){g=h+1|0;f=c+1|0;a.r3(h,e[c]);i=i+1|0;h=g;c=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function Sz(a){return a.o2();}
function My(a){return a.z$();}
function FI(){CF.call(this);}
function A0r(a,b,c){var d=new FI();PD(d,a,b,c);return d;}
function PD(a,b,c,d){Rc(a,b,c,d);}
function AHH(a){return a.uz(0,a.ey,a.x,a.bx,a.cb());}
function AA0(a){return a.gs();}
function DU(){var a=this;FI.call(a);a.co=null;a.wl=0;a.ch=0;}
function A0s(a,b,c,d,e,f){var g=new DU();JZ(g,a,b,c,d,e,f);return g;}
function JZ(a,b,c,d,e,f,g){PD(a,c,e,f);a.ch=b;a.co=d;a.wl=g;}
function Xo(a){return 0;}
function ABn(a){F(Tk());}
function AKA(a){return a.wl;}
function SY(){Bf.call(this);this.jg=0;}
function AUW(a){var b=new SY();ADl(b,a);return b;}
function ADl(a,b){BL(a);a.jg=b;}
function AGl(a,b,c,d){var e;e=!d.hD()?c.h():d.L();if(b>=e){d.bC(a.jg,0);return a.i.d(b,c,d);}if((e-b|0)==1&&c.g(b)==10){d.bC(a.jg,1);return a.i.d(b+1|0,c,d);}return (-1);}
function ADg(a,b){var c;c=!b.ez(a.jg)?0:1;b.bC(a.jg,(-1));return c;}
function AHf(a){return B(377);}
function TS(){Bo.call(this);this.mD=0;}
function ALV(a){var b=new TS();AI4(b,a);return b;}
function AI4(a,b){Cc(a);a.mD=C7(CO(b));}
function Vb(a,b,c){return a.mD!=C7(CO(c.g(b)))?(-1):1;}
function AKh(a){return J().a(B(378)).cc(a.mD).b();}
function QS(){var a=this;C.call(a);a.b8=null;a.u=0;a.lS=0;}
function CK(){var a=new QS();Y7(a);return a;}
function ALs(a){var b=new QS();AQq(b,a);return b;}
function ATr(a,b){var c=new QS();HK(c,a,b);return c;}
function A0t(a,b,c){var d=new QS();Kr(d,a,b,c);return d;}
function AVU(a){var b=new QS();AN5(b,a);return b;}
function A0u(a,b,c,d){var e=new QS();OO(e,a,b,c,d);return e;}
function Y7(a){HK(a,1,16);}
function AQq(a,b){HK(a,1,b);}
function HK(a,b,c){I(a);a.lS=b;a.b8=G(C,c);}
function Kr(a,b,c,d){I(a);a.lS=b;a.b8=PE(d,c);}
function AN5(a,b){OO(a,1,b,0,b.data.length);}
function OO(a,b,c,d,e){Kr(a,b,e,Cq(c).iz());a.u=e;W(c,d,a.b8,0,a.u);}
function AMJ(a,b){var c,d,e;c=a.b8;d=c.data;if(a.u==d.length)c=a.mV(S(8,a.u*1.75|0));d=c.data;e=a.u;a.u=e+1|0;d[e]=b;}
function AEE(a,b){a.tZ(b.b8,0,b.u);}
function Wu(a,b,c,d){if((c+d|0)<=b.u){a.tZ(b.b8,c,d);return;}F(U(J().a(B(379)).j(c).a(B(380)).j(d).a(B(381)).j(b.u).b()));}
function YJ(a,b,c,d){var e,f,g;e=a.b8;f=e.data;g=a.u+d|0;if(g>f.length)e=a.mV(S(8,g*1.75|0));W(b,c,e,a.u,d);a.u=a.u+d|0;}
function AQn(a,b){if(b<a.u)return a.b8.data[b];F(Y(J().a(B(382)).j(b).a(B(383)).j(a.u).b()));}
function AAH(a,b,c){var d,e,f;a:{d=a.b8;if(!(!c&&b!==null)){e=0;f=a.u;while(e<f){if(d.data[e]===b){a.vA(e);return 1;}e=e+1|0;}}else{e=0;f=a.u;while(true){if(e>=f)break a;if(b.R(d.data[e])){a.vA(e);return 1;}e=e+1|0;}}}return 0;}
function ALi(a,b){var c,d,e;if(b>=a.u)F(Y(J().a(B(382)).j(b).a(B(383)).j(a.u).b()));c=a.b8;d=c.data;e=d[b];a.u=a.u-1|0;if(!a.lS)d[b]=d[a.u];else W(c,b+1|0,c,b,a.u-b|0);d[a.u]=null;return e;}
function ABk(a,b,c){var d,e,f,g,h,i;d=a.u;if(c>=d)F(Y(J().a(B(384)).j(c).a(B(383)).j(a.u).b()));if(b>c)F(Y(J().a(B(385)).j(b).a(B(386)).j(c).b()));e=a.b8;f=(c-b|0)+1|0;g=d-f|0;if(a.lS){h=b+f|0;W(e,h,e,b,d-h|0);}else{i=S(g,c+1|0);W(e,i,e,b,d-i|0);}i=g;while(i<d){e.data[i]=null;i=i+1|0;}a.u=g;}
function WG(a){var b;if(!a.u)F(CC(B(387)));a.u=a.u-1|0;b=a.b8.data[a.u];a.b8.data[a.u]=null;return b;}
function ARm(a){if(!a.u)F(CC(B(387)));return a.b8.data[a.u-1|0];}
function ASp(a){if(!a.u)F(CC(B(387)));return a.b8.data[0];}
function ACm(a){var b,c,d;b=a.b8;c=0;d=a.u;while(c<d){b.data[c]=null;c=c+1|0;}a.u=0;}
function AOW(a,b){var c;if(b<0)F(U(J().a(B(388)).j(b).b()));c=a.u+b|0;if(c>a.b8.data.length)a.mV(S(8,c));return a.b8;}
function ABo(a,b){var c,d,e;c=a.b8;d=PE(Cq(c).iz(),b);e=d.data;W(c,0,d,0,Bd(a.u,e.length));a.b8=d;return d;}
function WO(a,b){var c;if(b<0)F(U(J().a(B(389)).j(b).b()));if(a.u<=b)return;c=b;while(c<a.u){a.b8.data[c]=null;c=c+1|0;}a.u=b;}
function Xl(b){return AVU(b);}
function Pz(){var a=this;C.call(a);a.CN=0;a.Cj=0;a.yZ=Long_ZERO;a.BH=0;a.vN=0;a.i6=null;a.qK=null;a.ur=null;a.DK=0;a.xU=Long_ZERO;a.Cn=0;a.zH=Long_ZERO;}
function AVr(){var a=new Pz();AKF(a);return a;}
function AKF(a){I(a);a.CN=0;a.Cj=0;a.vN=255;a.Cn=0;a.zH=Long_ZERO;}
function I0(){BR.call(this);this.q4=0;}
function A0v(a){var b=new I0();Ug(b,a);return b;}
function Ug(a,b){Dn(a,b);}
function W1(a,b,c,d){var e;e=a.iF();d.bC(e,b-d.ez(e)|0);a.q4=b;return b;}
function Y9(a){return a.q4;}
function ANN(a){return B(390);}
function AKR(a,b){return 0;}
function DB(){Bv.call(this);this.wP=0;}
var A0w=null;var AZC=null;var A0x=null;var A0y=null;function Vl(){Vl=N(DB);AEN();}
function NL(a,b,c){var d=new DB();Pi(d,a,b,c);return d;}
function Pi(a,b,c,d){Vl();Ck(a,b,c);a.wP=d;}
function Kg(a){return a.wP;}
function AEN(){var b,c;A0w=NL(B(391),0,33648);AZC=NL(B(392),1,33071);A0x=NL(B(393),2,10497);b=G(DB,3);c=b.data;c[0]=A0w;c[1]=AZC;c[2]=A0x;A0y=b;}
function F$(){Bl.call(this);this.gB=0;}
function AJO(a){var b=new F$();Zc(b,a);return b;}
function Zc(a,b){B5(a);a.gB=b;}
function AKy(a,b){a.i=b;}
function Z0(a,b,c,d){var e,f,g;e=b+1|0;if(e>d.L()){d.eh=1;return (-1);}f=c.g(b);if(b>d.dH()){g=c.g(b-1|0);if(BP(g))return (-1);}if(a.gB!=f)return (-1);return a.i.d(e,c,d);}
function AEk(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Br))return ER(a,b,c,d);e=c;f=d.dH();g=d.L();while(true){if(b>=g)return (-1);h=e.eg(a.gB,b);if(h<0)return (-1);if(h>f&&BP(e.g(h-1|0))){b=h+1|0;continue;}i=a.i;b=h+1|0;if(i.d(b,c,d)>=0)break;}return h;}
function ABg(a,b,c,d,e){var f,g,h;if(!(d instanceof Br))return EY(a,b,c,d,e);f=e.dH();g=d;a:{while(true){if(c<b)return (-1);h=g.it(a.gB,c);if(h<0)break a;if(h<b)break a;if(h>f&&BP(g.g(h-1|0))){c=h+(-2)|0;continue;}if(a.i.d(h+1|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AOr(a){return J().a(B(93)).cc(a.gB).b();}
function WA(a,b){if(b instanceof CH)return 0;if(b instanceof CB)return 0;if(b instanceof Cd)return 0;if(b instanceof Cy)return 0;if(b instanceof Gi)return 0;if(!(b instanceof F$))return 1;return b.gB!=a.gB?0:1;}
function AOE(a,b){return 1;}
function J5(){}
function Nx(){C.call(this);this.tU=null;}
function AWf(a){var b=new Nx();YR(b,a);return b;}
function YR(a,b){I(a);a.tU=b;}
function AOL(a){K9(a.tU);}
function ACh(a){a.zE();}
function Dj(){var a=this;BZ.call(a);a.fN=null;a.en=0;}
function A0z(a,b,c,d,e){var f=new Dj();Fo(f,a,b,c,d,e);return f;}
function Fo(a,b,c,d,e,f){Ek(a,c,d,e);a.fN=b;a.en=f;}
function ASa(a,b,c,d){var e,f,g,h;e=d.vB(a.en);if(!a.Z.ba(d))return a.i.d(b,c,d);if(e>=a.fN.hR())return a.i.d(b,c,d);f=a.en;g=e+1|0;d.fE(f,g);h=a.Z.d(b,c,d);if(h>=0){d.fE(a.en,0);return h;}f=a.en;g=g+(-1)|0;d.fE(f,g);if(g>=a.fN.ir())return a.i.d(b,c,d);d.fE(a.en,0);return (-1);}
function AP7(a){return a.fN.b();}
function Jz(){Dj.call(this);}
function A0A(a,b,c,d,e){var f=new Jz();Qp(f,a,b,c,d,e);return f;}
function Qp(a,b,c,d,e,f){Fo(a,b,c,d,e,f);}
function W6(a,b,c,d){var e,f;e=d.vB(a.en);if(!a.Z.ba(d))return a.i.d(b,c,d);if(e>=a.fN.hR()){d.fE(a.en,0);return a.i.d(b,c,d);}if(e<a.fN.ir()){d.fE(a.en,e+1|0);f=a.Z.d(b,c,d);}else{f=a.i.d(b,c,d);if(f>=0){d.fE(a.en,0);return f;}d.fE(a.en,e+1|0);f=a.Z.d(b,c,d);}return f;}
function HR(){}
function G_(){}
function Fw(){CY.call(this);this.f9=0;}
function A0B(){var a=new Fw();O0(a);return a;}
function O0(a){GI(a);}
function ACq(a){return AS3(a);}
function ADA(a,b){var c,d,e;c=a.bm();d=0;a:{while(d<c){b:{e=a.t(d);if(b!==null){if(!b.R(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Jl(){}
function LL(){var a=this;Fw.call(a);a.cZ=null;a.de=0;}
function Dw(){var a=new LL();AC5(a);return a;}
function A0C(a){var b=new LL();KK(b,a);return b;}
function AC5(a){KK(a,10);}
function KK(a,b){O0(a);a.cZ=G(C,b);}
function W9(a,b){var c,d;if(a.cZ.data.length<b){if(a.cZ.data.length>=1073741823)c=2147483647;else{d=a.cZ.data.length*2|0;c=S(b,S(d,5));}a.cZ=OZ(a.cZ,c);}}
function AMg(a,b){G9(a,b);return a.cZ.data[b];}
function AKC(a){return a.de;}
function AP3(a,b){var c,d;a.e4(a.de+1|0);c=a.cZ.data;d=a.de;a.de=d+1|0;c[d]=b;a.f9=a.f9+1|0;return 1;}
function AFt(a,b,c){var d;M6(a,b);a.e4(a.de+1|0);d=a.de;while(d>b){a.cZ.data[d]=a.cZ.data[d-1|0];d=d+(-1)|0;}a.cZ.data[b]=c;a.de=a.de+1|0;a.f9=a.f9+1|0;}
function AMM(a,b){var c,d,e,f;G9(a,b);c=a.cZ.data[b];a.de=a.de-1|0;while(b<a.de){d=a.cZ.data;e=a.cZ.data;f=b+1|0;d[b]=e[f];b=f;}a.cZ.data[a.de]=null;a.f9=a.f9+1|0;return c;}
function AN0(a,b){var c;c=a.B$(b);if(c<0)return 0;a.iq(c);return 1;}
function G9(a,b){if(b>=0&&b<a.de)return;F(B3());}
function M6(a,b){if(b>=0&&b<=a.de)return;F(B3());}
function Oa(){Bh.call(this);}
function ANf(){var a=new Oa();AHj(a);return a;}
function AHj(a){B2(a);}
function De(){BX.call(this);this.f8=null;}
function ATP(a,b,c,d){var e=new De();IN(e,a,b,c,d);return e;}
function IN(a,b,c,d,e){Ea(a,c,d,e);a.f8=b;}
function XQ(a,b,c,d){var e,f,g,h;e=a.f8.ir();f=a.f8.hR();g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.bw.cr()|0)>d.L())break a;h=a.bw.bO(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.i.d(b,c,d);if(h>=0)break;b=b-a.bw.cr()|0;g=g+(-1)|0;}return h;}if((b+a.bw.cr()|0)>d.L()){d.eh=1;return (-1);}h=a.bw.bO(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Yw(a){return a.f8.b();}
function JG(){}
function Qq(){var a=this;C.call(a);a.um=null;a.un=Long_ZERO;a.uk=null;}
function ATM(a,b,c){var d=new Qq();ADU(d,a,b,c);return d;}
function ADU(a,b,c,d){I(a);a.um=b;a.un=c;a.uk=d;}
function AK$(a,b){PM(a.um,a.un,a.uk,b);}
function Cd(){var a=this;Bl.call(a);a.eb=null;a.oF=0;}
function AF4(a){var b=new Cd();Q8(b,a);return b;}
function Q8(a,b){B5(a);a.eb=b.jq();a.oF=b.bF;}
function ACa(a,b,c,d){var e,f,g,h,i;e=d.L();if(b<e){f=b+1|0;g=c.g(b);if(a.s(g)){h=a.i.d(f,c,d);if(h>0)return h;}if(f<e){h=f+1|0;i=c.g(f);if(EA(g,i)&&a.s(C9(g,i)))return a.i.d(h,c,d);}}return (-1);}
function AQJ(a){return J().a(B(50)).a(!a.oF?B(51):B(52)).a(a.eb.b()).b();}
function AC6(a,b){return a.eb.s(b);}
function Xs(a,b){if(b instanceof Cy)return FM(a.eb,b.qw());if(b instanceof CH)return FM(a.eb,b.lq());if(b instanceof Cd)return E7(a.eb,b.eb);if(!(b instanceof CB))return 1;return E7(a.eb,b.pq());}
function AFU(a){return a.eb;}
function AN2(a,b){a.i=b;}
function ACt(a,b){return 1;}
function N9(){Ev.call(this);}
function ATV(a,b,c){var d=new N9();AKW(d,a,b,c);return d;}
function AKW(a,b,c,d){G8(a,b,c,d);}
function Y_(a,b,c,d){var e;if(!a.Z.ba(d))return a.i.d(b,c,d);e=a.i.d(b,c,d);if(e<0)e=a.Z.d(b,c,d);return e;}
function Br(){var a=this;C.call(a);a.ca=null;a.kc=0;}
var A0D=null;function IO(){IO=N(Br);APm();}
function G2(a){var b=new Br();Fp(b,a);return b;}
function EQ(a,b,c){var d=new Br();Kn(d,a,b,c);return d;}
function Fp(a,b){var c,d,e;IO();c=b.data;I(a);d=c.length;a.ca=$rt_createCharArray(d);e=0;while(e<d){a.ca.data[e]=c[e];e=e+1|0;}}
function Kn(a,b,c,d){var e,f;IO();I(a);a.ca=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.ca.data[e]=f[e+c|0];e=e+1|0;}}
function XK(a,b){if(b>=0&&b<a.ca.data.length)return a.ca.data[b];F(HI());}
function ADe(a){return a.ca.data.length;}
function AFK(a){return a.ca.data.length?0:1;}
function AB7(a,b,c,d,e){var f,g,h;if(b>=0&&b<=c&&c<=a.h()&&e>=0){f=d.data;if((e+(c-b|0)|0)<=f.length){while(b<c){g=e+1|0;h=b+1|0;f[e]=a.g(b);e=g;b=h;}return;}}F(B3());}
function AK9(a,b,c){var d,e,f;if((c+b.h()|0)>a.h())return 0;d=0;while(d<b.h()){e=b.g(d);f=c+1|0;if(e!=a.g(c))return 0;d=d+1|0;c=f;}return 1;}
function AFS(a,b){if(a===b)return 1;return a.v8(b,0);}
function AB_(a,b){var c,d,e,f;if(a===b)return 1;if(b.h()>a.h())return 0;c=0;d=a.h()-b.h()|0;while(d<a.h()){e=a.g(d);f=c+1|0;if(e!=b.g(c))return 0;d=d+1|0;c=f;}return 1;}
function AJJ(a,b,c){var d,e,f,g;d=S(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.ca.data.length)return (-1);if(a.ca.data[d]==e)break;d=d+1|0;}return d;}f=E3(b);g=Fi(b);while(true){if(d>=(a.ca.data.length-1|0))return (-1);if(a.ca.data[d]==f&&a.ca.data[d+1|0]==g)break;d=d+1|0;}return d;}
function AB9(a,b){return a.eg(b,0);}
function XR(a,b,c){var d,e,f,g,h,i;d=Bd(c,a.h()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.ca.data[d]==e)break;d=d+(-1)|0;}return d;}f=E3(b);g=Fi(b);while(true){if(d<1)return (-1);if(a.ca.data[d]==g){h=a.ca.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function AE7(a,b){return a.it(b,a.h()-1|0);}
function ABz(a,b,c){var d,e,f;d=S(0,c);e=a.h()-b.h()|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=b.h())break a;if(a.g(d+f|0)!=b.g(f))break;f=f+1|0;}d=d+1|0;}return d;}
function AKu(a,b){return a.o0(b,0);}
function ABX(a,b,c){var d,e;d=Bd(c,a.h()-b.h()|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.h())break a;if(a.g(d+e|0)!=b.g(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Wj(a,b,c){if(b>c)F(B3());return EQ(a.ca,b,c-b|0);}
function AFa(a,b){return a.c2(b,a.h());}
function ACj(a,b,c){return a.c2(b,c);}
function API(a,b,c){var d,e,f;if(b==c)return a;d=$rt_createCharArray(a.h());e=0;while(e<a.h()){f=a.g(e)!=b?a.g(e):c;d.data[e]=f;e=e+1|0;}return G2(d);}
function AGk(a){var b,c;b=0;c=a.h()-1|0;a:{while(b<=c){if(a.g(b)>32)break a;b=b+1|0;}}while(b<=c&&a.g(c)<=32){c=c+(-1)|0;}return a.c2(b,c+1|0);}
function Za(a){return a;}
function AFQ(a){var b,c,d;b=$rt_createCharArray(a.ca.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.ca.data[c];c=c+1|0;}return b;}
function Pj(b){var c,d;IO();c=new Br;d=$rt_createCharArray(1);d.data[0]=b;Fp(c,d);return c;}
function I_(b){IO();return J().j(b).b();}
function APX(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Br))return 0;c=b;if(c.h()!=a.h())return 0;d=0;while(d<c.h()){if(a.g(d)!=c.g(d))return 0;d=d+1|0;}return 1;}
function AJW(a){var b,c,d,e;a:{if(!a.kc){b=a.ca.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kc=(31*a.kc|0)+e|0;d=d+1|0;}}}return a.kc;}
function AGK(a,b){return Li(DP(b),a.b());}
function APN(a,b,c){return Hk(DP(b),a.b(),c);}
function ACB(a,b,c){return T1(DW(DP(b),a.b()),c);}
function APm(){A0D=AWz();}
function Dt(){}
function HW(){}
function C4(){var a=this;Cs.call(a);a.bH=null;a.Ad=null;}
function A0E(a,b,c,d){var e=new C4();F0(e,a,b,c,d);return e;}
function F0(a,b,c,d,e){Ff(a,b,c,d,e);a.bH=Wv();a.Ad=Wv();}
function Oo(){var a=this;C4.call(a);a.dl=0;a.eU=0.0;}
function ASS(a,b){var c=new Oo();APa(c,a,b);return c;}
function APa(a,b,c){F0(a,b,c,0.800000011920929,0.800000011920929);a.dl=1;a.eU=0.0;}
function AJI(a,b){var c;c=a.bH;AM6();c.lC(A0F.J*b,A0F.W*b);a.C.lC(a.bH.J*b,a.bH.W*b);a.ci.e0=a.C.J-a.ci.jU/2.0;a.ci.eZ=a.C.W-a.ci.iT/2.0;if(a.bH.W>0.0&&a.dl!=2&&a.dl){a.dl=0;a.eU=0.0;}if(a.bH.W<0.0&&a.dl!=2&&a.dl!=1){a.dl=1;a.eU=0.0;}if(a.C.J<0.0)a.C.J=10.0;if(a.C.J>10.0)a.C.J=0.0;a.eU=a.eU+b;}
function ALX(a){a.bH.r9(0.0,0.0);a.dl=2;a.eU=0.0;}
function AG_(a){a.bH.W=11.0;a.dl=0;a.eU=0.0;}
function AHy(a){a.bH.W=16.5;a.dl=0;a.eU=0.0;}
function L4(){Bf.call(this);}
function ATv(){var a=new L4();ART(a);return a;}
function ART(a){BL(a);}
function AGc(a,b,c,d){return b;}
function AKw(a){return B(394);}
function AKJ(a,b){return 0;}
function Fq(){var a=this;C.call(a);a.bh=null;a.l=0;a.q=0;a.o=Long_ZERO;a.oL=null;a.oG=0;a.fv=0;a.f6=Long_ZERO;a.bd=null;a.i4=null;a.ds=null;}
function A0G(){var a=new Fq();K3(a);return a;}
function A0H(a){var b=new Fq();Pw(b,a);return b;}
function K3(a){Pw(a,ANP());}
function Pw(a,b){I(a);a.ds=b;}
function ACv(a,b,c,d){a.oL=b;a.oG=c;a.fv=d;}
function AAo(a,b,c,d,e){var f;if(d<=0&&e&&a.bh!==null)return;if(a.q>0&&e){f=$rt_createByteArray(a.q+d|0);W(a.bh,a.l,f,0,a.q);W(b,c,f,a.q,d);a.bh=f;a.l=0;a.q=a.q+d|0;}else{a.bh=b;a.l=c;a.q=d;}}
function Hg(){Dj.call(this);}
function A0I(a,b,c,d,e){var f=new Hg();Qv(f,a,b,c,d,e);return f;}
function Qv(a,b,c,d,e,f){Fo(a,b,c,d,e,f);GW();c.T(AYk);}
function AE6(a,b,c,d){var e,f,g;e=0;f=a.fN.hR();a:{while(true){g=a.Z.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fN.ir())return (-1);return a.i.d(b,c,d);}
function Cf(){Bv.call(this);this.tF=0;}
var AZB=null;var A0J=null;var A0K=null;var A0L=null;var A0M=null;var A0N=null;var A0O=null;var A0P=null;function Z2(){Z2=N(Cf);YB();}
function Eb(a,b,c){var d=new Cf();Kq(d,a,b,c);return d;}
function Kq(a,b,c,d){Z2();Ck(a,b,c);a.tF=d;}
function JO(a){return a.tF;}
function YB(){var b,c;AZB=Eb(B(395),0,9728);A0J=Eb(B(396),1,9729);A0K=Eb(B(397),2,9987);A0L=Eb(B(398),3,9984);A0M=Eb(B(399),4,9985);A0N=Eb(B(400),5,9986);A0O=Eb(B(401),6,9987);b=G(Cf,7);c=b.data;c[0]=AZB;c[1]=A0J;c[2]=A0K;c[3]=A0L;c[4]=A0M;c[5]=A0N;c[6]=A0O;A0P=b;}
function UD(){Fr.call(this);}
function AWG(){var a=new UD();AQA(a);return a;}
function AQA(a){ME(a,B(402),G(Br,0));}
function ANm(a){return AVP(a);}
function Ix(){}
function J$(){}
function R1(){C.call(this);}
function AWz(){var a=new R1();AKM(a);return a;}
function AKM(a){I(a);}
function KD(){Bf.call(this);this.gO=0;}
function ASP(a){var b=new KD();ASh(b,a);return b;}
function ASh(a,b){BL(a);a.gO=b;}
function AE9(a,b,c,d){var e,f,g;e=!d.hD()?c.h()-b|0:d.dH()-b|0;if(!e){d.bC(a.gO,0);return a.i.d(b,c,d);}if(e<2){f=c.g(b);g=97;}else{f=c.g(b);g=c.g(b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:d.bC(a.gO,0);return a.i.d(b,c,d);case 13:if(g!=10){d.bC(a.gO,0);return a.i.d(b,c,d);}d.bC(a.gO,0);return a.i.d(b,c,d);default:}return (-1);}
function Z5(a,b){var c;c=!b.ez(a.gO)?0:1;b.bC(a.gO,(-1));return c;}
function ADx(a){return B(403);}
function DR(){C.call(this);this.zv=null;}
function A0Q(){var a=new DR();Jc(a);return a;}
function A0R(a){var b=new DR();Tz(b,a);return b;}
function Jc(a){Tz(a,M_());}
function Tz(a,b){I(a);a.zv=b;}
function Qf(){var a=this;DR.call(a);a.qa=null;a.hN=null;a.fA=0;a.kC=0;a.oY=0;a.vq=0;}
function AVs(a,b){var c=new Qf();ABp(c,a,b);return c;}
function ABp(a,b,c){Jc(a);a.vq=(-1);if(c<0)F(DK());a.qa=b;a.hN=$rt_createCharArray(S(64,c));}
function ARN(a){var b,c,d,e;S3(a);if(a.oY&&a.fA>=a.kC)return null;b=J();a:{while(true){if(a.fA>=a.kC&&!I2(a,0))break a;c=a.hN.data;d=a.fA;a.fA=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fA>=a.kC&&!I2(a,0))break a;if(a.hN.data[a.fA]!=10)break a;a.fA=a.fA+1|0;break a;}b.cc(e);}}return b.b();}
function I2(a,b){var c;if(a.oY)return 0;a:{while(true){if(b>=a.hN.data.length)break a;c=a.qa.B0(a.hN,b,a.hN.data.length-b|0);if(c==(-1)){a.oY=1;break a;}if(!c)break;b=b+c|0;}}a.kC=b;a.fA=0;a.vq=(-1);return 1;}
function S3(a){if(a.qa!==null)return;F(AJw());}
function G3(){}
function Kc(){}
function Ra(){var a=this;CY.call(a);a.kh=0;a.da=null;a.db=0;a.dO=0;}
function AW9(){var a=new Ra();AHO(a);return a;}
function A0S(a){var b=new Ra();Th(b,a);return b;}
function AHO(a){Th(a,8);}
function Th(a,b){GI(a);a.da=G(C,b+1|0);}
function ARr(a,b){var c,d;if(b===null)F(DJ());T7(a,a.bm()+1|0);c=a.da.data;d=a.dO;a.dO=d+1|0;c[d]=b;if(a.dO>=a.da.data.length)a.dO=0;a.kh=a.kh+1|0;}
function AGi(a){var b;if(a.db==a.dO)return null;b=a.da.data[a.db];a.da.data[a.db]=null;a.db=a.db+1|0;if(a.db>=a.da.data.length)a.db=0;a.kh=a.kh+1|0;return b;}
function AQP(a,b){a.Cz(b);return 1;}
function AIe(a){return a.A0();}
function AJr(a){return a.dO>=a.db?a.dO-a.db|0:(a.da.data.length-a.db|0)+a.dO|0;}
function T7(a,b){var c,d,e,f,g,h,i;if(b<a.da.data.length)return;c=S(a.da.data.length*2|0,((b*3|0)/2|0)+1|0);if(c<1)c=2147483647;d=G(C,c);e=0;if(a.db<=a.dO){f=a.db;while(f<a.dO){g=d.data;h=e+1|0;g[e]=a.da.data[f];f=f+1|0;e=h;}}else{f=a.db;while(f<a.da.data.length){i=d.data;h=e+1|0;i[e]=a.da.data[f];f=f+1|0;e=h;}f=0;while(f<a.dO){g=d.data;h=e+1|0;g[e]=a.da.data[f];f=f+1|0;e=h;}}a.db=0;a.dO=e;a.da=d;}
function MD(){M.call(this);this.Bl=null;}
function AVj(a){var b=new MD();AHo(b,a);return b;}
function AHo(a,b){a.Bl=b;T(a);}
function APT(a,b){return Up(b);}
function RB(){var a=this;C.call(a);a.v$=0;a.Cr=0;a.u2=0;a.lO=0;a.jZ=0;a.eS=null;}
function AW0(){var a=new RB();AKm(a);return a;}
function A0T(a){var b=new RB();QY(b,a);return b;}
function AKm(a){QY(a,0);}
function QY(a,b){var $$je;I(a);a.Cr=b;a:{try{a.eS=AV3(b);break a;}catch($$e){$$je=P($$e);if($$je instanceof Id){}else{throw $$e;}}}}
function ACP(a){return a.v$;}
function AQ2(a,b,c,d){var e,f,g,h,i;e=b.data.length;if(c<=e&&d>=0&&c>=0&&(e-c|0)>=d){if(a.eS===null)F(Gl());if(a.qZ())return 0;a:{f=a.eS.o;g=a.eS.f6;h=a.jZ;a.jZ=0;a.eS.Bp(b,c,d);i=SR(a.eS,0);switch(i){case 0:break a;case 1:a.v$=1;break a;case 2:a.jZ=1;break a;default:}F(AUO(J().a(B(404)).j(i).b()));}if(a.jZ&&h)F(ASY());a.lO=Long_add(Long_fromInt(a.lO),Long_sub(a.eS.o,f)).lo;return Long_sub(a.eS.f6,g).lo;}F(Nh());}
function ZE(a){return a.jZ;}
function AIg(a){return a.lO!=a.u2?0:1;}
function AEl(a,b,c,d){var e;if(a.eS===null)F(Gl());e=b.data.length;if(c<=e&&d>=0&&c>=0&&(e-c|0)>=d){a.lO=0;a.u2=d;a.eS.zR(b,c,d,0);return;}F(Nh());}
function Qg(){Eg.call(this);}
function AS$(a,b,c,d,e,f){var g=new Qg();ABR(g,a,b,c,d,e,f);return g;}
function ABR(a,b,c,d,e,f,g){Hb(a,b,c,d,e,f,g);}
function AOn(a,b){var c,d,e;c=a.cA.H.data;d=a.cB;e=b*4|0;return (c[d+e|0]&255)<<24|(a.cA.H.data[(a.cB+e|0)+1|0]&255)<<16|(a.cA.H.data[(a.cB+e|0)+2|0]&255)<<8|a.cA.H.data[(a.cB+e|0)+3|0]&255;}
function XL(a,b,c){var d,e,f;d=a.cA.H.data;e=a.cB;f=b*4|0;d[e+f|0]=c>>24<<24>>24;a.cA.H.data[(a.cB+f|0)+1|0]=c>>16<<24>>24;a.cA.H.data[(a.cB+f|0)+2|0]=c>>8<<24>>24;a.cA.H.data[(a.cB+f|0)+3|0]=c<<24>>24;}
function PW(){Bh.call(this);}
function ALY(a){var b=new PW();AN1(b,a);return b;}
function DJ(){var a=new PW();ZK(a);return a;}
function AN1(a,b){Es(a,b);}
function ZK(a){B2(a);}
function Na(){M.call(this);this.zF=null;}
function AWB(a){var b=new Na();ADn(b,a);return b;}
function ADn(a,b){a.zF=b;T(a);}
function ALK(a,b){return HY(b);}
function JY(){}
function Gh(){C.call(this);this.e1=null;}
function A0U(){var a=new Gh();O9(a);return a;}
function O9(a){I(a);}
function O4(a){if(a.e1!==null)a.e1.fo(AX8.C4());}
function XM(a,b,c){if(a.e1!==null)a.e1.j6(b,c);}
function AQm(a,b){if(a.e1!==null)a.e1.h1();a.e1=b;if(a.e1!==null){a.e1.B5();a.e1.j6(AX8.bE(),AX8.by());}}
function PK(){Gh.call(this);this.p=null;}
function ATs(){var a=new PK();Vn(a);return a;}
function Vn(a){O9(a);}
function AFM(a){a.p=ASO();UM();AAL();a.dh(Ex(a));}
function Wd(a){O4(a);}
function MP(){var a=this;C.call(a);a.d_=null;a.uB=null;a.cI=null;a.cW=0;}
function AUx(){var a=new MP();ASb(a);return a;}
function ASb(a){I(a);a.cI=Cv();}
function OJ(){C.call(this);}
function CQ(b){return Math.log(b);}
function CL(b){return Math.sqrt(b);}
function B6(b){return Math.ceil(b);}
function Ei(b){return b+AGm(b)*0.5|0;}
function Bd(b,c){if(b<c)c=b;return c;}
function S(b,c){if(b>c)c=b;return c;}
function AOH(b,c){if(b<c)c=b;return c;}
function CR(b,c){if(b>c)c=b;return c;}
function KE(b){if(b<=0)b= -b;return b;}
function QR(b){if(b<=0.0)b= -b;return b;}
function AGm(b){var c;c=BM(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function MF(){var a=this;C.call(a);a.fq=null;a.fe=null;a.d1=null;a.qY=0;a.rx=0;a.xJ=0;a.m8=0;a.js=0;a.kH=0;}
function AWC(a,b,c){var d=new MF();AIl(d,a,b,c);return d;}
function AIl(a,b,c,d){I(a);a.js=0;a.kH=0;a.xJ=b;a.fq=d;a.d1=HQ(BE(a.fq.cH,c));a.rx=1;a.m8=!b?35048:35044;a.fe=a.d1.mt();a.qY=Uc(a);BJ(a.fe);BJ(a.d1);}
function Uc(a){var b;b=AX$.gM();AX$.ct(34962,b);AX$.dv(34962,CA(a.d1),null,a.m8);AX$.ct(34962,0);return b;}
function Qr(a){if(a.kH){AX$.m3(34962,0,Bq(a.d1),a.d1);a.js=0;}}
function Yi(a,b,c,d){a.js=1;if(a.rx){Fg(b,a.d1,d,c);Bw(a.fe,0);BF(a.fe,d);}else{B4(a.fe);a.fe.r2(b,c,d);BJ(a.fe);Bw(a.d1,0);BF(a.d1,Bq(a.fe)<<2);}Qr(a);}
function AJc(a,b,c){var d,e,f,g,h,i;d=AX$;d.ct(34962,a.qY);if(a.js){BF(a.d1,Bq(a.fe)*4|0);d.dv(34962,Bq(a.d1),a.d1,a.m8);a.js=0;}a:{e=Cx(a.fq);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=B8(a.fq,f);i=g[f];if(i>=0){b.gr(i);b.eu(i,h.c6,h.jc,h.kd,a.fq.cH,h.dI);}f=f+1|0;}}f=0;while(f<e){h=B8(a.fq,f);i=b.i2(h.fu);if(i>=0){b.gr(i);b.eu(i,h.c6,h.jc,h.kd,a.fq.cH,h.dI);}f=f+1|0;}}a.kH=1;}
function ACx(a,b,c){var d,e,f,g;a:{d=AX$;e=Cx(a.fq);if(c===null){f=0;while(f<e){b.no(B8(a.fq,f).fu);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.kR(g);f=f+1|0;}}}d.ct(34962,0);a.kH=0;}
function IT(){}
function TT(){var a=this;C.call(a);a.jQ=0;a.BD=null;a.gt=null;a.dc=null;a.dd=null;a.h_=null;a.ia=null;a.kW=null;a.hm=0;a.ig=null;a.mj=0;a.lE=null;a.qk=null;a.cw=null;a.bY=null;a.hC=0;}
function ATU(a){var b=new TT();ANE(b,a);return b;}
function ANE(a,b){I(a);a.jQ=0;a.BD=ATi(20);a.gt=$rt_createBooleanArray(20);a.dc=$rt_createIntArray(20);a.dd=$rt_createIntArray(20);a.h_=$rt_createIntArray(20);a.ia=$rt_createIntArray(20);a.kW=AWr();a.hm=0;a.ig=$rt_createBooleanArray(256);a.mj=0;a.lE=$rt_createBooleanArray(256);a.qk=$rt_createBooleanArray(5);a.hC=1;a.bY=b;N$(a);}
function AKX(a){var b;a:{if(a.jQ){a.jQ=0;b=0;while(true){if(b>=a.qk.data.length)break a;a.qk.data[b]=0;b=b+1|0;}}}b:{if(a.mj){a.mj=0;b=0;while(true){if(b>=a.lE.data.length)break b;a.lE.data[b]=0;b=b+1|0;}}}}
function AF7(a){return 0.0;}
function AKn(a){return a.dc.data[0];}
function AG1(a){return a.dd.data[0];}
function Xa(a){return a.jQ;}
function ZL(a,b){if(b==(-1))return a.hm<=0?0:1;if(b>=0&&b<=255)return a.ig.data[b];return 0;}
function PZ(a){return 0;}
function DM(a,b){return b.screenX;}
function DT(a,b){return b.screenY;}
function AK4(a){return PZ(a);}
function ALI(b){return 0.0;}
function AAI(){return null;}
function V$(a,b,c){return b.clientX;}
function AK5(a,b,c){return b.clientY;}
function N$(a){var b;b=a.bY.ownerDocument;a.bY.addEventListener("mousedown",BB(a,"handleEvent"),!!1);b.addEventListener("mousedown",BB(a,"handleEvent"),!!1);a.bY.addEventListener("mouseup",BB(a,"handleEvent"),!!1);b.addEventListener("mouseup",BB(a,"handleEvent"),!!1);a.bY.addEventListener("mousemove",BB(a,"handleEvent"),!!1);b.addEventListener("mousemove",BB(a,"handleEvent"),!!1);a.bY.addEventListener("mousewheel",BB(a,"handleEvent"),!!1);b.addEventListener("keydown",BB(a,"handleEvent"),!!0);b.addEventListener("keyup",
BB(a,"handleEvent"),!!0);b.addEventListener("keypress",BB(a,"handleEvent"),!!0);a.bY.addEventListener("touchstart",BB(a,"handleEvent"));a.bY.addEventListener("touchmove",BB(a,"handleEvent"));a.bY.addEventListener("touchcancel",BB(a,"handleEvent"));a.bY.addEventListener("touchend",BB(a,"handleEvent"));}
function EE(a,b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
function ADX(a,b){var c,d,e,f,g,h,i;if($rt_str(b.type).R(B(405))){c=b;if(b.target===a.bY&&!a.gt.data[0]){a.hC=1;a.jQ=1;a.gt.data[0]=1;a.kW.BQ(EE(a,c.button));a.h_.data[0]=0;a.ia.data[0]=0;if(!a.pz()){a.dc.data[0]=a.hK(c,a.bY);a.dd.data[0]=a.hA(c,a.bY);}else{d=a.dc.data;d[0]=d[0]+DM(a,b)|0;d=a.dd.data;d[0]=d[0]+DT(a,b)|0;}if(a.cw!==null)a.cw.Eh(a.dc.data[0],a.dd.data[0],0,EE(a,c.button));}else{e=a.hK(c,a.bY);f=a.hA(c,a.bY);if(!(e>=0.0&&e<=AX8.bE()&&f>=0.0&&f<=AX8.by()))a.hC=0;return;}}if($rt_str(b.type).R(B(406)))
{c=b;if(a.pz()){a.h_.data[0]=DM(a,b)|0;a.ia.data[0]=DT(a,b)|0;d=a.dc.data;d[0]=d[0]+DM(a,b)|0;d=a.dd.data;d[0]=d[0]+DT(a,b)|0;}else{a.h_.data[0]=a.hK(c,a.bY)-a.dc.data[0]|0;a.ia.data[0]=a.hA(c,a.bY)-a.dd.data[0]|0;a.dc.data[0]=a.hK(c,a.bY);a.dd.data[0]=a.hA(c,a.bY);}if(a.cw!==null){if(!a.gt.data[0])a.cw.EZ(a.dc.data[0],a.dd.data[0]);else a.cw.Is(a.dc.data[0],a.dd.data[0],0);}}if($rt_str(b.type).R(B(407))){if(!a.gt.data[0])return;c=b;a.kW.zy(EE(a,c.button));d=a.gt;d.data[0]=a.kW.bb<=0?0:1;if(a.pz()){a.h_.data[0]
=DM(a,b)|0;a.ia.data[0]=DT(a,b)|0;d=a.dc.data;d[0]=d[0]+DM(a,b)|0;d=a.dd.data;d[0]=d[0]+DT(a,b)|0;}else{a.h_.data[0]=a.hK(c,a.bY)-a.dc.data[0]|0;a.ia.data[0]=a.hA(c,a.bY)-a.dd.data[0]|0;a.dc.data[0]=a.hK(c,a.bY);a.dd.data[0]=a.hA(c,a.bY);}a.gt.data[0]=0;if(a.cw!==null)a.cw.F_(a.dc.data[0],a.dd.data[0],0,EE(a,c.button));}if($rt_str(b.type).R(AAI())){if(a.cw!==null)a.cw.HN(ALI(b)|0);b.preventDefault();}if($rt_str(b.type).R(B(408))&&a.hC){g=b;h=N4(g.keyCode);if(h==67){b.preventDefault();if(a.cw!==null){a.cw.x3(h);a.cw.xa(8);}}
else if(!a.ig.data[h]){a.hm=a.hm+1|0;a.ig.data[h]=1;a.mj=1;a.lE.data[h]=1;if(a.cw!==null)a.cw.x3(h);}}if($rt_str(b.type).R(B(409))&&a.hC){g=b;i=g.charCode&65535;if(a.cw!==null)a.cw.xa(i);}if($rt_str(b.type).R(B(410))&&a.hC){g=b;h=N4(g.keyCode);if(a.ig.data[h]){a.hm=a.hm-1|0;a.ig.data[h]=0;}if(a.cw!==null)a.cw.Ef(h);}}
function N4(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 131;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 132;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 133;case 46:return 67;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 244;case 113:return 245;case 114:return 246;case 115:return 247;case 116:return 248;case 117:return 249;case 118:return 250;case 119:return 251;case 120:return 252;case 121:return 253;case 122:return 254;case 123:return 255;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function ALP(a,b){a.i8(b);}
function NH(){O.call(this);}
function ATk(){var a=new NH();AMw(a);return a;}
function AMw(a){Bc(a);}
function AJq(a){var b;b=AU5(a);b.bi=1;return b;}
function JX(){var a=this;CU.call(a);a.BR=null;a.AP=null;a.tb=0;}
function Bs(a,b,c){var d=new JX();Lj(d,a,b,c);return d;}
function Lj(a,b,c,d){Fz(a);a.tb=(-1);a.BR=b;a.AP=c;a.tb=d;}
function SL(){O.call(this);}
function AUZ(){var a=new SL();AAd(a);return a;}
function AAd(a){Bc(a);}
function AAM(a){var b;b=AW1(a);b.bN.lU(0,2048);b.bi=1;return b;}
function F3(){}
function Da(){Bv.call(this);}
var A0V=null;var A0W=null;var A0X=null;var A0Y=null;var A0Z=null;function In(){In=N(Da);AQk();}
function Ha(a,b){var c=new Da();LK(c,a,b);return c;}
function T9(){In();return A0Z.qu();}
function LK(a,b,c){In();Ck(a,b,c);}
function AQk(){var b,c;A0V=Ha(B(411),0);A0W=Ha(B(412),1);A0X=Ha(B(413),2);A0Y=Ha(B(414),3);b=G(Da,4);c=b.data;c[0]=A0V;c[1]=A0W;c[2]=A0X;c[3]=A0Y;A0Z=b;}
function Kk(){var a=this;C.call(a);a.bS=0;a.cp=null;a.b2=null;a.bP=0;a.eN=0;a.tk=0.0;a.ll=0;a.f7=0;a.eA=0;a.h8=0;a.mL=0;}
var A00=null;function AMT(){AMT=N(Kk);ABP();}
function IP(){var a=new Kk();SJ(a);return a;}
function A01(a,b){var c=new Kk();I1(c,a,b);return c;}
function SJ(a){AMT();I1(a,51,0.800000011920929);}
function I1(a,b,c){var d;AMT();I(a);if(b<0)F(U(J().a(B(33)).j(b).b()));d=EV(B6(b/c)|0);if(d>1073741824)F(U(J().a(B(34)).j(d).b()));a.bP=d;if(c<=0.0)F(U(J().a(B(35)).dJ(c).b()));a.tk=c;a.eA=a.bP*c|0;a.f7=a.bP-1|0;a.ll=31-BS(a.bP)|0;a.h8=S(3,(B6(CQ(a.bP))|0)*2|0);a.mL=S(Bd(a.bP,8),(CL(a.bP)|0)/8|0);a.cp=G(C,a.bP+a.h8|0);a.b2=G(C,a.cp.data.length);}
function ANw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;if(b===null)F(U(B(415)));d=a.cp;e=d.data;f=b.dY();g=f&a.f7;h=e[g];if(b.R(h)){i=a.b2.data[g];a.b2.data[g]=c;return i;}j=Fd(a,f);k=e[j];if(b.R(k)){i=a.b2.data[j];a.b2.data[j]=c;return i;}l=Fn(a,f);m=e[l];if(b.R(m)){i=a.b2.data[l];a.b2.data[l]=c;return i;}n=a.bP;o=n+a.eN|0;while(true){if(n>=o){if(h===null){e[g]=b;a.b2.data[g]=c;p=a.bS;a.bS=p+1|0;if(p>=a.eA)Ca(a,a.bP<<1);return null;}if(k===null){e[j]=b;a.b2.data[j]=c;p=a.bS;a.bS=p+1|0;if(p>=a.eA)Ca(a,a.bP<<1);return null;}if
(m!==null){Hj(a,b,c,g,h,j,k,l,m);return null;}e[l]=b;a.b2.data[l]=c;p=a.bS;a.bS=p+1|0;if(p>=a.eA)Ca(a,a.bP<<1);return null;}if(b.R(e[n]))break;n=n+1|0;}i=a.b2.data[n];a.b2.data[n]=c;return i;}
function HX(a,b,c){var d,e,f,g,h,i,j,k;d=b.dY();e=d&a.f7;f=a.cp.data[e];if(f===null){a.cp.data[e]=b;a.b2.data[e]=c;g=a.bS;a.bS=g+1|0;if(g>=a.eA)Ca(a,a.bP<<1);return;}h=Fd(a,d);i=a.cp.data[h];if(i===null){a.cp.data[h]=b;a.b2.data[h]=c;g=a.bS;a.bS=g+1|0;if(g>=a.eA)Ca(a,a.bP<<1);return;}j=Fn(a,d);k=a.cp.data[j];if(k!==null){Hj(a,b,c,e,f,h,i,j,k);return;}a.cp.data[j]=b;a.b2.data[j]=c;g=a.bS;a.bS=g+1|0;if(g>=a.eA)Ca(a,a.bP<<1);}
function Hj(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u;j=a.cp;k=a.b2;l=a.f7;m=0;n=a.mL;while(true){a:{switch(ED(2)){case 0:break;case 1:o=k.data;p=j.data;q=o[f];p[f]=b;o[f]=c;e=g;break a;default:o=k.data;p=j.data;q=o[h];p[h]=b;o[h]=c;e=i;break a;}o=k.data;p=j.data;q=o[d];p[d]=b;o[d]=c;}p=j.data;r=e.dY();d=r&l;s=p[d];if(s===null){o=k.data;p[d]=e;o[d]=q;t=a.bS;a.bS=t+1|0;if(t>=a.eA)Ca(a,a.bP<<1);return;}f=Fd(a,r);g=p[f];if(g===null){o=k.data;p[f]=e;o[f]=q;t=a.bS;a.bS=t+1|0;if(t>=a.eA)Ca(a,a.bP<<1);return;}h
=Fn(a,r);i=p[h];if(i===null){o=k.data;p[h]=e;o[h]=q;u=a.bS;a.bS=u+1|0;if(u>=a.eA)Ca(a,a.bP<<1);return;}m=m+1|0;if(m==n)break;b=e;e=s;c=q;}St(a,e,q);}
function St(a,b,c){var d;if(a.eN==a.h8){Ca(a,a.bP<<1);HX(a,b,c);return;}d=a.bP+a.eN|0;a.cp.data[d]=b;a.b2.data[d]=c;a.eN=a.eN+1|0;a.bS=a.bS+1|0;}
function Yn(a,b){var c,d;c=b.dY();d=c&a.f7;if(!b.R(a.cp.data[d])){d=Fd(a,c);if(!b.R(a.cp.data[d])){d=Fn(a,c);if(!b.R(a.cp.data[d]))return Lx(a,b,null);}}return a.b2.data[d];}
function Lx(a,b,c){var d,e,f;d=a.cp;e=a.bP;f=e+a.eN|0;while(e<f){if(b.R(d.data[e]))return a.b2.data[e];e=e+1|0;}return c;}
function WW(a){var b,c,d,e,f;if(!a.bS)return;b=a.cp;c=a.b2;d=a.bP+a.eN|0;while(true){e=d+(-1)|0;if(d<=0)break;f=c.data;b.data[e]=null;f[e]=null;d=e;}a.bS=0;a.eN=0;}
function Ca(a,b){var c,d,e,f,g,h,i;a:{c=a.bP+a.eN|0;a.bP=b;a.eA=b*a.tk|0;a.f7=b-1|0;a.ll=31-BS(b)|0;d=b;a.h8=S(3,(B6(CQ(d))|0)*2|0);a.mL=S(Bd(b,8),(CL(d)|0)/8|0);e=a.cp;f=a.b2;a.cp=G(C,b+a.h8|0);a.b2=G(C,b+a.h8|0);g=a.bS;a.bS=0;a.eN=0;if(g>0){h=0;while(true){if(h>=c)break a;i=e.data[h];if(i!==null)HX(a,i,f.data[h]);h=h+1|0;}}}}
function Fd(a,b){var c;c=BE(b,(-1262997959));return (c^c>>>a.ll)&a.f7;}
function Fn(a,b){var c;c=BE(b,(-825114047));return (c^c>>>a.ll)&a.f7;}
function ABP(){A00=M_();}
function OA(){var a=this;C.call(a);a.e=null;a.dq=0;a.nn=null;a.rc=0;a.fm=0;a.f1=0;a.bV=0;a.oN=null;}
function ASQ(){var a=new OA();VY(a);return a;}
function DW(a,b){return AT3(a,b);}
function Hk(a,b,c){var d,e,f,g,h,i;d=Dw();e=DW(a,b);f=0;g=0;if(!b.h()){h=G(Br,1);h.data[0]=B(93);return h;}while(DV(e)){i=f+1|0;if(i>=c&&c>0)break;d.c3(b.em(g,J8(e)).b());g=H8(e);f=i;}a:{d.c3(b.em(g,b.h()).b());i=f+1|0;if(!c)while(true){i=i+(-1)|0;if(i<0)break;if(d.t(i).b().h())break a;d.iq(i);}}if(i<0)i=0;return d.t1(G(Br,i));}
function Li(a,b){return Hk(a,b,0);}
function FD(a){return a.e.b();}
function ABO(b,c){if(b===null)F(ALY(B(416)));if(c&&(c|255)!=255)F(U(B(93)));MJ();AXv=1;return NR(ASQ(),b,c);}
function NR(a,b,c){a.e=AT2(b,c);a.dq=c;a.oN=Kh(a,(-1),a.dq,null);if(a.e.b9()){ND(a);return a;}F(Bs(B(93),a.e.b(),a.e.dV()));}
function T0(a,b){var c,d,e;c=AWt(Bu(a,2),Bu(a,64));while(!a.e.b9()){d=a.e;if(!d.gP())break;d=a.e;if(d.cS()&&a.e.cS()!=(-536870788)){d=a.e;if(d.cS()!=(-536870871))break;}c.cJ(a.e.D());if(a.e.b1()!=(-536870788))continue;a.e.D();}e=F4(a,c);e.T(b);return e;}
function Kh(a,b,c,d){var e,f,g,h,i,j;e=Dw();f=a.dq;g=0;if(c!=a.dq)a.dq=c;a:{switch(b){case -1073741784:h=new IK;i=a.bV+1|0;a.bV=i;P$(h,i);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new H4;i=a.bV+1|0;a.bV=i;Tt(h,i);break a;case -33554392:h=new I0;i=a.bV+1|0;a.bV=i;Ug(h,i);break a;default:a.fm=a.fm+1|0;if(d!==null)h=AVX(a.fm);else{h=AUm();g=1;}if(a.fm<=(-1))break a;if(a.fm>=10)break a;a.nn.data[a.fm]=h;break a;}h=ASN();}while(true){if(a.e.gP()&&a.e.cS()==(-536870788))j=T0(a,
h);else if(a.e.b1()==(-536870788)){j=Ee(h);a.e.D();}else{j=HL(a,h);if(a.e.b1()==(-536870788))a.e.D();}if(j!==null)e.c3(j);if(a.e.b9())break;if(a.e.b1()==(-536870871))break;}if(a.e.y8()==(-536870788))e.c3(Ee(h));if(a.dq!=f&&!g){a.dq=f;a.e.yQ(a.dq);}switch(b){case -1073741784:break;case -536870872:return ATK(e,h);case -268435416:return ASI(e,h);case -134217688:return ATz(e,h);case -67108824:return AT8(e,h);case -33554392:return AS0(e,h);default:switch(e.bm()){case 0:break;case 1:return AVv(e.t(0),h);default:return AUJ(e,
h);}return Ee(h);}return AWN(e,h);}
function RU(a){var b,c,d;b=AL3();while(!a.e.b9()){c=a.e;if(!c.gP())break;c=a.e;if(c.vs())break;c=a.e;if(c.wK())break;c=a.e;if(!(!c.nj()&&!a.e.cS())){c=a.e;if(!(!c.nj()&&FR(a.e.cS()))){c=a.e;if(c.cS()!=(-536870871)){c=a.e;if((c.cS()&(-2147418113))!=(-2147483608)){c=a.e;if(c.cS()!=(-536870788)){c=a.e;if(c.cS()!=(-536870876))break;}}}}}d=a.e.D();if(!GJ(d))b.Bm(d&65535);else b.Ca(Do(d));}if(!Bu(a,2))return AUv(b);if(Bu(a,64))return AW5(b);return AXb(b);}
function R8(a){var b,c,d,e,f,g,h,i,j,k;b=$rt_createIntArray(4);c=0;d=(-1);e=(-1);if(!a.e.b9()&&a.e.gP()){f=b.data;d=a.e.D();f[c]=d;e=d-4352|0;}if(e>=0&&e<19){g=$rt_createCharArray(3);f=g.data;f[c]=d&65535;h=a.e.b1();i=h-4449|0;if(i>=0&&i<21){f[1]=h&65535;a.e.D();j=a.e.b1();h=j-4519|0;if(h>=0&&h<28){f[2]=j&65535;a.e.D();return APb(g,3);}return APb(g,2);}if(!Bu(a,2))return M9(f[0]);if(Bu(a,64))return ALV(f[0]);return Zo(f[0]);}k=1;while(k<4&&!a.e.b9()&&a.e.gP()){f=b.data;j=k+1|0;f[k]=a.e.D();k=j;}if(k==1){f=b.data;if
(!AHh(f[0]))return Kb(a,f[0]);}if(!Bu(a,2))return AW7(b,k);if(Bu(a,64))return AWw(b,k);return AUK(b,k);}
function HL(a,b){var c,d,e,f;if(a.e.gP()&&!a.e.nj()&&FR(a.e.cS())){if(!Bu(a,128)){if(!a.e.vs()&&!a.e.wK())c=RU(a);else{d=J6(a,b);c=GP(a,b,d);}}else{c=R8(a);if(!a.e.b9()){e=a.e;if(!(e.b1()==(-536870871)&&!(b instanceof D$))){e=a.e;if(e.b1()!=(-536870788)&&!a.e.gP())c=GP(a,b,c);}}}}else if(a.e.b1()!=(-536870871)){d=J6(a,b);c=GP(a,b,d);}else{if(b instanceof D$)F(Bs(B(93),a.e.b(),a.e.dV()));c=Ee(b);}a:{if(!a.e.b9()){e=a.e;if(!(e.b1()==(-536870871)&&!(b instanceof D$))){e=a.e;if(e.b1()!=(-536870788)){f=HL(a,b);if
(c instanceof BX&&!(c instanceof De)&&!(c instanceof BZ)&&!(c instanceof Db)){e=c;if(!f.cn(e.ma()))c=ATu(e);}if((f.ii()&65535)!=43)c.T(f);else c.T(f.ma());break a;}}}if(c===null)return null;c.T(b);}if((c.ii()&65535)!=43)return c;return c.ma();}
function GP(a,b,c){var d,e,f,g,h,i,j;d=a.e.b1();if(c!==null&&!(c instanceof Bo)){switch(d){case -2147483606:a.e.D();return AV7(c,b,d);case -2147483605:a.e.D();return AU8(c,b,(-2147483606));case -2147483585:a.e.D();return AVm(c,b,(-536870849));case -2147483525:e=new Hg;f=a.e.g2();g=a.f1+1|0;a.f1=g;Qv(e,f,c,b,(-536870849),g);return e;case -1073741782:case -1073741781:a.e.D();h=AT5(c,b,d);c.T(h);return h;case -1073741761:a.e.D();h=ATV(c,b,(-536870849));c.T(b);return h;case -1073741701:h=new Jz;e=a.e;e=e.g2();i
=a.f1+1|0;a.f1=i;Qp(h,e,c,b,(-536870849),i);c.T(h);return h;case -536870870:case -536870869:a.e.D();h=c.ii()!=(-2147483602)?ATt(c,b,d):Bu(a,32)?AUa(c,b,d):ATj(c,b,d,HV(a.dq));c.T(h);return h;case -536870849:a.e.D();h=AWR(c,b,(-536870849));c.T(b);return h;case -536870789:h=new Dj;e=a.e;e=e.g2();g=a.f1+1|0;a.f1=g;Fo(h,e,c,b,(-536870849),g);c.T(h);return h;default:}return c;}j=null;if(c!==null)j=c;switch(d){case -2147483606:case -2147483605:a.e.D();h=AV0(j,b,d);j.T(h);return h;case -2147483585:a.e.D();return ASR(j,
b,(-2147483585));case -2147483525:return AWu(a.e.g2(),j,b,(-2147483525));case -1073741782:case -1073741781:a.e.D();h=AWn(j,b,d);j.T(h);return h;case -1073741761:a.e.D();return AV$(j,b,(-1073741761));case -1073741701:return AUo(a.e.g2(),j,b,(-1073741701));case -536870870:case -536870869:a.e.D();h=AVK(j,b,d);j.T(h);return h;case -536870849:a.e.D();return AU4(j,b,(-536870849));case -536870789:return ATP(a.e.g2(),j,b,(-536870789));default:}return c;}
function J6(a,b){var c,d,e,f,g,h,i,j,k,l;c=null;while(true){a:{d=a.e.b1();if((d&(-2147418113))==(-2147483608)){a.e.D();e=(d&16711680)>>16;d=d&(-16711681);if(d==(-16777176))a.dq=e;else{if(d!=(-1073741784))e=a.dq;c=Kh(a,d,e,b);if(a.e.b1()!=(-536870871))F(Bs(B(93),a.e.b(),a.e.dV()));a.e.D();}}else{b:{c:{switch(d){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:f=(d&2147483647)-48|0;if(a.fm<f)F(Bs(B(93),a.e.b(),
a.e.dV()));a.e.D();a.bV=a.bV+1|0;c=!Bu(a,2)?ASZ(f,a.bV):Bu(a,64)?AUk(f,a.bV):AWX(f,a.bV);a.nn.data[f].ng=1;a.rc=1;break a;case -2147483583:break;case -2147483582:a.e.D();c=AON(0);break a;case -2147483577:a.e.D();c=ATQ();break a;case -2147483558:a.e.D();c=new J1;g=a.bV+1|0;a.bV=g;SK(c,g);break a;case -2147483550:a.e.D();c=AON(1);break a;case -2147483526:a.e.D();c=AWl();break a;case -536870876:break c;case -536870866:a.e.D();if(Bu(a,32)){c=AWJ();break a;}c=AVT(HV(a.dq));break a;case -536870821:a.e.D();h=0;if(a.e.b1()
==(-536870818)){h=1;a.e.D();}c=Qy(a,h,b);if(a.e.b1()!=(-536870819))F(Bs(B(93),a.e.b(),a.e.dV()));a.e.lT(1);a.e.D();break a;case -536870818:a.e.D();a.bV=a.bV+1|0;if(!Bu(a,8)){c=AO3();break a;}c=AWm(HV(a.dq));break a;case 0:i=a.e.pu();if(i!==null)c=F4(a,i);else{if(a.e.b9()){c=Ee(b);break a;}c=M9(d&65535);}a.e.D();break a;default:break b;}a.e.D();c=AO3();break a;}a.e.D();a.bV=a.bV+1|0;if(Bu(a,8)){if(Bu(a,1)){c=AUl(a.bV);break a;}c=ASP(a.bV);break a;}if(Bu(a,1)){c=AUW(a.bV);break a;}c=AV5(a.bV);break a;}if(d>=0
&&!a.e.jz()){c=Kb(a,d);a.e.D();}else if(d==(-536870788))c=Ee(b);else{if(d!=(-536870871)){j=new JX;k=a.e;if(!k.jz()){g=d&65535;k=GK(g);}else k=a.e.pu().b();l=a.e;Lj(j,k,l.b(),a.e.dV());F(j);}if(b instanceof D$)F(Bs(B(93),a.e.b(),a.e.dV()));c=Ee(b);}}}if(d!=(-16777176))break;}return c;}
function Qy(a,b,c){var d,e;d=DH(a,b);e=F4(a,d);e.T(c);return e;}
function DH(a,b){var c,d,e,f,g,h,i,j,k,$$je;c=AWg(b,Bu(a,2),Bu(a,64));d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(a.e.b9())break a;f=a.e.b1()==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.e.b1()){case -536870874:if(d>=0)c.cJ(d);d=a.e.D();if(a.e.b1()!=(-536870874)){d=38;break d;}if(a.e.cS()==(-536870821)){a.e.D();e=1;d=(-1);break d;}a.e.D();if(g){c=DH(a,0);break d;}if(a.e.b1()==(-536870819))break d;c.tR(DH(a,0));break d;case -536870867:if(!g&&a.e.cS()!=(-536870819)){h=a.e;if(h.cS()!=(-536870821)&&d>=0){a.e.D();i
=a.e.b1();if(a.e.jz())break c;if(i<0){h=a.e;if(h.cS()!=(-536870819)){h=a.e;if(h.cS()!=(-536870821)&&d>=0)break c;}}e:{try{if(FR(i))break e;i=i&65535;break e;}catch($$e){$$je=P($$e);if($$je instanceof Bz){break b;}else{throw $$e;}}}try{c.bL(d,i);}catch($$e){$$je=P($$e);if($$je instanceof Bz){break b;}else{throw $$e;}}a.e.D();d=(-1);break d;}}if(d>=0)c.cJ(d);d=45;a.e.D();break d;case -536870821:if(d>=0){c.cJ(d);d=(-1);}a.e.D();j=0;if(a.e.b1()==(-536870818)){a.e.D();j=1;}if(!e)c.xN(DH(a,j));else c.tR(DH(a,j));e
=0;a.e.D();break d;case -536870819:if(d>=0)c.cJ(d);d=93;a.e.D();break d;case -536870818:if(d>=0)c.cJ(d);d=94;a.e.D();break d;case 0:if(d>=0)c.cJ(d);k=a.e.pu();if(k===null)d=0;else{c.Ae(k);d=(-1);}a.e.D();break d;default:}if(d>=0)c.cJ(d);d=a.e.D();}g=0;}F(Bs(B(93),FD(a),a.e.dV()));}F(Bs(B(93),FD(a),a.e.dV()));}if(!f){if(d>=0)c.cJ(d);return c;}F(Bs(B(93),FD(a),a.e.dV()-1|0));}
function Kb(a,b){var c;c=GJ(b);if(Bu(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return Zo(b&65535);}if(Bu(a,64)&&b>128){if(c)return AVo(b);if(HG(b))return AJO(b&65535);if(!IU(b))return ALV(b&65535);return AFd(b&65535);}}if(c)return ATc(b);if(HG(b))return AJO(b&65535);if(!IU(b))return M9(b&65535);return AFd(b&65535);}
function F4(a,b){var c,d;if(!b.xu()){if(!b.tY()){if(b.go())return AEe(b);return AOO(b);}if(b.go())return AJm(b);return AF4(b);}c=b.AL();d=ASK(c);if(!b.tY()){if(b.go())return Jo(AEe(b.kf()),d);return Jo(AOO(b.kf()),d);}if(b.go())return Jo(AJm(b.kf()),d);return Jo(AF4(b.kf()),d);}
function DP(b){return ABO(b,0);}
function ND(a){if(a.rc)a.oN.ev();}
function AF_(b){var c,d,e,f;c=J().a(B(417));d=0;while(true){e=b.o0(B(418),d);if(e<0)break;f=e+2|0;c.a(b.c2(d,f)).a(B(419));d=f;}return c.a(b.eD(d)).a(B(418)).b();}
function KV(a){return a.fm;}
function Tb(a){return a.f1+1|0;}
function QV(a){return a.bV+1|0;}
function EP(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Bu(a,b){return (a.dq&b)!=b?0:1;}
function VY(a){I(a);a.nn=G(BR,10);a.fm=(-1);a.f1=(-1);a.bV=(-1);}
function MZ(){Ev.call(this);}
function AVm(a,b,c){var d=new MZ();AOM(d,a,b,c);return d;}
function AOM(a,b,c,d){G8(a,b,c,d);GW();b.T(AYk);}
function AFR(a,b,c,d){var e;e=a.Z.d(b,c,d);if(e<=0)e=b;return a.i.d(e,c,d);}
function AJx(a,b){a.i=b;}
function H6(){var a=this;C.call(a);a.qt=0;a.o$=0;a.py=0;a.xB=null;a.zW=null;a.e8=null;a.w8=B(420);}
function A02(a,b,c,d){var e=new H6();Pq(e,a,b,c,d);return e;}
function Pq(a,b,c,d,e){var f;I(a);a.w8=B(420);Ey();if(b===AXE){Dd();a.e8=AXj;}else if(b===AXJ){Dd();a.e8=AXj;}else if(b===AXF){Dd();a.e8=AXi;}else if(b===AXH){Dd();a.e8=AXi;}else if(b!==AXI){Dd();a.e8=AXl;}else{Dd();a.e8=AXk;}f=a.e8;Dd();if(f===AXj)FO(a,B(421),c);else if(a.e8===AXk)FO(a,B(422),c);else if(a.e8===AXi)FO(a,B(423),c);else{a.qt=(-1);a.o$=(-1);a.py=(-1);d=B(93);e=B(93);}a.xB=d;a.zW=e;}
function FO(a,b,c){var d,e,f,g,h,i,j;d=DP(b);e=DW(d,c);f=DV(e);if(!f){AX7.pO(B(420),J().a(B(424)).a(c).b());a.qt=2;a.o$=0;a.py=0;}else{g=D9(e,1);h=g.wR(B(425));i=h.data;a.qt=FL(a,i[0],2);j=i.length;a.o$=j<2?0:FL(a,i[1],0);a.py=j<3?0:FL(a,i[2],0);}}
function FL(a,b,c){var d,$$je;a:{try{d=Bn(b);}catch($$e){$$je=P($$e);if($$je instanceof Cm){break a;}else{throw $$e;}}return d;}AX7.kx(B(426),J().a(B(427)).a(b).a(B(428)).j(c).b());return c;}
function On(){Bh.call(this);}
function EO(){var a=new On();ADi(a);return a;}
function ADi(a){B2(a);}
function Of(){var a=this;C$.call(a);a.im=null;a.o1=null;a.jd=0;a.qp=0;a.gl=0;}
function AW3(a){var b=new Of();AHU(b,a);return b;}
function A03(a,b,c){var d=new Of();Pm(d,a,b,c);return d;}
function AHU(a,b){Pm(a,b,AW0(),512);}
function Pm(a,b,c,d){Gy(a,b);if(b!==null&&c!==null){if(d<=0)F(DK());a.im=c;a.o1=$rt_createByteArray(d);return;}F(DJ());}
function AM3(a,b,c,d){var e,f,g,h,i,$$je;if(a.qp)F(EI(B(2)));if(null===b)F(DJ());if(c>=0&&d>=0){e=b.data;f=c+d|0;g=e.length;if(f<=g){if(!d)return 0;if(a.gl)return (-1);if(c<=g&&d>=0&&c>=0&&(g-c|0)>=d){a:{b:{c:{d:{while(true){if(a.im.qZ())a.AF();try{h=a.im.z2(b,c,d);a.gl=a.im.Ao();if(h>0)break;if(a.gl)break d;if(a.im.xI())break b;if(a.jd==(-1))break c;continue;}catch($$e){$$je=P($$e);if($$je instanceof D7){i=$$je;break a;}else{throw $$e;}}}return h;}try{}catch($$e){$$je=P($$e);if($$je instanceof D7){i=$$je;break a;}
else{throw $$e;}}return (-1);}try{a.gl=1;F(Nj());}catch($$e){$$je=P($$e);if($$je instanceof D7){i=$$je;break a;}else{throw $$e;}}}try{a.gl=1;}catch($$e){$$je=P($$e);if($$je instanceof D7){i=$$je;break a;}else{throw $$e;}}return (-1);}a.gl=1;if(a.jd!=(-1))F(ASW(i));F(Nj());}F(Nh());}}F(B3());}
function WE(a){if(a.qp)F(AJw());a.jd=a.id.lP(a.o1);if(a.jd>0)a.im.Al(a.o1,0,a.jd);}
function AHF(a){if(a.qp)F(EI(B(2)));if(!a.gl)return 1;return 0;}
function Iu(){}
function Gg(){var a=this;C.call(a);a.e0=0.0;a.eZ=0.0;a.jU=0.0;a.iT=0.0;}
var A04=null;var A05=null;function ANz(){ANz=N(Gg);ANa();}
function ASo(){var a=new Gg();NW(a);return a;}
function B0(a,b,c,d){var e=new Gg();Kp(e,a,b,c,d);return e;}
function NW(a){ANz();I(a);}
function Kp(a,b,c,d,e){ANz();I(a);a.e0=b;a.eZ=c;a.jU=d;a.iT=e;}
function AO4(a,b,c){return a.e0<=b&&a.e0+a.jU>=b&&a.eZ<=c&&a.eZ+a.iT>=c?1:0;}
function ADN(a,b){return a.e0<b.e0+b.jU&&a.e0+a.jU>b.e0&&a.eZ<b.eZ+b.iT&&a.eZ+a.iT>b.eZ?1:0;}
function ANa(){A04=ASo();A05=ASo();}
function Ua(){O.call(this);}
function AV_(){var a=new Ua();AGQ(a);return a;}
function AGQ(a){Bc(a);}
function AGG(a){var b;b=AWO(a);b.bi=1;return b;}
function Hl(){var a=this;C.call(a);a.nX=0;a.t3=0;a.sD=null;}
function ACV(a,b,c){var d=new Hl();AN8(d,a,b,c);return d;}
function AN8(a,b,c,d){I(a);a.nX=b;a.t3=c;a.sD=d;}
function BQ(){var a=this;Bz.call(a);a.ec=0;a.Be=null;}
function T6(a,b){var c=new BQ();AA4(c,a,b);return c;}
function AA4(a,b,c){a.Be=b;Dy(a);a.ec=c;}
function RT(){CX.call(this);}
function AWh(){var a=new RT();AEj(a);return a;}
function AEj(a){HM(a);}
function ANA(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQN(a,b,c){var d;a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}d=1;break a;}d=0;}return d;}
function RS(){CX.call(this);}
function AVJ(){var a=new RS();X5(a);return a;}
function X5(a){HM(a);}
function Zp(a,b){return b!=10?0:1;}
function AMb(a,b,c){return b!=10?0:1;}
function Ou(){Ew.call(this);}
function UT(){O.call(this);}
function AVQ(){var a=new UT();AEB(a);return a;}
function AEB(a){Bc(a);}
function AMP(a){var b;b=AUL(a);b.bi=1;return b;}
function RK(){var a=this;C.call(a);a.rE=null;a.th=0;}
function AVY(a){var b=new RK();ABa(b,a);return b;}
function ABa(a,b){I(a);a.rE=b;}
function CB(){var a=this;Bo.call(a);a.fL=null;a.uy=0;}
function AOO(a){var b=new CB();ALl(b,a);return b;}
function ALl(a,b){Cc(a);a.fL=b.jq();a.uy=b.bF;}
function U6(a,b,c){return !a.fL.s(c.g(b))?(-1):1;}
function AGq(a){return J().a(B(50)).a(!a.uy?B(51):B(52)).a(a.fL.b()).b();}
function AKN(a,b){if(b instanceof CH)return FM(a.fL,b.lq());if(b instanceof CB)return E7(a.fL,b.fL);if(b instanceof Cd)return E7(a.fL,b.pq());if(!(b instanceof Cy))return 1;return 0;}
function AKq(a){return a.fL;}
function GR(){M.call(this);this.o5=0;}
function AWP(a){var b=new GR();QJ(b,a);return b;}
function QJ(a,b){T(a);a.o5=b;}
function AKv(a,b){return a.bF^(a.o5!=EX(b&65535)?0:1);}
function Ph(){GR.call(this);}
function AS4(a){var b=new Ph();AI1(b,a);return b;}
function AI1(a,b){QJ(a,b);}
function AN4(a,b){return a.bF^(!(a.o5>>EX(b&65535)&1)?0:1);}
function JM(){var a=this;C.call(a);a.p7=null;a.hz=null;a.c5=0;a.iA=null;a.wO=0.0;a.rb=0.0;a.e7=0;a.vp=null;a.lL=null;a.l6=null;a.gJ=0;a.pw=0;a.sk=0;a.sA=0;a.qE=0;a.gg=null;a.eB=null;a.xO=0;a.AY=null;a.vR=0.0;a.kM=0;a.n5=0;a.pX=0;}
var A06=null;function Sq(){Sq=N(JM);AIz();}
function ASO(){var a=new JM();SH(a);return a;}
function A07(a,b){var c=new JM();HE(c,a,b);return c;}
function SH(a){Sq();HE(a,1000,null);}
function HE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;Sq();I(a);a.c5=0;a.iA=null;a.wO=0.0;a.rb=0.0;a.e7=0;a.vp=C_();a.lL=C_();a.l6=C_();a.gJ=0;a.pw=770;a.sk=771;a.sA=770;a.qE=771;a.eB=null;a.AY=Cn(1.0,1.0,1.0,1.0);a.vR=AZQ;a.kM=0;a.n5=0;a.pX=0;if(b>8191)F(U(J().a(B(429)).j(b).b()));if(AYp===null)d=A06;else{In();d=A0Y;}e=new F7;f=b*4|0;g=b*6|0;h=G(GB,3);i=h.data;i[0]=RG(1,2,B(430));i[1]=RG(4,4,B(431));i[2]=RG(16,2,B(432));Iw(e,d,0,f,g,h);a.p7=e;a.lL.x$(0.0,0.0,AX8.bE(),AX8.by());a.hz=$rt_createFloatArray(b*20|0);j=$rt_createShortArray(g);k
=0;l=0;while(l<g){h=j.data;h[l]=k;h[l+1|0]=(k+1|0)<<16>>16;m=l+2|0;n=(k+2|0)<<16>>16;h[m]=n;h[l+3|0]=n;h[l+4|0]=(k+3|0)<<16>>16;h[l+5|0]=k;l=l+6|0;k=(k+4|0)<<16>>16;}a.p7.Af(j);if(c!==null)a.gg=c;else{a.gg=Re();a.xO=1;}}
function Re(){var b,c,d;Sq();b=B(433);c=B(434);d=AT$(b,c);if(d.uM())return d;F(U(J().a(B(435)).a(d.zd()).b()));}
function AD_(a){if(a.e7)F(CC(B(436)));a.kM=0;AX9.ul(0);if(a.eB===null)a.gg.b3();else a.eB.b3();HZ(a);a.e7=1;}
function AN7(a){var b;if(!a.e7)F(CC(B(437)));if(a.c5>0)a.f4();a.iA=null;a.e7=0;b=AX9;b.ul(1);if(a.BL())b.hb(3042);if(a.eB===null)a.gg.b7();else a.eB.b7();}
function AFL(a,b,c,d,e){var f,g,h;if(!a.e7)F(CC(B(438)));f=a.hz.data.length;if(b!==a.iA){a.vM(b);g=f;}else{g=f-a.c5|0;if(!g){a.f4();g=f;}}h=Bd(g,e);W(c,d,a.hz,a.c5,h);a.c5=a.c5+h|0;g=e-h|0;while(g>0){d=d+h|0;a.f4();h=Bd(f,g);W(c,d,a.hz,0,h);a.c5=a.c5+h|0;g=g-h|0;}}
function AD1(a,b,c,d){a.bo(b,c,d,b.tn(),b.qP());}
function Y4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(!a.e7)F(CC(B(438)));g=a.hz;h=b.ga;if(h!==a.iA)a.vM(h);else{i=g.data;if(a.c5==i.length)a.f4();}i=g.data;j=c+e;k=d+f;l=b.p8;m=b.wc;n=b.we;o=b.p9;p=a.vR;q=a.c5;i[q]=c;i[q+1|0]=d;i[q+2|0]=p;i[q+3|0]=l;i[q+4|0]=m;i[q+5|0]=c;i[q+6|0]=k;i[q+7|0]=p;i[q+8|0]=l;i[q+9|0]=o;i[q+10|0]=j;i[q+11|0]=k;i[q+12|0]=p;i[q+13|0]=n;i[q+14|0]=o;i[q+15|0]=j;i[q+16|0]=d;i[q+17|0]=p;i[q+18|0]=n;i[q+19|0]=m;a.c5=q+20|0;}
function AFb(a){var b,c,d;if(!a.c5)return;a.kM=a.kM+1|0;a.n5=a.n5+1|0;b=a.c5/20|0;if(b>a.pX)a.pX=b;c=b*6|0;a.iA.g6();d=a.p7;d.DG(a.hz,0,a.c5);Bw(d.qC(),0);BF(d.qC(),c);if(a.gJ)AX9.hb(3042);else{AX9.zK(3042);if(a.pw!=(-1))AX9.Ce(a.pw,a.sk,a.sA,a.qE);}d.Ag(a.eB===null?a.gg:a.eB,4,0,c);a.c5=0;}
function ABL(a){if(a.gJ)return;a.f4();a.gJ=1;}
function AFZ(a){if(!a.gJ)return;a.f4();a.gJ=0;}
function ADD(a,b){if(a.e7)a.f4();a.lL.lK(b);if(a.e7)HZ(a);}
function HZ(a){a.l6.lK(a.lL).wp(a.vp);if(a.eB===null){a.gg.wh(B(439),a.l6);a.gg.t7(B(440),0);}else{a.eB.wh(B(439),a.l6);a.eB.t7(B(440),0);}}
function AKd(a,b){a.f4();a.iA=b;a.wO=1.0/b.bE();a.rb=1.0/b.by();}
function WM(a){return a.gJ?0:1;}
function AIz(){In();A06=A0V;}
function Kl(){C.call(this);}
var A08=null;function AVu(){AVu=N(Kl);AMW();}
function AMW(){var $$je;A08=$rt_createIntArray(T9().data.length);a:{try{A08.data[CJ(A0W)]=1;break a;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}b:{try{A08.data[CJ(A0X)]=2;break b;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}c:{try{A08.data[CJ(A0Y)]=3;break c;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}d:{try{A08.data[CJ(A0V)]=4;break d;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}}
function Nk(){BU.call(this);}
function MC(){var a=this;M.call(a);a.oX=0;a.q3=0;a.ly=0;a.os=0;a.eW=0;a.gy=0;a.Y=null;a.bJ=null;}
function B9(){var a=new MC();ARX(a);return a;}
function AWt(a,b){var c=new MC();MN(c,a,b);return c;}
function AWg(a,b,c){var d=new MC();Wm(d,a,b,c);return d;}
function ARX(a){T(a);a.Y=ASt();}
function MN(a,b,c){T(a);a.Y=ASt();a.oX=b;a.q3=c;}
function Wm(a,b,c,d){MN(a,c,d);a.f0(b);}
function U3(a,b){a:{if(a.oX){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eW){a.Y.o4(EP(b&65535));break a;}a.Y.qr(EP(b&65535));break a;}if(a.q3&&b>128){a.ly=1;b=D5(D4(b));}}}if(!(!IU(b)&&!HG(b))){if(a.os)a.bN.o4(b-55296|0);else a.bN.qr(b-55296|0);}if(a.eW)a.Y.o4(b);else a.Y.qr(b);if(!a.bi&&GJ(b))a.bi=1;return a;}
function ASg(a,b){var c,d;if(!a.bi&&b.bi)a.bi=1;if(a.os){if(!b.b$)a.bN.hL(b.cv());else a.bN.dW(b.cv());}else if(!b.b$)a.bN.hZ(b.cv());else{a.bN.il(b.cv());a.bN.dW(b.cv());a.b$=a.b$?0:1;a.os=1;}if(!a.gy&&b.bQ()!==null){if(a.eW){if(!b.hV())a.Y.hL(b.bQ());else a.Y.dW(b.bQ());}else if(!b.hV())a.Y.hZ(b.bQ());else{a.Y.il(b.bQ());a.Y.dW(b.bQ());a.bF=a.bF?0:1;a.eW=1;}}else{c=a.bF;if(a.bJ!==null){d=a.bJ;if(!c)a.bJ=AWs(a,c,d,b);else a.bJ=AW$(a,c,d,b);}else{if(c&&!a.eW&&a.Y.b9())a.bJ=AT1(a,b);else if(!c)a.bJ=ASE(a,c,b);else a.bJ
=ATJ(a,c,b);a.gy=1;}}return a;}
function APj(a,b,c){if(b>c)F(DK());a:{if(!a.oX&&!(c>=55296&&b<=57343)){if(a.eW)a.Y.A_(b,c+1|0);else a.Y.lU(b,c+1|0);}else while(true){if(b>=(c+1|0))break a;a.cJ(b);b=b+1|0;}}return a;}
function Vx(a,b){var c,d;if(!a.bi&&b.bi)a.bi=1;if(b.go())a.ly=1;if(!(a.b$^b.b$)){if(!a.b$)a.bN.hZ(b.cv());else a.bN.dW(b.cv());}else if(a.b$)a.bN.hL(b.cv());else{a.bN.il(b.cv());a.bN.dW(b.cv());a.b$=1;}if(!a.gy&&b.bQ()!==null){if(!(a.bF^b.hV())){if(!a.bF)a.Y.hZ(b.bQ());else a.Y.dW(b.bQ());}else if(a.bF)a.Y.hL(b.bQ());else{a.Y.il(b.bQ());a.Y.dW(b.bQ());a.bF=1;}}else{c=a.bF;if(a.bJ!==null){d=a.bJ;if(!c)a.bJ=AV9(a,c,d,b);else a.bJ=AW8(a,c,d,b);}else{if(!a.eW&&a.Y.b9()){if(!c)a.bJ=ATX(a,b);else a.bJ=AWx(a,b);}else if
(!c)a.bJ=ATh(a,b,c);else a.bJ=AST(a,b,c);a.gy=1;}}}
function APE(a,b){var c,d;if(!a.bi&&b.bi)a.bi=1;if(b.go())a.ly=1;if(!(a.b$^b.b$)){if(!a.b$)a.bN.dW(b.cv());else a.bN.hZ(b.cv());}else if(!a.b$)a.bN.hL(b.cv());else{a.bN.il(b.cv());a.bN.dW(b.cv());a.b$=0;}if(!a.gy&&b.bQ()!==null){if(!(a.bF^b.hV())){if(!a.bF)a.Y.dW(b.bQ());else a.Y.hZ(b.bQ());}else if(!a.bF)a.Y.hL(b.bQ());else{a.Y.il(b.bQ());a.Y.dW(b.bQ());a.bF=0;}}else{c=a.bF;if(a.bJ!==null){d=a.bJ;if(!c)a.bJ=AW4(a,c,d,b);else a.bJ=AV1(a,c,d,b);}else{if(!a.eW&&a.Y.b9()){if(!c)a.bJ=AVi(a,b);else a.bJ=AVC(a,b);}
else if(!c)a.bJ=ATd(a,b,c);else a.bJ=AW2(a,b,c);a.gy=1;}}}
function ZU(a,b){if(a.bJ!==null)return a.bF^a.bJ.s(b);return a.bF^a.Y.eY(b);}
function ASj(a){if(!a.gy)return a.Y;return null;}
function ACn(a){return a.bN;}
function AO1(a){var b,c;if(a.bJ!==null)return a;b=a.bQ();c=AT0(a,b);return c.f0(a.hV());}
function AJl(a){var b,c;b=J();c=a.Y.jM(0);while(c>=0){b.nH(Do(c));b.cc(124);c=a.Y.jM(c+1|0);}if(b.h()>0)b.wb(b.h()-1|0);return b.b();}
function ACR(a){return a.ly;}
function Gs(){}
function SX(){Bh.call(this);}
function GM(){var a=new SX();AQf(a);return a;}
function AQf(a){B2(a);}
function CP(){var a=this;C.call(a);a.fJ=null;a.fS=null;a.cL=null;a.df=null;a.gu=null;a.eM=null;}
var A09=null;var A0$=null;var A0_=null;var A1a=null;var A1b=null;var A1c=null;function APM(){APM=N(CP);AJg();}
function AUB(){var a=new CP();UA(a);return a;}
function UA(a){APM();I(a);a.fJ=null;a.fS=null;a.cL=null;a.df=null;a.gu=null;a.eM=null;}
function F6(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;m=0;n=d;while(true){o=b.data;p=a.cL.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.cL.data[0]==d){p=i.data;h.data[0]=(-1);p[0]=0;return 0;}p=i.data;r=p[0];s=1;a:{while(true){if(s>15)break a;if(a.cL.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.cL.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;p[0]=r;u=1<<s;q=s;while(true){if(q>=t){v=u-a.cL.data[t]|0;if(v<0)return (-3);p
=a.cL.data;p[t]=p[t]+v|0;p=a.eM.data;w=0;p[1]=w;q=1;x=2;y=t;while(true){y=y+(-1)|0;if(!y)break;z=a.eM.data;w=w+a.cL.data[q]|0;z[x]=w;x=x+1|0;q=q+1|0;}w=0;y=0;while(true){q=o[c+y|0];if(q){z=l.data;p=a.eM.data;ba=p[q];p[q]=ba+1|0;z[ba]=w;}y=y+1|0;w=w+1|0;if(w>=d)break;}ba=a.eM.data[t];o=a.eM.data;bb=0;o[0]=bb;bc=0;bd=(-1);be= -r;a.gu.data[0]=0;bf=0;bg=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bh=a.cL.data[s];while(true){bi=bh+(-1)|0;if(!bh)break;while(true){bj=be+r|0;if(s<=bj)break;bd=bd+1|0;q=t-bj|0;if(q>
r)q=r;d:{y=s-bj|0;w=1<<y;bk=bi+1|0;if(w>bk){w=w-bk|0;if(y<q){bk=s;while(true){y=y+1|0;if(y>=q)break;w=w<<1;o=a.cL.data;bk=bk+1|0;if(w<=o[bk])break d;w=w-a.cL.data[bk]|0;}}}}o=k.data;bg=1<<y;if((o[0]+bg|0)>1440)break c;p=a.gu.data;bf=o[0];p[bd]=bf;o[0]=o[0]+bg|0;if(!bd){h.data[0]=bf;be=bj;continue;}a.eM.data[bd]=bb;a.df.data[0]=y<<24>>24;a.df.data[1]=r<<24>>24;q=bb>>>(bj-r|0);p=a.df.data;o=a.gu.data;y=bd-1|0;p[2]=(bf-o[y]|0)-q|0;W(a.df,0,j,(a.gu.data[y]+q|0)*3|0,3);be=bj;}o=a.df.data;bk=s-be|0;o[1]=bk<<24>>24;if
(bc>=ba)a.df.data[0]=192;else{bl=l.data;if(bl[bc]>=e){z=f.data;p=g.data;a.df.data[0]=((p[bl[bc]-e|0]+16|0)+64|0)<<24>>24;o=a.df.data;w=bc+1|0;o[2]=z[bl[bc]-e|0];bc=w;}else{o=a.df;o.data[0]=(bl[bc]>=256?96:0)<<24>>24;o=a.df.data;w=bc+1|0;o[2]=bl[bc];bc=w;}}bm=1<<bk;q=bb>>>be;while(q<bg){W(a.df,0,j,(bf+q|0)*3|0,3);q=q+bm|0;}q=1<<(s-1|0);while(bb&q){bb=bb^q;q=q>>>1;}bb=bb^q;bn=(1<<be)-1|0;while((bb&bn)!=a.eM.data[bd]){bd=bd+(-1)|0;be=be-r|0;bn=(1<<be)-1|0;}bh=bi;}s=s+1|0;}return (-3);}w=u-a.cL.data[q]|0;if(w<0)break;q
=q+1|0;u=w<<1;}return (-3);}
function R9(a,b,c,d,e,f){var g;Fy(a,19);a.fJ.data[0]=0;g=F6(a,b,0,19,19,null,null,d,c,e,a.fJ,a.fS);if(g==(-3))f.bd=B(441);else if(!(g!=(-5)&&c.data[0])){f.bd=B(442);g=(-3);}return g;}
function Ll(a,b,c,d,e,f,g,h,i,j){var k,l;Fy(a,288);a.fJ.data[0]=0;k=F6(a,d,0,b,257,A0_,A1a,g,e,i,a.fJ,a.fS);if(!k&&e.data[0]){Fy(a,288);l=F6(a,d,b,c,0,A1b,A1c,h,f,i,a.fJ,a.fS);if(!l&&!(!f.data[0]&&b>257))return 0;if(l==(-3))j.bd=B(443);else if(l==(-5)){j.bd=B(444);l=(-3);}else if(l!=(-4)){j.bd=B(445);l=(-3);}return l;}if(k==(-3))j.bd=B(446);else if(k!=(-4)){j.bd=B(447);k=(-3);}return k;}
function Q4(b,c,d,e,f){var g,h,i;APM();g=e.data;h=d.data;i=c.data;b.data[0]=9;i[0]=5;h[0]=A09;g[0]=A0$;return 0;}
function Fy(a,b){var c;if(a.fJ===null){a.fJ=$rt_createIntArray(1);a.fS=$rt_createIntArray(b);a.cL=$rt_createIntArray(16);a.df=$rt_createIntArray(3);a.gu=$rt_createIntArray(15);a.eM=$rt_createIntArray(16);}if(a.fS.data.length<b)a.fS=$rt_createIntArray(b);c=0;while(c<b){a.fS.data[c]=0;c=c+1|0;}c=0;while(c<16){a.cL.data[c]=0;c=c+1|0;}c=0;while(c<3){a.df.data[c]=0;c=c+1|0;}W(a.cL,0,a.gu,0,15);W(a.cL,0,a.eM,0,16);}
function AJg(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;A09=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;A0$=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;A0_=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;A1a=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;A1b=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;A1c=b;}
function R_(){var a=this;C.call(a);a.n3=0;a.ny=0;a.rq=0;}
function AUb(){var a=new R_();Vd(a);return a;}
function Vd(a){I(a);}
function Hx(){}
function T5(){Dk.call(this);}
function AWw(a,b){var c=new T5();AEV(c,a,b);return c;}
function AEV(a,b,c){Hs(a,b,c);}
function Lo(){DU.call(this);}
function ANF(a,b,c,d,e,f){var g=new Lo();AIu(g,a,b,c,d,e,f);return g;}
function AIu(a,b,c,d,e,f,g){JZ(a,b,c,d,e,f,g);}
function Wo(a,b,c,d,e,f){return ANF(a.ch+(b*4|0)|0,c,a.co,d,e,f);}
function AGW(a,b){var c,d,e,f;c=a.co.H.data;d=a.ch;e=b*4|0;f=(c[d+e|0]&255)<<24|(a.co.H.data[(a.ch+e|0)+1|0]&255)<<16|(a.co.H.data[(a.ch+e|0)+2|0]&255)<<8|a.co.H.data[(a.ch+e|0)+3|0]&255;return $rt_intBitsToFloat(f);}
function ALL(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.co.H.data;f=a.ch;g=b*4|0;e[f+g|0]=d>>24<<24>>24;a.co.H.data[(a.ch+g|0)+1|0]=d>>16<<24>>24;a.co.H.data[(a.ch+g|0)+2|0]=d>>8<<24>>24;a.co.H.data[(a.ch+g|0)+3|0]=d<<24>>24;}
function QP(){var a=this;BA.call(a);a.dQ=null;a.jo=null;a.ts=null;a.mh=null;a.qe=null;a.ww=null;}
function ASU(a){var b=new QP();AG0(b,a);return b;}
function AG0(a,b){Cp(a);a.dQ=b;a.jo=AGd();a.jo.wk(0,320.0,480.0);a.ts=B0(256.0,0.0,64.0,64.0);a.mh=Ba();a.qe=Dq(B(448));a.ww=Bb(a.qe,0,0,320,480);}
function ABN(a){if(AYc.dy()){a.jo.fB(a.mh.bq(AYc.e9(),AYc.fp(),0.0));if(a.ts.dw(a.mh.K,a.mh.G)){BH(AZf);a.dQ.dh(AT6(a.dQ));}}}
function AAN(a){var b;b=AX9;b.fr(16384);b.xV(0,0,AX8.bE(),AX8.by());a.jo.bA();a.dQ.p.eX(a.jo.dp);a.dQ.p.fQ();a.dQ.p.b3();a.dQ.p.kZ(a.ww,0.0,0.0);a.dQ.p.b7();a.dQ.p.fb();a.dQ.p.b3();a.dQ.p.bo(AZg,320.0,0.0,(-64.0),64.0);a.dQ.p.b7();}
function AGL(a,b){a.c1();a.bA();}
function AD2(a){a.qe.d9();}
function Or(){C.call(this);}
function Pr(){M.call(this);this.zx=null;}
function ATD(a){var b=new Pr();WF(b,a);return b;}
function WF(a,b){a.zx=b;T(a);}
function Xh(a,b){return Iv(b);}
function NI(){O.call(this);}
function ATy(){var a=new NI();WQ(a);return a;}
function WQ(a){Bc(a);}
function ABI(a){var b;b=ATL(a);b.bi=1;return b;}
function En(){Bv.call(this);}
var AZb=null;var A1d=null;var A1e=null;function JQ(){JQ=N(En);ADK();}
function AB0(a,b){var c=new En();QG(c,a,b);return c;}
function QG(a,b,c){JQ();Ck(a,b,c);}
function ADK(){var b,c;AZb=AB0(B(449),0);A1d=AB0(B(450),1);b=G(En,2);c=b.data;c[0]=AZb;c[1]=A1d;A1e=b;}
function Sj(){Bz.call(this);}
function AU$(){var a=new Sj();AFg(a);return a;}
function AFg(a){Dy(a);}
function Ox(){BU.call(this);}
function F2(){CS.call(this);this.mx=Long_ZERO;}
var A1f=null;function SB(){SB=N(F2);AD7();}
function AWF(a){var b=new F2();Sv(b,a);return b;}
function Sv(a,b){SB();J4(a);a.mx=b;}
function Hi(b){SB();return AWF(b);}
function Vi(a){return OU(a.mx);}
function OU(b){SB();return b.lo^b.hi;}
function AKK(a,b){if(a===b)return 1;return b instanceof F2&&Long_eq(b.mx,a.mx)?1:0;}
function AD7(){A1f=D($rt_longcls());}
function Gd(){C.call(this);}
function APZ(){var a=new Gd();KM(a);return a;}
function KM(a){I(a);}
function AOI(a,b){if(b==32)return a.ot()*4.294967295E9+(-2.147483648E9)|0;return a.ot()*Long_toNumber(Long_shl(Long_fromInt(1),Bd(32,b)))|0;}
function ABe(a){return a.AI(32);}
function V3(a){return Long_or(Long_shl(Long_fromInt(a.tg()),32),Long_fromInt(a.tg()));}
function X7(a){return a.ot();}
function ACw(a){return Math.random();}
function Qk(){var a=this;Gd.call(a);a.mI=Long_ZERO;a.mJ=Long_ZERO;}
function AVL(){var a=new Qk();AEx(a);return a;}
function AEx(a){KM(a);a.BG(APZ().ob());}
function ANp(a){var b,c,d;b=a.mI;c=a.mJ;a.mI=c;d=Long_xor(b,Long_shl(b,23));d=Long_xor(Long_xor(Long_xor(d,c),Long_shru(d,17)),Long_shru(c,26));a.mJ=d;return Long_add(d,c);}
function AQi(a,b){return a.ye(Long_fromInt(b)).lo;}
function AOQ(a,b){var c,d;if(Long_le(b,Long_ZERO))F(U(B(451)));while(true){c=Long_shru(a.ob(),1);d=Long_rem(c,b);if(Long_ge(Long_add(Long_sub(c,d),Long_sub(b,Long_fromInt(1))),Long_ZERO))break;}return d;}
function AEu(a,b){var c;if(Long_eq(b,Long_ZERO))b=new Long(0, 2147483648);c=S0(b);a.yt(c,S0(c));}
function AMQ(a,b,c){a.mI=b;a.mJ=c;}
function S0(b){var c;c=Long_xor(b,Long_shru(b,33));c=Long_mul(c,new Long(3981806797, 4283543511));c=Long_xor(c,Long_shru(c,33));c=Long_mul(c,new Long(444984403, 3301882366));c=Long_xor(c,Long_shru(c,33));return c;}
function I3(){}
function Rp(){var a=this;C.call(a);a.j4=null;a.mQ=null;a.dt=0;a.wM=0;}
function AJD(a){var b=new Rp();AFB(b,a);return b;}
function AFB(a,b){I(a);while(b>=a.dt){a.dt=a.dt<<1|1;}a.dt=a.dt<<1|1;a.j4=$rt_createIntArray(a.dt+1|0);a.mQ=$rt_createIntArray(a.dt+1|0);a.wM=b;}
function AE2(a,b,c){var d,e,f;d=0;e=b&a.dt;while(a.j4.data[e]&&a.j4.data[e]!=b){f=d+1|0;d=f&a.dt;f=e+d|0;e=f&a.dt;}a.j4.data[e]=b;a.mQ.data[e]=c;}
function AHG(a,b){var c,d,e,f;c=b&a.dt;d=0;while(true){e=a.j4.data[c];if(!e)break;if(e==b)return a.mQ.data[c];f=d+1|0;d=f&a.dt;f=c+d|0;c=f&a.dt;}return a.wM;}
function Ct(){var a=this;C.call(a);a.ga=null;a.p8=0.0;a.p9=0.0;a.we=0.0;a.wc=0.0;a.l0=0;a.kl=0;}
function VK(a){var b=new Ct();Xq(b,a);return b;}
function Bb(a,b,c,d,e){var f=new Ct();AEO(f,a,b,c,d,e);return f;}
function Xq(a,b){I(a);if(b===null)F(U(B(452)));a.ga=b;a.sO(0,0,b.bE(),b.by());}
function AEO(a,b,c,d,e,f){I(a);a.ga=b;a.sO(c,d,e,f);}
function ANO(a,b,c,d,e){var f,g;f=1.0/a.ga.bE();g=1.0/a.ga.by();a.zY(b*f,c*g,(b+d|0)*f,(c+e|0)*g);a.l0=KE(d);a.kl=KE(e);}
function YA(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.ga.bE();g=a.ga.by();h=QR(d-b);i=f;a.l0=Ei(h*i);h=QR(e-c);j=g;a.kl=Ei(h*j);if(a.l0==1&&a.kl==1){k=0.25/i;b=b+k;d=d-k;l=0.25/j;c=c+l;e=e-l;}a.p8=b;a.p9=c;a.we=d;a.wc=e;}
function AQT(a){return a.ga;}
function AAy(a){return a.l0;}
function Wc(a){return a.kl;}
function Ny(){FE.call(this);}
function AUc(){var a=new Ny();AGb(a);return a;}
function AGb(a){SO(a);}
function AD5(a){var b;b=PL(a).f0(1);b.bi=1;return b;}
function T2(){C.call(this);}
function ZC(b){return QL(b);}
function Ob(){var a=this;C.call(a);a.gm=null;a.f2=null;a.d2=null;a.yo=0;a.w0=0;a.pJ=0;}
function ATZ(a,b,c){var d=new Ob();AMu(d,a,b,c);return d;}
function A1g(a,b,c,d){var e=new Ob();Kv(e,a,b,c,d);return e;}
function A1h(a,b,c){var d=new Ob();TB(d,a,b,c);return d;}
function A1i(a,b,c){var d=new Ob();Od(d,a,b,c);return d;}
function AMu(a,b,c,d){Kv(a,b,c,d,1);}
function Kv(a,b,c,d,e){TB(a,AS2(b,d),VK(AO_(c,0)),e);a.pJ=1;}
function TB(a,b,c,d){var e,f;if(c===null)e=null;else{f=G(Ct,1);f.data[0]=c;e=Xl(f);}Od(a,b,e,d);}
function Od(a,b,c,d){var e,f,g;I(a);a.yo=b.kS;a.gm=b;a.w0=d;if(c!==null&&c.u){a.f2=c;a.pJ=0;}else{if(b.gV===null)F(U(B(453)));e=b.gV.data.length;a.f2=ALs(e);f=0;while(f<e){g=b.pA===null?AX_.e3(b.gV.data[f]):AX_.A2(b.gV.data[f],b.pA.Bb());a.f2.c4(VK(AO_(g,0)));f=f+1|0;}a.pJ=1;}a.d2=a.CO();a.zp(b);}
function AR$(a,b){var c,d,e,f,g,h,i,j;c=b.gw.data;d=c.length;e=0;while(e<d){a:{f=c[e];if(f!==null){g=f.data;h=g.length;i=0;while(true){if(i>=h)break a;j=g[i];if(j!==null)b.v3(j,a.f2.t(j.ic));i=i+1|0;}}}e=e+1|0;}if(b.iV!==null)b.v3(b.iV,a.f2.t(b.iV.ic));}
function ADw(a,b,c,d,e){var f;a.d2.cj();f=a.d2.BW(c,d,e);a.d2.or(b);return f;}
function XC(a,b,c,d,e,f,g,h){var i;a.d2.cj();i=a.d2.Ax(c,d,e,f,g,h);a.d2.or(b);return i;}
function ASu(a,b,c,d,e){a.d2.cj();a.d2.sT(c,d,e);a.d2.or(b);}
function AM0(a){return a.d2.po();}
function ANK(a){return a.f2;}
function Yd(a){return a.gm.lJ;}
function YX(a){return a.gm.ms;}
function AQs(a){return AWi(a,a.w0);}
function S2(){var a=this;M.call(a);a.rm=null;a.CB=null;}
function AXa(a,b){var c=new S2();AR7(c,a,b);return c;}
function AR7(a,b,c){a.CB=b;a.rm=c;T(a);}
function ACk(a,b){var c,d,e;c=b-55296|0;if(c>=0&&c<2048){d=a.b$;e=a.rm;d=d^e.eY(c);}else d=0;return d;}
function SZ(){var a=this;M.call(a);a.vC=null;a.v1=null;a.BU=null;}
function AUM(a,b,c){var d=new SZ();AJL(d,a,b,c);return d;}
function AJL(a,b,c,d){a.BU=b;a.vC=c;a.v1=d;T(a);}
function Wf(a,b){var c,d,e,f;c=b-55296|0;if(c>=0&&c<2048){d=a.b$;e=a.vC;f=d^e.eY(c);}else f=0;return a.v1.s(b)&&!f?1:0;}
function Sm(){O.call(this);}
function AVH(){var a=new Sm();XP(a);return a;}
function XP(a){Bc(a);}
function AJz(a){var b;b=AVN(a);b.bi=1;return b;}
function Cj(){Bv.call(this);}
var A1j=null;var A1k=null;var A1l=null;var A1m=null;var A1n=null;var A1o=null;var AZa=null;var A1p=null;function HT(){HT=N(Cj);Vj();}
function D6(a,b){var c=new Cj();UW(c,a,b);return c;}
function UW(a,b,c){HT();Ck(a,b,c);}
function TQ(b){HT();if(b==1)return A1j;if(b==2)return A1l;if(b==5)return A1m;if(b==6)return A1n;if(b==3)return A1o;if(b==4)return AZa;F(Bk(J().a(B(454)).j(b).b()));}
function Vj(){var b,c;A1j=D6(B(97),0);A1k=D6(B(455),1);A1l=D6(B(456),2);A1m=D6(B(457),3);A1n=D6(B(458),4);A1o=D6(B(459),5);AZa=D6(B(460),6);b=G(Cj,7);c=b.data;c[0]=A1j;c[1]=A1k;c[2]=A1l;c[3]=A1m;c[4]=A1n;c[5]=A1o;c[6]=AZa;A1p=b;}
function MI(){De.call(this);}
function AWu(a,b,c,d){var e=new MI();AIy(e,a,b,c,d);return e;}
function AIy(a,b,c,d,e){IN(a,b,c,d,e);}
function ANb(a,b,c,d){var e,f,g,h;e=a.f8.ir();f=a.f8.hR();g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.bw.cr()|0)>d.L())break a;h=a.bw.bO(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.i.d(b,c,d);}if((b+a.bw.cr()|0)>d.L()){d.eh=1;return (-1);}h=a.bw.bO(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function I9(){}
function M4(){M.call(this);this.CS=null;}
function AWO(a){var b=new M4();AQE(b,a);return b;}
function AQE(a,b){a.CS=b;T(a);}
function AH4(a,b){return Ho(b);}
function Me(){var a=this;M.call(a);a.kN=null;a.xp=null;}
function AT0(a,b){var c=new Me();AQM(c,a,b);return c;}
function AQM(a,b,c){a.xp=b;a.kN=c;T(a);}
function AGU(a,b){return a.bF^a.kN.eY(b);}
function ADI(a){var b,c;b=J();c=a.kN.jM(0);while(c>=0){b.nH(Do(c));b.cc(124);c=a.kN.jM(c+1|0);}if(b.h()>0)b.wb(b.h()-1|0);return b.b();}
function UZ(){BZ.call(this);}
function AV7(a,b,c){var d=new UZ();AOK(d,a,b,c);return d;}
function AOK(a,b,c,d){Ek(a,b,c,d);GW();b.T(AYk);}
function AAi(a,b,c,d){var e;while(true){e=a.Z.d(b,c,d);if(e<=0)break;b=e;}return a.i.d(b,c,d);}
function Mb(){var a=this;M.call(a);a.st=null;a.y0=null;}
function AVi(a,b){var c=new Mb();AMH(c,a,b);return c;}
function AMH(a,b,c){a.y0=b;a.st=c;T(a);}
function AAl(a,b){return a.st.s(b);}
function JJ(){var a=this;C.call(a);a.gT=null;a.sB=0;a.qs=null;a.kP=null;a.wg=0;a.yA=0.0;a.yz=0.0;a.p3=null;a.y1=0.0;a.dE=null;a.dG=null;a.cR=null;a.mX=null;}
var A1q=null;function AU3(){AU3=N(JJ);AHk();}
function AWi(a,b){var c=new JJ();TU(c,a,b);return c;}
function TU(a,b,c){var d,e,f;AU3();I(a);a.qs=CK();a.kP=CK();a.p3=Cn(1.0,1.0,1.0,1.0);a.gT=b;a.sB=c;d=b.f2.u;if(!d)F(U(B(461)));a:{a.dE=G($rt_arraycls($rt_floatcls()),d);a.dG=$rt_createIntArray(d);if(d>1){a.cR=G(Gk,d);e=0;f=a.cR.data.length;while(true){if(e>=f)break a;a.cR.data[e]=UU();e=e+1|0;}}}a.mX=$rt_createIntArray(d);}
function ALe(a){return a.p3;}
function ABK(a,b){var c,d,e,f;c=a.gT.A8();d=0;e=a.dE.data.length;while(d<e){if(a.dG.data[d]>0){f=a.dE.data[d];b.zg(c.t(d).m_(),f,0,a.dG.data[d]);}d=d+1|0;}}
function AJ9(a){var b,c;a.yA=0.0;a.yz=0.0;Qt(a.kP,1);a.kP.cj();a.qs.cj();b=0;c=a.dG.data.length;while(b<c){if(a.cR!==null)a.cR.data[b].cj();a.dG.data[b]=0;b=b+1|0;}}
function Ly(a,b){var c,d,e,f,g,h,i,j,k,l;a:{if(a.dE.data.length==1){c=0;d=0;e=b.dg.u;while(d<e){c=c+b.dg.t(d).bs.u|0;d=d+1|0;}JB(a,0,c);}else{f=a.mX;g=f.data;d=0;e=g.length;while(d<e){g[d]=0;d=d+1|0;}d=0;h=b.dg.u;while(d<h){i=b.dg.t(d).bs;j=0;k=i.u;while(j<k){l=i.t(j).ic;g[l]=g[l]+1|0;j=j+1|0;}d=d+1|0;}d=0;while(true){if(d>=e)break a;JB(a,d,g[d]);d=d+1|0;}}}}
function JB(a,b,c){var d,e,f;if(a.cR!==null&&c>a.cR.data[b].eP.data.length)a.cR.data[b].BY(c-a.cR.data[b].eP.data.length|0);d=a.dG.data[b]+(c*20|0)|0;e=a.dE.data[b];if(e===null)a.dE.data[b]=$rt_createFloatArray(d);else if(e.data.length<d){f=$rt_createFloatArray(d);W(e,0,f,0,a.dG.data[b]);a.dE.data[b]=f;}}
function P2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=a.gT.f2.u;if(a.dE.data.length<e){f=G($rt_arraycls($rt_floatcls()),e);W(a.dE,0,f,0,a.dE.data.length);a.dE=f;g=$rt_createIntArray(e);W(a.dG,0,g,0,a.dG.data.length);a.dG=g;h=G(Gk,e);i=0;if(a.cR!==null){i=a.cR.data.length;W(a.cR,0,h,0,a.cR.data.length);}while(i<e){h.data[i]=UU();i=i+1|0;}a.cR=h;a.mX=$rt_createIntArray(e);}a.qs.c4(b);Ly(a,b);i=0;j=b.dg.u;while(i<j){k=b.dg.t(i);l=k.bs;m=k.be;n=k.io.s$();o=c+k.c0;p=d+k.hS;q=0;r=l.u;while(q<r){s=l.t(q);o=o+m.gK(q);RX(a,
s,o,p,n);q=q+1|0;}i=i+1|0;}EM();a.y1=AZQ;}
function RX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;f=a.gT.gm.fz;g=a.gT.gm.wB;h=c+b.dL*f;i=d+b.iv*g;j=b.cK*f;k=b.cT*g;l=b.qF;m=b.rC;n=b.mK;o=b.ni;if(a.sB){h=Ei(h);i=Ei(i);j=Ei(j);k=Ei(k);}p=h+j;q=i+k;r=b.ic;s=a.dG.data[r];t=a.dG.data;t[r]=t[r]+20|0;if(a.cR!==null){u=a.cR.data[r];v=a.wg;a.wg=v+1|0;u.pr(v);}w=a.dE.data[r];t=w.data;x=s+1|0;t[s]=h;v=x+1|0;t[x]=i;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;y=v+1|0;t[v]=n;x=y+1|0;t[y]=h;v=x+1|0;t[x]=q;x=v+1|0;t[v]=e;v=x+1|0;t[x]=l;x=v+1|0;t[v]=o;v=x+1|0;t[x]=p;x
=v+1|0;t[v]=q;v=x+1|0;t[x]=e;x=v+1|0;t[v]=m;v=x+1|0;t[x]=o;x=v+1|0;t[v]=p;y=x+1|0;t[x]=i;v=y+1|0;t[y]=e;x=v+1|0;t[v]=m;t[x]=n;}
function ASl(a,b,c,d){return a.tz(b,c,d,0,b.h(),0.0,8,0,null);}
function AB8(a,b,c,d,e,f,g){return a.tz(b,c,d,0,b.h(),e,f,g,null);}
function ARK(a,b,c,d,e,f,g,h,i,j){var k;k=RL(D(Fs));a.kP.c4(k);k.u3(a.gT,b,e,f,a.p3,g,h,i,j);a.sT(k,c,d);return k;}
function AAe(a,b,c,d){P2(a,b,c,d+a.gT.gm.i$);}
function AHk(){A1q=Cn(1.0,1.0,1.0,1.0);}
function Mc(){var a=this;M.call(a);a.sv=null;a.Df=null;}
function AVC(a,b){var c=new Mc();AIr(c,a,b);return c;}
function AIr(a,b,c){a.Df=b;a.sv=c;T(a);}
function ADc(a,b){return a.sv.s(b)?0:1;}
function Md(){var a=this;M.call(a);a.vb=0;a.vO=null;a.v9=null;a.xG=null;}
function AV9(a,b,c,d){var e=new Md();AAC(e,a,b,c,d);return e;}
function AAC(a,b,c,d,e){a.xG=b;a.vb=c;a.vO=d;a.v9=e;T(a);}
function ASA(a,b){return !(a.vb^a.vO.s(b))&&!a.v9.s(b)?0:1;}
function Ol(){C.call(this);}
function Y5(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.rE.data;f=b.th;b.th=f+1|0;g=AKe(e[f]);h=(g%2|0)!=1?0:1;c=c+BE(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function K8(b){var c,d;c=Y5(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function AKe(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function ML(){var a=this;M.call(a);a.v7=0;a.qQ=null;a.q6=null;a.yO=null;}
function AW8(a,b,c,d){var e=new ML();AC8(e,a,b,c,d);return e;}
function AC8(a,b,c,d,e){a.yO=b;a.v7=c;a.qQ=d;a.q6=e;T(a);}
function ADY(a,b){return !(a.v7^a.qQ.s(b))&&!a.q6.s(b)?1:0;}
function Mf(){var a=this;M.call(a);a.vg=0;a.rj=null;a.tC=null;a.yq=null;}
function AW4(a,b,c,d){var e=new Mf();ABF(e,a,b,c,d);return e;}
function ABF(a,b,c,d,e){a.yq=b;a.vg=c;a.rj=d;a.tC=e;T(a);}
function Yz(a,b){return a.vg^a.rj.s(b)&&a.tC.s(b)?1:0;}
function KC(){Bo.call(this);this.jl=null;}
function AW5(a){var b=new KC();AOU(b,a);return b;}
function AOU(a,b){var c,d;Cc(a);c=J();d=0;while(d<b.h()){c.cc(C7(CO(b.g(d))));d=d+1|0;}a.jl=c.b();a.bW=c.h();}
function AHx(a,b,c){var d;d=0;while(true){if(d>=a.jl.h())return a.jl.h();if(a.jl.g(d)!=C7(CO(c.g(b+d|0))))break;d=d+1|0;}return (-1);}
function AEM(a){return J().a(B(462)).a(a.jl).b();}
function Mg(){var a=this;M.call(a);a.uO=0;a.qM=null;a.va=null;a.y$=null;}
function AV1(a,b,c,d){var e=new Mg();WB(e,a,b,c,d);return e;}
function WB(a,b,c,d,e){a.y$=b;a.uO=c;a.qM=d;a.va=e;T(a);}
function ALd(a,b){return a.uO^a.qM.s(b)&&a.va.s(b)?0:1;}
function Mh(){var a=this;M.call(a);a.wj=null;a.us=0;a.w5=null;}
function ATd(a,b,c){var d=new Mh();AJ3(d,a,b,c);return d;}
function AJ3(a,b,c,d){a.w5=b;a.wj=c;a.us=d;T(a);}
function AFF(a,b){return a.wj.s(b)&&a.us^a.w5.Y.eY(b)?1:0;}
function Tv(){M.call(this);this.Cs=null;}
function AW1(a){var b=new Tv();U7(b,a);return b;}
function U7(a,b){a.Cs=b;T(a);}
function AFr(a,b){return Pv(b);}
function Ma(){var a=this;M.call(a);a.u1=null;a.tE=0;a.up=null;}
function AW2(a,b,c){var d=new Ma();AHI(d,a,b,c);return d;}
function AHI(a,b,c,d){a.up=b;a.u1=c;a.tE=d;T(a);}
function AOP(a,b){return a.u1.s(b)&&a.tE^a.up.Y.eY(b)?0:1;}
function Qo(){BU.call(this);}
function PY(){DX.call(this);}
function Gb(a){var b=new PY();AFY(b,a);return b;}
function J(){var a=new PY();AQW(a);return a;}
function AFY(a,b){Hh(a,b);}
function AQW(a){Ht(a);}
function Wb(a,b){Je(a,b);return a;}
function AI9(a,b){LZ(a,b);return a;}
function AD9(a,b){Sx(a,b);return a;}
function VT(a,b){IH(a,b);return a;}
function AAG(a,b,c,d){J2(a,b,c,d);return a;}
function ANT(a,b){Ji(a,b);return a;}
function AIt(a,b){OW(a,b);return a;}
function AOb(a,b,c){Qn(a,b,c);return a;}
function AL8(a,b,c,d,e){Hd(a,b,c,d,e);return a;}
function ARt(a,b,c){NE(a,b,c);return a;}
function AJQ(a,b,c){J9(a,b,c);return a;}
function AP9(a,b,c){TL(a,b,c);return a;}
function AOu(a,b){Tl(a,b);return a;}
function AGn(a,b,c){JI(a,b,c);return a;}
function AQg(a,b,c){return MK(a,b,c);}
function AGz(a,b){S1(a,b);}
function AMf(a,b,c){return Sb(a,b,c);}
function AGg(a,b,c,d,e){return a.DJ(b,c,d,e);}
function ABs(a,b,c,d){return a.Bh(b,c,d);}
function Yf(a){return Ir(a);}
function YU(a){return I5(a);}
function AGF(a,b){Hr(a,b);}
function AIo(a,b,c){return a.BA(b,c);}
function AHs(a,b,c){return a.C7(b,c);}
function AD$(a,b,c){return a.CM(b,c);}
function ASf(a,b,c){return a.x5(b,c);}
function N0(){var a=this;Bl.call(a);a.l7=null;a.lw=null;}
function Jo(a,b){var c=new N0();AQ8(c,a,b);return c;}
function AQ8(a,b,c){B5(a);a.l7=b;a.lw=c;}
function XF(a,b,c,d){var e;e=a.l7.d(b,c,d);if(e<0)e=a.lw.d(b,c,d);if(e>=0)return e;return (-1);}
function AKi(a,b){a.i=b;a.lw.T(b);a.l7.T(b);}
function ALg(a){return J().a(B(463)).gb(a.l7).a(B(464)).gb(a.lw).b();}
function Y$(a,b){return 1;}
function Yo(a,b){return 1;}
function S9(){Bh.call(this);}
function YY(){var a=new S9();ARH(a);return a;}
function ARH(a){B2(a);}
function Ft(){C.call(this);}
function A1r(){var a=new Ft();Uf(a);return a;}
function Uf(a){I(a);}
function D$(){BR.call(this);}
function AUm(){var a=new D$();AOV(a);return a;}
function AOV(a){Dn(a,0);}
function APR(a,b,c,d){if(d.sK()!=1&&b!=d.L())return (-1);d.xQ();d.pG(0,b);return b;}
function Zg(a){return B(465);}
function Nd(){var a=this;C.call(a);a.of=null;a.lu=null;a.uj=0;a.wJ=null;}
function AOi(){var a=new Nd();AMV(a);return a;}
function AMV(a){I(a);a.of=E4();}
function SG(){Bo.call(this);}
function Ee(a){var b=new SG();AIi(b,a);return b;}
function AIi(a,b){Le(a,b);a.bW=0;}
function ANs(a,b,c){return 0;}
function ACJ(a,b,c,d){var e,f,g,h,i;e=d.L();f=d.dH();while(true){g=BM(b,e);if(g>0)return (-1);if(g<0){h=c.g(b);if(B_(h)&&b>f){i=c.g(b-1|0);if(BP(i)){b=b+1|0;continue;}}}if(a.i.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function ZO(a,b,c,d,e){var f,g,h,i;f=e.L();g=e.dH();while(true){if(c<b)return (-1);if(c<f){h=d.g(c);if(B_(h)&&c>g){i=d.g(c-1|0);if(BP(i)){c=c+(-1)|0;continue;}}}if(a.i.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEy(a){return B(466);}
function WS(a,b){return 0;}
function Kt(){var a=this;C.call(a);a.dz=null;a.fT=null;a.pI=0;a.b0=0;}
function Td(a,b){var c=new Kt();APF(c,a,b);return c;}
function A1s(a,b,c){var d=new Kt();T3(d,a,b,c);return d;}
function APF(a,b,c){T3(a,b,c,0);}
function T3(a,b,c,d){I(a);if(b===null)F(DJ());a.dz=b;a.fT=c;a.pI=d;a.b0=0;}
function ASm(a){var b,c;if(a.fT===null)F(DJ());a:{b=a.dz.h();if(a.b0<b){if(a.pI)return 1;c=a.b0;while(true){if(c>=b)break a;if(a.fT.eg(a.dz.g(c),0)==(-1))return 1;c=c+1|0;}}}return 0;}
function X9(a){var b,c,d,e,f;if(a.fT===null)F(DJ());b=a.b0;c=a.dz.h();if(b<c){if(a.pI){if(a.fT.eg(a.dz.g(a.b0),0)>=0){d=a.dz;e=a.b0;a.b0=e+1|0;return Pj(d.g(e));}a.b0=a.b0+1|0;while(a.b0<c){if(a.fT.eg(a.dz.g(a.b0),0)>=0)return a.dz.c2(b,a.b0);a.b0=a.b0+1|0;}return a.dz.eD(b);}while(true){f=BM(b,c);if(f>=0)break;if(a.fT.eg(a.dz.g(b),0)<0)break;b=b+1|0;}a.b0=b;if(f<0){a.b0=a.b0+1|0;while(a.b0<c){if(a.fT.eg(a.dz.g(a.b0),0)>=0)return a.dz.c2(b,a.b0);a.b0=a.b0+1|0;}return a.dz.eD(b);}}F(ABx());}
function L6(){var a=this;C.call(a);a.iN=null;a.cH=0;a.x_=Long_ZERO;}
function AUh(a){var b=new L6();AH$(b,a);return b;}
function AH$(a,b){var c,d,e,f;c=b.data;I(a);a.x_=Long_fromInt(-1);d=c.length;if(!d)F(U(B(467)));e=G(GB,d);f=0;while(f<d){e.data[f]=c[f];f=f+1|0;}a.iN=e;a.cH=LA(a);}
function LA(a){var b,c,d;b=0;c=0;while(c<a.iN.data.length){d=a.iN.data[c];d.dI=b;b=b+Nw(d)|0;c=c+1|0;}return b;}
function Cx(a){return a.iN.data.length;}
function B8(a,b){return a.iN.data[b];}
function Ig(){var a=this;Ct.call(a);a.Aw=0.0;a.Au=0.0;a.BC=0;a.y9=0;}
function Os(){DU.call(this);}
function VC(a,b,c,d,e,f){var g=new Os();Ww(g,a,b,c,d,e,f);return g;}
function Ww(a,b,c,d,e,f,g){JZ(a,b,c,d,e,f,g);}
function AJN(a,b,c,d,e,f){return VC(a.ch+(b*4|0)|0,c,a.co,d,e,f);}
function Vz(a,b){var c,d,e,f;c=a.co.H.data;d=a.ch;e=b*4|0;f=c[d+e|0]&255|(a.co.H.data[(a.ch+e|0)+1|0]&255)<<8|(a.co.H.data[(a.ch+e|0)+2|0]&255)<<16|(a.co.H.data[(a.ch+e|0)+3|0]&255)<<24;return $rt_intBitsToFloat(f);}
function AGH(a,b,c){var d,e,f,g;d=$rt_floatToIntBits(c);e=a.co.H.data;f=a.ch;g=b*4|0;e[f+g|0]=d<<24>>24;a.co.H.data[(a.ch+g|0)+1|0]=d>>8<<24>>24;a.co.H.data[(a.ch+g|0)+2|0]=d>>16<<24>>24;a.co.H.data[(a.ch+g|0)+3|0]=d>>24<<24>>24;}
function N7(){Eo.call(this);}
function A1t(a){var b=new N7();ZN(b,a);return b;}
function ZN(a,b){Im(a,b);}
function Sf(){O.call(this);}
function AWb(){var a=new Sf();X_(a);return a;}
function X_(a){Bc(a);}
function ACb(a){return B9().bL(0,127);}
function Ef(){Bz.call(this);}
function AJw(){var a=new Ef();Lz(a);return a;}
function EI(a){var b=new Ef();N6(b,a);return b;}
function ASW(a){var b=new Ef();AJR(b,a);return b;}
function Lz(a){Dy(a);}
function N6(a,b){Ez(a,b);}
function AJR(a,b){Lc(a,b);}
function Jp(){}
function Rh(){C.call(this);}
function ATF(){var a=new Rh();ABf(a);return a;}
function ABf(a){I(a);}
function Fs(){var a=this;C.call(a);a.dg=null;a.gH=0.0;a.k5=0.0;a.iy=null;}
function Ri(){var a=new Fs();AQr(a);return a;}
function AQr(a){I(a);a.dg=CK();a.iy=ALs(4);}
function ANo(a,b,c){a.u3(b,c,0,c.h(),b.po(),0.0,8,0,null);}
function AAU(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;k=b.gm;if(j!==null)i=1;else if(g<=k.ms*3.0)i=0;l=k.uh;m=Fa(D(EL));n=a.dg;m.u_(n);n.cj();o=0.0;p=0.0;q=0.0;r=0;s=0;t=null;u=a.iy;u.c4(f);v=Fa(D(V));w=d;x=f;a:{b:while(true){c:{y=(-1);z=0;if(d==e){if(w==e)break b;y=e;}else{ba=d+1|0;switch(c.g(d)){case 10:y=ba-1|0;z=1;d=ba;break c;case 91:if(!l){d=ba;break c;}bb=LV(a,c,ba,e,v);if(bb>=0){y=ba-1|0;d=ba+(bb+1|0)|0;f=u.m$();break c;}if
(bb==(-2)){d=ba+1|0;continue b;}d=ba;break c;default:}d=ba;}}if(y!=(-1)){d:{bc=BM(y,w);if(bc){bd=m.g8();bd.io.qd(x);k.w1(bd,c,w,y,t);if(!bd.bs.u)m.g$(bd);else{if(t!==null)o=o-(t.mp?t.fM*k.fz:(t.cK+t.dL|0)*k.fz-k.hP);t=bd.bs.m$();bd.c0=o;bd.hS=p;if(!(!z&&y!=e))DS(a,k,bd);n.c4(bd);be=bd.be.cx;bf=bd.be.bg;if(!i){bg=0.0;bh=0;while(bh<bf){bg=bg+be.data[bh];bh=bh+1|0;}o=o+bg;bd.bD=bg;}else{bi=be.data;o=o+bi[0];bd.bD=bi[0];if(bf>=1){o=o+bi[1];bd.bD=bd.bD+bi[1];bh=2;while(bh<bf){bj=bd.bs;ba=bh-1|0;bk=bj.t(ba);bl=(bk.cK
+bk.dL|0)*k.fz-k.hP;if(o+bl<=g){bi=be.data;o=o+bi[bh];bd.bD=bd.bD+bi[bh];}else{if(j!==null){Sw(a,k,bd,g,j,bh,m);o=bd.c0+bd.bD;break a;}bm=k.CW(bd.bs,bh);if(!(bd.c0===0.0&&!bm)&&bm<bd.bs.u)ba=bm;if(ba){bn=Qc(a,k,bd,m,ba,bh);q=CR(q,bd.c0+bd.bD);if(bn===null){o=0.0;p=p+k.d7;r=r+1|0;t=null;break d;}n.c4(bn);bd=bn;}else{bd.bD=0.0;bo=bd.bs.u;e:{while(true){if(ba>=bo)break e;if(!k.hd(bd.bs.t(ba).eF&65535))break;ba=ba+1|0;}}if(ba>0){bd.bs.hn(0,ba-1|0);bd.be.hn(1,ba);}bd.be.oB(0, -bd.bs.wy().dL*k.fz-k.h$);if(n.u>1){bp
=n.t(n.u-2|0);bq=bp.bs.u-1|0;f:{while(true){if(bq<=0)break f;br=bp.bs.t(bq);if(!k.hd(br.eF&65535))break;bp.bD=bp.bD-bp.be.gK(bq+1|0);bq=bq+(-1)|0;}}bp.bs.gD(bq+1|0);bp.be.gD(bq+2|0);DS(a,k,bp);q=CR(q,bp.c0+bp.bD);}}bf=bd.be.bg;be=bd.be.cx;bi=be.data;o=bi[0];if(bf>1)o=o+bi[1];bd.bD=bd.bD+o;p=p+k.d7;r=r+1|0;bd.c0=0.0;bd.hS=p;bh=1;t=null;}bh=bh+1|0;}}}}}}if(z){q=CR(q,o);o=0.0;bs=k.d7;if(bc)r=r+1|0;else{bs=bs*k.kT;s=s+1|0;}p=p+bs;t=null;}w=d;x=f;}}}bt=CR(q,o);bh=1;bf=u.u;while(bh<bf){v.g$(u.t(bh));bh=bh+1|0;}g:
{u.cj();if(!(h&8)){bu=!(h&1)?0:1;bv=0.0;bw=(-2.147483648E9);bx=0;bf=n.u;bh=0;while(bh<bf){bd=n.t(bh);if(bd.hS!==bw){bw=bd.hS;by=g-bv;if(bu)by=by/2.0;while(bx<bh){ba=bx+1|0;bj=n.t(bx);bj.c0=bj.c0+by;bx=ba;}bv=0.0;}bv=CR(bv,bd.c0+bd.bD);bh=bh+1|0;}by=g-bv;if(bu)by=by/2.0;while(true){if(bx>=bf)break g;ba=bx+1|0;bj=n.t(bx);bj.c0=bj.c0+by;bx=ba;}}}a.gH=bt;if(k.kS)a.k5=k.eQ+r*k.d7+s*k.d7*k.kT;else a.k5=k.eQ+r* -k.d7+s* -k.d7*k.kT;}
function Sw(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=g.g8();b.w1(h,e,0,e.h(),null);i=0.0;if(h.be.bg>0){DS(a,b,h);j=1;k=h.be.bg;while(j<k){i=i+h.be.gK(j);j=j+1|0;}}l=d-i;m=0;n=c.c0;a:{while(true){if(m>=c.be.bg)break a;o=c.be.gK(m);n=n+o;if(n>l)break;m=m+1|0;}c.bD=n-c.c0-o;}if(m<=1){c.bs.cj();c.be.cj();c.be.yl(h.be);if(h.be.bg>0)c.bD=c.bD+h.be.gK(0);}else{c.bs.gD(m-1|0);c.be.gD(m);DS(a,b,c);if(h.be.bg>0)c.be.tH(h.be,1,h.be.bg-1|0);}c.bs.yr(h.bs);c.bD=c.bD+i;g.g$(h);}
function Qc(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=c.bs;h=c.bs.u;i=c.be;j=e;a:{while(true){if(j<=0)break a;if(!b.hd(g.t(j-1|0).eF&65535))break;j=j+(-1)|0;}}b:{while(true){k=BM(e,h);if(k>=0)break;if(!b.hd(g.t(e).eF&65535))break b;e=e+1|0;}}while(f<j){l=c.bD;m=f+1|0;c.bD=l+i.gK(f);f=m;}n=j+1|0;while(f>n){l=c.bD;f=f+(-1)|0;c.bD=l-i.gK(f);}o=null;if(k>=0){g.gD(j);i.gD(n);}else{o=d.g8();o.io.qd(c.io);p=o.bs;p.BM(g,0,j);g.hn(0,e-1|0);c.bs=p;o.bs=g;q=o.be;q.tH(i,0,n);i.hn(1,e);i.oB(0, -g.wy().dL*b.fz-b.h$);c.be=
q;o.be=i;}if(j)DS(a,b,c);else{d.g$(c);a.dg.qi();}return o;}
function DS(a,b,c){var d,e;d=c.bs.m$();if(d.mp)return;e=(d.cK+d.dL|0)*b.fz-b.hP;c.bD=c.bD+e-c.be.yL();c.be.oB(c.be.bg-1|0,e);}
function LV(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(c==d)return (-1);switch(b.g(c)){case 35:f=0;g=c+1|0;a:{while(true){if(g>=d)break a;h=b.g(g);if(h==93)break;if(h>=48&&h<=57)f=(f*16|0)+(h-48|0)|0;else if(h>=97&&h<=102)f=(f*16|0)+(h-87|0)|0;else{if(h<65)break a;if(h>70)break a;f=(f*16|0)+(h-55|0)|0;}g=g+1|0;}if(g>=(c+2|0)&&g<=(c+9|0)){i=g-c|0;if(i<=7){j=0;k=9-i|0;while(j<k){f=f<<4;j=j+1|0;}f=f|255;}l=e.g8();a.iy.c4(l);JP(l,f);return i;}}return (-1);case 91:break;case 93:if(a.iy.u>1)e.g$(a.iy.qi());return 0;default:g
=c+1|0;while(g<d){h=b.g(g);if(h==93){m=MY(b.em(c,g).b());if(m===null)return (-1);l=e.g8();a.iy.c4(l);l.qd(m);return g-c|0;}g=g+1|0;}return (-1);}return (-2);}
function AOJ(a){Fa(D(EL)).u_(a.dg);a.dg.cj();a.gH=0.0;a.k5=0.0;}
function AJ0(a){var b,c,d;if(!a.dg.u)return B(93);b=Gb(128);b.dJ(a.gH);b.cc(120);b.dJ(a.k5);b.cc(10);c=0;d=a.dg.u;while(c<d){b.a(a.dg.t(c).b());b.cc(10);c=c+1|0;}b.uo(b.h()-1|0);return b.b();}
function Tf(){Dh.call(this);}
function Nh(){var a=new Tf();ACN(a);return a;}
function ACN(a){HD(a);}
function LM(){var a=this;DR.call(a);a.u5=null;a.pU=null;a.wN=null;a.di=null;a.sd=null;a.ej=null;a.l_=0;a.pP=0;}
function A1u(a,b){var c=new LM();Np(c,a,b);return c;}
function ATm(a){var b=new LM();VO(b,a);return b;}
function A1v(a,b){var c=new LM();Rt(c,a,b);return c;}
function Np(a,b,c){var d,e;d=c.yk();Fl();e=AX5;e=Ti(d,e);d=AX5;e=QA(e,d);Rt(a,b,e);}
function VO(a,b){Np(a,b,AWG());}
function Rt(a,b,c){Jc(a);a.wN=$rt_createByteArray(8192);a.di=H3(a.wN);a.sd=$rt_createCharArray(1024);a.ej=AIO(a.sd);a.u5=b;a.pU=c;Bw(a.ej,Bq(a.ej));Bw(a.di,Bq(a.di));}
function AEZ(a,b,c,d){var e,f;if(a.pP&&!Ci(a.ej))return (-1);e=0;a:{while(d>0){f=Bd(d,X(a.ej));a.ej.zS(b,c+e|0,f);d=d-f|0;e=e+f|0;if(!Ci(a.ej)&&!TV(a))break a;}}return e;}
function TV(a){if(a.pP)return 0;a.ej.B2();a:{while(true){if(!Ci(a.di)&&!Ry(a))break a;if(!NO(a.pU,a.di,a.ej,a.l_).uw())continue;else break;}}if(!Ci(a.di)&&a.l_&&Pe(a.pU,a.ej).tM())a.pP=1;BJ(a.ej);return 1;}
function Ry(a){var b;if(a.l_)return 0;a.di.Dk();a:{while(true){if(!Ci(a.di))break a;b=a.u5.fi(FX(a.di),CD(a.di),X(a.di));if(b==(-1)){a.l_=1;break a;}Bw(a.di,CD(a.di)+b|0);if(!b)break;}}BJ(a.di);return 1;}
function OP(){C.call(this);}
function AQH(b,c,d){if(b===null)return null;return AUF(b,ALH(b),c,d);}
function Ls(){var a=this;C.call(a);a.md=0;a.v6=0;a.sX=0;a.uf=0;a.iP=null;}
function AS3(a){var b=new Ls();AKY(b,a);return b;}
function AKY(a,b){a.iP=b;I(a);a.v6=a.iP.f9;a.sX=a.iP.bm();a.uf=(-1);}
function AIZ(a){return a.md>=a.sX?0:1;}
function AO5(a){var b,c;MO(a);a.uf=a.md;b=a.iP;c=a.md;a.md=c+1|0;return b.t(c);}
function MO(a){if(a.v6>=a.iP.f9)return;F(YY());}
function Em(){Bv.call(this);}
var AZc=null;var A1w=null;var A1x=null;function Qu(){Qu=N(Em);Ye();}
function ABH(a,b){var c=new Em();Sd(c,a,b);return c;}
function Ms(){Qu();return A1x.qu();}
function Sd(a,b,c){Qu();Ck(a,b,c);}
function Ye(){var b,c;AZc=ABH(B(468),0);A1w=ABH(B(469),1);b=G(Em,2);c=b.data;c[0]=AZc;c[1]=A1w;A1x=b;}
function Ie(){var a=this;C.call(a);a.bj=null;a.eV=null;a.hf=null;a.fU=null;a.eC=null;a.m9=null;a.jS=null;a.dK=null;a.kO=0.0;a.hq=0;a.iI=0;}
var A0F=null;function AM6(){AM6=N(Ie);ALC();}
function XG(a){var b=new Ie();Sy(b,a);return b;}
function Sy(a,b){AM6();I(a);a.bj=ASS(5.0,1.0);a.eV=Dw();a.hf=Dw();a.fU=Dw();a.eC=Dw();a.jS=b;a.dK=APZ();SI(a);a.kO=0.0;a.hq=0;a.iI=0;}
function SI(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=0.25;c=121.0/(2.0* -A0F.W);while(b<295.0){d=a.dK.d4()<=0.800000011920929?0:1;e=a.dK.d4()*8.0+1.0;f=AVb(d,e,b);a.eV.c3(f);if(a.dK.d4()>0.8999999761581421&&d!=1){g=new Fj;h=f.C.J;i=f.C.W+0.25;AQ_();Ka(g,h,i+A1y/2.0);a.hf.c3(g);}if(b>100.0&&a.dK.d4()>0.800000011920929){j=new IZ;h=f.C.J+a.dK.d4();i=f.C.W+0.6000000238418579;k=a.dK;Uq(j,h,i+k.d4()*2.0);a.fU.c3(j);}if(a.dK.d4()>0.6000000238418579){l=new JH;i=f.C.J+a.dK.d4();m=f.C.W+0.800000011920929;k=a.dK;Tr(l,i,m+k.d4()
*3.0);a.eC.c3(l);}h=b+c-0.5;b=h-a.dK.d4()*c/3.0;}a.m9=AUp(5.0,b);}
function AH3(a,b,c){TW(a,b,c);PF(a,b);Oh(a,b);Lu(a,b);if(a.bj.dl!=2)LB(a);Mw(a);}
function TW(a,b,c){if(a.bj.dl!=2&&a.bj.C.W<=0.5)a.bj.sS();if(a.bj.dl!=2)a.bj.bH.J= -c/10.0*20.0;a.bj.fy(b);a.kO=CR(a.bj.C.W,a.kO);}
function PF(a,b){var c,d,e;c=a.eV.bm();d=0;while(d<c){e=a.eV.t(d);e.fy(b);if(e.mi==1&&e.h3>0.800000011920929){a.eV.q7(e);c=a.eV.bm();}d=d+1|0;}}
function Oh(a,b){var c,d,e;c=a.fU.bm();d=0;while(d<c){e=a.fU.t(d);e.fy(b);d=d+1|0;}}
function Lu(a,b){var c,d,e;c=a.eC.bm();d=0;while(d<c){e=a.eC.t(d);e.fy(b);d=d+1|0;}}
function LB(a){Tw(a);RQ(a);R5(a);LO(a);}
function Tw(a){var b,c,d;if(a.bj.bH.W>0.0)return;b=a.eV.bm();c=0;a:{while(true){if(c>=b)break a;d=a.eV.t(c);if(a.bj.C.W>d.C.W&&a.bj.ci.iO(d.ci))break;c=c+1|0;}a.bj.sS();a.jS.z7();if(a.dK.d4()>0.5)d.zr();}}
function RQ(a){var b,c,d;b=a.fU.bm();c=0;while(c<b){d=a.fU.t(c);if(d.ci.iO(a.bj.ci)){a.bj.zB();a.jS.B7();}c=c+1|0;}}
function R5(a){var b,c,d,e,f;b=a.eC.bm();c=0;while(c<b){d=a.eC.t(c);if(a.bj.ci.iO(d.ci)){a.eC.q7(d);b=a.eC.bm();a.jS.Ch();a.hq=a.hq+10|0;}c=c+1|0;}if(a.bj.bH.W>0.0)return;e=a.hf.bm();c=0;while(c<e){f=a.hf.t(c);if(a.bj.C.W>f.C.W&&a.bj.ci.iO(f.ci)){a.bj.zG();a.jS.CH();}c=c+1|0;}}
function LO(a){if(a.m9.ci.iO(a.bj.ci))a.iI=1;}
function Mw(a){if(a.kO-7.5>a.bj.C.W)a.iI=2;}
function ALC(){A0F=Fv(0.0,(-12.0));}
function Gf(){var a=this;C.call(a);a.b6=0;a.jf=0;a.jJ=0;a.dx=0;a.dr=null;a.kE=null;a.jG=null;a.hk=null;a.hj=null;a.pM=null;a.pN=null;a.o8=null;a.pc=null;a.hG=null;a.mb=0;a.P=0;a.O=0;a.f3=null;a.bI=null;a.bz=0;a.U=0;a.z=0;a.lv=0;a.nJ=null;a.k=null;}
var A1z=null;var A1A=null;function ASF(){ASF=N(Gf);U9();}
function AS5(a,b){var c=new Gf();KA(c,a,b);return c;}
function KA(a,b,c){ASF();I(a);a.kE=$rt_createIntArray(1);a.jG=$rt_createIntArray(1);a.hk=$rt_createIntArray(1);a.hj=$rt_createIntArray(1);a.pM=G($rt_arraycls($rt_intcls()),1);a.pN=G($rt_arraycls($rt_intcls()),1);a.o8=$rt_createIntArray(1);a.pc=$rt_createIntArray(1);a.nJ=AUB();a.k=b;a.hG=AU_(a.k,a);a.f3=$rt_createIntArray(4320);a.bI=$rt_createByteArray(c);a.bz=c;a.lv=b.i4.cq?1:0;a.b6=0;E$(a);}
function E$(a){if(a.b6==6)H_(a.hG,a.k);a.b6=0;a.P=0;a.O=0;a.z=0;a.U=0;if(a.lv)a.k.ds.eE();}
function L8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.k.l;d=a.k.q;e=a.O;f=a.P;g=a.z;h=g>=a.U?a.bz-g|0:(a.U-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.b6){case 2:break f;case 9:a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|
0;c=k;}k=e&16383;a.jJ=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.dr!==null&&a.dr.data.length>=k))a.dr=$rt_createIntArray(k);else{m=0;while(true){if(m>=k)break k;a.dr.data[m]=0;m=m+1|0;}}}e=e>>>14;f=f+(-14)|0;a.dx=0;a.b6=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,(-2));}while(f<32){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c
-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.b6=9;a.k.bd=B(470);a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,(-3));}a.jf=l;f=0;a.b6=a.jf?2:!a.mb?0:7;e=f;continue e;}while(f<3){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}l:{n=e&7;a.mb
=n&1;switch(n>>>1){case 0:k=e>>>3;l=f+(-3)|0;o=l&7;e=k>>>o;f=l-o|0;a.b6=1;break l;case 1:Q4(a.hk,a.hj,a.pM,a.pN,a.k);J7(a.hG,a.hk.data[0],a.hj.data[0],a.pM.data[0],0,a.pN.data[0],0);e=e>>>3;f=f+(-3)|0;a.b6=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.b6=3;break l;case 3:k=e>>>3;l=f+(-3)|0;a.b6=9;a.k.bd=B(471);a.O=k;a.P=l;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,(-3));default:}}continue e;}while(a.dx<(4+(a.jJ>>>10)|0)){while(f<3){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,
Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}p=a.dr.data;j=A1A.data;k=a.dx;a.dx=k+1|0;p[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.dx<19){p=a.dr.data;j=A1A.data;k=a.dx;a.dx=k+1|0;p[j[k]]=0;}a.kE.data[0]=7;k=R9(a.nJ,a.dr,a.kE,a.jG,a.f3,a.k);if(k){if(k==(-3)){a.dr=null;a.b6=9;}a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,k);}a.dx=0;a.b6=5;}while(true){k=a.jJ;if(a.dx>=((258+(k&31)|0)+(k>>5&31)
|0))break;k=a.kE.data[0];while(f<k){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.f3.data[((a.jG.data[0]+(e&A1z.data[k])|0)*3|0)+1|0];q=a.f3.data[((a.jG.data[0]+(e&A1z.data[k])|0)*3|0)+2|0];l=BM(q,16);if(l<0){e=e>>>k;f=f-k|0;j=a.dr.data;k=a.dx;a.dx=k+1|0;j[k]=q;}else{o=BM(q,18);m=!o?7:q-14|0;r=o?3:11;while(f<(k+m|0)){if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c
-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}b=0;d=d+(-1)|0;j=a.k.bh.data;o=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=o;}o=e>>>k;k=f-k|0;s=r+(o&A1z.data[m])|0;e=o>>>m;f=k-m|0;t=a.dx;u=a.jJ;if((t+s|0)>((258+(u&31)|0)+(u>>5&31)|0))break c;if(!l&&t<1)break c;k=l?0:a.dr.data[t-1|0];while(true){j=a.dr.data;l=t+1|0;j[t]=k;s=s+(-1)|0;if(!s)break;t=l;}a.dx=l;}}a.jG.data[0]=(-1);a.hk.data[0]=9;a.hj.data[0]=6;k=a.jJ;k=Ll(a.nJ,257+(k&31)|0,1+(k>>5&31)|0,a.dr,a.hk,a.hj,a.o8,a.pc,a.f3,a.k);if(k){if(k==(-3)){a.dr=null;a.b6=9;}a.O=e;a.P
=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,k);}J7(a.hG,a.hk.data[0],a.hj.data[0],a.f3,a.o8.data[0],a.f3,a.pc.data[0]);a.b6=6;}a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;k=Ot(a.hG,b);if(k!=1)break e;b=0;H_(a.hG,a.k);c=a.k.l;d=a.k.q;e=a.O;f=a.P;g=a.z;h=g>=a.U?a.bz-g|0:(a.U-g|0)-1|0;if(a.mb){a.b6=7;break b;}a.b6=0;continue e;}if(!d){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,b);}if(!h)
{if(g==a.bz&&a.U){g=0;h=g>=a.U?a.bz-g|0:(a.U-g|0)-1|0;}if(!h){a.z=g;k=Z(a,b);g=a.z;h=g>=a.U?a.bz-g|0:(a.U-g|0)-1|0;if(g==a.bz&&a.U){g=0;h=g>=a.U?a.bz-g|0:(a.U-g|0)-1|0;}if(!h){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,k);}}}b=0;k=a.jf;if(k>d)k=d;if(k>h)k=h;W(a.k.bh,c,a.bI,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.jf-k|0;a.jf=k;if(k)continue;a.b6=!a.mb?0:7;}return Z(a,k);}a.b6=9;a.k.bd=B(472);a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l
=c;a.z=g;return Z(a,(-3));}a.dr=null;a.b6=9;a.k.bd=B(473);a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,(-3));}a.z=g;k=Z(a,b);g=a.z;if(a.U!=a.z){a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,k);}a.b6=8;}a.O=e;a.P=f;a.k.q=d;i=a.k;i.o=Long_add(i.o,Long_fromInt(c-a.k.l|0));a.k.l=c;a.z=g;return Z(a,1);}
function Kf(a){E$(a);a.bI=null;a.f3=null;}
function Z(a,b){var c,d,e,f,g,h,i;c=a.k.oG;d=a.U;e=(d>a.z?a.bz:a.z)-d|0;if(e>a.k.fv)e=a.k.fv;if(e&&b==(-5))b=0;f=a.k;f.fv=f.fv-e|0;f=a.k;f.f6=Long_add(f.f6,Long_fromInt(e));if(a.lv&&e>0)a.k.ds.hM(a.bI,d,e);W(a.bI,d,a.k.oL,c,e);g=c+e|0;h=d+e|0;if(h==a.bz){if(a.z==a.bz)a.z=0;i=a.z-0|0;if(i>a.k.fv)i=a.k.fv;if(i&&b==(-5))b=0;f=a.k;f.fv=f.fv-i|0;f=a.k;f.f6=Long_add(f.f6,Long_fromInt(i));if(a.lv&&i>0)a.k.ds.hM(a.bI,0,i);W(a.bI,0,a.k.oL,g,i);g=g+i|0;h=0+i|0;}a.k.oG=g;a.U=h;return b;}
function U9(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A1z=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;A1A=b;}
function KW(){var a=this;Ec.call(a);a.oI=0;a.k3=0;}
function AVE(a,b){var c=new KW();AFj(c,a,b);return c;}
function AFj(a,b,c){G4(a);a.oI=b;a.k3=c;}
function ADH(a){return a.oI;}
function APv(a){return a.k3;}
function AJv(a){return J().a(B(474)).j(a.oI).a(B(292)).a(a.k3==2147483647?B(93):S4(a.k3).b()).a(B(475)).b();}
function F9(){var a=this;Ft.call(a);a.cz=null;a.kL=null;}
var AZj=null;function PJ(){PJ=N(F9);AKc();}
function O5(a,b){var c=new F9();Jm(c,a,b);return c;}
function Jm(a,b,c){PJ();Uf(a);I6();if(c!==AZ0&&c!==AZZ)F(Bk(J().a(B(476)).gb(c).a(B(477)).b()));a.cz=JL(b);a.kL=c;}
function ADV(a){return a.cz;}
function AF8(a){var b;b=a.cz.oj(47);if(b<0)return a.cz;return a.cz.eD(b+1|0);}
function AMd(a){var b,c;b=a.tV();c=b.oj(46);if(c==(-1))return B(93);return b.eD(c+1|0);}
function AEo(a){var b,c;b=a.tV();c=b.oj(46);if(c==(-1))return b;return b.c2(0,c);}
function AEI(a){return a.kL;}
function ALf(a){var b;b=a.s1();if(b!==null&&b.lu!==null)return ATC(b.lu);F(Bk(J().a(a.cz).a(B(478)).b()));}
function AQl(a){var b,c,d,e,f;b=AZj;c=OH(a).data;d=c.length;e=0;a:{while(e<d){f=c[e];b=b.of.e5(f);if(b===null)break a;e=e+1|0;}}return b;}
function OH(a){var b,c,d;b=Dw();c=0;a:{while(true){if(c>=a.cz.h())break a;d=a.cz.eg(47,c);if(d==(-1))break;H$(a,c,d,b);c=d+1|0;}}H$(a,c,a.cz.h(),b);return b.t1(G(Br,b.bm()));}
function H$(a,b,c,d){var e;e=a.cz.c2(b,c);if(!e.b9()&&!e.R(B(359))){if(!e.R(B(479)))d.c3(e);else d.iq(d.bm()-1|0);}}
function ACg(a,b){return O5(J().a(a.cz).a(B(307)).a(JL(b)).b(),a.kL);}
function Zw(a){var b;b=a.cz.it(47,!a.cz.gF(B(307))?a.cz.h():a.cz.h()-1|0);return b<=1?null:O5(a.cz.c2(0,b),a.kL);}
function ARP(a){return a.cz;}
function JL(b){var c;PJ();c=b.yI(92,47);if(c.gF(B(307)))c=c.c2(0,c.h()-1|0);return c;}
function AKc(){AZj=AOi();}
function KL(){M.call(this);this.AS=null;}
function AS1(a){var b=new KL();ANY(b,a);return b;}
function ANY(a,b){a.AS=b;T(a);}
function XW(a,b){return Kx(b);}
function IG(){}
function Su(){C.call(this);this.yc=null;}
function AVF(a){var b=new Su();AQC(b,a);return b;}
function AQC(a,b){a.yc=b;I(a);}
function AKI(a){BH(A1B);}
function ACi(a){BH(A1C);}
function AEm(a){BH(A1D);}
function AId(a){BH(A1E);}
function RY(){var a=this;BA.call(a);a.b5=null;a.fD=0;a.h9=null;a.fj=null;a.el=null;a.qA=null;a.qv=null;a.rR=null;a.sy=null;a.uU=null;a.fg=0;a.fI=null;a.ff=null;}
function AVZ(a){var b=new RY();AOX(b,a);return b;}
function AOX(a,b){Cp(a);a.ff=Ri();a.b5=b;a.fD=0;a.h9=DD(320.0,480.0);a.h9.cN.bq(160.0,240.0,0.0);a.fj=Ba();a.qA=AVF(a);a.el=XG(a.qA);a.qv=ARA(b.p,a.el);a.rR=B0(256.0,416.0,64.0,64.0);a.sy=B0(64.0,240.0,192.0,36.0);a.uU=B0(64.0,204.0,192.0,36.0);a.fg=0;a.fI=B(480);}
function AMz(a,b){if(b>0.10000000149011612)b=0.10000000149011612;a:{switch(a.fD){case 0:break;case 1:Rd(a,b);break a;case 2:TC(a);break a;case 3:RO(a);break a;case 4:P_(a);break a;default:break a;}UX(a);}}
function UX(a){if(AYc.dy())a.fD=1;}
function Rd(a,b){var c,d,e;if(AYc.dy()){a.h9.fB(a.fj.bq(AYc.e9(),AYc.fp(),0.0));if(a.rR.dw(a.fj.K,a.fj.G)){BH(AZf);a.fD=2;return;}}c=AX7.l2();Ey();if(c!==AXE&&c!==AXJ){d=0.0;if(AYc.u8(21))d=5.0;if(AYc.u8(22))d=(-5.0);a.el.sL(b,d);}else a.el.sL(b,AYc.zh());if(a.el.hq!=a.fg){a.fg=a.el.hq;a.fI=J().a(B(481)).j(a.fg).b();}if(a.el.iI==1)a.b5.dh(AWj(a.b5));if(a.el.iI==2){a.fD=4;e=a.fg;CZ();if(e<AZx.data[4])a.fI=J().a(B(481)).j(a.fg).b();else a.fI=J().a(B(482)).j(a.fg).b();Ql(a.fg);TK();}}
function TC(a){if(AYc.dy()){a.h9.fB(a.fj.bq(AYc.e9(),AYc.fp(),0.0));if(a.sy.dw(a.fj.K,a.fj.G)){BH(AZf);a.fD=1;return;}if(a.uU.dw(a.fj.K,a.fj.G)){BH(AZf);a.b5.dh(Ex(a.b5));return;}}}
function RO(a){if(AYc.dy()){a.el=XG(a.qA);a.qv=ARA(a.b5.p,a.el);a.el.hq=a.fg;a.fD=0;}}
function P_(a){if(AYc.dy())a.b5.dh(Ex(a.b5));}
function Z7(a){var b;a:{b=AX9;b.fr(16384);a.qv.lg();a.h9.bA();a.b5.p.eX(a.h9.dp);a.b5.p.fb();a.b5.p.b3();switch(a.fD){case 0:break;case 1:Ps(a);break a;case 2:Ub(a);break a;case 3:Rr(a);break a;case 4:Oc(a);break a;default:break a;}OF(a);}a.b5.p.b7();}
function OF(a){a.b5.p.bo(A1F,64.0,224.0,192.0,32.0);}
function Ps(a){a.b5.p.bo(A1G,256.0,416.0,64.0,64.0);AZv.li(a.b5.p,a.fI,16.0,460.0);}
function Ub(a){a.b5.p.bo(A1H,64.0,192.0,192.0,96.0);AZv.li(a.b5.p,a.fI,16.0,460.0);}
function Rr(a){a.ff.kD(AZv,B(483));AZv.vv(a.b5.p,a.ff,160.0-a.ff.gH/2.0,440.0);a.ff.kD(AZv,B(484));AZv.vv(a.b5.p,a.ff,160.0-a.ff.gH/2.0,40.0);}
function Oc(a){a.b5.p.bo(A1I,80.0,192.0,160.0,96.0);a.ff.kD(AZv,a.fI);AZv.li(a.b5.p,a.fI,160.0-a.ff.gH/2.0,460.0);}
function AI7(a,b){a.fy(b);a.c1();}
function M8(){C.call(this);}
function FW(){GH.call(this);}
function A1J(a,b,c){var d=new FW();LN(d,a,b,c);return d;}
function LN(a,b,c,d){UB(a,b,c,d);}
function APi(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(Bd(X(b),512));e=0;f=0;g=$rt_createCharArray(Bd(X(c),512));a:{while(true){if((e+32|0)>f&&Ci(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bd(X(b)+j|0,i.length);b.wq(d,j,f-j|0);e=0;}if(!Ci(c)){if(!Ci(b)&&e>=f){CE();k=AX6;}else{CE();k=AX4;}break a;}i=g.data;l=Bd(X(c),i.length);m=AVD(b,c);k=a.yB(d,e,f,g,0,l,m);e=m.wA;if(k===null&&0==m.nd){CE();k=AX6;}j=m.nd;c.CD(g,0,j);if(k!==null)break;}}Bw(b,CD(b)-(f-e|0)|0);return k;}
function Qw(){FW.call(this);}
function AVP(a){var b=new Qw();AGA(b,a);return b;}
function AGA(a,b){LN(a,b,0.3333333432674408,0.5);}
function AQB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(h.nV())break a;CE();i=AX6;break a;}n=k+1|0;o=j[k];if(!DC(a,o)){c=n+(-2)|0;i=Dv(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|o&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(h.nV())break a;CE();i=AX6;break a;}p=k+1|0;o=j[k];k=p+1|0;q=j[p];if(!DC(a,o))break b;if(!DC(a,q))break b;r
=((l&15)<<12|(o&63)<<6|q&63)&65535;if(J3(r)){c=k+(-3)|0;i=Dv(3);break a;}j=e.data;m=f+1|0;j[f]=r;}else{if((l&248)!=240){c=k+(-1)|0;i=Dv(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(h.nV())break a;CE();i=AX6;break a;}if((f+2|0)>g){c=k+(-1)|0;if(h.Ds(2))break a;CE();i=AX4;break a;}p=k+1|0;o=j[k];m=p+1|0;q=j[p];k=m+1|0;s=j[m];if(!DC(a,o))break c;if(!DC(a,q))break c;if(!DC(a,s))break c;j=e.data;t=(l&7)<<18|(o&63)<<12|(q&63)<<6|s&63;p=f+1|0;j[f]=E3(t);m=p+1|0;j[p]=Fi(t);}c=k;f=m;}break a;}c=k+(-3)|0;i=Dv(1);break a;}c
=k+(-3)|0;i=Dv(1);}h.z_(c);h.xi(f);return i;}
function DC(a,b){return (b&192)!=128?0:1;}
function PQ(){C.call(this);}
function AME(){return window.localStorage;}
function U1(){BX.call(this);}
function AV0(a,b,c){var d=new U1();ALW(d,a,b,c);return d;}
function ALW(a,b,c,d){Ea(a,b,c,d);}
function W_(a,b,c,d){var e;a:{while(true){if((b+a.bw.cr()|0)>d.L())break a;e=a.bw.bO(b,c);if(e<1)break;b=b+e|0;}}return a.i.d(b,c,d);}
function Fj(){Cs.call(this);}
var A1K=0.0;var A1y=0.0;function AQ_(){AQ_=N(Fj);ABS();}
function A1L(a,b){var c=new Fj();Ka(c,a,b);return c;}
function Ka(a,b,c){AQ_();Ff(a,b,c,A1K,A1y);}
function ABS(){A1K=0.30000001192092896;A1y=0.30000001192092896;}
function RF(){var a=this;C.call(a);a.t2=null;a.vE=null;a.wA=0;a.nd=0;}
function AVD(a,b){var c=new RF();AJe(c,a,b);return c;}
function AJe(a,b,c){I(a);a.t2=b;a.vE=c;}
function AI_(a){return Ci(a.t2);}
function Yx(a,b){return X(a.vE)<b?0:1;}
function APq(a,b){a.wA=b;}
function AL_(a,b){a.nd=b;}
function LX(){M.call(this);this.Dd=null;}
function AT4(a){var b=new LX();AHQ(b,a);return b;}
function AHQ(a,b){a.Dd=b;T(a);}
function AKr(a,b){return DZ(b);}
function LH(){M.call(this);this.Cq=null;}
function ATI(a){var b=new LH();ARw(b,a);return b;}
function ARw(a,b){a.Cq=b;T(a);}
function AQh(a,b){return Ts(b);}
function N5(){BX.call(this);}
function AWn(a,b,c){var d=new N5();ASz(d,a,b,c);return d;}
function ASz(a,b,c,d){Ea(a,b,c,d);}
function AKD(a,b,c,d){var e;while(true){e=a.i.d(b,c,d);if(e>=0)break;if((b+a.bw.cr()|0)<=d.L()){e=a.bw.bO(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function NK(){C.call(this);}
function PE(b,c){return Ju(b,c);}
function DE(){var a=this;C.call(a);a.kG=null;a.s2=0.0;}
function A1M(a,b){var c=new DE();D3(c,a,b);return c;}
function D3(a,b,c){I(a);a.s2=b;a.kG=c;}
function AEC(a,b,c){var d,e;d=b/a.s2|0;e=c!=1?d%a.kG.data.length|0:Bd(a.kG.data.length-1|0,d);return a.kG.data[e];}
function F7(){var a=this;C.call(a);a.gY=null;a.cY=null;a.r5=0;a.jD=0;a.gv=null;a.l8=0;a.BP=null;}
var A1N=null;function MM(){MM=N(F7);ARF();}
function A1O(a,b,c,d,e){var f=new F7();Iw(f,a,b,c,d,e);return f;}
function A1P(a,b,c,d,e){var f=new F7();J0(f,a,b,c,d,e);return f;}
function Iw(a,b,c,d,e,f){MM();J0(a,b,c,d,e,AUh(f));}
function J0(a,b,c,d,e,f){MM();a:{b:{I(a);a.r5=1;a.l8=0;a.BP=Ba();AVu();switch(A08.data[CJ(b)]){case 1:break;case 2:a.gY=AWC(c,d,f);a.cY=ARD(c,e);a.jD=0;break a;case 3:a.gY=AUI(c,d,f);a.cY=ARD(c,e);a.jD=0;break a;case 4:break b;default:break b;}a.gY=AUV(c,d,f);a.cY=AUf(c,e);a.jD=0;break a;}a.gY=AWp(d,f);a.cY=AWH(e);a.jD=1;}Pd(AX7,a);}
function ALZ(a,b,c,d){a.gY.lk(b,c,d);return a;}
function ZS(a,b){var c;c=b.data;a.cY.pb(b,0,c.length);return a;}
function ABb(a,b){a.gR(b,null);}
function ANL(a,b,c){a.gY.gR(b,c);if(a.gv!==null&&a.gv.wD()>0)a.gv.gR(b,c);if(a.cY.hy()>0)a.cY.g6();}
function ANB(a,b){a.gI(b,null);}
function Xp(a,b,c){a.gY.gI(b,c);if(a.gv!==null&&a.gv.wD()>0)a.gv.gI(b,c);if(a.cY.hy()>0)a.cY.pv();}
function ASw(a,b,c,d,e){a.AB(b,c,d,e,a.r5);}
function AIp(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!e)return;if(f)a.CJ(b);if(a.jD){if(a.cY.hy()<=0)AX$.sz(c,d,e);else{g=a.cY.lb();h=CD(g);i=Bq(g);Bw(g,d);BF(g,d+e|0);AX$.z1(c,e,5123,g);Bw(g,h);BF(g,i);}}else{j=0;if(a.l8)j=a.gv.wD();if(a.cY.hy()<=0){if(a.l8&&j>0)AYp.Ix(c,d,e,j);else AX$.sz(c,d,e);}else{if((e+d|0)>a.cY.kB()){k=new It;l=J().a(B(485)).j(e).a(B(486)).j(d).a(B(487));m=a.cY;Nu(k,l.j(m.kB()).a(B(293)).b());F(k);}if(a.l8&&j>0)AYp.HD(c,e,5123,d*2|0,j);else AX$.BK(c,e,5123,d*2|0);}}if(f)a.Cd(b);}
function AF5(a){return a.cY.lb();}
function Pd(b,c){var d;MM();d=A1N.e5(b);if(d===null)d=CK();d.c4(c);A1N.Q(b,d);}
function ARF(){A1N=E4();}
function G1(){}
function FY(){var a=this;C.call(a);a.iU=null;a.hv=null;}
function A1Q(a,b){var c=new FY();UG(c,a,b);return c;}
function UG(a,b,c){I(a);a.iU=b;a.hv=c;}
function I4(){var a=this;FY.call(a);a.lo=0;a.dX=null;}
function AWa(a,b){var c=new I4();ALb(c,a,b);return c;}
function ALb(a,b,c){UG(a,b,null);a.lo=c;}
function Hn(){var a=this;C.call(a);a.c_=null;a.C2=0;a.oq=null;}
var A1R=null;function ATg(){ATg=N(Hn);ASy();}
function ARy(a){var b=new Hn();Uj(b,a);return b;}
function Uj(a,b){var c,d,e;ATg();I(a);a.c_=A1R.document.createElement("audio");c=a.c_;d=$rt_ustr(J().a(B(488)).a(b.oy()).b());c.src=d;c=a.c_;e=AWc(a);c.addEventListener("ended",BB(e,"handleEvent"));c=A1R.document.body;d=a.c_;c.appendChild(d);}
function Eh(a){if(a.c_!==null)return;F(CC(B(489)));}
function AC$(a){Eh(a);a.c_.play();a.C2=1;}
function X1(a){Eh(a);a.c_.pause();}
function We(a,b){var c,d;Eh(a);c=a.c_;d=!!b;c.loop=d;}
function ALF(a,b){var c,d;Eh(a);c=a.c_;d=b;c.volume=d;}
function VX(a,b,c){var d,e;Eh(a);d=a.c_;e=c;d.volume=e;}
function AGM(a){var b,c;if(a.c_!==null){b=a.c_.parentNode;c=a.c_;b.removeChild(c);a.c_=null;}}
function AG4(a,b){a.oq=b;}
function OV(a,b){if(a.oq!==null)a.oq.Bk(a);}
function ASy(){A1R=window;}
function Jb(){C.call(this);}
var AZd=null;function ATf(){ATf=N(Jb);AJi();}
function AJi(){var $$je;AZd=$rt_createIntArray(Ms().data.length);a:{try{AZd.data[CJ(AZc)]=1;break a;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}b:{try{AZd.data[CJ(A1w)]=2;break b;}catch($$e){$$je=P($$e);if($$je instanceof C1){}else{throw $$e;}}}}
function To(){Bf.call(this);}
function AWl(){var a=new To();AFo(a);return a;}
function AFo(a){BL(a);}
function AKb(a,b,c,d){var e;e=!d.iM()?d.L():c.h();if(b<e)return (-1);d.eh=1;d.Cm=1;return a.i.d(b,c,d);}
function U_(a,b){return 0;}
function ADP(a){return B(490);}
function Rx(){var a=this;C.call(a);a.bZ=0;a.cy=null;a.cE=null;a.bX=0;a.f5=0;a.sm=0.0;a.ku=0;a.f$=0;a.d8=0;a.h7=0;a.nk=0;}
function Fb(){var a=new Rx();AGV(a);return a;}
function A1S(a,b){var c=new Rx();Ok(c,a,b);return c;}
function AGV(a){Ok(a,51,0.800000011920929);}
function Ok(a,b,c){var d;I(a);if(b<0)F(U(J().a(B(33)).j(b).b()));d=EV(B6(b/c)|0);if(d>1073741824)F(U(J().a(B(34)).j(d).b()));a.bX=d;if(c<=0.0)F(U(J().a(B(35)).dJ(c).b()));a.sm=c;a.d8=a.bX*c|0;a.f$=a.bX-1|0;a.ku=31-BS(a.bX)|0;a.h7=S(3,(B6(CQ(a.bX))|0)*2|0);a.nk=S(Bd(a.bX,8),(CL(a.bX)|0)/8|0);a.cy=G(C,a.bX+a.h7|0);a.cE=$rt_createIntArray(a.cy.data.length);}
function ANM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;if(b===null)F(U(B(415)));d=a.cy;e=d.data;f=b.dY();g=f&a.f$;h=e[g];if(b.R(h)){a.cE.data[g]=c;return;}i=Fc(a,f);j=e[i];if(b.R(j)){a.cE.data[i]=c;return;}k=E2(a,f);l=e[k];if(b.R(l)){a.cE.data[k]=c;return;}m=a.bX;n=m+a.f5|0;while(true){if(m>=n){if(h===null){e[g]=b;a.cE.data[g]=c;o=a.bZ;a.bZ=o+1|0;if(o>=a.d8)Ch(a,a.bX<<1);return;}if(j===null){e[i]=b;a.cE.data[i]=c;o=a.bZ;a.bZ=o+1|0;if(o>=a.d8)Ch(a,a.bX<<1);return;}if(l!==null){H5(a,b,c,g,h,i,j,k,l);return;}e[k]=b;a.cE.data[k]
=c;o=a.bZ;a.bZ=o+1|0;if(o>=a.d8)Ch(a,a.bX<<1);return;}if(b.R(e[m]))break;m=m+1|0;}a.cE.data[m]=c;}
function IB(a,b,c){var d,e,f,g,h,i,j,k;d=b.dY();e=d&a.f$;f=a.cy.data[e];if(f===null){a.cy.data[e]=b;a.cE.data[e]=c;g=a.bZ;a.bZ=g+1|0;if(g>=a.d8)Ch(a,a.bX<<1);return;}h=Fc(a,d);i=a.cy.data[h];if(i===null){a.cy.data[h]=b;a.cE.data[h]=c;g=a.bZ;a.bZ=g+1|0;if(g>=a.d8)Ch(a,a.bX<<1);return;}j=E2(a,d);k=a.cy.data[j];if(k!==null){H5(a,b,c,e,f,h,i,j,k);return;}a.cy.data[j]=b;a.cE.data[j]=c;g=a.bZ;a.bZ=g+1|0;if(g>=a.d8)Ch(a,a.bX<<1);}
function H5(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u;j=a.cy;k=a.cE;l=a.f$;m=0;n=a.nk;while(true){a:{switch(ED(2)){case 0:break;case 1:o=k.data;p=j.data;q=o[f];p[f]=b;o[f]=c;e=g;break a;default:o=k.data;p=j.data;q=o[h];p[h]=b;o[h]=c;e=i;break a;}o=k.data;p=j.data;q=o[d];p[d]=b;o[d]=c;}p=j.data;r=e.dY();d=r&l;s=p[d];if(s===null){o=k.data;p[d]=e;o[d]=q;t=a.bZ;a.bZ=t+1|0;if(t>=a.d8)Ch(a,a.bX<<1);return;}f=Fc(a,r);g=p[f];if(g===null){o=k.data;p[f]=e;o[f]=q;t=a.bZ;a.bZ=t+1|0;if(t>=a.d8)Ch(a,a.bX<<1);return;}h
=E2(a,r);i=p[h];if(i===null){o=k.data;p[h]=e;o[h]=q;u=a.bZ;a.bZ=u+1|0;if(u>=a.d8)Ch(a,a.bX<<1);return;}m=m+1|0;if(m==n)break;b=e;e=s;c=q;}NX(a,e,q);}
function NX(a,b,c){var d;if(a.f5==a.h7){Ch(a,a.bX<<1);IB(a,b,c);return;}d=a.bX+a.f5|0;a.cy.data[d]=b;a.cE.data[d]=c;a.f5=a.f5+1|0;a.bZ=a.bZ+1|0;}
function Zb(a,b,c){var d,e;d=b.dY();e=d&a.f$;if(!b.R(a.cy.data[e])){e=Fc(a,d);if(!b.R(a.cy.data[e])){e=E2(a,d);if(!b.R(a.cy.data[e]))return Ky(a,b,c);}}return a.cE.data[e];}
function Ky(a,b,c){var d,e,f;d=a.cy;e=a.bX;f=e+a.f5|0;while(e<f){if(b.R(d.data[e]))return a.cE.data[e];e=e+1|0;}return c;}
function Ch(a,b){var c,d,e,f,g,h,i;a:{c=a.bX+a.f5|0;a.bX=b;a.d8=b*a.sm|0;a.f$=b-1|0;a.ku=31-BS(b)|0;d=b;a.h7=S(3,(B6(CQ(d))|0)*2|0);a.nk=S(Bd(b,8),(CL(d)|0)/8|0);e=a.cy;f=a.cE;a.cy=G(C,b+a.h7|0);a.cE=$rt_createIntArray(b+a.h7|0);g=a.bZ;a.bZ=0;a.f5=0;if(g>0){h=0;while(true){if(h>=c)break a;i=e.data[h];if(i!==null)IB(a,i,f.data[h]);h=h+1|0;}}}}
function Fc(a,b){var c;c=BE(b,(-1262997959));return (c^c>>>a.ku)&a.f$;}
function E2(a,b){var c;c=BE(b,(-825114047));return (c^c>>>a.ku)&a.f$;}
function Sa(){O.call(this);}
function ASL(){var a=new Sa();AFH(a);return a;}
function AFH(a){Bc(a);}
function AOG(a){return B9().bL(65,90);}
function Cz(){var a=this;BT.call(a);a.dN=0;a.H=null;a.ji=null;}
function A1T(a,b,c,d,e){var f=new Cz();Lv(f,a,b,c,d,e);return f;}
function Lv(a,b,c,d,e,f){El(a,c);E0();a.ji=AYe;a.dN=b;a.H=d;a.x=e;a.bx=f;}
function EH(b){if(b>=0)return AUN(b,1);F(U(J().a(B(491)).j(b).b()));}
function AFm(b,c,d){return ACH(0,b.data.length,b,c,c+d|0,0,0);}
function H3(b){return AFm(b,0,b.data.length);}
function AAD(a,b,c,d){var e,f,g,h,i,j;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(492)).j(g).a(B(362)).j(f).b()));if(X(a)<d)F(GM());if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x+a.dN|0;i=0;while(i<d){g=c+1|0;j=a.H.data;f=h+1|0;e[c]=j[h];i=i+1|0;c=g;h=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function AKt(a,b){return a.wq(b,0,b.data.length);}
function APV(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.cb())F(CN());if(X(a)<d)F(EO());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Y(J().a(B(493)).j(g).a(B(362)).j(f).b()));if(d<0)F(Y(J().a(B(363)).j(d).a(B(364)).b()));h=a.x+a.dN|0;i=0;while(i<d){j=a.H.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.x=a.x+d|0;return a;}}e=b.data;F(Y(J().a(B(365)).j(c).a(B(56)).j(e.length).a(B(293)).b()));}
function X6(a){return 1;}
function FX(a){return a.H;}
function AHV(a){return J().a(B(494)).j(a.x).a(B(495)).j(a.bx).a(B(496)).j(a.ey).a(B(497)).a(a.ei<0?B(498):J().a(B(499)).j(a.ei).b()).a(B(57)).b();}
function DA(a,b){a.ji=b;return a;}
function TF(){var a=this;Cz.call(a);a.t0=0;a.kj=0;}
function AUN(a,b){var c=new TF();AEW(c,a,b);return c;}
function ACH(a,b,c,d,e,f,g){var h=new TF();K1(h,a,b,c,d,e,f,g);return h;}
function AEW(a,b,c){K1(a,0,b,$rt_createByteArray(b),0,b,c,0);}
function K1(a,b,c,d,e,f,g,h){Lv(a,b,c,d,e,f);a.t0=g;a.kj=h;}
function W3(a){return ACH(a.dN,a.ey,a.H,a.x,a.bx,a.t0,a.kj);}
function AHN(a){var b,c,d,e,f,g,h,i;if(a.kj)F(CN());a:{b=X(a);if(a.x>0){c=a.dN;d=a.dN+a.x|0;e=0;while(true){if(e>=b)break a;f=a.H.data;g=c+1|0;h=a.H.data;i=d+1|0;f[c]=h[d];e=e+1|0;c=g;d=i;}}}a.x=b;a.bx=a.ey;a.ei=(-1);return a;}
function APB(a){return a.kj;}
function ARJ(a){var b,c;b=X(a)/2|0;c=a.ji;E0();if(c!==AYe)return APp(a.dN+a.x|0,b,a,0,b,a.cb());return Vm(a.dN+a.x|0,b,a,0,b,a.cb());}
function ARU(a){var b,c;b=X(a)/4|0;c=a.ji;E0();if(c!==AYe)return AVA(a.dN+a.x|0,b,a,0,b,a.cb());return AS$(a.dN+a.x|0,b,a,0,b,a.cb());}
function AIX(a){var b,c;b=X(a)/4|0;c=a.ji;E0();if(c!==AYf)return ANF(a.dN+a.x|0,b,a,0,b,a.cb());return VC(a.dN+a.x|0,b,a,0,b,a.cb());}
function JV(){var a=this;C.call(a);a.kr=null;a.m0=0.0;}
function AVR(a,b){var c=new JV();ADv(c,a,b);return c;}
function ADv(a,b,c){I(a);a.kr=Ba();a.m0=0.0;a.kr.fk(b).gW();a.m0=c;}
function AG5(a,b,c,d){a.kr.fk(b).wi(c).zJ(c.K-d.K,c.G-d.G,c.bn-d.bn).gW();a.m0= -b.Bj(a.kr);}
function Fe(){var a=this;C.call(a);a.gd=null;a.b_=null;a.ij=null;}
var A1U=null;var A1V=null;var A1W=null;function AUw(){AUw=N(Fe);AGu();}
function AVG(){var a=new Fe();K$(a);return a;}
function K$(a){var b,c,d;AUw();I(a);a.gd=G(JV,6);b=G(Cw,8);c=b.data;c[0]=Ba();c[1]=Ba();c[2]=Ba();c[3]=Ba();c[4]=Ba();c[5]=Ba();c[6]=Ba();c[7]=Ba();a.b_=b;a.ij=$rt_createFloatArray(24);d=0;while(d<6){a.gd.data[d]=AVR(Ba(),0.0);d=d+1|0;}}
function AJ5(a,b){var c,d,e,f,g,h;W(A1V,0,a.ij,0,A1V.data.length);SW(b.c,a.ij,0,8,3);c=0;d=0;while(c<8){e=a.b_.data[c];f=a.ij.data;g=d+1|0;e.K=f[d];f=a.ij.data;h=g+1|0;e.G=f[g];f=a.ij.data;d=h+1|0;e.bn=f[h];c=c+1|0;}a.gd.data[0].hl(a.b_.data[1],a.b_.data[0],a.b_.data[2]);a.gd.data[1].hl(a.b_.data[4],a.b_.data[5],a.b_.data[7]);a.gd.data[2].hl(a.b_.data[0],a.b_.data[4],a.b_.data[3]);a.gd.data[3].hl(a.b_.data[5],a.b_.data[1],a.b_.data[6]);a.gd.data[4].hl(a.b_.data[2],a.b_.data[3],a.b_.data[6]);a.gd.data[5].hl(a.b_.data[4],
a.b_.data[0],a.b_.data[1]);}
function AGu(){var b,c,d,e,f,g,h,i;b=G(Cw,8);c=b.data;c[0]=B1((-1.0),(-1.0),(-1.0));c[1]=B1(1.0,(-1.0),(-1.0));c[2]=B1(1.0,1.0,(-1.0));c[3]=B1((-1.0),1.0,(-1.0));c[4]=B1((-1.0),(-1.0),1.0);c[5]=B1(1.0,(-1.0),1.0);c[6]=B1(1.0,1.0,1.0);c[7]=B1((-1.0),1.0,1.0);A1U=b;A1V=$rt_createFloatArray(24);d=0;b=A1U.data;e=b.length;f=0;while(f<e){g=b[f];c=A1V.data;h=d+1|0;c[d]=g.K;c=A1V.data;i=h+1|0;c[h]=g.G;c=A1V.data;d=i+1|0;c[i]=g.bn;f=f+1|0;}A1W=Ba();}
function IE(){var a=this;C.call(a);a.rI=null;a.vi=null;}
var A1X=null;function AVa(){AVa=N(IE);ANk();}
function AS7(a,b){var c=new IE();TD(c,a,b);return c;}
function TD(a,b,c){AVa();I(a);a.rI=Ba();a.vi=Ba();a.rI.fk(b);a.vi.fk(c).gW();}
function ANk(){A1X=Ba();}
function D7(){Bz.call(this);}
function ASY(){var a=new D7();AE1(a);return a;}
function AUO(a){var b=new D7();ZP(b,a);return b;}
function AE1(a){Dy(a);}
function ZP(a,b){Ez(a,b);}
function Lh(){Bf.call(this);this.tO=null;}
function AWm(a){var b=new Lh();ALz(b,a);return b;}
function ALz(a,b){BL(a);a.tO=b;}
function ZI(a,b,c,d){var e,f;a:{if(b!=d.L()){if(!b)break a;if(d.hD()&&b==d.dH())break a;e=a.tO;f=b-1|0;if(e.uV(c.g(f),c.g(b)))break a;}return (-1);}return a.i.d(b,c,d);}
function ADt(a,b){return 0;}
function Xx(a){return B(500);}
function SE(){C.call(this);}
function ALO(b){return $rt_str(b);}
function LU(){var a=this;C.call(a);a.d$=null;a.e$=null;a.uF=0;a.zu=0;a.oM=0;a.j2=0;a.lF=0;}
function AWp(a,b){var c=new LU();AMR(c,a,b);return c;}
function A1Y(a,b,c){var d=new LU();LF(d,a,b,c);return d;}
function AMR(a,b,c){LF(a,0,b,c);}
function LF(a,b,c,d){I(a);a.j2=0;a.lF=0;a.zu=b;a.d$=d;a.e$=Ge(BE(a.d$.cH/4|0,c));BJ(a.e$);a.uF=AX$.gM();a.oM=!b?35048:35044;}
function NT(a){if(a.lF){AX$.dv(34962,Bq(a.e$),a.e$,a.oM);a.j2=0;}}
function AB1(a,b,c,d){a.j2=1;Fg(b,a.e$,d,c);Bw(a.e$,0);BF(a.e$,d);NT(a);}
function ALN(a,b,c){var d,e,f,g,h,i;d=AX$;d.ct(34962,a.uF);if(a.j2){d.dv(34962,Bq(a.e$),a.e$,a.oM);a.j2=0;}a:{e=Cx(a.d$);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=B8(a.d$,f);i=g[f];if(i>=0){b.gr(i);if(h.jj!=4)b.eu(i,h.c6,5126,0,a.d$.cH,h.dI);else b.eu(i,h.c6,5121,1,a.d$.cH,h.dI);}f=f+1|0;}}f=0;while(f<e){h=B8(a.d$,f);i=b.i2(h.fu);if(i>=0){b.gr(i);if(h.jj!=4)b.eu(i,h.c6,5126,0,a.d$.cH,h.dI);else b.eu(i,h.c6,5121,1,a.d$.cH,h.dI);}f=f+1|0;}}a.lF=1;}
function AHS(a,b,c){var d,e,f,g;a:{d=AX$;e=Cx(a.d$);if(c===null){f=0;while(f<e){b.no(B8(a.d$,f).fu);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.kR(g);f=f+1|0;}}}d.ct(34962,0);a.lF=0;}
function Rj(){O.call(this);}
function AWW(){var a=new Rj();ADR(a);return a;}
function ADR(a){Bc(a);}
function AM2(a){return B9().bL(97,122);}
function ID(){}
function SQ(){C.call(this);}
function Hw(){}
function PR(){C.call(this);this.y2=null;}
function AUg(){var a=new PR();AR1(a);return a;}
function AR1(a){I(a);a.y2=B(93);}
function Oq(){O.call(this);}
function AWA(){var a=new Oq();Zl(a);return a;}
function Zl(a){Bc(a);}
function ALq(a){return AWS(a);}
function FB(){C.call(this);this.nK=null;}
function A1Z(){var a=new FB();Ng(a);return a;}
function Ng(a){I(a);}
function Pn(){var a=this;C.call(a);a.ft=null;a.d5=null;a.oW=0;a.z0=0;a.iw=0;a.kJ=0;a.u4=0;}
function ARD(a,b){var c=new Pn();ABQ(c,a,b);return c;}
function ABQ(a,b,c){I(a);a.iw=1;a.kJ=0;a.d5=HQ(c*2|0);a.z0=1;a.u4=!b?35048:35044;a.ft=a.d5.rg();BJ(a.ft);BJ(a.d5);a.oW=Uh(a);}
function Uh(a){var b;b=AX$.gM();AX$.ct(34963,b);AX$.dv(34963,CA(a.d5),null,a.u4);AX$.ct(34963,0);return b;}
function ALE(a){return Bq(a.ft);}
function VA(a){return CA(a.ft);}
function AFe(a,b,c,d){a.iw=1;B4(a.ft);a.ft.pa(b,c,d);BJ(a.ft);Bw(a.d5,0);BF(a.d5,d<<1);if(a.kJ){AX$.m3(34963,0,Bq(a.d5),a.d5);a.iw=0;}}
function AQu(a){a.iw=1;return a.ft;}
function AF2(a){if(!a.oW)F(Bk(B(501)));AX$.ct(34963,a.oW);if(a.iw){BF(a.d5,Bq(a.ft)*2|0);AX$.m3(34963,0,Bq(a.d5),a.d5);a.iw=0;}a.kJ=1;}
function Y8(a){AX$.ct(34963,0);a.kJ=0;}
function L5(){Bf.call(this);}
function ATQ(){var a=new L5();AN6(a);return a;}
function AN6(a){BL(a);}
function AFC(a,b,c,d){if(b!=d.z6())return (-1);return a.i.d(b,c,d);}
function AR4(a,b){return 0;}
function XU(a){return B(502);}
function IK(){BR.call(this);}
function A10(a){var b=new IK();P$(b,a);return b;}
function P$(a,b){Dn(a,b);}
function WD(a,b,c,d){var e;e=a.iF();d.bC(e,b-d.ez(e)|0);return a.i.d(b,c,d);}
function AAw(a){return B(503);}
function AM4(a,b){return 0;}
function Tn(){var a=this;C.call(a);a.cl=Long_ZERO;a.cO=Long_ZERO;}
function ANP(){var a=new Tn();AMq(a);return a;}
function AMq(a){I(a);a.cl=Long_fromInt(1);a.cO=Long_ZERO;}
function VH(a,b){a.cl=Long_and(b,Long_fromInt(65535));a.cO=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AKZ(a){a.cl=Long_fromInt(1);a.cO=Long_ZERO;}
function Ys(a){return Long_or(Long_shl(a.cO,16),a.cl);}
function AJK(a,b,c,d){var e,f,g,h,i,j,k,l;if(d==1){e=b.data;a.cl=Long_add(a.cl,Long_fromInt(e[c]&255));a.cO=Long_add(a.cO,a.cl);a.cl=Long_rem(a.cl,Long_fromInt(65521));a.cO=Long_rem(a.cO,Long_fromInt(65521));return;}f=d/5552|0;g=d%5552|0;while(true){h=f+(-1)|0;if(f<=0)break;i=5552;while(true){j=i+(-1)|0;if(i<=0)break;e=b.data;k=a.cl;l=c+1|0;a.cl=Long_add(k,Long_fromInt(e[c]&255));a.cO=Long_add(a.cO,a.cl);i=j;c=l;}a.cl=Long_rem(a.cl,Long_fromInt(65521));a.cO=Long_rem(a.cO,Long_fromInt(65521));f=h;}while(true)
{l=g+(-1)|0;if(g<=0)break;e=b.data;k=a.cl;h=c+1|0;a.cl=Long_add(k,Long_fromInt(e[c]&255));a.cO=Long_add(a.cO,a.cl);g=l;c=h;}a.cl=Long_rem(a.cl,Long_fromInt(65521));a.cO=Long_rem(a.cO,Long_fromInt(65521));}
function Jk(){C.call(this);}
var A11=null;function AJ7(){AJ7=N(Jk);AFN();}
function ED(b){AJ7();return A11.y7(b+1|0);}
function EV(b){var c,d;AJ7();if(!b)return 1;c=b+(-1)|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function AFN(){A11=AVL();}
function KB(){Bo.call(this);this.ou=0;}
function AVo(a){var b=new KB();AN3(b,a);return b;}
function AN3(a,b){Cc(a);a.bW=2;a.ou=D5(D4(b));}
function ANi(a,b,c){var d,e,f;d=b+1|0;e=c.g(b);f=c.g(d);return a.ou!=D5(D4(C9(e,f)))?(-1):2;}
function AR5(a){return J().a(B(378)).a(G2(Do(a.ou))).b();}
function Q3(){C.call(this);}
function W(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Rf(b)){g=e+f|0;if(g<=Rf(d)){a:{b:{if(b!==d){h=Cq(b).iz();i=Cq(d).iz();if(h!==null&&i!==null){if(h===i)break b;if(!h.k4()&&!i.k4()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.xT(n)){II(b,c,d,e,k);F(No());}k=k+1|0;g=m;}II(b,c,d,e,f);return;}if(!h.k4())break a;if(i.k4())break b;else break a;}F(No());}}II(b,c,d,e,f);return;}F(No());}}F(B3());}F(ALY(B(504)));}
function II(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Si(){return Long_fromNumber(new Date().getTime());}
function Op(){var a=this;C.call(a);a.Bi=null;a.gV=null;a.pA=null;a.kS=0;a.v5=0.0;a.hP=0.0;a.nv=0.0;a.h$=0.0;a.lJ=0.0;a.eQ=0.0;a.i$=0.0;a.ho=0.0;a.d7=0.0;a.kT=0.0;a.fz=0.0;a.wB=0.0;a.uh=0;a.gw=null;a.iV=null;a.ms=0.0;a.nW=0.0;a.uv=null;a.rL=null;a.s4=null;}
function AS2(a,b){var c=new Op();AJa(c,a,b);return c;}
function AJa(a,b,c){var d,e;I(a);a.eQ=1.0;a.kT=1.0;a.fz=1.0;a.wB=1.0;a.gw=G($rt_arraycls(GQ),128);a.nW=1.0;d=$rt_createCharArray(13);e=d.data;e[0]=120;e[1]=101;e[2]=97;e[3]=111;e[4]=110;e[5]=115;e[6]=114;e[7]=99;e[8]=117;e[9]=109;e[10]=118;e[11]=119;e[12]=122;a.rL=d;d=$rt_createCharArray(26);e=d.data;e[0]=77;e[1]=78;e[2]=66;e[3]=68;e[4]=67;e[5]=69;e[6]=70;e[7]=75;e[8]=65;e[9]=71;e[10]=72;e[11]=73;e[12]=74;e[13]=76;e[14]=79;e[15]=80;e[16]=81;e[17]=82;e[18]=83;e[19]=84;e[20]=85;e[21]=86;e[22]=87;e[23]=88;e[24]
=89;e[25]=90;a.s4=d;a.pA=b;a.kS=c;a.Ct(b,c);}
function ZV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,$$je;if(a.gV!==null)F(CC(B(505)));a.Bi=b.AZ();d=AVs(ATm(b.rv()),512);a:{b:{try{e=d.jW();if(e===null)F(Bk(B(506)));f=e.eD(e.zU(B(507))+8|0);g=f.c2(0,f.w7(32)).qD(B(292),4);h=g.data;if(h.length!=4)F(Bk(B(508)));a.v5=Bn(h[0]);a.hP=Bn(h[1]);a.nv=Bn(h[2]);a.h$=Bn(h[3]);i=a.v5+a.nv;f=d.jW();if(f===null)F(Bk(B(509)));j=f.qD(B(51),9);h=j.data;k=h.length;if(k<3)F(Bk(B(510)));if(!h[1].eL(B(511)))F(Bk(B(512)));a.lJ
=Bn(h[1].eD(11));if(!h[2].eL(B(513)))F(Bk(B(514)));c:{l=Bn(h[2].eD(5));m=1;if(k>=6&&h[5]!==null&&h[5].eL(B(515)))try{m=S(1,Bn(h[5].eD(6)));break c;}catch($$e){$$je=P($$e);if($$je instanceof Cm){}else{throw $$e;}}}a.gV=G(Br,m);n=0;d:{e:{f:{while(true){if(n>=m)break d;f=d.jW();if(f===null)F(Bk(B(516)));g:{o=DW(DP(B(517)),f);if(DV(o)){p=D9(o,1);try{q=Bn(p);if(q!=n)break f;break g;}catch($$e){$$je=P($$e);if($$je instanceof Cm){r=$$je;break e;}else{throw $$e;}}}}f=DW(DP(B(518)),f);if(!DV(f))break;s=D9(f,1);a.gV.data[n]
=b.Dr().CL(s).oy().x9(B(519),B(307));n=n+1|0;}F(Bk(B(520)));}try{F(Bk(J().a(B(521)).a(p).b()));}catch($$e){$$je=P($$e);if($$je instanceof Cm){r=$$je;}else{throw $$e;}}}F(PP(J().a(B(522)).a(p).b(),r));}a.ho=0.0;h:{while(true){f=d.jW();if(f===null)break;if(f.eL(B(523)))break h;if(f.eL(B(524)))break h;if(!f.eL(B(525)))continue;t=YG();u=Td(f,B(526));u.N();u.N();v=Bn(u.N());if(v<=0)a.iV=t;else{if(v>65535)continue;a.ua(v,t);}t.eF=v;u.N();t.na=Bn(u.N());u.N();t.nb=Bn(u.N());u.N();t.cK=Bn(u.N());u.N();t.cT=Bn(u.N());u.N();t.dL
=Bn(u.N());u.N();if(c)t.iv=Bn(u.N());else t.iv= -(t.cT+Bn(u.N())|0);u.N();t.fM=Bn(u.N());if(u.rU())u.N();i:{if(u.rU())try{t.ic=Bn(u.N());break i;}catch($$e){$$je=P($$e);if($$je instanceof Cm){}else{throw $$e;}}}if(t.cK>0&&t.cT>0)a.ho=AOH(l+t.iv,a.ho);}}a.ho=a.ho+a.nv;j:{while(true){f=d.jW();if(f===null)break;if(!f.eL(B(527)))break j;u=Td(f,B(526));u.N();u.N();w=Bn(u.N());u.N();x=Bn(u.N());if(w<0)continue;if(w>65535)continue;if(x<0)continue;if(x>65535)continue;t=a.hg(w&65535);u.N();y=Bn(u.N());if(t!==null)t.x7(x,
y);}}z=0;ba=0.0;bb=0.0;bc=0.0;bd=0.0;be=0.0;bf=0.0;bg=0.0;if(f!==null&&f.eL(B(524))){z=1;u=Td(f,B(526));u.N();u.N();ba=C0(u.N());u.N();bb=C0(u.N());u.N();bc=C0(u.N());u.N();bd=C0(u.N());u.N();be=C0(u.N());u.N();bf=C0(u.N());u.N();bg=C0(u.N());}bh=a.hg(32);if(bh===null){bh=YG();bh.eF=32;bi=a.hg(108);if(bi===null)bi=a.tm();bh.fM=bi.fM;a.ua(32,bh);}if(!bh.cK){bh.cK=a.h$+bh.fM+a.hP|0;bh.dL= -a.h$|0;}a.ms=bh.fM;bj=null;h=a.rL.data;bk=h.length;k=0;k:{while(k<bk){bl=h[k];bj=a.hg(bl);if(bj!==null)break k;k=k+1|0;}}if
(bj===null)bj=a.tm();a.nW=bj.cT-i;bm=null;h=a.s4.data;bk=h.length;k=0;l:{while(k<bk){bn=h[k];bm=a.hg(bn);if(bm!==null)break l;k=k+1|0;}}if(bm!==null)a.eQ=bm.cT;else{h=a.gw.data;bk=h.length;k=0;while(k<bk){m:{bo=h[k];if(bo!==null){bp=bo.data;bq=bp.length;br=0;while(true){if(br>=bq)break m;t=bp[br];if(t!==null&&t.cT&&t.cK)a.eQ=CR(a.eQ,t.cT);br=br+1|0;}}}k=k+1|0;}}a.eQ=a.eQ-i;a.i$=l-a.eQ;a.d7= -a.lJ;if(c){a.i$= -a.i$;a.d7= -a.d7;}if(z){a.i$=ba;a.ho=bb;a.d7=bc;a.eQ=bd;a.lJ=be;a.ms=bf;a.nW=bg;}}catch($$e){$$je=P($$e);if
($$je instanceof Bz){r=$$je;break b;}else{f=$$je;break a;}}Fm(d);return;}try{F(PP(J().a(B(528)).gb(b).b(),r));}catch($$e){$$je=P($$e);f=$$je;}}Fm(d);F(f);}
function WZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.m_();e=1.0/d.bE();f=1.0/d.by();g=0.0;h=0.0;i=c.p8;j=c.p9;k=c.tn();l=c.qP();if(c instanceof Ig){m=c;g=m.Aw;h=(m.y9-m.BC|0)-m.Au;}n=b.na;o=b.na+b.cK|0;p=b.nb;q=b.nb+b.cT|0;if(g<=0.0)k=o;else{n=n-g;if(n<0.0){b.cK=b.cK+n|0;b.dL=b.dL-n|0;n=0.0;}r=o-g;if(r<=k)k=r;else b.cK=b.cK-(r-k)|0;}if(h<=0.0)l=q;else{p=p-h;if(p<0.0){b.cT=b.cT+p|0;if(b.cT<0)b.cT=0;p=0.0;}r=q-h;if(r<=l)l=r;else{s=r-l;b.cT=b.cT-s|0;b.iv=b.iv+s|0;}}b.qF=i+n*e;b.rC=i+k*e;if(!a.kS){b.ni=j+
p*f;b.mK=j+l*f;}else{b.mK=j+p*f;b.ni=j+l*f;}}
function ARq(a,b,c){var d,e,f;d=a.gw.data;e=b/512|0;f=d[e];if(f===null){d=a.gw.data;f=G(GQ,512);d[e]=f;}f.data[b&511]=c;}
function AH8(a){var b,c,d,e,f,g,h,i;b=a.gw.data;c=b.length;d=0;a:while(true){if(d>=c)F(Bk(B(529)));b:{e=b[d];if(e!==null){f=e.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.cT&&i.cK)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function AAK(a,b){var c;c=a.gw.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function ZB(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=a.uh;h=a.fz;i=a.iV;j=b.bs;k=b.be;l=e-d|0;j.zL(l);k.BX(l+1|0);while(d<e){l=d+1|0;m=c.g(d);if(m==13){d=l;continue;}n=a.hg(m);if(n===null){if(i===null){d=l;continue;}n=i;}j.c4(n);if(f!==null)k.qo((f.fM+f.Cp(m)|0)*h);else k.qo(n.mp?0.0: -n.dL*h-a.h$);d=!g?l:m!=91?l:l>=e?l:c.g(l)!=91?l:l+1|0;f=n;}if(f!==null){o=f.mp?f.fM*h:(f.cK+f.dL|0)*h-a.hP;k.qo(o);}}
function VF(a,b,c){var d,e,f;d=c-1|0;e=b.t(d).eF&65535;if(a.hd(e))return d;if(a.s_(e))d=d+(-1)|0;while(d>0){f=b.t(d).eF&65535;if(a.s_(f))return d+1|0;if(a.hd(f))return d+1|0;d=d+(-1)|0;}return 0;}
function AAm(a,b){var c,d,e,f;if(a.uv===null)return 0;c=a.uv.data;d=c.length;e=0;while(e<d){f=c[e];if(b==f)return 1;e=e+1|0;}return 0;}
function ABj(a,b){switch(b){case 9:case 10:case 13:case 32:break;default:return 0;}return 1;}
function UK(){C.call(this);this.rh=null;}
function AWZ(a){var b=new UK();ASk(b,a);return b;}
function ASk(a,b){a.rh=b;I(a);}
function AMI(a){return;}
function AI0(a){ARO(a.rh);}
function M2(){var a=this;O.call(a);a.tc=0;a.tI=0;}
function K(a,b){var c=new M2();AQF(c,a,b);return c;}
function AQF(a,b,c){Bc(a);a.tc=b;a.tI=c;}
function AG$(a){var b;b=B9().bL(a.tc,a.tI);return b;}
function MV(){O.call(this);}
function AS_(){var a=new MV();YF(a);return a;}
function YF(a){Bc(a);}
function AQR(a){return B9().bL(48,57).bL(97,102).bL(65,70);}
function PG(){var a=this;C.call(a);a.yF=null;a.vQ=null;a.eO=null;a.bR=null;a.hp=0;a.hu=0;a.kX=0;a.kt=null;a.nz=null;a.eT=null;}
function AT3(a,b){var c=new PG();Va(c,a,b);return c;}
function NJ(a,b,c){a.nz=Q2(a,c);b.rM(a.eO.em(a.kX,J8(a)));b.AQ(a.nz);a.kX=H8(a);return a;}
function Q2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;if(a.kt!==null&&a.kt.R(b)){if(a.eT===null)return a.nz;c=J();d=0;while(d<a.eT.bm()){c.gb(a.eT.t(d));d=d+1|0;}return c.b();}a.kt=b;e=b.oA();f=J();a.eT=null;g=0;h=0;i=0;a:{b:while(true){j=e.data;k=j.length;if(g>=k){if(a.eT!==null&&h!=f.h())a.eT.c3(f.em(h,f.h()));return f.b();}if(j[g]==92&&!i){i=1;g=g+1|0;}c:{if(i){if(g>=k)break b;f.cc(j[g]);i=0;}else if(j[g]!=36)f.cc(j[g]);else{if(a.eT===null)a.eT=Dw();d:{try{l=new Br;g=g+1|0;Kn(l,e,g,1);m=Bn(l);if(h==f.h())break d;a.eT.c3(f.em(h,
f.h()));h=f.h();break d;}catch($$e){$$je=P($$e);if($$je instanceof Bz){break a;}else{throw $$e;}}}try{a.eT.c3(AUY(a,m));n=D9(a,m);h=h+n.h()|0;f.a(n);break c;}catch($$e){$$je=P($$e);if($$je instanceof Bz){break a;}else{throw $$e;}}}}g=g+1|0;}F(B3());}F(U(B(93)));}
function Sl(a){a.hp=0;a.hu=a.eO.h();a.bR.nU(a.eO,a.hp,a.hu);a.kX=0;a.kt=null;a.bR.gL=(-1);return a;}
function SS(a,b){return b.rM(a.eO.em(a.kX,a.eO.h()));}
function T1(a,b){var c;c=AL3();Sl(a);while(DV(a)){NJ(a,c,b);}return SS(a,c).b();}
function D9(a,b){return a.bR.r7(b);}
function G7(a,b){var c,d;c=a.eO.h();if(b>=0&&b<=c){d=RI(a,b);if(d>=0&&a.bR.xq()){a.bR.yW();return 1;}a.bR.eo=(-1);return 0;}F(Y(I_(b)));}
function RI(a,b){var c;a.bR.eE();a.bR.lT(1);a.bR.yP(b);c=a.vQ.cM(b,a.eO,a.bR);if(c==(-1))a.bR.eh=1;return c;}
function DV(a){var b,c;b=a.eO.h();if(!Ln(a))b=a.hu;if(a.bR.eo>=0&&a.bR.sK()==1){a.bR.eo=a.bR.l4();if(a.bR.l4()==a.bR.r1()){c=a.bR;c.eo=c.eo+1|0;}return a.bR.eo<=b&&G7(a,a.bR.eo)?1:0;}return G7(a,a.hp);}
function UO(a,b){return a.bR.iG(b);}
function K6(a,b){return a.bR.k2(b);}
function J8(a){return UO(a,0);}
function H8(a){return K6(a,0);}
function Ln(a){return a.bR.iM();}
function Va(a,b,c){var d,e,f,g,h;I(a);a.hp=(-1);a.hu=(-1);a.yF=b;a.vQ=b.oN;a.eO=c;a.hp=0;a.hu=a.eO.h();d=new JD;e=a.hp;f=a.hu;g=KV(b);h=Tb(b);Qm(d,c,e,f,g,h,QV(b));a.bR=d;}
function Tj(){Bl.call(this);}
function AWJ(){var a=new Tj();AJS(a);return a;}
function AJS(a){B5(a);}
function ARp(a,b,c,d){var e,f,g,h,i;e=d.L();f=b+1|0;if(f>e){d.eh=1;return (-1);}g=c.g(b);if(BP(g)){h=b+2|0;if(h<=e){i=c.g(f);if(EA(g,i))return a.i.d(h,c,d);}}return a.i.d(f,c,d);}
function ABm(a){return B(530);}
function YP(a,b){a.i=b;}
function AJG(a){return (-2147483602);}
function YM(a,b){return 1;}
function P7(){M.call(this);this.As=null;}
function AVN(a){var b=new P7();ANC(b,a);return b;}
function ANC(a,b){a.As=b;T(a);}
function APQ(a,b){return Tx(b);}
function Um(){C.call(this);this.s3=null;}
function ATW(a){var b=new Um();AEQ(b,a);return b;}
function AEQ(a,b){I(a);a.s3=b;}
function APw(a){AGj(a.s3);}
function KP(){Cd.call(this);}
function AJm(a){var b=new KP();AAZ(b,a);return b;}
function AAZ(a,b){Q8(a,b);}
function AFz(a,b){return a.eb.s(D5(D4(b)));}
function ARc(a){return J().a(B(332)).a(!a.oF?B(51):B(52)).a(a.eb.b()).b();}
function U0(){O.call(this);}
function ASG(){var a=new U0();AL7(a);return a;}
function AL7(a){Bc(a);}
function Vt(a){var b;b=AS1(a);b.bi=1;return b;}
function HB(){var a=this;Bl.call(a);a.fC=null;a.pD=null;a.jE=0;}
function APb(a,b){var c=new HB();Wp(c,a,b);return c;}
function Wp(a,b,c){B5(a);a.fC=b;a.jE=c;}
function AHA(a,b){a.i=b;}
function FQ(a){if(a.pD===null)a.pD=G2(a.fC);return a.pD;}
function AMO(a){return J().a(B(531)).a(FQ(a)).b();}
function Vp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=d.L();f=0;g=$rt_createIntArray(3);h=(-1);i=(-1);if(b>=e)return (-1);j=b+1|0;k=c.g(b);l=AA1(k);if(l!==null){m=l.data;n=0;if(m.length!=a.jE)return (-1);while(true){if(n>=a.jE)return a.i.d(j,c,d);if(m[n]!=a.fC.data[n])break;n=n+1|0;}return (-1);}o=g.data;o[f]=k;p=k-4352|0;if(p>=0&&p<19){if(j<e){k=c.g(j);h=k-4449|0;}if(h>=0&&h<21){q=j+1|0;o[1]=k;if(q<e){k=c.g(q);i=k-4519|0;}if(i>=0&&i<28){r=q+1|0;o[2]=k;if(a.jE==3&&o[0]==a.fC.data[0]&&o[1]==a.fC.data[1]&&
o[2]==a.fC.data[2]){s=a.i;r=s.d(r,c,d);}else r=(-1);return r;}if(a.jE==2&&o[0]==a.fC.data[0]&&o[1]==a.fC.data[1]){s=a.i;r=s.d(q,c,d);}else r=(-1);return r;}return (-1);}return (-1);}
function YN(a,b){var c,d;a:{if(b instanceof HB){c=b;if(!FQ(c).R(FQ(a))){d=0;break a;}}d=1;}return d;}
function AO8(a,b){return 1;}
function UP(){O.call(this);}
function AUA(){var a=new UP();AIK(a);return a;}
function AIK(a){Bc(a);}
function AEi(a){return B9().bL(33,64).bL(91,96).bL(123,126);}
function Ic(){var a=this;C.call(a);a.gf=null;a.jK=null;a.fs=null;a.Cu=0;a.pe=0;a.CY=0;a.oS=0;a.jw=0;a.mv=0;a.nF=0;a.ed=null;}
var A12=null;function AT9(){AT9=N(Ic);ARY();}
function AUI(a,b,c){var d=new Ic();M3(d,a,b,c);return d;}
function M3(a,b,c,d){AT9();I(a);a.jw=0;a.mv=0;a.nF=(-1);a.ed=UU();a.CY=b;a.gf=d;a.fs=QQ(BE(a.gf.cH,c));a.jK=a.fs.mt();a.Cu=1;BJ(a.jK);BJ(a.fs);a.pe=AX$.gM();a.oS=!b?35048:35044;N2(a);}
function LY(a){if(a.mv){AX$.dv(34962,Bq(a.fs),a.fs,a.oS);a.jw=0;}}
function Ya(a,b,c,d){a.jw=1;Fg(b,a.fs,d,c);Bw(a.jK,0);BF(a.jK,d);LY(a);}
function AOo(a,b,c){var d;d=AYp;d.Du(a.nF);So(a,b,c);Ss(a,d);a.mv=1;}
function So(a,b,c){var d,e,f,g,h,i;d=!a.ed.c9?0:1;a:{e=Cx(a.gf);if(d){if(c===null){f=0;while(d&&f<e){g=B8(a.gf,f);h=b.i2(g.fu);d=h!=a.ed.cC(f)?0:1;f=f+1|0;}}else{i=c.data;d=i.length!=a.ed.c9?0:1;f=0;while(d){if(f>=e)break a;d=i[f]!=a.ed.cC(f)?0:1;f=f+1|0;}}}}b:{if(!d){AX9.ct(34962,a.pe);Ur(a,b);a.ed.cj();f=0;while(true){if(f>=e)break b;g=B8(a.gf,f);if(c!==null){i=c.data;a.ed.pr(i[f]);}else a.ed.pr(b.i2(g.fu));h=a.ed.cC(f);if(h>=0){b.gr(h);b.eu(h,g.c6,g.jc,g.kd,a.gf.cH,g.dI);}f=f+1|0;}}}}
function Ur(a,b){var c,d,e;if(!a.ed.c9)return;c=Cx(a.gf);d=0;while(d<c){e=a.ed.cC(d);if(e>=0)b.kR(e);d=d+1|0;}}
function Ss(a,b){if(a.jw){b.ct(34962,a.pe);BF(a.fs,Bq(a.jK)*4|0);b.dv(34962,Bq(a.fs),a.fs,a.oS);a.jw=0;}}
function ABw(a,b,c){var d;d=AYp;d.Du(0);a.mv=0;}
function N2(a){B4(A12);AYp.Ev(1,A12);a.nF=A12.DI();}
function ARY(){A12=Er(1);}
function EL(){var a=this;C.call(a);a.bs=null;a.be=null;a.c0=0.0;a.hS=0.0;a.bD=0.0;a.io=null;}
function AUT(){var a=new EL();ADq(a);return a;}
function ADq(a){I(a);a.bs=CK();a.be=AVl();a.io=Yt();}
function AF$(a){a.bs.cj();a.be.cj();a.bD=0.0;}
function Xc(a){var b,c,d,e,f;b=Gb(a.bs.u);c=a.bs;d=0;e=c.u;while(d<e){f=c.t(d);b.cc(f.eF&65535);d=d+1|0;}b.a(B(532));b.gb(a.io);b.a(B(533));b.dJ(a.c0);b.a(B(533));b.dJ(a.hS);b.a(B(533));b.dJ(a.bD);return b.b();}
function Pu(){var a=this;C.call(a);a.nx=null;a.r4=null;a.pK=null;}
function AVc(a,b){var c=new Pu();AC4(c,a,b);return c;}
function AC4(a,b,c){I(a);a.nx=b;a.r4=c;}
function XY(a,b){var c,d,e;a.pK=b;c=C5();d=BB(a,"stateChanged");c.onreadystatechange=d;c=C5();e=a.r4;c.open("GET",$rt_ustr(e));C5().overrideMimeType("text/plain; charset=x-user-defined");C5().send();}
function AC_(a){var b,c;if(C5().readyState!=4)return;if(C5().status!=200){a.pK.g4();return;}b=$rt_str(C5().responseText);a.nx.lu=$rt_createByteArray(b.h());c=0;while(c<b.h()){a.nx.lu.data[c]=b.g(c)<<24>>24;c=c+1|0;}a.pK.gS();}
function Zy(a){a.mS();}
function Nl(){Bf.call(this);this.vU=0;}
function AON(a){var b=new Nl();AFD(b,a);return b;}
function AFD(a,b){BL(a);a.vU=b;}
function Yk(a,b,c,d){var e,f,g,h,i;e=b<d.L()?c.g(b):32;f=!b?32:c.g(b-1|0);g=!d.iM()?d.dH():0;h=e!=32&&!Ij(a,e,b,g,c)?0:1;i=f!=32&&!Ij(a,f,b-1|0,g,c)?0:1;return h^i^a.vU?(-1):a.i.d(b,c,d);}
function YH(a,b){return 0;}
function AR8(a){return B(534);}
function Ij(a,b,c,d,e){var f;if(!Iz(b)&&b!=95){a:{if(EX(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=e.g(c);if(Iz(f))return 0;if(EX(f)!=6)return 1;}}return 1;}return 0;}
function F8(){O.call(this);}
function AWe(){var a=new F8();OR(a);return a;}
function OR(a){Bc(a);}
function OI(a){return B9().bL(9,13).cJ(32);}
function Gr(){C.call(this);}
var A13=null;var A14=0;function Dl(){Dl=N(Gr);AE3();}
function Fg(b,c,d,e){Dl();if(c instanceof Cz)BF(c,d<<2);else if(c instanceof CF)BF(c,d);Rw(b,c,d,e);Bw(c,0);}
function Ge(b){var c;Dl();c=EH(b*4|0);DA(c,Dp());return c.mt();}
function HQ(b){var c;Dl();c=EH(b);DA(c,Dp());return c;}
function JE(b){var c;Dl();c=EH(b*2|0);DA(c,Dp());return c.rg();}
function Er(b){var c;Dl();c=EH(b*4|0);DA(c,Dp());return c.uL();}
function QQ(b){var c,d,e,$$je;Dl();c=S7(b);DA(c,Dp());A14=A14+b|0;d=A13;RV(d);a:{try{A13.c4(c);GS(d);}catch($$e){$$je=P($$e);e=$$je;break a;}return c;}GS(d);F(e);}
function AE3(){A13=CK();A14=0;}
function S7(b){Dl();return H3($rt_createByteArray(b));}
function Rw(b,c,d,e){var f,g;Dl();Bw(c,0);BF(c,CA(c));if(c instanceof CF){f=c;f=f.uX();}else{if(!(c instanceof Cz))F(Bk(J().a(B(535)).a(Cq(c).B()).a(B(536)).b()));g=c;f=g.mt();}f.r2(b,e,d);}
function MS(){CY.call(this);this.wE=null;}
function ATq(a){var b=new MS();AOD(b,a);return b;}
function AOD(a,b){a.wE=b;GI(a);}
function ABU(a){return AUr(a.wE);}
function IC(){}
function Jw(){}
function T8(){var a=this;C.call(a);a.q8=null;a.pp=null;}
function AWM(a,b){var c=new T8();ASs(c,a,b);return c;}
function ASs(a,b,c){I(a);a.q8=b;a.pp=c;}
function ASc(a){var b;b=a.q8.Ak();if(b!==null)b.sR(a);else a.pp.gS();}
function ADo(a){a.pp.g4();}
function Hz(){}
function HH(){}
function Lp(){C.call(this);}
function AHm(a,b,c){a.Hg($rt_str(b),Gj(c,"handleEvent"));}
function AHZ(a,b,c){a.FJ($rt_str(b),Gj(c,"handleEvent"));}
function XD(a,b){return a.E8(b);}
function AKf(a,b,c,d){a.Ep($rt_str(b),Gj(c,"handleEvent"),d?1:0);}
function AP_(a,b){return !!a.Hk(b);}
function Zx(a){return a.HJ();}
function VR(a,b,c,d){a.GF($rt_str(b),Gj(c,"handleEvent"),d?1:0);}
function Lg(){C.call(this);}
function BW(){C.call(this);this.c=null;}
var A15=null;var A16=null;var A17=null;var A18=null;var A19=null;var A1$=null;var A1_=null;var A2a=null;var A2b=null;var A2c=null;var A2d=null;function Ds(){Ds=N(BW);WY();}
function C_(){var a=new BW();RJ(a);return a;}
function RJ(a){Ds();I(a);a.c=$rt_createFloatArray(16);a.c.data[0]=1.0;a.c.data[5]=1.0;a.c.data[10]=1.0;a.c.data[15]=1.0;}
function ASi(a,b){return a.vt(b.c);}
function YQ(a,b){var c;c=b.data;a.c.data[0]=c[0];a.c.data[1]=c[1];a.c.data[2]=c[2];a.c.data[3]=c[3];a.c.data[4]=c[4];a.c.data[5]=c[5];a.c.data[6]=c[6];a.c.data[7]=c[7];a.c.data[8]=c[8];a.c.data[9]=c[9];a.c.data[10]=c[10];a.c.data[11]=c[11];a.c.data[12]=c[12];a.c.data[13]=c[13];a.c.data[14]=c[14];a.c.data[15]=c[15];return a;}
function AIv(a,b){A15.data[0]=a.c.data[0]*b.c.data[0]+a.c.data[4]*b.c.data[1]+a.c.data[8]*b.c.data[2]+a.c.data[12]*b.c.data[3];A15.data[4]=a.c.data[0]*b.c.data[4]+a.c.data[4]*b.c.data[5]+a.c.data[8]*b.c.data[6]+a.c.data[12]*b.c.data[7];A15.data[8]=a.c.data[0]*b.c.data[8]+a.c.data[4]*b.c.data[9]+a.c.data[8]*b.c.data[10]+a.c.data[12]*b.c.data[11];A15.data[12]=a.c.data[0]*b.c.data[12]+a.c.data[4]*b.c.data[13]+a.c.data[8]*b.c.data[14]+a.c.data[12]*b.c.data[15];A15.data[1]=a.c.data[1]*b.c.data[0]+a.c.data[5]*b.c.data[1]
+a.c.data[9]*b.c.data[2]+a.c.data[13]*b.c.data[3];A15.data[5]=a.c.data[1]*b.c.data[4]+a.c.data[5]*b.c.data[5]+a.c.data[9]*b.c.data[6]+a.c.data[13]*b.c.data[7];A15.data[9]=a.c.data[1]*b.c.data[8]+a.c.data[5]*b.c.data[9]+a.c.data[9]*b.c.data[10]+a.c.data[13]*b.c.data[11];A15.data[13]=a.c.data[1]*b.c.data[12]+a.c.data[5]*b.c.data[13]+a.c.data[9]*b.c.data[14]+a.c.data[13]*b.c.data[15];A15.data[2]=a.c.data[2]*b.c.data[0]+a.c.data[6]*b.c.data[1]+a.c.data[10]*b.c.data[2]+a.c.data[14]*b.c.data[3];A15.data[6]=a.c.data[2]
*b.c.data[4]+a.c.data[6]*b.c.data[5]+a.c.data[10]*b.c.data[6]+a.c.data[14]*b.c.data[7];A15.data[10]=a.c.data[2]*b.c.data[8]+a.c.data[6]*b.c.data[9]+a.c.data[10]*b.c.data[10]+a.c.data[14]*b.c.data[11];A15.data[14]=a.c.data[2]*b.c.data[12]+a.c.data[6]*b.c.data[13]+a.c.data[10]*b.c.data[14]+a.c.data[14]*b.c.data[15];A15.data[3]=a.c.data[3]*b.c.data[0]+a.c.data[7]*b.c.data[1]+a.c.data[11]*b.c.data[2]+a.c.data[15]*b.c.data[3];A15.data[7]=a.c.data[3]*b.c.data[4]+a.c.data[7]*b.c.data[5]+a.c.data[11]*b.c.data[6]+a.c.data[15]
*b.c.data[7];A15.data[11]=a.c.data[3]*b.c.data[8]+a.c.data[7]*b.c.data[9]+a.c.data[11]*b.c.data[10]+a.c.data[15]*b.c.data[11];A15.data[15]=a.c.data[3]*b.c.data[12]+a.c.data[7]*b.c.data[13]+a.c.data[11]*b.c.data[14]+a.c.data[15]*b.c.data[15];return a.vt(A15);}
function ABM(a){a.c.data[0]=1.0;a.c.data[4]=0.0;a.c.data[8]=0.0;a.c.data[12]=0.0;a.c.data[1]=0.0;a.c.data[5]=1.0;a.c.data[9]=0.0;a.c.data[13]=0.0;a.c.data[2]=0.0;a.c.data[6]=0.0;a.c.data[10]=1.0;a.c.data[14]=0.0;a.c.data[3]=0.0;a.c.data[7]=0.0;a.c.data[11]=0.0;a.c.data[15]=1.0;return a;}
function AIj(a,b,c,d,e){a.vn(b,b+d,c,c+e,0.0,1.0);return a;}
function AJb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.mH();h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;n= -(c+b)/h;o= -(e+d)/j;p= -(g+f)/l;a.c.data[0]=i;a.c.data[1]=0.0;a.c.data[2]=0.0;a.c.data[3]=0.0;a.c.data[4]=0.0;a.c.data[5]=k;a.c.data[6]=0.0;a.c.data[7]=0.0;a.c.data[8]=0.0;a.c.data[9]=0.0;a.c.data[10]=m;a.c.data[11]=0.0;a.c.data[12]=n;a.c.data[13]=o;a.c.data[14]=p;a.c.data[15]=1.0;return a;}
function Zr(a,b,c,d){a.mH();a.c.data[12]=b;a.c.data[13]=c;a.c.data[14]=d;return a;}
function ACs(a,b,c){A18.fk(b).gW();A19.fk(b).gW();A19.sI(c).gW();A1$.fk(A19).sI(A18).gW();a.mH();a.c.data[0]=A19.K;a.c.data[4]=A19.G;a.c.data[8]=A19.bn;a.c.data[1]=A1$.K;a.c.data[5]=A1$.G;a.c.data[9]=A1$.bn;a.c.data[2]= -A18.K;a.c.data[6]= -A18.G;a.c.data[10]= -A18.bn;return a;}
function ACI(a,b,c,d){A1_.fk(c).wi(b);a.Dt(A1_,d);a.wp(A2a.A9( -b.K, -b.G, -b.bn));return a;}
function KT(b,c){var d,e,f,g;Ds();d=c.data;e=b.data;f=$rt_createFloatArray(16);g=f.data;g[0]=e[0]*d[0]+e[4]*d[1]+e[8]*d[2]+e[12]*d[3];g[4]=e[0]*d[4]+e[4]*d[5]+e[8]*d[6]+e[12]*d[7];g[8]=e[0]*d[8]+e[4]*d[9]+e[8]*d[10]+e[12]*d[11];g[12]=e[0]*d[12]+e[4]*d[13]+e[8]*d[14]+e[12]*d[15];g[1]=e[1]*d[0]+e[5]*d[1]+e[9]*d[2]+e[13]*d[3];g[5]=e[1]*d[4]+e[5]*d[5]+e[9]*d[6]+e[13]*d[7];g[9]=e[1]*d[8]+e[5]*d[9]+e[9]*d[10]+e[13]*d[11];g[13]=e[1]*d[12]+e[5]*d[13]+e[9]*d[14]+e[13]*d[15];g[2]=e[2]*d[0]+e[6]*d[1]+e[10]*d[2]+e[14]*
d[3];g[6]=e[2]*d[4]+e[6]*d[5]+e[10]*d[6]+e[14]*d[7];g[10]=e[2]*d[8]+e[6]*d[9]+e[10]*d[10]+e[14]*d[11];g[14]=e[2]*d[12]+e[6]*d[13]+e[10]*d[14]+e[14]*d[15];g[3]=e[3]*d[0]+e[7]*d[1]+e[11]*d[2]+e[15]*d[3];g[7]=e[3]*d[4]+e[7]*d[5]+e[11]*d[6]+e[15]*d[7];g[11]=e[3]*d[8]+e[7]*d[9]+e[11]*d[10]+e[15]*d[11];g[15]=e[3]*d[12]+e[7]*d[13]+e[11]*d[14]+e[15]*d[15];W(f,0,b,0,16);}
function TE(b){var c;Ds();c=b.data;return c[3]*c[6]*c[9]*c[12]-c[2]*c[7]*c[9]*c[12]-c[3]*c[5]*c[10]*c[12]+c[1]*c[7]*c[10]*c[12]+c[2]*c[5]*c[11]*c[12]-c[1]*c[6]*c[11]*c[12]-c[3]*c[6]*c[8]*c[13]+c[2]*c[7]*c[8]*c[13]+c[3]*c[4]*c[10]*c[13]-c[0]*c[7]*c[10]*c[13]-c[2]*c[4]*c[11]*c[13]+c[0]*c[6]*c[11]*c[13]+c[3]*c[5]*c[8]*c[14]-c[1]*c[7]*c[8]*c[14]-c[3]*c[4]*c[9]*c[14]+c[0]*c[7]*c[9]*c[14]+c[1]*c[4]*c[11]*c[14]-c[0]*c[5]*c[11]*c[14]-c[2]*c[5]*c[8]*c[15]+c[1]*c[6]*c[8]*c[15]+c[2]*c[4]*c[9]*c[15]-c[0]*c[6]*c[9]*c[15]
-c[1]*c[4]*c[10]*c[15]+c[0]*c[5]*c[10]*c[15];}
function NQ(b){var c,d,e,f,g;Ds();c=$rt_createFloatArray(16);d=TE(b);if(d===0.0)return 0;e=c.data;f=b.data;e[0]=f[9]*f[14]*f[7]-f[13]*f[10]*f[7]+f[13]*f[6]*f[11]-f[5]*f[14]*f[11]-f[9]*f[6]*f[15]+f[5]*f[10]*f[15];e[4]=f[12]*f[10]*f[7]-f[8]*f[14]*f[7]-f[12]*f[6]*f[11]+f[4]*f[14]*f[11]+f[8]*f[6]*f[15]-f[4]*f[10]*f[15];e[8]=f[8]*f[13]*f[7]-f[12]*f[9]*f[7]+f[12]*f[5]*f[11]-f[4]*f[13]*f[11]-f[8]*f[5]*f[15]+f[4]*f[9]*f[15];e[12]=f[12]*f[9]*f[6]-f[8]*f[13]*f[6]-f[12]*f[5]*f[10]+f[4]*f[13]*f[10]+f[8]*f[5]*f[14]-f[4]
*f[9]*f[14];e[1]=f[13]*f[10]*f[3]-f[9]*f[14]*f[3]-f[13]*f[2]*f[11]+f[1]*f[14]*f[11]+f[9]*f[2]*f[15]-f[1]*f[10]*f[15];e[5]=f[8]*f[14]*f[3]-f[12]*f[10]*f[3]+f[12]*f[2]*f[11]-f[0]*f[14]*f[11]-f[8]*f[2]*f[15]+f[0]*f[10]*f[15];e[9]=f[12]*f[9]*f[3]-f[8]*f[13]*f[3]-f[12]*f[1]*f[11]+f[0]*f[13]*f[11]+f[8]*f[1]*f[15]-f[0]*f[9]*f[15];e[13]=f[8]*f[13]*f[2]-f[12]*f[9]*f[2]+f[12]*f[1]*f[10]-f[0]*f[13]*f[10]-f[8]*f[1]*f[14]+f[0]*f[9]*f[14];e[2]=f[5]*f[14]*f[3]-f[13]*f[6]*f[3]+f[13]*f[2]*f[7]-f[1]*f[14]*f[7]-f[5]*f[2]*f[15]
+f[1]*f[6]*f[15];e[6]=f[12]*f[6]*f[3]-f[4]*f[14]*f[3]-f[12]*f[2]*f[7]+f[0]*f[14]*f[7]+f[4]*f[2]*f[15]-f[0]*f[6]*f[15];e[10]=f[4]*f[13]*f[3]-f[12]*f[5]*f[3]+f[12]*f[1]*f[7]-f[0]*f[13]*f[7]-f[4]*f[1]*f[15]+f[0]*f[5]*f[15];e[14]=f[12]*f[5]*f[2]-f[4]*f[13]*f[2]-f[12]*f[1]*f[6]+f[0]*f[13]*f[6]+f[4]*f[1]*f[14]-f[0]*f[5]*f[14];e[3]=f[9]*f[6]*f[3]-f[5]*f[10]*f[3]-f[9]*f[2]*f[7]+f[1]*f[10]*f[7]+f[5]*f[2]*f[11]-f[1]*f[6]*f[11];e[7]=f[4]*f[10]*f[3]-f[8]*f[6]*f[3]+f[8]*f[2]*f[7]-f[0]*f[10]*f[7]-f[4]*f[2]*f[11]+f[0]*f[6]
*f[11];e[11]=f[8]*f[5]*f[3]-f[4]*f[9]*f[3]-f[8]*f[1]*f[7]+f[0]*f[9]*f[7]+f[4]*f[1]*f[11]-f[0]*f[5]*f[11];e[15]=f[4]*f[9]*f[2]-f[8]*f[5]*f[2]+f[8]*f[1]*f[6]-f[0]*f[9]*f[6]-f[4]*f[1]*f[10]+f[0]*f[5]*f[10];g=1.0/d;f[0]=e[0]*g;f[4]=e[4]*g;f[8]=e[8]*g;f[12]=e[12]*g;f[1]=e[1]*g;f[5]=e[5]*g;f[9]=e[9]*g;f[13]=e[13]*g;f[2]=e[2]*g;f[6]=e[6]*g;f[10]=e[10]*g;f[14]=e[14]*g;f[3]=e[3]*g;f[7]=e[7]*g;f[11]=e[11]*g;f[15]=e[15]*g;return 1;}
function OQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Ds();e=b.data;f=c.data;g=d+0|0;h=f[g]*e[3];i=d+1|0;j=h+f[i]*e[7];k=d+2|0;l=1.0/(j+f[k]*e[11]+e[15]);m=(f[g]*e[0]+f[i]*e[4]+f[k]*e[8]+e[12])*l;n=(f[g]*e[1]+f[i]*e[5]+f[k]*e[9]+e[13])*l;o=(f[g]*e[2]+f[i]*e[6]+f[k]*e[10]+e[14])*l;f[g]=m;f[i]=n;f[k]=o;}
function Uv(b,c){Ds();KT(b,c);}
function SW(b,c,d,e,f){var g;Ds();g=0;while(g<e){OQ(b,c,d);d=d+f|0;g=g+1|0;}}
function NF(b){Ds();return NQ(b);}
function WY(){A15=$rt_createFloatArray(16);A16=Xz();A17=Xz();A18=Ba();A19=Ba();A1$=Ba();A1_=Ba();A2a=C_();A2b=Ba();A2c=Ba();A2d=Ba();}
function IY(){C.call(this);}
var A2e=null;function AWo(){AWo=N(IY);Wn();}
function AU7(){var a=new IY();R0(a);return a;}
function R0(a){AWo();I(a);}
function AED(a,b,c){I6();if(c===AZ0)return O5(b,c);F(Bk(J().a(B(476)).gb(c).a(B(537)).b()));}
function ALw(a,b){var c;c=new F9;I6();Jm(c,b,AZ0);return c;}
function AFh(a,b){F(Bk(B(538)));}
function Wn(){A2e=AME();}
function QZ(){Db.call(this);}
function AV$(a,b,c){var d=new QZ();ACS(d,a,b,c);return d;}
function ACS(a,b,c,d){IX(a,b,c,d);}
function Xi(a,b,c,d){var e;e=a.i.d(b,c,d);if(e>=0)return e;return a.Z.d(b,c,d);}
function UY(){Bh.call(this);}
function AP$(){var a=new UY();AKQ(a);return a;}
function AKQ(a){B2(a);}
function Id(){Ef.call(this);}
function AUE(a){var b=new Id();AIs(b,a);return b;}
function AIs(a,b){N6(a,b);}
function Rq(){O.call(this);}
function AWq(){var a=new Rq();Yg(a);return a;}
function Yg(a){Bc(a);}
function AFf(a){return ATD(a);}
function L1(){var a=this;BA.call(a);a.cs=null;a.je=null;a.vu=null;a.vG=null;a.tl=null;a.sM=null;a.e6=null;}
function Ex(a){var b=new L1();AAY(b,a);return b;}
function AAY(a,b){Cp(a);a.cs=b;a.je=DD(320.0,480.0);a.je.cN.bq(160.0,240.0,0.0);a.vu=B0(0.0,0.0,64.0,64.0);a.vG=B0(10.0,218.0,300.0,36.0);a.tl=B0(10.0,182.0,300.0,36.0);a.sM=B0(10.0,146.0,300.0,36.0);a.e6=Ba();}
function VQ(a){if(AYc.dy()){a.je.fB(a.e6.bq(AYc.e9(),AYc.fp(),0.0));if(a.vG.dw(a.e6.K,a.e6.G)){BH(AZf);a.cs.dh(AVZ(a.cs));return;}if(a.tl.dw(a.e6.K,a.e6.G)){BH(AZf);a.cs.dh(ATS(a.cs));return;}if(a.sM.dw(a.e6.K,a.e6.G)){BH(AZf);a.cs.dh(ASU(a.cs));return;}if(a.vu.dw(a.e6.K,a.e6.G)){BH(AZf);CZ();AZw=AZw?0:1;if(!AZw)A2f.x1();else A2f.qj();}}}
function AB5(a){var b,c;b=AX9;b.x8(1.0,0.0,0.0,1.0);b.fr(16384);a.je.bA();a.cs.p.eX(a.je.dp);a.cs.p.fQ();a.cs.p.b3();a.cs.p.bo(AZs,0.0,0.0,320.0,480.0);a.cs.p.b7();a.cs.p.fb();a.cs.p.b3();a.cs.p.bo(A2g,23.0,328.0,274.0,142.0);a.cs.p.bo(A2h,10.0,145.0,300.0,110.0);c=a.cs.p;CZ();c.bo(!AZw?A2i:A2j,0.0,0.0,64.0,64.0);a.cs.p.b7();}
function AGO(a,b){a.bA();a.c1();}
function Ru(){C.call(this);this.q1=null;}
function AWc(a){var b=new Ru();Xu(b,a);return b;}
function Xu(a,b){I(a);a.q1=b;}
function VS(a,b){OV(a.q1,b);}
function AOg(a,b){a.i8(b);}
function Qb(){var a=this;C.call(a);a.rF=0;a.v2=0;a.ve=null;}
function AUY(a,b){var c=new Qb();ABl(c,a,b);return c;}
function ABl(a,b,c){a.ve=b;a.v2=c;I(a);a.rF=a.v2;}
function AHa(a){return D9(a.ve,a.rF);}
function He(){C.call(this);this.hT=0;}
var A2k=null;function ATx(){ATx=N(He);ANx();}
function ADm(){var a=new He();LT(a);return a;}
function LT(a){ATx();I(a);a.hT=0;}
function AR9(a,b,c,d){var e,f,g,h;e=a.hT^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=A2k.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.hT=e^(-1);}
function AEL(a){a.hT=0;}
function ANR(a,b){a.hT=Long_and(b,new Long(4294967295, 0)).lo;}
function AH0(a){return Long_and(Long_fromInt(a.hT),new Long(4294967295, 0));}
function ANx(){var b,c,d;A2k=null;A2k=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}A2k.data[b]=d;b=b+1|0;}}
function IZ(){C4.call(this);this.k9=0.0;}
function A2l(a,b){var c=new IZ();Uq(c,a,b);return c;}
function Uq(a,b,c){F0(a,b,c,1.0,0.6000000238418579);a.k9=0.0;a.bH.r9(3.0,0.0);}
function ALB(a,b){a.C.lC(a.bH.J*b,a.bH.W*b);a.ci.e0=a.C.J-0.5;a.ci.eZ=a.C.W-0.30000001192092896;if(a.C.J<0.5){a.C.J=0.5;a.bH.J=3.0;}if(a.C.J>9.5){a.C.J=9.5;a.bH.J=(-3.0);}a.k9=a.k9+b;}
function FV(){var a=this;C.call(a);a.oV=0;a.lG=0;a.gx=null;}
function A2m(a,b){var c=new FV();UV(c,a,b);return c;}
function UV(a,b,c){I(a);a.gx=ATr(0,b);a.oV=c;}
function V7(a){return !a.gx.u?a.zI():a.gx.qi();}
function AAk(a,b){if(b===null)F(U(B(539)));if(a.gx.u<a.oV){a.gx.c4(b);a.lG=S(a.lG,a.gx.u);}a.vF(b);}
function AEg(a,b){if(AOw(b,DF))b.eE();}
function ARa(a,b){var c,d,e,f;if(b===null)F(U(B(540)));c=a.gx;d=a.oV;e=0;while(e<b.u){f=b.t(e);if(f!==null){if(c.u<d)c.c4(f);a.vF(f);}e=e+1|0;}a.lG=S(a.lG,c.u);}
function Cm(){CU.call(this);}
function GY(){var a=new Cm();Xt(a);return a;}
function Ga(a){var b=new Cm();AGT(b,a);return b;}
function Xt(a){Fz(a);}
function AGT(a,b){UR(a,b);}
function FP(){Cs.call(this);}
var A2n=0.0;var A2o=0.0;function AVy(){AVy=N(FP);ACQ();}
function AUp(a,b){var c=new FP();TZ(c,a,b);return c;}
function TZ(a,b,c){AVy();Ff(a,b,c,A2n,A2o);}
function ACQ(){A2n=1.7000000476837158;A2o=1.7000000476837158;}
function Se(){var a=this;C.call(a);a.cf=null;a.fY=null;a.cD=null;}
function ARA(a,b){var c=new Se();ANy(c,a,b);return c;}
function ANy(a,b,c){I(a);a.cf=c;a.fY=DD(10.0,15.0);a.fY.cN.bq(5.0,7.5,0.0);a.cD=b;}
function APg(a){if(a.cf.bj.C.W>a.fY.cN.G)a.fY.cN.G=a.cf.bj.C.W;a.fY.bA();a.cD.eX(a.fY.dp);a.xv();a.Dj();}
function AOv(a){a.cD.fQ();a.cD.b3();a.cD.bo(AZs,a.fY.cN.K-5.0,a.fY.cN.G-7.5,10.0,15.0);a.cD.b7();}
function Wr(a){a.cD.fb();a.cD.b3();P4(a);Sg(a);PU(a);QE(a);QD(a);a.cD.b7();}
function P4(a){var b,c;a:{switch(a.cf.bj.dl){case 0:b=A2p.ie(a.cf.bj.eU,0);break a;case 1:b=AZu.ie(a.cf.bj.eU,0);break a;case 2:break;default:}b=A2q;}c=a.cf.bj.bH.J>=0.0?1.0:(-1.0);if(c>=0.0)a.cD.bo(b,a.cf.bj.C.J-0.5,a.cf.bj.C.W-0.5,c*1.0,1.0);else a.cD.bo(b,a.cf.bj.C.J+0.5,a.cf.bj.C.W-0.5,c*1.0,1.0);}
function Sg(a){var b,c,d,e;b=a.cf.eV.bm();c=0;while(c<b){d=a.cf.eV.t(c);e=A2r;if(d.mi==1)e=A2s.ie(d.h3,1);a.cD.bo(e,d.C.J-1.0,d.C.W-0.25,2.0,0.5);c=c+1|0;}}
function PU(a){var b,c,d,e,f,g;b=a.cf.hf.bm();c=0;while(c<b){d=a.cf.hf.t(c);a.cD.bo(A2t,d.C.J-0.5,d.C.W-0.5,1.0,1.0);c=c+1|0;}e=a.cf.eC.bm();c=0;while(c<e){f=a.cf.eC.t(c);g=A2u.ie(f.kn,0);a.cD.bo(g,f.C.J-0.5,f.C.W-0.5,1.0,1.0);c=c+1|0;}}
function QE(a){var b,c,d,e,f;b=a.cf.fU.bm();c=0;while(c<b){d=a.cf.fU.t(c);e=A2v.ie(d.k9,0);f=d.bH.J>=0.0?1.0:(-1.0);if(f>=0.0)a.cD.bo(e,d.C.J-0.5,d.C.W-0.5,f*1.0,1.0);else a.cD.bo(e,d.C.J+0.5,d.C.W-0.5,f*1.0,1.0);c=c+1|0;}}
function QD(a){var b;b=a.cf.m9;a.cD.bo(AZt,b.C.J-1.0,b.C.W-1.0,2.0,2.0);}
function O7(){var a=this;C.call(a);a.ew=null;a.fw=null;a.t5=0;a.CR=0;a.oo=0;a.jF=0;a.kk=0;}
function AUV(a,b,c){var d=new O7();AJh(d,a,b,c);return d;}
function AJh(a,b,c,d){I(a);a.jF=0;a.kk=0;a.CR=b;a.ew=d;a.fw=Ge(BE(a.ew.cH/4|0,c));BJ(a.fw);a.t5=AX$.gM();a.oo=!b?35048:35044;}
function UI(a){if(a.kk){AX$.dv(34962,Bq(a.fw),a.fw,a.oo);a.jF=0;}}
function AJX(a,b,c,d){a.jF=1;Fg(b,a.fw,d,c);Bw(a.fw,0);BF(a.fw,d);UI(a);}
function ACu(a,b,c){var d,e,f,g,h,i;d=AX$;d.ct(34962,a.t5);if(a.jF){d.dv(34962,Bq(a.fw),a.fw,a.oo);a.jF=0;}a:{e=Cx(a.ew);if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data;h=B8(a.ew,f);i=g[f];if(i>=0){b.gr(i);if(h.jj!=4)b.eu(i,h.c6,5126,0,a.ew.cH,h.dI);else b.eu(i,h.c6,5121,1,a.ew.cH,h.dI);}f=f+1|0;}}f=0;while(f<e){h=B8(a.ew,f);i=b.i2(h.fu);if(i>=0){b.gr(i);if(h.jj!=4)b.eu(i,h.c6,5126,0,a.ew.cH,h.dI);else b.eu(i,h.c6,5121,1,a.ew.cH,h.dI);}f=f+1|0;}}a.kk=1;}
function XJ(a,b,c){var d,e,f,g;a:{d=AX$;e=Cx(a.ew);if(c===null){f=0;while(f<e){b.no(B8(a.ew,f).fu);f=f+1|0;}}else{f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0)b.kR(g);f=f+1|0;}}}d.ct(34962,0);a.kk=0;}
function LW(){C.call(this);}
function Q7(){O.call(this);}
function ATT(){var a=new Q7();AIa(a);return a;}
function AIa(a){Bc(a);}
function AMp(a){return AVx(a);}
function RE(){O.call(this);}
function ATl(){var a=new RE();AIM(a);return a;}
function AIM(a){Bc(a);}
function Vc(a){return ATA(a);}
function Qh(){Bz.call(this);}
function Gl(){var a=new Qh();ANS(a);return a;}
function CC(a){var b=new Qh();AKE(b,a);return b;}
function ANS(a){Dy(a);}
function AKE(a,b){Ez(a,b);}
function Gi(){Bl.call(this);this.gp=0;}
function AFd(a){var b=new Gi();AJ6(b,a);return b;}
function AJ6(a,b){B5(a);a.gp=b;}
function Ze(a,b){a.i=b;}
function VM(a,b,c,d){var e,f,g,h,i;e=d.L();f=b+1|0;g=BM(f,e);if(g>0){d.eh=1;return (-1);}h=c.g(b);if(g<0){i=c.g(f);if(B_(i))return (-1);}if(a.gp!=h)return (-1);return a.i.d(f,c,d);}
function AK3(a,b,c,d){var e,f,g;if(!(c instanceof Br))return ER(a,b,c,d);e=c;f=d.L();while(true){if(b>=f)return (-1);g=e.eg(a.gp,b);if(g<0)return (-1);b=g+1|0;if(b<f&&B_(e.g(b))){b=g+2|0;continue;}if(a.i.d(b,c,d)>=0)break;}return g;}
function ANc(a,b,c,d,e){var f,g,h,i;if(!(d instanceof Br))return EY(a,b,c,d,e);f=d;g=e.L();a:{while(true){if(c<b)return (-1);h=f.it(a.gp,c);if(h<0)break a;if(h<b)break a;i=h+1|0;if(i<g&&B_(f.g(i))){c=h+(-1)|0;continue;}if(a.i.d(i,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function ARk(a){return J().a(B(93)).cc(a.gp).b();}
function AA6(a,b){if(b instanceof CH)return 0;if(b instanceof CB)return 0;if(b instanceof Cd)return 0;if(b instanceof Cy)return 0;if(b instanceof F$)return 0;if(!(b instanceof Gi))return 1;return b.gp!=a.gp?0:1;}
function ALh(a,b){return 1;}
function OG(){De.call(this);}
function AUo(a,b,c,d){var e=new OG();AK0(e,a,b,c,d);return e;}
function AK0(a,b,c,d,e){IN(a,b,c,d,e);}
function ANv(a,b,c,d){var e,f,g,h,i;e=a.f8.ir();f=a.f8.hR();g=0;while(true){if(g>=e){a:{while(true){h=a.i.d(b,c,d);if(h>=0)break;if((b+a.bw.cr()|0)<=d.L()){h=a.bw.bO(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.bw.cr()|0)>d.L()){d.eh=1;return (-1);}i=a.bw.bO(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function Bg(){C.call(this);}
var A2w=null;var AZs=null;var A2x=null;var A2h=null;var A1H=null;var A1F=null;var A1I=null;var A2y=null;var A2g=null;var A2j=null;var A2i=null;var AZg=null;var A1G=null;var A2t=null;var AZt=null;var A2u=null;var A2p=null;var AZu=null;var A2q=null;var A2v=null;var A2r=null;var A2s=null;var AZv=null;var A2f=null;var A1B=null;var A1C=null;var A1D=null;var A1E=null;var AZf=null;function Dq(b){return AUH(AX_.e3(b));}
function AAL(){var b,c,d,e;A2w=Dq(B(541));AZs=Bb(A2w,0,0,320,480);A2x=Dq(B(542));A2h=Bb(A2x,0,224,300,110);A1H=Bb(A2x,224,128,192,96);A1F=Bb(A2x,320,224,192,32);A1I=Bb(A2x,352,256,160,96);A2y=Bb(A2x,0,257,300,36);A2g=Bb(A2x,0,352,274,142);A2i=Bb(A2x,0,0,64,64);A2j=Bb(A2x,64,0,64,64);AZg=Bb(A2x,0,64,64,64);A1G=Bb(A2x,64,64,64,64);A2t=Bb(A2x,128,0,32,32);AZt=Bb(A2x,128,64,64,64);b=new DE;c=G(Ct,4);d=c.data;d[0]=Bb(A2x,128,32,32,32);d[1]=Bb(A2x,160,32,32,32);d[2]=Bb(A2x,192,32,32,32);d[3]=Bb(A2x,160,32,32,32);D3(b,
0.20000000298023224,c);A2u=b;e=new DE;c=G(Ct,2);d=c.data;d[0]=Bb(A2x,0,128,32,32);d[1]=Bb(A2x,32,128,32,32);D3(e,0.20000000298023224,c);A2p=e;e=new DE;c=G(Ct,2);d=c.data;d[0]=Bb(A2x,64,128,32,32);d[1]=Bb(A2x,96,128,32,32);D3(e,0.20000000298023224,c);AZu=e;A2q=Bb(A2x,128,128,32,32);e=new DE;c=G(Ct,2);d=c.data;d[0]=Bb(A2x,0,160,32,32);d[1]=Bb(A2x,32,160,32,32);D3(e,0.20000000298023224,c);A2v=e;A2r=Bb(A2x,64,160,64,16);e=new DE;c=G(Ct,4);d=c.data;d[0]=Bb(A2x,64,160,64,16);d[1]=Bb(A2x,64,176,64,16);d[2]=Bb(A2x,
64,192,64,16);d[3]=Bb(A2x,64,208,64,16);D3(e,0.20000000298023224,c);A2s=e;AZv=ATZ(AX_.e3(B(543)),AX_.e3(B(544)),0);A2f=AYb.Cf(AX_.e3(B(545)));A2f.vX(1);A2f.rK(0.5);CZ();if(AZw)A2f.qj();A1B=AYb.iW(AX_.e3(B(546)));A1C=AYb.iW(AX_.e3(B(547)));A1D=AYb.iW(AX_.e3(B(548)));A1E=AYb.iW(AX_.e3(B(549)));AZf=AYb.iW(AX_.e3(B(550)));}
function BH(b){CZ();if(AZw)b.xy(1.0);}
function OK(){Bf.call(this);}
function AO3(){var a=new OK();ABd(a);return a;}
function ABd(a){BL(a);}
function AG2(a,b,c,d){if(b&&!(d.hD()&&b==d.dH()))return (-1);return a.i.d(b,c,d);}
function AFi(a,b){return 0;}
function AID(a){return B(551);}
function Oy(){C.call(this);this.ql=null;}
function AWE(a){var b=new Oy();AQx(b,a);return b;}
function AQx(a,b){I(a);a.ql=b;}
function AUR(b){return AWE(b);}
function AGa(a,b){a.ql.lm(b);}
function ARb(a,b){a.ql.Bx(b);}
function Cw(){var a=this;C.call(a);a.K=0.0;a.G=0.0;a.bn=0.0;}
var A2z=null;var A2A=null;var A2B=null;var A2C=null;var A2D=null;function AKT(){AKT=N(Cw);XA();}
function Ba(){var a=new Cw();P0(a);return a;}
function B1(a,b,c){var d=new Cw();OX(d,a,b,c);return d;}
function P0(a){AKT();I(a);}
function OX(a,b,c,d){AKT();I(a);a.bq(b,c,d);}
function AHg(a,b,c,d){a.K=b;a.G=c;a.bn=d;return a;}
function AA8(a,b){return a.bq(b.K,b.G,b.bn);}
function AOY(a,b){return a.xP(b.K,b.G,b.bn);}
function AGt(a,b,c,d){return a.bq(a.K+b,a.G+c,a.bn+d);}
function AIT(a,b){return a.BZ(b.K,b.G,b.bn);}
function AN9(a,b,c,d){return a.bq(a.K-b,a.G-c,a.bn-d);}
function ANr(a,b){return a.bq(a.K*b,a.G*b,a.bn*b);}
function Z9(a){return a.K*a.K+a.G*a.G+a.bn*a.bn;}
function ASB(a){var b;b=a.z4();if(b!==0.0&&b!==1.0)return a.Br(1.0/CL(b));return a;}
function APl(a,b){return a.K*b.K+a.G*b.G+a.bn*b.bn;}
function AAW(a,b){return a.bq(a.G*b.bn-a.bn*b.G,a.bn*b.K-a.K*b.bn,a.K*b.G-a.G*b.K);}
function AH1(a,b,c,d){return a.bq(a.G*d-a.bn*c,a.bn*b-a.K*d,a.K*c-a.G*b);}
function Z3(a,b){var c,d,e;c=b.c;d=c.data;e=1.0/(a.K*d[3]+a.G*d[7]+a.bn*d[11]+d[15]);return a.bq((a.K*d[0]+a.G*d[4]+a.bn*d[8]+d[12])*e,(a.K*d[1]+a.G*d[5]+a.bn*d[9]+d[13])*e,(a.K*d[2]+a.G*d[6]+a.bn*d[10]+d[14])*e);}
function XA(){A2z=B1(1.0,0.0,0.0);A2A=B1(0.0,1.0,0.0);A2B=B1(0.0,0.0,1.0);A2C=B1(0.0,0.0,0.0);A2D=C_();}
function EF(){var a=this;C.call(a);a.J=0.0;a.W=0.0;}
var A2E=null;var A2F=null;var A2G=null;function AKS(){AKS=N(EF);ZY();}
function Wv(){var a=new EF();P1(a);return a;}
function Fv(a,b){var c=new EF();R7(c,a,b);return c;}
function P1(a){AKS();I(a);}
function R7(a,b,c){AKS();I(a);a.J=b;a.W=c;}
function U$(a,b,c){a.J=b;a.W=c;return a;}
function AK_(a,b,c){a.J=a.J+b;a.W=a.W+c;return a;}
function ZY(){A2E=Fv(1.0,0.0);A2F=Fv(0.0,1.0);A2G=Fv(0.0,0.0);}
function Gk(){var a=this;C.call(a);a.eP=null;a.c9=0;a.yx=0;}
function UU(){var a=new Gk();AEs(a);return a;}
function A2H(a,b){var c=new Gk();Ty(c,a,b);return c;}
function AEs(a){Ty(a,1,16);}
function Ty(a,b,c){I(a);a.yx=b;a.eP=$rt_createIntArray(c);}
function AFI(a,b){var c,d,e;c=a.eP;d=c.data;if(a.c9==d.length)c=a.s6(S(8,a.c9*1.75|0));d=c.data;e=a.c9;a.c9=e+1|0;d[e]=b;}
function ANX(a,b){if(b<a.c9)return a.eP.data[b];F(Y(J().a(B(382)).j(b).a(B(383)).j(a.c9).b()));}
function ACp(a){a.c9=0;}
function AJF(a,b){var c;if(b<0)F(U(J().a(B(388)).j(b).b()));c=a.c9+b|0;if(c>a.eP.data.length)a.s6(S(8,c));return a.eP;}
function X0(a,b){var c,d,e;c=$rt_createIntArray(b);d=c.data;e=a.eP;W(e,0,c,0,Bd(a.c9,d.length));a.eP=c;return c;}
function AGP(a){var b,c,d,e;if(!a.c9)return B(552);b=a.eP;c=b.data;d=AWQ(32);d.mM(91);d.wH(c[0]);e=1;while(e<a.c9){d.z5(B(533));d.wH(c[e]);e=e+1|0;}d.mM(93);return d.b();}
function Nm(){var a=this;BA.call(a);a.dj=null;a.jk=null;a.vo=null;a.lt=null;a.lr=null;a.h0=0.0;a.nG=null;}
function ATS(a){var b=new Nm();AIQ(b,a);return b;}
function AIQ(a,b){var c,d,e,f;Cp(a);a.h0=0.0;a.nG=Ri();a.dj=b;a.jk=DD(320.0,480.0);a.jk.cN.bq(160.0,240.0,0.0);a.vo=B0(0.0,0.0,64.0,64.0);a.lt=Ba();a.lr=G(Br,5);c=0;while(c<5){d=a.lr.data;e=J();f=c+1|0;e=e.j(f).a(B(553));CZ();d[c]=e.j(AZx.data[c]).b();a.nG.kD(AZv,a.lr.data[c]);a.h0=CR(a.nG.gH,a.h0);c=f;}a.h0=160.0-a.h0/2.0+AZv.zT()/2.0;}
function APr(a){if(AYc.dy()){a.jk.fB(a.lt.bq(AYc.e9(),AYc.fp(),0.0));if(a.vo.dw(a.lt.K,a.lt.G)){BH(AZf);a.dj.dh(Ex(a.dj));return;}}}
function AQ5(a){var b,c,d;b=AX9;b.fr(16384);a.jk.bA();a.dj.p.eX(a.jk.dp);a.dj.p.fQ();a.dj.p.b3();a.dj.p.bo(AZs,0.0,0.0,320.0,480.0);a.dj.p.b7();a.dj.p.fb();a.dj.p.b3();a.dj.p.bo(A2y,10.0,344.0,300.0,33.0);c=230.0;d=4;while(d>=0){AZv.li(a.dj.p,a.lr.data[d],a.h0,c);c=c+AZv.yS();d=d+(-1)|0;}a.dj.p.bo(AZg,0.0,0.0,64.0,64.0);a.dj.p.b7();}
function Yh(a,b){a.bA();a.c1();}
function SU(){var a=this;C4.call(a);a.sU=0;a.mi=0;a.h3=0.0;}
function AVb(a,b,c){var d=new SU();ANH(d,a,b,c);return d;}
function ANH(a,b,c,d){F0(a,c,d,2.0,0.5);a.sU=b;a.mi=0;a.h3=0.0;if(b==1)a.bH.J=2.0;}
function AKp(a,b){if(a.sU==1){a.C.lC(a.bH.J*b,0.0);a.ci.e0=a.C.J-1.0;a.ci.eZ=a.C.W-0.25;if(a.C.J<1.0){a.bH.J= -a.bH.J;a.C.J=1.0;}if(a.C.J>9.0){a.bH.J= -a.bH.J;a.C.J=9.0;}}a.h3=a.h3+b;}
function AEU(a){a.mi=1;a.h3=0.0;a.bH.J=0.0;}
function LP(){Ef.call(this);}
function Nj(){var a=new LP();AFx(a);return a;}
function AFx(a){Lz(a);}
function R6(){C.call(this);}
function YK(b){return $rt_intBitsToFloat(b&(-16777217));}
function KZ(){O.call(this);}
function AU0(){var a=new KZ();AHu(a);return a;}
function AHu(a){Bc(a);}
function AQI(a){var b;b=AT4(a);b.bi=1;return b;}
function MR(){Fq.call(this);this.mE=0;}
function AV3(a){var b=new MR();AAv(b,a);return b;}
function A2I(a,b){var c=new MR();La(c,a,b);return c;}
function AAv(a,b){La(a,15,b);}
function La(a,b,c){var d;K3(a);a.mE=0;d=RZ(a,b,c);if(!d)return;F(AUE(J().j(d).a(B(18)).a(a.bd).b()));}
function RZ(a,b,c){var d;a.mE=0;a.i4=ATH(a);d=a.i4;if(c)b= -b;return Ks(d,b);}
function SR(a,b){var c;if(a.i4===null)return (-2);c=TI(a.i4,b);if(c==1)a.mE=1;return c;}
function Pb(){var a=this;FB.call(a);a.gk=0;a.cd=null;a.ge=0;a.wX=0.0;a.on=0;}
function E4(){var a=new Pb();ABG(a);return a;}
function A2J(a){var b=new Pb();Kz(b,a);return b;}
function A2K(a,b){var c=new Pb();T4(c,a,b);return c;}
function ADW(a,b){return G(I4,b);}
function ABG(a){Kz(a,16);}
function Kz(a,b){T4(a,b,0.75);}
function TX(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function T4(a,b,c){var d;Ng(a);if(b>=0&&c>0.0){d=TX(b);a.gk=0;a.cd=a.rw(d);a.wX=c;Jy(a);return;}F(DK());}
function Jy(a){a.on=a.cd.data.length*a.wX|0;}
function APG(a,b){var c;c=Qe(a,b);if(c===null)return null;return c.hv;}
function Qe(a,b){var c,d,e;if(b===null)c=IQ(a);else{d=HC(b);e=d&(a.cd.data.length-1|0);c=If(a,b,e,d);}return c;}
function If(a,b,c,d){var e,f;e=a.cd.data[c];while(e!==null){if(e.lo==d){f=e.iU;if(LC(b,f))break;}e=e.dX;}return e;}
function IQ(a){var b;b=a.cd.data[0];while(b!==null&&b.iU!==null){b=b.dX;}return b;}
function AI5(a,b,c){return a.Db(b,c);}
function APe(a,b,c){var d,e,f,g,h;if(b===null){d=IQ(a);if(d===null){a.ge=a.ge+1|0;d=a.rX(null,0,0);e=a.gk+1|0;a.gk=e;if(e>a.on)a.rW();}}else{f=HC(b);g=f&(a.cd.data.length-1|0);d=If(a,b,g,f);if(d===null){a.ge=a.ge+1|0;d=a.rX(b,g,f);e=a.gk+1|0;a.gk=e;if(e>a.on)a.rW();}}h=d.hv;d.hv=c;return h;}
function ALr(a,b,c,d){var e;e=AWa(b,d);e.dX=a.cd.data[c];a.cd.data[c]=e;return e;}
function ADu(a,b){var c,d,e,f,g,h,i;c=TX(!b?1:b<<1);d=a.rw(c);e=0;while(e<a.cd.data.length){f=a.cd.data[e];a.cd.data[e]=null;while(f!==null){g=d.data;h=f.lo&(c-1|0);i=f.dX;f.dX=g[h];g[h]=f;f=i;}e=e+1|0;}a.cd=d;Jy(a);}
function AL5(a){a.yu(a.cd.data.length);}
function AIh(a,b){var c;c=Q5(a,b);if(c===null)return null;return c.hv;}
function Q5(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cd.data[0];while(e!==null){if(e.iU===null)break a;f=e.dX;d=e;e=f;}}else{g=HC(b);c=g&(a.cd.data.length-1|0);e=a.cd.data[c];while(e!==null&&!(e.lo==g&&LC(b,e.iU))){f=e.dX;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.dX=e.dX;else a.cd.data[c]=e.dX;a.ge=a.ge+1|0;a.gk=a.gk-1|0;return e;}
function ADG(a){if(a.nK===null)a.nK=ATq(a);return a.nK;}
function HC(b){return b.dY();}
function LC(b,c){return b!==c&&!b.R(c)?0:1;}
function P3(){Bf.call(this);this.jr=0;}
function AUl(a){var b=new P3();AEf(b,a);return b;}
function AEf(a,b){BL(a);a.jr=b;}
function AJ_(a,b,c,d){var e;e=!d.hD()?c.h()-b|0:d.L()-b|0;if(e<=0){d.bC(a.jr,0);return a.i.d(b,c,d);}if(c.g(b)!=10)return (-1);d.bC(a.jr,1);return a.i.d(b+1|0,c,d);}
function AC0(a,b){var c;c=!b.ez(a.jr)?0:1;b.bC(a.jr,(-1));return c;}
function WH(a){return B(554);}
function SD(){var a=this;C.call(a);a.cx=null;a.bg=0;a.wz=0;}
function AVl(){var a=new SD();ALk(a);return a;}
function A2L(a,b){var c=new SD();Tp(c,a,b);return c;}
function ALk(a){Tp(a,1,16);}
function Tp(a,b,c){I(a);a.wz=b;a.cx=$rt_createFloatArray(c);}
function Zz(a,b){var c,d,e;c=a.cx;d=c.data;if(a.bg==d.length)c=a.og(S(8,a.bg*1.75|0));d=c.data;e=a.bg;a.bg=e+1|0;d[e]=b;}
function XI(a,b){a.tN(b.cx,0,b.bg);}
function AOj(a,b,c,d){if((c+d|0)<=b.bg){a.tN(b.cx,c,d);return;}F(U(J().a(B(555)).j(c).a(B(380)).j(d).a(B(381)).j(b.bg).b()));}
function WX(a,b,c,d){var e,f,g;e=a.cx;f=e.data;g=a.bg+d|0;if(g>f.length)e=a.og(S(8,g*1.75|0));W(b,c,e,a.bg,d);a.bg=a.bg+d|0;}
function AAj(a,b){if(b<a.bg)return a.cx.data[b];F(Y(J().a(B(382)).j(b).a(B(383)).j(a.bg).b()));}
function AEP(a,b,c){if(b<a.bg){a.cx.data[b]=c;return;}F(Y(J().a(B(382)).j(b).a(B(383)).j(a.bg).b()));}
function V0(a,b,c){var d,e,f,g,h,i;d=a.bg;if(c>=d)F(Y(J().a(B(384)).j(c).a(B(383)).j(a.bg).b()));if(b>c)F(Y(J().a(B(385)).j(b).a(B(386)).j(c).b()));e=(c-b|0)+1|0;f=d-e|0;if(a.wz){g=a.cx;h=b+e|0;W(g,h,a.cx,b,d-h|0);}else{i=S(f,c+1|0);W(a.cx,i,a.cx,b,d-i|0);}a.bg=f;}
function ASx(a){return a.cx.data[a.bg-1|0];}
function XZ(a){a.bg=0;}
function AMK(a,b){var c;if(b<0)F(U(J().a(B(388)).j(b).b()));c=a.bg+b|0;if(c>a.cx.data.length)a.og(S(8,c));return a.cx;}
function AJf(a,b){var c,d,e;c=$rt_createFloatArray(b);d=c.data;e=a.cx;W(e,0,c,0,Bd(a.bg,d.length));a.cx=c;return c;}
function ZM(a,b){if(a.bg>b)a.bg=b;}
function GC(){var a=this;C.call(a);a.jL=0;a.ru=0;}
var AX6=null;var AX4=null;function CE(){CE=N(GC);AB2();}
function L3(a,b){var c=new GC();M0(c,a,b);return c;}
function M0(a,b,c){CE();I(a);a.jL=b;a.ru=c;}
function AIN(a){return a.jL?0:1;}
function APD(a){return a.jL!=1?0:1;}
function AGv(a){return !a.vJ()&&!a.s7()?0:1;}
function AD6(a){return a.jL!=2?0:1;}
function APS(a){return a.jL!=3?0:1;}
function ACE(a){if(a.CQ())return a.ru;F(Tk());}
function Dv(b){CE();return L3(2,b);}
function AB2(){AX6=L3(0,0);AX4=L3(1,0);}
function J1(){Bf.call(this);this.hE=0;}
function AV5(a){var b=new J1();SK(b,a);return b;}
function SK(a,b){BL(a);a.hE=b;}
function ALt(a,b,c,d){var e,f,g,h;e=!d.hD()?c.h():d.L();if(b>=e){d.bC(a.hE,0);return a.i.d(b,c,d);}f=e-b|0;if(f==2&&c.g(b)==13){g=b+1|0;if(c.g(g)==10){d.bC(a.hE,0);return a.i.d(b,c,d);}}a:{if(f==1){h=c.g(b);if(h==10)break a;if(h==13)break a;if(h==133)break a;if((h|1)==8233)break a;}return (-1);}d.bC(a.hE,0);return a.i.d(b,c,d);}
function Z1(a,b){var c;c=!b.ez(a.hE)?0:1;b.bC(a.hE,(-1));return c;}
function AHK(a){return B(377);}
function E8(){var a=this;C.call(a);a.M=null;a.hB=0;a.eR=0;a.vV=0;a.nR=0;a.ex=0;a.r=0;a.uc=0;a.ih=null;a.fV=null;a.y=0;a.j0=0;a.j9=0;a.ja=0;a.rB=null;}
var A2M=null;var A2N=null;var A2O=0;function AT2(a,b){var c=new E8();APo(c,a,b);return c;}
function APo(a,b,c){I(a);a.eR=1;a.rB=b;if((c&16)>0)b=AF_(b);else if((c&128)>0)b=AAA(b);a.M=$rt_createCharArray(b.h()+2|0);W(b.oA(),0,a.M,0,b.h());a.M.data[a.M.data.length-1|0]=0;a.M.data[a.M.data.length-2|0]=0;a.uc=a.M.data.length;a.hB=c;Dc(a);Dc(a);}
function AGB(a){return a.ex;}
function Zt(a,b){if(b>0&&b<3)a.eR=b;if(b==1)Oi(a);}
function Y3(a,b){a.hB=b;a.r=a.ex;a.fV=a.ih;a.y=a.j9+1|0;a.ja=a.j9;Dc(a);}
function AA_(a){return a.ih;}
function ALm(a){return a.ih===null?0:1;}
function YT(a){return a.fV===null?0:1;}
function AMx(a){Dc(a);return a.nR;}
function AAb(a){var b;b=a.ih;Dc(a);return b;}
function Xy(a){return a.r;}
function ACC(a){return a.nR;}
function AAA(b){return b;}
function Oi(a){a.r=a.ex;a.fV=a.ih;a.y=a.ja;a.ja=a.j9;Dc(a);}
function Dc(a){var b,c,d,e,f,g,h,$$je;a.nR=a.ex;a.ex=a.r;a.ih=a.fV;a.j9=a.ja;a.ja=a.y;while(true){b=0;a.r=a.y>=a.M.data.length?0:Gx(a);a.fV=null;if(a.eR==4){if(a.r!=92)return;a.r=a.y>=a.M.data.length?0:a.M.data[Bm(a)];switch(a.r){case 69:break;default:a.r=92;a.y=a.j0;return;}a.eR=a.vV;a.r=a.y>(a.M.data.length-2|0)?0:Gx(a);}a:{if(a.r!=92){if(a.eR==1)switch(a.r){case 36:a.r=(-536870876);break a;case 40:if(a.M.data[a.y]!=63){a.r=(-2147483608);break a;}Bm(a);c=a.M.data[a.y];d=0;while(true){b:{if(d){d=0;switch(c)
{case 33:break;case 61:a.r=(-134217688);Bm(a);break b;default:F(Bs(B(93),a.b(),a.y));}a.r=(-67108824);Bm(a);}else{switch(c){case 33:break;case 60:Bm(a);c=a.M.data[a.y];d=1;break b;case 61:a.r=(-536870872);Bm(a);break b;case 62:a.r=(-33554392);Bm(a);break b;default:a.r=Uy(a);if(a.r<256){a.hB=a.r;a.r=a.r<<16;a.r=(-1073741784)|a.r;break b;}a.r=a.r&255;a.hB=a.r;a.r=a.r<<16;a.r=(-16777176)|a.r;break b;}a.r=(-268435416);Bm(a);}}if(!d)break;}break a;case 41:a.r=(-536870871);break a;case 42:case 43:case 63:e=a.y>=a.M.data.length
?42:a.M.data[a.y];switch(e){case 43:a.r=a.r|(-2147483648);Bm(a);break a;case 63:a.r=a.r|(-1073741824);Bm(a);break a;default:}a.r=a.r|(-536870912);break a;case 46:a.r=(-536870866);break a;case 91:a.r=(-536870821);a.lT(2);break a;case 93:if(a.eR!=2)break a;a.r=(-536870819);break a;case 94:a.r=(-536870818);break a;case 123:a.fV=Tu(a,a.r);break a;case 124:a.r=(-536870788);break a;default:}else if(a.eR==2)switch(a.r){case 38:a.r=(-536870874);break a;case 45:a.r=(-536870867);break a;case 91:a.r=(-536870821);break a;case 93:a.r
=(-536870819);break a;case 94:a.r=(-536870818);break a;default:}}else{f=a.y>=(a.M.data.length-2|0)?(-1):Gx(a);c:{a.r=f;switch(a.r){case -1:F(Bs(B(93),a.b(),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.r
=QI(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eR!=1)break a;a.r=(-2147483648)|a.r;break a;case 65:a.r=(-2147483583);break a;case 66:a.r=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:F(Bs(B(93),a.b(),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fV=IM(EQ(a.M,
a.j0,1),0);a.r=0;break a;case 71:a.r=(-2147483577);break a;case 80:case 112:break c;case 81:a.vV=a.eR;a.eR=4;b=1;break a;case 90:a.r=(-2147483558);break a;case 97:a.r=7;break a;case 98:a.r=(-2147483550);break a;case 99:if(a.y>=(a.M.data.length-2|0))F(Bs(B(93),a.b(),a.y));a.r=a.M.data[Bm(a)]&31;break a;case 101:a.r=27;break a;case 102:a.r=12;break a;case 110:a.r=10;break a;case 114:a.r=13;break a;case 116:a.r=9;break a;case 117:a.r=H2(a,4);break a;case 120:a.r=H2(a,2);break a;case 122:a.r=(-2147483526);break a;default:}break a;}g
=Qi(a);h=0;if(a.r==80)h=1;try{a.fV=IM(g,h);}catch($$e){$$je=P($$e);if($$je instanceof Hc){F(Bs(B(93),a.b(),a.y));}else{throw $$e;}}a.r=0;}}if(b)continue;else break;}}
function Qi(a){var b,c,d;b=Gb(10);if(a.y<(a.M.data.length-2|0)){if(a.M.data[a.y]!=123)return J().a(B(556)).a(EQ(a.M,Bm(a),1)).b();Bm(a);c=0;a:{while(a.y<(a.M.data.length-2|0)){c=a.M.data[Bm(a)];if(c==125)break a;b.cc(c);}}if(c!=125)F(Bs(B(93),a.b(),a.y));}if(!b.h())F(Bs(B(93),a.b(),a.y));d=b.b();if(d.h()==1)return J().a(B(556)).a(d).b();b:{c:{if(d.h()>3){if(d.eL(B(556)))break c;if(d.eL(B(557)))break c;}break b;}d=d.eD(2);}return d;}
function Tu(a,b){var c,d,e,f,$$je;c=Gb(4);d=(-1);e=2147483647;a:{while(true){if(a.y>=a.M.data.length)break a;b=a.M.data[Bm(a)];if(b==125)break a;if(b==44&&d<0)try{d=EG(c.b(),10);c.x4(0,c.h());continue;}catch($$e){$$je=P($$e);if($$je instanceof Cm){break;}else{throw $$e;}}c.cc(b&65535);}F(Bs(B(93),a.b(),a.y));}if(b!=125)F(Bs(B(93),a.b(),a.y));if(c.h()>0)b:{try{e=EG(c.b(),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=P($$e);if($$je instanceof Cm){}else{throw $$e;}}F(Bs(B(93),a.b(),a.y));}else if(d<0)F(Bs(B(93),
a.b(),a.y));if((d|e|(e-d|0))<0)F(Bs(B(93),a.b(),a.y));f=a.y>=a.M.data.length?42:a.M.data[a.y];c:{switch(f){case 43:a.r=(-2147483525);Bm(a);break c;case 63:a.r=(-1073741701);Bm(a);break c;default:}a.r=(-536870789);}return AVE(d,e);}
function ADk(a){return a.rB;}
function AEX(a){return !a.ex&&!a.r&&a.y==a.uc&&!a.jz()?1:0;}
function FR(b){return b<0?0:1;}
function AQY(a){return !a.b9()&&!a.jz()&&FR(a.ex)?1:0;}
function Yu(a){return a.ex<=56319&&a.ex>=55296?1:0;}
function AMo(a){return a.ex<=57343&&a.ex>=56320?1:0;}
function IU(b){return b<=56319&&b>=55296?1:0;}
function HG(b){return b<=57343&&b>=56320?1:0;}
function H2(a,b){var c,d,e,f,$$je;c=Gb(b);d=a.M.data.length-2|0;e=0;while(true){f=BM(e,b);if(f>=0)break;if(a.y>=d)break;c.cc(a.M.data[Bm(a)]);e=e+1|0;}if(!f)a:{try{f=EG(c.b(),16);}catch($$e){$$je=P($$e);if($$je instanceof Cm){break a;}else{throw $$e;}}return f;}F(Bs(B(93),a.b(),a.y));}
function QI(a){var b,c,d,e,f;b=3;c=1;d=a.M.data.length-2|0;e=Jv(a.M.data[a.y],8);switch(e){case -1:break;default:if(e>3)b=2;Bm(a);a:{while(true){if(c>=b)break a;if(a.y>=d)break a;f=Jv(a.M.data[a.y],8);if(f<0)break;e=(e*8|0)+f|0;Bm(a);c=c+1|0;}}return e;}F(Bs(B(93),a.b(),a.y));}
function Uy(a){var b,c,d;b=1;c=a.hB;a:while(true){if(a.y>=a.M.data.length)F(Bs(B(93),a.b(),a.y));b:{c:{d=a.M.data[a.y];switch(d){case 41:Bm(a);return c|256;case 45:if(!b)F(Bs(B(93),a.b(),a.y));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Bm(a);}Bm(a);return c;}
function Bm(a){a.j0=a.y;if(a.hB&4)Lk(a);else a.y=a.y+1|0;return a.j0;}
function Lk(a){var b;b=a.M.data.length-2|0;a.y=a.y+1|0;a:while(true){if(a.y<b&&Rm(a.M.data[a.y])){a.y=a.y+1|0;continue;}if(a.y>=b)break;if(a.M.data[a.y]!=35)break;a.y=a.y+1|0;while(true){if(a.y>=b)continue a;if(N8(a,a.M.data[a.y]))continue a;a.y=a.y+1|0;}}return a.y;}
function N8(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function S5(b){return A2M.Gt(b);}
function AA1(b){var c,d,e,f,g,h,i;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;if(!f){g=$rt_createIntArray(2);h=g.data;h[0]=d;h[1]=e;}else{i=4519+f|0;g=$rt_createIntArray(3);h=g.data;h[0]=d;h[1]=e;h[2]=i;}return g;}return null;}
function AHh(b){var c;c=A2N.cC(b);return c==A2O?0:1;}
function AKU(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function Gx(a){var b,c,d;b=a.M.data[Bm(a)];if(BP(b)){c=a.j0+1|0;if(c<a.M.data.length){d=a.M.data[c];if(B_(d)){Bm(a);return C9(b,d);}}}return b;}
function Yp(a){return a.j9;}
function Nt(){O.call(this);}
function ATa(){var a=new Nt();AQ3(a);return a;}
function AQ3(a){Bc(a);}
function AQo(a){return B9().bL(65279,65279).bL(65520,65533);}
function Pc(){F8.call(this);}
function ASC(){var a=new Pc();AP4(a);return a;}
function AP4(a){OR(a);}
function X2(a){var b;b=OI(a).f0(1);b.bi=1;return b;}
function MX(){BU.call(this);}
function O2(){var a=this;C.call(a);a.vx=null;a.o_=null;a.w2=Long_ZERO;a.xw=0.0;a.tS=0.0;a.tf=0.0;}
function AUd(a){var b=new O2();ADj(b,a);return b;}
function ADj(a,b){I(a);a.o_=E4();a.xw=1.0;a.tS=1.0;a.tf=0.5;a.vx=b;}
function ADr(a,b){return a.yG(b,a.tS,a.tf);}
function Vh(a,b,c,d){return Rz(a,b,c,d,0);}
function Rz(a,b,c,d,e){var f,g;f=a.w2;a.w2=Long_add(f,Long_fromInt(1));g=ARy(a.vx);g.rK(b);g.zj(d,b);g.vX(e);g.Bg(ATM(a,f,g));a.o_.Q(Hi(f),g);g.qj();return f;}
function PM(a,b,c,d){a.o_.t4(Hi(b));c.d9();}
function Rg(){FV.call(this);this.iK=null;}
function AUX(a,b,c){var d=new Rg();AJH(d,a,b,c);return d;}
function AJH(a,b,c,d){a.iK=d;UV(a,b,c);}
function ARR(a){if(a.iK===D(Ia))return ATn();if(a.iK===D(Fs))return Ri();if(a.iK===D(V))return Yt();if(a.iK===D(EL))return AUT();F(ATB(B(558)));}
function Nv(){DI.call(this);}
function Vm(a,b,c,d,e,f){var g=new Nv();W5(g,a,b,c,d,e,f);return g;}
function W5(a,b,c,d,e,f,g){Jr(a,b,c,d,e,f,g);}
function Yj(a,b,c,d,e,f){return Vm(a.ef+(b*2|0)|0,c,a.et,d,e,f);}
function AJA(a,b){var c,d,e,f;c=a.et.H.data;d=a.ef;e=b*2|0;f=(c[d+e|0]&255)<<8|a.et.H.data[(a.ef+e|0)+1|0]&255;return f<<16>>16;}
function AAs(a,b,c){var d,e,f;d=a.et.H.data;e=a.ef;f=b*2|0;d[e+f|0]=c>>8<<24>>24;a.et.H.data[(a.ef+f|0)+1|0]=c<<24>>24;}
$rt_packages([-1,"com",0,"badlogic",1,"gdx",2,"utils",2,"graphics",4,"glutils",4,"g2d",0,"badlogicgames",7,"superjumper",-1,"java",9,"util",10,"regex",9,"nio",9,"lang",-1,"org",14,"teavm",15,"libgdx",15,"classlib",17,"impl",18,"unicode"]);
$rt_metadata([C,"Object",13,0,[],0,3,0,["E_",function(){return DQ(this);},"GA",function(){T$(this);},"Ii",function(){return Cq(this);},"dY",function(){return AAP(this);},"R",function(b){return AHW(this,b);},"b",function(){return Mv(this);},"DQ",function(){return G6(this);},"qu",function(){return AGI(this);}],O,0,C,[],1,0,0,["zc",function(b){return AMt(this,b);}],Py,0,O,[],0,0,0,["V",function(){return AAS(this);}],Nc,0,O,[],0,0,0,["V",function(){return AH9(this);}],Tg,0,C,[],0,3,0,["De",function(){return AQ0(this);
},"Bc",function(b){AOd(this,b);},"DE",function(){return AEF(this);},"yp",function(){return ARW(this);},"Ab",function(){return AQt(this);},"AN",function(){return AFV(this);},"yy",function(){return AOy(this);}],Ke,0,C,[],3,3,0,0,E6,0,C,[Ke],3,3,0,0,Ed,0,C,[E6],1,3,0,["lP",function(b){return AKx(this,b);}],C$,0,Ed,[],0,3,0,["lP",function(b){return AJT(this,b);}],Nq,0,C$,[],0,3,0,["iY",function(){return AR0(this);},"ED",function(b,c){return Rn(this,b,c);},"fi",function(b,c,d){return AE4(this,b,c,d);}],IF,0,C,[],
4,0,AUn,["Fo",function(){return SA(this);},"Hc",function(){return SC(this);},"Fi",function(b){return Ks(this,b);},"xH",function(b){return TI(this,b);},"HA",function(b,c,d){return C8(this,b,c,d);},"EI",function(b,c){return HN(this,b,c);},"H5",function(b,c){return PN(this,b,c);},"EQ",function(b,c){DN(this,b,c);}],Il,0,C,[],3,3,0,0,BI,0,C,[],3,3,0,0,BC,0,C,[],3,3,0,0,Bv,0,C,[BI,BC],1,3,0,["D$",function(){return CJ(this);},"b",function(){return AD8(this);}],C2,0,Bv,[],12,3,Dd,0,CS,0,C,[BC],1,3,0,0,CT,0,CS,[BI],
0,3,Co,["b",function(){return AQj(this);},"dY",function(){return VD(this);},"R",function(b){return ARj(this,b);}],Dx,0,C,[],0,0,ATE,0,Bf,0,C,[],1,0,MJ,["cM",function(b,c,d){return ER(this,b,c,d);},"cP",function(b,c,d,e){return EY(this,b,c,d,e);},"qH",function(b){AAc(this,b);},"ii",function(){return Y2(this);},"xk",function(){return AIC(this);},"b",function(){return AMr(this);},"BJ",function(){return ANG(this);},"T",function(b){JT(this,b);},"cn",function(b){return APk(this,b);},"gG",function(){return AQV(this);
},"ev",function(){KG(this);}],Bl,"JointSet",11,Bf,[],0,0,0,["d",function(b,c,d){return ADQ(this,b,c,d);},"T",function(b){AKL(this,b);},"B",function(){return AFO(this);},"cn",function(b){return AG6(this,b);},"ba",function(b){return ALG(this,b);},"ev",function(){ZJ(this);}],D2,"SingleSet",11,Bl,[],0,0,0,["d",function(b,c,d){return Wi(this,b,c,d);},"cM",function(b,c,d){return AHv(this,b,c,d);},"cP",function(b,c,d,e){return AM8(this,b,c,d,e);},"cn",function(b){return AGX(this,b);},"gG",function(){return AKO(this);
},"ev",function(){AQ1(this);}],Jd,0,C,[],3,3,0,0,D8,0,C,[Jd],0,3,Kd,0,F5,0,O,[],0,0,0,["V",function(){return MH(this);}],K4,"BackReferencedSingleSet",11,D2,[],0,0,0,["cM",function(b,c,d){return ACY(this,b,c,d);},"cP",function(b,c,d,e){return AR_(this,b,c,d,e);},"gG",function(){return ZX(this);}],BO,0,C,[],3,3,0,0,K5,0,C,[BO],1,3,0,0,Fu,0,O,[],0,0,0,["V",function(){return PA(this);}],SP,0,Fu,[],0,0,0,["V",function(){return AIR(this);}],Cl,0,Bv,[],12,3,Ey,0,Bo,0,Bf,[],1,0,0,["d",function(b,c,d){return ARI(this,
b,c,d);},"cr",function(){return AOm(this);},"ba",function(b){return AFy(this,b);}],Lf,"CISequenceSet",11,Bo,[],0,0,0,["bO",function(b,c){return ANd(this,b,c);},"B",function(){return AO0(this);}],Et,0,C,[],3,3,0,0,CW,0,C,[],0,3,0,["l5",function(){return ACM(this);}],D0,0,CW,[],0,3,0,0,Ew,0,D0,[],0,3,0,0,Po,0,C,[],0,3,0,["BQ",function(b){return AAE(this,b);},"F8",function(b){H9(this,b);},"DV",function(b,c,d,e,f,g,h){Iq(this,b,c,d,e,f,g,h);},"Gz",function(b){RA(this,b);},"zy",function(b){return APC(this,b);},"xC",
function(b){return AEG(this,b);},"nL",function(b){AC1(this,b);},"oH",function(b){Cb(this,b);},"pL",function(b){return EC(this,b);},"oP",function(b){return EU(this,b);}],Bz,0,CW,[],0,3,0,0,Bh,0,Bz,[],0,3,0,0,Dh,0,Bh,[],0,3,0,0,T_,0,Dh,[],0,3,0,0,Hc,0,Bh,[],0,3,0,0,Ik,0,C,[],0,3,Ib,0,GH,0,C,[],1,3,0,["G0",function(b){return Ti(this,b);},"CZ",function(b){APy(this,b);},"HC",function(b){return QA(this,b);},"y4",function(b){AEh(this,b);},"EV",function(b,c,d){return NO(this,b,c,d);},"I1",function(b){return Pe(this,
b);},"yY",function(b){return AIS(this,b);}],HO,0,C,[],3,3,0,0,Px,0,C,[HO],0,3,0,["yJ",function(){ADF(this);},"FP",function(){Sn(this);},"Gs",function(){HS(this);},"Hy",function(){Us(this);},"pO",function(b,c){AB$(this,b,c);},"kx",function(b,c){AJU(this,b,c);},"l2",function(){return AP8(this);},"I4",function(){K9(this);}],DF,0,C,[],3,3,0,0,Ia,0,C,[DF],0,3,0,0,Ep,"CIBackReferenceSet",11,Bl,[],0,0,0,["d",function(b,c,d){return Xb(this,b,c,d);},"T",function(b){ALM(this,b);},"iB",function(b){return AAu(this,b);},
"B",function(){return WP(this);},"ba",function(b){return AMj(this,b);}]]);
$rt_metadata([Ov,"UCIBackReferenceSet",11,Ep,[],0,0,0,["d",function(b,c,d){return AHq(this,b,c,d);},"B",function(){return YI(this);}],Io,0,C,[],4,3,AW6,0,FS,0,C,[],4,3,E0,0,DO,0,Bv,[],12,3,KY,0,OY,0,O,[],0,0,0,["V",function(){return ACX(this);}],Is,0,C,[],3,3,0,0,B$,0,C,[],3,3,0,0,G5,0,C,[B$],3,3,0,0,Cr,0,Bf,[],1,0,0,["ma",function(){return ARV(this);},"cn",function(b){return AM_(this,b);},"ba",function(b){return APJ(this,b);},"ev",function(){AIb(this);}],O8,"DotAllQuantifierSet",11,Cr,[],0,0,0,["d",function(b,
c,d){return ARS(this,b,c,d);},"cM",function(b,c,d){return AOc(this,b,c,d);},"B",function(){return ALn(this);}],BR,"FSet",11,Bf,[],0,0,GW,["d",function(b,c,d){return XN(this,b,c,d);},"iF",function(){return AH2(this);},"B",function(){return AEw(this);},"ba",function(b){return Yy(this,b);}],H4,"BehindFSet",11,BR,[],0,0,0,["d",function(b,c,d){return YS(this,b,c,d);},"B",function(){return AO6(this);}],Cs,0,C,[],0,3,0,0,KO,"LowHighSurrogateRangeSet",11,Bl,[],0,0,0,["T",function(b){ACK(this,b);},"d",function(b,c,d)
{return AER(this,b,c,d);},"B",function(){return AKV(this);}],Jt,0,C,[],3,3,0,0,FU,0,C,[E6,Jt],1,3,0,0,Un,0,FU,[],0,3,0,["rN",function(b,c,d){AJ2(this,b,c,d);},"e4",function(b){QN(this,b);},"o7",function(){return V4(this);}],BZ,"GroupQuantifierSet",11,Cr,[],0,0,0,["d",function(b,c,d){return Wh(this,b,c,d);},"B",function(){return AE5(this);}],O6,"ReluctantGroupQuantifierSet",11,BZ,[],0,0,0,["d",function(b,c,d){return ARg(this,b,c,d);}],Ce,0,C,[],0,3,0,0,QT,0,D0,[],0,3,0,0,Ni,"PosPlusGroupQuantifierSet",11,BZ,
[],0,0,0,["d",function(b,c,d){return AIG(this,b,c,d);}],DX,0,C,[BC,Et],0,0,0,["GL",function(b){return Je(this,b);},"lY",function(b,c){return JI(this,b,c);},"IO",function(b){return LZ(this,b);},"ra",function(b,c){return Xd(this,b,c);},"xA",function(b,c,d){return AE8(this,b,c,d);},"FI",function(b){return Sx(this,b);},"tr",function(b,c){return Qn(this,b,c);},"GW",function(b){return IH(this,b);},"pV",function(b,c){return J9(this,b,c);},"IG",function(b){return OW(this,b);},"sj",function(b,c){return NE(this,b,c);
},"e4",function(b){Hr(this,b);},"b",function(){return I5(this);},"h",function(){return Ir(this);},"g",function(b){return KX(this,b);},"vZ",function(b,c,d){return L9(this,b,c,d);},"qB",function(b,c,d,e){return P9(this,b,c,d,e);},"Ij",function(b){return UJ(this,b);},"od",function(b,c,d){return J2(this,b,c,d);},"pg",function(b,c,d,e){return Hd(this,b,c,d,e);},"GH",function(b){return Ji(this,b);},"em",function(b,c){return Sb(this,b,c);},"uo",function(b){S1(this,b);},"Ff",function(b){return Tl(this,b);},"Fm",function(b,
c){return TL(this,b,c);},"FG",function(b,c){BY(this,b,c);},"c2",function(b,c){return MK(this,b,c);}],DY,0,C,[],3,3,0,0,L2,0,DX,[DY],0,3,0,["AQ",function(b){return AA7(this,b);},"Bm",function(b){return AOf(this,b);},"DM",function(b,c,d){return ARf(this,b,c,d);},"Ca",function(b){return ABW(this,b);},"zX",function(b,c,d){return Xr(this,b,c,d);},"rM",function(b){return APd(this,b);},"AH",function(b,c,d,e){return AHM(this,b,c,d,e);},"Ba",function(b,c,d,e){return AH_(this,b,c,d,e);},"Dw",function(b,c){return AP5(this,
b,c);},"zq",function(b,c){return AMX(this,b,c);},"pg",function(b,c,d,e){return ACT(this,b,c,d,e);},"od",function(b,c,d){return Yv(this,b,c,d);},"qB",function(b,c,d,e){return ADs(this,b,c,d,e);},"vZ",function(b,c,d){return AMh(this,b,c,d);},"g",function(b){return VE(this,b);},"h",function(){return ARM(this);},"b",function(){return YO(this);},"e4",function(b){Zf(this,b);},"pV",function(b,c){return AOk(this,b,c);},"lY",function(b,c){return V1(this,b,c);}],BT,0,C,[],1,3,0,["GU",function(){return CA(this);},"GB",
function(){return CD(this);},"DY",function(b){return Bw(this,b);},"Ha",function(){return Bq(this);},"FN",function(b){return BF(this,b);},"EY",function(){return B4(this);},"IX",function(){return BJ(this);},"Fw",function(){return X(this);},"EW",function(){return Ci(this);}],JN,0,C,[],4,3,ACD,0,Ec,0,C,[],1,0,0,0,M,0,Ec,[],1,0,HA,["bQ",function(){return Yq(this);},"cv",function(){return Xf(this);},"xu",function(){return AHX(this);},"tY",function(){return AEd(this);},"jq",function(){return AOa(this);},"AL",function()
{return XE(this);},"kf",function(){return YC(this);},"go",function(){return AQS(this);},"f0",function(b){return APh(this,b);},"hV",function(){return ACO(this);}],PH,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",11,M,[],0,0,0,["s",function(b){return AQ6(this,b);}],Fh,0,C,[],4,0,AVV,["GI",function(b){return TH(this,b);}],I$,0,C,[],3,3,0,0,FE,0,O,[],0,0,0,["V",function(){return PL(this);}],PC,0,O,[],0,0,0,["V",function(){return ADy(this);}],Dk,"DecomposedCharSet",11,Bl,[],0,0,0,["T",function(b){AQX(this,
b);},"d",function(b,c,d){return AKk(this,b,c,d);},"AE",function(){return GF(this);},"B",function(){return AJZ(this);},"qg",function(b,c,d){return AFl(this,b,c,d);},"cn",function(b){return AGf(this,b);},"ba",function(b){return ALU(this,b);}],QO,"CIDecomposedCharSet",11,Dk,[],0,0,0,0,Pk,0,C,[BO],1,3,0,0,Du,0,C,[B$],0,3,P5,["EM",function(b,c,d){IW(this,b,c,d);},"uZ",function(b){V5(this,b);},"gA",function(){return AA2(this);},"i3",function(){return AFs(this);},"i5",function(){return AIY(this);},"jR",function(){
return ANt(this);},"bE",function(){return ADZ(this);},"by",function(){return AH5(this);},"d9",function(){Zu(this);},"Ck",function(b,c,d,e,f,g,h){ABE(this,b,c,d,e,f,g,h);},"xg",function(b,c,d,e,f,g,h,i,j){ALu(this,b,c,d,e,f,g,h,i,j);},"hw",function(){return AMU(this);},"Eu",function(b){return Uk(this,b);},"F$",function(b,c,d,e,f,g,h,i,j){JR(this,b,c,d,e,f,g,h,i,j);},"E2",function(b){Uu(this,b);}],Ul,"AheadFSet",11,BR,[],0,0,0,["d",function(b,c,d){return Z_(this,b,c,d);},"B",function(){return AFE(this);}],Jg,
0,C,[],3,3,0,0,Om,0,C,[Jg],0,3,0,["qO",function(){return AEb(this);},"bE",function(){return ARQ(this);},"by",function(){return Wz(this);},"C4",function(){return AIA(this);},"s0",function(b){return AIc(this,b);},"bA",function(){AO2(this);}],GT,"NonCapJointSet",11,Bl,[],0,0,0,["d",function(b,c,d){return AKl(this,b,c,d);},"B",function(){return AHl(this);},"ba",function(b){return AMi(this,b);}],Cu,"AtomicJointSet",11,GT,[],0,0,0,["d",function(b,c,d){return AA$(this,b,c,d);},"T",function(b){ALS(this,b);},"B",function()
{return WK(this);}],KH,"PositiveLookAhead",11,Cu,[],0,0,0,["d",function(b,c,d){return AKz(this,b,c,d);},"ba",function(b){return APs(this,b);},"B",function(){return AQU(this);}],Iy,0,C,[],3,3,0,0,BA,0,C,[Iy],0,3,0,["j6",function(b,c){WT(this,b,c);},"B5",function(){ANU(this);},"h1",function(){ADz(this);}],TN,0,BA,[],0,3,0,["bA",function(){XS(this);},"c1",function(){AHd(this);},"fo",function(b){ABh(this,b);},"h1",function(){AM5(this);}],TP,0,BA,[],0,3,0,["bA",function(){ADO(this);},"c1",function(){AL$(this);},
"fo",function(b){YD(this,b);},"h1",function(){ABr(this);}],SM,"NegativeLookAhead",11,Cu,[],0,0,0,["d",function(b,c,d){return Yl(this,b,c,d);},"ba",function(b){return AOB(this,b);},"B",function(){return ADB(this);}],TO,0,BA,[],0,3,0,["bA",function(){WV(this);},"c1",function(){ADC(this);},"fo",function(b){AQD(this,b);},"h1",function(){ANl(this);}]]);
$rt_metadata([TM,0,BA,[],0,3,0,["bA",function(){XB(this);},"c1",function(){AG3(this);},"fo",function(b){AB6(this,b);},"h1",function(){AJk(this);}],I8,0,C,[],3,3,0,0,HU,0,C,[I8],0,3,0,["tQ",function(){return Vw(this);},"wo",function(){Z$(this);},"Dc",function(){return AHt(this);},"wn",function(){return AFv(this);},"bE",function(){return AGo(this);},"by",function(){return AAn(this);},"gA",function(){return ACr(this);},"Dx",function(){return W2(this);},"kA",function(){return ABi(this);},"AX",function(){return AIL(this);
},"yT",function(b){AAT(this,b);},"b",function(){return AIx(this);}],Gt,0,C,[],0,3,D1,0,FN,0,Bh,[],0,3,0,0,Uz,0,FN,[],0,3,0,0,Qj,0,C,[],4,3,0,0,Ip,0,C,[],4,0,AUz,["I7",function(b,c,d,e,f,g){J7(this,b,c,d,e,f,g);},"AA",function(b){return Ot(this,b);},"Gl",function(b){H_(this,b);},"H3",function(b,c,d,e,f,g,h,i){return Pf(this,b,c,d,e,f,g,h,i);}],BU,0,C,[BO],1,3,0,0,Sp,0,BU,[],1,3,0,0,Q1,0,C,[],0,3,0,0,FJ,0,C,[],0,0,ASH,0,Eo,0,Ew,[],0,3,0,0,C1,0,Eo,[],0,3,0,0,LG,0,O,[],0,0,0,["V",function(){return ABu(this);}],C6,
0,C,[],3,3,0,0,EJ,0,C,[C6],3,3,0,0,CY,0,C,[EJ],1,3,0,["t1",function(b){return ACc(this,b);}],Sr,0,Ed,[],0,3,0,["fi",function(b,c,d){return AQ9(this,b,c,d);},"iY",function(){return ACd(this);}],R3,0,C,[],4,3,0,0,Dg,0,BT,[BI],1,3,0,0,R4,0,BA,[],0,3,0,["fo",function(b){AQz(this,b);}],BX,"LeafQuantifierSet",11,Cr,[],0,0,0,["d",function(b,c,d){return VN(this,b,c,d);},"B",function(){return ZG(this);}],Db,"AltQuantifierSet",11,BX,[],0,0,0,["d",function(b,c,d){return AHC(this,b,c,d);},"T",function(b){ASv(this,b);}],SV,
"PossessiveAltQuantifierSet",11,Db,[],0,0,0,["d",function(b,c,d){return AIB(this,b,c,d);}],IR,0,C,[],3,3,0,0,MT,0,C,[],4,0,0,0,KS,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",11,M,[],0,0,0,["s",function(b){return AAQ(this,b);}],Mt,0,C,[],4,3,0,0,FA,0,C,[],3,3,0,0,P6,0,C,[FA],0,3,0,["mq",function(){AFc(this);}],GU,0,C,[BO],3,3,0,0,OB,0,C,[GU],0,3,0,["mS",function(){AQ4(this);},"Dz",function(){return ACU(this);}],GN,0,C,[],3,0,0,0,EW,0,C,[BO],3,3,0,0,QH,0,C,[GN,EW],0,0,0,["sR",function(b){AFG(this,b);
},"i8",function(b){AM7(this,b);},"q9",function(b){return ADf(this,b);}],Go,0,F5,[],0,0,0,["V",function(){return NZ(this);}],G0,0,Go,[],0,0,0,["V",function(){return Kw(this);}],O$,0,G0,[],0,0,0,["V",function(){return AIf(this);}],RR,0,O,[],0,0,0,["V",function(){return APf(this);}],OE,"PositiveLookBehind",11,Cu,[],0,0,0,["d",function(b,c,d){return ZA(this,b,c,d);},"ba",function(b){return ASn(this,b);},"B",function(){return AJV(this);}],Pa,"SequenceSet",11,Bo,[],0,0,0,["bO",function(b,c){return AA5(this,b,c);},
"cM",function(b,c,d){return X8(this,b,c,d);},"cP",function(b,c,d,e){return ADp(this,b,c,d,e);},"B",function(){return AKs(this);},"cn",function(b){return AEt(this,b);},"AR",function(b,c,d){return APA(this,b,c,d);},"xz",function(b,c,d){return AOl(this,b,c,d);},"pW",function(b,c){return AES(this,b,c);}],GA,0,C,[],0,3,CZ,0,IL,0,C,[DY,Et],0,3,AEY,["Eg",function(b){FC(this,b);},"Gf",function(){SF(this);},"EG",function(b){BV(this,b);},"H$",function(b){Hu(this,b);},"b",function(){return WJ(this);},"mM",function(b){
return ALy(this,b);},"wH",function(b){return AMN(this,b);},"yv",function(b,c){return AAq(this,b,c);},"Cw",function(b,c,d){return W4(this,b,c,d);},"z5",function(b){return ADL(this,b);}],Hv,0,C,[],3,3,0,0,Tq,0,Bh,[],0,3,0,0,Ev,"AltGroupQuantifierSet",11,BZ,[],0,0,0,["d",function(b,c,d){return ANW(this,b,c,d);},"T",function(b){AP0(this,b);}],NM,0,C$,[Hv],0,3,0,["lP",function(b){return Qx(this,b);},"ES",function(b){return Lm(this,b);},"Hm",function(){return Gz(this);}],F_,0,C,[],3,0,0,0,Ux,0,C,[F_],4,0,0,["gS",
function(){AIF(this);},"g4",function(){AHn(this);}]]);
$rt_metadata([GE,0,C,[],3,3,0,0,JD,0,C,[GE],0,0,0,["bC",function(b,c){APO(this,b,c);},"ez",function(b){return AHc(this,b);},"l4",function(){return Vs(this);},"k2",function(b){return AGw(this,b);},"eK",function(b,c){AAt(this,b,c);},"pG",function(b,c){X$(this,b,c);},"g7",function(b){return ALv(this,b);},"k$",function(b){return ALR(this,b);},"r7",function(b){return Xw(this,b);},"Bq",function(b){return AF9(this,b);},"r1",function(){return ALA(this);},"iG",function(b){return ZR(this,b);},"yW",function(){AHE(this);
},"vB",function(b){return V_(this,b);},"fE",function(b,c){ZF(this,b,c);},"FU",function(b){IJ(this,b);},"xQ",function(){AQb(this);},"xq",function(){return AQd(this);},"nU",function(b,c,d){ARi(this,b,c,d);},"eE",function(){AAR(this);},"I9",function(b,c){TA(this,b,c);},"yP",function(b){AMY(this,b);},"dH",function(){return Y1(this);},"L",function(){return AHD(this);},"lT",function(b){ABA(this,b);},"sK",function(){return ADh(this);},"hD",function(){return AEp(this);},"iM",function(){return V8(this);},"z6",function()
{return Xm(this);}],Mx,"UCIRangeSet",11,Bo,[],0,0,0,["bO",function(b,c){return AGe(this,b,c);},"B",function(){return YE(this);}],GQ,"BitmapFont$Glyph",6,C,[],0,3,0,["Cp",function(b){return AGC(this,b);},"x7",function(b,c){ALo(this,b,c);},"b",function(){return AD3(this);}],KF,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",11,M,[],0,0,0,["s",function(b){return ARB(this,b);}],GZ,0,C,[B$],1,3,0,["g6",function(){AIk(this);},"yH",function(b,c,d){AK1(this,b,c,d);},"A1",function(b,c,d){VW(this,b,c,d);},"Dm",function()
{APU(this);}],JK,"Texture",4,GZ,[],0,3,EN,["zA",function(b){APH(this,b);},"bE",function(){return AJ4(this);},"by",function(){return AOZ(this);},"d9",function(){AFn(this);},"b",function(){return AIV(this);}],It,0,Bh,[],0,3,0,0,Mu,0,C,[],4,3,0,0,Fr,0,C,[BI],1,3,0,0,ES,0,C,[],0,3,Fl,0,E1,0,C,[BC,BI],0,3,K2,0,CU,0,Bh,[],0,3,0,0,R2,0,CU,[],0,3,0,0,UN,0,Bh,[],0,3,0,0,Qz,"NegativeLookBehind",11,Cu,[],0,0,0,["d",function(b,c,d){return VL(this,b,c,d);},"ba",function(b){return AMF(this,b);},"B",function(){return YV(this);
}],FT,0,Dg,[],1,0,0,["DI",function(){return AOR(this);},"fG",function(b){return AIU(this,b);},"cC",function(b){return AHL(this,b);},"rz",function(b,c){return AO$(this,b,c);},"cb",function(){return AG9(this);}],Eg,0,FT,[],1,0,0,["gs",function(){return AGN(this);}],LQ,0,Eg,[],0,0,0,["qb",function(b){return ADb(this,b);},"o3",function(b,c){Vg(this,b,c);}],S_,"BackReferenceSet",11,Ep,[],0,0,0,["d",function(b,c,d){return AAf(this,b,c,d);},"cM",function(b,c,d){return APn(this,b,c,d);},"cP",function(b,c,d,e){return WI(this,
b,c,d,e);},"cn",function(b){return AIn(this,b);},"B",function(){return APW(this);}],L_,"DotQuantifierSet",11,Cr,[],0,0,0,["d",function(b,c,d){return AKP(this,b,c,d);},"cM",function(b,c,d){return VB(this,b,c,d);},"H9",function(b,c,d){return JA(this,b,c,d);},"Gv",function(b,c,d){return Te(this,b,c,d);},"B",function(){return AM1(this);}],Jj,0,BT,[BI],1,3,0,0,RW,0,O,[],0,0,0,["V",function(){return AGx(this);}],FH,0,C,[],4,3,Uo,0,V,"Color",4,C,[],0,3,EM,["qd",function(b){return XH(this,b);},"Am",function(){return ANn(this);
},"s$",function(){return APz(this);},"b",function(){return AAF(this);}],GB,0,C,[],4,3,0,["FD",function(){return Nw(this);}],Gw,0,C,[],0,0,0,["j$",function(){return WU(this);},"Gm",function(){Nb(this);},"D7",function(){Q6(this);}],Gu,0,C,[],3,3,0,0,OD,0,Gw,[Gu],0,0,0,["ks",function(){return AMG(this);}],S6,"UnifiedQuantifierSet",11,BX,[],0,0,0,["d",function(b,c,d){return ARz(this,b,c,d);},"cM",function(b,c,d){return AI$(this,b,c,d);}],Dr,"ShaderProgram",5,C,[B$],0,3,AWV,["DR",function(b,c){H1(this,b,c);},"IZ",
function(b,c){return Km(this,b,c);},"AK",function(){return AFk(this);},"ID",function(b){return SN(this,b);},"zd",function(){return AOe(this);},"uM",function(){return APL(this);},"FM",function(b){return OC(this,b);},"IR",function(b){return Hm(this,b);},"xL",function(b,c){return AG7(this,b,c);},"t7",function(b,c){AE0(this,b,c);},"wh",function(b,c){ACl(this,b,c);},"AT",function(b,c,d){W8(this,b,c,d);},"Cy",function(b,c,d){AIw(this,b,c,d);},"eu",function(b,c,d,e,f,g){ARv(this,b,c,d,e,f,g);},"b3",function(){W0(this);
},"b7",function(){ACy(this);},"no",function(b){Yb(this,b);},"kR",function(b){AGZ(this,b);},"gr",function(b){ALj(this,b);},"Fs",function(){CV(this);},"F0",function(b,c){QW(this,b,c);},"EH",function(){PX(this);},"HU",function(){NP(this);},"i2",function(b){return X4(this,b);}],CM,"Files$FileType",2,Bv,[],12,3,I6,0,Hf,0,C,[],3,3,0,0,S8,0,C,[Hf],0,3,0,["Dh",function(){return X3(this);},"xT",function(b){return ABv(this,b);},"B",function(){return AGp(this);},"k4",function(){return ADS(this);},"iz",function(){return AHR(this);
}],Pg,0,BU,[],1,3,0,0,CI,0,C,[],3,3,0,0,TG,0,C,[CI,BC],0,3,0,["qr",function(b){ALD(this,b);},"lU",function(b,c){AEv(this,b,c);},"E4",function(b){return ET(this,b);},"GS",function(b){return E5(this,b);},"o4",function(b){ASq(this,b);},"A_",function(b,c){WC(this,b,c);},"eY",function(b){return WN(this,b);},"jM",function(b){return ARx(this,b);},"CP",function(b){return ALa(this,b);},"e4",function(b){E_(this,b);},"Fe",function(){Eq(this);},"yg",function(b){return AKG(this,b);},"dW",function(b){AQp(this,b);},"hL",function(b)
{ARL(this,b);},"hZ",function(b){AQc(this,b);},"il",function(b){AGD(this,b);},"b9",function(){return AQy(this);}],KJ,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",11,M,[],0,0,0,["s",function(b){return ABc(this,b);}],JF,0,C,[],3,3,0,0,GL,0,C,[],1,3,0,["yC",function(b,c,d,e,f){return AJY(this,b,c,d,e,f);},"fB",function(b){return AHr(this,b);}],Nz,0,GL,[],0,3,0,["bA",function(){AAx(this);},"xo",function(b){ASd(this,b);},"wk",function(b,c,d){V9(this,b,c,d);}],EB,0,C,[B$],3,3,0,0,Nf,0,C,[EB],0,3,0,["hy",function()
{return AHB(this);},"kB",function(){return Vk(this);},"pb",function(b,c,d){AO7(this,b,c,d);},"lb",function(){return ADM(this);},"g6",function(){XO(this);},"pv",function(){AK8(this);}],Pl,0,C,[EB],0,3,0,["hy",function(){return AEA(this);},"kB",function(){return Wy(this);},"pb",function(b,c,d){AJu(this,b,c,d);},"lb",function(){return Vu(this);},"g6",function(){AQe(this);},"pv",function(){AMB(this);}],GO,0,CS,[BI],0,3,ABB,0,LI,0,C,[],0,3,0,0,CH,"CharSet",11,Bo,[],0,0,0,["cr",function(){return AFP(this);},"bO",
function(b,c){return AEa(this,b,c);},"cM",function(b,c,d){return AB4(this,b,c,d);},"cP",function(b,c,d,e){return AFX(this,b,c,d,e);},"B",function(){return APx(this);},"lq",function(){return Ym(this);},"cn",function(b){return AOT(this,b);}],Mi,0,M,[],0,0,0,["s",function(b){return ANh(this,b);}],Mo,0,M,[],0,0,0,["s",function(b){return U4(this,b);}],Mk,0,M,[],0,0,0,["s",function(b){return AMn(this,b);}]]);
$rt_metadata([Mj,0,M,[],0,0,0,["s",function(b){return AHw(this,b);}],Jh,0,C,[],3,3,0,0,Sc,0,C,[Jh],0,3,0,["pO",function(b,c){AJj(this,b,c);},"kx",function(b,c){Wa(this,b,c);}],IV,0,C,[],3,3,0,0,Ki,0,C,[IV],0,3,ATo,["nT",function(b){return AMC(this,b);},"yb",function(b){return AM9(this,b);},"nl",function(b){return AI6(this,b);},"m4",function(b){return AGE(this,b);},"wS",function(b){return Y0(this,b);},"yh",function(b){return AE_(this,b);},"GJ",function(b,c){return Lb(this,b,c);},"HQ",function(b){return Jq(this,
b);},"FO",function(b){return QC(this,b);},"Fh",function(b){return K_(this,b);},"GX",function(b){return RC(this,b);},"E7",function(b){return Ue(this,b);},"GK",function(b){PV(this,b);},"v0",function(b,c){AKg(this,b,c);},"fr",function(b){Wt(this,b);},"x8",function(b,c,d,e){AC2(this,b,c,d,e);},"Co",function(b){Zq(this,b);},"ul",function(b){AJn(this,b);},"hb",function(b){ZZ(this,b);},"sz",function(b,c,d){AIW(this,b,c,d);},"z1",function(b,c,d,e){ABY(this,b,c,d,e);},"zK",function(b){ZT(this,b);},"Bn",function(){return AJC(this);
},"op",function(b){return AG8(this,b);},"ym",function(b,c){AMa(this,b,c);},"i9",function(b,c,d,e,f,g,h,i,j){AMe(this,b,c,d,e,f,g,h,i,j);},"xV",function(b,c,d,e){AEn(this,b,c,d,e);},"sJ",function(b,c){AMA(this,b,c);},"ct",function(b,c){AOz(this,b,c);},"Ce",function(b,c,d,e){YW(this,b,c,d,e);},"dv",function(b,c,d,e){Z6(this,b,c,d,e);},"m3",function(b,c,d,e){ANu(this,b,c,d,e);},"Aj",function(b){XT(this,b);},"zn",function(){return AI3(this);},"A6",function(b){return ABV(this,b);},"td",function(b){AOC(this,b);},
"BK",function(b,c,d,e){AJB(this,b,c,d,e);},"Di",function(b){AOt(this,b);},"gM",function(){return V2(this);},"sx",function(b){ABt(this,b);},"x0",function(b,c,d,e){return ALJ(this,b,c,d,e);},"A7",function(b,c,d,e){return AIq(this,b,c,d,e);},"tT",function(b,c){return WR(this,b,c);},"m1",function(b,c,d){ALQ(this,b,c,d);},"wV",function(b){return AOS(this,b);},"An",function(b,c,d){AKo(this,b,c,d);},"Av",function(b){return VZ(this,b);},"q0",function(b,c){return ARl(this,b,c);},"xc",function(b){AOh(this,b);},"Dp",function(b,
c){AL2(this,b,c);},"mr",function(b,c,d){AL9(this,b,c,d);},"zD",function(b,c){AAh(this,b,c);},"AU",function(b,c,d,e,f){AL6(this,b,c,d,e,f);},"vD",function(b){AFJ(this,b);},"B8",function(b,c,d,e,f,g){AQZ(this,b,c,d,e,f,g);}],Ml,0,M,[],0,0,0,["s",function(b){return ADT(this,b);}],Mr,0,M,[],0,0,0,["s",function(b){return AAr(this,b);}],Mn,0,M,[],0,0,0,["s",function(b){return ABy(this,b);}],D_,0,C,[B$],3,3,0,0,Mm,0,M,[],0,0,0,["s",function(b){return AHz(this,b);}],MA,"DotSet",11,Bl,[],4,0,0,["d",function(b,c,d){return AJ1(this,
b,c,d);},"B",function(){return AAg(this);},"T",function(b){AMZ(this,b);},"ii",function(){return U2(this);},"ba",function(b){return ARG(this,b);}],Mp,0,M,[],0,0,0,["s",function(b){return APt(this,b);}],CG,0,C,[BI],0,3,R,0,KI,"CICharSet",11,Bo,[],0,0,0,["bO",function(b,c){return V6(this,b,c);},"B",function(){return AEH(this);}],Cy,"SupplCharSet",11,Bo,[],0,0,0,["bO",function(b,c){return AMk(this,b,c);},"cM",function(b,c,d){return AJo(this,b,c,d);},"cP",function(b,c,d,e){return Zd(this,b,c,d,e);},"B",function()
{return AP1(this);},"qw",function(){return VP(this);},"cn",function(b){return AL0(this,b);}],O_,0,O,[],0,0,0,["V",function(){return Ve(this);}],CX,0,C,[],1,0,0,0,Gc,0,BT,[BI,DY,Et,IR],1,3,0,["zS",function(b,c,d){return Xe(this,b,c,d);},"CD",function(b,c,d){return AR3(this,b,c,d);},"zP",function(b,c,d){return XV(this,b,c,d);},"IE",function(b){return FK(this,b);}],FG,0,Gc,[],1,0,0,["B2",function(){return Xg(this);},"cb",function(){return ARu(this);}],OL,0,FG,[],0,0,0,["ws",function(b){return AJ8(this,b);},"pn",
function(b,c){AHi(this,b,c);},"gs",function(){return AQ$(this);}],MB,0,C,[],0,3,0,0,Rk,0,C,[C6],0,3,0,["g3",function(b,c){return AD0(this,b,c);},"D9",function(b,c){HP(this,b,c);},"GC",function(b,c,d,e,f,g,h,i){Hy(this,b,c,d,e,f,g,h,i);},"Ee",function(b,c){NG(this,b,c);},"t",function(b){return AR6(this,b);},"Ew",function(b,c){return TJ(this,b,c);},"iq",function(b){return AP2(this,b);},"xS",function(b){return AFp(this,b);},"nL",function(b){AKB(this,b);},"oH",function(b){Cg(this,b);},"pL",function(b){return DL(this,
b);},"oP",function(b){return Eu(this,b);}],QK,"AbstractCharClass$LazyJavaTitleCase$1",11,M,[],0,0,0,["s",function(b){return APu(this,b);}],GX,0,C,[BC],0,3,AMl,["s8",function(b,c,d,e){return AB3(this,b,c,d,e);},"zs",function(){return ARs(this);}],UC,0,C,[JF],0,3,0,["iW",function(b){return AFw(this,b);},"Cf",function(b){return AGs(this,b);}],JH,"Coin",8,Cs,[],0,3,0,["fy",function(b){AAO(this,b);}],Jf,0,C,[],0,3,I7,0,Pp,"AbstractCharClass$LazyJavaMirrored$1",11,M,[],0,0,0,["s",function(b){return ACW(this,b);}],Di,
0,BT,[BI],1,3,0,["DC",function(b,c,d){return AGR(this,b,c,d);},"xM",function(b){return AQL(this,b);},"pa",function(b,c,d){return AOA(this,b,c,d);},"kQ",function(){return UF(this);},"IK",function(){return OS(this);}],GD,0,Di,[],1,0,0,["zO",function(){return AHY(this);},"cb",function(){return AGh(this);}],DI,0,GD,[],1,0,0,["o2",function(){return Zn(this);},"z3",function(){return ALx(this);},"gs",function(){return AEq(this);}],Ld,0,DI,[],0,0,0,["ty",function(b,c,d,e,f){return ZD(this,b,c,d,e,f);},"wu",function(b)
{return AAp(this,b);},"si",function(b,c){Zs(this,b,c);}],Oj,"AbstractCharClass$LazyJavaISOControl$1",11,M,[],0,0,0,["s",function(b){return AMD(this,b);}],CF,0,BT,[BI],1,3,0,["xK",function(b,c,d){return AII(this,b,c,d);},"y3",function(b){return AIH(this,b);},"r2",function(b,c,d){return AI2(this,b,c,d);},"kQ",function(){return Sz(this);},"IL",function(){return My(this);}],FI,0,CF,[],1,0,0,["uX",function(){return AHH(this);},"cb",function(){return AA0(this);}],DU,0,FI,[],1,0,0,["o2",function(){return Xo(this);
},"z$",function(){return ABn(this);},"gs",function(){return AKA(this);}],SY,"UEOLSet",11,Bf,[],4,0,0,["d",function(b,c,d){return AGl(this,b,c,d);},"ba",function(b){return ADg(this,b);},"B",function(){return AHf(this);}],TS,"UCICharSet",11,Bo,[],0,0,0,["bO",function(b,c){return Vb(this,b,c);},"B",function(){return AKh(this);}],QS,0,C,[C6],0,3,0,["c4",function(b){AMJ(this,b);},"yr",function(b){AEE(this,b);},"BM",function(b,c,d){Wu(this,b,c,d);},"tZ",function(b,c,d){YJ(this,b,c,d);},"t",function(b){return AQn(this,
b);},"xm",function(b,c){return AAH(this,b,c);},"vA",function(b){return ALi(this,b);},"hn",function(b,c){ABk(this,b,c);},"qi",function(){return WG(this);},"m$",function(){return ARm(this);},"wy",function(){return ASp(this);},"cj",function(){ACm(this);},"zL",function(b){return AOW(this,b);},"mV",function(b){return ABo(this,b);},"gD",function(b){WO(this,b);}],Pz,0,C,[CI],0,3,0,0,I0,"AtomicFSet",11,BR,[],0,0,0,["d",function(b,c,d){return W1(this,b,c,d);},"dV",function(){return Y9(this);},"B",function(){return ANN(this);
},"ba",function(b){return AKR(this,b);}],DB,0,Bv,[],12,3,Vl,["xl",function(){return Kg(this);}],F$,"LowSurrogateCharSet",11,Bl,[],0,0,0,["T",function(b){AKy(this,b);},"d",function(b,c,d){return Z0(this,b,c,d);},"cM",function(b,c,d){return AEk(this,b,c,d);},"cP",function(b,c,d,e){return ABg(this,b,c,d,e);},"B",function(){return AOr(this);},"cn",function(b){return WA(this,b);},"ba",function(b){return AOE(this,b);}],J5,0,C,[BO],3,3,0,0,Nx,0,C,[J5],0,3,0,["zE",function(){AOL(this);},"GM",function(){return ACh(this);
}],Dj,"CompositeGroupQuantifierSet",11,BZ,[],0,0,0,["d",function(b,c,d){return ASa(this,b,c,d);},"B",function(){return AP7(this);}],Jz,"RelCompositeGroupQuantifierSet",11,Dj,[],0,0,0,["d",function(b,c,d){return W6(this,b,c,d);}],HR,0,C,[B$],3,3,0,0,G_,0,C,[EJ],3,3,0,0,Fw,0,CY,[G_],1,3,0,["lQ",function(){return ACq(this);},"B$",function(b){return ADA(this,b);}]]);
$rt_metadata([Jl,0,C,[],3,3,0,0,LL,0,Fw,[CI,BC,Jl],0,3,0,["e4",function(b){W9(this,b);},"t",function(b){return AMg(this,b);},"bm",function(){return AKC(this);},"c3",function(b){return AP3(this,b);},"Dy",function(b,c){AFt(this,b,c);},"iq",function(b){return AMM(this,b);},"q7",function(b){return AN0(this,b);},"HL",function(b){G9(this,b);},"Ej",function(b){M6(this,b);}],Oa,0,Bh,[],0,3,0,0,De,"CompositeQuantifierSet",11,BX,[],0,0,0,["d",function(b,c,d){return XQ(this,b,c,d);},"B",function(){return Yw(this);}],JG,
0,C,[],3,3,0,0,Qq,0,C,[JG],0,3,0,["Bk",function(b){AK$(this,b);}],Cd,"SupplRangeSet",11,Bl,[],0,0,0,["d",function(b,c,d){return ACa(this,b,c,d);},"B",function(){return AQJ(this);},"s",function(b){return AC6(this,b);},"cn",function(b){return Xs(this,b);},"pq",function(){return AFU(this);},"T",function(b){AN2(this,b);},"ba",function(b){return ACt(this,b);}],N9,"RelAltGroupQuantifierSet",11,Ev,[],0,0,0,["d",function(b,c,d){return Y_(this,b,c,d);}],Br,"String",13,C,[BC,BI,Et],0,3,IO,["g",function(b){return XK(this,
b);},"h",function(){return ADe(this);},"b9",function(){return AFK(this);},"Bo",function(b,c,d,e){AB7(this,b,c,d,e);},"v8",function(b,c){return AK9(this,b,c);},"eL",function(b){return AFS(this,b);},"gF",function(b){return AB_(this,b);},"eg",function(b,c){return AJJ(this,b,c);},"w7",function(b){return AB9(this,b);},"it",function(b,c){return XR(this,b,c);},"oj",function(b){return AE7(this,b);},"o0",function(b,c){return ABz(this,b,c);},"zU",function(b){return AKu(this,b);},"Do",function(b,c){return ABX(this,b,c);
},"c2",function(b,c){return Wj(this,b,c);},"eD",function(b){return AFa(this,b);},"em",function(b,c){return ACj(this,b,c);},"yI",function(b,c){return API(this,b,c);},"y6",function(){return AGk(this);},"b",function(){return Za(this);},"oA",function(){return AFQ(this);},"R",function(b){return APX(this,b);},"dY",function(){return AJW(this);},"wR",function(b){return AGK(this,b);},"qD",function(b,c){return APN(this,b,c);},"x9",function(b,c){return ACB(this,b,c);}],Dt,0,C,[BO],3,3,0,0,HW,0,C,[Dt],3,3,0,0,C4,0,Cs,[],
0,3,0,0,Oo,0,C4,[],0,3,0,["fy",function(b){AJI(this,b);},"zB",function(){ALX(this);},"sS",function(){AG_(this);},"zG",function(){AHy(this);}],L4,"FSet$PossessiveFSet",11,Bf,[],0,0,0,["d",function(b,c,d){return AGc(this,b,c,d);},"B",function(){return AKw(this);},"ba",function(b){return AKJ(this,b);}],Fq,0,C,[],128,3,0,["Bp",function(b,c,d){ACv(this,b,c,d);},"zR",function(b,c,d,e){AAo(this,b,c,d,e);}],Hg,"PosCompositeGroupQuantifierSet",11,Dj,[],0,0,0,["d",function(b,c,d){return AE6(this,b,c,d);}],Cf,0,Bv,[],
12,3,Z2,["xl",function(){return JO(this);}],UD,0,Fr,[],0,3,0,["yk",function(){return ANm(this);}],Ix,0,C,[Dt],3,3,0,0,J$,0,C,[],3,3,0,0,R1,0,C,[J$],0,3,0,0,KD,"MultiLineEOLSet",11,Bf,[],0,0,0,["d",function(b,c,d){return AE9(this,b,c,d);},"ba",function(b){return Z5(this,b);},"B",function(){return ADx(this);}],DR,0,C,[E6],1,3,0,0,Qf,0,DR,[],0,3,0,["jW",function(){return ARN(this);},"IA",function(b){return I2(this,b);},"Ig",function(){S3(this);}],G3,0,C,[EJ],3,3,0,0,Kc,0,C,[G3],3,3,0,0,Ra,0,CY,[Kc],0,3,0,["Cz",
function(b){ARr(this,b);},"A0",function(){return AGi(this);},"c3",function(b){return AQP(this,b);},"Ak",function(){return AIe(this);},"bm",function(){return AJr(this);},"e4",function(b){T7(this,b);}],MD,"AbstractCharClass$LazyJavaDigit$1",11,M,[],0,0,0,["s",function(b){return APT(this,b);}],RB,0,C,[],0,3,0,["Ao",function(){return ACP(this);},"z2",function(b,c,d){return AQ2(this,b,c,d);},"xI",function(){return ZE(this);},"qZ",function(){return AIg(this);},"Al",function(b,c,d){AEl(this,b,c,d);}],Qg,0,Eg,[],0,
0,0,["qb",function(b){return AOn(this,b);},"o3",function(b,c){XL(this,b,c);}],PW,0,Bh,[],0,3,0,0,Na,"AbstractCharClass$LazyJavaSpaceChar$1",11,M,[],0,0,0,["s",function(b){return ALK(this,b);}],JY,0,C,[],3,3,0,0,Gh,0,C,[JY],1,3,0,["lg",function(){O4(this);},"j6",function(b,c){XM(this,b,c);},"dh",function(b){AQm(this,b);}],PK,0,Gh,[],0,3,0,["zk",function(){AFM(this);},"lg",function(){Wd(this);}],MP,0,C,[],0,0,0,0,OJ,0,C,[],4,3,0,0,MF,0,C,[D_],0,3,0,["z9",function(){return Uc(this);},"ne",function(){Qr(this);},
"lk",function(b,c,d){Yi(this,b,c,d);},"gR",function(b,c){AJc(this,b,c);},"gI",function(b,c){ACx(this,b,c);}],IT,0,C,[],3,3,0,0,TT,0,C,[I$,EW],0,3,0,["eE",function(){AKX(this);},"zh",function(){return AF7(this);},"e9",function(){return AKn(this);},"fp",function(){return AG1(this);},"dy",function(){return Xa(this);},"u8",function(b){return ZL(this,b);},"FQ",function(){return PZ(this);},"DX",function(b){return DM(this,b);},"In",function(b){return DT(this,b);},"pz",function(){return AK4(this);},"hK",function(b,
c){return V$(this,b,c);},"hA",function(b,c){return AK5(this,b,c);},"HR",function(){N$(this);},"Ft",function(b){return EE(this,b);},"i8",function(b){ADX(this,b);},"q9",function(b){return ALP(this,b);}],NH,0,O,[],0,0,0,["V",function(){return AJq(this);}],JX,0,CU,[],0,3,0,0,SL,0,O,[],0,0,0,["V",function(){return AAM(this);}],F3,0,C,[],3,3,0,0,Da,0,Bv,[],12,3,In,0,Kk,0,C,[C6],0,3,AMT,["Q",function(b,c){return ANw(this,b,c);},"Fu",function(b,c){HX(this,b,c);},"G8",function(b,c,d,e,f,g,h,i){Hj(this,b,c,d,e,f,g,h,
i);},"G9",function(b,c){St(this,b,c);},"e5",function(b){return Yn(this,b);},"El",function(b,c){return Lx(this,b,c);},"cj",function(){WW(this);},"oH",function(b){Ca(this,b);},"pL",function(b){return Fd(this,b);},"oP",function(b){return Fn(this,b);}],OA,0,C,[BC],4,3,0,["HS",function(b){return DW(this,b);},"Ec",function(b,c){return Hk(this,b,c);},"H2",function(b){return Li(this,b);},"I0",function(){return FD(this);},"DT",function(b,c){return NR(this,b,c);},"Ir",function(b){return T0(this,b);},"Fl",function(b,c,
d){return Kh(this,b,c,d);},"E9",function(){return RU(this);},"F9",function(){return R8(this);},"I8",function(b){return HL(this,b);},"ER",function(b,c){return GP(this,b,c);},"HI",function(b){return J6(this,b);},"EB",function(b,c){return Qy(this,b,c);},"Im",function(b){return DH(this,b);},"I$",function(b){return Kb(this,b);},"Hh",function(b){return F4(this,b);},"DS",function(){ND(this);},"He",function(){return KV(this);},"EA",function(){return Tb(this);},"HW",function(){return QV(this);},"FB",function(b){return Bu(this,
b);}],MZ,"PosAltGroupQuantifierSet",11,Ev,[],0,0,0,["d",function(b,c,d){return AFR(this,b,c,d);},"T",function(b){AJx(this,b);}],H6,0,C,[],0,3,0,["FY",function(b,c){FO(this,b,c);},"Hz",function(b,c){return FL(this,b,c);}],On,0,Bh,[],0,3,0,0]);
$rt_metadata([Of,0,C$,[],0,3,0,["fi",function(b,c,d){return AM3(this,b,c,d);},"AF",function(){WE(this);},"iY",function(){return AHF(this);}],Iu,0,C,[],3,3,0,0,Gg,0,C,[BC,Iu],0,3,ANz,["dw",function(b,c){return AO4(this,b,c);},"iO",function(b){return ADN(this,b);}],Ua,0,O,[],0,0,0,["V",function(){return AGG(this);}],Hl,"UnicodeHelper$Range",19,C,[],0,3,0,0,BQ,0,Bz,[],0,0,0,0,RT,0,CX,[],4,0,0,["jC",function(b){return ANA(this,b);},"uV",function(b,c){return AQN(this,b,c);}],RS,0,CX,[],4,0,0,["jC",function(b){return Zp(this,
b);},"uV",function(b,c){return AMb(this,b,c);}],Ou,0,Ew,[],0,3,0,0,UT,0,O,[],0,0,0,["V",function(){return AMP(this);}],RK,0,C,[],0,3,0,0,CB,"RangeSet",11,Bo,[],0,0,0,["bO",function(b,c){return U6(this,b,c);},"B",function(){return AGq(this);},"cn",function(b){return AKN(this,b);},"pq",function(){return AKq(this);}],GR,"UnicodeCategory",11,M,[],0,0,0,["s",function(b){return AKv(this,b);}],Ph,"UnicodeCategoryScope",11,GR,[],0,0,0,["s",function(b){return AN4(this,b);}],JM,0,C,[HR],0,3,Sq,["b3",function(){AD_(this);
},"b7",function(){AN7(this);},"zg",function(b,c,d,e){AFL(this,b,c,d,e);},"kZ",function(b,c,d){AD1(this,b,c,d);},"bo",function(b,c,d,e,f){Y4(this,b,c,d,e,f);},"f4",function(){AFb(this);},"fQ",function(){ABL(this);},"fb",function(){AFZ(this);},"eX",function(b){ADD(this,b);},"IJ",function(){HZ(this);},"vM",function(b){AKd(this,b);},"BL",function(){return WM(this);}],Kl,0,C,[],32,0,AVu,0,Nk,0,BU,[],1,3,0,0,MC,"CharClass",11,M,[],0,0,0,["cJ",function(b){return U3(this,b);},"Ae",function(b){return ASg(this,b);},"bL",
function(b,c){return APj(this,b,c);},"xN",function(b){Vx(this,b);},"tR",function(b){APE(this,b);},"s",function(b){return ZU(this,b);},"bQ",function(){return ASj(this);},"cv",function(){return ACn(this);},"jq",function(){return AO1(this);},"b",function(){return AJl(this);},"go",function(){return ACR(this);}],Gs,0,C,[],3,0,0,0,SX,0,Bh,[],0,3,0,0,CP,0,C,[],4,0,APM,["Fz",function(b,c,d,e,f,g,h,i,j,k,l){return F6(this,b,c,d,e,f,g,h,i,j,k,l);},"GT",function(b,c,d,e,f){return R9(this,b,c,d,e,f);},"Es",function(b,c,
d,e,f,g,h,i,j){return Ll(this,b,c,d,e,f,g,h,i,j);},"Fj",function(b){Fy(this,b);}],R_,0,C,[],0,3,0,0,Hx,0,C,[],3,3,0,0,T5,"UCIDecomposedCharSet",11,Dk,[],0,0,0,0,Lo,"FloatBufferOverByteBufferLittleEndian",12,DU,[],0,0,0,["uz",function(b,c,d,e,f){return Wo(this,b,c,d,e,f);},"wv",function(b){return AGW(this,b);},"r3",function(b,c){ALL(this,b,c);}],QP,0,BA,[],0,3,0,["bA",function(){ABN(this);},"c1",function(){AAN(this);},"fo",function(b){AGL(this,b);},"h1",function(){AD2(this);}],Or,0,C,[],4,3,0,0,Pr,"AbstractCharClass$LazyJavaWhitespace$1",
11,M,[],0,0,0,["s",function(b){return Xh(this,b);}],NI,0,O,[],0,0,0,["V",function(){return ABI(this);}],En,0,Bv,[],12,3,JQ,0,Sj,0,Bz,[],0,3,0,0,Ox,0,BU,[],1,3,0,0,F2,0,CS,[BI],0,3,SB,["dY",function(){return Vi(this);},"R",function(b){return AKK(this,b);}],Gd,0,C,[BC],0,3,0,["AI",function(b){return AOI(this,b);},"tg",function(){return ABe(this);},"ob",function(){return V3(this);},"d4",function(){return X7(this);},"ot",function(){return ACw(this);}],Qk,0,Gd,[],0,3,0,["ob",function(){return ANp(this);},"y7",function(b)
{return AQi(this,b);},"ye",function(b){return AOQ(this,b);},"BG",function(b){AEu(this,b);},"yt",function(b,c){AMQ(this,b,c);}],I3,0,C,[],3,3,0,0,Rp,0,C,[],0,0,0,["wQ",function(b,c){AE2(this,b,c);},"cC",function(b){return AHG(this,b);}],Ct,"TextureRegion",6,C,[],0,3,0,["sO",function(b,c,d,e){ANO(this,b,c,d,e);},"zY",function(b,c,d,e){YA(this,b,c,d,e);},"m_",function(){return AQT(this);},"tn",function(){return AAy(this);},"qP",function(){return Wc(this);}],Ny,0,FE,[],0,0,0,["V",function(){return AD5(this);}],T2,
0,C,[],0,3,0,0,Ob,0,C,[B$],0,3,0,["zp",function(b){AR$(this,b);},"li",function(b,c,d,e){return ADw(this,b,c,d,e);},"A3",function(b,c,d,e,f,g,h){return XC(this,b,c,d,e,f,g,h);},"vv",function(b,c,d,e){ASu(this,b,c,d,e);},"po",function(){return AM0(this);},"A8",function(){return ANK(this);},"yS",function(){return Yd(this);},"zT",function(){return YX(this);},"CO",function(){return AQs(this);}],S2,"AbstractCharClass$1",11,M,[],0,0,0,["s",function(b){return ACk(this,b);}],SZ,"AbstractCharClass$2",11,M,[],0,0,0,["s",
function(b){return Wf(this,b);}],Sm,0,O,[],0,0,0,["V",function(){return AJz(this);}],Cj,0,Bv,[],12,3,HT,0,MI,"PossessiveCompositeQuantifierSet",11,De,[],0,0,0,["d",function(b,c,d){return ANb(this,b,c,d);}],I9,0,C,[Dt],3,3,0,0,M4,"AbstractCharClass$LazyJavaLetterOrDigit$1",11,M,[],0,0,0,["s",function(b){return AH4(this,b);}],Me,"CharClass$18",11,M,[],0,0,0,["s",function(b){return AGU(this,b);},"b",function(){return ADI(this);}],UZ,"PossessiveGroupQuantifierSet",11,BZ,[],0,0,0,["d",function(b,c,d){return AAi(this,
b,c,d);}]]);
$rt_metadata([Mb,0,M,[],0,0,0,["s",function(b){return AAl(this,b);}],JJ,0,C,[],0,3,AU3,["po",function(){return ALe(this);},"or",function(b){ABK(this,b);},"cj",function(){AJ9(this);},"E3",function(b){Ly(this,b);},"Gr",function(b,c){JB(this,b,c);},"Jb",function(b,c,d){P2(this,b,c,d);},"HT",function(b,c,d,e){RX(this,b,c,d,e);},"BW",function(b,c,d){return ASl(this,b,c,d);},"Ax",function(b,c,d,e,f,g){return AB8(this,b,c,d,e,f,g);},"tz",function(b,c,d,e,f,g,h,i,j){return ARK(this,b,c,d,e,f,g,h,i,j);},"sT",function(b,
c,d){AAe(this,b,c,d);}],Mc,0,M,[],0,0,0,["s",function(b){return ADc(this,b);}],Md,0,M,[],0,0,0,["s",function(b){return ASA(this,b);}],Ol,0,C,[],4,3,0,0,ML,0,M,[],0,0,0,["s",function(b){return ADY(this,b);}],Mf,0,M,[],0,0,0,["s",function(b){return Yz(this,b);}],KC,"UCISequenceSet",11,Bo,[],0,0,0,["bO",function(b,c){return AHx(this,b,c);},"B",function(){return AEM(this);}],Mg,0,M,[],0,0,0,["s",function(b){return ALd(this,b);}],Mh,0,M,[],0,0,0,["s",function(b){return AFF(this,b);}],Tv,"AbstractCharClass$LazyJavaDefined$1",
11,M,[],0,0,0,["s",function(b){return AFr(this,b);}],Ma,0,M,[],0,0,0,["s",function(b){return AOP(this,b);}],Qo,0,BU,[],1,3,0,0,PY,0,DX,[DY],0,3,0,["a",function(b){return Wb(this,b);},"j",function(b){return AI9(this,b);},"dJ",function(b){return AD9(this,b);},"cc",function(b){return VT(this,b);},"Bh",function(b,c,d){return AAG(this,b,c,d);},"nH",function(b){return ANT(this,b);},"gb",function(b){return AIt(this,b);},"CM",function(b,c){return AOb(this,b,c);},"DJ",function(b,c,d,e){return AL8(this,b,c,d,e);},"BA",
function(b,c){return ARt(this,b,c);},"C7",function(b,c){return AJQ(this,b,c);},"x4",function(b,c){return AP9(this,b,c);},"wb",function(b){return AOu(this,b);},"x5",function(b,c){return AGn(this,b,c);},"c2",function(b,c){return AQg(this,b,c);},"uo",function(b){AGz(this,b);},"em",function(b,c){return AMf(this,b,c);},"pg",function(b,c,d,e){return AGg(this,b,c,d,e);},"od",function(b,c,d){return ABs(this,b,c,d);},"h",function(){return Yf(this);},"b",function(){return YU(this);},"e4",function(b){AGF(this,b);},"sj",
function(b,c){return AIo(this,b,c);},"pV",function(b,c){return AHs(this,b,c);},"tr",function(b,c){return AD$(this,b,c);},"lY",function(b,c){return ASf(this,b,c);}],N0,"CompositeRangeSet",11,Bl,[],0,0,0,["d",function(b,c,d){return XF(this,b,c,d);},"T",function(b){AKi(this,b);},"B",function(){return ALg(this);},"ba",function(b){return Y$(this,b);},"cn",function(b){return Yo(this,b);}],S9,0,Bh,[],0,3,0,0,Ft,0,C,[],0,3,0,0,D$,"FinalSet",11,BR,[],0,0,0,["d",function(b,c,d){return APR(this,b,c,d);},"B",function()
{return Zg(this);}],Nd,0,C,[],0,3,0,0,SG,"EmptySet",11,Bo,[],0,0,0,["bO",function(b,c){return ANs(this,b,c);},"cM",function(b,c,d){return ACJ(this,b,c,d);},"cP",function(b,c,d,e){return ZO(this,b,c,d,e);},"B",function(){return AEy(this);},"ba",function(b){return WS(this,b);}],Kt,0,C,[Il],0,3,0,["rU",function(){return ASm(this);},"N",function(){return X9(this);}],L6,0,C,[C6,BI],4,3,0,["D8",function(){return LA(this);},"bm",function(){return Cx(this);},"F1",function(b){return B8(this,b);}],Ig,0,Ct,[],0,3,0,0,Os,
"FloatBufferOverByteBufferBigEndian",12,DU,[],0,0,0,["uz",function(b,c,d,e,f){return AJN(this,b,c,d,e,f);},"wv",function(b){return Vz(this,b);},"r3",function(b,c){AGH(this,b,c);}],N7,0,Eo,[],0,3,0,0,Sf,0,O,[],0,0,0,["V",function(){return ACb(this);}],Ef,0,Bz,[],0,3,0,0,Jp,0,C,[],3,3,0,0,Rh,0,C,[Jp],0,3,0,0,Fs,"GlyphLayout",6,C,[DF],0,3,0,["kD",function(b,c){ANo(this,b,c);},"u3",function(b,c,d,e,f,g,h,i,j){AAU(this,b,c,d,e,f,g,h,i,j);},"GQ",function(b,c,d,e,f,g){Sw(this,b,c,d,e,f,g);},"Fb",function(b,c,d,e,f)
{return Qc(this,b,c,d,e,f);},"IW",function(b,c){DS(this,b,c);},"Ik",function(b,c,d,e){return LV(this,b,c,d,e);},"eE",function(){AOJ(this);},"b",function(){return AJ0(this);}],Tf,0,Dh,[],0,3,0,0,LM,0,DR,[],0,3,0,["B0",function(b,c,d){return AEZ(this,b,c,d);},"G2",function(){return TV(this);},"Er",function(){return Ry(this);}],OP,0,C,[],0,3,0,0,Ls,0,C,[Gu],0,0,0,["j$",function(){return AIZ(this);},"ks",function(){return AO5(this);},"EE",function(){MO(this);}],Em,0,Bv,[],12,0,Qu,0,Ie,0,C,[],0,3,AM6,["Gd",function()
{SI(this);},"sL",function(b,c){AH3(this,b,c);},"If",function(b,c){TW(this,b,c);},"GE",function(b){PF(this,b);},"E5",function(b){Oh(this,b);},"Ga",function(b){Lu(this,b);},"Hu",function(){LB(this);},"H4",function(){Tw(this);},"D5",function(){RQ(this);},"Fn",function(){R5(this);},"Eq",function(){LO(this);},"HY",function(){Mw(this);}],Gf,0,C,[],4,0,ASF,["eE",function(){E$(this);},"AA",function(b){return L8(this,b);},"IQ",function(){Kf(this);},"E$",function(b){return Z(this,b);}],KW,"Quantifier",11,Ec,[CI],0,0,
0,["ir",function(){return ADH(this);},"hR",function(){return APv(this);},"b",function(){return AJv(this);}],F9,"TeaVMFileHandle",16,Ft,[],0,3,PJ,["oy",function(){return ADV(this);},"tV",function(){return AF8(this);},"Dg",function(){return AMd(this);},"AZ",function(){return AEo(this);},"Bb",function(){return AEI(this);},"rv",function(){return ALf(this);},"s1",function(){return AQl(this);},"Iy",function(){return OH(this);},"Gy",function(b,c,d){H$(this,b,c,d);},"CL",function(b){return ACg(this,b);},"Dr",function()
{return Zw(this);},"b",function(){return ARP(this);}],KL,"AbstractCharClass$LazyJavaUpperCase$1",11,M,[],0,0,0,["s",function(b){return XW(this,b);}],IG,0,C,[B$],3,3,0,0,Su,0,C,[Hx],0,0,0,["z7",function(){AKI(this);},"CH",function(){ACi(this);},"B7",function(){AEm(this);},"Ch",function(){AId(this);}],RY,0,BA,[],0,3,0,["fy",function(b){AMz(this,b);},"GO",function(){UX(this);},"Ih",function(b){Rd(this,b);},"EX",function(){TC(this);},"Hj",function(){RO(this);},"G4",function(){P_(this);},"c1",function(){Z7(this);
},"Eo",function(){OF(this);},"Iz",function(){Ps(this);},"Hf",function(){Ub(this);},"IF",function(){Rr(this);},"It",function(){Oc(this);},"fo",function(b){AI7(this,b);}],M8,0,C,[],4,0,0,0,FW,0,GH,[],1,3,0,["xr",function(b,c){return APi(this,b,c);}],Qw,0,FW,[],0,3,0,["yB",function(b,c,d,e,f,g,h){return AQB(this,b,c,d,e,f,g,h);},"Eb",function(b){return DC(this,b);}],PQ,0,C,[BO],1,3,0,0,U1,"PossessiveQuantifierSet",11,BX,[],0,0,0,["d",function(b,c,d){return W_(this,b,c,d);}],Fj,"Spring",8,Cs,[],0,3,AQ_,0,RF,0,C,
[],0,3,0,["nV",function(){return AI_(this);},"Ds",function(b){return Yx(this,b);},"z_",function(b){APq(this,b);},"xi",function(b){AL_(this,b);}]]);
$rt_metadata([LX,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",11,M,[],0,0,0,["s",function(b){return AKr(this,b);}],LH,"AbstractCharClass$LazyJavaLetter$1",11,M,[],0,0,0,["s",function(b){return AQh(this,b);}],N5,"ReluctantQuantifierSet",11,BX,[],0,0,0,["d",function(b,c,d){return AKD(this,b,c,d);}],NK,0,C,[],4,3,0,0,DE,0,C,[],0,3,0,["ie",function(b,c){return AEC(this,b,c);}],F7,"Mesh",4,C,[B$],0,3,MM,["DG",function(b,c,d){return ALZ(this,b,c,d);},"Af",function(b){return ZS(this,b);},"CJ",function(b){ABb(this,
b);},"gR",function(b,c){ANL(this,b,c);},"Cd",function(b){ANB(this,b);},"gI",function(b,c){Xp(this,b,c);},"Ag",function(b,c,d,e){ASw(this,b,c,d,e);},"AB",function(b,c,d,e,f){AIp(this,b,c,d,e,f);},"qC",function(){return AF5(this);}],G1,0,C,[],3,3,0,0,FY,0,C,[G1,CI],0,0,0,0,I4,0,FY,[],0,0,0,0,Hn,0,C,[G5],0,3,ATg,["Ic",function(){Eh(this);},"qj",function(){AC$(this);},"x1",function(){X1(this);},"vX",function(b){We(this,b);},"rK",function(b){ALF(this,b);},"zj",function(b,c){VX(this,b,c);},"d9",function(){AGM(this);
},"Bg",function(b){AG4(this,b);},"H6",function(b){OV(this,b);}],Jb,0,C,[],32,0,ATf,0,To,"EOISet",11,Bf,[],0,0,0,["d",function(b,c,d){return AKb(this,b,c,d);},"ba",function(b){return U_(this,b);},"B",function(){return ADP(this);}],Rx,0,C,[C6],0,3,0,["fP",function(b,c){ANM(this,b,c);},"Ja",function(b,c){IB(this,b,c);},"H8",function(b,c,d,e,f,g,h,i){H5(this,b,c,d,e,f,g,h,i);},"FT",function(b,c){NX(this,b,c);},"nP",function(b,c){return Zb(this,b,c);},"Hs",function(b,c){return Ky(this,b,c);},"oH",function(b){Ch(this,
b);},"pL",function(b){return Fc(this,b);},"oP",function(b){return E2(this,b);}],Sa,0,O,[],0,0,0,["V",function(){return AOG(this);}],Cz,0,BT,[BI],1,3,0,["wq",function(b,c,d){return AAD(this,b,c,d);},"t8",function(b){return AKt(this,b);},"zi",function(b,c,d){return APV(this,b,c,d);},"kQ",function(){return X6(this);},"IM",function(){return FX(this);},"b",function(){return AHV(this);},"D1",function(b){return DA(this,b);}],TF,"ByteBufferImpl",12,Cz,[],0,0,0,["qI",function(){return W3(this);},"Dk",function(){return AHN(this);
},"cb",function(){return APB(this);},"rg",function(){return ARJ(this);},"uL",function(){return ARU(this);},"mt",function(){return AIX(this);}],JV,0,C,[BC],0,3,0,["hl",function(b,c,d){AG5(this,b,c,d);}],Fe,0,C,[],0,3,AUw,["xx",function(b){AJ5(this,b);}],IE,0,C,[BC],0,3,AVa,0,D7,0,Bz,[],0,3,0,0,Lh,"MultiLineSOLSet",11,Bf,[],0,0,0,["d",function(b,c,d){return ZI(this,b,c,d);},"ba",function(b){return ADt(this,b);},"B",function(){return Xx(this);}],SE,0,C,[BO],1,3,0,0,LU,0,C,[D_],0,3,0,["ne",function(){NT(this);},
"lk",function(b,c,d){AB1(this,b,c,d);},"gR",function(b,c){ALN(this,b,c);},"gI",function(b,c){AHS(this,b,c);}],Rj,0,O,[],0,0,0,["V",function(){return AM2(this);}],ID,0,C,[],3,3,0,0,SQ,0,C,[BO],1,3,0,0,Hw,0,C,[],3,3,0,0,PR,0,C,[Hw],0,3,0,0,Oq,0,O,[],0,0,0,["V",function(){return ALq(this);}],FB,0,C,[I3],1,3,0,0,Pn,0,C,[EB],0,3,0,["z9",function(){return Uh(this);},"hy",function(){return ALE(this);},"kB",function(){return VA(this);},"pb",function(b,c,d){AFe(this,b,c,d);},"lb",function(){return AQu(this);},"g6",function()
{AF2(this);},"pv",function(){Y8(this);}],L5,"PreviousMatch",11,Bf,[],0,0,0,["d",function(b,c,d){return AFC(this,b,c,d);},"ba",function(b){return AR4(this,b);},"B",function(){return XU(this);}],IK,"NonCapFSet",11,BR,[],0,0,0,["d",function(b,c,d){return WD(this,b,c,d);},"B",function(){return AAw(this);},"ba",function(b){return AM4(this,b);}],Tn,0,C,[Gs],4,3,0,["wx",function(b){VH(this,b);},"eE",function(){AKZ(this);},"qh",function(){return Ys(this);},"hM",function(b,c,d){AJK(this,b,c,d);}],Jk,0,C,[],4,3,AJ7,0,KB,
"UCISupplCharSet",11,Bo,[],0,0,0,["bO",function(b,c){return ANi(this,b,c);},"B",function(){return AR5(this);}],Q3,0,C,[],4,3,0,0,Op,0,C,[],0,3,0,["Ct",function(b,c){ZV(this,b,c);},"v3",function(b,c){WZ(this,b,c);},"ua",function(b,c){ARq(this,b,c);},"tm",function(){return AH8(this);},"hg",function(b){return AAK(this,b);},"w1",function(b,c,d,e,f){ZB(this,b,c,d,e,f);},"CW",function(b,c){return VF(this,b,c);},"s_",function(b){return AAm(this,b);},"hd",function(b){return ABj(this,b);}],UK,0,C,[Is],0,0,0,["g4",function()
{AMI(this);},"gS",function(){AI0(this);}],M2,0,O,[],0,0,0,["V",function(){return AG$(this);}],MV,0,O,[],0,0,0,["V",function(){return AQR(this);}],PG,0,C,[GE],4,3,0,["H0",function(b,c){return NJ(this,b,c);},"HB",function(b){return Q2(this,b);},"Ei",function(){return Sl(this);},"DW",function(b){return SS(this,b);},"Gj",function(b){return T1(this,b);},"r7",function(b){return D9(this,b);},"FV",function(b){return G7(this,b);},"Fk",function(b){return RI(this,b);},"EL",function(){return DV(this);},"iG",function(b)
{return UO(this,b);},"k2",function(b){return K6(this,b);},"r1",function(){return J8(this);},"l4",function(){return H8(this);},"iM",function(){return Ln(this);}],Tj,"DotAllSet",11,Bl,[],0,0,0,["d",function(b,c,d){return ARp(this,b,c,d);},"B",function(){return ABm(this);},"T",function(b){YP(this,b);},"ii",function(){return AJG(this);},"ba",function(b){return YM(this,b);}],P7,"AbstractCharClass$LazyJavaLowerCase$1",11,M,[],0,0,0,["s",function(b){return APQ(this,b);}],Um,0,C,[FA],0,3,0,["mq",function(){APw(this);
}],KP,"UCISupplRangeSet",11,Cd,[],0,0,0,["s",function(b){return AFz(this,b);},"B",function(){return ARc(this);}],U0,0,O,[],0,0,0,["V",function(){return Vt(this);}],HB,"HangulDecomposedCharSet",11,Bl,[],0,0,0,["T",function(b){AHA(this,b);},"AE",function(){return FQ(this);},"B",function(){return AMO(this);},"d",function(b,c,d){return Vp(this,b,c,d);},"cn",function(b){return YN(this,b);},"ba",function(b){return AO8(this,b);}],UP,0,O,[],0,0,0,["V",function(){return AEi(this);}],Ic,0,C,[D_],0,3,AT9,["ne",function()
{LY(this);},"lk",function(b,c,d){Ya(this,b,c,d);},"gR",function(b,c){AOo(this,b,c);},"Gw",function(b,c){So(this,b,c);},"E1",function(b){Ur(this,b);},"Gq",function(b){Ss(this,b);},"gI",function(b,c){ABw(this,b,c);},"F5",function(){N2(this);}]]);
$rt_metadata([EL,"GlyphLayout$GlyphRun",6,C,[DF],0,3,0,["eE",function(){AF$(this);},"b",function(){return Xc(this);}],Pu,0,C,[GN,GU],0,0,0,["sR",function(b){XY(this,b);},"mS",function(){AC_(this);},"Dz",function(){return Zy(this);}],Nl,"WordBoundary",11,Bf,[],0,0,0,["d",function(b,c,d){return Yk(this,b,c,d);},"ba",function(b){return YH(this,b);},"B",function(){return AR8(this);},"G6",function(b,c,d,e){return Ij(this,b,c,d,e);}],F8,0,O,[],0,0,0,["V",function(){return OI(this);}],Gr,0,C,[],4,3,Dl,0,MS,0,CY,[],
0,0,0,["lQ",function(){return ABU(this);}],IC,0,C,[Dt],3,3,0,0,Jw,0,C,[Dt,HW,IC,Ix,I9],3,3,0,0,T8,0,C,[F_],0,0,0,["gS",function(){ASc(this);},"g4",function(){ADo(this);}],Hz,0,C,[],3,3,0,0,HH,0,C,[BO],3,3,0,0,Lp,0,C,[BO,Jw,Hz,HH],1,3,0,["HE",function(b,c){return AHm(this,b,c);},"IB",function(b,c){return AHZ(this,b,c);},"D0",function(b){return XD(this,b);},"G3",function(b,c,d){return AKf(this,b,c,d);},"FZ",function(b){return AP_(this,b);},"F3",function(){return Zx(this);},"EU",function(b,c,d){return VR(this,
b,c,d);}],Lg,0,C,[],0,0,0,0,BW,0,C,[BC],0,3,Ds,["lK",function(b){return ASi(this,b);},"vt",function(b){return YQ(this,b);},"wp",function(b){return AIv(this,b);},"mH",function(){return ABM(this);},"x$",function(b,c,d,e){return AIj(this,b,c,d,e);},"vn",function(b,c,d,e,f,g){return AJb(this,b,c,d,e,f,g);},"A9",function(b,c,d){return Zr(this,b,c,d);},"Dt",function(b,c){return ACs(this,b,c);},"za",function(b,c,d){return ACI(this,b,c,d);}],IY,0,C,[IT],0,3,AWo,["A2",function(b,c){return AED(this,b,c);},"e3",function(b)
{return ALw(this,b);},"rA",function(b){return AFh(this,b);}],QZ,"ReluctantAltQuantifierSet",11,Db,[],0,0,0,["d",function(b,c,d){return Xi(this,b,c,d);}],UY,0,Bh,[],0,3,0,0,Id,0,Ef,[],0,3,0,0,Rq,0,O,[],0,0,0,["V",function(){return AFf(this);}],L1,0,BA,[],0,3,0,["bA",function(){VQ(this);},"c1",function(){AB5(this);},"fo",function(b){AGO(this,b);}],Ru,0,C,[EW],0,3,0,["i8",function(b){VS(this,b);},"q9",function(b){return AOg(this,b);}],Qb,"Matcher$1",11,C,[],0,0,0,["b",function(){return AHa(this);}],He,0,C,[Gs],
4,3,ATx,["hM",function(b,c,d){AR9(this,b,c,d);},"eE",function(){AEL(this);},"wx",function(b){ANR(this,b);},"qh",function(){return AH0(this);}],IZ,"Squirrel",8,C4,[],0,3,0,["fy",function(b){ALB(this,b);}],FV,0,C,[],1,3,0,["g8",function(){return V7(this);},"g$",function(b){AAk(this,b);},"vF",function(b){AEg(this,b);},"u_",function(b){ARa(this,b);}],Cm,0,CU,[],0,3,0,0,FP,0,Cs,[],0,3,AVy,0,Se,0,C,[],0,3,0,["lg",function(){APg(this);},"xv",function(){AOv(this);},"Dj",function(){Wr(this);},"D_",function(){P4(this);
},"I2",function(){Sg(this);},"Gh",function(){PU(this);},"FK",function(){QE(this);},"Gu",function(){QD(this);}],O7,0,C,[D_],0,3,0,["ne",function(){UI(this);},"lk",function(b,c,d){AJX(this,b,c,d);},"gR",function(b,c){ACu(this,b,c);},"gI",function(b,c){XJ(this,b,c);}],LW,0,C,[],0,0,0,0,Q7,0,O,[],0,0,0,["V",function(){return AMp(this);}],RE,0,O,[],0,0,0,["V",function(){return Vc(this);}],Qh,0,Bz,[],0,3,0,0,Gi,"HighSurrogateCharSet",11,Bl,[],0,0,0,["T",function(b){Ze(this,b);},"d",function(b,c,d){return VM(this,
b,c,d);},"cM",function(b,c,d){return AK3(this,b,c,d);},"cP",function(b,c,d,e){return ANc(this,b,c,d,e);},"B",function(){return ARk(this);},"cn",function(b){return AA6(this,b);},"ba",function(b){return ALh(this,b);}],OG,"ReluctantCompositeQuantifierSet",11,De,[],0,0,0,["d",function(b,c,d){return ANv(this,b,c,d);}],Bg,0,C,[],0,3,0,0,OK,"SOLSet",11,Bf,[],4,0,0,["d",function(b,c,d){return AG2(this,b,c,d);},"ba",function(b){return AFi(this,b);},"B",function(){return AID(this);}],Oy,0,C,[ID],0,0,0,["lm",function(b)
{AGa(this,b);},"Bx",function(b){ARb(this,b);}],Cw,0,C,[BC,F3],0,3,AKT,["bq",function(b,c,d){return AHg(this,b,c,d);},"fk",function(b){return AA8(this,b);},"zM",function(b){return AOY(this,b);},"xP",function(b,c,d){return AGt(this,b,c,d);},"wi",function(b){return AIT(this,b);},"BZ",function(b,c,d){return AN9(this,b,c,d);},"Br",function(b){return ANr(this,b);},"z4",function(){return Z9(this);},"gW",function(){return ASB(this);},"Bj",function(b){return APl(this,b);},"sI",function(b){return AAW(this,b);},"zJ",function(b,
c,d){return AH1(this,b,c,d);},"w9",function(b){return Z3(this,b);}],EF,0,C,[BC,F3],0,3,AKS,["r9",function(b,c){return U$(this,b,c);},"lC",function(b,c){return AK_(this,b,c);}],Gk,"IntArray",3,C,[],0,3,0,["pr",function(b){AFI(this,b);},"cC",function(b){return ANX(this,b);},"cj",function(){ACp(this);},"BY",function(b){return AJF(this,b);},"s6",function(b){return X0(this,b);},"b",function(){return AGP(this);}],Nm,0,BA,[],0,3,0,["bA",function(){APr(this);},"c1",function(){AQ5(this);},"fo",function(b){Yh(this,b);
}],SU,"Platform",8,C4,[],0,3,0,["fy",function(b){AKp(this,b);},"zr",function(){AEU(this);}],LP,0,Ef,[],0,3,0,0,R6,0,C,[],4,3,0,0,KZ,0,O,[],0,0,0,["V",function(){return AQI(this);}],MR,0,Fq,[],4,3,0,["E6",function(b,c){return RZ(this,b,c);},"xH",function(b){return SR(this,b);}],Pb,0,FB,[CI,BC],0,3,0,["rw",function(b){return ADW(this,b);},"II",function(){Jy(this);},"e5",function(b){return APG(this,b);},"F6",function(b){return Qe(this,b);},"Ge",function(b,c,d){return If(this,b,c,d);},"IT",function(){return IQ(this);
},"Q",function(b,c){return AI5(this,b,c);},"Db",function(b,c){return APe(this,b,c);},"rX",function(b,c,d){return ALr(this,b,c,d);},"yu",function(b){ADu(this,b);},"rW",function(){AL5(this);},"t4",function(b){return AIh(this,b);},"Gk",function(b){return Q5(this,b);},"xt",function(){return ADG(this);}],P3,"UMultiLineEOLSet",11,Bf,[],0,0,0,["d",function(b,c,d){return AJ_(this,b,c,d);},"ba",function(b){return AC0(this,b);},"B",function(){return WH(this);}],SD,0,C,[],0,3,0,["qo",function(b){Zz(this,b);},"yl",function(b)
{XI(this,b);},"tH",function(b,c,d){AOj(this,b,c,d);},"tN",function(b,c,d){WX(this,b,c,d);},"gK",function(b){return AAj(this,b);},"oB",function(b,c){AEP(this,b,c);},"hn",function(b,c){V0(this,b,c);},"yL",function(){return ASx(this);},"cj",function(){XZ(this);},"BX",function(b){return AMK(this,b);},"og",function(b){return AJf(this,b);},"gD",function(b){ZM(this,b);}]]);
$rt_metadata([GC,0,C,[],0,3,CE,["tM",function(){return AIN(this);},"uw",function(){return APD(this);},"CQ",function(){return AGv(this);},"vJ",function(){return AD6(this);},"s7",function(){return APS(this);},"h",function(){return ACE(this);}],J1,"EOLSet",11,Bf,[],4,0,0,["d",function(b,c,d){return ALt(this,b,c,d);},"ba",function(b){return Z1(this,b);},"B",function(){return AHK(this);}],E8,0,C,[],0,0,0,["b1",function(){return AGB(this);},"lT",function(b){Zt(this,b);},"yQ",function(b){Y3(this,b);},"pu",function()
{return AA_(this);},"jz",function(){return ALm(this);},"nj",function(){return YT(this);},"D",function(){return AMx(this);},"g2",function(){return AAb(this);},"cS",function(){return Xy(this);},"y8",function(){return ACC(this);},"Fa",function(){Oi(this);},"GG",function(){Dc(this);},"FH",function(){return Qi(this);},"HG",function(b){return Tu(this,b);},"b",function(){return ADk(this);},"b9",function(){return AEX(this);},"gP",function(){return AQY(this);},"vs",function(){return Yu(this);},"wK",function(){return AMo(this);
},"En",function(b){return H2(this,b);},"Hp",function(){return QI(this);},"IH",function(){return Uy(this);},"GR",function(){return Bm(this);},"Fq",function(){return Lk(this);},"Ht",function(b){return N8(this,b);},"H7",function(){return Gx(this);},"dV",function(){return Yp(this);}],Nt,0,O,[],0,0,0,["V",function(){return AQo(this);}],Pc,0,F8,[],0,0,0,["V",function(){return X2(this);}],MX,0,BU,[],1,3,0,0,O2,0,C,[IG],0,3,0,["xy",function(b){return ADr(this,b);},"yG",function(b,c,d){return Vh(this,b,c,d);},"Gi",function(b,
c,d,e){return Rz(this,b,c,d,e);},"IP",function(b,c,d){PM(this,b,c,d);}],Rg,0,FV,[],4,0,0,["zI",function(){return ARR(this);}],Nv,0,DI,[],0,0,0,["ty",function(b,c,d,e,f){return Yj(this,b,c,d,e,f);},"wu",function(b){return AJA(this,b);},"si",function(b,c){AAs(this,b,c);}]]);
function $rt_array(cls,data){this.bB=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","Stream is closed","need dictionary","unknown compression method","unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","OpenGL","GLES","WebGL","NONE","String contains invalid digits: ","String contains digits out of radix ",
": ","The value is too big for int type: ","String is null or empty","Illegal radix: ","<",":",">","JointSet","main","Android","Desktop","HeadlessDesktop","Applet","iOS","CI sequence: ","initialCapacity must be >= 0: ","initialCapacity is too large: ","loadFactor must be > 0: ","Objects cannot be null.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","newAction must be non-null","CI back reference: ","UCI back reference: ","BIG_ENDIAN","LITTLE_ENDIAN",
"Pixmap","Custom","<DotAllQuant>","fSet","BehindFSet","range:"," ","^ ","<GroupQuant>","null","New position "," is outside of range [0;","]","New limit ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph",
"Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek",
"Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","decomposed char:","Couldn\'t load image \'","\', file does not exist","rgba(",",",")","AheadFSet","NonCapJointSet","PosLookaheadJointSet","data/help3.png","data/help2.png","NegLookaheadJointSet","data/help5.png","data/help4.png","Already prepared","cim","Call prepare() before calling getPixmap()","This TextureData implementation does not upload data itself","assets",
"/","Loading:",".png","jpeg","jpg","gif","bmp","invalid distance code","invalid literal/length code","Couldn\'t read Pixmap from file \'","\'","0","Princess: Oh dear!\n What have you done?","Bob: I came to \nrescue you!","Princess: you are\n mistaken\nI need no rescueing","Bob: So all this \nwork for nothing?","Princess: I have \ncake and tea!\nWould you like some?","Bob: I\'d be my \npleasure!","And they ate cake\nand drank tea\nhappily ever \nafter\n\n\n\n\n\n\nKära Emma!\nDu är fantastisk!\nDu blev ferdig\n med spelet!",
"<Quant>","PosBehindJointSet","sequence: ",".superjumper","\n","-2147483648","UCI range:","New data must have the same managed status as the old data","IGNORE","REPLACE","REPORT","true","false","NegBehindJointSet","Index ","back reference: ","<DotQuant>","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","no uniform with name \'","\' in shader","Classpath","Internal","External","Absolute","Local","No buffer allocated!","[","] ","Can\'t copy pixels to texture",
"Can only cope with FloatBuffer and ShortBuffer at the moment",".","CI ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","GL_ARB_framebuffer_object","GL_EXT_framebuffer_object","texture width and height must be square when using mipmapping.","The last short in dst ","The last short in src ","The last float in dst ","The last float in src ","<EOL>","UCI ","start + count must be <= size: ",
" + "," <= ","index can\'t be >= size: "," >= ","end can\'t be >= size: ","start can\'t be > end: "," > ","Array is empty.","additionalCapacity must be >= 0: ","newSize must be >= 0: ","AtomicFSet","MirroredRepeat","ClampToEdge","Repeat","posFSet","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","UTF-8","<MultiLine $>","Error occurred: ","mousedown","mousemove","mouseup","keydown","keypress","keyup","VertexArray","VertexBufferObject","VertexBufferObjectSubData",
"VertexBufferObjectWithVAO","key cannot be null.","Patter is null","\\Q","\\E","\\\\E\\Q","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","LibGDX GL","Error parsing number: ",", assuming: ","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree",
"oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths","oversubscribed literal/length tree","incomplete literal/length tree","data/help1.png","None","SourceOver","n must be positive","texture cannot be null.","If no regions are specified, the font data must have an images path.","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","The specified font must contain at least one texture page.","UCI sequence: ","CompositeRangeSet:  <nonsurrogate> ",
" <surrogate> ","FinalSet","<Empty set>","attributes must be >= 1","FILL","STROKE","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","{","}","FileType \'","\' Not supported in GWT backend"," does not exist","..","SCORE: 0","SCORE: ","NEW HIGHSCORE: ","the princess is ...","in another castle!","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","assets/","This music instance is already disposed","EOI",
"Capacity is negative: ","The last byte in dst ","The last byte in src ","[ByteBuffer position=",", limit=",", capacity=",", mark "," is not set"," at ","^","IndexBufferObject cannot be used after it has been disposed.","PreviousMatch","NonCapFSet","Either src or dest is null","Already loaded.","File is empty.","padding=","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",
".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","DotAll","decomposed Hangul syllable:",", #",", ","WordBoundary","Target buffer of type "," is not supported","\' not supported in GWT backend","External files not supported in GWT backend","object cannot be null.","objects cannot be null.","data/background.png","data/items.png","data/font.fnt","data/font.png",
"data/music.mp3","data/jump.wav","data/highjump.wav","data/hit.wav","data/coin.wav","data/click.wav","<SOL>","[]",". ","<Unix MultiLine $>","offset + length must be <= size: ","Is","In","invalid pool type"]);
Br.prototype.toString=function(){return $rt_ustr(this);};
Br.prototype.valueOf=Br.prototype.toString;C.prototype.toString=function(){return $rt_ustr(Mv(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(AWT);
(function(){var c;c=OB.prototype;c.stateChanged=c.Dz;c=QH.prototype;c.handleEvent=c.q9;c=Nx.prototype;c.onTimer=c.GM;c=TT.prototype;c.handleEvent=c.q9;c=Pu.prototype;c.stateChanged=c.Dz;c=Lp.prototype;c.dispatchEvent=c.FZ;c.addEventListener=c.HE;c.removeEventListener=c.IB;c.getLength=c.F3;c.get=c.D0;c.addEventListener=c.EU;c.removeEventListener=c.G3;c=Ru.prototype;c.handleEvent=c.q9;})();
})();

//# sourceMappingURL=classes.js.map