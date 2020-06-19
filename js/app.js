
  $(document).ready(function(){
    $('.btn-product-popup').on('click', function(){
      $('#loading-spinner').css("display", "block");

      var productID = $(this).closest("[data-product-id]").data("product-id");

      if($('.single-product-container__slider_popup').hasClass('slick-initialized')){
        $('.single-product-container__slider_popup').slick('slickRemove', null, null, true);
        $('.single-product-container__slider_popup').slick('unslick');
      }

      $.ajax({
        cache: false,
        url: "http://serwer2090327.home.pl/products/product_" + productID + ".json",
        dataType: "json",
        success: function(response){
          $.each(response.pictures, function(i, field){

            var htmlSlideStructure = "<div> \
            <a href='' title=''> \
                <img src='" + field + "' alt=''> \
            </a> \
            <div> \
                <div> \
                    <div class='slider-badge'> \
                        promocja \
                    </div> \
                    <div class='slider-rating-wrapper'> \
                        <i class='icon-star'></i> \
                        <i class='icon-star'></i> \
                        <i class='icon-star'></i> \
                        <i class='icon-star'></i> \
                        <i class='icon-star' style='color: #CFCFCF;'></i> \
                        <span>4.5</span> \
                    </div> \
                </div> \
                <div> \
                    <div class='slider-shoe-name'></div> \
                    <span class='slider-shoe-code'></span><span class='toggle-mobile' class='slider-shoe-code-desc'></span> \
                </div> \
            </div> \
            </div>";

            $('.single-product-container__slider_popup').append(htmlSlideStructure);

          });
          
          // var picturesAmount = Object.keys(response.pictures).length;

          $('#product-popup-modal').css("display", "block");

          $('#product-popup-modal').find('.slider-shoe-name').html(response.productName);
          $('#product-popup-modal').find('.slider-shoe-code').html(response.productCode);
          $('#product-popup-modal').find('.slider-shoe-code-desc').html(response.productCodeDesc);
          $('#product-popup-modal').find('.current-price').html(response.productPrice);

          var priceBeforeDiscount = response.productPriceBefore;

          if (priceBeforeDiscount.length == 0) {
            $('#product-popup-modal').find('.discount-text').css("display", "none");
            $('#product-popup-modal').find('.price-before-discount').css("display", "none");
          } else {
            $('#product-popup-modal').find('.discount-text').css("display", "block");
            $('#product-popup-modal').find('.price-before-discount').css("display", "block");
            $('#product-popup-modal').find('.price-before-discount').html(response.productPriceBefore);
            $('#product-popup-modal').find('.discount-percent').html(response.productDiscountPercent);
            $('#product-popup-modal').find('.discount-amount').html(response.productDiscountAmount);
          }

          $('.shoe-size-wrapper').children().remove();
          $('.shoe-size-wrapper').append("<div class='custom-select'><select class='select-active normal'></select></div>");
          $('.shoe-size-wrapper select').append("<option value='0'>wybierz rozmiar</option>");
          $.each(response.sizes, function(i, field){
            $('.shoe-size-wrapper select').append("<option value='" + i + "'>" + field + "</option>")
          });

          initBootSizeSelect();

          setTimeout(function(){
            $('.single-product-container__slider_popup').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              arrows: true,
              prevArrow: '<button type="button" class="horizontal-big-arrow-slick-prev">Previous</button>',
              nextArrow: '<button type="button" class="horizontal-big-arrow-slick-next">Next</button>',
            });

            $('#loading-spinner').css("display", "none");
          }, 1000);
        },
        error: function(xhr){
          alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
      });

    });



    $('.action-wrapper button').on('click', function(){

      var bootSize = $('select.select-active').children("option:selected").val();

      if(bootSize != 0) {
        var $loadingModal = $('#loading-modal');

        $loadingModal.css("display", "block");
        
        setTimeout(function(){
          $loadingModal.css("display", "none");
        }, 3000);
        
      } else {
        var $validationModal = $('#validation-modal');

        $validationModal.css("display", "block")
      }
    });

    $('.info-modal-close, .product-add-cart-modal-close').on('click', function(){
      var $modalToClose = $(this).parent();

      $modalToClose.css("display", "none");
    });

  $('a.mobile-next').on('click', function(e){

    if (getWidth() < 980) {
      e.preventDefault();

      $(this).toggleClass('open').parent().toggleClass('order-first').closest('.menu-dropdown').toggleClass('top');
    }
  });

  $('#burger').on('click', function(){
    $('#menu-box').toggleClass('open');
  });

  $('#langs button').on('click', function(){
    $(this).next().slideToggle();
  });
  
  $('.single-product-container__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    asNavFor: '.single-product-container__nav-slider',
    prevArrow: '<button type="button" class="horizontal-big-arrow-slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="horizontal-big-arrow-slick-next">Next</button>',
    responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            // mobileFirst: true,
            arrows: true,
          }
        }
    ]
  });

  $('.single-product-container__nav-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.single-product-container__slider',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="vertical-big-arrow-slick-prev black">Previous</button>',
    nextArrow: '<button type="button" class="vertical-big-arrow-slick-next">Next</button>',
    responsive: [{
      breakpoint: 960,
      settings: "unslick"
    }]
  });

  $('.main-slider-container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
  });

      $('.company-slider-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev custom-slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next custom-slick-next">Next</button>',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true
              }
            }
        ]
      });

      $('.accessories-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 960,
                settings: {
                  infinite: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: true,
                  variableWidth: false,
                  prevArrow: '<button type="button" class="horizontal-big-arrow-slick-prev">Previous</button>',
                  nextArrow: '<button type="button" class="horizontal-big-arrow-slick-next">Next</button>',
                }
          }
        ]
      });

      $('.products-container__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 960,
                settings: {
                  infinite: false,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: true,
                  variableWidth: false,
                  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                  nextArrow: '<button type="button" class="slick-next">Next</button>',
                }
          }
        ]
      });

      $('.insta-container__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev custom-slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next custom-slick-next">Next</button>',
          responsive: [
              {
                breakpoint: 960,
                settings: {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  prevArrow: '<button type="button" class="slick-prev insta-container__slider__custom-slick-prev">Previous</button>',
                  nextArrow: '<button type="button" class="slick-next insta-container__slider__custom-slick-next">Next</button>',
                }
              }
          ]
      });

      $('.nav-title > a').click(function(e){
    if (getWidth() < 980) {
      e.preventDefault();
      if ($(this).next('ul').css('display')  != 'block') {
              $(this).closest('.menu-wrapper').find('ul').slideUp();
        $(this).next('ul').slideToggle();
      }
    }
      });

      //custom-select boots size
      function initBootSizeSelect() {
        var customSelectArray, i, j, l, oldSelectOptionsAmount, oldSelectElement, a, b, c;
        //look for any elements with the class "custom-select":
        customSelectArray = document.getElementsByClassName("custom-select");
        l = customSelectArray.length;
        for (i = 0; i < l; i++) {
          oldSelectElement = customSelectArray[i].getElementsByTagName("select")[0];
          oldSelectOptionsAmount = oldSelectElement.length;
          //for each element, create a new DIV that will act as the selected item:
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected select-active normal");
          a.innerHTML = oldSelectElement.options[oldSelectElement.selectedIndex].innerHTML;
          customSelectArray[i].appendChild(a);
          //for each element, create a new DIV that will contain the option list:
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < oldSelectOptionsAmount; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            optionInnerHTML = oldSelectElement.options[j].innerHTML;
            size = oldSelectElement.options[j].value;
            if(optionInnerHTML == "true"){
              available = "Dostępny";
              lightColorClass = "green-light";
            } else {
              available = "Niedostępny";
              lightColorClass = "red-light";
            }

            c.innerHTML = "\
            <div class='boot-size-option' data-boot-size='" + size + "'>\
                          <i class='icon-circle " + lightColorClass + "'></i>Rozmiar: <b class='boot-size'>" + size + "</b>\
                          <span class='bold'> | </span>\
                          <span class='available'>" + available + "</span>\
                      </div>\
            ";

            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  console.log("this klikniete: " + this.firstElementChild.getAttribute("data-boot-size"));
                  console.log(s.options[i].value)
                  if (s.options[i].value == this.firstElementChild.getAttribute("data-boot-size")) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          customSelectArray[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
            });
        }
      }
      
      function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        console.log('DZIAŁĄ');
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      /*if the user clicks anywhere outside the select box,
      then close all select boxes:*/
      document.addEventListener("click", closeAllSelect);
      //custom-select boots size - END

      initBootSizeSelect();
});

$(window).resize(function(){

  if (getWidth() > 979) $('#menu-box').removeClass('open').find('.open, .top, .order-first').removeClass('open top order-first');
})

function getWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}