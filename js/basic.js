function changeimgs()
{
	var bigimg=document.getElementById('bigimg');
	bigimg.src=event.srcElement.src;
}
// 显示指定ID的标签
function displayobj(id){
	var obj=document.getElementById(id);
	obj.style.display="block";
}
// 隐藏指定ID的标签
function hiddenobj(id){
	var obj=document.getElementById(id);
	obj.style.display="none";
}
// 初始放大镜效果
function MiniDiv(){
	var obj1=document.getElementById("targetImg");
	var obj2=document.getElementById(event.srcElement.id);
	obj1.src=obj2.src;
}
// 放大镜特效
function MMove(){
	displayobj("bigimgboxdiv");
	MiniDiv();
	// 获取放大镜图片对象
	var obj=document.getElementById("targetImg");
	// 获取鼠标相对位移
	var offx=obj.width/event.srcElement.width;
	var offy=obj.height/event.srcElement.height;
	// 获取放大镜div对象
	var div=document.getElementById("bigimgboxdiv");
	// 重新设置容器滚动条
	div.scrollLeft=(event.offsetX*offx);
	div.scrollTop=(event.offsetY*offy);
}
function showdivbox(number)
{
	// alert(number);
	for (var i = 1; i <=5; i++) {
		if (i==number)
		{
			var obj=document.getElementById("info"+number);
			obj.style.display="";
		}
		else
		{
			var obj=document.getElementById("info"+number);
			obj.style.display="none";	
		}
	}
}