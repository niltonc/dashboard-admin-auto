import React, {useState, useContext} from 'react'
import { Link, useLocation} from 'react-router-dom'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'

import HistoryIcon from '../../../../assets/images/sidebar/history'
import DevicesIcon from '../../../../assets/images/sidebar/devices'
import ScenesIcon from '../../../../assets/images/sidebar/scenes'
import SettingsIcon from '../../../../assets/images/sidebar/settings'
import ActionIcon from '../../../../assets/images/sidebar/action'
import ZigbeeIcon from  '../../../../assets/images/sidebar/zigbee'
import LprIcon from  '../../../../assets/images/sidebar/lpr'
import InfraredIcon from  '../../../../assets/images/sidebar/infrared'
import MhzIcon from '../../../../assets/images/sidebar/mhz'

function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
        decoratedOnClick(isCurrentEventKey)
      }}>
        {children}
      </Link>
    );
  }

const VerticalNav = () => {
    
    const [activeMenu, setActiveMenu] = useState(false)

    let location = useLocation();

    return (
       <>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
               
                {/* TITLE HOME */}
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Home</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>
                
                    {/* DEVICES */}
                <li className="nav-item">
                    <Link className={`${location.pathname === '/dashboard' ? 'active' : ''} nav-link `} aria-current="page" to="/#" onClick={() => {}}>
                        <i className="icon">
                           <DevicesIcon/>
                        </i>
                        <span className="item-name">Devices</span>
                    </Link>
                </li>

                {/* Controle */}
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Controle</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>

                {/* 433mhz gerais */}
                <Accordion.Item as="li" eventKey="menu-433" bsPrefix="nav-item" >
                    <CustomToggle eventKey="menu-433" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i className="icon">
                            <MhzIcon/>
                        </i>
                        <span className="item-name">433Mhz</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="menu-433" >
                        <ul  className="sub-nav">
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> H </i>
                                    <span className="item-name"> Interruptores </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/dual-horizontal">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>
                                    <span className="item-name">Persiana</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/dual-compact' ? 'active' : ''} nav-link`}  to="/#">
                                    <i className="icon svg-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>                   
                                    <span className="item-name">Garagem</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/boxed' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> B </i>
                                    <span className="item-name">Sensores</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/boxedfancy' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> B </i>
                                    <span className="item-name">Alarmes</span>
                                </Link>
                            </li>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                {/* 433mhz gerais */}

                {/* Infravermelho gerais */}
                <Accordion.Item as="li" eventKey="menu-infra" bsPrefix="nav-item" >
                    <CustomToggle eventKey="menu-infra" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i className="icon">
                            <InfraredIcon/>
                        </i>
                        <span className="item-name">Infravermelho</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="menu-infra" >
                        <ul  className="sub-nav">
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> H </i>
                                    <span className="item-name"> Ar Condicionado </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/dual-horizontal">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>
                                    <span className="item-name">Mídia e TV</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                {/* Infravermelho gerais */}

                {/* Ziggbee */}
                <li className="nav-item">
                    <Link className={`${location.pathname === '/#' ? 'active' : ''} nav-link `} aria-current="page" to="/#" onClick={() => {}}>
                        <i className="icon">
                           <ZigbeeIcon/>
                        </i>
                        <span className="item-name">ZigBee</span>
                    </Link>
                </li>

                    {/* LPR */}
                <Accordion.Item as="li" eventKey="menu-lpr" bsPrefix="nav-item" >
                    <CustomToggle eventKey="menu-lpr" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i className="icon">
                          <LprIcon/>
                        </i>
                        <span className="item-name">LPR</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="menu-lpr" >
                        <ul  className="sub-nav">
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/#' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> H </i>
                                    <span className="item-name"> Cameras </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>
                                    <span className="item-name">Veiculos</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                {/* LPR */}

                {/* SETTINGS */}
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Settings</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>

                     {/* Cenas */}
                <li className="nav-item">
                    <Link className={`${location.pathname === '/##' ? 'active' : ''} nav-link `} aria-current="page" to="/#" onClick={() => {}}>
                        <i className="icon">
                            <ScenesIcon/>
                        </i>
                        <span className="item-name">Cenas</span>
                    </Link>
                </li>

                    {/* Historico */}
                <li className="nav-item">
                    <Link className={`${location.pathname === '/#' ? 'active' : ''} nav-link `} aria-current="page" to="/#" onClick={() => {}}>
                        <i className="icon">
                            <HistoryIcon/>
                        </i>
                        <span className="item-name">Historico</span>
                    </Link>
                </li>

                {/* ações gerais */}
                <Accordion.Item as="li" eventKey="menu-action" bsPrefix="nav-item" >
                    <CustomToggle eventKey="menu-action" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i className="icon">
                           <ActionIcon/>
                        </i>
                        <span className="item-name">Ações</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="menu-action" >
                        <ul  className="sub-nav">
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> H </i>
                                    <span className="item-name"> Ação Tempo </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>
                                    <span className="item-name">Ação Sensor</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/dual-compact' ? 'active' : ''} nav-link`}  to="/#">
                                    <i className="icon svg-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>                   
                                    <span className="item-name">Ação Tempo e Sensor</span>
                                </Link>
                            </li>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                {/* ações gerais */}
                        
                         {/* configurações gerais */}
                         <Accordion.Item as="li" eventKey="menu-settings" bsPrefix="nav-item" >
                    <CustomToggle eventKey="menu-settings" onClick={(activeKey) => setActiveMenu(activeKey)}>
                    <i className="icon">
                            <SettingsIcon/>
                        </i>
                        <span className="item-name">Configurações</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="menu-settings" >
                        <ul  className="sub-nav">
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/horizontal' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> H </i>
                                    <span className="item-name"> Interruptores </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>
                                    <span className="item-name">Persiana</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/dual-compact' ? 'active' : ''} nav-link`}  to="/#">
                                    <i className="icon svg-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> D </i>                   
                                    <span className="item-name">Garagem</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/boxed' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> B </i>
                                    <span className="item-name">Sensores</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${location.pathname === '/boxedfancy' ? 'active' : ''} nav-link`} to="/#">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="sidenav-mini-icon"> B </i>
                                    <span className="item-name">Alarmes</span>
                                </Link>
                               <br></br>
                            </li>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
            </Accordion>
       </>
    )
}

export default VerticalNav
