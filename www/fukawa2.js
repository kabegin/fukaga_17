 // https://mb.api.cloud.nifty.com/2013-09-01/applications/EIcVuJgSJVJltWxJ/publicFiles/101.jpg
   // var NCMB = NCMB || require("./ncmb");
      //  var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     
       //ncmb.User.loginWithMailAddress("kabegin@gmail.com");
 function redy(){
     var user = ncmb.User.getCurrentUser();
  
      var user1=user.get("mailAddress");
      //ncmb.User.login(user1);
          //if (user) {
            if(ncmb.sessionToken){
               fn.load('kaiin.html');
          }   
       }
            // ログイン・新規登録処理
     function taku() {
                var username =document.getElementById("mail").value;
                var password =document.getElementById("pass").value;
               // alert(username);
                // ログイン
               // var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     
                ncmb.User.loginWithMailAddress(username, password)
                .then(function(user) {
                    return user.logout();
                    // ログイン成功
                //     alert("ログイン成功");
                    fn.load('kaiin.html');
                })
                .catch(function(err) {
                    // ログイン失敗
                    alert(err);
                        });
                    }
             function shin() {
           var username =document.getElementById("mail").value;
           //alert(username);
        //   var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     
    ncmb.User.requestSignUpEmail(username)
         .then(function(data){
            // 送信後処理
            alert("送信しました。");
         })
         .catch(function(err){
             
           // エラー処理
           alert(err);
         });
       } 
    function rest(){
       var username =document.getElementById("mail").value;
      //     alert(username);
      //     var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     
         var self=this;
     var user=new self.ncmb.User({mailAddress:username});  
         user.requestPasswordReset()
           .then(function(data){
               alert("送信しました。");
           })
           .catch(function(err){
               alert(err);
           });
    }
    function logout(){
        var currentUser = ncmb.User.getCurrentUser();
if (currentUser) {
   // currentUser=null;
    alert("ログイン中のユーザー: " + currentUser.get("userName"));
    //ncmb.User.login(currentUser);
    //currentUser=null;
    ncmb.sessionToken = null;
} 
        ncmb.User.logout().then(function(){
            location.href="./index.html";
        })
        .catch(function(err){
            alert(err);
         //   ncmb.sessionToken = null;
        }); 
//ncmb.sessionToken = null;
    }
    
 function xa1(){
    var a=1,b=1;
    xni(a,b);
}
function xb1(){
     var a=2,b=1;
    xni(a,b);
}
function xc1(){
     var a=3,b=1;
    xni(a,b);
}
function xd1(){
     var a=4,b=1;
    xni(a,b);
}
function xa2(){
     var a=1,b=2;
    xni(a,b);
}
function xb2(){
     var a=2,b=2;
    xni(a,b);
}
function xc2(){
     var a=3,b=2;
    xni(a,b);
}
function xd2(){
     var a=4,b=2;
    xni(a,b);
}

