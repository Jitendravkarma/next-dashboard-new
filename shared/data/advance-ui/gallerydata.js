import React, { Fragment, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";

export const LightboxGallery1 = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <Link href="#!" scroll={false} className='gallery'>
                        <img src={"../../assets/img/gallery/1.jpg"} alt='media2' className=" w-full" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <Link href="#!" scroll={false} className='gallery'>
                        <img src={"../../assets/img/gallery/2.jpg"} alt='media3' className="" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <Link href="#!" scroll={false} className='gallery'>
                        <img src={"../../assets/img/gallery/3.jpg"} alt='media4' className=" w-full" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <Link href="#!" scroll={false} className='gallery'>
                        <img src={"../../assets/img/gallery/4.jpg"} alt='media5' className="" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Captions]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true

            }}
                slides={[{
                    src: "../../assets/img/gallery/1.jpg", title: "Image-1",
                }, {
                    src: "../../assets/img/gallery/2.jpg", title: "Image-2",
                }, {
                    src: "../../assets/img/gallery/3.jpg", title: "Image-3",
                }, {
                    src: "../../assets/img/gallery/4.jpg", title: "Image-4",
                },]}

            />

        </Fragment>
    );
};

export const LightboxGalleryDescription = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <Link href="#!" scroll={false} data-glightbox='title:Description Bottom' className="gallery2" >
                        <img src={"../../assets/img/gallery/2.jpg"} alt='media2' className='w-full' onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3 ">
                <div className="inner">
                    <Link href="#!" scroll={false} className="gallery2" >
                        <img src={"../../assets/img/gallery/3.jpg"} alt='media3' className='w-full' onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <Link href="#!" scroll={false} className="gallery2" >
                        <img src={"../../assets/img/gallery/7.jpg"} alt='media4' className='w-full' onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <Link href="#!" scroll={false} className="gallery2" >
                        <img src={"../../assets/img/gallery/8.jpg"} alt='media5' className="gallery2 w-100" onClick={() => setOpen(true)} />
                    </Link>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Captions]}
                captions={{
                    descriptionTextAlign: "center",
                    // titleTextAlign: ["end"]
                }}
                zoom={{
                    scrollToZoom: true
                }}
                slides={[
                    {
                        src: "../../assets/img/gallery/2.jpg",
                        title: "Image-1",
                        description: "Veliki zali, Dubravica, Croatia",
                    },
                    {
                        src: "../../assets/img/gallery/3.jpg",
                        title: "Image-2",
                        description: "Veliki zali, Dubravica, Croatia",
                    },
                    {
                        src: "../../assets/img/gallery/7.jpg",
                        title: "Image-3",
                        description: "Veliki zali, Dubravica, Croatia",
                    },
                    {
                        src: "../../assets/img/gallery/8.jpg",
                        title: "Image-4",
                        description: "Veliki zali, Dubravica, Croatia",
                    },
                ]}
            />

        </Fragment>
    );
};

