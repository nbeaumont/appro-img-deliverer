// JavaScript Document
(function($) {
    $.fn.aid_set_img = function() {
        var $this = $(this);
        var image_url = $this.css('background-image'),
            image;
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);
        if (image_url[1]) {
            image_url = image_url[1];
            image = new Image();
            $(image).load(function() {
                var ratio = (image.height * 100) / image.width;
                $this.parent().css("padding-top", ratio + "%");
            });
            image.src = image_url;
        }
        return this;
    };
    $.fn.aid_open_popup = function() {
        this.click(function(e) {
            var bgImg = $(this).css('background-image');
            if (bgImg) {
                $(function() {
                    var viewportWidth = $(window).width();
                    var viewportHeight = $(window).height();
                    alert("Your viewport width is" + " " + viewportWidth + " " + "px" + " " + "and" + " " + "your viewport height is" + " " + viewportHeight + " " + "px");
                    var elem = document.getElementById("aid-mediaQueryIndicator");
                    var myString = window.getComputedStyle(elem, ':before').content;
                    var beforeContent = myString.replace(/["']/g, '');
                    var beforeContentStr = beforeContent.replace("@2x", "");
                    var bgImgUrl = bgImg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                    if (window.devicePixelRatio >= 2) {
                        alert("your device pixel ratio is equal or superior to 2");
                        alert("the largest side the image delivered in the lightbox is going to be:" + " " + (beforeContentStr * 2) + " " + "pixels");
                    } else {
                        alert("your device pixel ratio is inferior to 2");
                        alert("the largest side of the image delivered in the lightbox is going to be:" + " " + beforeContent + " " + "pixels");
                    }
                    if (beforeContent === ('480')) {
                        bgImg = bgImgUrl;
                    } else if (beforeContent === ('480@2x')) {
                        bgImg = bgImgUrl;
                    } else if (beforeContent === ('640')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/640/').replace(/-[0-9]+.jpg/, "-640.jpg");
                    } else if (beforeContent === ('640@2x')) {
                        bgImg = bgImgUrl.replace('_images/960/', '_images/1280/').replace(/-[0-9]+.jpg/, "-1280.jpg");
                    } else if (beforeContent === ('800')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/800/').replace(/-[0-9]+.jpg/, "-800.jpg");
                    } else if (beforeContent === ('800@2x')) {
                        bgImg = bgImgUrl.replace('_images/960/', '_images/1600/').replace(/-[0-9]+.jpg/, "-1600.jpg");
                    } else if (beforeContent === ('1024')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/1024/').replace(/-[0-9]+.jpg/, "-1024.jpg");
                    } else if (beforeContent === ('1024@2x')) {
                        bgImg = bgImgUrl.replace('_images/960/', '_images/2048/').replace(/-[0-9]+.jpg/, "-2048.jpg");
                    } else if (beforeContent === ('1280')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/1280/').replace(/-[0-9]+.jpg/, "-1280.jpg");
                    } else if (beforeContent === ('1280@2x')) {
                        bgImg = bgImgUrl.replace('_images/960/', '_images/2560/').replace(/-[0-9]+.jpg/, "-2560.jpg");
                    } else if (beforeContent === ('1600')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/1600/').replace(/-[0-9]+.jpg/, "-1600.jpg");
                    } else if (beforeContent === ('1600@2x')) {
                        bgImg = bgImgUrl.replace('_images/960/', '_images/3200/').replace(/-[0-9]+.jpg/, "-3200.jpg");
                    } else if (beforeContent === ('1920')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/1920/').replace(/-[0-9]+.jpg/, "-1920.jpg");
                    } else if (beforeContent === ('2560')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/2560/').replace(/-[0-9]+.jpg/, "-2560.jpg");
                    } else if (beforeContent === ('3200')) {
                        bgImg = bgImgUrl.replace('_images/480/', '_images/3200/').replace(/-[0-9]+.jpg/, "-3200.jpg");
                    } else {
                        bgImg = bgImgUrl;
                        alert('Sorry, but a larger image could not be found');
                    }
                });
                $.magnificPopup.open({
                    items: {
                        src: bgImg
                    },
                    type: 'image',
                    closeBtnInside: false,
                    closeOnContentClick: true,
                    image: {
                        verticalFit: true,
                        titleSrc: function(item) {
                            return '<a class="mfpImageSourceLink" href="' + bgImg + '" target="_blank">Open in a New Window</a>';
                        }
                    }
                }, 0);
            } else {}
        });
    };
    $(document).ready(function() {
        $(document.body).prepend("<div id='aid-mediaQueryIndicator'>&nbsp;</div>");
        $('.aid-main').each(function() {
            $(this).prepend("<i class='fa fa-search-plus fa-lg aid-zoomIcon'></i>").wrap("<div class='aid-contentWrapper'></div>").wrap("<div class='aid-centerer'></div>").wrap("<div class='aid-wrapper'></div>");
            $(this).aid_set_img();
            $(this).aid_open_popup();
        });
    });
})(jQuery);