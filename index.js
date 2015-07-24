
window.onload=function()
{
    var oShow=getByClass("calculator","show")[0];//获取类名为show的div
    var aNum=document.getElementById("calculator").getElementsByTagName("span");//获取span标签
    for(var i=0,iLen=aNum.length;i<iLen;i++)//遍历span标签
    {
        aNum[i].onclick=function()//给每个span标签添加点击事件。
        {

            var oShowVal=oShow.innerHTML;//获取显示框的内容
            var oNumVal=this.innerHTML;//每个span的内容
            var num1,num2=null;
            num1=oShowVal;
//判断按键

            if(oNumVal=="AC")
            {
                oShow.innerHTML="";
            }
            else if(oNumVal=="=")
            {
                var result=eval(oShowVal);
                oShow.innerHTML=result;


            }
            else
            {
                oShow.innerHTML+=oNumVal;


            }



        }
    }
}
//获取id为root下面的sclass类
function getByClass(root,sClass)
{
    var obj=document.getElementById(root);
    var arr=[];
    var aItems=obj.getElementsByTagName("*");
    for(var i=0;i<aItems.length;i++)
    {
        if(aItems[i].className==sClass)
        {
            arr.push(aItems[i]);
        }
    }
    return arr;
}


