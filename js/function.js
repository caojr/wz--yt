/*循环*/
function each(num,callback){
	for(var i=0;i<num;i++){
        callback(i);
	}
}


// each(9,function(){
// 	each(9,function(){
// 		document.write("kn"+"&nbsp;")
// 	})
// 	document.write("<br/>")
// });



/*数组选取最大值或者最小值*/
function getNumber(arr,type){
	var type=type||"max"
	var num=arr[0];
	for(var i=0;i<arr.length;i++){
	  if(type=="max"){
		if(num>arr[i]){
			num=arr[i];
		}
	  }else if(type=="min"){
		if(num<arr[i]){
			num=arr[i];
	    }
	  }
	return num;
    }}
/*数组排序*/
function order(arr,type){
	var type=type||"up"
	var j=0;
	while(j<arr.length-1){	
	for(var i=j+1;i<arr.length;i++){
		if(type=='up'){
		  if(arr[j]>arr[i]){
			num=arr[i];
			arr[i]=arr[j];
			arr[j]=num;
		  }
	    }else if(type=='down'){
		if(arr[j]<arr[i]){
		num=arr[i];
		arr[i]=arr[j];
		arr[j]=num;
		}
	}
	}
	j++;   
    }
    return arr;
    }
function order1(arr,callback){
	for(var i=0;i<arr.length;i++){
		for(var j=j+1;j<arr.length;j++){
			if(callback(arr[i],arr[j])){
				var num=arr[i];
				arr[i]=arr[j];
				arr[j]=num;
			}
		}
	}
	return arr;
}
/*数组删除指定元素*/
function del(arr,num){
       	for(var i=0;i<arr.length;i++){

       		if(num==arr[i]){
       			var j=i;
       			while(j<arr.length-1){
       				arr[j]=arr[j+1];
       				j++;
       			}
       			arr.length--;
       	}
       }
       return arr;
}
function arrdel(arr,num){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]!==num){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
/*数组删除重复的元素*/
function delrepeat(arr){
       	for(var i=0;i<arr.length;i++){
       		for(var j=i+1;j<arr.length;j++){
       			if(arr[i]==arr[j]){
       				var k=j;
       				while(k<arr.length-1){
       					arr[k]=arr[k+1]
       					k++;
       				}
       				arr.length--;
       				j--;
       			}
       		}
       	}
       	return arr;
       }
/*数组删re除重复的元素*/
function delRepeat(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			var flag=true;
			if(arr[i]===arr[j]){
				flag=false;
				break;
			}
		}
		if(flag){
            newarr.push(arr[i]);
		}
	}
	return newarr;
}
/*二维数组选取极值*/
function getTwo(arr){
	var num=arr[0][0];
	for(var i=0;i<arr.lengh;i++){
		for(var j in arr[i]){
			if(num>arr[i][j]){
				num=arr[i][j];
			}
		}
	}
	return num;
}
/*数组在后面添加人任意个数的元素*/
Array.prototype.push1=function (){
	for(var i=0;i<arguments.length;i++){
		this[this.length]=arguments[i];
	}
	return this.length;
}
/*在数组的前面任意添加元素*/
Array.prototype.unshift1=function(){
	var newArr=[];
	for(var i=1;i<arguments.length;i++){
		newArr[i-1]=arguments[i];
	}
	for(var j=0;j<this.length;j++){
		newArr[arguments.length-1+j]=this[j];
	}
	this.length=0;
	for(var i=0;i<newArr.length;i++){
		this[i]=newArr[i];
	}
	return this.length;
}
/*在数组的前面任意添加元素*/
Array.prototype.unshift2=function(){
	var newArr=[];
	for(var i=0;i<this.length;i++){
		newArr.push(this[i]);
	}
	this.length=0;
	for(var i=1;i<arguments.length;i++){
		this.push(arguments[i]);
	}
	for(var i=0;i<newArr.length;i++){
		this.push(newArr[i]);
	}
	return this.length;
}
/*在数组的前面加任意元素*/
Array.prototype.unshift3=function(){
	if(this instanceof Array&&arguments.length>1){
	for(var i=1;i<arguments.length;i++){
		for(var j=this.length;j>0;j--){
            this[j]=this[j-1];
		}
		this[0]=arguments[arguments.length-i];
	}}
	return this.length;
}
/*在一个字符串选取某类字符串的下标*/
String.prototype.index=function(){
      	var newArr=[];
	for(var i=0;i<this.length;i++){
		if(this.substr(i,arguments[0].length)==arguments[0]){
			newArr.push(i)

		}
	}
 return newArr;
}



