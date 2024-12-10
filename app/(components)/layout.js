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
  }, []);

  return (
    <>
       <html
        suppressHydrationWarning={true}
        dir={local_varaiable.dir}
        className={local_varaiable.class}
        data-header-styles={local_varaiable.dataHeaderStyles}
        data-vertical-style={local_varaiable.dataVerticalStyle}
        data-nav-layout={local_varaiable.dataNavLayout}
        data-menu-styles={local_varaiable.dataMenuStyles}
        data-toggled={local_varaiable.toggled}
        data-nav-style={local_varaiable.dataNavStyle}
        hor-style={local_varaiable.horStyle}
        data-page-style={local_varaiable.dataPageStyle}
        data-width={local_varaiable.dataWidth}
        data-menu-position={local_varaiable.dataMenuPosition}
        data-header-position={local_varaiable.dataHeaderPosition}
        icon-overlay={local_varaiable.iconOverlay}
        bg-img={local_varaiable.bgImg}
        icon-text={local_varaiable.iconText}
        //Styles
        style={customstyles}>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css" rel="stylesheet" />
          <meta name="keywords" content="tailwind admin template, nextjs app router, dashboard, tailwind css templates, next js tailwind, router admin, tailwind dashboard template, dashboard tailwind, admin, tailwind css dashboard, tailwind, admin panel, tail wind, tailwind nextjs" />
        </head>
        <body className={`${local_varaiable.body ? local_varaiable.body : ''}`}>
          {theme.pageloading && children}
          <script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
        </body>
      </html>
    </>
  )
}

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);