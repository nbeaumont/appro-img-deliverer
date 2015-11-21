# Device Appropriate Image Deliverer

A jquery plugin to deliver a device appropriate version of an image in a lightbox, using CSS and JavaScript.

## Features:

- displays a small sized version of an image for all devices, no more than 480px tall if in portrait mode, and no more than 480px wide if in landscape mode.

- delivers in a lightbox, a large version of the image, adapted to the screen resolution of the device it is viewed on.

- adapts the largest dimension of the image delivered, to the largest dimension of the device. For example, if we have a breakpoint at 640px in our CSS Media Queries and our device screen resolution is 360px by 640px; if our image is in portrait mode, its height is going to be 640px, and if it is in landscape mode, its width is going to be 640px.

- serves the same image, whether the device is in portrait or landscape mode on most common mobile devices, to avoid downloading a new image after a change in orientation. Devices and resolutions covered are the ones found in Google Chrome devTools, Device Mode and Mobile Emulation.

- supports high resolution displays with a device pixel ratio equal or superior to 2.


## [Demo](http://htmlpreview.github.io/?https://github.com/nbeaumont/appro-img-deliverer/blob/master/index.html)

## Instructions

### 1. Prepare You Images
  * Create some folders keeping the following directory structure:

![screen-shot-2015-11-21-at-2 55 51-pm](https://cloud.githubusercontent.com/assets/10236829/11320311/d1a0aacc-9062-11e5-8762-a3a33eab270e.png)

  * Using [Photoshop image processor](https://helpx.adobe.com/photoshop/using/processing-batch-files.html) resize your image to fit within specified pixel dimensions. For the 480px version of your image the settings should look like this:

![image_processor_screen_shot](https://cloud.githubusercontent.com/assets/10236829/11309892/80c900d2-8f94-11e5-8115-99778741f5af.png)

  * Save the processed 480px version of your image in the folder named 480.

  * Repeat the operation with the 640px, 800px, 960px, 1024px, 1280px, 1600px, 1920px, 2048px, 2560px, and 3200px versions of your image, and save the processed images into their respective folder.

  * Rename your processed images by adding ‘-‘ + ‘the containing folder name’, at the end of the file name. You should end up with the following directory tree:

![screen-shot-2015-11-21-at-3 01 12-pm](https://cloud.githubusercontent.com/assets/10236829/11320314/d6ef0e2e-9062-11e5-9333-8f614e881d1a.png)

### 2. Setup Your Document

  * Create a new html document and save it in your “project_root” folder.
  
  * Include the following code in the head section of your document:
  
  
  
  * 
