#### nbeaumont.github.io

# Delivering a device appropriate version of an image with CSS and JavaScript

## Description

### Goals:

- display a small sized version of a background-image for all devices, no more than 480px tall if in portrait mode, and no more than 480px wide if in landscape mode.

- deliver a large version of that image, adapted to the screen resolution of the device it is viewed on, an open it in the jQuery lightbox Magnific Popup.

- make the large version of the image adapt to the largest dimension of the device. For example, if we have a breakpoint at 640px in our CSS Media Queries and our device screen resolution is 360px by 640px; if our image is in portrait mode, its height is going to be 640px, and if it is in landscape mode, its width is going to be 640px.

- serve the same image, whether the device is in portrait or landscape mode on most common mobile devices, to avoid downloading a new image after a change in orientation. Devices and resolutions covered will be the ones found in Google Chrome Version 44 devTools, Device Mode and Mobile Emulation.

- add support for high resolution display with a device pixel ratio equal or superior to 2.

### Challenge:

match CSS Media Queries in JavaScript.

With CSS Media Queries, when different declarations try to set a value for the same element/property combination the conflict must somehow be resolved by cascading, and when no declarations try to set a value for an element/property combination, a value is to be found by way of inheritance or by looking at the property’s initial value.

On the other hand, within Javascript, although the key API window.matchMedia can detect Media Query state change, it does not respond to the same principles of cascading and inheritance as CSS Media Queries.


This plugin displays a list of upcoming events in a descending order, and a list of past events in an ascending order.

## [Demo](http://htmlpreview.github.io/?https://github.com/nbeaumont/gcal-feed-reader/blob/master/index.html)

## Dependencies

*   [Font Awesome](https://fortawesome.github.io/Font-Awesome/), an iconic font and CSS tookit.
*   [moment.js](https://github.com/moment/moment/), a JavaScript date library for parsing, validating, manipulating, and formatting dates.
*   SoapBox's [linkifyjs](https://github.com/SoapBox/linkifyjs), a jQuery plugin for finding URLs in plain-text and converting them to HTML links.
*   [mailmask](https://libraries.io/bower/mailmask), a jQuery plugin to mask email links on your site and protect them from spam bots.

## Installation

Include the following HTML code into the head section of your document.

```html

<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="_css/gcal-feed-reader.css" rel="stylesheet" type="text/css" media="all">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script type="text/javascript" src="_javascript/moment.js"></script> 
<script type="text/javascript" src="_javascript/jquery.linkify.js"></script> 
<script type="text/javascript" src="_javascript/mailmask.js"></script> 
<script type="text/javascript" src="_javascript/jquery.gcal-feed-reader.js"></script> 

```

To initialize the plugin, insert the following JavaScript code just before the body closing tag.

```javascript

jQuery(function() {
    /*! Settings for the future events list (will overwrite the default settings) */
    $("#gcfr-futureEventsList").gCalFeedReader({
        apiKey: 'AIzaSyDCgE5k8RmNM4uvX1j9vsZCjremXVhM83Y', // replace with your own Google API key
        calendarId: "4dj3qghfgp23sjhe12c2b3505s@group.calendar.google.com", // replace with your own Google public calendar ID
        futureEventsOnly: true,
        sortDescending: false,
        eventsHeader: 'Upcoming Events'
    });
    /*! Settings for the past events list (will overwrite the default settings)*/
    $("#gcfr-pastEventsList").gCalFeedReader({
        apiKey: 'AIzaSyDCgE5k8RmNM4uvX1j9vsZCjremXVhM83Y', // replace with your own Google API key
        calendarId: "4dj3qghfgp23sjhe12c2b3505s@group.calendar.google.com", // replace with your own Google public calendar ID
        pastEventsOnly: true,
        sortDescending: true,
        eventsHeader: 'Past Events'
    });
});

```

Include the following HTML code into the body of your document.

```html

<div class="gCalFeedReader"></div>

```

Replace the apiKey option with your own Google API key. You can get a Google api key by navigating to the [Google Developpers Console](https://console.developers.google.com/).

Replace the calendarId option with your own Google public calendar id.

Make sure you Google calendar is public.

Infos about creating and managing a public Google calendar can be found [here](https://support.google.com/calendar/answer/37083?hl=en).

## Options

<table width="100%" border="1" cellpadding="8" cellspacing="4">

<tbody>

<tr>

<th scope="col">Name</th>

<th scope="col">Type</th>

<th scope="col">Description</th>

<th scope="col">Default Value</th>

</tr>

<tr>

<td>apiKey</td>

<td>string</td>

<td>Option that lets you enter your Google Calendar API key.</td>

<td>undefined</td>

</tr>

<tr>

<td>calendarId</td>

<td>string</td>

<td>Option that lets you enter the ID of the Google Calendar whose events will be displayed.</td>

<td>undefined</td>

</tr>

<tr>

<td>futureEventsOnly</td>

<td>boolean</td>

<td>Option that determines whether or not only future events should be displayed. If set to false past and future events from the calendar will be displayed. If set to true only future events will be.</td>

<td>undefined</td>

</tr>

<tr>

<td>pastEventsOnly</td>

<td>boolean</td>

<td>Option that determines whether or not only past events should be displayed. If set to false past and future events from the calendar will be displayed. If set to true only past events will be.</td>

<td>undefined</td>

</tr>

<tr>

<td>eventsHeader</td>

<td>string</td>

<td>Option that lets you specify a text header for the list of events to be displayed.</td>

<td>undefined</td>

</tr>

<tr>

<td>errorMsg</td>

<td>string</td>

<td>Option that lets you specify an error message if the Ajax request fails.</td>

<td>the request failed</td>

</tr>

<tr>

<td>errorMsgLocation</td>

<td>string</td>

<td>Option that lets you specify a text message to be displayed if an event location hasn't been defined in Google calendar.</td>

<td>no location to display</td>

</tr>

<tr>

<td>startDateFormat</td>

<td>selector</td>

<td>A selector which identifies the format to use for displaying the events starting dates and times.  
The selector longDate+startingTime displays the day of the Week (Sunday Monday ... Friday Saturday), the Month (January February ... November December), the Day of the Month (1 2 ... 30 31), the year (1970 1971 ... 2029 2030), and the time (H:MM AM PM). An example of a date and a time displayed using this format will look like "Sunday November 8, 2015 8:30 PM".  
The selector shortDate+startingTime displays the Month as a number (1 2 ... 11 12), the Day of the Month (1 2 ... 30 31), the year (1970 1971 ... 2029 2030), and the time (H:MM AM PM). An example of a date and a time displayed using this format will look like: "11/8/2015 8:30 PM".  
</td>

<td>longDate+startingTime</td>

</tr>

<tr>

<td>endDateFormat</td>

<td>selector</td>

<td>A selector which identifies the format to use for displaying the events ending dates and times.  
The selector longDate+endingTime uses the same format as longDate+startingTime.  
The selector shortDate+endingTime uses the same format as shortDate+startingTime.  
</td>

<td>longDate+endingTime</td>

</tr>

<tr>

<td>timeZone</td>

<td>string</td>

<td>Option that lets you set the time zone used in the response, formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".</td>

<td>America/New_York</td>

</tr>

<tr>

<td>maxEvents</td>

<td>integer</td>

<td>The maximum number of events to display.</td>

<td>25</td>

</tr>

<tr>

<td>singleEvents</td>

<td>boolean</td>

<td>Option that determines whether or not to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves.</td>

<td>true</td>

</tr>

</tbody>

</table>

For more infos, check the [Google Calendar API](https://developers.google.com/google-apps/calendar/?hl=en) documentation.

