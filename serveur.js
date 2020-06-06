var page = require('webpage').create();
var a;

page.open('http://www.apex-timing.com/live-timing/lemans-karting2/index.html', function(status) {
    if (status !== 'success') {
        console.log('timeOut');
        phantom.exit();
    }else{  
        setTimeout(function() {
        a = page.evaluate(function() {
            return document.getElementById('body').innerHTML;
          });
          console.log(a);
        phantom.exit();
    }, 2000);
}
});