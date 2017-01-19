  /* init Call Service */
  var CallSiteId = '18ca8931cf0e5dea81b072fccbb85b08';
  var CallBaseUrl = '//uptocall.com';
  (function() {
      var lt = document.createElement('script');
      lt.type ='text/javascript';
      lt.charset = 'utf-8';
      lt.async = true;
      lt.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + CallBaseUrl + '/widget/client.js?rnd='+Math.floor(Math.random(0,1000)*1000);
      var sc = document.getElementsByTagName('script')[0];
      if (sc) sc.parentNode.insertBefore(lt, sc);
      else document.documentElement.firstChild.appendChild(lt);
  })();