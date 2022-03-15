var hrs=0;
var mins=0;
var secs=0;
var time;

function start()
{

    time= setTimeout(function(){
       
        secs++;
        if (secs > 59)
        {
            secs=0;
            mins++;}
        
            if (mins > 59)
            {
                mins=0;
                hrs++;
            }
            if (hrs < 10)
            {
                document.getElementById('hrs').innerHTML='0'+hrs+':';
            }
            else
            {
                document.getElementById('hrs').innerHTML=hrs+ ':';
            }
        

            if (mins < 10)
            {
                document.getElementById('mins').innerHTML='0'+mins+':';
            }
            else
            {
                document.getElementById('mins').innerHTML=mins+ ':';
            }
        

            if (secs < 10)
            {
                document.getElementById('secs').innerHTML='0'+secs ;
            }
            else
            {
                document.getElementById('secs').innerHTML=secs;
            }
       start();
            },1000);
          }

          function stop()
          {
            clearTimeout(time);
          }

          function reset()
          {
              hrs=0,
              mins=0;
              secs=0;
              document.getElementById('hrs').innerHTML='00:' ;
              document.getElementById('mins').innerHTML='00:' ;
              document.getElementById('secs').innerHTML='00' ;

          }