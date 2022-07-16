function clears()
{
    document.getElementById("BOX").value="";
}
function input(value)
{
    document.getElementById("BOX").value += value;
}
function calcu()
{
    var ans=document.getElementById("BOX").value;
    var result=eval(ans);
    if(result=="Infinity" || result=="-Infinity")
    {
        document.getElementById("BOX").style.background="red";
    }
    else
    {
        document.getElementById("BOX").style.background="green";
    }
    document.getElementById("BOX").value=result;
}