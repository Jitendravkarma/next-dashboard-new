import React from "react";
import { Heading } from "../Heading";

const Logs = () => {
  const change_logs = [
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
