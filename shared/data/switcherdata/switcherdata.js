
import MenuItems from "@/shared/layout-components/sidebar/nav";
import store from "@/shared/redux/store";
import {useState } from "react";

export function Dark(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "class": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
        "bodyBg": "",
        "darkBg": "",

    });
    localStorage.setItem("Syntodarktheme", "dark");
    localStorage.removeItem("Syntolighttheme");
    localStorage.removeItem("Dynamicbackground");
    localStorage.removeItem("SyntoMenu");
    localStorage.removeItem("SyntoHeader");

}
export function Light(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "class": "light",
        "dataHeaderStyles": "light",
        "bodyBg": "",
        "darkBg": "",
        "dataMenuStyles": theme.dataNavLayout == "horizontal" ? "light" : "dark",
    });
    localStorage.setItem("Syntolighttheme", "light");
    localStorage.removeItem("bodyBg");
    localStorage.removeItem("darkBg");
    localStorage.removeItem("Dynamicbackground");
    localStorage.removeItem("Syntodarktheme");

}

export function Ltr(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme, "dir": "ltr",
    });
    localStorage.removeItem("Syntortl");
}
export function Rtl(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme, "dir": "rtl",
    });
    localStorage.setItem("Syntortl", "rtl");
}

export const HorizontalClick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.Syntonavstyles ? localStorage.Syntonavstyles : "menu-click",
    });
    localStorage.setItem("Syntolayout", "horizontal");
    localStorage.removeItem("Syntoverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    if (Sidebar) {
        Sidebar.style.marginInline = "0px";
    }
    closeMenuFn();
};
export const Vertical = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataMenuStyles":"dark",
        "dataVerticalStyle": "overlay",
        "toggled": "",
        "dataNavStyle": "",
    });
    localStorage.setItem("Syntolayout", "vertical");
    localStorage.removeItem("Syntonavstyles");
    const Sidebar = document.querySelector(".main-menu");
    if (Sidebar) {
        Sidebar.style.marginInline = "0px";
    }
};

export const Menuclick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "toggled": "menu-click-closed",
        "dataVerticalStyle": "",
    });
    localStorage.setItem("Syntonavstyles", "menu-click");
    localStorage.removeItem("Syntoverticalstyles");

};
export const MenuHover = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "toggled": "menu-hover-closed",
        "horStyle": "",
    });
    localStorage.setItem("Syntonavstyles", "menu-hover");
    localStorage.removeItem("Syntoverticalstyles");
};
export const IconClick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-click",
        "toggled": "icon-click-closed",
    });
    localStorage.setItem("Syntonavstyles", "icon-click");
    localStorage.removeItem("Syntoverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    if (Sidebar) {
        Sidebar.style.marginInline = "0px";
    }
};
export const IconHover = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-hover",
        "toggled": "icon-hover-closed",
    });
    localStorage.setItem("Syntonavstyles", "icon-hover");
    localStorage.removeItem("Syntoverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    if (Sidebar) {
        Sidebar.style.marginInline = "0px";
    }
    closeMenuFn();
};

function closeMenuFn() {
    const closeMenuRecursively = (items) => {

        items?.forEach((item) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MenuItems);
}

export const Regular = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular",
    });
    localStorage.setItem("Syntoregular", "Regular");
    localStorage.removeItem("Syntoclassic");
};
export const Classic = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("Syntoclassic", "Classic");
    localStorage.removeItem("Syntoregular");
};

export const Fullwidth = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("Syntofullwidth", "Fullwidth");
    localStorage.removeItem("Syntoboxed");

};
export const Boxed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
    });
    localStorage.setItem("Syntoboxed", "Boxed");
    localStorage.removeItem("Syntofullwidth");
};

export const FixedMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("Syntomenufixed", "MenuFixed");
    localStorage.removeItem("Syntomenuscrollable");
};
export const scrollMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("Syntomenuscrollable", "Menuscrolled");
    localStorage.removeItem("Syntomenufixed");
};

export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("Syntoheaderfixed", "FixedHeader");
    localStorage.removeItem("Syntoheaderscrollable");
};
export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("Syntoheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("Syntoheaderfixed");
};

