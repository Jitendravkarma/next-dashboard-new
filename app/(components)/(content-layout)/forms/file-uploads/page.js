"use client"
import React, { useState } from "react";
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Fileuploads = () => {

	//React filepond

	const [files, setFiles] = useState([]);
	const [files1, setFiles1] = useState([]);

	return (
		<div>
			<Seo title={"File Uploads"} />
			<PageHeader currentpage="File Uploads" activepage="Forms" mainpage="File Uploads" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic File Input</h5>
						</div>
						<div className="box-body">
							<div>
								<label htmlFor="file-input" className="sr-only">Choose file</label>
								<input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70 file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">File Input Buttons</h5>
						</div>
						<div className="box-body">
							<div>
								<label className="block">
									<span className="sr-only">Choose Profile photo</span>
									<input type="file" className="block  rounded-sm w-full text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none" />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">File Input Sizes</h5>
						</div>
						<div className="box-body space-y-3">
							<div>
								<label htmlFor="small-file-input" className="sr-only">Choose file</label>
								<input type="file" name="small-file-input" id="small-file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70  file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
							</div>

							<div>
								<label htmlFor="file-input-medium" className="sr-only">Choose file</label>
								<input type="file" name="file-input-medium" id="file-input-medium" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70  file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
							</div>

							<div>
								<label htmlFor="large-file-input" className="sr-only">Choose file</label>
								<input type="file" name="large-file-input" id="large-file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70  file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 file:sm:py-5 dark:file:bg-black/20 dark:file:text-white/70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">circular File Upload</h5>
						</div>
						<div className="box-body">
							<FilePond
								className="filepond circular-filepond"
								labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
								//   imageCropAspectRatio="1:1"
								//   imageResizeTargetWidth={200}
								//   imageResizeTargetHeight={200}
								stylePanelLayout='compact circle'
								styleLoadIndicatorPosition='center bottom'
								styleButtonRemoveItemPosition='center bottom'
							/>

						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Single File Upload</h5>
						</div>
						<div className="box-body">

							<FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
								server="/api" allowReorder={true} files={files1} onupdatefiles={setFiles1} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
								labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Multiple File Upload</h5>
						</div>
						<div className="box-body">

							<FilePond className="multiple-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
								server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={true} allowImagePreview={true} maxFiles={10} name="filepond"
								labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};

export default Fileuploads;
