 /* Vanilla Js code */
 var date = new Date();
 document.getElementById("f").innerHTML=date.getFullYear();
 var nav = document.querySelectorAll(".lit")
 var div = document.querySelectorAll(".show")
 const edu = document.querySelectorAll(".edu-item")
 const sp = document.querySelectorAll(".active-line")
 const active_port = document.querySelectorAll('.active-line-port')
 const portfolio = document.querySelectorAll('.port')
 const tabs = document.querySelectorAll(".tab-pan") //get all tab contents
 const hideDefault = document.querySelectorAll('.hide')
 const eduMore = document.querySelectorAll('.expand')
 const eduLess = document.querySelectorAll('.contract')
 const seeMore = document.querySelectorAll('.see-more-drop')
 const skill_items = document.querySelectorAll('.skill-item')
 const icon_drop_plus = document.querySelectorAll('.plus')
 const icon_drop_minus = document.querySelectorAll('.minus')
 const skill_item_list = document.querySelectorAll('.skill-item-list')
 const icon_drop_plus_item = document.querySelectorAll('.plus-item')
 const icon_drop_minus_item = document.querySelectorAll('.minus-item')
 // console.log(skill_items.length, icon_drop_plus.length, icon_drop_minus.length)
 //console.log(portfolio.length, active_port.length)


 // handle what happeens when see more button is clicked
 for (let i = 0; i < eduMore.length; i++){
    eduMore[i].addEventListener('click', () => {
    eduMore[i].classList.add('hide')
    seeMore[i].classList.add('active')
    eduLess[i].classList.add('active')
     })
 }

// handle what happeens when see less button is clicked
 for (let i = 0; i < eduLess.length; i++){
    eduLess[i].addEventListener('click', () => {
    eduLess[i].classList.remove('active')
    seeMore[i].classList.remove('active')
    eduMore[i].classList.remove('hide')
     })
 }


// handles what happens when the plus icon is clicked
    for (let i = 0; i < icon_drop_plus.length; i++){
        icon_drop_plus[i].addEventListener('click', () => {
        icon_drop_plus[i].classList.remove('active')
        icon_drop_minus[i].classList.add('active')
        skill_items[i].classList.remove('close')
        })
    }
// handles what happens when the minus icon is clicked
    for (let i = 0; i < icon_drop_minus.length; i++){
        icon_drop_minus[i].addEventListener('click', () => {
        icon_drop_minus[i].classList.remove('active')
        icon_drop_plus[i].classList.add('active')
        skill_items[i].classList.add('close')
        })
    }

// handles what happens when the plus item icon is clicked
    for (let i = 0; i < icon_drop_plus_item.length; i++){
        icon_drop_plus_item[i].addEventListener('click', () => {
        icon_drop_plus_item[i].classList.remove('active')
        icon_drop_minus_item[i].classList.add('active')
        skill_item_list[i].classList.remove('close')
        })
    }

// handles what happens when the minus item icon is clicked
    for (let i = 0; i < icon_drop_minus_item.length; i++){
        icon_drop_minus_item[i].addEventListener('click', () => {
        icon_drop_minus_item[i].classList.remove('active')
        icon_drop_plus_item[i].classList.add('active')
        skill_item_list[i].classList.add('close')
        })
    }

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    hideDefault.forEach(section => {
        observer.observe(section);
    });
});

// handle active status under education/about

 for (let i = 0; i < edu.length; i++)
     {
         edu[i].addEventListener("click",
         function()
             {
                // console.log(this.classList)
                 for (let i = 0; i < edu.length; i++)
                     {
                         sp[i].classList.remove("actstatus")
                     }
                 sp[i].classList.add("actstatus")
             }
         );
     }

     // handle active status under portfolio section

     for (let i = 0; i < portfolio.length; i++)
        {
            portfolio[i].addEventListener("click",
            function()
                {
                   // console.log(this.classList)
                    for (let i = 0; i < active_port.length; i++)
                        {
                            active_port[i].classList.remove("actstatus")
                        }
                    active_port[i].classList.add("actstatus")
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



 function widthShow(target_element, done_status)
     {
         const prog = document.querySelectorAll(`.${target_element}`)
         const num = document.querySelectorAll(`.${done_status}`)
         // console.log(prog.length, num.length)

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
     