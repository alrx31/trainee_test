import React, {useEffect, useState} from 'react';
import './Header.scss';
import CountdownTimer from "./CountdownTimer";
import {PopUp} from "./PopUp";
import axios from "axios";


export const Header: React.FC = () => {
    const [inp_value, setValue] = useState("");

    const [isOpen, setIsOpen] = useState(false);


    const [data, setData] = useState(null);

    const [popup_data, setPopupData] = useState({
        title: "",
        subtitle: ""
    });

    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFifth, setShowFifth] = useState(false);

    const [isClocked, setIsClocked] = useState(false);

    useEffect(() => {
        // Задержка перед появлением первого элемента
        const timeoutFirst = setTimeout(() => {
            setShowFirst(true);
        }, 200);

        // Задержка перед появлением второго элемента
        const timeoutSecond = setTimeout(() => {
            setShowSecond(true);
        }, 400);

        // Задержка перед появлением третьего элемента
        const timeoutThird = setTimeout(() => {
            setShowThird(true);
        }, 600);

        const timeoutFour = setTimeout(() => {
            setShowFour(true);
        }, 800);

        const timeoutFifth = setTimeout(() => {
            setShowFifth(true);
        }, 1000);

        return () => {
            clearTimeout(timeoutFirst);
            clearTimeout(timeoutSecond);
            clearTimeout(timeoutThird);
            clearTimeout(timeoutFour);
            clearTimeout(timeoutFifth);
        };
    }, []);




    let handleChange = (data:string)=>{
        setValue(data);
    }
    let validateEmail =(email:string)=> {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    let handleSubmit = (e:any) => {
        e.preventDefault();

        if (!validateEmail(inp_value)) {
            setPopupData({
                title: "ERROR!",
                subtitle: "You have entered an invalid email address"

            })
            return;
        }

        fetchEmail(inp_value);
    }

    let fetchEmail = async (email:string) => {
            await axios.post('https://blablabla.api/email', {email})
                .then((response) => {
                    setPopupData({
                        title: "Success!",
                        subtitle: "You have successfully subscribed to our newsletter"
                    })
                })
                .catch((error) => {
                    setPopupData({
                        title: "ERROR!",
                        subtitle: "Error occurred while subscribing to our newsletter"
                    })
                });
    }

    useEffect(()=>{
        if(popup_data.title !== ""){
            setIsOpen(true);
        }
    },[data, popup_data]);

    let handleClickEvents = () =>{
        setIsClocked(true);
        setTimeout(()=>{
            setIsClocked(false);
        },1000)
    }



    return (
        <header>
            <div className={`header_image header_image_l ${showThird&& 'show'}`}>
                <svg width="470" height="419" viewBox="0 0 470 419" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_3_738)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.4328 410.107C147.67 380.657 62.1031 303.502 98.4759 255.414C142.66 197 491.186 123.286 468.434 26.699C399.956 -127.104 194.156 -34.0396 142.454 -89.585C92.3313 -143.434 4.42358 -227.864 -63.8169 -255.388C-129.136 -281.733 -269.011 -281.089 -290.833 -154.314C-304.75 -58.9551 -261.367 -35.6642 -292.329 13.0606C-325.114 64.6532 -376.659 107.424 -381.099 168.374C-385.91 234.428 -366.845 307.689 -316.965 351.255C-268.416 393.657 -195.189 375.935 -131.554 386.326C-72.0016 396.051 -11.5614 434.965 43.4328 410.107Z" fill="#162C4E"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_3_738" x="-381.819" y="-269.155" width="851.319" height="691.427" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="15"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_738"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <div className={`header_image header_image_r ${showThird && 'show'}`}>
                <svg width="271" height="327" viewBox="0 0 271 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_3_739)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M692.596 68.3349C731.063 -32.9233 618.057 -10.1912 601.095 -68.0588C580.49 -138.353 729.002 -462.166 637.823 -501.457C473.409 -538.128 425.523 -317.399 350.068 -308.983C276.918 -300.824 156.67 -280.547 93.8751 -242.151C33.7688 -205.398 -49.0901 -92.6886 39.779 0.3896C108.113 68.3963 152.69 47.4384 173.389 101.341C195.307 158.416 198.952 225.298 245.285 265.188C295.498 308.417 365.735 336.769 430.477 322.676C493.491 308.959 522.898 239.593 569.18 194.684C612.493 152.657 679.791 127.312 692.596 68.3349Z" fill="#162C4E"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_3_739" x="0.838379" y="-505.564" width="699.692" height="835.887" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="15"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_739"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <div className="header_wrapper">
                <a href={""} className={`logo ${showFirst && 'show'}`}>
                    <svg width="190" height="61" viewBox="0 0 190 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.637 46.6618C26.5216 41.3988 30.5532 38.0604 36.6629 38.0604H52.5397C58.4653 38.0604 59.724 34.1696 59.724 34.1696C58.8393 39.4326 56.4287 42.771 50.319 42.771H34.0326C27.2935 42.771 25.637 46.6618 25.637 46.6618Z" fill="#DF2325"/>
                        <path d="M52.2662 43.7749C50.9184 45.8005 49.3568 45.9787 46.394 45.9787C43.4312 45.9787 39.9519 46.0441 35.1366 45.9787C29.9532 45.9074 25.9513 48.2479 25.6248 53.3386C26.9726 51.313 28.7241 50.9447 31.6869 50.9447C34.6497 50.9447 36.431 50.8794 41.2462 50.9447C46.4237 51.0219 50.4731 48.735 52.2662 43.7749Z" fill="#EE4523"/>
                        <path d="M25.6365 57.5621C25.6365 55.5365 28.4093 54.4494 31.7224 54.4494C35.0355 54.4494 41.448 54.889 44.1733 52.9644C43.4311 55.186 36.6624 60.2767 29.8996 60.2767C26.8358 60.2767 25.6365 58.7976 25.6365 57.5621Z" fill="#FE5F3E"/>
                        <path d="M13.6086 25.7884C18.8692 26.6735 22.2061 30.7069 22.2061 36.8193V52.7034C22.2061 58.6317 26.0951 59.891 26.0951 59.891C20.8345 59.0059 17.4977 56.5942 17.4977 50.4817V34.1878C17.4977 27.4398 13.6086 25.7884 13.6086 25.7884Z" fill="#172C4F"/>
                        <path d="M16.4927 52.4238C14.468 51.0754 14.2899 49.5131 14.2899 46.549C14.2899 43.5848 14.2246 40.1039 14.2899 35.2864C14.3611 30.1006 12.0218 26.0969 6.93335 25.7702C8.95803 27.1186 9.32615 28.871 9.32615 31.8351C9.32615 34.7993 9.39146 36.5813 9.32615 41.3988C9.2549 46.5846 11.5349 50.6299 16.4927 52.4238Z" fill="#264A74"/>
                        <path d="M2.71936 25.7899C4.74404 25.7899 5.8306 28.564 5.8306 31.8786C5.8306 35.1873 5.39123 41.6086 7.31497 44.3352C5.08841 43.5926 0 36.8208 0 30.049C0 26.9839 1.48437 25.7899 2.71936 25.7899Z" fill="#345A87"/>
                        <path d="M34.4802 13.7533C33.5955 19.0163 29.564 22.3547 23.4543 22.3547H7.57155C1.64595 22.3547 0.387207 26.2455 0.387207 26.2455C1.27189 20.9825 3.68251 17.6441 9.79217 17.6441H26.0787C32.8236 17.6441 34.4802 13.7533 34.4802 13.7533Z" fill="#DF2325"/>
                        <path d="M7.85034 16.6402C9.19815 14.6146 10.7597 14.4364 13.7225 14.4364C16.6853 14.4364 20.1647 14.371 24.98 14.4364C30.1634 14.5076 34.1652 12.1672 34.4918 7.07648C33.144 9.10208 31.3924 9.47037 28.4296 9.47037C25.4668 9.47037 23.6856 9.53571 18.8703 9.47037C13.6928 9.39315 9.64346 11.6801 7.85034 16.6402Z" fill="#EE4523"/>
                        <path d="M34.4811 2.85302C34.4811 4.87863 31.7083 5.96568 28.3952 5.96568C25.0821 5.96568 18.6696 5.52611 15.9443 7.45073C16.6865 5.2291 23.4552 0.138367 30.218 0.138367C33.2818 0.138367 34.4811 1.61747 34.4811 2.85302Z" fill="#FE5F3E"/>
                        <path d="M46.5082 34.627C41.2476 33.7419 37.9108 29.7085 37.9108 23.5961V7.71204C37.9108 1.78374 34.0217 0.524414 34.0217 0.524414C39.2823 1.4095 42.6192 3.82121 42.6192 9.93366V26.2276C42.6192 32.9756 46.5082 34.627 46.5082 34.627Z" fill="#172C4F"/>
                        <path d="M43.6226 7.99133C45.6472 9.33975 45.8254 10.902 45.8254 13.8662C45.8254 16.8303 45.8907 20.3113 45.8254 25.1288C45.7541 30.3145 48.0935 34.3182 53.1819 34.6449C51.1572 33.2965 50.7891 31.5441 50.7891 28.58C50.7891 25.6158 50.7238 23.8338 50.7891 19.0163C50.8603 13.8305 48.5803 9.78527 43.6226 7.99133Z" fill="#264A74"/>
                        <path d="M57.3969 34.627C55.3722 34.627 54.2856 31.853 54.2856 28.5383C54.2856 25.2297 54.725 18.8083 52.8013 16.0818C55.0219 16.8243 60.1103 23.5961 60.1103 30.362C60.1162 33.4331 58.6319 34.627 57.3969 34.627Z" fill="#345A87"/>
                        <path d="M84.4848 6.59534V33.7598H95.1545V40.0504H76.3386V6.59534H84.4848Z" fill="#172C4F"/>
                        <path d="M119.547 13.1236H107.208V19.8895H118.116V26.1801H107.208V33.5222H119.547V40.0504H99.0623V6.59534H119.547V13.1236Z" fill="#172C4F"/>
                        <path d="M145.655 34.14H133.174L131.173 40.0504H122.647L134.748 6.59534H144.182L156.283 40.0504H147.662L145.655 34.14ZM139.414 15.6007L135.318 27.8493H143.559L139.414 15.6007Z" fill="#172C4F"/>
                        <path d="M190.001 23.3229C190.001 33.2371 183.144 40.0504 172.474 40.0504H159.946V6.59534H172.474C183.144 6.59534 190.001 13.3612 190.001 23.3229ZM171.945 32.9935C178.091 32.9935 181.713 29.465 181.713 23.3169C181.713 17.1689 178.091 13.5453 171.945 13.5453H168.086V32.9876H171.945V32.9935Z" fill="#172C4F"/>
                        <path d="M115.467 52.0735H112.053L111.465 53.7426H110.07L112.991 45.5749H114.541L117.462 53.7426H116.055L115.467 52.0735ZM113.763 47.1906L112.427 50.9805H115.093L113.763 47.1906Z" fill="#172C4F"/>
                        <path d="M128.935 49.2421C128.935 51.7548 127.219 53.2933 124.606 53.2933H121.94V45.1374H124.606C127.219 45.1315 128.935 46.7175 128.935 49.2421ZM124.606 52.2003C126.53 52.2003 127.563 51.0954 127.563 49.2421C127.563 47.3769 126.53 46.2245 124.606 46.2245H123.282V52.2003H124.606Z" fill="#172C4F"/>
                        <path d="M138.755 45.5809H140.162L137.099 53.7367H135.549L132.473 45.5809H133.904L136.321 52.3646L138.755 45.5809Z" fill="#172C4F"/>
                        <path d="M144.538 45.5809H145.874V53.7367H144.538V45.5809Z" fill="#172C4F"/>
                        <path d="M153.687 53.8201C152.054 53.8201 150.801 52.9291 150.801 51.4856H152.232C152.292 52.1569 152.761 52.6974 153.687 52.6974C154.625 52.6974 155.153 52.1925 155.153 51.4975C155.153 49.5254 150.825 50.8025 150.825 47.7968C150.825 46.3652 151.965 45.4742 153.627 45.4742C155.189 45.4742 156.293 46.2939 156.406 47.6958H154.928C154.88 47.1434 154.399 46.6385 153.556 46.6147C152.784 46.5909 152.185 46.9652 152.185 47.7552C152.185 49.5967 156.501 48.4502 156.501 51.4322C156.501 52.6499 155.504 53.8201 153.687 53.8201Z" fill="#172C4F"/>
                        <path d="M165.047 53.8197C162.749 53.8197 160.879 52.097 160.879 49.6378C160.879 47.1964 162.743 45.4678 165.047 45.4678C167.369 45.4678 169.215 47.1904 169.215 49.6378C169.215 52.097 167.374 53.8197 165.047 53.8197ZM165.047 52.6613C166.668 52.6613 167.838 51.4852 167.838 49.6437C167.838 47.8023 166.662 46.6499 165.047 46.6499C163.426 46.6499 162.256 47.8023 162.256 49.6437C162.256 51.4852 163.432 52.6613 165.047 52.6613Z" fill="#172C4F"/>
                        <path d="M176.784 45.5809C178.72 45.5809 179.67 46.6976 179.67 48.0223C179.67 48.9846 179.153 50.0182 177.782 50.3568L179.8 53.7367H178.203L176.327 50.4756H175.306V53.7367H173.97V45.5809H176.784ZM176.784 46.6739H175.306V49.4063H176.784C177.829 49.4063 178.298 48.8302 178.298 48.0223C178.298 47.2025 177.829 46.6739 176.784 46.6739Z" fill="#172C4F"/>
                        <path d="M187.187 53.8201C185.554 53.8201 184.301 52.9291 184.301 51.4856H185.732C185.792 52.1569 186.261 52.6974 187.187 52.6974C188.125 52.6974 188.653 52.1925 188.653 51.4975C188.653 49.5254 184.325 50.8025 184.325 47.7968C184.325 46.3652 185.465 45.4742 187.128 45.4742C188.689 45.4742 189.793 46.2939 189.906 47.6958H188.428C188.38 47.1434 187.899 46.6385 187.056 46.6147C186.284 46.5909 185.685 46.9652 185.685 47.7552C185.685 49.5967 190.001 48.4502 190.001 51.4322C190.001 52.6499 189.004 53.8201 187.187 53.8201Z" fill="#172C4F"/>
                    </svg>

                </a>
                <div className="header_wrapper1">
                    <h1 className={`${showSecond && 'show'}`}>Under Construction</h1>
                    <h3 className={`${showThird && 'show'}`}>We're making lots of improvements and will be back soon</h3>
                    <div className={`header_clock ${showFour && 'show'}`}>
                        <CountdownTimer/>
                    </div>


                    <h3 className={`${showFifth && 'show'}`}>Check our event page when you wait:</h3>

                    <a href={"https://github.com/ULtaR31"} target={"_blank"} className={`header_button ${showFifth && 'show'}`}>
                        <h4>Go to the events</h4>
                        <div className="header_button__img">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <footer>

                <form id={"header_form"} onSubmit={(event)=>handleSubmit(event)}>
                    <input type="text" placeholder="Enter your Email and get notified" onChange={(e)=>handleChange(e.target.value)} required/>
                    <button type="submit">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>

                <div className={`footer_to_events ${isClocked ? 'clicked' : ""}`}>
                    <a href="#events_hook" onClick={()=>handleClickEvents()}>
                        Other Events
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>

            </footer>

            <PopUp title={popup_data.title} subtitle={popup_data.subtitle} onClose={()=>{setIsOpen(false);}} isOpen={isOpen} />

        </header>
    )
}

