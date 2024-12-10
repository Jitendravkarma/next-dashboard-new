import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Navbar1 = () => {

  const links = [
    {
      id: 1,
      text: "Home",
      url: "#home"
    },
    {
      id: 2,
      text: "Service",
      url: "#services"
    },
    {
      id: 3,
      text: "Team",
      url: "#team",
    },
    {
      id: 4,
      text: "Pricing",
      url: "#pricing",
    },
    {
      id: 5,
      text: "Faq's",
      url: "#faq",
    },
    {
      id: 6,
      text: "Blogs",
      url: "#blogs",
    },
    {
      id: 7,
      text: "Contact",
      url: "#contact",
    },
  ];

  const onScroll = () => {
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document?.querySelector("body")?.scrollTop;

    sections.forEach((elem) => {
      const value = elem.getAttribute("href");
      const refElement = document.getElementById(value);
      if (refElement) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const location = document.getElementById(target)?.offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 64,
      behavior: "smooth",
    });
  };

  const router = useRouter();

  useEffect(() => {
    const handleLinkClick = (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      if (href) {
        const target = href.substring(1);
        router.push(target).then(() => {
          // Scroll to the target after the route change
          document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        });
      }
    };

    // Add click event listeners to page links
    const pageLinks = document.querySelectorAll(".side-menu__item");
    pageLinks.forEach((elem) => {
      elem.addEventListener("click", handleLinkClick);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      pageLinks.forEach((elem) => {
        elem.removeEventListener("click", handleLinkClick);
      });
    };
  }, [router]);

  return (
    <ul className="main-menu ltr:!ml-auto rtl:!mr-auto">
      {links.map((link) => (
        <li className={`slide ${link.active ? "active" : ""}`} key={link.id}>
          <Link href={link.url} className="side-menu__item">
            <span className="side-menu__label">{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar1;
