const text = new IntersectionObserver((entry) =>{

  entry.array.forEach(element => {
      if(entry == true){
        text.target.classList.add('show');
        text.target.classList.remove('hid');
      }
      else if(entry == false){
        text.classList.remove('show');
        text.classList.add('hid');
      }
  });
});

let hiddenElement = document.querySelector('.hid');
hiddenElement = (element) => text.observe(element);