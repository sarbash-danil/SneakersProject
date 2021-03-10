$(function () {
	$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	//gamburger
	$('.gamburger').click(function(e){
		e.preventDefault();
		$('.menu').toggleClass('show')
	})
	$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 100);
    return false;
  });
	//scroll
	var btn = $('.scroll-to-top');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   //popup
   $('.login').click(function(e){
		e.preventDefault();
		$('.popup').addClass('show')
	})
    $('.close').click(function(e){
		e.preventDefault();
		$('.popup').removeClass('show')
	})
	//ссылка на магазин
	  $('.card').click(function(e){
		return location.href = 'productpage.html'
});
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}

document.getElementById("home").onclick = function() {
	return location.href = 'index.html'
}
document.getElementById("xl").onclick = function() {
	let result = document.getElementById("calculation").innerHTML;
	calculate.innerHTML = zzz(result);
    }
    zzz = (result) =>{
    	return (+calculation)*2;
    }
    calculations = (count) => {
  return (+count)*(+calculation);
}
    });
