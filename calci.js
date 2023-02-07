let n=document.querySelectorAll('#btn')
let op=document.querySelectorAll('#opr')
let a=document.getElementById('text')
for(let i=0;i<n.length;i++)
{
   n[i].addEventListener("click",function f1(){
   a.value+=n[i].innerHTML
   })
}
for(let j=0;j<op.length;j++)
{
    op[j].addEventListener("click",function f2(){
    a.value+=op[j].innerHTML
    })
}
var reg=/([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/
let result=document.getElementById('op3')
result.addEventListener("click",function calculation(){
    if(reg.test(a.value))
    {
      ans=eval(a.value)
      a.value+=" = "
      a.value+=ans  
    }
    else{
      alert("Check what you have entered and enter again!!")
    }     
   } 
)
let clear=document.getElementById('op1')
clear.addEventListener("click",function clear()
{
   a.value=" "
})
let d=document.getElementById('op2')
d.addEventListener("click",function del()
{  
    
    let s=a.value
    a.value=s.substring(0,a.value.length-1)
})

