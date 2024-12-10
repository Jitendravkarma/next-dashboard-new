import React, { Fragment, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";

export const LightboxGalleryVideo = () => {

  const [open, setOpen] = useState(false);
  const value = true;
  const div = value.toString(); // Convert the value to a string
  return (
    <Fragment>
      <div className="col-span-12 lg:col-span-3">
        <div className="inner">
          <Link href="#!" scroll={false} className="gallery3" >
            <img src={"../../assets/img/gallery/10.jpg"} alt='media4' className="gallery3" onClick={() => setOpen(true)} />
          </Link>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="inner">
          <Link href="#!" scroll={false} className="gallery3" >
            <img src={"../../assets/img/gallery/9.jpg"} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
          </Link>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="inner">
          <Link href="#!" scroll={false} className="gallery3" >
            <img src={"../../assets/img/gallery/8.jpg"} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
          </Link>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="inner">
          <Link href="#!" scroll={false} className="gallery3" >
            <img src={"../../assets/img/gallery/7.jpg"} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
          </Link>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video]}
        captions={{ descriptionTextAlign: "center" }}
        slides={[
          {
            //   src: "../../assets/img/gallery/10.jpg",
            type: "video",
            width: 1280,
            height: 720,
            sources: [
              {
                src: "../../assets/img/video/gallery-video-1.mp4",
                type: "video/mp4",
              },
            ],
          },
          {
            //   src: "../../assets/img/gallery/9.jpg",
            type: "video",
            width: 1280,
            height: 720,
            sources: [
              {
                src: "../../assets/img/video/gallery-video-1.mp4",
                type: "video/mp4",
              },
            ],
          },
          {
            //   src:"../../assets/img/gallery/8.jpg",
            type: "video",
            width: 1280,
            height: 720,
            sources: [
              {
                src: "../../assets/img/video/gallery-video-1.mp4",
                type: "video/mp4",
              },
            ],
          },
          {
            //   src:"../../assets/img/gallery/7.jpg",
            type: "video",
            width: 1280,
            height: 720,
            sources: [
              {
                src: "../../assets/img/video/gallery-video-1.mp4",
                type: "video/mp4",
              },
            ],
          },
        ]}
      />

    </Fragment>
  );
};
