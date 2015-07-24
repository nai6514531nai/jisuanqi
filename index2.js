
var sNum1='';
var sOpr='';//运算符号
var bNeedClear=false;	//清除标记
//计算加减乘除
function calc(iNum1, iNum2, sOpr)
{
    var iResult=0;
    switch(sOpr)
    {
        case '×':
            iResult=iNum1*iNum2;
            break;
        case '+':
            iResult=iNum1+iNum2;
            break;
        case '-':
            iResult=iNum1-iNum2;
            break;
        case '÷':
            iResult=iNum1/iNum2;
            break;
        default:
            iResult=iNum2;
    }

    return iResult;
}
//
function doInput()
{
    var oInput=document.getElementById('show1');//获取id为show1的输入框

    var sHtml=this.innerHTML.replace(' ','');//获取每个不含有空格的span
    switch(sHtml)
    {
        case '=':
            oInput.value=calc(parseFloat(sNum1), parseFloat(oInput.value), sOpr);

            sNum1='';//输入的值
            sOpr='';//运算符号
            bNeedClear=true;//标记判断为正
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            bNeedClear=true;

            if(sNum1.length!=0)
            {
                oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
            }
            sOpr=sHtml;
            sNum1=oInput.value;//当前显示的值
            break;
        case 'C':
            oInput.value='0';//清除屏幕内容
            sNum1='';
            sOpr='';
            break;
        case '.':

                var str = oInput.value;
                if(str!=0){

                    for (var i = 0; i <= str.length; i++) { //判断是否已经有一个点号
                        if (str.substr(i, 1) == ".") return false; //如果有则不再插入
                    }
                    str = str + ".";
                    oInput.value = str;
                    return oInput.value;
                }else{
                    str = str + ".";
                    oInput.value = str;
                    return oInput.value;
                }




        default:	//数字

            if(bNeedClear)
            {
                oInput.value=parseFloat(sHtml, 10);//清除显示框中的数字同时在新的显示框中显示数字。同时将判断标记改为flase
                bNeedClear=false;

            }
            else
            {
                oInput.value=parseFloat(oInput.value+sHtml, 10);//不进行清除操作。
            }
            break;
    }
}
var flag = 0;
function openplay( ) {
    var em = document.createElement("embed");
    em.autostart="1" ;
    em.src="music.wav";
      em.width=0;
    em.height=0;
      //你的声音地址
    document.documentElement.appendChild(em);

}
function addClass(element, value ){
    if (!element.className){
        element.className = value;
    }else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value ;
        element.className = newClassName;
    }
}
//给每个span添加鼠标点击事件。
window.onload=function ()
{
    var aLi=document.getElementsByTagName('a');//获取每一个a元素
    var i=0;

    for(i=0;i<aLi.length;i++)
    {
        aLi[i].onmousedown=doInput;
        aLi[i].onclick=openplay;
        this.addClass("a","unselect");
    }
};
var template =
    '<div class="jcalculator">' +
    '<span>7</span>' +
    '<span>8</span>' +
    '<span>9</span>' +
    '<span class="plus operation">+</span>' +
    '<span>4</span>' +
    '<span>5</span>' +
    '<span>6</span>' +
    '<span class="minus operation">-</span>' +
    '<span>1</span>' +
    '<span>2</span>' +
    '<span>3</span>' +
    '<span class="multiplication operation">x</span>' +
    '<span class="clear operation">C</span>' +
    '<span>0</span>' +
    '<span class="equal operation">=</span>' +
    '<span class="divide operation">&divide;</span>' +
    '</div>';




    dddd