var Links = {
  setColor:function (color) {
    var alist = document.querySelectorAll('a');
    var i = 0;

    while(i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  },

  setColorjQuery:function (color) {
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function (color) {
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function (color) {
    document.querySelector('body').style.backgroundColor=color;
  },

  setColorjQuery:function (color) {
    $('body').css('color', color);
  },
  setBackgroundColorjQuery:function (color) {
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  if(self.value ==='night') {
      Body.setBackgroundColor('black');
      Body.setColor('white')
      self.value='day';

      Links.setColor('powderblue');
  } else {
      Body.setBackgroundColor('white');
      Body.setColor('black')
      self.value='night';

      Links.setColor('blue');
    }
  }

  function nightDayHandlerjQuery(self) {
    if(self.value ==='night') {
        Body.setBackgroundColorjQuery('black');
        Body.setColorjQuery('white')
        self.value='day';

        Links.setColorjQuery('powderblue');
    } else {
        Body.setBackgroundColorjQuery('white');
        Body.setColorjQuery('black')
        self.value='night';

        Links.setColorjQuery('blue');
    }
  }
