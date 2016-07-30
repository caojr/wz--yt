window.onload=function(){

      //状态栏
      var header=$("#header");
      var firstst=$(".first",header)[0];
      var secondst=$(".second",header)[0];
      var thirdst=$(".third",header)[0];
      var spanst=$("span",header);
      var ast=$("a",header);
      var ist=$("i",header);
      var bst=$("b",header)[1];
      var imgst=$("img",header);
      firstst.onmouseover=function(){
         spanst[0].style.backgroundPosition="-224px -27px";
         ast[0].style.color="red";
      }
      firstst.onmouseout=function(){

         spanst[0].style.backgroundPosition="22px 0";
         ast[0].style.color="#666";
      }
      secondst.onmouseover=function(){
         spanst[1].style.backgroundPosition="-224px -88px";
         ast[1].style.color="red";
         ist[0].style.backgroundPosition="-175px -129px";
         ist[0].style.transition="All 0.4s ease-in-out" ;
         ist[0].style.transform="rotate(360deg)";
          
         secondst.style.backgroundColor="#fff";
         imgst[0].style.opacity='1';
         // secondst.style.width="135px";
         bst.style.opacity="0";
      }
      secondst.onmouseout=function(){
         imgst[0].style.opacity='0';
         spanst[1].style.backgroundPosition="22px 88px";
         ast[1].style.color="#666";
         ist[0].style.backgroundPosition="-175px -112px";
         // ist[0].style.transition="All 0.4s ease-in-out";
         ist[0].style.transform="";
         secondst.style.backgroundColor="#eee";
         // secondst.style.width="100px";
         bst.style.opacity="1";
      }
      thirdst.onmouseover=function(){
         spanst[2].style.backgroundPosition="0 -20px";
         ast[2].style.color="red";
         ist[1].style.backgroundPosition="-175px -129px";
         thirdst.style.backgroundColor="#fff";
         imgst[1].style.opacity='1';
         
      }
      thirdst.onmouseout=function(){

         spanst[2].style.backgroundPosition="0px 0px";
         ast[2].style.color="#666";
         ist[1].style.backgroundPosition="-175px -112px";
         thirdst.style.backgroundColor="#eee";
         imgst[1].style.opacity='0';
         
      }


     //我的银泰
     var wodeyt=$(".wodeyt")[0];
     var xldh=$(".xldh",wodeyt)[0];
     wodeyt.onmouseover=function(){
      xldh.style.display="block";
      wodeyt.style.backgroundColor="#fff";
     }
     wodeyt.onmouseout=function(){
      xldh.style.display="none";
      wodeyt.style.backgroundColor="#eee";
     }



     //搜索框
     var inputs=$("input")[0];
     inputs.onfocus=function(){
      inputs.value="";
     }
     inputs.onblur=function(){
      inputs.value="竹韵首饰 爱如珍珠 求爱大作战 全场2折起";
     }

    
     //购物车弹出
     var tanchu=$(".tanchu")[0];
     var gpuwu=$(".gouwu")[0];
     gpuwu.onmouseover=function(){
      tanchu.style.opacity="1";
     }
     gpuwu.onmouseout=function(){
      tanchu.style.opacity="0";
     }
























	//banner轮播
	var win=$(".banner")[0];
	var lisf=$(".banner4")[0];
	var lis=$("li",lisf);
	var as=$(".bannerbg",win);
	var arrColor=["#211616","#E5004F"];
	var slide=$(".slide",win)[0];
	var slideL=$(".slideL",slide)[0];
	var slideR=$(".slideR",slide)[0];
	banner0(win,as,lis,arrColor,slide,slideL,slideR);
    //banner缓慢移动
    var bannerfixs=$(".bannerfix")[0];
    var bannerfixsimg=$("img",bannerfixs)[0];

    bannerfixsimg.onmouseover=function(){
    	animate(bannerfixs,{width:1194});
    }
    bannerfixsimg.onmouseout=function(){
    	
    	animate(bannerfixs,{width:1200});
    }

    
   
  //banner导航改变背景图片
  
  // var xzfather=$(".xiaobiaoti");
  
  // for(var i=0;i<xzfather.length;i++){

  // xzfather.index=i;
  // xzfather[i].onmouseover=function(){
  //    var aimg=$("span",xzfather[this.index])[0];
  //    aimg.style.backgroundPosition="30px -127px"; 
  // }
  // xzfather[i].onmouseout=function(){
  //    var aimg=$("span",xzfather[this.index])[0];
  //    aimg.style.backgroundPosition="30px -23px"; 
  // }

  // }
  

  //banner导航
   xxk("slidebar","xiaobiaoti","span");

  //特卖品界面动画
  //写行内样式的路径问题
  var tm=$('.tm')[0];
  var tmfather=$(".f16",tm);
  var tmimg=$("img",tm);
  var tmtop=$("ul",tm)[0];
  var tmli=$("li",tmtop);
  var tmsecond=$(".second",tm)[0];
  var tmsecondimg=$("img",tmsecond);
  var tmsecondli=$("li",tmsecond);
      tmli[0].style.borderBottom="5px solid #E5004F";
      tmli[0].style.fontWeight="bold";
      tmli[0].style.background="url(img/6.png) no-repeat bottom center";

  tmfather[0].onmouseover=function(){
    for(var i=0;i<tmli.length-1;i++){
      if(i==0){
        tmli[i].style.borderBottom="5px solid #E5004F";
        tmli[i].style.fontWeight="bold";
        tmli[i].style.background="url(img/6.png) no-repeat bottom center";
        continue;
      }

      tmli[i].style.borderBottom="5px solid #333333";
      tmli[i].style.fontWeight="normal";
      tmli[i].style.background="";
    }
    tmsecond.style.display="none";
    tmimg[0].src="img/4.jpg";
    tmimg[1].src="img/5.jpg";
    tmimg[2].src="img/6.jpg";
    tmimg[3].src="img/7.jpg";
  }
  tmfather[1].onmouseover=function(){
    for(var i=0;i<tmli.length-1;i++){
      if(i==1){
        continue;
      }
      tmli[i].style.borderBottom="5px solid #333333";
    tmli[i].style.fontWeight="normal";
    tmli[i].style.background="";
    }
    tmsecond.style.display="none";
    tmli[1].style.borderBottom="5px solid #E5004F";
    tmli[1].style.fontWight="bold";
    tmli[1].style.background="url(img/6.png) no-repeat bottom center";
    tmimg[0].src="img/hh1.jpg";
    tmimg[1].src="img/hh2.jpg";
    tmimg[2].src="img/hh3.jpg";
    tmimg[3].src="img/hh4.jpg";
  }
  tmfather[2].onmouseover=function(){
    for(var i=0;i<tmli.length-1;i++){
      if(i==2){
        continue;
      }
      tmli[i].style.borderBottom="5px solid #333333";
    tmli[i].style.fontWight="normal";
    tmli[i].style.background="";
    }
    tmsecond.style.display="block";

    tmli[2].style.borderBottom="5px solid #E5004F";
    tmli[2].style.fontWight="bold";
    tmli[2].style.background="url(img/6.png) no-repeat bottom center";
    
  }

  
  for(var i=0;i<tmsecondli.length;i++){
    tmsecondli[i].index=i;
    tmsecondli[i].onmouseover=function(){
      tmsecondli[this.index].style.backgroundColor="#fff";
      tmsecondimg[this.index].style.opacity="0.9";
    }
    tmsecondli[i].onmouseout=function(){
      tmsecondimg[this.index].style.opacity="1";
    }
  }

  //特卖品选中动画
  var tmbottom=$("ol",tm)[0];
  var tmlis=$("li",tmbottom);
  borderTure(tmlis);


  //银泰百货专柜同款
  var zhuangui=$(".zhuangui")[0];
  var zhuanguiF=$(".father");
  var zhuanguifirst=$(".first",zhuangui)[0];
  var zhuanguisecond=$(".second",zhuangui)[0];
  zhuanguiF[0].style.background="url(img/6.png) center bottom no-repeat"
  zhuanguiF[0].style.borderBottom="3px solid #E70050";
  zhuanguiF[0].style.fontWeight="bold";
  zhuanguiF[0].style.color="#414141";
  zhuanguiF[0].onmouseover=function(){
     zhuanguisecond.style.display="none";
     zhuanguiF[0].style.fontWeight="bold";
     zhuanguiF[1].style.fontWight="normal";
     zhuanguiF[0].style.color="#414141";
     zhuanguiF[1].style.color="#666";
     zhuanguiF[1].style.background="";
     zhuanguiF[1].style.borderBottom="3px solid #333333";
     zhuanguiF[0].style.background="url(img/6.png) center bottom no-repeat"
     zhuanguiF[0].style.borderBottom="3px solid #E70050";
  }
  zhuanguiF[1].onmouseover=function(){
     zhuanguisecond.style.display="block";
     zhuanguiF[1].style.fontWeight="bold";
     zhuanguiF[0].style.fontWight="normal";
     zhuanguiF[1].style.color="#414141";
     zhuanguiF[0].style.color="#666";
     zhuanguiF[0].style.background="";
     zhuanguiF[0].style.borderBottom="3px solid #333333";
     zhuanguiF[1].style.background="url(img/6.png) center bottom no-repeat"
     zhuanguiF[1].style.borderBottom="3px solid #E70050";
  }

  var zhuanguiBottom=$(".bottom",zhuangui)[0];
  var zhuanguiBottomf=$(".first",zhuanguiBottom)[0];
  var zhuanguiBottomfl=$(".zhuanguifl",zhuanguiBottomf);
  borderTure1(zhuanguiBottomfl);
function borderTure1(obj){
        
        for(var i=0;i<obj.length;i++){
          
          obj[i].index=i;
          obj[i].onmouseover=function(){
            var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left3",obj[this.index])[0];
                var right=$(".right3",obj[this.index])[0];
                var top=$(".top3",obj[this.index])[0];
                var bottom=$(".bottom3",obj[this.index])[0];
                animate(top,{width:width});
              animate(bottom,{width:width});
              animate(left,{height:height});
              animate(right,{height:height});
          }
          obj[i].onmouseout=function(){
            var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left3",obj[this.index])[0];
                var right=$(".right3",obj[this.index])[0];
                var top=$(".top3",obj[this.index])[0];
                var bottom=$(".bottom3",obj[this.index])[0];
                animate(top,{width:0});
              animate(bottom,{width:0});
              animate(left,{height:0});
              animate(right,{height:0});
          }
        }
        }
      var zhuanguiBottoms=$(".second",zhuanguiBottom)[0];
      var zhuanguiBottomsimg=$("img",zhuanguiBottoms);
      for(var i=0;i<zhuanguiBottomsimg.length;i++){
        zhuanguiBottomsimg[i].index=i;
        zhuanguiBottomsimg[i].onmouseover=function(){
          for(var j=0;j<zhuanguiBottomsimg.length;j++){
            if(j==this.index){
              zhuanguiBottomsimg[j].style.opacity="0.8";
              continue;
            }
            zhuanguiBottomsimg[j].style.opacity="1";
          }
        }
      }


      /*
       楼层图片边框动画效果
      */
      var borderTure2=$(".borderTure2");
      function borderTure3(obj){
        for(var i=0;i<obj.length;i++){
          obj[i].style.position="relative";
          obj[i].index=i;
          var flag=true;
          var num1;
          obj[i].onmouseover=function(){
              for(var j=0;j<obj.length;j++){
                if(obj[j].childNodes.length>=3){
                  var top1=$(".top6",obj[j])[0];
                  var bottom1=$(".bottom6",obj[j])[0];
                  var left1=$(".left6",obj[j])[0];
                  var right1=$(".right6",obj[j])[0];
                  obj[j].removeChild(top1);
                  obj[j].removeChild(bottom1);
                  obj[j].removeChild(left1);
                  obj[j].removeChild(right1);
                  top1=null;
                  bottom1=null;
                  left1=null;
                  right1=null;
                }
              }
               
               var top=$("<div>");
               top.className="top6";
               top.style.cssText="width:0; height:1px; position:absolute; left:-1px; top:-1px; background-color:#333;"
               var bottom=$("<div>");
               bottom.className="bottom6";
               bottom.style.cssText="width:0; height:1px; position:absolute; right:-1px; bottom:-1px; background-color:#333;"
               var left=$("<div>");
               left.className="left6";
               left.style.cssText="width:1px; height:0px; position:absolute; left:-1px; top:-1px; background-color:#333;"
               var right=$("<div>");
               right.className="right6";
               right.style.cssText="width:1px; height:0px; position:absolute; right:-1px; bottom:-1px; background-color:#333;"
               obj[this.index].appendChild(top);
               obj[this.index].appendChild(bottom);
               obj[this.index].appendChild(left);
               obj[this.index].appendChild(right);
                var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left6",obj[this.index])[0];
                var right=$(".right6",obj[this.index])[0];
                var top=$(".top6",obj[this.index])[0];
                var bottom=$(".bottom6",obj[this.index])[0];
                animate(top,{width:width});
              animate(bottom,{width:width});
              animate(left,{height:height});
              animate(right,{height:height});
          }
          obj[i].onmouseout=function(){
                flag=false;
                var width=obj[this.index].offsetWidth;
                var height=obj[this.index].offsetHeight;
                var left=$(".left6",obj[this.index])[0];
                var right=$(".right6",obj[this.index])[0];
                var top=$(".top6",obj[this.index])[0];
                var bottom=$(".bottom6",obj[this.index])[0];  
                animate(top,{width:0});
                animate(bottom,{width:0});
                animate(left,{height:0});
                animate(right,{height:0});               
          }
        }
        }
        borderTure3(borderTure2);








        //楼层无缝轮播
        var floor_lb=$(".floor_lb");
        for(var i=0;i<floor_lb.length;i++){

        var flooras=$("a",floor_lb[i]);
        var floorlis=$("li",floor_lb[i]);
        var floorlisSL=$(".floor_slideL",floor_lb[i])[0];
        var floorlisSR=$(".floor_slideR",floor_lb[i])[0];
        var floor_arrColor=["#6E6E6E","#E5155C"];
        bannerFloor(floor_lb[i],flooras,floorlis,floor_arrColor,floorlisSL,floorlisSR);
        }
        function bannerFloor(win,as,lis,arrColor,slideL,slideR){
          var len=as.length;
          var flag=true;
          var index=0;
          var next=0;
          var img1=$("img",as[0])[0];
          var img2=$("img",as[1])[0];
          var width=parseInt(getStyle(win,"width"));
          //初始化
          for(var i=0;i<len;i++){
            if(i==0){
              continue;
            }
            as[i].style.left=width+"px";
            lis[i].style.backgroundColor=arrColor[0];
          }
    
    
            //自动轮播
            // var t=setInterval(move,1000);
          
          
            //鼠标悬停
            win.onmouseover=function(){
              // clearInterval(t);
              animate(slideL,{left:0});
              animate(slideR,{right:0});
              animate(img1,{opacity:0.8});
              animate(img2,{opacity:0.8});
            }
            win.onmouseout=function(){
              // t=setInterval(move,1000);
              animate(slideL,{left:-30});
              animate(slideR,{right:-30});
              animate(img1,{opacity:1});
              animate(img2,{opacity:1});
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
            slideL.onmouseover=function(){
              slideL.style.backgroundPosition="left bottom"
            }
            slideL.onmouseout=function(){
              slideL.style.backgroundPosition="left top"
            }
            slideR.onmouseover=function(){
              slideR.style.backgroundPosition="right bottom"
            }
            slideR.onmouseout=function(){
              slideR.style.backgroundPosition="right top"
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
                next=len-1;
                as[next].style.left=0+"px";
              }else{
              as[next].style.left=width+"px";}
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
                 if(next==-1){
                   next=0;
                   as[next].style.left=0+"px";
                 }else{
                 as[next].style.left=-width+"px";}
                 animate(lis[index],{backgroundColor:arrColor[0]});
                 animate(as[index],{left:width});
                 animate(lis[next],{backgroundColor:arrColor[1]});
                 animate(as[next],{left:0},function(){
                   flag=true;
                 });
             
                index=next;
                 }
               }
             


            //潮流女装、精品男装界面中间图片通明度变化
            var center_opacity=$(".center_opacity");
            for(var i=0;i<center_opacity.length;i++){
              center_opacity[i].index=i;
              center_opacity[i].onmouseover=function(){
                center_opacity[this.index].style.opacity="0.8";
              }
              center_opacity[i].onmouseout=function(){
                center_opacity[this.index].style.opacity="1";
              }
            }
             


             //楼层左边小轮播
             var bottom1=$(".jiedian_bottom");
             for(var i=0;i<bottom1.length;i++){
              jiedianlunbo(bottom1[i],1);
             }



             //按需加载
             var floor=$(".floor1");
                 needLoad(floor);
             
            

             



















}