// JavaScript Document
function IsPC(){    
    var userAgentInfo = navigator.userAgent;  
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  
    //alert(navigator.userAgent);    
    flag="iPhone";  
	} else if (/(Android)/i.test(navigator.userAgent)) {  
		//alert(navigator.userAgent);   
		flag ="Android";  
	} else {  
		flag ="pc";  
	}
   return flag;    
}  
var sl=5;
var gezi_move_pd=0;
$(function(){
	SCgzX=parseInt(sl*Math.random());
	SCgzY=parseInt(sl*Math.random());
	scgezi($("#beijing"),sl,$("#zaiti"),0);
		$(window).resize(function (){
			scgezi($("#beijing"),sl,$("#zaiti"),1);
			})
		var djwz=new Array();
		var ydwz=new Array();
		$(document).keydown(function(e){
			gezi_move_pd=0;
			switch(e.which){  //判断按键
			case 37: fg("zuo");;break;
			case 38: fg("shang");;break;
			case 39: fg("you");;break;
			case 40: fg("xia");;break;
			}
		})
		$("#djtc").mousedown(function (e){
			gezi_move_pd=0;
			djwz[0]=e.pageX;
			djwz[1]=e.pageY;
			$("#zaiti").mousemove(function (){
				$("#zaiti").unbind("mousemove");
				$("#zaiti").mouseup(function (e){
					$("#zaiti").unbind("mouseup");
					ydwz[0]=e.pageX;
					ydwz[1]=e.pageY;
					$("#csa").text(ydwz[0]+"'"+ydwz[1]);
					var zuo=djwz[0]-ydwz[0];
					var you=ydwz[0]-djwz[0];
					var shang=djwz[1]-ydwz[1];
					var xia=ydwz[1]-djwz[1];
					if(zuo>you&&zuo>shang&&zuo>xia)
					{
						fg("zuo");
						}
					if(you>zuo&&you>shang&&you>xia)
					{
						fg("you");
						}
					if(shang>zuo&&shang>you&&shang>xia)
					{
						fg("shang");
						}
					if(xia>zuo&&xia>shang&&xia>you)
					{
						fg("xia");
						}

					});
				})

			})
			szsc();
		}

)
	
var fgs=new Array();
var ByddgzX//被移动的格子X
var ByddgzY//被移动的格子Y
var Xzhou;//格子要移动到X轴
var Yzhou;//格子要移动到Y轴
var SCgzX;//要产生的格子X轴
var SCgzY;//要产生的格子Y轴
var kd=$("#beijing").width();
var bs=30/sl;
var jd=bs/sl;
function fg(fx,pd)
{
	for(var a=0;a<sl;a++)
	{
		fgs[a]=new Array();
		}
	for(var a=0;a<sl;a++)
	{
		for(var b=0;b<sl;b++)
		{
			fgs[a][b]=0;
			}
	}
	if(fx=="xia")
	{
		for(var a=sl-1;a>=0;a--)
		{
			pdyd=0
			for(var b=0;b<sl;b++)
				{
					pdgzyd(a,b,fx);
				}
		}
		setTimeout(function (){if(gezi_move_pd==1){
			szsc();
		}},150);
	}
	if(fx=="shang")
	{
		for(var a=0;a<=sl-1;a++)
		{
			pdyd=0
			for(var b=0;b<sl;b++)
				{
					pdgzyd(a,b,fx);
				}		
		}
		setTimeout(function (){if(gezi_move_pd==1){
			szsc();
		}},150);
	}
	if(fx=="zuo")
	{
		for(var a=0;a<=sl-1;a++)
		{
			pdyd=0
			for(var b=0;b<sl;b++)
				{
					pdgzyd(a,b,fx);
				}		
		}
		setTimeout(function (){if(gezi_move_pd==1){
			szsc();
		}},150);
	}
	if(fx=="you")
	{
		for(var a=sl-1;a>=0;a--)
		{
			pdyd=0
			for(var b=0;b<sl;b++)
				{
					pdgzyd(a,b,fx);
				}		
		}
		setTimeout(function (){if(gezi_move_pd==1){
			szsc();
		}},150);
	}
	
}

function scsjsz()
{
	if($("#h"+SCgzX+"p"+SCgzY).attr("class")==undefined)
	{
		x=SCgzX;
		y=SCgzY;
		var ca=(parseInt(Math.random()*2)+1)*2;
		sz=$("<div id='h"+x+"p"+y+"'; class="+ca+">"+ca+"</div>");
		sz.css('font-size',kd/sl+"px");
		sz.css('letter-spacing','0.1em')
		sz.css("text-align","center");
		sz.css("line-height",kd/sl+"px");
		sz.width(kd/sl+"px");
		sz.height(kd/sl+"px");
		sz.css("border-radius","10%");
		sz.css("background","#FFC");
		sz.css("position","absolute");
		sz.css("z-index","2");
		sz.css("top",bs+((kd/sl)*x)+(bs*x)-(jd*x)+"px");
		sz.css("left",bs+((kd/sl)*y)+(bs*y)-(jd*y)+"px");
		$("#beijing").append(sz);
	}
}
	
