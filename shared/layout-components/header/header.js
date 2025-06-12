
"use client"
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Modalsearch from "../modal-search/modalsearch";
import store from "@/shared/redux/store";
import Link from "next/link";
import { basePath } from "@/next.config";
import { useUserContext } from "@/shared/userContext/userContext";

const Header = ({ ThemeChanger }) => {

    const { user, handleSignOut, logo, isLoading } = useUserContext()
    
    function handleSignOutCall() {
        // navigate.push("/signin");
        handleSignOut();
    }

    useEffect(() => {
        const handleResize = () => {
            const windowObject = window;
            if (windowObject.innerWidth <= 991) {
                // ThemeChanger({ ...local_varaiable, "toggled": "close" })
            } else {
                // ThemeChanger({...local_varaiable,"toggled":""})
            }
        };
        handleResize(); // Check on component mount
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
    }

    const toggleSidebar = () => {
        const theme = store.getState();
        let sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === "vertical") {
                let verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "", "iconOverlay": '' });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close", "iconOverlay": '' });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            let sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                } else {

                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                    // ThemeChanger({ ...theme, "toggled": "" });
                                }
                            }
                        }
                        // doublemenu(ThemeChanger);
                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "", "iconOverlay": '' });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close", "iconOverlay": '' });
                        }

                        break;

                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });
                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;

                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        const overlay = document.querySelector("#responsive-overlay");

                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = document.querySelector("#responsive-overlay");

                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            const overlay = document.querySelector("#responsive-overlay");

                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({ ...theme, "toggled": "close" });
            }
        }



    };
    
    useEffect(() => {
        const navbar = document.querySelector(".header");
        const navbar1 = document.querySelector(".app-sidebar");
        const sticky = navbar.clientHeight;
        // const sticky1 = navbar1.clientHeight;

        function stickyFn() {
            if (window.scrollY >= sticky) {
                navbar.classList.add("sticky-pin");
                navbar1.classList.add("sticky-pin");
            } else {
                navbar.classList.remove("sticky-pin");
                navbar1.classList.remove("sticky-pin");
            }
        }

        window.addEventListener("scroll", stickyFn);
        window.addEventListener("DOMContentLoaded", stickyFn);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener("scroll", stickyFn);
            window.removeEventListener("DOMContentLoaded", stickyFn);
        };
    }, []);

    return (
        <Fragment>
            <header className="header custom-sticky !top-0 !w-full">
                <nav className="main-header" aria-label="Global">
                    <div className="header-content">
                        <div className="header-left">

                            <div className="">
                                <button type="button" className="sidebar-toggle" onClick={() => toggleSidebar()} >
                                    <span className="sr-only">Toggle Navigation</span>
                                    <i className="ri-arrow-right-circle-line header-icon toggle-icon"></i>
                                </button>
                            </div>

                        </div>

                        <div className="responsive-logo text-center">
                        {
							isLoading ? 
							<div className="pl-0 p-1 h-10 w-36 mx-auto">
								<div className="rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-full w-full"/>
							</div>
							:
                            <>
                            <Link className="responsive-logo-dark" href={"/"} aria-label="Brand">
                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" /></Link>
                            <Link className="responsive-logo-light" href={"/"} aria-label="Brand">
                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" /></Link>
                            </>
                        }
                        </div>

                        <div className="header-right">
                            <div className="responsive-headernav">
                                <div className="header-nav-right">
                                    <div className="header-profile hs-dropdown ti-dropdown" data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-profile" type="button" className="hs-dropdown-toggle ti-dropdown-toggle gap-2 !p-0 !ring-0 !border-0 flex-shrink-0 h-8 w-8 rounded-full !shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-user-3-line header-icon"></i>
                                        </button>

                                        <div className="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]" aria-labelledby="dropdown-profile">
                                            <div className="ti-dropdown-header !bg-primary flex">
                                                <div className="ltr:mr-3 rtl:ml-3">
                                                    <img className="avatar shadow-none rounded-full !ring-transparent"
                                                        src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/users/profile.png`} alt="profile-img" />
                                                </div>
                                                <div>
                                                    <p className="ti-dropdown-header-title !text-white">{user.name}</p>
                                                    <p className="ti-dropdown-header-content !text-white/50">{user.email}</p>
                                                </div>
                                            </div>
                                            <div className="mt-2 ti-dropdown-divider">
                                                <Link href={"/dashboard/profile"} className="ti-dropdown-item">
                                                    <i className="ti ti-user-circle text-lg"></i>
                                                    Profile
                                                </Link>
                                                <button onClick={handleSignOutCall} className="ti-dropdown-item w-full">
                                                    <i className="ti ti-logout  text-lg"></i>
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-fullscreen hidden lg:block" title="Logout">
                                        <button aria-label="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                            href="#!" onClick={handleSignOutCall} >
                                            <i className="ri-logout-box-r-line header-icon"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Modalsearch />
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);

