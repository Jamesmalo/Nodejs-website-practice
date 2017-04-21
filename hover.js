(function(){
  const doc = document;
  let btn1 = doc.querySelector("#leftbutton");
  btn1.addEventListener("mouseover",function(){
    btn1.style.opacity=0.8;
  });
  btn1.addEventListener("mouseout",function(){
    btn1.style.opacity=1;
  });

  let btn2 = doc.querySelector("#rightbutton");
  btn2.addEventListener("mouseover",function(){
    btn2.style.opacity=0.8;
  });
  btn2.addEventListener("mouseout",function(){
    btn2.style.opacity=1;
  });
})()
