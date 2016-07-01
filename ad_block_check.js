 function adBlockCheck() {
   setTimeout(function() {
     var baitClass =
       'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links afs_ads';
     var baitStyle =
       'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
     var bait = document.createElement('div');
     var text = document.createTextNode(" ");
     bait.appendChild(text);
     bait.setAttribute('class', baitClass);
     bait.setAttribute('style', baitStyle);
     window.document.body.appendChild(bait);
     if (!document.getElementsByClassName) {
       return;
     }
     var ads = document.getElementsByClassName('afs_ads'),
       ad = ads[ads.length - 1];

     if (!ad || ad.innerHTML.length == 0 || ad.clientHeight === 0) {
       flash('warning',
         "AdBlock interferes with the functionality of our application. Please disable it.");
     } else {
       ad.style.display = 'none';
     }

   }, 2000);
 }
