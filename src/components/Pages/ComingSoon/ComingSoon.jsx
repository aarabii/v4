import React, { useState, useRef, useEffect } from 'react';

// import Timer from './Timer';
import './comingSoon.css';

const ComingSoon = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("January 1, 2023 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        const intervalRefValue = interval.current;
        startTimer();
        return () => clearInterval(intervalRefValue);
    })

    return (
        <div id='soon'>
        <div className='soon'>
            <div className='soon_container'>
                <h1>Coming Soon</h1>
                <h2>This page is under construction.</h2> 
                <h3>Come back soon!</h3>
            </div>
            <a href='/'>Go To Homepage</a>
            <p>
                <small>{timerDays}</small><sup>Days</sup>
                <span>:</span>
                <small>{timerHours}</small><sup>Hours</sup>
                <span>:</span>
                <small>{timerMinutes}</small><sup>Minutes</sup>
                <span>:</span>
                <small>{timerSeconds}</small><sup>Seconds</sup>
            </p>
        </div>
    </div>
    )
}

export default ComingSoon