export const Defaultmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "vertical",
        "toggled": "",
        "dataNavStyle": "",
    });
    localStorage.setItem("Syntoverticalstyles", "default");
    localStorage.removeItem("Syntonavstyles");
};
export const Closedmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "toggled": "close-menu-close",
        "dataNavStyle": "",
    });
    localStorage.setItem("Syntoverticalstyles", "closed");
    localStorage.removeItem("Syntonavstyles");

};

function icontextOpenFn() {

    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('icon-text');
    }
}

export const iconText = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close",
    });
    localStorage.setItem("Syntoverticalstyles", "icontext");
	localStorage.removeItem("Syntonavstyles");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });
};
export const iconOverayFn = (actionfunction) => {
    var icon = document.getElementById("switcher-icon-overlay");
    if (icon) {
        icon.checked = true;
    }
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "toggled": "icon-overlay-close",
        "dataNavStyle": "",
    });
    localStorage.setItem("Syntoverticalstyles", "overlay");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};

function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('icon-overlay');
        }
    }
}

export const DetachedFn = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "toggled": "detached-close",
    });
    localStorage.setItem("Syntoverticalstyles", "detached");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};
export const DoubletFn = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "toggled": "double-menu-open",
        "dataNavStyle": "",
    });
    localStorage.setItem("Syntoverticalstyles", "doublemenu");
    localStorage.removeItem("Syntonavstyles");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "toggled": "double-menu-close",
                }
            );
        }
    }, 100);
};

export const colorMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "color",
    });
    localStorage.setItem("SyntoMenu", "color");
    localStorage.removeItem("gradient");
};
export const lightMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "light",
    });
    localStorage.setItem("SyntoMenu", "light");
    localStorage.removeItem("light");
};
export const darkMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "dark",
    });
    localStorage.setItem("SyntoMenu", "dark");
    localStorage.removeItem("light");
};
export const gradientMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "gradient",
    });
    localStorage.setItem("SyntoMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "transparent",
    });
    localStorage.setItem("SyntoMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "light",
    });
    localStorage.setItem("SyntoHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("SyntoHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "color",
    });
    localStorage.removeItem("dark");
    localStorage.setItem("SyntoHeader", "color");
};
export const gradientHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "gradient",
    });
    localStorage.removeItem("transparent");
    localStorage.setItem("SyntoHeader", "gradient");
};
export const transparentHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "transparent",
    });
    localStorage.removeItem("gradient");
    localStorage.setItem("SyntoHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58 88 146",
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163",
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "172, 172, 80",
        "colorPrimary": "172 172 80",
    });
    localStorage.setItem("primaryRGB", "172, 172, 80");
    localStorage.setItem("primaryRGB1", "172 172 80");
};
export const primaryColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "165, 94, 131",
        "colorPrimary": "165 94 131",
    });
    localStorage.setItem("primaryRGB", "165, 94, 131");
    localStorage.setItem("primaryRGB1", "165 94 131");
};
export const primaryColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "87, 68, 117",
        "colorPrimary": "87 68 117",
    });
    localStorage.setItem("primaryRGB", "87, 68, 117");
    localStorage.setItem("primaryRGB1", "87 68 117");
};

