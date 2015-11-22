# Device Appropriate Image Deliverer

A jquery plugin to deliver a device appropriate version of an image in a lightbox, using CSS and JavaScript.

## Features:

- displays a small sized version of an image for all devices, no more than 480px tall if in portrait mode, and no more than 480px wide if in landscape mode.

- delivers in a lightbox, a large version of the image, adapted to the screen resolution of the device it is viewed on.

- adapts the largest dimension of the image delivered, to the largest dimension of the device. For example, if we have a breakpoint at 640px in our CSS Media Queries and our device screen resolution is 360px by 640px; if our image is in portrait mode, its height is going to be 640px, and if it is in landscape mode, its width is going to be 640px.

- serves the same image, whether the device is in portrait or landscape mode on most common mobile devices, to avoid downloading a new image after a change in orientation. Devices and resolutions covered are the ones found in Google Chrome devTools, Device Mode and Mobile Emulation.

- supports high resolution displays with a device pixel ratio equal or superior to 2.


## [Demo](http://htmlpreview.github.io/?https://github.com/nbeaumont/appro-img-deliverer/blob/master/index.html)

## Dependencies

[**Magnific Popup**](http://dimsemenov.com/plugins/magnific-popup/), a responsive lightbox & dialog script, by Dmitry Semenov.

## Instructions

### 1. Prepare You Images

  * Download the content of **appro-img-deliverer** as a ZIP file.
  
  * Create the following directory tree.
  
![screen-shot-2015-11-21-at-5 43 34-pm](https://cloud.githubusercontent.com/assets/10236829/11320919/e3c3645e-9078-11e5-9b27-0b2400421352.png)

  * Open Photoshop.

  * Choose **File** > **Scripts** > **Image Processor**. See [**Photoshop Help / 
Process a batch of files**](https://helpx.adobe.com/photoshop/using/processing-batch-files.html) for more info.

  * Select the images to be processed. You can choose to process any open files, or select a folder of files to process.

  * Select the location where you want to save the processed files. For the 480px version of your image choose the folder named 480.

  * Select **Save as JPEG**.

  * Set the JPEG image **Quality**.

  * Select **Resize To Fit**. It resizes the image to fit within the dimensions you enter in Width and Height. The image retains its original proportions. For the 480px version of your image enter 480in Width and 480 in Height.

![image_processor_screen_shot](https://cloud.githubusercontent.com/assets/10236829/11309892/80c900d2-8f94-11e5-8115-99778741f5af.png)

  * Repeat the operation for the 640px, 800px, 960px, 1024px, 1280px, 1600px, 1920px, 2048px, 2560px, and 3200px versions of your images.

  * Rename your processed images by adding ‘-‘ + ‘the containing folder name’, at the end of the file name. You should end up with the following directory tree:

![screen-shot-2015-11-21-at-5 28 14-pm](https://cloud.githubusercontent.com/assets/10236829/11320921/18631736-9079-11e5-8624-09d634708dcb.png)

### 2. Setup Your Document

#### Include the following HTML code into the head section of your document.

```html

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Delivering a device appropriate version of an image with CSS and JavaScript</title>
<style>
/*Set the small sized version of the image for standard resolution displays*/
.your_image_1 {
	background: url(_images/480/your_image_1-480.jpg) center no-repeat;
}

.your_image_2 {
	background: url(_images/480/your_image_2-480.jpg) center no-repeat;
}
/*Set the small sized version of the image for displays with a pixel ratio superior or equal to 2*/
@media only screen and (-webkit-min-device-pixel-ratio:2), only screen and (min-resolution:192dpi), only screen and (min-resolution:2dppx) {

.your_image_1 {
	background: url(_images/960/your_image_1-960.jpg) center no-repeat;
}

.your_image_2 {
	background: url(_images/960/your_image_2-960.jpg) center no-repeat;
}
}
</style>
<link rel="stylesheet" type="text/css" media="screen" href="_stylesheets/magnific-popup.css">
<link rel="stylesheet" type="text/css" media="screen" href="_stylesheets/appro-img-deliverer.css">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="_javascripts/jquery.magnific-popup.min.js"></script>
<script type="text/javascript" src="_javascripts/jquery.appro-img-deliverer.js"></script>

```



