'use client'
import { useUserContext } from '@/shared/userContext/userContext';
import { useRouter } from 'next/navigation';
import Seo from '../seo/seo';
import Link from 'next/link';

const DownloadSection = () => {
  const { isAuthenticated, handleSignOut, user, productUrl, yt_links, resellerContactInfo, dynamicSocialLinks } = useUserContext()
  const { push } = useRouter()
  const contactLinks = [
    {
      title: "Mail Now",
      url: `mailto:${resellerContactInfo.email}`,
      icon: "ri-mail-line"
    },
    {
      title: "Contact Now",
      url: `tel:${resellerContactInfo.phone}`,
      icon: "ri-phone-line"
    },
    {
      title: "Whats'App Now",
      url: `https://wa.me/${resellerContactInfo.phone.replace(/[\s()\-\+]/g, '')}`,
      icon: "ri-whatsapp-line"
    },
    {
      title: "Follow on Facebook",
      url: dynamicSocialLinks.facebook,
      icon: "ri-facebook-line"
    },
    {
      title: "Follow on YouTube",
      url: dynamicSocialLinks.youtube,
      icon: "ri-youtube-line"
    },
    {
      title: "Follow on Twitter",
      url: dynamicSocialLinks.twitter,
      icon: "ri-twitter-x-line"
    },
    {
      title: "Follow on Linkedin",
      url: dynamicSocialLinks.linkedin,
      icon: "ri-linkedin-line"
    },
  ]
  
  function handleLogout() {
    handleSignOut();
		window.location.reload()
	}

  // const downloadZip = async ()=>{
  //   if(isAuthenticated){
  //     try {
  //       setLoading(true)
  //       const response = await fetch("/downloads/Web-Crawler-Spider.zip");
        
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
    
  //       const blob = await response.blob();
  //       const url = window.URL.createObjectURL(blob);
        
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "Web-Crawler-Spider.zip");
  //       document.body.appendChild(link);
  //       link.click();
        
  //       window.URL.revokeObjectURL(url);
  //       document.body.removeChild(link);
  //     } catch (error) {
  //       alert("Failed to download file. Please try again.");
  //       console.error(error);
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   else {
  //     alert(`Please signin to download!`)
  //   }
  // }
  if(isAuthenticated)
  return (
    <>
      {
        user.name &&
        <Seo title={`Welcome ${user.name}`}/>
      }
      <section className="flex bg-gradient-to-br from-indigo-100 items-center min-h-screen overflow-hidden px-4 py-16 relative to-blue-100 via-purple-50">
        {/* Celebration effect using Tailwind transitions */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="bg-yellow-300 h-48 rounded-full w-48 -right-5 absolute duration-1000 ease-out rotate-180 top-5 transition-all translate-y-full"></div>
          <div className="bg-pink-300 h-48 rounded-full w-48 absolute delay-200 duration-1000 ease-out right-0 rotate-180 top-28 transition-all translate-y-full"></div>
          <div className="bg-blue-300 h-48 rounded-full w-48 absolute duration-1000 ease-out left-1/2 rotate-180 top-0 transition-all translate-y-full"></div>
          <div className="bg-green-300 h-48 rounded-full w-48 absolute delay-200 duration-1000 ease-out left-2/3 rotate-180 top-0 transition-all translate-y-full"></div>
        </div> */}

        <div className="text-center w-full sm:max-w-4xl mx-auto z-10">
          {/* Logout Button */}
          <div className="flex justify-between items-center mb-6">
            {
              (user.reseller && user.email === "support@leadseas.net") && 
              <Link href={"/reseller/dashboard"} title='Visit reseller dashboard' target='_blank' className='inline-block rounded-md duration-300 gap-2 hover:bg-indigo-500 hover:text-white items-center px-6 py-2 transition-all'>
                <i className='ri-home-4-line text-lg'/> Reseller
              </Link>
            }

            <button onClick={handleLogout} 
              className="flex ml-auto rounded-md duration-300 gap-2 hover:bg-red-500 hover:text-white items-center px-6 py-2 transition-all"
            >
              <i className="text-lg ri-logout-box-line"></i>
              Logout
            </button>
          </div>

          {/* Welcome Title */}
          <h1 className="text-4xl text-indigo-900 font-extrabold mb-4 md:text-5xl capitalize">
            Hello, {user.name || "User"}!
          </h1>

          {/* Subtitle with Thanks Message */}
          <h2 className="text-indigo-700 text-xl mb-6 md:text-2xl">
            Welcome to LeadSeas!
          </h2>

          {/* Introduction Paragraph */}
          <p className="text-gray-600 text-lg max-w-2xl mb-8 mx-auto">
            Get ready to explore a world of possibilities. Download your starter kit and dive into the documentation to kickstart your journey!
          </p>

          {/* Buttons */}
          <div className="flex flex-col flex-wrap justify-center md:w-[57%] gap-4 mb-10 mx-auto">
            {/* <button 
              onClick={downloadZip}
              className="flex bg-indigo-600 justify-center rounded-xl shadow-lg text-white duration-300 gap-2 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl items-center px-8 py-3 transform transition-all"
            >
              {
                loading ? 
                <>
                  <div className="h-5 w-5 ti-spinner" role="status" aria-label="loading">
                    <span className="sr-only"></span>
                  </div>
                  Downloading...
                </>
                :
                <>
                  <i className="text-xl ri-download-line"></i>
                  Download Starter Kit
                </>
              }
            </button> */}
            <Link className="flex bg-indigo-600 justify-center rounded-xl shadow-lg text-white duration-300 gap-2 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl items-center px-8 py-3 transform transition-all" href={productUrl} target="_blank">
                <i className="text-xl ri-download-line"></i>
                Download Starter Kit
            </Link>
            
            <div className='flex flex-col sm:flex-row justify-between gap-3 items-center'>
              <a 
                href="/docs"
                className="w-full flex bg-indigo-600 justify-center rounded-xl shadow-lg text-white duration-300 gap-2 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl items-center px-5 py-3 transform transition-all"
              >
                <i className="text-xl ri-file-text-line"></i>
                Explore Docs
              </a>
              <span>OR</span>
              <Link 
                href={`https://www.youtube.com/watch?v=${yt_links.installation}`}
                target='_blank'
                className="w-full flex bg-indigo-600 justify-center rounded-xl shadow-lg text-white duration-300 gap-2 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl items-center px-5 py-3 transform transition-all"
              >
                <i className="text-xl ri-video-line"></i>
                Watch a Video
              </Link>
            </div>
          </div>

          {/* Call to Action with Social Media */}
          <div className="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm mb-10">
            <h3 className="text-indigo-900 text-xl font-semibold mb-2">Need help?</h3>
            <p className="text-gray-600 mb-4">
              Contact or follow us! We’re just a message away!
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
              {
                contactLinks.map(({title, url, icon}, ind)=>(
                  <>
                    {
                      url &&
                      <a 
                        key={ind}
                        href={url} 
                        target='_blank'
                        className="text-indigo-600 duration-300 hover:scale-125 hover:text-indigo-800 transform transition-all"
                        aria-label="Email Support"
                        title={title}
                      >
                        <i className={`text-2xl ${icon}`}></i>
                      </a>
                    }
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
  else
  push('/signin')
};

export default DownloadSection;