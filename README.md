datetime-formatter
==================

This package is intended to simplify the process of converting datetime to the required format as desired by users and businesses. 
We've developed this package as a result of facing the same obstable that faces many developers in which JS does not provide desirable formats for datetime strings. Which is so bizzare, I still don't get it. But, anyway!


Usage
=====

Parameters:
==========
formatDateTime(date, format);
-date: This is the datetime you want to get formatted. (note: if you don't pass this, the function takes current datetime as default);

-format: This is the format that you need to convert your datetime to. Acceptable formats are :
    'MM/DD/YYYY'
    'MM/DD/YYYY HH:mm:ss'
    'MM/DD/YYYY HH:mm'
    'MM/DD/YYYY HH:mm:ss.sss'
    'MM-DD-YYYY'
    'MM-DD-YYYY HH:mm:ss'
    'MM-DD-YYYY HH:mm'
    'MM-DD-YYYY HH:mm:ss.sss'

    Note: if you pass the letter 'a' to any of the above formats that have time in it, it will return the time in AM/PM format. Otherwise, it'd default to 24 hour format. 




Simple usage of this package is as following:

var datetime_formatter = require('datetime-formatter');
var formattedDateTime = datetime_formatter.formatDateTime(null, 'MM/DD/YYYY');

the result would be: 
09/28/2017

Or you can pass your own datetime to be formatted: 
var datetime_formatter = require('datetime-formatter');
var formattedDateTime = datetime_formatter.formatDateTime(null, 'MM-DD-YYYY HH:mm:ss a');


Result would look like: 
09-28-2017 03:47:20 PM


You can also pass your own datetime to format: 
var datetime_formatter = require('datetime-formatter');
var formattedDateTime = datetime_formatter.formatDateTime'09-28-2017 03:47:20 PM', 'MM/DD/YYYY HH:mm:ss');

Would result in:
09/28/2017 15:47:20

Enjoy!