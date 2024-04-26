import React, { useState, useEffect } from 'react';
import './Header.scss';

const formatTime = (value: number): string => value.toString().padStart(2, '0');

const CountdownTimer: React.FC = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const deadline = new Date('2024-07-24').getTime();
            const now = new Date().getTime();
            const distance = deadline - now;

            if (distance < 0) {
                // Если дата прошла, устанавливаем счетчик в 0
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                // Расчет дней, часов, минут и секунд
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        };

        const timer = setInterval(calculateCountdown, 1000);

        // Очистка таймера при размонтировании компонента
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={"header__time"}>
            <div className="time__item">
                <h2>{formatTime(countdown.days)}</h2>
                <div className="time__img">
                    <h5>Days</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>

            </div>
            <div className="time__item">
                <h2>:</h2>
                <div className="time__img disbl">
                    <h5>Days</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>

            </div>

            <div className="time__item">
                <h2>{formatTime(countdown.hours)}</h2>
                <div className="time__img">
                    <h5>Hours</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>
            </div>
            <div className="time__item">
                <h2>:</h2>
                <div className="time__img disbl">
                    <h5>Days</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>

            </div>

            <div className="time__item">
                <h2>{formatTime(countdown.minutes)}</h2>
                <div className="time__img">
                    <h5>Minutes</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>
            </div>
            <div className="time__item">
                <h2>:</h2>
                <div className="time__img disbl">
                    <h5>Days</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>

            </div>

            <div className="time__item">
                <h2>{formatTime(countdown.seconds)}</h2>
                <div className="time__img">
                    <h5>Seconds</h5>
                    <svg  viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z" fill="#DF2224"/>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
