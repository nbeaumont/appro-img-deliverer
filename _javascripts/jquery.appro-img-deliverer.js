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

function ajaxCall3200(){bgImg=bgImgUrl.replace("_images/480/","_images/3200/").replace("_images/960/","_images/3200/").replace(/-[0-9]+.jpg/,"-3200.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall2560()}})}function ajaxCall2560(){bgImg=bgImgUrl.replace("_images/480/","_images/2560/").replace("_images/960/","_images/2560/").replace(/-[0-9]+.jpg/,"-2560.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall2048()}})}function ajaxCall2048(){bgImg=bgImgUrl.replace("_images/480/","_images/2048/").replace("_images/960/","_images/2048/").replace(/-[0-9]+.jpg/,"-2048.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall1920()}})}function ajaxCall1920(){bgImg=bgImgUrl.replace("_images/480/","_images/1920/").replace("_images/960/","_images/1920/").replace(/-[0-9]+.jpg/,"-1920.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall1600()}})}function ajaxCall1600(){bgImg=bgImgUrl.replace("_images/480/","_images/1600/").replace("_images/960/","_images/1600/").replace(/-[0-9]+.jpg/,"-1600.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall1280()}})}function ajaxCall1280(){bgImg=bgImgUrl.replace("_images/480/","_images/1280/").replace("_images/960/","_images/1280/").replace(/-[0-9]+.jpg/,"-1280.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall1024()}})}function ajaxCall1024(){bgImg=bgImgUrl.replace("_images/480/","_images/1024/").replace("_images/960/","_images/1024/").replace(/-[0-9]+.jpg/,"-1024.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall800()}})}function ajaxCall960(){bgImg=bgImgUrl.replace("_images/480/","_images/960/").replace(/-[0-9]+.jpg/,"-960.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall800()}})}function ajaxCall800(){bgImg=bgImgUrl.replace("_images/480/","_images/800/").replace(/-[0-9]+.jpg/,"-800.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall640()}})}function ajaxCall640(){bgImg=bgImgUrl.replace("_images/480/","_images/640/").replace(/-[0-9]+.jpg/,"-640.jpg");$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")},error:function(){alert("error");ajaxCall480()}})}function ajaxCall480(){bgImg=bgImgUrl;$.ajax({url:bgImg,type:"HEAD",async:false,success:function(){alert("succes")}})};

if(beforeContent===("480")){bgImg=bgImgUrl}else{if(beforeContent===("480@2x")){bgImg=bgImgUrl}else{if(beforeContent===("640")){$(function(){ajaxCall640()})}else{if(beforeContent===("640@2x")){$(function(){ajaxCall1280()})}else{if(beforeContent===("800")){$(function(){ajaxCall800()})}else{if(beforeContent===("800@2x")){$(function(){ajaxCall1600()})}else{if(beforeContent===("1024")){$(function(){ajaxCall1024()})}else{if(beforeContent===("1024@2x")){$(function(){ajaxCall2048()})}else{if(beforeContent===("1280")){$(function(){ajaxCall1280()})}else{if(beforeContent===("1280@2x")){$(function(){ajaxCall2560()})}else{if(beforeContent===("1600")){$(function(){ajaxCall1600()})}else{if(beforeContent===("1600@2x")){$(function(){ajaxCall3200()})}else{if(beforeContent===("1920")){$(function(){ajaxCall1920()})}else{if(beforeContent===("2560")){$(function(){ajaxCall2560()})}else{if(beforeContent===("3200")){$(function(){ajaxCall3200()})}else{bgImg=bgImgUrl;alert("Sorry, but a larger image could not be found")}}}}}}}}}}}}}}};
                    
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
        $(document.body).prepend("<div id='aid-mediaQueryIndicator'></div>");
        $('.aid-main').each(function() {
            $(this).prepend("<i class='fa fa-search-plus fa-lg aid-zoomIcon'></i>").wrap("<div class='aid-contentWrapper'></div>").wrap("<div class='aid-centerer'></div>").wrap("<div class='aid-wrapper'></div>");
            $(this).aid_set_img();
            $(this).aid_open_popup();
        });
    });
})(jQuery);
