import React, { Component } from 'react';
import $ from "jquery";
// import Video from '../video/video.component';
import mp4 from '../../assests/garima.mp4';
import './heart.css';
// import "../../assests/garima.ogv";
class Heart extends Component {
    body;
    heart;
    r_size;
    r_left;
    r_top;
    r_time = 0;

    constructor(props) {
        super(props);
        

    }
    flyingHearts = () => {
    setInterval(function () {
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 5) + 1;
        
        var r_time = Math.floor(Math.random() * 5) + 5;

$('.heartContainer').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(247," + (r_bg - 25) + "," + (r_bg + 50) + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

$('.heartContainer').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(247," + (r_bg - 25) + "," + (r_bg+50) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        $('.heart').each(function () {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 300);
    }
glowingHearts = () => {
    this.r_left = ((Math.floor(Math.random() * document.getElementsByClassName('heartContainer')[0].clientWidth)));
    this.r_top = ((Math.floor(Math.random() * document.getElementsByClassName('heartContainer')[0].clientHeight)));
    
    this.r_size = Math.floor(Math.random() * 65) + 10;
    this.body = document.getElementsByClassName('heartContainer')[0];
    this.heart = document.createElement('span');
       
    this.r_time = Math.floor(Math.random() * 10000);
    this.heart.style.height = this.r_size + 'px';
    this.heart.style.width = this.r_size + 'px';

    this.heart.style.left = this.r_left + "px";
    this.heart.style.top = this.r_top + "px";
    this.body.appendChild(this.heart);
    setTimeout(()=>{
        this.glowingHearts();
    }, this.r_time);

    
}
componentDidMount() {
    // this.glowingHearts()
    this.flyingHearts();
}


    render() {
        return (
            
        <div className="heartContainer">
            <div className="video-background">
                <video autoPlay loop className="video-background">
                    <source src={mp4} type="video/mp4"/>
                    // <source src="../../assests/garima.ogv" type="video/ogg"/>
                </video>
            </div>

        </div>
            
        );
    }
}
export default Heart;







