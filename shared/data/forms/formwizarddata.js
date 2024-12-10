import Link from "next/link";
import React, { Children, Component, Fragment, useState } from "react";
const Select = dynamic(() => import('react-select'), { ssr: false });
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from '@mui/material/StepLabel';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";

const steps1 = ['Personal Information', 'Select Service User', 'Appointment Details', 'Payment', 'Confirmation'];

export default function HorizontalLinearStepper() {

    const Countrydata = [
        { value: "India", label: "India" },
        { value: "Japan", label: "Japan" },
        { value: "Monaco", label: "Monaco" },
        { value: "Belize", label: "Belize" },
        { value: "Russia", label: "Russia" },
    ]

    const Selectdata = [
        { value: "India", label: "India" },
        { value: "USA", label: "USA" },
        { value: "Australia", label: "Australia" },
    ]

    const Maledata = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ]

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState();

    const isStepOptional = (step) => {
        return step === 1;
    };

    // const isStepSkipped = (step) => {
    //     return skipped.has(step);
    // };

    const isStepSkipped = (step) => {
        // Defensive check
        if (typeof skipped !== 'undefined' && skipped instanceof Set) {
            return skipped.has(step);
        } 
        // else {
        //     console.error("Skipped is not defined or not a Set");
        //     return false; // Or handle this case appropriately
        // }
    };
    
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped?.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [startDate, setStartDate] = useState(new Date());


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps1.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        // labelProps.optional = (
                        //   <Typography variant="caption">Optional</Typography>
                        // );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={index} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === 0 && ( // Render the following HTML only on the first step
                <div className="wizard-tab wizard-step">
                    <div className="grid grid-cols-12 xl:gap-6 justify-center">
                        <div className="col-span-12 xl:col-span-12">
                            <div className="register-page wizard-content container">
                                <h6 className="mb-3">Registration :</h6>
                                <div className="grid grid-cols-12 xl:gap-6 gap-3">
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="input-label" className="ti-form-label">First Name</label>
                                        <input type="text" id="input-label" className="ti-form-input" placeholder="First Name" />
                                    </div>
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="input-label" className="ti-form-label">Last Name</label>
                                        <input type="text" id="input-label3" className="ti-form-input" placeholder="Last Name" />
                                    </div>
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="input-label" className="ti-form-label">Email Address</label>
                                        <input type="text" id="Email" className="ti-form-input" placeholder="Enter Email Adress" />
                                    </div>
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="input-label" className="ti-form-label">Phone Number</label>
                                        <input type="text" id="inputGroup" className="ti-form-input" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="dob" className="ti-form-label">Date of Birth</label>
                                        <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className="col-span-12  xl:col-span-6">
                                        <label htmlFor="gender" className="ti-form-label">Select Gender
                                            :</label>
                                        <Select name="colors" options={Maledata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Male"
                                        />
                                    </div>
                                    <div className="col-span-12  lg:col-span-6">
                                        <label htmlFor="country"
                                            className="ti-form-label">Country</label>
                                        <Select name="colors" options={Countrydata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="India"
                                        />
                                    </div>
                                    <div className="col-span-12  lg:col-span-6 select-city">
                                        <label htmlFor="select-city" className="ti-form-label">Select City
                                            :</label>
                                        <Select name="colors" options={Selectdata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 1 && (
                <div className=" wizard-step wizard-tab active">
                    <div className="grid grid-cols-12 xl:gap-6 gap-4 wizard-content container">
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col" >
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-primary/10 font-semibold text-primary leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked">Cardio Check</label>
                                        <span className="fs-12 text-muted">$249</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-primary rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-secondary/10 font-semibold text-secondary leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked1">Ortho Consult</label>
                                        <span className="fs-12 text-muted">$120</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-secondary rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-success/10 font-semibold text-success leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked2">Gyn Exam</label>
                                        <span className="fs-12 text-muted">$100</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-success rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-gray-100 font-semibold text-dark leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked3">Pediatric Vaccines</label>
                                        <span className="fs-12 text-muted">$50</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-orange rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-warning/10 font-semibold text-warning leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked5">X-ray Imaging</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-warning rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-purple-500/10  font-semibold text-purple-500 leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked6">Blood Tests</label>
                                        <span className="fs-12 text-muted">Varies</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-danger rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-danger/10 font-semibold text-danger leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked7">Eye Exam</label>
                                        <span className="fs-12 text-muted">$90</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-dark rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked7" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  xl:col-span-3">
                            <div className="col">
                                <div className="form-check flex items-center gap-3 p-2 dark:bg-bgdark border border-gray-200 dark:border-white/10">
                                    <div>
                                        <span className="inline-flex me-2 items-center justify-center size-[46px]  bg-info/10 font-semibold text-info leading-none">
                                            <i className="ri-hospital-line text-xl"></i>
                                        </span>
                                    </div>
                                    <div className="grid">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked4">Dental Checkup</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div className="flex ms-auto">
                                        <input className="ti-form-checkbox form-checked-info rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 2 && (
                <div className="wizard-step wizard-tab">
                    <div className=" flex justify-center text-center grid-cols-12 xl:gap-6 summary-view wizard-content container">
                        <div className="col-span-12 lg:col-span-6 overflow-hidden">
                            <div className="box">
                                <div className="box-header bg-light dark:bg-gray-900/10">
                                    <h5 className="box-title">Appointment Details</h5>
                                </div>
                                <div className="box-body p-0">
                                    <div className="overflow-auto">
                                        <table className="ti-custom-table ti-custom-table-head ">
                                            <tbody>
                                                <tr>
                                                    <td className="font-medium">Category</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Neuro Clinic</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Service</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Brain, spinal cord, nerves, and muscles.</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Service providers</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Amanto Sento</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Branch</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">India</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Appointment Date</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">12-Sep-2023</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Appointment Time</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">10:00 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-header bg-light dark:bg-gray-900/10">
                                    <h5 className="box-title">Persional Details	</h5>
                                </div>
                                <div className="box-body p-0">
                                    <div className="overflow-auto">
                                        <table className="ti-custom-table ti-custom-table-head ">
                                            <tbody>
                                                <tr>
                                                    <td className="font-medium">First Name</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Martin Brown</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Last Name</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Martin Brown</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Email Address</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Martin12@gamil.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Phone Number</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">98765433221</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-medium">Country</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">India</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-header bg-light dark:bg-gray-900/10">
                                    <h5 className="box-title">Payment Details	</h5>
                                </div>
                                <div className="box-body p-0">
                                    <div className="overflow-auto">
                                        <table className="ti-custom-table ti-custom-table-head ">
                                            <tbody>
                                                <tr>
                                                    <td className="font-medium">Mode of Payment</td>
                                                    <td>:</td>
                                                    <td className="!font-normal">Paypal</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="box-body">
                                    <label className="form-check-label d-block fw-medium fs-15 " htmlFor="flexCheckChecked4">Source Information:</label>
                                    <div className="space-y-2 mt-3">
                                        <div className="flex flex-wrap gap-x-6">
                                            <div className="flex">
                                                <input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-checkbox-group-1" />
                                                <label htmlFor="hs-checkbox-group-1" className="text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Google</label>
                                            </div>

                                            <div className="flex">
                                                <input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-checkbox-group-2" />
                                                <label htmlFor="hs-checkbox-group-2" className="text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Advertisement</label>
                                            </div>

                                            <div className="flex">
                                                <input type="checkbox" className="ti-form-checkbox mt-0.5" id="hs-checkbox-group-3" />
                                                <label htmlFor="hs-checkbox-group-3" className="text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 3 && (
                <div className="wizard-step wizard-tab">
                    <div className="grid grid-cols-12 xl:gap-6 wizard-content container">
                        <div className="col-span-12 xl:col-span-12">
                            <div>
                                <div className="fs-15 fw-medium sm:flex block items-center justify-between mb-3">
                                    <div>Payment Details :</div>
                                </div>
                                <div className="grid grid-cols-12 xl:gap-6">
                                    <div className="col-span-12 xl:col-span-12">
                                        <div className="mb-3">
                                            <label className="form-label">Delivery Address</label>
                                            <div className="mt-3">
                                                <label htmlFor="hs-trailing-button-add-on" className="sr-only">Label</label>
                                                <div className="flex rounded-sm">
                                                    <input type="text" id="hs-trailing-button-add-on" defaultValue="1234 Elm Street,Anytown, USA,12345" name="hs-trailing-button-add-on" className="ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10" />
                                                    <button type="button" className="py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                                        Change
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box border shadow-none mb-3">
                                            <div className="box-header">
                                                <div className="card-title">
                                                    Payment Methods
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="btn-group mb-3 sm:flex block" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                    <label className="py-2 px-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300 mt-sm-0 mt-1 me-2" htmlFor="btnradio1">C.O.D(Cash on delivery)</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                    <label className="py-2 px-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300 mt-sm-0 mt-1 me-2" htmlFor="btnradio2">UPI</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                                    <label className="py-2 px-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300 mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
                                                </div>
                                                <div className="grid grid-cols-12 xl:gap-6 gap-3">
                                                    <div className="col-span-12  xl:col-span-12">
                                                        <label htmlFor="input-label" className="ti-form-label">Card Number</label>
                                                        <input type="text" id="input-label" className="ti-form-input" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                    </div>
                                                    <div className="col-span-12  xl:col-span-12">
                                                        <label htmlFor="input-label" className="ti-form-label">Name On Card</label>
                                                        <input type="text" id="input-label" className="ti-form-input" defaultValue="Toni Stark" />
                                                    </div>
                                                    <div className="col-span-12  xl:col-span-4">
                                                        <label htmlFor="Expiration" className="ti-form-label">Expiration Date</label>
                                                        <input type="text" id="Expiration" className="ti-form-input" defaultValue="08/2024" />
                                                    </div>
                                                    <div className="col-span-12  xl:col-span-4">
                                                        <label htmlFor="input-label2" className="ti-form-label">CVV</label>
                                                        <input type="text" id="input-label2" className="ti-form-input" defaultValue="08/2024" />
                                                    </div>
                                                    <div className="col-span-12  xl:col-span-4">
                                                        <label htmlFor="CVO" className="ti-form-label">CVO.T.PV</label>
                                                        <input type="text" id="CVO" className="ti-form-input" defaultValue="183467" />
                                                        <label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-12">
                                                        <div className="form-check">
                                                            <label className="p-3 flex w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                                                <input type="checkbox" className="ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-checked-in-form" defaultChecked />
                                                                <span className="text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Save This Card</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <p className="fs-15 fw-medium mb-1">Saved Cards :</p>
                                                <div className="grid grid-cols-12 gap-3 gy-3">
                                                    <div className="col-span-12  xl:col-span-6">
                                                        <div className="form-check payment-card-container mb-0 lh-1 saved-cards">
                                                            <input id="payment-card1" name="payment-cards" type="radio" className="ti-form-checkbox" defaultChecked />
                                                            <div className="form-check-label pe-5">
                                                                <div className="sm:flex block items-center justify-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/img/media/31.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details">
                                                                        <p className="mb-0 fw-medium me-2">XXXX - XXXX - XXXX - 7557</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12  xl:col-span-6 ">
                                                        <div className="form-check payment-card-container mb-0 lh-1 saved-cards">
                                                            <input id="payment-card2" name="payment-cards" type="radio" className="ti-form-checkbox" />
                                                            <div className="form-check-label pe-5">
                                                                <div className="sm:flex block items-center justify-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/img/media/31.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details">
                                                                        <p className="mb-0 fw-medium me-2">XXXX - XXXX - XXXX - 5741</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 4 && (
                <div className="wizard-step wizard-tab">
                    <div className="grid grid-cols-12 xl:gap-6 wizard-content container">
                        <div className="col-span-12 xl:col-span-12 flex justify-center text-center">
                            <div className="checkout-payment-success">
                                <div className="mb-4">
                                    <h5 className="text-success fw-medium">Appointment Booked...</h5>
                                </div>
                                <div className="mb-4">
                                    <img src="../../assets/img/media/30.png" alt="" className="img-fluid" />
                                </div>
                                <div className="mb-4">
                                    <p className="mb-1 fs-14">You will get the appointment details with appointment id <b>SPK#1FR</b> to <Link className="link-success" href="#!" scroll={false}><u>Martin12@gamil.com</u></Link></p>
                                    <p className="text-muted">Thank you for booking an appointment .</p>
                                </div>
                                <Link href="#!" scroll={false} className="btn btn-success">Book Another Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === steps1.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}> Step{activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            style={{ marginRight: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button className="me-2" color="inherit" onClick={handleSkip} style={{ marginRight: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps1.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}