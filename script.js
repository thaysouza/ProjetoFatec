function progress(){
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50)

  function frame(){
      if(progress == 250 && counter == 50){
          clearInterval(id);
      }else{
         progress += 5;
         counter +=1;
         prg.style.width = progress + 'px';
         percent.innerHTML = counter + '% Concorda'; 
      }
  }
}

progress(); 


function progress2(){
    var prg2 = document.getElementById('progress2');
    var percent2 = document.getElementById('percentCount2');
    var counter2 = 5;
    var progress2 = 25;
    var id2 = setInterval(frame2, 50)

  function frame2(){
      if(progress2 == 250 && counter2 == 50){
          clearInterval(id);
      }else{
         progress2 += 5;
         counter2 +=1;
         prg2.style.width = progress2 + 'px';
         percent2.innerHTML = counter2 + '% Não concorda'; 
      }
  }
}

progress2(); 