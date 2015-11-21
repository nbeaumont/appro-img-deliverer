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
  * Download the content of appro-img-deliverer as a ZIP file.
 
  * Unzip it.

  * Open Photoshop.

  * Choose File > Scripts > Image Processor. See [Photoshop Help / 
Process a batch of files](https://helpx.adobe.com/photoshop/using/processing-batch-files.html) for more info.

  * Select the images to be processed. You can choose to process any open files, or select a folder of files to process.

  * Select the location where you want to save the processed files. For the 480px version of your image choose the folder named 480.

  * Select the file types and options to save. For the 480px version of your image choose the folder named 480.

  * Select Save as JPEG.

  * Set the JPEG image quality.

  * Select Resize To Fit. It resizes the image to fit within the dimensions you enter in Width and Height. The image retains its original proportions. For the 480px version of your image enter 480in Width and 480 in Height.

![image_processor_screen_shot](https://cloud.githubusercontent.com/assets/10236829/11309892/80c900d2-8f94-11e5-8115-99778741f5af.png)

  * Repeat the operation with the 640px, 800px, 960px, 1024px, 1280px, 1600px, 1920px, 2048px, 2560px, and 3200px versions of your image or images, and save the processed images into their respective folder.

  * Rename your processed images by adding ‘-‘ + ‘the containing folder name’, at the end of the file name. You should end up with the following directory tree:

![screen-shot-2015-11-21-at-3 01 12-pm](https://cloud.githubusercontent.com/assets/10236829/11320314/d6ef0e2e-9062-11e5-9333-8f614e881d1a.png)

### 2. Setup Your Document

  * 
