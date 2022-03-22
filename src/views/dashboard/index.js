import React, {useEffect} from 'react'
import { Row,Col,Dropdown,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {bindActionCreators} from "redux"
//circular
import Circularprogressbar from '../../components/circularprogressbar.js'

// AOS
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos'
import '../../../node_modules/aos/dist/aos.css'
//apexcharts
import Chart from "react-apexcharts";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';

//progressbar
import Progress from '../../components/progress.js'
//img
import shapes1 from '../../assets/images/shapes/01.png'
import shapes2 from '../../assets/images/shapes/02.png'
import shapes3 from '../../assets/images/shapes/03.png'
import shapes4 from '../../assets/images/shapes/04.png'
import shapes5 from '../../assets/images/shapes/05.png'

//Count-up
import CountUp from 'react-countup';
// store
import {NavbarstyleAction, getDirMode, getcustomizerMode, getcustomizerprimaryMode,  getcustomizerinfoMode,  SchemeDirAction, ColorCustomizerAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../store/setting/setting'
import {connect} from "react-redux"

  
// install Swiper modules
SwiperCore.use([Navigation]);

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        customizerMode: getcustomizerMode(state),
        cololrinfomode: getcustomizerinfoMode(state),
        colorprimarymode: getcustomizerprimaryMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
            ColorCustomizerAction,
        },
        dispatch
    )
})



const Index = (props) => {
    useEffect(() => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        disable:  function() {
          var maxWidth = 996;
          return window.innerWidth < maxWidth;
        },
        throttleDelay: 10,
        once: true,
        duration: 700,
        offset: 10
      });
    //   customizer
    const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
    const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
    const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
    if(colorcustomizerMode===null){
        props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
        document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );
       
    }
    else{
        props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
        document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);
            
    }
    
      
    })

    const chart1={
        options : {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            colors: [props.colorprimarymode, props.cololrinfomode],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
                show: true,
                labels: {
                show: true,
                minWidth: 19,
                maxWidth: 19,
                style: {
                    colors: "#8A92A6",
                },
                offsetX: -5,
                },
            },
            legend: {
                show: false,
            },
            xaxis: {
            labels: {
                minHeight:22,
                maxHeight:22,
                show: true,
                style: {
                    colors: "#8A92A6",
                },
            },
            lines: {
                show: false  //or just here to disable only x axis grids
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
         },
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: [props.colorprimarymode, props.cololrinfomode]
                }
            },
            tooltip: {
                enabled: true,
            },
    },
        series: [{
            name: 'total',
            data: [94, 80, 94, 80, 94, 80, 94]
        }, {
            name: 'pipline',
            data: [72, 60, 84, 60, 74, 60, 78]
        }]
        
        
    }
    
  //chart2
    const chart2 ={
        options : {
        colors: [props.colorprimarymode, props.cololrinfomode],
        plotOptions: {
            radialBar: {
            hollow: {
                margin: 10,
                size: "50%",
            },
            track: {
                margin: 10,
                strokeWidth: '50%',
            },
            dataLabels: {
                show: false,
            }
            }
        },
        labels: ['Apples', 'Oranges'],
        },
        series: [55, 75],
    }
    const chart3={
        options : {
            chart: {
            stacked: true,
            toolbar: {
                show:false
                }
            },
            colors: [props.colorprimarymode, props.cololrinfomode],
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '28%',
                endingShape: 'rounded',
                borderRadius: 5,
            },
            },
            legend: {
            show: false
            },
            dataLabels: {
            enabled: false
            },
            stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
            },
            xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
            labels: {
                minHeight:20,
                maxHeight:20,
                style: {
                colors: "#8A92A6",
                },
            }
            },
            yaxis: {
            title: {
                text: ''
            },
            labels: {
                minWidth: 19,
                maxWidth: 19,
                style: {
                    colors: "#8A92A6",
                },
            }
            },
            fill: {
            opacity: 1
            },
            tooltip: {
            y: {
                formatter: function (val) {
                return "$ " + val + " thousands"
                }
            }
            }
        },
        series: [{
            name: 'Successful deals',
            data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35,]
        }, {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }]
    }
        return (
            <>
                <Row>
                    <Col md="12" lg="12">
                        <Row className="row-cols-1">
                            <div className="overflow-hidden d-slider1 ">
                                <Swiper className="p-0 m-0 mb-2 list-inline "
                                    slidesPerView={5}
                                    spaceBetween={32}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        550: { slidesPerView: 2 },
                                        991: { slidesPerView: 3 },
                                        1400: { slidesPerView: 4 },
                                        1500: { slidesPerView: 5 },
                                        1920: { slidesPerView: 6 },
                                        2040: { slidesPerView: 7 },
                                        2440: { slidesPerView: 8 }
                                    }} data-aos="fade-up" data-aos-delay="700"
                                >
                                    <SwiperSlide className="card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget" >
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" Linecap='rounded' trailstroke='#ddd' strokewidth="4px" style={{width:60, height:60,}} value={90} id="circle-progress-01" >
                                                    <svg className="" width="24" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Total Sales</p>
                                                    <h4 className="counter">$<CountUp  start={120} end={560} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px"  Linecap='rounded' style={{width:60, height:60,}} value={60} id="circle-progress-02" >
                                                    <svg className="" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                <p  className="mb-2">Total Profit</p>
                                                <h4 className="counter">$<CountUp  start={20} end={158} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={70} id="circle-progress-03" >
                                                    <svg className="" width="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Total Cost</p>
                                                    <h4 className="counter">$<CountUp  start={120} end={378} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={60} id="circle-progress-04" >
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Revenue</p>
                                                    <h4 className="counter">$<CountUp  start={212} end={742} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{width:60, height:60,}} value={50} id="circle-progress-05" >
                                                <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Net Income</p>
                                                    <h4 className="counter">$<CountUp  start={35} end={150} duration={3}/>K</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide" >
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                    <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' Linecap='rounded' strokewidth="4px" value={40}  style={{width:60, height:60,}} id="circle-progress-06">
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Today</p>
                                                    <h4 className="counter">$<CountUp  start={652} end={4600} duration={3}/></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className=" card card-slide">
                                        <div className="card-body">
                                            <div className="progress-widget">
                                                <Circularprogressbar stroke={props.colorprimarymode}  Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="60px" height="60px" value={30} style={{width:60, height:60,}} id="circle-progress-07" >
                                                    <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                    </svg>
                                                </Circularprogressbar>
                                                <div className="progress-detail">
                                                    <p  className="mb-2">Members</p>
                                                    <h4 className="counter"><CountUp  start={2} end={11.2} duration={3} decimals={1}/>M</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-button swiper-button-next"></div>
                                    <div className="swiper-button swiper-button-prev"></div>
                                </Swiper>
                            </div>
                        </Row>
                    </Col>

                    <Col>
                    <Row>
                        {/*  */}
                        
                    </Row>
                    </Col>
                </Row>
            </>
        )
    }

export default connect(mapStateToProps, mapDispatchToProps)(Index)
