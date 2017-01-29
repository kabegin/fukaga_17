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

function fukawa(){
 var num1=document.getElementById('daiya').value;
    if (num1==""){num1="101";}
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1));
    var ad=new Date();
    ad.setFullYear(2016, 2, 6);
    ad.setHours(0, 0, 0, 0);
    var add=new Date();
    add.setHours(0, 0, 0, 0);
    var nday=new Date(ad.getTime()+28*24*60*60*1000);
   //alert(add);
//    var k = '<input type="button" value="前のページへ戻る" onclick="location.reload(true)">個別予定表';
    var k = '<ons-scroller><ons-list><ons-listheader>年月日曜予定</ons-list-header>'; 
     do{   
      day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime);
      switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;
           　}
               
               var job=ar[aq];
               var c="<ons-list-item  ";
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined || deban=="7"){job="休み";}//or maime="7"
    var result=job.split(" ");
    if(result[1]){
    var r1=("0"+result[1].replace(":","")).slice(-4);
    var r2=("0"+result[2].replace(":","")).slice(-4);
    var tako=hii(add)+"T"+r1+"00"+"/"+hii(add)+"T"+r2+"00";
   }else{
       var pqr=new Date(add.getTime()+24*60*60*1000);
       var tako=hii(add)+"/"+hii(pqr);
   }
       k += c+"tit="+tako+" tic="+deban+maime+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
      maime=(parseInt(maime, 10))%48+1;
      if (maime<10){maime="0"+maime;}
 k += '<input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
   document.getElementById("test").innerHTML = k;
}
function al(obj){
    var title = obj.getAttribute('tit');
    var tic=obj.getAttribute('tic');
/*alert ( title );
     var modal = document.getElementById('modal');
     var te = document.getElementById('te');  
   te.innerHTML=title;
  modal.toggle();
  */
  location.href ="http://www.google.com/calendar/event?action=TEMPLATE&text="+tic+"&dates="+title;
}