//Variables
  var scrollpos = window.scrollY;
  var navigation = document.getElementById("navigation");
//Adding class on scroll
  function add_class_on_scroll() {
      navigation.classList.add("scrolled");
  }

//Removing class on scroll
  function remove_class_on_scroll() {
      navigation.classList.remove("scrolled");
  }

//Scroll Function
  window.addEventListener('scroll', function(){ 
      scrollpos = window.scrollY;
      if(scrollpos > 100){
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
      console.log(scrollpos);
  });