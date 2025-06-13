import React, { memo } from 'react';

const FlowCard = ({img, title, subtitle, description, right})=>{
  return(
    <>
      {
        right ?
        <section className="py-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="grid md:grid-cols-3 md:gap-4">
              
              {/* col-1 Begin */}
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <img
                    src={img}
                    className="w-80 md:w-60 rounded-sm mx-auto"
                    alt="webscrap"
                />
              </div>
              {/* col-1 End */}

              {/* col-2 Begin */}
              <div className="col-span-2 flex justify-center flex-col">
                <p className="text-xl text-green-400 font-light pt-4">
                  {title}
                </p>
                <p className="text-xl text-blue-800 font-normal mb-3">
                  {subtitle}
                </p>
                <p className="mb-2 text-xss leading-normal font-normal text-gray-600">
                  {description}
                </p>
              </div>
              {/* col-2 End */}
            </div>
          </div>
        </section>
        :
        <section className="py-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="grid md:grid-cols-3 md:gap-4">
              {/* ... Column 1 Content ... */}
              
              {/* ... Column 2 Content ... */}
              {/* col-1 Begin */}
              <div className="col-span-2 flex justify-center flex-col order-last md:order-first">
                <p className="text-xl text-green-400 font-light pt-4">
                {title}
                </p>
                <p className="text-xl text-blue-800 font-normal mb-3">{subtitle}</p>
                <p className="mb-2 text-xss leading-normal font-normal text-gray-600">
                  {description}
                </p>
              </div>
              {/* col-1 End */}

              {/* col-2 Begin */}
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <img
                    src={img}
                    className="w-80 md:w-60 object-cover rounded-sm mx-auto"
                    alt="webscrap"
                />
              </div>
              
              {/* col-2 End */}
            </div>
          </div>
        </section>
      }
    </>
  )
}

const Workflow = () => {
  const servicesData = [
    {
      img: "/assets/img/datacollection.png",
      title: "DATA COLLECTION SOURCE",
      subtitle: "Accuracy and Quality Information Collection",
      description:
      <span>
        Harness the power of data in your business with our state-of-the-art data collection services. Be it extracting important details from <b>documents</b>, <b>websites</b>, or other sources using our <b>web scraping tools</b>, we utilize advanced technologies to ensure precise and comprehensive data capture. Our strong <b>Artificial Intelligence</b> algorithms and data science guarantee that you will get the information you need quickly and reliably, whether it’s from our <b>business directory scraper</b>, <b>yellow pages scraper</b>, or <b>image scraping tool</b>.
      </span>,
      right:true
    },
    {
      img: "/assets/img/dataquality.png",
      title: "DATA QUALITY",
      subtitle: "Raising Standards with Ensuring Accuracy",
      description:
      <span>
        At the core of our services is an unwavering commitment to <b>data quality</b> and <b>accuracy</b>. We understand the importance of accurate and reliable information when using our <b>business directory scraper</b>, <b>website data scraper</b>, and <b>document scraper</b>. Our <b>state-of-the-art quality</b> assurance protocols enhance the data collected from these tools, including the <b>data scraping tools</b> and <b>web scraping service</b>, by carefully verifying it through <b>data science</b>. This ensures you can trust the information you receive to effectively market your business.
        Whether you are using our <b>document scraper</b> or the <b>image scraping tool</b>, you can enhance your decision-making processes and grow your business with data that meets the highest standards of <b>accuracy</b> and <b>reliability</b>. Our services are designed to help you extract valuable insights seamlessly, making <b>data collection</b> effortless and efficient.
      </span>,
      right:false
    },
    {
      img: "/assets/img/datadelivery.png",
      title: "DATA DELIVERY",
      subtitle: "Seamless and Reliable Data Extraction",
      description:
      <span>
          Our platform ensures seamless <b>data extraction</b> with unmatched efficiency. With <b>Scraper Tools's</b> advanced <b>Document Scraper</b> service, extracting critical information such as email addresses and phone numbers has never been easier.
          Whether you're working with <b>.csv</b>, <b>.txt</b>, <b>.doc</b>, <b>.docx</b>, <b>.html</b>, or other file formats, our tool simplifies the process, providing a <b>user-friendly</b> and reliable solution. 
          Trust in our proven expertise to deliver accurate and consistent results, empowering you with the data you need, precisely when you need it.
      </span>,
      right:true
    }
  ]
  return (
    <section className="bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to py-28">
      {
        servicesData.map(({img, title, subtitle, description, right}, ind)=>(
          <FlowCard img={img} title={title} subtitle={subtitle} right={right} description={description} key={ind}/>
        ))
      }
    </section>
  )
}

export default memo(Workflow);