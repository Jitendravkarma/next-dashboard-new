
"use client"
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";

import Link from "next/link";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "@/shared/redux/store";

const Landingswitcher = ({ local_varaiable, ThemeChanger }) => {

    useEffect(() => {
        const theme = store.getState();
        ThemeChanger({
            ...theme,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal"
        });

        return () => {
            ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`
            });
        };
    }, []);

    return (
        <div>
            <div id="hs-overlay-switcher" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex={-1}>
                <div className="ti-offcanvas-header">
                    <h3 className="ti-offcanvas-title">
                        Switcher
                    </h3>
                    <button type="button"
                        className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-white/70 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                        data-hs-overlay="#hs-overlay-switcher">
                        <span className="sr-only">Close modal</span>
                        <i className="ri-close-circle-line leading-none text-lg"></i>
                    </button>
                </div>
                <div className="ti-offcanvas-body" id="switcher-body">
                    <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" className="space-y-6">
                        <div className="space-y-6">
                            <p className="switcher-style-head">Theme Color Mode:</p>
                            <div className="grid grid-cols-3 gap-6 switcher-style">
                                <div className="flex">
                                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-light-theme"
                                        checked={local_varaiable.class != "dark"} onChange={e => { }}
                                        onClick={() => switcherdata.Light(ThemeChanger)}
                                    />
                                    <label htmlFor="switcher-light-theme"
                                        className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Light</label>
                                </div>
                                <div className="flex">
                                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-dark-theme"
                                        checked={local_varaiable.class == "dark"} onChange={e => { }}
                                        onClick={() => switcherdata.Dark(ThemeChanger)}
                                    />
                                    <label htmlFor="switcher-dark-theme"
                                        className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Dark</label>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="switcher-style-head">Directions:</p>
                            <div className="grid grid-cols-3 gap-6 switcher-style">
                                <div className="flex">
                                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-ltr"
                                        checked={local_varaiable.dir == "ltr"} onChange={e => { }}
                                        onClick={() => { switcherdata.Ltr(ThemeChanger); }}
                                    />
                                    <label htmlFor="switcher-ltr" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">LTR</label>
                                </div>
                                <div className="flex">
                                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-rtl"
                                        checked={local_varaiable.dir == "rtl"} onChange={e => { }}
                                        onClick={() => { switcherdata.Rtl(ThemeChanger); }}
                                    />
                                    <label htmlFor="switcher-rtl" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">RTL</label>
                                </div>
                            </div>
                        </div>
                        <div className="theme-colors space-y-6">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                                        id="switcher-primary" onClick={() => switcherdata.primaryColor1(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                                        id="switcher-primary1" onClick={() => switcherdata.primaryColor2(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                                        id="switcher-primary2" onClick={() => switcherdata.primaryColor3(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                                        id="switcher-primary3" onClick={() => switcherdata.primaryColor4(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                                        id="switcher-primary4" onClick={() => switcherdata.primaryColor5(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
                                    <div className='theme-container-primary'>
                                        <button className="">nano</button>
                                    </div>
                                    <div className='pickr-container-primary'>
                                        <div className='pickr'>
                                            <button className='pcr-button' onClick={(ele) => {
                                                if (ele.target.querySelector("input")) {
                                                    ele.target.querySelector("input").click();
                                                }
                                            }}>
                                                <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-colors space-y-6">
                            <p className="switcher-style-head">Theme Background:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-bg-1" type="radio" name="theme-background"
                                        id="switcher-background" onClick={() => switcherdata.backgroundColor1(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-bg-2" type="radio" name="theme-background"
                                        id="switcher-background1" onClick={() => switcherdata.backgroundColor2(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-bg-3" type="radio" name="theme-background"
                                        id="switcher-background2" onClick={() => switcherdata.backgroundColor3(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-bg-4" type="radio" name="theme-background"
                                        id="switcher-background3" onClick={() => switcherdata.backgroundColor4(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select">
                                    <input className="ti-form-radio color-input color-bg-5" type="radio" name="theme-background"
                                        id="switcher-background4" onClick={() => switcherdata.backgroundColor5(ThemeChanger)} />
                                </div>
                                <div className="ti-form-radio switch-select ps-0 mt-1 color-bg-transparent">
                                    <div className='theme-container-background' >
                                        <button className="">nano</button>
                                    </div>
                                    <div className='pickr-container-background'>
                                        <div className='pickr'>
                                            <button className='pcr-button' onClick={(ele) => {
                                                if (ele.target.querySelector("input")) {
                                                    ele.target.querySelector("input").click();
                                                }
                                            }}>
                                                <switcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ti-offcanvas-footer">
                    <Link id="reset-all" className="ti-btn ti-btn-danger w-full" href="#!" scroll={false} onClick={() => switcherdata.Reset1(ThemeChanger)} >Reset</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
