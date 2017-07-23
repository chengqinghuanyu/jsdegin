console.log(111);
var CheackObjcct = function(){};
CheackObjcct.prototype = {
    checkName:function(){
        return this;
    },
    checkEmail:function(){
        return this
    },
    checkPassword:function(){
        return this;
    },
    addMethod:function(name,fn){
        this.prototype[name] = fn;
    }
}

var a = new CheackObjcct();
a.checkName().checkEmail().checkPassword();
// var Book = (function(){
//     var bookNum = 0;
//     function checkBook(name){

//     }
//     function book(newid, newname, newprice){
//         var name,price;
//         function checkID(){
//             this.getName = function(){};
//             this.getPrice = function(){};
//             this.setName = function(){};
//             this.setPrice = function(){};
//             this.id = newid;
//             this.copy = function(){};
//             bookNum++;
//             if(bookNum>100){
//                 throw Error('我们仅出版100本书');
//             }
//             this.setName(name);
//             this.setPrice(price);
//         }
        
//     }
//     _book.prototype = {
//             isJSBook:false,
//             display:function(){}
//         }
//     return _book;
// })();




// var book = new Book('js','2014','js');

var Book = function(title,time,type){
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
    }else {
        return new Book(title,time,book);
    }
}

var book = Book('js2014','2014','js');

function SuperClass(name){
    this.name = name;
    this.book = ['html','css,','js'];
}
SuperClass.prototype.getName = function(){
    console.log(this.name);
}
function SubClass(name,tiem){
    SuperClass.call(this,name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function(){
    console.log(this.time);
}

var inst = new SubClass('js book',2014);

function inheritObject(o){
    function F(){

    }
    F.prototype = o;
    return new F();
}
var book = {
    name:'js book',
    alikeBook:['css book','html','html book']
};
var nameBook = inheritObject(book);
nameBook.name = "ajax book";
nameBook.alikeBook.push("xml book");
//寄生式继承
// var book = {
//     name:"js book",
//     alikeBook:["css book", "html book"]
// }
// function createBook(obj){
//     var o = new inheritObject(obj)
//     o.getName = function(){
//         console.log(name);
//     }
//     return o;
// }


//寄生组合继承
function inheritObject(o){
    function F(){

    }
    F.prototype = o;
    return new F();
}
function inheritPrototype(subClass,superClass){
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}

function SuperClass(name){
    this.name = name;
    this.colors = ["red","blue","green"]
}
SuperClass.prototype.getName = function(){
    console.log(this.name);
}
function SubClass(name,time){
    SuperClass.call(this,name);
    this.time = time;
}
inheritPrototype(SubClass,SuperClass);
SubClass.prototype.getTime = function(){
    console.log(this.time);
}
var instance1 = new SubClass("js book",2014);
var instance2 = new SubClass("css book",2017);

console.log(instance1.colors);
console.log(instance1.colors);
instance2.getName();
instace2.getTime();


var extend = function(target, souce){
    for(var prototype in souce){
        target[prototype] = souce[prototype];
    }
    return target;
}
var book = {
    name:"javascript设计模式",
    alike:["css","html","Js"]

}
var anotherBook = {
    color:"blue"
}
extend(anotherBook,book);
console.log(anotherBook.name);
console.log(anotherBook.alike);
anotherBook.alike.push("ajax");
anotherBook.name = "设计";
console.log(anotherBook.name);
console.log(anotherBook.alike);
console.log(book.name);
console.log(book.alike);

var mix = function(){
    var i =1,len = arguments.length,target=arguments[0],arg;
    for(;i<len;i++){
        arg = arguments[i];
        for(var prototype in arg){
            target[prototype] = arg[prototype];
        }
    }
    return target;
}

var add = function (){
    var arg = arguments,len=arg.length;
    function zero(){
        return 10;
    }
    function one(num){
        return 10+num;
    }
    function two(){
        return zero()+arguments[0]+arguments[1];
    }

    switch(len){
        case 0:
        return zero();
        case 1:
        return one(arguments[0]);
        case 2:
        return two(arguments[0],arguments[1]);
    }
}


function createPop(type, text){
    var o = new Object();
    o.content = text;
    o.show = function(){

    }
    if(type == 'alert'){
        alert(o.content);
    }
    if(type == 'prompt'){
        alert(o.content);
    }
    if(type == 'confirm'){
        alert(o.content);
    }
    return o;
}
var userNamerAlert = createPop('alert','用户名只能是26个字母和数组');



var Factory = function(type,content){
    if(this instanceof Factory){
        var s = new this[type](content);
        return s;
    }else{
        return new Factory(type,content);
    }
}
Factory.prototype = {
    java:function(content){
        //...
    },
    js:function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px dashed green";
            document.getElementById("container").appendChild(div);
        })(content)

    },
    UI:function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px solid red";
            document.getElementById("container").appendChild(div);
        })(content)
    },
    php:function(){
        //...
    }
}


var data = [
    {
        type :'js',
        content:'js哪家强1'
    },
     {
        type :'UI',
        content:'UI哪家强'
    },
        {
        type :'js',
        content:'js哪家强2'
    },
     {
        type :'UI',
        content:'js哪家强'
    }
];
for(var i = data.length-1;i>=0;i--){
    Factory(data[i].type,data[i].content);
}



