var cnt = 0; 

$('input').on('change', function() {
    cnt++; 
    if (cnt % 3 == 1) $('body').toggleClass('purple');
    else if (cnt % 3 == 2) $('body').toggleClass('green');
    else $('body').toggleClass('green');
  });
  