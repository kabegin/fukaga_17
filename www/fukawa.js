var elmDiv = document.createElement('div');
var spsLink = document.createElement('div');
// spsLink.innerHTML = 'スポンサーリンク';
elmDiv.appendChild(spsLink);
var adsScr = document.createElement('script');
 adsScr.async = true;
 adsScr.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
var adsIns = document.createElement('ins');
 adsIns.className = 'adsbygoogle';
 adsIns.style.display = 'block';
/* XXX は置き換えてください */
 adsIns.dataset.adClient = 'ca-pub-5061506355151225';
 adsIns.dataset.adSlot= '3920317659';
 adsIns.dataset.adFormat = 'auto';
var adsGgl = document.createElement('script');
/* ［］は半角に置き換えてください */
 adsGgl.text = '(adsbygoogle = window.adsbygoogle ||[]).push({});';
elmDiv.appendChild(adsScr);
elmDiv.appendChild(adsIns);
elmDiv.appendChild(adsGgl);
