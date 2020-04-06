      $(document).ready(function() {
          $('.game-carousel').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false
          });

          $('.game-carousel-mobile').slick({
              arrows: false
          });

          $('.prev').click(function() {
              $('.game-carousel').slick('slickPrev');
              $('.game-carousel-mobile').slick('slickPrev');
          });

          $('.next').click(function() {
              $('.game-carousel').slick('slickNext');
              $('.game-carousel-mobile').slick('slickNext');
          });

          $('input#game_description').characterCounter();

          $('select').material_select();

          $('.button-collapse').sideNav();

          $('.materialboxed').materialbox();

          $('.tooltipped').tooltip();

          $('.modal').modal();

          $('.dropdown-trigger').dropdown();

          $('#add-game').click(formValidationGame);

          $('#edit-game').click(formValidationGame);

          $('#add-review').click(formValidationReview);

          $('#edit-review').click(formValidationReview);


          //Form validation for addgame.html and editgame.html
          function formValidationGame() {
              let game_name = document.getElementById('game_name');
              let game_description = document.getElementById('game_description');
              let manufacturer = document.getElementById('manufacturer');
              let number_of_players_min = document.getElementById('number_of_players_min');
              let number_of_players_max = document.getElementById('number_of_players_max');
              let age_range = document.getElementById('age_range');

              if (nonEmptyName(game_name, "Please input a Game Name")) {
                  if (nonEmptyDesc(game_description, "Please input a Description")) {
                      if (nonEmptyManufacturer(manufacturer, "Please input a Manufacturer")) {
                          if (numbersOnly(number_of_players_min, "Please input numbers only")) {
                              if (numbersOnly(number_of_players_max, "Please input numbers only")) {
                                  if (numbersOnlyAge(age_range, "Please input numbers only. If the game has no recommended minimum age, please input 0.")) {
                                      return true;
                                  }
                              }
                          }
                      }
                  }
              }
              return false;
          }

          function nonEmptyName(inputtext, alertMsg) {
              if (inputtext.value.length == 0) {
                  document.getElementById('p1').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }

          function nonEmptyDesc(inputtext, alertMsg) {
              if (inputtext.value.length == 0) {
                  document.getElementById('p2').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }

          function nonEmptyManufacturer(inputtext, alertMsg) {
              if (inputtext.value.length == 0) {
                  document.getElementById('p3').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }

          function numbersOnly(inputtext, alertMsg) {
              var numbers = /^[0-9]+$/;
              if (inputtext.value.match(numbers)) {
                  return true;
              }
              else {
                  document.getElementById('p4').innerText = alertMsg;
                  return false;
              }
          }

          function numbersOnlyAge(inputtext, alertMsg) {
              var numbers = /^[0-9]+$/;
              if (inputtext.value.match(numbers)) {
                  return true;
              }
              else {
                  document.getElementById('p5').innerText = alertMsg;
                  return false;
              }

          }

          ///Form validation for addreview.html and editreview.html
          function formValidationReview() {
              let game_name = document.getElementById('game_name');
              let review = document.getElementById('review');
              let rating = document.getElementById('rating');

              if (selectionGame(game_name, "Please choose a Game")) {
                  if (nonEmptyReview(review, "Please input a Review")) {
                      if (selectionRating(rating, "Please choose a Rating out of 5")) {
                          return true;
                      }
                  }

              }
              return false;
          }

          function selectionGame(inputtext, alertMsg) {
              if (inputtext.value == "-1") {
                  document.getElementById('p6').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }

          function nonEmptyReview(inputtext, alertMsg) {
              if (inputtext.value.length == 0) {
                  document.getElementById('p7').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }

          function selectionRating(inputtext, alertMsg) {
              if (inputtext.value == "-1") {
                  document.getElementById('p8').innerText = alertMsg;
                  return false;
              }
              else {
                  return true;
              }
          }


      });
      