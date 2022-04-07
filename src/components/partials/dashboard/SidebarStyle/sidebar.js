import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import VerticalNav from '../SidebarStyle/vertical-nav'
import Scrollbar from 'smooth-scrollbar'
import {bindActionCreators} from "redux"
// import SidebarDark from '../../components/settingoffcanvas'

// export const SidebarDark =() =>{

// }

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../../../store/setting/setting'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
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
        },
        dispatch
    )
})


const Sidebar = (props) => {
    
    
    
    useEffect(
        () =>{
            // sidebarcolormode
            const sidebarcolorMode1 = sessionStorage.getItem('sidebarcolor-mode');
            if(sidebarcolorMode1===null){
                props.SidebarColorAction(props.sidebarcolorMode);
            }
            else{
                props.SidebarColorAction(sidebarcolorMode1);
            }

            // sidebarstylemode
            const sidebarstyleMode = sessionStorage.getItem('sidebarstyle-mode');
            if(sidebarstyleMode===null){
                props.SidebarActiveStyleAction(props.sidebaractivestyleMode);
            }
            else{
                props.SidebarActiveStyleAction(sidebarstyleMode);
            }
            Scrollbar.init(document.querySelector('#my-scrollbar'))
        }
        
         
    
    )

    const minisidebar =() =>{
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }
    
    

    return (
        <>
            <aside className="sidebar sidebar-default navs-rounded-all {{ sidebarVariants }}">
                <div className="sidebar-header d-flex align-items-center justify-content-start">
                    <Link to="/dashboard" className="navbar-brand">
                    <svg width="36" height="30" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7405 19.0429C34.7389 19.0429 34.7375 19.0429 34.7361 19.0429C34.0817 19.0411 33.5293 18.572 33.506 17.9634C33.491 17.5729 33.5307 17.1799 33.536 16.788C33.5781 13.8817 32.8325 11.1908 31.2238 8.7708C28.8967 5.2705 25.6281 3.1965 21.4873 2.4835C21.1318 2.4225 20.7528 2.3371 20.4515 2.1533C20.0156 1.887 19.8941 1.3247 20.061 0.8255C20.2323 0.3143 20.5694 0 21.0777 0C21.1072 0 21.137 0.00110068 21.1673 0.00320068C21.7985 0.0469007 22.4323 0.145701 23.0493 0.288601C25.8473 0.935201 28.3198 2.2281 30.4576 4.1409C31.1034 4.718 31.6839 5.3682 32.1047 5.794C34.9993 9.5168 36.2813 13.4655 35.9419 17.9151C35.8883 18.6227 35.4314 19.0429 34.7405 19.0429Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3069 19.0574C30.2774 19.0574 30.2473 19.0567 30.2166 19.0549C29.5231 19.0178 29.0605 18.5268 29.094 17.8184C29.1584 16.4373 29.0224 15.0788 28.5176 13.7901C27.102 10.1723 24.436 8.09689 20.6105 7.50179C20.0899 7.42059 19.6051 7.33489 19.3645 6.78319C18.9836 5.91039 19.554 5.02429 20.4645 5.02429C20.513 5.02419 20.5622 5.02709 20.6123 5.03199C23.1509 5.29089 25.3934 6.25469 27.3294 7.91629C27.8104 8.32909 28.253 8.78659 28.5433 9.06209C30.7477 11.7944 31.7254 14.6921 31.5236 17.9712C31.4831 18.6319 30.9909 19.0574 30.3069 19.0574V19.0574Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1884 19.1685C26.1477 19.1685 26.106 19.1668 26.0637 19.1636C25.3426 19.1067 24.8963 18.5829 24.9563 17.8149C25.0805 16.226 24.6204 14.8477 23.5088 13.7008C22.6923 12.8587 21.6879 12.3881 20.5329 12.198C20.2228 12.1471 19.8827 12.0403 19.6436 11.8498C19.2086 11.5037 19.1483 10.9446 19.3945 10.4334C19.6178 9.96879 19.9604 9.73459 20.4437 9.73459C20.5022 9.73449 20.5629 9.73809 20.626 9.74509C22.7042 9.97329 24.3919 10.9276 25.7356 12.4926C27.0014 14.1351 27.5856 15.9628 27.3901 18.0213C27.322 18.7356 26.8514 19.1685 26.1884 19.1685V19.1685Z" fill="#196FA9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5691 14.5626C7.621 14.5626 3.6269 15.6186 0.918301 17.5466L3.4892 22.5507C5.2797 21.1277 7.9883 20.2554 10.605 20.2554C14.4615 20.2552 16.2978 22.0457 16.2978 25.1218H10.6052C3.0758 25.1218 0 28.1517 0 32.5131C0.0002 36.7826 3.4431 39.9964 9.2278 39.9964C12.8544 39.9962 15.4256 38.8027 16.7567 36.5531L16.757 39.6292H23.4595V25.5349C23.4595 18.0516 19.0983 14.5626 11.5691 14.5626V14.5626ZM11.0183 35.1756C8.4932 35.1756 6.9781 33.9822 6.9781 32.1919C6.9781 30.5388 8.0341 29.2995 11.3854 29.2995L16.2978 29.2993V31.8244C15.4714 34.074 13.4055 35.1759 11.0181 35.1759L11.0183 35.1756V35.1756Z" fill="#196FA9"/>
                    </svg>  
                        <h4 className="logo-title">Autodmo</h4>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar} >
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className="pt-0 sidebar-body data-scrollbar" data-scroll="1" id="my-scrollbar">
                    {/* sidebar-list class to be added after replace css */}
                    <div className="sidebar-list navbar-collapse" id="sidebar">
                      <VerticalNav />
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

