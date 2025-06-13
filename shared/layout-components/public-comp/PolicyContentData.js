"use client"
import { useUserContext } from '@/shared/userContext/userContext'
import Link from 'next/link'
import React from 'react'


const ContentItem = ({title, description, list=false, listItems=[]})=>{  
  return(
    <div className="my-5">
      <h2 className="font-bold text-2xl mt-8 mb-3">
        {title}
      </h2>

      <div className="text-xss font-light leading-normal">
        {description}
      </div>

      {
        list ? 
        <ul className="list-disc list-inside text-xss font-light leading-normal my-5 grid grid-cols-1 gap-2 marker:text-green-500 marker:text-xl">
          {
            listItems.map((item)=>(
              <>
                {item}
              </>
            ))
          }
        </ul>
        :
        ""
      }
    </div>
  )
}

const PolicyContentData = () => {
  const { resellerContactInfo } = useUserContext()
    const policyData = [
    {
      title:"Consent", 
      description:"By using our website, you hereby consent to our Privacy Policy and agree to its terms.", 
      list: false, 
      listItems: []
    },
    {
      title:"Information we collect", 
      description:
      <p className="text-xss font-light leading-normal">
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. <br />
        If you contact us directly, we may receive additional information
        about you such as your name, email address, phone number, the
        contents of the message and/or attachments you may send us, and
        any other information you may choose to provide. <br />
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address,
        email address, and telephone number.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"How we use your information", 
      description:
      <p className="text-xss font-light leading-normal">
        We use the information we collect in various ways, including to:
      </p>, 
      list: true, 
      listItems: [
        <li>Provide, operate, and maintain our website</li>,
        <li>Improve, personalize, and expand our website</li>,
        <li>Understand and analyze how you use our website</li>,
        <li>
          Develop new products, services, features, and functionality
        </li>,
        <li>
          Communicate with you, either directly or through one of our
          partners, including for customer service, to provide you with
          updates and other information relating to the website, and for
          marketing and promotional purposes
        </li>,
        <li>Send you emails</li>,
        <li>Find and prevent fraud</li>
      ]
    },
    {
      title:"Refund Policy", 
      description:
      <p className="text-xss font-light leading-normal">
        We aim to ensure customer satisfaction with our services. However, due to the nature of our products and services (data scraping tools and lead generation services), we maintain the following refund policy:
      </p>, 
      list: true, 
      listItems: [
        <li>Refunds will only be considered if the service has not been initiated or if technical issues prevent the service from being delivered.</li>,
        <li>Refund requests must be made within 7 days of purchase and will require proof of non-usage or technical difficulties.</li>,
        <li>Services or subscriptions that have been fully delivered or accessed are non-refundable.</li>,
        <li>Customized services or tools created for specific user needs are also non-refundable.</li>,
        <li>If eligible, refunds will be processed to the original payment method within 7-10 business days after approval.</li>,
        <li>A confirmation email will be sent once the refund has been processed.</li>
      ]
    },
    {
      title:"Cancellation Policy", 
      description:
      <p className="text-xss font-light leading-normal">
        We may cancel your payment under the following conditions:
      </p>, 
      list: true, 
      listItems: [
        <li>You may cancel your subscription or services at any time by contacting our support team at <a className="text-blue-500 hover:underline hover:font-bold hover:italic" href={`mailto:${resellerContactInfo.email}`}>{resellerContactInfo.email}</a>.</li>,
        <li>Cancellations will only be effective from the next billing cycle. No refunds will be provided for the current billing cycle.</li>,
        <li>We reserve the right to cancel or suspend services in cases of misuse, non-compliance with our terms, or fraudulent activities.</li>,
        <li>In such cases, no refunds will be provided.</li>,
        <li>For cancellations or refund-related inquiries, please contact us at <a className="text-blue-500 hover:underline hover:font-bold hover:italic" href={`mailto:${resellerContactInfo.email}`}>{resellerContactInfo.email}</a>.</li>
      ]
    },
    {
      title:"Shipping and Delivery Policy", 
      description:
      <p className="text-xss font-light leading-normal">
        At Lead Data, we provide digital products and services that are delivered electronically. Below is our Shipping and Delivery Policy outlining how we process and deliver our services.
      </p>, 
      list: true, 
      listItems: [
        <li>
          <b>Delivery Method: </b>
          All purchased digital products and services, such as scraping tools, lead generation data, or other related services, are delivered electronically via email or through a secure download link provided in the user dashboard. No physical shipping is required for our products.
        </li>,
        <li>
          <b>Delivery Timeline: </b>
          Most digital products are accessible immediately after successful payment confirmation.
          Custom or subscription-based services may require additional time for processing, which will be communicated to the user at the time of purchase.
        </li>,
        <li>
          <b>Delivery Issues: </b>
          If you do not receive your purchased product or experience any delay, please contact our support team at <a className="text-blue-500 hover:underline hover:font-bold hover:italic" href={`mailto:${resellerContactInfo.email}`}>{resellerContactInfo.email}</a> We will resolve the issue promptly.
        </li>,
        <li>
          <b>Changes to Delivery: </b>
          In case of maintenance or unexpected delays, we will notify you via email or your registered contact details.
        </li>
      ]
    },
    {
      title:"Log Files", 
      description:
      <p className="text-xss font-light leading-normal">
        webcrawlerspider follows a standard procedure of using log files.
        These files log visitors when they visit websites. All hosting
        companies do this and a part of hosting services' analytics. The
        information collected by log files include internet protocol (IP)
        addresses, browser type, Internet Service Provider (ISP), date and
        time stamp, referring/exit pages, and possibly the number of
        clicks. These are not linked to any information that is personally
        identifiable. The purpose of the information is for analyzing
        trends, administering the site, tracking users' movement on the
        website, and gathering demographic information.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"Advertising Partners Privacy Policies", 
      description:
      <p className="text-xss font-light leading-normal">
        You may consult this list to find the Privacy Policy for each of
        the advertising partners of webcrawlerspider.
        Third-party ad servers or ad networks uses technologies like
        cookies, JavaScript, or Web Beacons that are used in their
        respective advertisements and links that appear on
        webcrawlerspider, which are sent directly to users' browser. They
        automatically receive your IP address when this occurs. These
        technologies are used to measure the effectiveness of their
        advertising campaigns and/or to personalize the advertising
        content that you see on websites that you visit.

        Note that webcrawlerspider has no access to or control over these
        cookies that are used by third-party advertisers.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"Third Party Privacy Policies", 
      description:
      <p className="text-xss font-light leading-normal">
        webcrawlerspider's Privacy Policy does not apply to other
        advertisers or websites. Thus, we are advising you to consult the
        respective Privacy Policies of these third-party ad servers for
        more detailed information. It may include their practices and
        instructions about how to opt-out of certain options.{" "}
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management
        with specific web browsers, it can be found at the browsers'
        respective websites.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"CCPA Privacy Rights (Do Not Sell My Personal Information)", 
      description:
      <p className="text-xss font-light leading-normal">
        Under the CCPA, among other rights, California consumers have the
        right to:
        Request that a business that collects a consumer's personal data
        disclose the categories and specific pieces of personal data that
        a business has collected about consumers.
        Request that a business delete any personal data about the
        consumer that a business has collected.
        Request that a business that sells a consumer's personal data, not
        sell the consumer's personal data.
        If you make a request, we have one month to respond to you. If you
        would like to exercise any of these rights, please contact us.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"GDPR Data Protection Rights", 
      description:
      <p className="text-xss font-light leading-normal">
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
        The right to access – You have the right to request copies of your
        personal data. We may charge you a small fee for this service.
        The right to rectification – You have the right to request that we
        correct any information you believe is inaccurate. You also have
        the right to request that we complete the information you believe
        is incomplete.
        The right to erasure – You have the right to request that we erase
        your personal data, under certain conditions.
        The right to restrict processing – You have the right to request
        that we restrict the processing of your personal data, under
        certain conditions.
        The right to object to processing – You have the right to object
        to our processing of your personal data, under certain conditions.
        The right to data portability – You have the right to request that
        we transfer the data that we have collected to another
        organization, or directly to you, under certain conditions.
        If you make a request, we have one month to respond to you. If you
        would like to exercise any of these rights, please contact us.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"Children's Information", 
      description:
      <p className="text-xss font-light leading-normal">
        Another part of our priority is adding protection for children
        while using the internet. We encourage parents and guardians to
        observe, participate in, and/or monitor and guide their online
        activity.
        webcrawlerspider does not knowingly collect any Personal
        Identifiable Information from children under the age of 13. If you
        think that your child provided this kind of information on our
        website, we strongly encourage you to contact us immediately and
        we will do our best efforts to promptly remove such information
        from our records.
      </p>, 
      list: false, 
      listItems: []
    },
    {
      title:"Changes to This Privacy Policy", 
      description:
      <p className="text-xss font-light leading-normal">
        We may update our Privacy Policy from time to time. Thus, we
        advise you to review this page periodically for any changes. We
        will notify you of any changes by posting the new Privacy Policy
        on this page. These changes are effective immediately, after they
        are posted on this page.
        Our Privacy Policy was created with the help of the{" "}
        <Link href="https://www.termsfeed.com/privacy-policy-generator/">
          Privacy Policy Generator.
        </Link>
      </p>, 
      list: false, 
      listItems: []
    }
  ]
  return (
    <>
        {
            policyData.map(({title, description, list, listItems}, ind)=>(
            <ContentItem key={ind} title={title} description={description} list={list} listItems={listItems}/>
            ))
        }
    </>
  )
}

export default PolicyContentData