let myitemcount=document.querySelector('.item-count');
let mybtn=document.querySelectorAll('.fa-shopping-cart');
let mysum=document.querySelector('.shoppingsum');
let div=document.querySelector('.shopping-content');
let myclear=document.querySelector('.clearall');
let mycardfill=document.querySelector('.card-fill');
let mycardfillbtn=document.querySelector('.cardfillbtn');
let mylock=document.querySelector('.fa-lock');
let sum=0;
let c=0;
let i=1;
let x1=1,x2=1,x3=1,x4=1,x5=1,x6=1,x7=1,x8=1,x9=1,x10=1,x11=1,x12=1,x13=1,x14=1,x15=1,x16=1;
// console.log(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16)
    fetch('/data.json')
    .then(res=>res.json())
    .then((data)=>{
      
        mybtn.forEach((btn)=>{
            btn.setAttribute("data-count",i++);
            btn.addEventListener('click',()=>{
                c++;
                myitemcount.innerHTML=c;
        data.forEach((mydata)=>{
            if(btn.dataset.count==mydata.id){
                sum=sum+parseFloat(mydata.price);
                let s=`you added ${sum.toFixed(2)} $ to your card`
                mysum.innerHTML=s;

                let mydiv=`<div class="myshopdiv" data-val=${mydata.value}><button class="bg-success border border-0 text-white p-1 ms-3 me-1 remove-shop" data-theprice=${mydata.price} data-val=${mydata.value}>X</button> 
                <img src=${mydata.src} class="w-25 mb-1"> <span class="s-span" data-theprice=${mydata.price} id=span${mydata.id}> ${mydata.name} ${mydata.price} $ <span class="rounded-pill border border-2 badge align-middle">1</span> .</span> <br></div>`
            //    div.appendChild(mydiv);
                // div.innerHTML+=mydiv;   
            //    console.log(btn.id)
            // let mydivs=document.querySelectorAll('.myshopdiv')
            let p=`span${mydata.id}`;
            let mydivsid=document.getElementById(p)  
         if(div.innerHTML!==""&&div.contains(mydivsid)){
            if(btn.dataset.count==1){
            x1++
            mydivsid.innerHTML=` ${mydata.name} ${x1*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x1}</span> .`
            // mydivsid.setAttribute("data-theprice",`${x1*mydata.price}`)
            }else if(btn.dataset.count==2){
                x2++
                mydivsid.innerHTML=` ${mydata.name} ${x2*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x2}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x2*mydata.price}`)
            }else if(btn.dataset.count==3){
                x3++
                mydivsid.innerHTML=` ${mydata.name} ${x3*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x3}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x3*mydata.price}`)
            }else if(btn.dataset.count==4){
                x4++
                mydivsid.innerHTML=` ${mydata.name} ${x4*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x4}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x4*mydata.price}`)
            }else if(btn.dataset.count==5){
                x5++
                mydivsid.innerHTML=` ${mydata.name} ${x5*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x5}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x5*mydata.price}`)
            }else if(btn.dataset.count==6){
                x6++
                mydivsid.innerHTML=` ${mydata.name} ${x6*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x6}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x6*mydata.price}`)
            }else if(btn.dataset.count==7){
                x7++
                mydivsid.innerHTML=` ${mydata.name} ${x7*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x7}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x7*mydata.price}`)
            }else if(btn.dataset.count==8){
                x8++
                mydivsid.innerHTML=` ${mydata.name} ${x8*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x8}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x8*mydata.price}`)
            }else if(btn.dataset.count==9){
                x9++
                mydivsid.innerHTML=` ${mydata.name} ${x9*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x9}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x9*mydata.price}`)
            }else if(btn.dataset.count==10){
                x10++
                mydivsid.innerHTML=` ${mydata.name} ${x10*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x10}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x10*mydata.price}`)
            }else if(btn.dataset.count==11){
                x11++
                mydivsid.innerHTML=` ${mydata.name} ${x11*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x11}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x11*mydata.price}`)
            }else if(btn.dataset.count==12){
                x12++
                mydivsid.innerHTML=` ${mydata.name} ${x12*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x12}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x12*mydata.price}`)
            }else if(btn.dataset.count==13){
                x13++
                mydivsid.innerHTML=` ${mydata.name} ${x13*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x13}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x13*mydata.price}`)
            }else if(btn.dataset.count==14){
                x14++
                mydivsid.innerHTML=` ${mydata.name} ${x14*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x14}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x14*mydata.price}`)
            }else if(btn.dataset.count==15){
                x15++
                mydivsid.innerHTML=` ${mydata.name} ${x15*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x15}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x15*mydata.price}`)
            }else if(btn.dataset.count==16){
                x16++
                mydivsid.innerHTML=` ${mydata.name} ${x16*mydata.price} $ <span class="rounded-pill border border-2 badge align-middle"> ${x16}</span> .`
                // mydivsid.setAttribute("data-theprice",`${x16*mydata.price}`)
            }
           }else{ div.innerHTML+=mydiv;

            let removeshop=document.querySelectorAll('.remove-shop');
            // console.log(removeshop); 
            // console.log(removeshop.length);
            let myshopdiv=document.querySelectorAll('.myshopdiv');
            // console.log(myshopdiv.length);
            removeshop.forEach((rbtn)=>{rbtn.addEventListener('click',()=>{
                myshopdiv.forEach((divshop)=>{if(div.contains(divshop)&&divshop.dataset.val===rbtn.dataset.val){divshop.remove()}})
                if(rbtn.dataset.val=="v1"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x1*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x1;
                    myitemcount.innerHTML=c;
                    x1=1;
                }else if(rbtn.dataset.val=="v2"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x2*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x2;
                    myitemcount.innerHTML=c;
                    x2=1;
                }else if(rbtn.dataset.val=="v3"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x3*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x3;
                    myitemcount.innerHTML=c;
                    x3=1;
                }else if(rbtn.dataset.val=="v4"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x4*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x4;
                    myitemcount.innerHTML=c;
                    x4=1;
                }else if(rbtn.dataset.val=="v5"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x5*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x5;
                    myitemcount.innerHTML=c;
                    x5=1;
                }else if(rbtn.dataset.val=="v6"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x6*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x6;
                    myitemcount.innerHTML=c;
                    x6=1;
                }
                else if(rbtn.dataset.val=="v7"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x7*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x7;
                    myitemcount.innerHTML=c;
                    x7=1;
                }else if(rbtn.dataset.val=="v8"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x8*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x8;
                    myitemcount.innerHTML=c;
                    x8=1;
                }else if(rbtn.dataset.val=="v9"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x9*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x9;
                    myitemcount.innerHTML=c;
                    x9=1;
                }else if(rbtn.dataset.val=="v10"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x10*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x10;
                    myitemcount.innerHTML=c;
                    x10=1;
                }else if(rbtn.dataset.val=="v11"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x11*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x11;
                    myitemcount.innerHTML=c;
                    x11=1;
                }else if(rbtn.dataset.val=="v12"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x12*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x12;
                    myitemcount.innerHTML=c;
                    x12=1;
                }else if(rbtn.dataset.val=="v13"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x13*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x13;
                    myitemcount.innerHTML=c;
                    x13=1;
                }else if(rbtn.dataset.val=="v14"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x14*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x14;
                    myitemcount.innerHTML=c;
                    x14=1;
                }else if(rbtn.dataset.val=="v15"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x15*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x15;
                    myitemcount.innerHTML=c;
                    x15=1;
                }else if(rbtn.dataset.val=="v16"){
                    let y=rbtn.dataset.theprice;
                    sum-=parseFloat(x16*y);
                    let s=`you added ${sum.toFixed(2)} $ to your card`
                    mysum.innerHTML=s;
                    c-=x16;
                    myitemcount.innerHTML=c;
                    x16=1;
                }

            })})      
      
        }
            
            }
        })
             
      
        

        // removeshop.forEach((btn1)=>{
        //     btn1.addEventListener('click',()=>{
        //         console.log(btn1.dataset.theprice);
        //         let p=btn1.dataset.theprice;
        //         if(btn1.id==1){
        //             x1=1;
        //             }else if(btn1.id==2){
        //                 x2=1;
        //             }else if(btn1.id==3){
        //                 x3=1;
        //             }else if(btn1.id==4){
        //                 x4=1;
        //             }else if(btn1.id==5){
        //                 x5=1;
        //             }else if(btn1.id==6){
        //                 x6=1;
        //             }else if(btn1.id==7){
        //                 x7=1;
        //             }else if(btn1.id==8){
        //                 x8=1;
        //             }else if(btn1.id==9){
        //                 x9=1;
        //             }else if(btn1.id==10){
        //                 x10=1;
        //             }else if(btn1.id==11){
        //                 x11=1;
        //             }else if(btn1.id==12){
        //                 x12=1;
        //             }else if(btn1.id==13){
        //                 x13=1;
        //             }else if(btn1.id==14){
        //                 x14=1; 
        //             }else if(btn1.id==15){
        //                 x15=1;
        //             }else if(btn1.id==16){
        //                 x16=1;
        //             }
        //         let y=btn1.id;
        //         // console.log(y)
        //         let r= document.getElementById(y)
        //     if(r!==''){r.remove();}
        //         //   console.log(r)
        //         // r.remove();
        //         console.log(btn1.dataset.theprice)
        //         sum-=parseFloat(btn1.dataset.theprice);
        //             let s=`you added ${sum.toFixed(2)} $ to your card`
        //             mysum.innerHTML=s;
        //             c--;
        //             myitemcount.innerHTML=c;
      
        //     })
        // })  

    })
    
})

})




myclear.addEventListener('click',()=>{
    div.innerHTML="";
    c=0;
    myitemcount.innerHTML=0;
    let s=`you added 0 $ to your card`
    mysum.innerHTML=s;
    sum=0;
    x1=1,x2=1,x3=1,x4=1,x5=1,x6=1,x7=1,x8=1,x9=1,x10=1,x11=1,x12=1,x13=1,x14=1,x15=1,x16=1;
})

mycardfillbtn.addEventListener("click",()=>{
    mycardfill.style.left="5000px";
})
mylock.addEventListener("click",()=>{
    mycardfill.style.left="auto";
})