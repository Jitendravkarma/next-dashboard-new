import React, { useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { TagsInput } from "react-tag-input-component";
import { BasicDropdownSelect, multiDropdownSelect } from "./formselect";
import dynamic from "next/dynamic";

const DropdownSelect = () => {

    const [selected, setSelected] = useState([]);  // react-tag-input-component
    return (
        <div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12  md:col-span-6 xxl:!col-span-3">
                    <div className="box tag-select-input">
                        <div className="box-header">
                            <h5 className="box-title">Tag Select Input</h5>
                        </div>
                        <div className="box-body">
                            <TagsInput value={selected} onChange={setSelected} name="text" placeHolder="Enter the Text" />
                        </div>
                    </div>
                </div>
                <div className="col-span-12  md:col-span-6 xxl:!col-span-3">
                    <div className="box basic-dropdown-svg">
                        <div className="box-header">
                            <h5 className="box-title">Basic DropdownSelect</h5>
                        </div>
                        <div className="box-body">
                            <Select className="place-holder" classNamePrefix='react-select' options={BasicDropdownSelect} placeholder='Select a person...' onChange={(value) => console.log(value)} />
                        </div>
                    </div>
                </div>
                <div className="col-span-12  md:col-span-6 xxl:!col-span-3">
                    <div className="box basic-dropdown-svg">
                        <div className="box-header">
                            <h5 className="box-title">Disabled DropdownSelect</h5>
                        </div>
                        <div className="box-body">
                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={BasicDropdownSelect} value={[]} placeholder='Select a person...' onChange={(value) => console.log(value)} />
                        </div>
                    </div>
                </div>
                <div className="col-span-12  md:col-span-6 xxl:!col-span-3">
                    <div className="box basic-dropdown-svg multiple-dropdown-selct">
                        <div className="box-header">
                            <h5 className="box-title">Multiple DropdownSelect</h5>
                        </div>
                        <div className="box-body">
                            <Select isMulti name="state" classNamePrefix='react-select' options={multiDropdownSelect} className="js-example-placeholder-multiple w-full js-states"
                                menuPlacement='auto'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DropdownSelect;
