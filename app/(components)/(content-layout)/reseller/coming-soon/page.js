"use client"
import React from "react";
import Seo from "@/shared/layout-components/seo/seo";

const ComingSoon = () => {
	return (
		<div>
			<Seo title={"Coming Soon"} />
			<div className="">
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
                    <div className="text-center px-6">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Coming Soon</h1>
                        <p className="text-lg md:text-xl mb-8">
                            We are working hard to bring you an amazing experience. Stay tuned!
                        </p>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default ComingSoon;
