import React, { Fragment, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Basicswiperdata = [
    { id: 1, floderimg: "../../../assets/img/files/2.png", typeoffile: "File.pdf", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", client3: "../../../assets/img/users/4.jpg", },
    { id: 2, floderimg: "../../../assets/img/files/6.png", typeoffile: "Image1.png", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", client3: "../../../assets/img/users/4.jpg", client4: "../../../assets/img/users/20.jpg" },
    { id: 3, floderimg: "../../../assets/img/files/5.png", typeoffile: "Documents", client1: "../../../assets/img/users/8.jpg" },
    { id: 4, floderimg: "../../../assets/img/files/4.png", typeoffile: "project.xls", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
    { id: 5, floderimg: "../../../assets/img/files/2.png", typeoffile: "project.ppt", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
    { id: 6, floderimg: "../../../assets/img/files/8.png", typeoffile: "project.mp4", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
    { id: 7, floderimg: "../../../assets/img/files/3.png", typeoffile: "project.jpg", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
    { id: 8, floderimg: "../../../assets/img/files/9.png", typeoffile: "project.doc", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
    { id: 9, floderimg: "../../../assets/img/files/10.png", typeoffile: "project.zip", client1: "../../../assets/img/users/8.jpg", client2: "../../../assets/img/users/2.jpg", },
];
export function SpacebetweenSwiper() {

    return (
        <>
            <div className="swiper Swiperslide-1">
                <div className="swiper-wrapper">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            380: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1400: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}

                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={false}
                        modules={[Autoplay]}
                    >
                        {Basicswiperdata.map((items, id) => (

                            <SwiperSlide key={id}>
                                <div className="box-body">
                                    <Link href="" className="mx-auto my-3"><img src={items.floderimg} alt="image" className="mx-auto" /></Link>
                                </div>

                                <div className="box-footer bg-transparent overflow-auto">
                                    <div className="flex justify-between flex-wrap">
                                        <div><p className="text-sm">{items.typeoffile}</p></div>
                                        <div><p className="text-sm"> 30MB</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}

export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 sm:col-span-4"  >

                <div className="inner">
                    <Link href="#!" scroll={false}  >
                        <img src={"../../../assets/img/gallery/1.jpg"} alt='media1' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <Link href="#!" scroll={false}  >
                        <img src={"../../../assets/img/gallery/2.jpg"} alt='media2' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <Link href="#!" scroll={false}  >
                        <img src={"../../../assets/img/gallery/3.jpg"} alt='media3' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <Link href="#!" scroll={false}  >
                        <img src={"../../../assets/img/gallery/4.jpg"} alt='media4' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <Link href="#!" scroll={false}  >
                        <img src={"../../../assets/img/gallery/5.jpg"} alt='media5' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <Link href='#'>
                        <img src={"../../../assets/img/gallery/6.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <Link href='#'>
                        <img src={"../../../assets/img/gallery/7.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <Link href='#'>
                        <img src={"../../../assets/img/gallery/8.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <Link href='#'>
                        <img src={"../../../assets/img/gallery/9.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
                slides={[{ src: "../../../assets/img/gallery/1.jpg" }, { src: "../../../assets/img/gallery/2.jpg" }, { src: "../../../assets/img/gallery/3.jpg" }, { src: "../../../assets/img/gallery/4.jpg" }, { src: "../../../assets/img/gallery/5.jpg" }, { src: "../../../assets/img/gallery/6.jpg" }, { src: "../../../assets/img/gallery/7.jpg" }, { src: "../../../assets/img/gallery/8.jpg" }, { src: "../../../assets/img/gallery/9.jpg" }]} />

        </Fragment>
    );
};

export const HomeGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="box">
                <div className="box-header">
                    <h5 className="box-title">Photos</h5>
                </div>
                <div className="box-body">
                    <div className="relative">
                        <div className="grid grid-cols-3 gap-3">
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/1.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/2.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/3.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/4.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/5.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/6.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/7.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/8.jpg"}
                                    alt="Image Description" />
                            </Link>
                            <Link href="#!" scroll={false} className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={"../assets/img/gallery/9.jpg"}
                                    alt="Image Description" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="box-footer text-center">
                    <Link href="#!" scroll={false} className="ti-btn ti-btn-primary py-1 px-2 m-0">View All</Link>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
                slides={[{ src: "../assets/img/gallery/1.jpg" }, { src: "../assets/img/gallery/2.jpg" }, { src: "../assets/img/gallery/3.jpg" }, { src: "../assets/img/gallery/4.jpg" }, { src: "../assets/img/gallery/5.jpg" }, { src: "../assets/img/gallery/6.jpg" }, { src: "../assets/img/gallery/7.jpg" }, { src: "../assets/img/gallery/8.jpg" }, { src: "../assets/img/gallery/9.jpg" },]} />

        </Fragment>
    );
};

