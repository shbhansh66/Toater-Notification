 function showToaster(config){
      return function(notification){
        const div=document.createElement("div");
        div.className=` bg-${config.bgColor} text-${config.textColor} bg-gray-200 p-5 rounded-lg  shadow-lg text-1xl font-bold`;
        div.textContent=notification;

        document.querySelector('.parent').appendChild(div);

    
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
        },config.duration*1000);


      }
   }

const toaster=showToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3
})

toaster("Download done");
setTimeout(()=>{
    toaster("Your request accepted !");
},2000)

setTimeout(()=>{
    toaster("Successfully logged in !");
},3000)
