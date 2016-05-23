```javascript
mw.setConfig('Kaltura.EnableEmbedUiConfJs', true);
       
    var urlObject = {
        "0_djht56n5" : {url: "http://www.example.com}
    };

    function trackUsage(myURL) {
    // #track-uage is an hidden iframe
        $('#track-usage').attr("src", myURL);
    };

    function trackURL(myIndex) {
        var myURL= urlObject[myIndex].url;
        trackUsage(myURL);
    }

    kWidget.addReadyCallback( function( playerId ){
        kdp = document.getElementById( playerId );
        kdp.kBind( "doPlay.test", function(){ //notice the .test postfix namespaces the event)
            var entry_id = kdp.evaluate('{mediaProxy.entry.id}');
            trackURL(entry_id);
            kdp.kUnbind('.test');
        });
    });
```
