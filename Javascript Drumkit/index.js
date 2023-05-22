window.addEventListener('keydown',function(e){
    //select audio to press
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running together all
     audio.play();
     audio.currentTime=0; 
     //add that button transition 
     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    })

    function removeTransition(e){
    
        if(e.target.propertyName!='transform') return;

        e.target.classList.remove('playing');
    }
   /*
         When you have an array of event you cant listen all of them. You explicitly must loop over
         every single element and attach event listener.   
   */
    const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
   