String.prototype.index=function(){
	for(var i=0;i<this.length;i++){
		if(this.substr(i,arguments[0].length)==arguments[0]){
			document.write(i+"<br/>")

		}
	}
}

/*getElementByClassName解决兼容性问题*/
    /*传入两个参数,一个属性，一个范围*/
    /*首先判断范围的值*/
    /*判断是ie还是w3*/
    /*w3c返回的是一个集合————ie返回的是一个数组*/
function getClass(className,range){
             var range=range||document
         	if(document.getElementsByClassName){
         		return range.getElementsByClassName(className);
         	}else{
         		var all=range.getElementsByTagName("*");
         		var arr=[];
         		for(var i=0;i<all.length;i++){
                   if(checkClass(all[i],className)){
                   	arr.push(all[i]);
                   }
         		}
         		return arr;
         	}
         	
         	}
         	/*
         	checkClass(obj,className)
            判断obj里面是否包含className
            obj是一个对象，obj的属性是一个字符串
            把obj的属性拆分，遍历，对比。
         	*/
         	function checkClass(a,b){
                var p=a.className.split(" ");
                for(var i=0;i<p.length;i++){
                	if(p[i]==b){
                		return true;
                	}
                }
                return false;        	
         }
/*选项卡*/
     function xxk(son,father,span){
       var son=getClass(son);
       var father=getClass(father);
       for(var i=0;i<son.length;i++){
       	  father[i].index=i;//自定义属性
       	  father[i].onmouseover=function(){
       	  //当事件作为循环体时，遍历只会给事件传址，不会传值——事件没有被触发。
       	  //如果事件里面有用到循环元素i、j，需要给事件对象添加属性下标。
       	  	for(var j=0;j<son.length;j++){
       	  		son[j].style.display="none";
       	  	}
            var aimg=$(span,father[this.index])[0];
          aimg.style.backgroundPosition="30px -127px";
       	  	son[this.index].style.display="block";
       	  }         
       }
       for(var i=0;i<son.length;i++){
       
      	
       	father[i].onmouseout=function(){
          var aimg=$(span,father[this.index])[0];
           aimg.style.backgroundPosition="30px -23px";
       		for(var j=0;j<son.length;j++){
       		son[j].style.display="none";}
       	}       
       }
   }

/*获取与设置文本*/
   /*
   getContent(obj,[val]);
   obj 指定的对象
   val 要设置的内容;
   */
function getContent(obj,val){
	if(obj.innerText){
		if(val){
			obj.innerText=val;
		}else{
			return obj.innerText;
		}
	}else{
		if(val){
			obj.textContant=val;
		}else{
			return obj.textContant;
		}
	}
}
/*
   获取指定元素的样式
   obj是指定的元素
   attr是需要获取的属性
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
/**/
/*
   $("")
   .one  获取类名
   #one  获取id
   div   获取标签
*/
// function $(selecter){
// 	if(selecter.charAt(0)=="."){
// 		return getClass(selecter.slice(1));
// 	}else if(selecter.charAt(0)=="#"){
// 		return document.getElementById(selecter.slice(1));
// 	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
// 		return document.getElementsByTagName(selecter);
// 	}
// }====


function $(selecter,range){
    var ranges=range||document;
	if(selecter.charAt(0)=="."){
		return getClass(selecter.slice(1),ranges);
	}else if(selecter.charAt(0)=="#"){
		return document.getElementById(selecter.slice(1));
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return ranges.getElementsByTagName(selecter);
	}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
    var newObj=document.createElement(selecter.slice(1,-1));
    // newObj.style.cssText="";
    // newObj.className="";
    // rang.appendChild(newObj);
    // rang.insertBefore(newObj);
    // rang.insertAfter(newObj);
    return newObj;
  }
}




