var week = new Array("日","月","火","水","木","金","土"); 
//var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     

function getToday(){
var now = new Date();
var yyyy = now.getFullYear();
var mm = now.getMonth() + 1;
var dd = now.getDate();
//if(mm < 10) mm = "0" + mm;
//if(dd < 10) dd = "0" + dd;
return "" + yyyy +"/"+ mm+"/"+ + dd;
}
function aday(ab){
 //   alert(ab);
    var dayOfMonth=ab.getDate();
ab.setDate(dayOfMonth+1);
//alert(ab);
return ab;
}
function hi(af){
var yyyy = af.getFullYear();
var mm = af.getMonth() + 1;
var dd = af.getDate();
return ""+yyyy+"/"+mm+"/"+dd;    
}
function hii(af){
var yyyy = af.getFullYear();
var mm = af.getMonth() + 1;
if(mm<10){mm="0"+mm;}
var dd = af.getDate();
if(dd<10){dd="0"+dd;}
return ""+yyyy+mm+dd;    
}
function getExpires(dd){
var now = new Date();
var expires = new Date(now.getTime()+24*60*60*1000*dd);
return(expires.toGMTString());
}
function a1(){
    var a=1,b=1;
    ni(a,b);
}
function b1(){
     var a=2,b=1;
    ni(a,b);
}
function c1(){
     var a=3,b=1;
    ni(a,b);
}
function d1(){
     var a=4,b=1;
    ni(a,b);
}
function a2(){
     var a=1,b=2;
    ni(a,b);
}
function b2(){
     var a=2,b=2;
    ni(a,b);
}
function c2(){
     var a=3,b=2;
    ni(a,b);
}
function d2(){
     var a=4,b=2;
    ni(a,b);
}

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
    var k = '<ons-list><ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>'; 
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
       k += c+"tit="+tako+" tic="+deban+maime+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
      maime=(parseInt(maime, 10))%48+1;
      if (maime<10){maime="0"+maime;}
      
          for(j=1;j<30;j++){
     for (i=1;i<8;i++){
         day=new Date(hi(add));
         w=week[day.getDay()];
         
         if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){
             var aq=(""+i+maime);
             switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               break;
           default:
              
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item  ";
               var job=ar[aq];
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
        var result=job.split(" ");
    if(result[1]){
      var r1=("0"+result[1].replace(":","")).slice(-4);
      var r2=("0"+result[2].replace(":","")).slice(-4);
      var tako=hii(add)+"T"+r1+"00"+"/"+hii(add)+"T"+r2+"00";
       }else{
        var pqr=new Date(add.getTime()+24*60*60*1000);
        var tako=hii(add)+"/"+hii(pqr);
     }  
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
       k += c+"tit="+tako+" tic="+aq+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
      
     aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               break;
           default:
           if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
           
               var c="<ons-list-item  ";
               var job=ar[aq];
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
         
        var result=job.split(" ");
    if(result[1]){
      var r1=("0"+result[1].replace(":","")).slice(-4);
      var r2=("0"+result[2].replace(":","")).slice(-4);
      var tako=hii(add)+"T"+r1+"00"+"/"+hii(add)+"T"+r2+"00";
       }else{
        var pqr=new Date(add.getTime()+24*60*60*1000);
        var tako=hii(add)+"/"+hii(pqr);
     }  
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      k += c+"tit="+tako+" tic="+aq+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
        
      aday(add);
     }
     maime=(parseInt(maime, 10))%48+1;
     if (maime<10){maime="0"+maime;}
}
    k += '<ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>';
   document.getElementById("all").innerHTML = k ;
 k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
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
//window.open("http://www.google.com/calendar/event?action=TEMPLATE&text="+tic+"&dates="+title);
window.open("https://calendar.google.com/calendar/gp?pli=1#~calendar:view=e&bm=1&action=TEMPLATE&text="+tic+"&dates="+title);
}
function fukawa1(){
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
    var k = '<ons-list><ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button></ons-list-header>'; 
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
       k += c+"tit="+tako+" tic="+deban+maime+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
     // maime=(parseInt(maime, 10))%48+1;
     // if (maime<10){maime="0"+maime;}
      if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10)+3)%48;}
      if(maime==50){maime=2;}
      if (maime<10){maime="0"+maime;}
     for(j=1;j<30;j++){
     for (i=1;i<8;i++){
         day=new Date(hi(add));
         w=week[day.getDay()];
         
         if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){
             var aq=(""+i+maime);
             switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               break;
           default:
              
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item  ";
               var job=ar[aq];
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
        var result=job.split(" ");
    if(result[1]){
      var r1=("0"+result[1].replace(":","")).slice(-4);
      var r2=("0"+result[2].replace(":","")).slice(-4);
      var tako=hii(add)+"T"+r1+"00"+"/"+hii(add)+"T"+r2+"00";
       }else{
        var pqr=new Date(add.getTime()+24*60*60*1000);
        var tako=hii(add)+"/"+hii(pqr);
     }  
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
       k += c+"tit="+tako+" tic="+aq+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
      
     aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               break;
           default:
           if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               break;}
           
               var c="<ons-list-item  ";
               var job=ar[aq];
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
         
        var result=job.split(" ");
    if(result[1]){
      var r1=("0"+result[1].replace(":","")).slice(-4);
      var r2=("0"+result[2].replace(":","")).slice(-4);
      var tako=hii(add)+"T"+r1+"00"+"/"+hii(add)+"T"+r2+"00";
       }else{
        var pqr=new Date(add.getTime()+24*60*60*1000);
        var tako=hii(add)+"/"+hii(pqr);
     }  
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      k += c+"tit="+tako+" tic="+aq+result[0]+" onclick='al(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
        
      aday(add);
     }
    // maime=(parseInt(maime, 10))%48+1;
    // if (maime<10){maime="0"+maime;}
     if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10))%48+3;}
     if(maime==50){maime=2;}
     if (maime<10){maime="0"+maime;}
}

 k += '<ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>';
   document.getElementById("all").innerHTML = k;
   k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
}
function ni(a,b){
    //alert(a);
    //alert(b);
    var num1=document.keisan.elements[0].value;
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1),10);
    var ad=new Date("2016/02/06");
    var add=new Date();
    var nana=0;
    add.setHours(0, 0, 0, 0);
    var k ='<input type="button" value="前のページへ戻る" onclick="location.reload(true)"><table class=thin id=hyo><caption style="background-color:green">個別予定表</caption>';
    k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>'; 
     //   k += '</table>';
   
