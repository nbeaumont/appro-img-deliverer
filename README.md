# Device Appropriate Image Deliverer

A jquery plugin to deliver a device appropriate version of an image in a lightbox, using CSS and JavaScript.

## Features:

- displays a small sized version of an image for all devices, no more than 480px tall if in portrait mode, and no more than 480px wide if in landscape mode.

- delivers in a lightbox, a large version of the image, adapted to the screen resolution of the device it is viewed on.

- adapts the largest dimension of the image delivered, to the largest dimension of the device. For example, if we have a breakpoint at 640px in our CSS Media Queries and our device screen resolution is 360px by 640px; if our image is in portrait mode, its height is going to be 640px, and if it is in landscape mode, its width is going to be 640px.

- serves the same image, whether the device is in portrait or landscape mode on most common mobile devices, to avoid downloading a new image after a change in orientation. Devices and resolutions covered are the ones found in Google Chrome devTools, Device Mode and Mobile Emulation.

- supports high resolution displays with a device pixel ratio equal or superior to 2.


## [Demo](http://htmlpreview.github.io/?https://github.com/nbeaumont/appro-img-deliverer/blob/master/index.html)