/*banner轮播*/
function banner0(win,as,lis,arrColor,slide,slideL,slideR){
	   var num=0;
	   var len=as.length;
	   var flag=true;
       //初始化
	   for(var i=0;i<len;i++){
	   	if(i==0){
	   		continue;
	   	}
	   	lis[i].style.backgroundColor=arrColor[0];
	   	as[i].style.opacity="0";
	   }

       //自动轮播
       var t=setInterval(move,2000);

       //鼠标悬停在banner界面上

       win.onmouseover=function(){
       	clearInterval(t);
       	animate(slide,{opacity:1});
       }
       win.onmouseout=function(){
       	t=setInterval(move,2000);
       	animate(slide,{opacity:0});
       }
       

       //轮播按钮
       for(var i=0;i<len;i++){

       	lis[i].index=i;
       	lis[i].onclick=function(){
          // alert(1);
          num=this.index;
       		for(var j=0;j<len;j++){
               animate(as[j],{opacity:0});
               // animate(lis[j],{backgroundColor:arrColor[0]});
               lis[j].style.backgroundColor=arrColor[0];
       		}
       		animate(as[this.index],{opacity:1});
       		// animate(lis[this.index],{backgroundColor:arrColor[1]});
          lis[this.index].style.backgroundColor=arrColor[1];
       	}
       }


       //侧滑轮
       slideL.onmouseover=function(){
       	animate(slideL,{opacity:1});
       }
       slideR.onmouseover=function(){
       	animate(slideR,{opacity:1});
       }
       slideL.onclick=function(){
       	if(flag){
       		flag=false;
       		moveL();
       	}
       }
       slideR.onclick=function(){
       	if(flag){
       		flag=false;
       		move();
       	}
        // move();
       }



       function move(){
       	  num++;
       	  if(num==len){
       	  	num=0;
       	  }
       	  for(var i=0;i<as.length;i++){
       	  	animate(as[i],{opacity:0});
       	  	// animate(lis[i],{backgroundColor:arrColor[0]});
            
            lis[i].style.backgroundColor=arrColor[0];
       	  }
       	  animate(as[num],{opacity:1},function(){
            flag=true;
          });
       	  // animate(lis[num],{backgroundColor:arrColor[1]});
          lis[num].style.backgroundColor=arrColor[1];
       }
       function moveL(){
       	  num--;
       	  if(num<0){
       	  	num=len-1;
       	  }
       	  for(var i=0;i<len;i++){
       	  	animate(as[i],{opacity:0});
       	  	// animate(lis[i],{backgroundColor:arrColor[0]});
            lis[i].style.backgroundColor=arrColor[0];
       	  }
       	  animate(as[num],{opacity:1},function(){
       	  	flag=true;
       	  });
          lis[num].style.backgroundColor=arrColor[1];
       	  // animate(lis[num],{backgroundColor:arrColor[1]});
       }
}




/*
无缝轮播

*/
function banner1(win,as,lis,arrColor,slide,slideL,slideR){
	var len=as.length;
	var flag=true;
	var index=0;
	var next=0;
	var width=parseInt(getStyle(win,"width"));
	//初始化
	for(var i=0;i<len;i++){
		if(i==0){
			continue;
		}
		as[i].style.left=width+"px";
		lis[i].style.backgroundColor="arrColor[0]";
	}


	//自动轮播
	var t=setInterval(move,1000);


	//鼠标悬停
	win.onmouseover=function(){
		clearInterval(t);
		animate(slide,{opcacity:1});
	}
	win.onmouseout=function(){
		t=setInterval(move,1000);
		animate(slide,{opcacity:0});
	}


	//轮播按钮
	for(var i=0;i<len;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(this.index==index) return;
			if(this.index>index){
			as[this.index].style.left=-width+"px";
			animate(lis[this.index],{backgroundColor:arrColor[1]});
			animate(lis[index],{backgroundColor:arrColor[0]});
			animate(as[index],{left:width});
			animate(as[this.index],{left:0});
			index=this.index;
			next=this.index;
		    }else if(this.index<index){
		    	as[this.index].style.left=width+"px";
			    animate(lis[this.index],{backgroundColor:arrColor[1]});
			    animate(lis[index],{backgroundColor:arrColor[0]});
			    animate(as[index],{left:-width});
			    animate(as[this.index],{left:0});
			    index=this.index;
			    next=this.index;
		    }
		}
	}



	//侧边滑动
	slideL.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	slideR.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}





	function move(){
		next++;
		if(next==len){
			next=0;
		}
		as[next].style.left=width+"px";
		animate(lis[index],{backgroundColor:arrColor[0]});
		animate(as[index],{left:-width});
		animate(lis[next],{backgroundColor:arrColor[1]});
		animate(as[next],{left:0},function(){
			flag=true;
		});

		index=next;
	}
	function moveR(){
		next--;
		if(next<0){
			next=len-1;
		}
		as[next].style.left=-width+"px";
		animate(lis[index],{backgroundColor:arrColor[0]});
		animate(as[index],{left:width});
		animate(lis[next],{backgroundColor:arrColor[1]});
		animate(as[next],{left:0},function(){
			flag=true;
		});

		index=next;
	}
}

