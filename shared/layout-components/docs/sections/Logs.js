import React from "react";
import { Heading } from "../Heading";

const Logs = () => {
  const change_logs = [
    {
      release: "13.0",
      logs:[
        <span>Introducing advanced tools.</span>,
        <span>Added <strong>Phone Number Verifier</strong>.</span>,
        <span>Added <strong>Email Verifier</strong></span>,
        <span>Introducted <strong>WhatsApp Business Verifier</strong></span>,
        <span>You can send WhatsApp in bulk to <strong>multiple users</strong></span>
      ]
    },
    {
      release: "12.0",
      logs:[
        <span>We introducted our new <strong>Linkedin Scraper</strong>.</span>,
        <span>Improved <strong>data quantity</strong> on Indiamart scraper.</span>,
        <span>Fixed some issues.</span>
      ]
    },
    {
      release: "11.0",
      logs:[
        <span>We launched our new tool <strong>Instagram Scraper</strong>.</span>,
        <span>Improved data retrieval <strong>speed</strong>.</span>,
        <span>Introduced a feature <strong>WhatsApp Business availability</strong> checker.</span>
      ]
    },
    {
      release: "10.0",
      logs:[
        <span>Introduced a new<strong> B2B Directory Scraper, including Justdial Scraper, Indiamart Scraper, Sulekha Scraper, and more </strong>.</span>,
        <span>Added Bulk Contact Scrapers such as <strong>Email Scraper and Phone Number Scraper</strong> .</span>,
        <span>Enhanced several tools to deliver faster response times</span>
      ]
    },
    {
      release: "9.0",
      logs: [
        <span>Added a new tool called <strong>Website URLs Checker</strong> to check whether a website is active or inactive.</span>,
        <span>Implemented <strong>Verified Domains</strong>, a tool to filter and retrieve a list of verified domains along with their registered countries.</span>,
        <span>Added the ability to generate latitude and longitude for specific map addresses in <strong>Google Map Scraper</strong>.</span>,
        <span>You can now retrieve the <strong>CID (Customer ID)</strong> of map addresses using <strong>Google Map Scraper</strong>.</span>,
        <span>We have fixed some bugs and improved functionalities.</span>,
      ]
    },
    {
      release: "8.0",
      logs: [
        <span>Implement <strong>Google Sign-In</strong> feature.</span>,
        <span>Added <strong>YouTube demo</strong> videos as <strong>tutorials</strong> for each scraper tool.</span>,
        <span>Users can now change their country to receive a relevant phone number for that region.</span>,
        <span>Fixed several bugs related to the UI and core functionality.</span>,
      ]
    },
    {
      release: "7.0",
      logs: [
        <span>
          Introduced a <b>Live Website Scraper</b> for retrieving real-time website data.
        </span>,
        <span>
          Added <b>Yahoo Search Scraper</b> functionality.
        </span>,
        <span>
          Integrated <b>DuckDuckGo Search Scraper</b>.
        </span>,
        <span>
          Launched <b>Facebook</b> and <b>YouTube</b> Scrapers.
        </span>,
        <span>And fixed some bugs.</span>
      ],
    },
    {
      release: "6.0",
      logs: [
        <span>
          <b>Added Bing Search Scraper</b>.
        </span>,
        <span>
          <b>Improved Google Search Data Accuracy, </b>Users get more precise
          results.
        </span>,
        <span>
          <b>Enhanced Phone Number Accuracy in Google Maps Scraper, </b>Better
          extraction reliability.
        </span>,
        <span>
          <b>Added Social Media URL Extraction, </b>Now available in Website
          Data Scraper.
        </span>,
        <span>
          <b>Bug Fixes & Performance Improvements, </b>General enhancements for
          a smoother experience.
        </span>,
      ],
    },
    {
      release: "5.0",
      logs: [
        <span>Google Search Scraper now available on Cloud Service</span>,
        <span>Google Maps Scraper now available on Cloud Service</span>,
        <span>Website Data Center now hosted on Cloud Service</span>,
        <span>Website Scraper now available on Cloud Service</span>,
        <span>Introduced Direct Call & Text SMS features</span>,
        <span>Added Direct WhatsApp Messaging & Email sending features</span>,
        <span>Video tutorial available on YouTube</span>,
        <span>Enhanced data response speed</span>,
      ],
    },
    {
      release: "4.0",
      logs: [
        <span>Added Business Directory Scraper</span>,
        <span>Added Whois Domain Database</span>,
        <span>Introduced WhatsApp Messaging Feature</span>,
        <span>Introduced Email Sending Feature</span>,
      ],
    },
    {
      release: "3.0",
      logs: [
        <span>Added Image Data Scraper</span>,
        <span>Introduced New Dashboard UI</span>,
        <span>Fixed Minor Bugs</span>,
      ],
    },
    {
      release: "2.0",
      logs: [
        <span>Added Document Data Scraper</span>,
        <span>Redesigned Dashboard</span>,
      ],
    },
    {
      release: "1.0",
      logs: [<span>Initial Release</span>],
    },
  ];
  return (
    <div>
      <Heading title={"Change Log"} />
      <ul className="list-disc text-base ml-5">
        {change_logs.map((item, ind) => (
          <div className="my-10" key={ind}>
            <p className="text-xl font-semibold mb-4 uppercase">
              ::Version {item.release} released::
            </p>
            {item.logs.map((log, ser) => (
              <li key={ser}>{log}</li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
