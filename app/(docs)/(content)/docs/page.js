import React from "react";
import { seo_docs } from "@/shared/data/seo-content/content";
import Link from "next/link";
import { CustomLink, Heading, Heading_Two, Para, Code, LoadImage, CmdBox } from "@/shared/layout-components/docs/Heading";
import CopyCommand from "@/shared/layout-components/docs/CopyButton";
import GetStart from "@/shared/layout-components/docs/sections/Start";
import Features from "@/shared/layout-components/docs/sections/Features";
import Logs from "@/shared/layout-components/docs/sections/Logs";
import Services from "@/shared/layout-components/docs/sections/Services";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_docs

const Docs = () => {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Heading and Subtitle */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl text-gray-800 font-semibold">Scrape <span className="text-blue-500 italic">Genius</span> <br/>Documentation</h1>
            <p className="text-gray-600 mt-4">
              An advanced web scraping solution that uses multiple legal tools to <br/> efficiently extract and manage data, ensuring full compliance with relevant regulations.
            </p>
          </div>

          <div className="mt-10">
            <div className="py-24" id="started">
              <GetStart/>
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
                <li>Locate the downloaded file, <Code title={"Web-Crawler-Spider.zip"}/> and simply unzip it.</li>
                <li>
                After unzipping the file, open the folder and navigate to the <Code title={"/web_crawler_spider"}/>. <br/> 
                <LoadImage url={"root_folder.png"}/> 
                </li>
              </ul>

              <p className="mb-20" id="prerequisites"></p>
              <br/><br/>
              <Heading_Two title={"Prerequisites"}/>
              <ul className="list-disc text-base ml-5">
                <p>Before running the application, make sure your system meets these requirements:</p>
                
                <li>Download <CustomLink href={"https://nodejs.org/en"} title={"Node LTS version"}/>.</li>
                <li>
                  This project was developed using <b>Node.js v20.11.0</b>.
                  You can download the same version below, based on your system:
                  <ul className="text-sm ml-2 italic flex flex-col gap-1 py-2">
                    <li><b>Windows (x64):</b> <CustomLink href={"https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi"} title={"node-v20.11.0-x64.msi"}/></li>
                    <li><b>Ubuntu/Linux (x64):</b> <CustomLink href={"https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.gz"} title={"node-v20.11.0-linux-x64.tar.gz"}/></li>
                    <li><b>macOS (Apple Silicon):</b> <CustomLink href={"https://nodejs.org/dist/v20.11.0/node-v20.11.0-darwin-arm64.tar.gz"} title={"node-v20.11.0-darwin-arm64.tar.gz"}/></li>
                    <li><b>macOS (Intel):</b> <CustomLink href={"https://nodejs.org/dist/v20.11.0/node-v20.11.0-darwin-x64.tar.gz"} title={"node-v20.11.0-darwin-x64.tar.gz"}/></li>
                  </ul>
                </li>
                <br/>
                <li>
                  To check if Node.js successfully installed, follow below steps:<br/>
                  <ul className="text-sm ml-2 italic flex flex-col gap-1 py-2">
                    <li><b>Windows Users:</b> open the command prompt using <Code title={"Win + R and type cmd"}/> and press enter and run:<br/>
                      <CopyCommand id="node-version" content={`node -v`}/>.
                    </li>
                    <li>
                     <b>Ubuntu/Linux Users:</b> Open your terminal and run:<br/>
                      <CopyCommand id="node-version" content={`node -v`}/>
                    </li>
                    <li>
                      <b>macOS Users:</b> Open Terminal (press Cmd + Space, type "Terminal", then press Enter) and run:<br/>
                      <CopyCommand id="node-version" content={`node -v`}/>
                    </li>
                  </ul>
                </li>

                <p className="text-sm italic">
                <b>Note:</b> If you have Node.js version below 20, download and install <CustomLink href={"https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe"} title={"NVM"}/> (node package manager) to manage and switch nodejs version into <Code title={"v20.11.0"}/>
                  Follow the official NVM documentation for installation. <CustomLink title={"Read docs"} href={"https://github.com/coreybutler/nvm-windows"}/>:
                  to install it.
                </p>
              </ul>

              <br/><br/>
              <Heading_Two title={"Steps to Install and Run the Application"}/>
              <ul className="list-disc text-base ml-5">
                <li>
                  Once you opened <Code title={"/web_crawler_spider"}/>, run the <Code title={"/installer.bat"}/> file.
                  <p className="text-sm italic"><b>Note:</b> If the <b>/installer.bat</b> file will not work on your system, checkout our <CustomLink title={"Alternate option"} target="_self" href={"#alternate"}/>.</p>
                  <LoadImage url={"installer.png"}/>
                  <p className="text-sm italic"><b>Note:</b> Ensure a stable internet connection, as the process may take time.</p>
                </li>
                <br/>
                <p className="mb-20" id="alternate"></p>
                <Heading_Two title={"Alternate (Optional)"}/>
                <p className="text-sm italic"><b>Note:</b> If the <b>/installer.bat</b> is not supported or not working on your system, follow the steps below:</p>
                <li>
                  Open your project directory <b>/web_crawler_spider</b> in terminal or command prompt.{" "}<br/>
                  <div className="my-2">
                    <p className="text-sm italic">
                      <b>For Windows:</b> Type cmd on browser's address bar and press enter. <br/>
                      <b>For macOS:</b> Open the folder in Finder, Right-click the folder (or inside the folder background), Choose "Services" - "New Terminal at Folder".<br/>
                      <b>For Ubuntu / Linux:</b> Open the folder in Finder, Right-click the folder (or inside the folder background), Choose "Services" - "New Terminal at Folder".<br/>
                      Now run follow below commands:
                    </p>
                  </div>
                  <div className="grid grid-cols-2 space-x-5 mt-5">
                    <div>
                      <CopyCommand id={"install"} content={"npm install"}/>:
                      <LoadImage url={"install.png"}/>
                    </div>
                    <div>
                      <CopyCommand id={"playwright"} content={"npx playwright install"}/>:
                      <LoadImage url={"install_play.png"}/>
                    </div>
                  </div>
                </li>
              </ul>
              
              <p className="mb-20" id="start-app"></p>
              {/* <HorizontalAds/> */}
              <br/><br/>
              <Heading_Two title={"Start the Application"}/>
              <ul className="list-disc text-base ml-5">
                {/* <p><b>Note:</b> Windows users can skip these steps and directly run the <CustomLink target="_self" href={"#quick-start"} title={"/starter.bat"}/> file to start the server.</p> */}
                <br/>
                {/* <li className="grid grid-cols-1 xl:grid-cols-2 space-y-8 xl:space-y-0 xl:space-x-8">
                  <li>
                    <h3 class="text-xl font-semibold mb-2 italic group-hover:underline">For Windows Users (simply run the 👉<CustomLink target="_self" href={"#quick-start"} title={"/starter.bat"}/> file)</h3>
                    <p className="text-sm italic"><b>Note:</b> If the <b>/starter.bat</b> not working, follow the steps below:</p>
                    <br/>
                    <p>
                      Open your project directory <b>/web_crawler_spider</b> in command prompt by typing <b>cmd</b> in the folder's address bar.
                      <LoadImage url={"main_folder.png"}/>
                      Now run <CopyCommand id="browser-content" content={<span>"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222</span>}/> command. This will launch or open a web browser where you can monitor all your activities:
                      <LoadImage url={"browser_cmd.png"}/>
                    </p>
                  </li>
                  <li>
                    <h3 class="text-xl font-semibold mb-2 italic group-hover:underline">For Mac Users</h3>
                    <p>
                      Open your project directory <b>/web_crawler_spider</b> in terminal.
                    </p>
                    <br/>
                    Now run <CopyCommand id="browser-content" content={<span>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222</span>}/> command. This will launch or open a web browser where you can monitor all your activities:
                    <LoadImage url={"mac_browser.png"}/>
                  </li>
                </li>
                <li>
                  If you are using multiple accounts in your browser, then you will see your accounts like this in your dynamic browser, remove the extra accounts and keep only one.
                  <LoadImage url={"account.png"}/>
                </li> */}
                <li>
                  Now simply run the <CopyCommand id="npmstart" content={`npm start`}/> command to start the server:
                  <LoadImage url={"start.png"}/>
                </li>
                <li>
                  In a few moments, the app will generate a URL (e.g., <CustomLink href={"http://localhost:3000"} title={"http://localhost:3000"}/>). Click it to open the app in your browser.
                </li>
                <li>
                  Now you will see the below interface on your browser. Just login or create a new account and start your work!
                  <LoadImage url={"home.png"}/>
                </li>
                <p className="text-center text-xl font-semibold my-10">
                  🎉Congratulations! Your setup is complete.🥳
                </p>

                <p className="mb-28" id="quick-start"></p>
                <Heading_Two title={<span>⚡Quick Start</span>}/>
                <p className="text-lg">
                  <b>Note:</b> After the installation process, you don't need to follow each step to run the application. Instead, simply open the project folder and open file by name <b>/starter.bat</b>, this will start your server (Only for Windows User): <br/>
                  <LoadImage url={"starterbat.png"}/>
                  <br/>
                  That's it! Your application is ready to use at:: <CustomLink href={"http://localhost:3000"} title={"http://localhost:3000"}/>
                  <LoadImage url={"start.png"}/>
                </p>

                <p className="mb-28" id="purchase-code"></p>
                <Heading_Two title={"Purchase Code"}/>
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
                <Para para={`To apply the purchase code, go to the "Profile" section of your account. Look for the "Purchase Code" option and enter the code you received. Once applied, you'll have full access to the product.`}/>
                <LoadImage url={"profile.png"}/>
              </ul>
            </div>

            <div className="py-24" id="features">
              <Features/>
              {/* <HorizontalAds/> */}
            </div>


            <div className="py-24" id="services">
              <Services/>
            </div>

            <div className="py-24" id="logs">
              <Logs/>
              {/* <HorizontalAds/> */}
            </div>
          </div>

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
