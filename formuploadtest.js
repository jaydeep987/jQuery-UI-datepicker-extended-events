var fs = require('fs');
var rest = require('restler');

fs.stat('index.js', function (err, stats) {
    rest.post('http://localhost/mytest/service.php', {
        multipart: true,
        data: {
            'submit': true,
            'jsfile': rest.file('index.js', null, stats.size, null, "text/plain")
        }
    }).on("complete", function (data) {
        console.log(data);
    });
});
