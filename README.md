# Device Appropriate Image Deliverer

A jQuery plugin to deliver a device appropriate version of an image in a lightbox, using CSS and JavaScript.

## Features:

- Displays a small sized version of an image for all devices, no more than 480px tall if in portrait mode, and no more than 480px wide if in landscape mode.

- Delivers, in a lightbox, a large version of that image, adapted to the rendering surface of the output device it is viewed on.

- Adapts the largest dimension of the image delivered, to the largest dimension of the rendering surface of the output device. For example, if you have a breakpoint at 640px in your CSS Media Queries and the rendering surface of your device is 360px by 511px; if the image to be delivered is in portrait mode, its height will be 640px, and if it is in landscape mode, its width will be 640px.

- Serves the same image whether the orientation is portrait or landscape for most common device breakpoints, to avoid downloading a new image on orientation change. Devices and resolutions covered are the ones found in Google Chrome devTools, Device Mode and Mobile Emulation.

- Supports for high resolution display with a device pixel ratio equal or superior to 2.


## [Demo](http://htmlpreview.github.io/?https://rawgit.com/nbeaumont/appro-img-deliverer/master/index.html)

## Dependencies

  * [Font Awesome](https://fortawesome.github.io/Font-Awesome/), an iconic font and CSS tookit.
  * [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/), a responsive lightbox & dialog script, by Dmitry Semenov.

## Instructions

### 1. Prepare You Images

  * Download the content of **appro-img-deliverer** as a ZIP file.

![screen-shot-2015-11-21-at-5 43 34-pm](https://cloud.githubusercontent.com/assets/10236829/11320919/e3c3645e-9078-11e5-9b27-0b2400421352.png)
  
  * Open Photoshop.

  * Choose **File** > **Scripts** > **Image Processor**. See [Photoshop Help / 
Process a batch of files](https://helpx.adobe.com/photoshop/using/processing-batch-files.html) for more info.

  * In the Image Processor dialog box, select the images to be processed. You can choose to process any open files, or select a folder of files to process.

  * Select the location where you want to save the processed files. For the 480px version of your image choose the folder named 480.

  * Select **Save as JPEG**.

  * Set the JPEG image **Quality**.

  * Select **Resize To Fit**. It resizes the image to fit within the dimensions you enter in Width and Height. The image retains its original proportions. For the 480px version of your image enter 480 in **Width** and 480 in **Height**.

![image_processor_screen_shot](https://cloud.githubusercontent.com/assets/10236829/11309892/80c900d2-8f94-11e5-8115-99778741f5af.png)

  * Repeat the operation for the 640px, 800px, 960px, 1024px, 1280px, 1600px, 1920px, 2048px, 2560px, and 3200px versions of your images.

  * Rename your processed images by adding ‘-‘ + ‘the containing folder name’, at the end of the file name. You should end up with the following directory tree:

![screen-shot-2015-11-21-at-5 28 14-pm](https://cloud.githubusercontent.com/assets/10236829/11320921/18631736-9079-11e5-8624-09d634708dcb.png)

### 2. Setup Your Document

  * Include the following HTML code into the head section of your HTML document.

```html

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Delivering a device appropriate version of an image with CSS and JavaScript</title>
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<style>
/*Set the small sized versions of the images for standard resolution displays*/
.your_image_1 {
	background: url(_images/480/your_image_1-480.jpg) center no-repeat;
}

.your_image_2 {
	background: url(_images/480/your_image_2-480.jpg) center no-repeat;
}
/*Set the small sized versions of the images for displays with a pixel ratio superior or equal to 2*/
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
  * Include the following HTML code into the body of your HTML document.

```html

<div class="aid-main your_image_1"> </div>
<div class="aid-main your_image_2"> </div>

```


