import { ThemeChanger } from "@/shared/redux/action";
import Link from "next/link";
import { Fragment } from "react";
import { connect } from "react-redux";

function Menuloop({ local_varaiable, MenuItems, toggleSidemenu, level, HoverToggleInnerMenuFn }) {

  const handleClick = (event) => {
    event.preventDefault();
  };

  const icontextCloseFn = () => {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
      html.removeAttribute('icon-text');
    }
  }

  return (
    <Fragment>
      <Link href="#!" scroll={false} className={`side-menu__item ${MenuItems?.selected ? "active" : ""}`}
        onClick={(event) => { event.preventDefault(); toggleSidemenu(event, MenuItems); }} onMouseEnter={(event) => HoverToggleInnerMenuFn(event, MenuItems)}>
        <span className={`hs-tooltip inline-block [--placement:right] leading-none ${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'hidden'}`}>
          <button type="button" className="hs-tooltip-toggle  inline-flex justify-center items-center">
            {MenuItems.icon}
            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-black text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700" role="tooltip">
              {MenuItems.title}
            </span>
          </button>
        </span>
        {local_varaiable?.dataVerticalStyle != "doublemenu" ? MenuItems.icon : ""}

        <span className={`${level == 1 ? "side-menu__label" : ""}`}> {MenuItems.title} {MenuItems.badgetxt ? (<span className={MenuItems.class}> {MenuItems.badgetxt} </span>
        ) : (
          ""
        )}
        </span>
        <i className="ri ri-arrow-right-s-line side-menu__angle"></i>
      </Link>
      <ul className={`slide-menu child${level}  ${MenuItems.active ? "double-menu-active" : ""} ${MenuItems?.dirchange ? "force-left" : ""} `} style={MenuItems.active ? { display: "block" } : { display: "none" }} onClick={icontextCloseFn}>
        {level <= 1 ? <li className="slide side-menu__label1">
          <Link href="#!" scroll={false} >{MenuItems.title}</Link>
        </li> : ""}
        {MenuItems.children.map((firstlevel, index) =>
          <li className={`${firstlevel.menutitle ? 'slide__category' : ''} ${firstlevel?.type == 'empty' ? 'slide' : ''} ${firstlevel?.type == 'link' ? 'slide' : ''} ${firstlevel?.type == 'sub' ? 'slide has-sub' : ''} ${firstlevel?.active ? 'open' : ''} ${firstlevel?.selected ? 'active' : ''}`} key={index}>
            {firstlevel.type === "link" ?
              <Link href={firstlevel.path} className={`side-menu__item ${firstlevel.selected ? 'active' : ''}`}>{firstlevel.icon}
                <span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt}</span>
                ) : (
                  ""
                )}
                </span>
              </Link>
              : ""}
            {firstlevel.type === "empty" ?
              <Link href="#!" scroll={false} className='side-menu__item' onClick={handleClick}> {firstlevel.icon}<span className=""> {firstlevel.title} {firstlevel.badgetxt ? (<span className={firstlevel.class}> {firstlevel.badgetxt} </span>
              ) : (
                ""
              )}
              </span>
              </Link>
              : ""}
            {firstlevel.type === "sub" ?
              <Menuloop MenuItems={firstlevel} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} level={level + 1} />
              : ''}

          </li>
        )}

      </ul>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Menuloop);