/*
简易动画
animate(one,"width",500,10);
animate(obj,attr,end,speed);
 obj操作的对象
 attr改变的样式
 end结束的状态
 speed变化的速度
*/
  // function animate(obj,attr,end,speed,callback){
  // 	var width=parseInt(getStyle(obj,attr));
  // 	var t=setInterval(function(){
  // 		if(width>=end){
  // 		width=end;
  // 		clearInterval(t);
  // 		if(callback){
  // 			callback();
  // 		}        
  // 	    }
  // 	    width+=speed;
  // 		obj.style[attr]=width+'px';
  		
  // 	},50)
  // }



/*
获取子元素
type有两个值true false 空值

*/
function getChilds(obj,type){
           	var childs=obj.childNodes;
           	var arr=[];
           	if(type){
           		for(var i=0;i<obj.length;i++){
           			if(childs[i].nodeType==1||(childs[i].nodeType==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
           				arr.push(childs[i]);
           			}
           		}
           		return arr;
           	}
           	for(var i=0;i<childs.length;i++){
           		if(childs[i].nodeType==1){
           			arr.push(childs[i]);
           		}
           	}
            return arr;
           }
           function firstElement(obj){
           	return getChilds(obj)[0];
           }
           function lastElement(obj){
             var  len=getChilds(obj).length;
             return getChilds(obj)[len-1];
           }
           function randomElement(obj,type,num){
           	return getChilds(obj,type)[num];

           }



/*
  图片border对角从无到有动画效果
*/
/*
父元素相对定位
子元素绝对定位
html：
 <div class="top"></div>
 <div class="left"></div>
 <div class="bottom"></div>
 <div class="right"></div>
css:
 .top{
  width:0;
  height:1px;
  position:absolute;
  left:-1px;
  top:-1px;
  background-color:#333;
 }
 .bottom{
  width:0;
  height:1px;
  position:absolute;
  right:-1px;
  bottom-1px;
  background-color:#333;
 }
 .left{
  width:1px;
  height:0px;
  position:absolute;
  left:-1px;
  top:-1px;
  background-color:#333;
 }
 .right{
  width:1px;
  height:0px;
  position:absolute;
  right:-1px;
  bottom:-1px;
  background-color:#333;
 }
js:
  var obj=$(".father")[0];
  borderTurn(obj);
*/
function borderTure(obj){
        
        for(var i=0;i<obj.length-1;i++){
          
        	obj[i].index=i;
        	obj[i].onmouseover=function(){
        		var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left",obj[this.index])[0];
                var right=$(".right",obj[this.index])[0];
                var top=$(".top",obj[this.index])[0];
                var bottom=$(".bottom",obj[this.index])[0];
                animate(top,{width:width});
        	    animate(bottom,{width:width});
        	    animate(left,{height:height});
        	    animate(right,{height:height});
        	}
        	obj[i].onmouseout=function(){
        		var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left",obj[this.index])[0];
                var right=$(".right",obj[this.index])[0];
                var top=$(".top",obj[this.index])[0];
                var bottom=$(".bottom",obj[this.index])[0];
                animate(top,{width:0});
        	    animate(bottom,{width:0});
        	    animate(left,{height:0});
        	    animate(right,{height:0});
        	}
        }
        }

function jiedianlunbo(obj,num){
  var box=$(".bottom1_box",obj)[0];
  var as=$(".a",box);
  var width=parseInt(getStyle(as[0],"width"));
  var btnL=$(".bottom1_btL",obj)[0];
  var btnR=$(".bottom1_btR",obj)[0];
  var flag=true;
  var t;
  // t=setInterval(move,1000);

  
  btnL.onmouseover=function(){
    btnL.style.backgroundPositionX="-11px";
  }
  btnL.onmouseout=function(){
    btnL.style.backgroundPositionX="3px";
  }
  btnR.onmouseover=function(){
    btnR.style.backgroundPositionX="-39px";
  }
  btnR.onmouseout=function(){
    btnR.style.backgroundPositionX="-25px";
  }
  btnL.onclick=function(){
        if(flag){
          flag=false;
          mover();
        }
  }
  btnR.onclick=function(){
        if(flag){
          flag=false;
          move();
        }
  }
  function move(){
    animate(box,{left:20-num*width},function(){
      for(var i=0;i<num;i++){
        var first=firstElement(box);

        box.appendChild(first);
      }
      box.style.left="20px";
      flag=true;
    });
  }
  function mover(){
    for(var i=0;i<num;i++){
      var last=lastElement(box);
      var first=firstElement(box);
      box.insertBefore(last,first);
    }
    box.style.left=20-num*width+"px";
    animate(box,{left:20},function(){
      flag=true;
    });
  }
}




function needLoad(floor){
  //获取屏幕可视高度
  var ch=document.documentElement.clientHeight;
  window.onresize=function(){
    ch=document.documentElement.clientHeight;
  }
  //获取楼层缩略图
  var fix=$(".fix")[0];
  var jump=$(".jump",fix);
  var flag=true;//对onscoll进行控制
  //获取楼层offsetTop
  var len=floor.length;
  var ft=[];
  for(var i=0;i<len;i++){
    ft.push(floor[i].offsetTop);
  }
  //滚轮滑动按需加载
  var type;
  window.onscroll=function(){
    type=document.body.scrollTop?document.body:document.documentElement;
    var st=type.scrollTop;
    for(var i=0;i<len;i++){
      if(st+ch>=ft[i]+200){
        var img=$("img",floor[i]);
        for(var j=0;j<img.length;j++){
          img[j].src=img[j].getAttribute("imagepath");
        }
      }
    }
    //点亮对应楼层缩略图颜色
    if(!flag) return;
    for(var i=0;i<len-1;i++){
      if(ch+st>=ft[i+2]&&st<=ft[len-1]){
        for(var j=0;j<len-1;j++){
          jump[j].style.opacity="0";
        }
        jump[i].style.opacity="1";
      }else if(ch+st<=ft[i+2]||st>=ft[len-1]){
          jump[i].style.opacity="0";
      }
    }

    //当滚动条滑到第一楼层是楼层缩略图出现，反之消失
    if(st>=850){
      fix.style.display="block";
    }else{
      fix.style.display="none";
    }


  //侧边楼层导航
  for(var i=0;i<jump.length;i++){
    jump[i].index=i;
    jump[i].onclick=function(){
      flag=false;
      //换楼层缩略图颜色
      for(var j=0;j<jump.length;j++){
        if(j==this.index){
          jump[j].style.opacity="1";
          continue;
        }
        jump[j].style.opacity="0";
      }
      //换对应的楼层
      if(this.index==jump.length-1){
        animate(document.body,{scrollTop:0},function(){
          jump[jump.length-1].style.opacity="0";
        flag=true;
      });
      animate(document.documentElement,{scrollTop:0},function(){
        jump[jump.length-1].style.opacity="0";
        flag=true;
      });
      return;
      }
      animate(document.body,{scrollTop:ft[this.index+1]},function(){
        flag=true;
      });
      animate(document.documentElement,{scrollTop:ft[this.index+1]},function(){
        flag=true;
      });
    }
  }
  
}































}