var pdyd=0
function pdgzyd(a,b,fx)//分别为x轴 y轴，方向参数 根据方向进行移动
{
	if(fx=='xia')
	{
		for(var c=a-1;c>=0;c--)//从下方进行遍历移动
		{
			if(c<0)
			{
				c=0
			}
				if($("#h"+a+"p"+b).attr('class')==undefined)
				{
					if($("#h"+c+"p"+b).attr('class')!=undefined)
					{
						$("#h"+c+"p"+b).attr('id',"h"+a+"p"+b)
						$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
						gezi_move_pd=1;
						for(var d=a-1;d>=0;d--)
						{
							if($("#h"+a+"p"+b).attr('class')!=undefined)
							{
								if($("#h"+a+"p"+b).attr('class')==$("#h"+d+"p"+b).attr('class'))
								{
									$("#h"+a+"p"+b).remove();
									$("#h"+d+"p"+b).attr('id',"h"+a+"p"+b)
									merge($("#h"+a+"p"+b))
									$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
									return;	
								}
								if($("#h"+a+"p"+b).attr('class')!=$("#h"+c+"p"+b).attr('class')&&$("#h"+d+"p"+b).attr('class')!=undefined)
								{
									return;	
								}
							}
						}
						return;
					}
				}
				else
				{
					if($("#h"+a+"p"+b).attr('class')!=undefined)
					{
						if($("#h"+a+"p"+b).attr('class')==$("#h"+c+"p"+b).attr('class'))
						{
							$("#h"+a+"p"+b).remove();
							$("#h"+c+"p"+b).attr('id',"h"+a+"p"+b)
							merge($("#h"+a+"p"+b))
							$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
							gezi_move_pd=1;
							return;	
						}
						if($("#h"+a+"p"+b).attr('class')!=$("#h"+c+"p"+b).attr('class')&&$("#h"+c+"p"+b).attr('class')!=undefined)
						{
							return;	
						}
					}
				}
		}
	}
	if(fx=='shang')
	{
		for(var c=a+1;c<=sl-1;c++)
		{
			if(c<0)
			{
				c=0
			}
				if($("#h"+a+"p"+b).attr('class')==undefined)
				{
					if($("#h"+c+"p"+b).attr('class')!=undefined)
					{
						$("#h"+c+"p"+b).attr('id',"h"+a+"p"+b)
						$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
						gezi_move_pd=1;
						for(var d=a+1;d<=sl-1;d++)
						{
							if($("#h"+a+"p"+b).attr('class')!=undefined)
							{
								if($("#h"+a+"p"+b).attr('class')==$("#h"+d+"p"+b).attr('class'))
								{
									$("#h"+a+"p"+b).remove();
									$("#h"+d+"p"+b).attr('id',"h"+a+"p"+b)
									merge($("#h"+a+"p"+b))
									$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
									return;	
								}
								if($("#h"+a+"p"+b).attr('class')!=$("#h"+d+"p"+b).attr('class')&&$("#h"+d+"p"+b).attr('class')!=undefined)
								{
									return;	
								}
							}
						}
						return;
					}
				}
				else
				{
					if($("#h"+a+"p"+b).attr('class')!=undefined)
					{
						if($("#h"+a+"p"+b).attr('class')==$("#h"+c+"p"+b).attr('class'))
						{
							$("#h"+a+"p"+b).remove();
							$("#h"+c+"p"+b).attr('id',"h"+a+"p"+b)
							merge($("#h"+a+"p"+b))
							$("#h"+a+"p"+b).animate({top:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
							gezi_move_pd=1;
							return;	
						}
						if($("#h"+a+"p"+b).attr('class')!=$("#h"+c+"p"+b).attr('class')&&$("#h"+c+"p"+b).attr('class')!=undefined)
						{
							return;	
						}
					}
				}
		}
	}
	if(fx=='zuo')
	{
		for(var c=a+1;c<=sl-1;c++)
		{
			if(c<0)
			{
				c=0
			}
				if($("#h"+b+"p"+a).attr('class')==undefined)
				{
					if($("#h"+b+"p"+c).attr('class')!=undefined)
					{
						$("#h"+b+"p"+c).attr('id',"h"+b+"p"+a)
						$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
						gezi_move_pd=1;
						for(var d=a+1;d<=sl-1;d++)
						{
							if($("#h"+b+"p"+a).attr('class')!=undefined)
							{
								if($("#h"+b+"p"+a).attr('class')==$("#h"+b+"p"+d).attr('class'))
								{
									$("#h"+b+"p"+a).remove();
									$("#h"+b+"p"+d).attr('id',"h"+b+"p"+a)
									merge($("#h"+b+"p"+a))
									$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
									return;	
								}
								if($("#h"+b+"p"+a).attr('class')!=$("#h"+b+"\p"+d).attr('class')&&$("#h"+b+"p"+d).attr('class')!=undefined)
								{
									return;	
								}
							}
						}
						return;
					}
				}
				else
				{
					if($("#h"+b+"p"+a).attr('class')!=undefined)
					{
						if($("#h"+b+"p"+a).attr('class')==$("#h"+b+"p"+c).attr('class'))
						{
							$("#h"+b+"p"+a).remove();
							$("#h"+b+"p"+c).attr('id',"h"+b+"p"+a)
							merge($("#h"+b+"p"+a))
							$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
							gezi_move_pd=1;
							return;	
						}
						if($("#h"+b+"p"+a).attr('class')!=$("#h"+b+"p"+c).attr('class')&&$("#h"+b+"p"+c).attr('class')!=undefined)
						{
							return;	
						}
					}
				}
		}
	}
	if(fx=='you')
	{
		for(var c=a-1;c>=0;c--)
		{
			if(c<0)
			{
				c=0
			}
				if($("#h"+b+"p"+a).attr('class')==undefined)
				{
					if($("#h"+b+"p"+c).attr('class')!=undefined)
					{
						$("#h"+b+"p"+c).attr('id',"h"+b+"p"+a)
						$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
						gezi_move_pd=1;
						for(var d=a-1;d>=0;d--)
						{
							if($("#h"+b+"p"+a).attr('class')!=undefined)
							{
								if($("#h"+b+"p"+a).attr('class')==$("#h"+b+"p"+d).attr('class'))
								{
									$("#h"+b+"p"+a).remove();
									$("#h"+b+"p"+d).attr('id',"h"+b+"p"+a);
									merge($("#h"+b+"p"+a));
									$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
									return;	
								}
								if($("#h"+b+"p"+a).attr('class')!=$("#h"+b+"p"+d).attr('class')&&$("#h"+b+"p"+d).attr('class')!=undefined)
								{
									return;	
								}
							}
						}
						return;
					}
				}
				else
				{
					if($("#h"+b+"p"+a).attr('class')!=undefined)
					{
						if($("#h"+b+"p"+a).attr('class')==$("#h"+b+"p"+c).attr('class'))
						{
							$("#h"+b+"p"+a).remove();
							$("#h"+b+"p"+c).attr('id',"h"+b+"p"+a)
							merge($("#h"+b+"p"+a))
							$("#h"+b+"p"+a).animate({left:bs+((kd/sl)*a)+(bs*a)-(jd*a)+"px"},100);
							gezi_move_pd=1;
							return;	
						}
						if($("#h"+b+"p"+a).attr('class')!=$("#h"+b+"p"+c).attr('class')&&$("#h"+b+"p"+c).attr('class')!=undefined)
						{
							return;	
						}
					}
				}
		}
	}
	
}

function szsc(){
	SCgzX=parseInt(sl*Math.random());
	SCgzY=parseInt(sl*Math.random());
	for(var a=0;a===0;a){
		SCgzX=parseInt(sl*Math.random());
		SCgzY=parseInt(sl*Math.random());
		if($("#h"+SCgzX+"p"+SCgzY).attr("class")==undefined)
		{
			setTimeout(function() {scsjsz()},300)
			return;
			}
		else
		{
			fg("sc","cx");
		}
	}
}

function scgezi(bj,hs,zt,pd){	
$("#djtc").css("width",$("#zaiti").width()+30+"px");
$("#djtc").css("height",$("#zaiti").width()+30+"px");
zt.css("background","#B3924D");
zt.css("height",bj.width()+30+"px");
kd=bj.width();
bs=30/sl;
jd=bs/sl;
if(pd==0)
{
	for(var a=0;a<sl;a++)
	{
		for(b=0;b<sl;b++)
		{
			gezi=$("<div class="+"hang"+a+"></div>");
			gezi.width(kd/hs+"px");
			gezi.height(kd/hs+"px");
			gezi.css("border-radius","10%");
			gezi.css("background","#c6ad79");
			gezi.css("position","absolute");
			gezi.css("z-index","2");
			gezi.css("top",bs+((kd/hs)*a)+(bs*a)-(jd*a)+"px");
			gezi.css("left",bs+((kd/hs)*b)+(bs*b)-(jd*b)+"px");
			$("#beijing").append(gezi);
		}
	}
	
}
if(pd==0)
{
	for(var a=0;a<sl;a++)
	{
		for(b=0;b<sl;b++)
		{
			gezi=$(".hang"+a).eq(b);
			gezi.width(kd/hs+"px");
			gezi.height(kd/hs+"px");
			gezi.css("top",bs+((kd/hs)*a)+(bs*a)-(jd*a)+"px");
			gezi.css("left",bs+((kd/hs)*b)+(bs*b)-(jd*b)+"px");
		}
	}	
}
}

var thnr=new Array(20);

function merge(hbgz)
{
	hbgz.text(hbgz.attr("class")*2);
	hbgz.attr("class",hbgz.attr("class")*2)
}