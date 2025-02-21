"use client"
import React, { useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as switcherdata from '../../shared/data/switcherdata/switcherdata';
import { ThemeChanger } from '@/shared/redux/action';
import { Initialload } from '@/shared/contextapi';

function Layout({ children, local_varaiable, ThemeChanger }) {

  const customstyles = {
    ...(local_varaiable.colorPrimaryRgb !== '' && { '--color-primary-rgb': local_varaiable.colorPrimaryRgb }),
    ...(local_varaiable.colorPrimary !== '' && { '--color-primary': local_varaiable.colorPrimary }),
    ...(local_varaiable.bodyBg !== '' && { '--body-bg': local_varaiable.bodyBg }),
    ...(local_varaiable.darkBg !== '' && { '--dark-bg': local_varaiable.darkBg }),
  };

  const theme = useContext(Initialload);

  useEffect(() => {
    if (typeof window !== 'undefined' && !theme.pageloading) {
      switcherdata.LocalStorageBackup(ThemeChanger, theme.setpageloading);
    }
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("suppressHydrationWarning", "true");
    htmlTag.setAttribute("dir", local_varaiable.dir);
    htmlTag.setAttribute("class", local_varaiable.class);
    htmlTag.setAttribute("data-header-styles", local_varaiable.dataHeaderStyles);
    htmlTag.setAttribute("data-vertical-style", local_varaiable.dataVerticalStyle);
    htmlTag.setAttribute("data-nav-layout", local_varaiable.dataNavLayout);
    htmlTag.setAttribute("data-menu-styles", local_varaiable.dataMenuStyles);
    htmlTag.setAttribute("data-toggled", local_varaiable.toggled);
    htmlTag.setAttribute("data-nav-style", local_varaiable.dataNavStyle);
    htmlTag.setAttribute("hor-style", local_varaiable.horStyle);
    htmlTag.setAttribute("data-page-style", local_varaiable.dataPageStyle);
    htmlTag.setAttribute("data-width", local_varaiable.dataWidth);
    htmlTag.setAttribute("data-menu-position", local_varaiable.dataMenuPosition);
    htmlTag.setAttribute("data-header-position", local_varaiable.dataHeaderPosition);
    htmlTag.setAttribute("icon-overlay", local_varaiable.iconOverlay);
    htmlTag.setAttribute("bg-img", local_varaiable.bgImg);
    htmlTag.setAttribute("icon-text", local_varaiable.iconText);

    // For styles, we can directly assign the style attribute:
    Object.keys(customstyles).forEach((key) => {
      htmlTag.style.setProperty(key, customstyles[key]);
    });
  }, []);

  return (
    <>
        <div className={`${local_varaiable.body ? local_varaiable.body : ''}`}>
          {theme.pageloading && children}
        </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);