export const backgroundColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "50 62 93",
        "darkBg": "64 76 107",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("Dynamicbackground", "50 62 93");
    localStorage.removeItem('SyntoMenu');
    localStorage.removeItem('SyntoHeader');
    localStorage.removeItem("Syntodarktheme");

};
export const backgroundColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "81 93 50",
        "darkBg": "95 107 64",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("Dynamicbackground", "81 93 50");
    localStorage.removeItem("50 62 93");
    localStorage.removeItem('SyntoMenu');
    localStorage.removeItem('SyntoHeader');
    localStorage.removeItem("Syntodarktheme");

};
export const backgroundColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "93 64 107",
        "darkBg": "79 50 93",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("Dynamicbackground", "93 64 107");
    localStorage.removeItem('SyntoMenu');
    localStorage.removeItem('SyntoHeader');
    localStorage.removeItem("Syntodarktheme");

};
export const backgroundColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "64 101 107",
        "darkBg": "50 87 93",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("Dynamicbackground", "64 101 107");
    localStorage.removeItem('SyntoMenu');
    localStorage.removeItem('SyntoHeader');
    localStorage.removeItem("Syntodarktheme");

};
export const backgroundColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "107 64 64",
        "darkBg": "93 50 50",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("Dynamicbackground", "107 64 64");
    localStorage.removeItem('SyntoMenu');
    localStorage.removeItem('SyntoHeader');
    localStorage.removeItem("Syntodarktheme");

};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//themeprimarycolor
const Themeprimarycolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "colorPrimaryRgb": `${r} ${g} ${b}`,
            "colorPrimary": `${r} ${g} ${b}`
        });
        localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`);
    };
    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};
export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg": `${r + 14} ${g + 14} ${b + 14}`,
            "darkBg": `${r} ${g} ${b}`,
            "inputBorder": `${r + 5} ${g + 5} ${b + 5}`,
            "Light": `${r + 5} ${g + 5} ${b + 5}`,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        localStorage.setItem("bodyBgRGB", `${r + 14} ${g + 14} ${b + 14}`);
        localStorage.setItem('darkBgRGB', `${r} ${g} ${b}`);
        localStorage.setItem('Light', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.setItem('inputBorder', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.removeItem('SyntoMenu');
        localStorage.removeItem('SyntoHeader');

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const bgImage1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg1",
    });
    localStorage.setItem("bgimage1", "bgimg1");
};
export const bgImage2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg2",
    });
    localStorage.setItem("bgimage2", "bgimg2");
};
export const bgImage3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg3",
    });
    localStorage.setItem("bgimage3", "bgimg3");
};
export const bgImage4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg4",
    });
    localStorage.setItem("bgimage4", "bgimg4");
};
export const bgImage5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg5",
    });
    localStorage.setItem("bgimage5", "bgimg5");
};
export const Reset = (actionfunction) => {
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg: "",
        darkBg: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};
export const Reset1 = (actionfunction) => {
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg: "",
        darkBg: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};

export const LocalStorageBackup = (actionfunction, setpageloading) => {
    (localStorage.Syntodarktheme) ? Dark(actionfunction) : "";
    (localStorage.Syntolighttheme) ? Light(actionfunction) : "";
    (localStorage.Syntortl) ? Rtl(actionfunction) : "";
    (localStorage.Syntoregular) ? Regular(actionfunction) : "";
    (localStorage.Syntoclassic) ? Classic(actionfunction) : "";
    (localStorage.Syntofullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.Syntoboxed) ? Boxed(actionfunction) : "";
    (localStorage.Syntomenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.Syntomenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.Syntoheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.Syntoheaderscrollable) ? Headerpostionscroll(actionfunction) : "";
    (localStorage.bgimage1) ? bgImage1(actionfunction) : "";
    (localStorage.bgimage2) ? bgImage2(actionfunction) : "";
    (localStorage.bgimage3) ? bgImage3(actionfunction) : "";
    (localStorage.bgimage4) ? bgImage4(actionfunction) : "";
    (localStorage.bgimage5) ? bgImage5(actionfunction) : "";

    (localStorage.Syntonavstyles === "menu-click") ? Menuclick(actionfunction) : "";
    (localStorage.Syntonavstyles === "menu-hover") ? MenuHover(actionfunction) : "";
    (localStorage.Syntonavstyles === "icon-click") ? IconClick(actionfunction) : "";
    (localStorage.Syntonavstyles === "icon-hover") ? IconHover(actionfunction) : "";

    (localStorage.Syntolayout == "horizontal") && HorizontalClick(actionfunction);

    // // ThemeColor MenuColor Start
    switch (localStorage.SyntoMenu) {
        case "light":
            lightMenu(actionfunction);
            break;
        case "dark":
            darkMenu(actionfunction);

            break;
        case "color":
            colorMenu(actionfunction);

            break;
        case "gradient":
            gradientMenu(actionfunction);

            break;
        case "transparent":
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.SyntoHeader) {
        case "light":
            lightHeader(actionfunction);

            break;
        case "dark":
            darkHeader(actionfunction);

            break;
        case "color":
            colorHeader(actionfunction);

            break;
        case "gradient":
            gradientHeader(actionfunction);

            break;
        case "transparent":
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case "58, 88, 146":
            primaryColor1(actionfunction);

            break;
        case "92, 144, 163":
            primaryColor2(actionfunction);

            break;
        case "172, 172, 80":
            primaryColor3(actionfunction);

            break;
        case "165, 94, 131":
            primaryColor4(actionfunction);

            break;
        case "87, 68, 117":
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }

    // Theme Primary: Colors: End
    switch (localStorage.Dynamicbackground) {
        case "50 62 93":
            backgroundColor1(actionfunction);

            break;
        case "81 93 50":
            backgroundColor2(actionfunction);

            break;
        case "93 64 107":
            backgroundColor3(actionfunction);

            break;
        case "64 101 107":
            backgroundColor4(actionfunction);

            break;
        case "107 64 64":
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    if (localStorage.Syntoverticalstyles) {
        let verticalStyles = localStorage.getItem("Syntoverticalstyles");

        switch (verticalStyles) {
            case "default":
                // Wrap your code in DOMContentLoaded event listener
                document.addEventListener("DOMContentLoaded", function () {
                    let defaultid = document.getElementById("switcher-detached");
                    if (defaultid) {
                        defaultid.checked = true;
                        Defaultmenu(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }
                });
                break;
            case "closed":
                // Wrap your code in DOMContentLoaded event listener
                document.addEventListener("DOMContentLoaded", function () {
                    let closedid = document.getElementById("switcher-detached");
                    if (closedid) {
                        closedid.checked = true;
                        Closedmenu(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }
                });
                break;
            case "icontext":
                // Wrap your code in DOMContentLoaded event listener
                    let icontextid = document.getElementById("switcher-detached");
                    if (icontextid) {
                        icontextid.checked = true;
                        iconText(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }
                break;
            case "overlay":
                
                // Wrap your code in DOMContentLoaded event listener
                    let overlayid = document.getElementById("switcher-detached");
                    if (overlayid) {
                        overlayid.checked = true;
                        iconOverayFn(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }
                break;
            case "detached":
                // Wrap your code in DOMContentLoaded event listener
                    let detachedid = document.getElementById("switcher-detached");
                    if (detachedid) {
                        detachedid.checked = true;
                        DetachedFn(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }
                break;

            case "doublemenu":
                // Wrap your code in DOMContentLoaded event listener
                    let doublemenuid = document.getElementById("switcher-detached");
                    if (doublemenuid) {
                        doublemenuid.checked = true;
                        DoubletFn(actionfunction);
                    } else {
                        console.error("Element with ID 'switcher-detached' not found.");
                    }

                break;

            default:
                let defaultbutton = document.getElementById("switcher-default-menu");
                defaultbutton.checked = true;
                break;
        }
    }

    switch (localStorage.SyntoMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.SyntoHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.bodyBg) {
        case "50 62 93":
            backgroundColor1(actionfunction);

            break;
        case "81 93 50":
            backgroundColor2(actionfunction);

            break;
        case "93 64 107":
            backgroundColor3(actionfunction);

            break;
        case "64 101 107":
            backgroundColor4(actionfunction);

            break;
        case "107 64 64":
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.darkBg) {
        case "50 62 93":
            backgroundColor1(actionfunction);

            break;
        case "81 93 50":
            backgroundColor2(actionfunction);

            break;
        case "93 64 107":
            backgroundColor3(actionfunction);

            break;
        case "64 101 107":
            backgroundColor4(actionfunction);

            break;
        case "107 64 64":
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }
    // Theme BAckground:

    if (localStorage.bodyBgRGB) {
        let updateddarkBg = `${Number(localStorage.bodyBgRGB.split(" ")[0]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[1]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[2]) + 14}`;
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodyBg": updateddarkBg,
            "darkBg": localStorage.bodyBgRGB,
            "class": "dark",
            "dataHeaderStyles": "dark",
        });
    }
    setpageloading(true);
};


