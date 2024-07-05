 /* Vanilla Js code */
 var date = new Date();
 document.getElementById("f").innerHTML=date.getFullYear();
 var nav = document.querySelectorAll(".lit")
 var div = document.querySelectorAll(".show")
 const edu = document.querySelectorAll(".bc")
 const sp = document.querySelectorAll(".ac")
 const tabs = document.querySelectorAll(".tab-pan") //get all tab contents
 console.log(tabs.length)
 console.log(edu.length)

 for (let i=0; i<edu.length;i++)
     {
         edu[i].addEventListener("click",
         function()
             {
                 for (let i=0; i < edu.length; i++)
                     {
                         sp[i].classList.remove("actstatus")
                     }
                 sp[i].classList.add("actstatus")
             }
         );
     }
 for (let i=0; i< nav.length;i++)
     {
         nav[i].addEventListener("click",
         function()
             {
                 for (let i=0; i<nav.length;i++)
                     {
                         div[i].classList.remove("act");
                         tabs[i].classList.remove("active")
                     }
                 div[i].classList.add("act");
                 tabs[i].classList.add("active")
             }
          );
     }
 function widthShow()
     {
         const prog = document.querySelectorAll(".prog-bar")
         const num = document.querySelectorAll(".done")

         for (let i=0; i<prog.length;i++)
             {
                 let stat = 2000;
                 let w = 0;
                 let val = parseInt(prog[i].getAttribute("dataval").replace("%", ""))
                 let mil = Math.round(stat/val);
                 let inter = setInterval(
                                 function()
                                     {
                                         if (w==val)
                                             {
                                                 clearInterval(inter)
                                             }
                                         else
                                             {
                                                 w+=1;
                                                 prog[i].style.width = w + "%";
                                                 num[i].innerHTML = w + "%";
                                             }


                                     }
                                 , mil)
              }
     }