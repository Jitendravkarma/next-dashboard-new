"use client";

import { useUserContext } from "@/shared/userContext/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const windowsSlides = [
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/cb02f033-ec2e-2d40-f2d1-ca99c9acd871.png",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/f608e0d3-def0-ad38-1ff4-832b7b66b584.png",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/bb7a5221-aa24-9843-57cf-f642b2e14ea6.png",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/28c89c80-1612-77cc-2383-4350e0332169.png",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/3206698a-2241-67c7-a092-3a7cac17bc5d.png",
];

const macSlides = [
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/5a1cb2ba-0dbe-7c86-9a3a-b83ab3457fb8.jpeg",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/7326dadc-cb92-4042-7911-602264632b01.jpeg",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/3d510f3e-1e8c-fe2c-ef42-9cf271e5bc8b.jpeg",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/7d7a129a-787c-f027-99f6-24e6b34784fe.jpeg",
  "https://mcusercontent.com/385185488e96c2387bba7596f/images/30f2f670-67a9-ef34-4fab-95ee5fe13a29.jpeg",
];

function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt={`Slide ${i}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-200 border border-gray-500 hover:bg-white text-black px-3 py-3 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-200 border border-gray-500 hover:bg-white text-black px-3 py-3 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}

function StepSection({
  title,
  description,
  image,
  reverse = false,
  gradient = "from-blue-100 to-purple-200",
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        <p
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div
        className={`bg-gradient-to-r ${gradient} border border-gray-300 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-6`}
      >
        <a href={image} target="_blank">
          <img
            src={image}
            alt="Guide"
            className="w-full h-full rounded-xl"
          />
        </a>
      </div>
    </div>
  );
}

export default function Downloads() {
  const { push } = useRouter()
  const [selectedOS, setSelectedOS] = useState("");
  const {isAuthenticated } = useUserContext()

   useEffect(() => {
     const fileUrl =
       "https://mail-us.in/lead-scraper.zip";

     const link = document.createElement("a");
     link.href = fileUrl;

     // optional file name
     link.download = "your-file.zip";

     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   }, []);
    if(!isAuthenticated){
        push('/signin')
    }
  return (
    <main className="text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="text-black py-20 text-center bg-white">
        <h1 className="text-7xl font-bold">
          <p className="mb-6">👍</p>
          Thanks for downloading!
          <p className="mt-2">Just a few steps left</p>
        </h1>
      </header>

      {/* Selection */}
      <section className="pb-20 pt-14 bg-gray-100">
        <h4 className="text-2xl mb-8 text-center">
          Choose your platform
        </h4>

        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-8">
          <button
            onClick={() => setSelectedOS("windows")}
            className="block bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-center gap-2 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/270/270831.png"
                className="mb-2 w-10"
              />
              Windows Users
            </h2>

            <p>Click to view installation steps for Windows.</p>
          </button>

          <button
            onClick={() => setSelectedOS("mac")}
            className="block bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-center gap-2 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732181.png"
                className="mb-2 w-12"
              />
              macOS Users
            </h2>

            <p>Click to view installation steps for macOS.</p>
          </button>
        </div>
      </section>

      {/* WINDOWS */}
      {selectedOS === "windows" && (
        <section className="pt-0 pb-16 bg-white border-t">
          <div className="mb-14 sticky z-20 top-0 w-full border-b shadow-sm bg-white p-6 px-10">
            <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center px-10">
                <h2 className="text-2xl font-bold flex items-center gap-5">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/270/270831.png"
                    className="w-10"
                />
                Windows Installation
                </h2>

                <a
                href="https://youtu.be/yb7cx0qDdrQ"
                target="_blank"
                >
                <img
                    src="https://mcusercontent.com/385185488e96c2387bba7596f/images/99892871-5f53-58ca-b7ab-9f7f349e82bc.png"
                    className="w-24"
                />
                </a>
            </div>
          </div>

          <div className="max-w-7xl px-10 mx-auto flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  <b>STEP 1 -</b> Install NodeJs
                </h2>

                <p className="text-gray-600 mb-6">
                  Extract the downloaded zip file then open the folder, locate {" "}
                  <code className="text-red-600">
                    node_for_windows
                  </code>{" "}
                  file and double-click it.
                </p>
              </div>

              <Carousel slides={windowsSlides} />
            </div>

            <StepSection
              reverse
              title={<span><b>STEP 2 -</b> Run Installer</span>}
              description={`After installing Node.js, open the project folder and double-click <code class="text-red-600">installer</code> file to run it.`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/a41cbda8-039b-290d-cd2a-e57c35d93cf1.png"
            />

            <StepSection
              title={<span><b>STEP 3 -</b> Start Server</span>}
              description={`After running the installer file, double-click the <code class="text-red-600">starter</code> file to start the server.`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/ee948d93-24ae-bf95-3cf9-4ee58321cc01.png"
              gradient="from-orange-100 to-red-200"
            />

            <StepSection
              reverse
              title={<span><b>STEP 4 -</b> Open localhost URL</span>}
              description={`Open <a href="http://localhost:3000" class="underline font-bold text-red-600" target="_blank">http://localhost:3000</a> in your browser.`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/fb848118-428d-154c-75ef-c7860b6713c1.png"
            />
          </div>

          <h4 className="mt-20 text-center text-4xl">
            🎉 Congratulations your setup completed! 🥳
          </h4>
        </section>
      )}

      {/* MAC */}
      {selectedOS === "mac" && (
        <section className="pt-0 pb-16 bg-white border-t">
          <div className="mb-14 sticky z-20 top-0 w-full border-b shadow-sm bg-white p-6 px-10">
            <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center px-10">
                <h2 className="text-2xl font-bold flex items-center gap-5">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/732/732181.png"
                    className="w-14"
                />
                macOS Installation
                </h2>

                <a
                href="https://youtu.be/uQ9SlItitg4"
                target="_blank"
                >
                <img
                    src="https://mcusercontent.com/385185488e96c2387bba7596f/images/99892871-5f53-58ca-b7ab-9f7f349e82bc.png"
                    className="w-24"
                />
                </a>
            </div>
          </div>

          <div className="max-w-7xl px-10 mx-auto flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  <b>STEP 1 -</b> Install NodeJs
                </h2>

                <p className="text-gray-600 mb-6">
                  Extract the downloaded zip file then open the folder and install{" "}
                  <code className="text-red-600">
                    node_for_mac
                  </code>
                </p>
              </div>

              <Carousel slides={macSlides} />
            </div>

            <StepSection
              reverse
              title={<span><b>STEP 2 -</b> Open in Terminal</span>}
              description={`Open project folder and click <code class="text-red-600">New Terminal at Folder</code>`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/d49ed269-8047-fded-702b-f330d543a379.jpeg"
            />

            <StepSection
              title={<span><b>STEP 3 -</b> Install Packages</span>}
              description={`Run <code class="text-red-600">npm install</code>`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/0432e62f-6b01-8648-dcca-7d977dd798d2.png"
              gradient="from-orange-100 to-red-200"
            />

            <StepSection
              reverse
              title={<span><b>STEP 4 -</b> Install Core Packages</span>}
              description={`Run <code class="text-red-600">npx playwright install</code>`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/dd1073af-e0a7-e042-ba29-4e8245b0c12e.png"
              gradient="from-orange-100 to-red-200"
            />

            <StepSection
              title={<span><b>STEP 5 -</b> Start Server</span>}
              description={`Run <code class="text-red-600">npm start</code> and open <a href="http://localhost:3000" target="_blank" class="underline font-bold text-red-600">http://localhost:3000</a>`}
              image="https://mcusercontent.com/385185488e96c2387bba7596f/images/93ef2d05-b8de-3ec6-4602-7d1b250c1e9e.png"
            />
          </div>

          <h4 className="mt-20 text-center text-4xl">
            🎉 Congratulations your setup completed! 🥳
          </h4>
        </section>
      )}
    </main>
  );
}