function open_loading(i) {
  var url=''
  if (i==2) {
      url= '../html/loading.html'
  }else if (i==0) {
      url= './html/loading.html'
  }
      api.openFrame({
        name: 'loading',
        url: url,
          rect: {
              x: 0,
              y: 0,
              w: 'auto',
              h: 'auto'
          },
          pageParam: {

          },

          bgColor: '#fff'
      });

      api.animation({
    name: 'loading',
    delay: 1000,
    duration: 1500,
    curve: 'linear',
    translation: {
        x: -2500,
        y: 0,
        z: 0
    }
}, function(ret, err) {
});

}

function close_loading() {
  api.closeFrame({
      name: 'loading'
  });
}
function bring_load_to_index() {
  api.bringFrameToFront({
      from: 'loading'
  });
}
