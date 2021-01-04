//back to top button

  mybutton = document.getElementById("myBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
      }

      
      function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

      $('#myBtn').click(function(){
        topFunction();
      });

//search field (https://tripadvisor.co.uk/Search?q=${userInput})
    searchButton = document.getElementById("searchbtn")
    searchBar = document.getElementById("searchbar")


//family card expanding button
$("#castle-txt-btn").click(function(){
    $(".castle-txt").slideToggle();
});

$("#food-txt-btn").click(function(){
    $(".food-txt").slideToggle();
});

$("#family-txt-btn").click(function(){
    $(".family-txt").slideToggle();
});

$("#mountains-txt-btn").click(function(){
    $(".mountains-txt").slideToggle();
});