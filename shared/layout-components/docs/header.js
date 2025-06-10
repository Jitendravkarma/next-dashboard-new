
"use client"
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Modalsearch from "../modal-search/modalsearch";
import store from "@/shared/redux/store";
import Link from "next/link";
import { basePath } from "@/next.config";
import { useUserContext } from "@/shared/userContext/userContext";

const Header = ({ local_varaiable, ThemeChanger }) => {

    const { isLoading, logo } = useUserContext()
    let [storedata, SetStoreData] = useState(local_varaiable);

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

    useEffect(() => {
        SetStoreData(local_varaiable);
    }, [local_varaiable]);

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

                        <div className="responsive-logo">
                            {
                                isLoading ? 
                                <div className="pl-0 p-1 h-10 w-36 mx-auto">
                                    <div className="rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-full w-full"/>
                                </div>
                                :
                                <>
                                <Link className="responsive-logo-dark" href={"/dashboard/home"} aria-label="Brand">
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" /></Link>
                                <Link className="responsive-logo-light" href={"/dashboard/home"} aria-label="Brand">
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" /></Link>
                                </>
                            }
                        </div>

                        <div className="header-right">
                            <div className="responsive-headernav">
                                <div className="header-nav-right">
                                    <Link href={"/signup"}
                                        className="uppercase rounded-sm p-2 md:py-1 hidden sm:inline-block text-xs border border-blue-100 bg-green-100 hover:bg-green-200 animate-pulse"
                                        title="free trial"
                                    >
                                        <code className="text-green-600"><span>Free Trial</span></code>
                                    </Link>
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

