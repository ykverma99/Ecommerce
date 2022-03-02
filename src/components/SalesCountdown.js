import React, {useEffect, useState} from "react";

export default function SalesCountdown(){
    const [timedays,setDays] = useState('00');
    const [timehour,setHour] = useState('00');
    const [timeminutes,setMinutes] = useState('00');
    const [timeseconds,setSeconds] = useState('00');

    let interval = React.useRef();
    console.log(interval)

    const startTimer = ()=>{
        const countDown = new Date("May 24, 2022 15:00:00").getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();

            let distance = countDown - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current)
            }else{
                setDays(days)
                setHour(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        },1000)
    };

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }
    })
    return (
        <div className="flex gap-5">
            <section className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold font-mono">{timedays}</h2>
                <small className="text-gray-500 text-md">Days</small>
            </section>
            <span className="text-3xl">:</span>
            <section  className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold font-mono">{timehour}</h2>
                <small className="text-gray-500 text-md">Hours</small>
            </section>
            <span className="text-3xl">:</span>
            <section  className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold font-mono">{timeminutes}</h2>
                <small className="text-gray-500 text-md">minutes</small>
            </section>
            <span className="text-3xl">:</span>
            <section  className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold font-mono">{timeseconds}</h2>
                <small className="text-gray-500 text-md">seconds</small>
            </section>
        </div>
    )
}