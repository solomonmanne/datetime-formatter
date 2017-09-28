/*
This method converts datetime to the desired formats
*/

var formatDateTime = function (_date, format)
{
    var inDate=new Date(_date);
//if user did not pass a date, just use the current date time
if(_date===undefined || _date===null || _date==='')
  inDate = new Date(); 

//discover the timezone addition based on the computer clock/locale
var _dayUnFormatted = inDate.getDate().toString();
var day= (_dayUnFormatted.length===1) ? `0${_dayUnFormatted}`: _dayUnFormatted ;
 
var _monthUnFormatted = inDate.getMonth()+1;
var month= (_monthUnFormatted.toString().length===1) ? `0${_monthUnFormatted}`: _monthUnFormatted ;

var year= inDate.getFullYear();
 
//get time
var _hour= inDate.getHours();
var hour = (_hour.toString().length===1) ? `0${_hour}`: _hour;

var _minutes= inDate.getMinutes();
var minutes = (_minutes.toString().length===1) ? `0${_minutes}`: _minutes;


var _secondsJS = inDate.getSeconds();
var seconds = (_secondsJS.toString().length===1) ? `0${_secondsJS}`: _secondsJS;

var _milliseconds = inDate.getMilliseconds();
var milliseconds = (_milliseconds.toString().length===1) ? `00${_milliseconds}` : (_milliseconds.toString().length===2) ? `0${_milliseconds}` : _milliseconds;
 
var returnDate;

if(hour===undefined) //they did not supply time.
returnDate = `${month}/${day}/${year}`;

var isAmPmNeeded = format.split(' ').find(a=>a==='a');
var AM_PM;
if(isAmPmNeeded!==undefined)
{
    if( hour>12){ 
        AM_PM='PM';
        hour-=12;
         hour = (hour.toString().length===1) ? `0${hour}`: hour;
    }
   else if(hour==='00')
    {
        hour=12;
        AM_PM='AM';
    }
    else{

        AM_PM='AM';
    }
    
}

format = format.replace(' a', '');

switch(format){

case 'MM/DD/YYYY':
returnDate = `${month}/${day}/${year}`;
break;

case 'MM/DD/YYYY HH:mm:ss':
returnDate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
break;

case 'MM/DD/YYYY HH:mm':
returnDate = `${month}/${day}/${year} ${hour}:${minutes}`;
break;

case 'MM/DD/YYYY HH:mm:ss.sss':
returnDate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}.${milliseconds}`;
break;

//===============================================================
case 'MM-DD-YYYY':
returnDate = `${month}-${day}-${year}`;
break;

case  'MM-DD-YYYY HH:mm:ss':
returnDate = `${month}-${day}-${year} ${hour}:${minutes}:${seconds}`;
break;
case  'MM-DD-YYYY HH:mm':
returnDate = `${month}-${day}-${year} ${hour}:${minutes}`;
break;

case  'MM-DD-YYYY HH:mm:ss.sss':
returnDate = `${month}-${day}-${year} ${hour}:${minutes}:${seconds}.${milliseconds}`;
break;

default: 
returnDate = `${month}/${day}/${year}`;
break;
}
//check if they asked for AM/PM
if(isAmPmNeeded!==undefined)
{
returnDate=`${returnDate} ${AM_PM}`;
}
return returnDate; 
}

module.exports.formatDateTime=formatDateTime;
 