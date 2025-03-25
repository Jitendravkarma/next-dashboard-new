import React from "react";
import { seo_docs } from "@/shared/data/seo-content/content";
import Link from "next/link";
import { CustomLink, Heading, Heading_Two, Para, Code, LoadImage, CmdBox } from "@/shared/layout-components/docs/Heading";
import CopyCommand from "@/shared/layout-components/docs/CopyButton";
import GetStart from "@/shared/layout-components/docs/sections/Start";
import Features from "@/shared/layout-components/docs/sections/Features";
import Logs from "@/shared/layout-components/docs/sections/Logs";
import Services from "@/shared/layout-components/docs/sections/Services";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_docs

const Docs = () => {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Heading and Subtitle */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl text-gray-800 font-semibold">Web Crawler <span className="text-blue-500">Spider</span> <br/>Documentation</h1>
            <p className="text-gray-600 mt-4">
              An advanced web scraping solution that uses multiple legal tools to <br/> efficiently extract and manage data, ensuring full compliance with relevant regulations.
            </p>
          </div>

          <div className="mt-10">
            <div className="py-24" id="started">
              <GetStart/>
            </div>

            <div className="py-24" id="features">
              <Features/>
              <HorizontalAds/>
            </div>

            <div className="py-24" id="logs">
              <Logs/>
            </div>

            <div className="py-24" id="services">
              <Services/>
              <HorizontalAds/>
            </div>

            <div className="py-24">
              <p className="mb-20" id="installation"></p>
              <Heading title={"Installation"}/>
              
              <p className="mb-20" id="youtube"></p>
              <div className="bg-red-100 p-4 rounded-md shadow-sm text-center">
                <Heading_Two title={"Watch on YouTube"}/>
                <Para para={
                  <span className="text-xs sm:text-base">
                    For a comprehensive, step-by-step installation guide, we also offer a detailed instructional video on YouTube. <br/>
                    <Link href={"https://www.youtube.com/watch?v=jLI0zULD6cw"} target="_blank" className="my-3 inline-block text-white bg-red-500 hover:bg-red-600 rounded-sm py-2 px-3">
                      Watch Now <i className="ri-youtube-fill"/> 
                    </Link>
                  </span>}
                />
              </div>

              <br/><br/>
              <Heading_Two title={"Initial setup"}/>
              <Para para={
                <span>
                  First download the the zip file by <CustomLink href={"/signin"} title={"signin"}/> or <CustomLink href={"/signup"} title={"signup"}/>, <br/>
                  Once you've downloaded the product, you'll find a file named <Code title={"Web-Crawler-Spider.zip"}/>. Simply follow the steps below to get started:
                </span>}
              />
              
              <br/><br/>
              <Heading_Two title={"Extract the Zip File"}/>
              <ul className="list-disc text-base ml-5">
                <li>Locate the downloaded file, <Code title={"Web-Crawler-Spider.zip"}/>.</li>
                <li>Right-click on the file and select "Extract All" (on Windows) or "Extract Here" (on macOS/Linux) to unzip it.</li>
                <li>Choose a folder where you want to extract the contents. Once done, you will see a folder named <Code title={"Web-Crawler-Spider"}/>. Open this folder, and inside, you will find two more folders: <Code title={"/document and /web_crawler_spider"}/>.
                </li>
                <li>
                  Simply open the <Code title={"/web_crawler_spider"}/> this will be your main project directory.
                  <LoadImage url={"root_folder.png"}/> 
                </li>
              </ul>

              <p className="mb-20" id="prerequisites"></p>
              <br/><br/>
              <Heading title={"Prerequisites"}/>
              <ul className="list-disc text-base ml-5">
                <p>Before running the application, make sure your system meets these requirements:</p>

                <br/>
                <li className="italic"><CustomLink title={"Download Node.js (v20).msi"} href={"https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi"}/></li>
                <li className="italic"><CustomLink title={"Download NVM (optional)"} href={"https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe"}/></li>
                <br/>
                
                <li>Download and Install <CustomLink href={"https://nodejs.org/en"} title={"Node.js"}/> (version 20) on your computer. This also installs npm, which you’ll use to manage dependencies.</li>
                <li>To check if Node.js and npm are installed, open a terminal or command prompt using <Code title={"Win + R and type cmd"}/> and press enter and run <br/> <CopyCommand id="node-version" content={`node -v`}/> (to check nodejs version) <br/>

                <CmdBox cmd={"node -v"}/> 
                
                and <CopyCommand id="npm-version" content={`npm -v`}/> (to check npm version)</li>
                <CmdBox cmd={"npm -v"}/> 

                <li>If you installed a version of Node.js greater than v20, you need to download and install <CustomLink href={"https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe"} title={"NVM"}/> (node package manager) to manage and switch nodejs version into <Code title={"v20.11.0"}/></li>
                <li>Follow the official documentation of NVM <CustomLink title={"Read docs"} href={"https://github.com/coreybutler/nvm-windows"}/>:
                  to install it.
                </li>
              </ul>

              <br/><br/>
              <Heading_Two title={"Steps to Install and Run the Application"}/>
              <ul className="list-disc text-base ml-5">
                <li>
                  Install Dependencies: <br/> 
                  Navigate to the folder where you extracted the zip file and open <Code title={"/web_crawler_spider"}/> directory inside command prompt.
                  <LoadImage url={"main_folder.png"}/>
                </li>
                <li>
                  Run the <CopyCommand id="npm-intall" content={`npm install`}/> command to install all required dependencies:
                  <CmdBox cmd={"web_cralwer_spider> npm install"}/>
                  This will download all necessary packages listed in package.json.
                </li>
                <li>
                  Run the <CopyCommand id="npx-intall" content={`npx playwright install`}/> command to install the browser compactibility:
                  <CmdBox cmd={"web_cralwer_spider> npx playwright install"}/>

                  This will download all the necessary packages for Playwright and enable browser automation.
                </li>
                <br/>
                <p><b>Note:</b> Before running these commands, make sure your <b>internet connection</b> is stable. These commands may take a few minutes to complete.</p>
              </ul>
              
              <p className="mb-20" id="start-app"></p>
              <HorizontalAds/>
              <br/><br/>
              <Heading title={"Start the Application"}/>
              <ul className="list-disc text-base ml-5">
                <li>
                  Now run <CopyCommand id="browser-content" content={<span>"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222</span>}/> command. This will launch or open a web browser where you can monitor all your activities:
                  <LoadImage url={"browser_cmd.png"}/>
                </li>
                <li>
                  If you are using multiple accounts in your browser, then you will see your accounts like this in your dynamic browser, remove the extra accounts and keep only one.
                  <LoadImage url={"account.png"}/>
                </li>
                <li>
                  After that run the <CopyCommand id="npmstart" content={`npm start`}/> command to start the server:
                  <LoadImage url={"start.png"}/>
                </li>
                <li>
                  After a few moments, the application will generate a URL (e.g., <CustomLink href={"http://localhost:3000"} title={"http://localhost:3000"}/>). Simply click on this URL and open it on your preferred browser to access the application.
                </li>
                <li>
                  Now you will see the below interface on your browser. Just login or create a new account and start your work!
                  <LoadImage url={"home.png"}/>
                </li>
                <p className="text-center text-xl font-semibold my-10">
                  🎉Congratulations! Your setup is complete.🥳
                  <img src=""/>
                </p>

                <p className="mb-28" id="quick-start"></p>
                <Heading title={<span>⚡Quick Start</span>}/>
                <p className="text-lg">
                  <b>Note:</b> After the installation process, you don't need to follow each step to run the application. Instead, simply open the project folder in the command prompt and run these two commands: <br/>
                  i. <CopyCommand id="dynamic-browser" content={<span>"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222</span>}/> <br/>
                  <LoadImage url={"browser_cmd.png"}/>
                  ii. <CopyCommand id="start" content={`npm start`}/> <br/>
                  That's it! Your application is ready to use at:: <CustomLink href={"http://localhost:3000"} title={"http://localhost:3000"}/>
                  <LoadImage url={"start.png"}/>
                </p>
              </ul>
            </div>

            <div className="py-24" id="purchase-code">
              <Heading title={"Purchase Code"}/>
              <br/>
              <Heading_Two title={"What is an Access or Purchase Code?"}/>
              <Para para={"When you purchase our product, you will receive a purchase code via email. This code acts as your key to unlock full access to the product."}/>

              <br/>
              <Heading_Two title={"Why Do I Need It?"}/>
              <Para para={"The purchase code is essential to gain unrestricted access to all the features and functionalities of the product. Without it, your usage will be limited."}/>

              <br/>
              <Heading_Two title={"How Do I Get It?"}/>
              <Para para={"Once you complete the purchase, the access or purchase code will be sent to your email. Check your inbox (and spam folder just in case) for an email containing the code."}/>

              <br/>
              <Heading_Two title={"How to Apply the Purchase Code?"}/>
              <Para para={`To apply the purchase code, go to the "Profile" section of your account. Look for the "Apply Purchase Code" option and enter the code you received. Once applied, you'll have full access to the product.`}/>
              <LoadImage url={"profile.png"}/>
            </div>
          </div>

          <HorizontalAds/>
          
          <div className="bg-white border border-blue-200 p-2 sm:p-8 rounded-2xl shadow-xl text-center max-w-4xl mx-auto py-10 sm:py-24 overflow-hidden relative" id="support">
            {/* Subtle Background Accent */}
            <div className="bg-gradient-to-tr absolute from-blue-50 inset-0 opacity-50 to-transparent"></div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 items-center relative z-10">
              <div className="flex bg-blue-100 justify-center rounded-full text-4xl sm:text-6xl text-blue-600 w-14 h-14 sm:h-20 sm:w-20 items-center">😊</div>
              <h3 className="text-xl sm:text-4xl text-blue-700 font-semibold">Thank You for Choosing Us!</h3>
              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-md mx-auto">
                We’re dedicated to supporting you—don’t hesitate to get in touch!
              </p>
              <Link 
                href={"mailto:support@designcollection.in"} 
                className="bg-blue-600 rounded-md text-sm sm:text-lg text-white duration-300 font-medium gap-2 hover:bg-blue-700 inline-flex items-center p-2 px-4 sm:px-6 sm:py-3 transition-colors"
              >
                <i className="text-base sm:text-xl ri-mail-fill"></i>
                Contact Us
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};


export default Docs;