//   document.write(ad);
//   document.write(add);
for (i=1;i<220;i++){
day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime,10);
      switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job="休み";
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job="休み";
               break;}
               var c="<tr bgcolor='aqua'>";
               //var job=doyo[aq];
               switch(a){
                 case 1:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 2:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==7){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 3:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==14){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 4:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==21){var job=doyo[aq];}else{var job="休み";}
                     break;
               }
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job="休み";
               break;
           　}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined){job="白";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +deban+maime+" "+job +'</td></tr>';
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=1){deban+=1;}else{deban=deban;}
      aday(add); 
      if (deban==8){deban=1};
      if(day.getDay()==1&&deban==7&&nana==1){if(b==2){b=1,nana=0;}else{b=2,nana=0;}}
      if(deban==7 && b==2 && parseInt(maime,10)%2==0){
          maime=(parseInt(maime,10)+2)+"";
      }
      if(deban==7 && b==1 && parseInt(maime,10)%2==1){
          maime=(parseInt(maime,10)+2)+"";
      }
      if (day.getDay()==0){
          if(parseInt(maime,10)%2==1){
          maime=parseInt(maime,10)+1+""}
          else
          {maime=parseInt(maime,10)-1+""}};
    if (maime==49){maime=1;}
    if (maime==50){maime=2;}
    if (maime<10){maime=("0"+maime).slice(-2);}
    if(day.getDay()==0&&deban==7){ nana=1;}
 //   if(day.getDay()==1&&deban==7&&nana==1){if(b==2){b=1,nana=0;}else{b=2,nana=0;}}
}
//if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=1){deban+=1;}else{deban=deban;}
 k += '</table><input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
      document.getElementById("all").innerHTML = k; 
k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
}