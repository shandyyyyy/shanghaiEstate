var set_listen_handle = function(keycode){
     //document.getElementById('key').innerHTML += keycode;
     switch(keycode)
         {
            
            case 1:
            case 38:
            if(partnow==101){document.getElementById('index').focus();return false;}
            if(partnow==102){document.getElementById('back').focus();return false;}
            if(partnow==103){document.getElementById('previous').focus();return false;}
            if(partnow==104){document.getElementById('next').focus();return false;}

            if(partnow==1){document.getElementById('back').focus();return false;}
            if(partnow==2){document.getElementById('back').focus();return false;}
            if(partnow==3){document.getElementById('a1').focus();return false;}
            if(partnow==4){document.getElementById('a2').focus();return false;}
            if(partnow==5){document.getElementById('a3').focus();return false;}
            if(partnow==6){document.getElementById('a4').focus();return false;}
            
            
            break;

            case 2:
            case 40:

            if(partnow==101){document.getElementById('a1').focus();return false;}
            if(partnow==102){document.getElementById('a1').focus();return false;}
            if(partnow==103){document.getElementById('a2').focus();return false;}
            if(partnow==104){document.getElementById('a2').focus();return false;}

            if(partnow==1){document.getElementById('a3').focus();return false;}
            if(partnow==2){document.getElementById('a4').focus();return false;}
            if(partnow==3){document.getElementById('a5').focus();return false;}
            if(partnow==4){document.getElementById('a6').focus();return false;}
            if(partnow==5){document.getElementById('a5').focus();return false;}
            if(partnow==6){document.getElementById('a6').focus();return false;}

            break;
            

            case 3:
            case 37:

            if(partnow==101){document.getElementById('index').focus();return false;}
            if(partnow==102){document.getElementById('index').focus();return false;}
            if(partnow==103){document.getElementById('back').focus();return false;}
            if(partnow==104){document.getElementById('previous').focus();return false;}

            if(partnow==1){document.getElementById('a1').focus();return false;}
            if(partnow==2){document.getElementById('a1').focus();return false;}
            if(partnow==3){document.getElementById('a3').focus();return false;}
            if(partnow==4){document.getElementById('a3').focus();return false;}
            if(partnow==5){document.getElementById('a5').focus();return false;}
            if(partnow==6){document.getElementById('a5').focus();return false;}

            break;
            

            
            case 4:
            case 39:
                   
            if(partnow==101){document.getElementById('back').focus();return false;}
            if(partnow==102){document.getElementById('previous').focus();return false;}
            if(partnow==103){document.getElementById('next').focus();return false;}
            if(partnow==104){document.getElementById('next').focus();return false;}

            if(partnow==1){document.getElementById('a2').focus();return false;}
            if(partnow==2){document.getElementById('a2').focus();return false;}
            if(partnow==3){document.getElementById('a4').focus();return false;}
            if(partnow==4){document.getElementById('a5').focus();return false;}
            if(partnow==5){document.getElementById('a6').focus();return false;}
            if(partnow==6){document.getElementById('a6').focus();return false;}

            break;
            

            case 340:
            case 4096:

            break;


            case 593:
            case 4111:
            history.go(0);
            return false;
            break;

            case 372:
            case 33:
            nextpage(2);
            break;

            case 373:
            case 34:
            nextpage(1);
            break;
          
            
   }
 }; 