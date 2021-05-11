
import {clock, alarm} from "./functions/clock_alarm.js";
import movement from "./functions/keyboard_movement.js";
import countdown from "./functions/countdown.js";
import dayNightButton from "./functions/day_night_button.js";
import scrollUp from "./functions/scroll_up_button.js";
import deviceDetector from "./functions/device_detector.js";
import responsiveFunction from "./functions/responsive.js";
import tester from "./functions/web_tester.js";
import webcamFunction from "./functions/webcam.js";
import geolocationFunction from "./functions/geolocation.js";
import searchFilter from "./functions/search_filter.js";
import digitalGiveaway from "./functions/digital_giveaway.js";
import gallery from "./functions/gallery.js";
import networkDetection from "./functions/network_detection.js";
import scrollSpy from "./functions/scroll_spy.js";


document.addEventListener('DOMContentLoaded', (e) =>{
    
    clock('#clock-text','#start-clock', '#stop-clock');
    alarm('#start-alarm', '#stop-alarm');
    movement('.circle', '.scenario');
    countdown('.countdown-text');
    scrollUp('.scroll-up-button', 'scroll-up-on');
    deviceDetector('.device-detector-text');
    responsiveFunction('#youtube', '#maps');
    tester('#btn-openWindow', '#btn-closeWindow');
    webcamFunction('webcam');
    geolocationFunction('geolocation');
    searchFilter('.input', '.card');
    digitalGiveaway('.giveaway-list', '.input-giveaway', '.add-button-data', '.giveaway-Button');
    networkDetection('network-warning', 'network-warning-online', 'network-warning-offline');
    gallery();
    scrollSpy();

});

dayNightButton('.button-daynight');