function xfukawa(){
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
    var k = ''; 
     do{   
      day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime);
      switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
               }
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           　}
               
               var job=ar[aq];
               var tako=""+aq
               var c="<ons-list-item  ";
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined || deban=="7" || deban=="6"){job="休み";}//or maime="7"
    k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
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
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
              
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item  ";
               var job=ar[aq];
               var tako=""+aq;
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7 || i==6){job="休み";}
      
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
       k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
      
     aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
           if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
           
               var c="<ons-list-item  ";
               var job=ar[aq];
               var tako=aq;
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined || i==7 || i==6){job="休み";}
         
       
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
        
      aday(add);
     }
     maime=(parseInt(maime, 10))%48+1;
     if (maime<10){maime="0"+maime;}
}
 //   k += '<ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>';
 //  document.getElementById("all").innerHTML = k ;
 k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
}
function xal(obj){
  //  var title = obj.getAttribute('tit');
    var tic=obj.getAttribute('tic');
//alert (tic);
  //  if(!tic){tic="100";}
     var modal = document.getElementById('modal');
   var te = document.getElementById('te'); 
     var imge="img/"+tic+".jpg";
   te.innerHTML=tic;
   document.getElementById('img').src=imge;
  modal.toggle();
  
//window.open("http://www.google.com/calendar/event?action=TEMPLATE&text="+tic+"&dates="+title);
//window.open("https://calendar.google.com/calendar/gp?pli=1#~calendar:view=e&bm=1&action=TEMPLATE&text="+tic+"&dates="+title);
}
function sample(){
    document.getElementById("img").src ="img/100.jpg";
};
function xfukawa1(){
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
    var k = ''; 
     do{   
      day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime);
      switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           　}
               
               var job=ar[aq];
               var tako=aq;
               var c="<ons-list-item  ";
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined || deban=="7" || deban=="6"){job="休み";}//or maime="7"
    
       k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
     // maime=(parseInt(maime, 10))%48+1;
     // if (maime<10){maime="0"+maime;}
      if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10)+3)%48;}
      if(maime==0){maime=48;}
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
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
              
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item  ";
               var job=ar[aq];
               var tako=aq;
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7 || i==6){job="休み";}
        
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
       k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
      
     aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               var job=doyo[aq];
               var tako="6"+aq;
               break;
           default:
           if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job=nichiyo[aq];
               var tako="7"+aq;
               break;}
           
               var c="<ons-list-item  ";
               var job=ar[aq];
               var tako=aq;
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined || i==7 || i==6){job="休み";}
         
    
    //   k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +aq+" "+job +"</ons-list-item>";
        
      aday(add);
     }
    // maime=(parseInt(maime, 10))%48+1;
    // if (maime<10){maime="0"+maime;}
     if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10))%48+3;}
     if(maime==50){maime=2;}
     if (maime<10){maime="0"+maime;}
}

 //k += '<ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>';
 //  document.getElementById("all").innerHTML = k;
   k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
}
function xni(a,b){
    //alert(a);
    //alert(b);
    var num1=document.getElementById('daiya').value;
     if (num1==""){num1="101";}
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1),10);
    var ad=new Date("2016/02/06");
    var add=new Date();
    var nana=0;
    add.setHours(0, 0, 0, 0);
    var k ='';
    //k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>'; 
     //   k += '</table>';
   
//   document.write(ad);
//   document.write(add);
for (i=1;i<220;i++){
day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime,10);
      switch(day.getDay()){
           case 0:
               var c="<ons-list-item style='background-color: red'";
               var job="休み";
               var tako="7"+aq;
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job="休み";
               var tako="6"+aq;
               break;}
               var c="<ons-list-item style='background-color: aqua'";
               //var job=doyo[aq];
               switch(a){
                 case 1:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){var job=doyo[aq];var tako="6"+aq;}else{var job="休み";var tako="6"+aq;}
                     break;
                 case 2:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==7){var job=doyo[aq];var tako="6"+aq;}else{var job="休み";var tako="6"+aq;}
                     break;
                 case 3:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==14){var job=doyo[aq];var tako="6"+aq;}else{var job="休み";var tako="6"+aq;}
                     break;
                 case 4:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==21){var job=doyo[aq];var tako="6"+aq;}else{var job="休み";var tako="6"+aq;}
                     break;
               }
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<ons-list-item style='background-color: fuchsia'";
               var job="休み";
               var tako="7"+aq;
               break;
           　}
               var c="<ons-list-item  ";
               var job=ar[aq];
               var tako=""+aq;
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined){job="白";}
     
     k += c+"tic="+tako+" onclick='xal(this);'  tappable>"+hi(add).slice(5) + w +deban+maime+" "+job +"</ons-list-item>";
      
     //  k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +deban+maime+" "+job +'</td></tr>';
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

   // k += '<ons-button modifier="large" onclick="location.reload(true)">前のページへ戻る</ons-button>';
    //k += '</table><input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
  //    document.getElementById("all").innerHTML = k; 
k += '<br/><br/><br/><br/><br/>';
   document.getElementById("all").innerHTML = k;
}   