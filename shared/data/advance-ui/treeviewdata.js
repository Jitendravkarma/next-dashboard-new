import React, { MouseEvent, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { TreeView } from "@mui/x-tree-view";
// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Box from "@mui/material/Box";

// BASIC TREEVIEW 1

export function FileSystemNavigator1() {

    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<ExpandMoreIcon />}
            defaultexpandicon={<ChevronRightIcon />}

        >
            <TreeItem label="TECH" itemId={""}>
                <TreeItem label="Company Maintenance" itemId={"116"} />
                <TreeItem label="Employees" itemId={"117"} />
                <TreeItem label="Human Resources" itemId={"118"} />
                <TreeItem label="Employees" itemId={"119"}>
                    <TreeItem label="Reports" itemId={"120"} />
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"121"} />
            </TreeItem>

        </TreeView>
    );
}
export function FileSystemNavigator2() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<ExpandMoreIcon />}
            defaultexpandicon={<ChevronRightIcon />}

        >
            <TreeItem label="XRP" itemId={"122"}>
                <TreeItem label="Company Maintenance" itemId={"123"} />
                <TreeItem label="Employees" itemId={"124"}>
                    <TreeItem label="Reports" itemId={"125"} />
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"126"} />
            </TreeItem>
        </TreeView>
    );
}
// BASIC TREEVIEW 2

export function BasicTreeviewexample1() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon />}
            defaultexpandicon={<AddCircleOutlineIcon />}

        >
            <TreeItem label="TECH" itemId={"127"}>
                <TreeItem label="Company Maintenance" itemId={"128"} />
                <TreeItem label="Employees" itemId={"129"} />
                <TreeItem label="Human Resources" itemId={"130"} />
            </TreeItem>
        </TreeView>
    );
}
export function BasicTreeviewexample2() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon />}
            defaultexpandicon={<AddCircleOutlineIcon />}

        >
            <TreeItem label="XRP" itemId={"131"}>
                <TreeItem label="Company Maintenance" itemId={"132"} />
                <TreeItem label="Employees" itemId={"133"}>
                    <TreeItem label="Company Maintenance-1" itemId={"134"} />

                </TreeItem>
                <TreeItem label="Employees-1" itemId={"135"}>
                    <TreeItem label="Company Maintenance-2" itemId={"136"} />
                </TreeItem>
                <TreeItem label="Employees" itemId={"137"} />
            </TreeItem>
        </TreeView>
    );
}

export function BasicTreeviewexample3() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon />}
            defaultexpandicon={<AddCircleOutlineIcon />}

        >
            <TreeItem label="TECH 2" itemId={"138"}>
                <TreeItem label="Company Maintenance" itemId={"139"} />
                <TreeItem label="Employees" itemId={"140"}>
                    <TreeItem label="Company Maintenance" itemId={"141"} />
                    <TreeItem label="Employees" itemId={"142"}>
                        <TreeItem label="Human Resource" itemId={"143"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resource" itemId={"144"} />
            </TreeItem>
        </TreeView>
    );
}

export function BasicTreeviewexample4() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon />}
            defaultexpandicon={<AddCircleOutlineIcon />}

        >
            <TreeItem label="TECH 3" itemId={"145"}>
            </TreeItem>
        </TreeView>
    );
}

// BASIC TREEVIEW 3

export function BasicTreeview1() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<FolderOpenIcon />}
            defaultexpandicon={<FolderOpenIcon />}

        >
            <TreeItem label="TECH" itemId={"146"}>
                <TreeItem label="Company Maintenance" itemId={"147"} />
                <TreeItem label="Employees" itemId={"148"}>
                    <TreeItem label="Reports" itemId={"149"} />
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"150"} />
            </TreeItem>
        </TreeView>
    );
}
export function BasicTreeview2() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<FolderOpenIcon />}
            defaultexpandicon={<FolderOpenIcon />}

        >
            <TreeItem label="XRP" itemId={"151"}>
                <TreeItem label="Company Maintenance" itemId={"152"} />
                <TreeItem label="Employees" itemId={"153"}>
                    <TreeItem label="Reports" itemId={"154"} />
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"155"} />
            </TreeItem>
        </TreeView>
    );
}

// TREE VIEW STYLES

// style 1

export function TreeviewStyle() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon className='text-danger' />}
            defaultexpandicon={<AddCircleOutlineIcon className='text-primary' />}
        >
            <TreeItem label="Treeview1" itemId={"156"}>
                <TreeItem label="Company Maintenance" itemId={"157"} />
                <TreeItem label="Employees" itemId={"158"}>
                    <TreeItem label="Reports" itemId={"159"}>
                        <TreeItem label="Report1" itemId={"160"} />
                        <TreeItem label="Report2" itemId={"161"} />
                        <TreeItem label="Report3" itemId={"162"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"163"}>
                        <TreeItem label="Reports" itemId={"164"}>
                            <TreeItem label="Report1" itemId={"165"} />
                            <TreeItem label="Report2" itemId={"166"} />
                            <TreeItem label="Report3" itemId={"167"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"168"} />
                        <TreeItem label="Reports" itemId={"169"}>
                            <TreeItem label="Report1" itemId={"170"} />
                            <TreeItem label="Report2" itemId={"171"} />
                            <TreeItem label="Report3" itemId={"172"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"173"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"174"} />
            </TreeItem>
            <TreeItem label="Treeview2" itemId={"175"}>
                <TreeItem label="Company Maintenance" itemId={"176"} />
                <TreeItem label="Employees" itemId={"177"}>
                    <TreeItem label="Reports" itemId={"178"}>
                        <TreeItem label="Report1" itemId={"179"} />
                        <TreeItem label="Report2" itemId={"180"} />
                        <TreeItem label="Report3" itemId={"181"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"182"}>
                        <TreeItem label="Reports" itemId={"183"}>
                            <TreeItem label="Report1" itemId={"184"} />
                            <TreeItem label="Report2" itemId={"185"} />
                            <TreeItem label="Report3" itemId={"186"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"187"} />
                        <TreeItem label="Reports" itemId={"188"}>
                            <TreeItem label="Report1" itemId={"189"} />
                            <TreeItem label="Report2" itemId={"190"} />
                            <TreeItem label="Report3" itemId={"191"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"192"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"193"} />
            </TreeItem>
            <TreeItem label="Treeview3" itemId={"194"}>
                <TreeItem label="Company Maintenance" itemId={"195"} />
                <TreeItem label="Employees" itemId={"196"}>
                    <TreeItem label="Reports" itemId={"197"}>
                        <TreeItem label="Report1" itemId={"198"} />
                        <TreeItem label="Report2" itemId={"199"} />
                        <TreeItem label="Report3" itemId={"200"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"201"}>
                        <TreeItem label="Reports" itemId={"202"}>
                            <TreeItem label="Report1" itemId={"203"} />
                            <TreeItem label="Report2" itemId={"204"} />
                            <TreeItem label="Report3" itemId={"205"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"206"} />
                        <TreeItem label="Reports" itemId={"207"}>
                            <TreeItem label="Report1" itemId={"208"} />
                            <TreeItem label="Report2" itemId={"209"} />
                            <TreeItem label="Report3" itemId={"210"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"211"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"212"} />
            </TreeItem>
            <TreeItem label="Treeview4" itemId={"213"}>
                <TreeItem label="Company Maintenance" itemId={"214"} />
                <TreeItem label="Employees" itemId={"215"}>
                    <TreeItem label="Reports" itemId={"216"}>
                        <TreeItem label="Report1" itemId={"217"} />
                        <TreeItem label="Report2" itemId={"218"} />
                        <TreeItem label="Report3" itemId={"219"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"220"}>
                        <TreeItem label="Reports" itemId={"221"}>
                            <TreeItem label="Report1" itemId={"222"} />
                            <TreeItem label="Report2" itemId={"223"} />
                            <TreeItem label="Report3" itemId={"224"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"225"} />
                        <TreeItem label="Reports" itemId={"226"}>
                            <TreeItem label="Report1" itemId={"227"} />
                            <TreeItem label="Report2" itemId={"228"} />
                            <TreeItem label="Report3" itemId={"229"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"230"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"231"} />
            </TreeItem>
            <TreeItem label="Treeview5" itemId={"232"}>
                <TreeItem label="Company Maintenance" itemId={"233"} />
                <TreeItem label="Employees" itemId={"234"}>
                    <TreeItem label="Reports" itemId={"235"}>
                        <TreeItem label="Report1" itemId={"236"} />
                        <TreeItem label="Report2" itemId={"237"} />
                        <TreeItem label="Report3" itemId={"238"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"239"}>
                        <TreeItem label="Reports" itemId={"240"}>
                            <TreeItem label="Report1" itemId={"241"} />
                            <TreeItem label="Report2" itemId={"242"} />
                            <TreeItem label="Report3" itemId={"243"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"244"} />
                        <TreeItem label="Reports" itemId={"245"}>
                            <TreeItem label="Report1" itemId={"246"} />
                            <TreeItem label="Report2" itemId={"247"} />
                            <TreeItem label="Report3" itemId={"248"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"249"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" itemId={"250"} />
            </TreeItem>
            <TreeItem label="Treeview6" itemId={"251"}>
                <TreeItem label="Company Maintenance" itemId={"252"} />
                <TreeItem label="Employees" itemId={"253"}>
                    <TreeItem label="Reports" itemId={"254"}>
                        <TreeItem itemId={"255"} label="Report1" />
                        <TreeItem itemId={"256"} label="Report2" />
                        <TreeItem itemId={"257"} label="Report3" />
                    </TreeItem>
                    <TreeItem itemId={"258"} label="Employee Maint.">
                        <TreeItem itemId={"259"} label="Reports">
                            <TreeItem itemId={"260"} label="Report1" />
                            <TreeItem itemId={"261"} label="Report2" />
                            <TreeItem itemId={"262"} label="Report3" />
                        </TreeItem>
                        <TreeItem itemId={"263"} label="Employee Maint." />
                        <TreeItem itemId={"264"} label="Reports">
                            <TreeItem itemId={"265"} label="Report1" />
                            <TreeItem itemId={"266"} label="Report2" />
                            <TreeItem itemId={"267"} label="Report3" />
                        </TreeItem>
                        <TreeItem itemId={"268"} label="Employee Maint." />
                    </TreeItem>
                </TreeItem>
                <TreeItem itemId={"269"} label="Human Resources" />
            </TreeItem>
        </TreeView>
    );
}

// Style2

export function TreeviewStylecolord() {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultcollapseicon={<RemoveCircleOutlineIcon className='text-danger' />}
            defaultexpandicon={<AddCircleOutlineIcon className='text-primary' />}
        >
            <TreeItem label="Treeview1" itemId={"270"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"271"} />
                <TreeItem label="Employees" className='text-pink' itemId={"272"}>
                    <TreeItem label="Reports" itemId={"273"}>
                        <TreeItem label="Report1" className='text-success' itemId={"274"} />
                        <TreeItem label="Report2" className='text-success' itemId={"275"} />
                        <TreeItem label="Report3" className='text-success' itemId={"276"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"277"}>
                        <TreeItem label="Reports" itemId={"278"}>
                            <TreeItem label="Report1" className='text-success' itemId={"279"} />
                            <TreeItem label="Report2" className='text-success' itemId={"280"} />
                            <TreeItem label="Report3" className='text-success' itemId={"281"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"282"} />
                        <TreeItem label="Reports" itemId={"283"}>
                            <TreeItem label="Report1" className='text-success' itemId={"284"} />
                            <TreeItem label="Report2" className='text-success' itemId={"285"} />
                            <TreeItem label="Report3" className='text-success' itemId={"286"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"287"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" className='text-warning' itemId={"288"} />
            </TreeItem>
            <TreeItem label="Treeview2" itemId={"289"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"290"} />
                <TreeItem label="Employees" className='text-pink' itemId={"291"}>
                    <TreeItem label="Reports" itemId={"292"}>
                        <TreeItem label="Report1" className='text-success' itemId={"293"} />
                        <TreeItem label="Report2" className='text-success' itemId={"294"} />
                        <TreeItem label="Report3" className='text-success' itemId={"295"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"296"}>
                        <TreeItem label="Reports" itemId={"297"}>
                            <TreeItem label="Report1" className='text-success' itemId={"298"} />
                            <TreeItem label="Report2" className='text-success' itemId={"299"} />
                            <TreeItem label="Report3" className='text-success' itemId={"300"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"301"} />
                        <TreeItem label="Reports" itemId={"302"}>
                            <TreeItem label="Report1" className='text-success' itemId={"303"} />
                            <TreeItem label="Report2" className='text-success' itemId={"304"} />
                            <TreeItem label="Report3" className='text-success' itemId={"305"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"306"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" className='text-warning' itemId={"307"} />
            </TreeItem>
            <TreeItem label="Treeview3" itemId={"308"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"309"} />
                <TreeItem label="Employees" className='text-pink' itemId={"310"}>
                    <TreeItem label="Reports" itemId={"311"}>
                        <TreeItem label="Report1" className='text-success' itemId={"312"} />
                        <TreeItem label="Report2" className='text-success' itemId={"313"} />
                        <TreeItem label="Report3" className='text-success' itemId={"314"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"315"}>
                        <TreeItem label="Reports" itemId={"316"}>
                            <TreeItem label="Report1" className='text-success' itemId={"317"} />
                            <TreeItem label="Report2" className='text-success' itemId={"318"} />
                            <TreeItem label="Report3" className='text-success' itemId={"319"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"320"} />
                        <TreeItem label="Reports" itemId={"321"}>
                            <TreeItem label="Report1" className='text-success' itemId={"322"} />
                            <TreeItem label="Report2" className='text-success' itemId={"323"} />
                            <TreeItem label="Report3" className='text-success' itemId={"324"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"325"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" className='text-warning' itemId={"326"} />
            </TreeItem>
            <TreeItem label="Treeview4" itemId={"327"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"328"} />
                <TreeItem label="Employees" className='text-pink' itemId={"329"}>
                    <TreeItem label="Reports" itemId={"330"}>
                        <TreeItem label="Report1" className='text-success' itemId={"331"} />
                        <TreeItem label="Report2" className='text-success' itemId={"332"} />
                        <TreeItem label="Report3" className='text-success' itemId={"333"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"334"}>
                        <TreeItem label="Reports" itemId={"335"}>
                            <TreeItem label="Report1" className='text-success' itemId={"336"} />
                            <TreeItem label="Report2" className='text-success' itemId={"337"} />
                            <TreeItem label="Report3" className='text-success' itemId={"338"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"339"} />
                        <TreeItem label="Reports" itemId={"340"}>
                            <TreeItem label="Report1" className='text-success' itemId={"341"} />
                            <TreeItem label="Report2" className='text-success' itemId={"342"} />
                            <TreeItem label="Report3" className='text-success' itemId={"343"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"344"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" className='text-warning' itemId={"345"} />
            </TreeItem>
            <TreeItem label="Treeview5" itemId={"346"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"347"} />
                <TreeItem label="Employees" className='text-pink' itemId={"348"}>
                    <TreeItem label="Reports" itemId={"349"}>
                        <TreeItem label="Report1" className='text-success' itemId={"350"} />
                        <TreeItem label="Report2" className='text-success' itemId={"351"} />
                        <TreeItem label="Report3" className='text-success' itemId={"352"} />
                    </TreeItem>
                    <TreeItem label="Employee Maint." itemId={"353"}>
                        <TreeItem label="Reports" itemId={"354"}>
                            <TreeItem label="Report1" className='text-success' itemId={"355"} />
                            <TreeItem label="Report2" className='text-success' itemId={"356"} />
                            <TreeItem label="Report3" className='text-success' itemId={"357"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"358"} />
                        <TreeItem label="Reports" itemId={"359"}>
                            <TreeItem label="Report1" className='text-success' itemId={"360"} />
                            <TreeItem label="Report2" className='text-success' itemId={"361"} />
                            <TreeItem label="Report3" className='text-success' itemId={"362"} />
                        </TreeItem>
                        <TreeItem label="Employee Maint." className='text-warning' itemId={"363"} />
                    </TreeItem>
                </TreeItem>
                <TreeItem label="Human Resources" className='text-warning' itemId={"364"} />
            </TreeItem>
            <TreeItem label="Treeview6" itemId={"365"}>
                <TreeItem label="Company Maintenance" className='text-warning' itemId={"366"} />
                <TreeItem label="Employees" className='text-pink' itemId={"367"}>
                    <TreeItem label="Reports" itemId={"368"}>
                        <TreeItem itemId={"369"} label="Report1" className='text-success' />
                        <TreeItem itemId={"370"} label="Report2" className='text-success' />
                        <TreeItem itemId={"371"} label="Report3" className='text-success' />
                    </TreeItem>
                    <TreeItem itemId={"372"} label="Employee Maint.">
                        <TreeItem itemId={"373"} label="Reports">
                            <TreeItem itemId={"374"} label="Report1" className='text-success' />
                            <TreeItem itemId={"375"} label="Report2" className='text-success' />
                            <TreeItem itemId={"376"} label="Report3" className='text-success' />
                        </TreeItem>
                        <TreeItem itemId={"377"} label="Employee Maint." className='text-warning' />
                        <TreeItem itemId={"378"} label="Reports">
                            <TreeItem itemId={"379"} label="Report1" className='text-success' />
                            <TreeItem itemId={"380"} label="Report2" className='text-success' />
                            <TreeItem itemId={"381"} label="Report3" className='text-success' />
                        </TreeItem>
                        <TreeItem itemId={"382"} label="Employee Maint." className='text-warning' />
                    </TreeItem>
                </TreeItem>
                <TreeItem itemId={"383"} label="Human Resources" className='text-warning' />
            </TreeItem>
        </TreeView>
    );
}

export function ExpandAll() {
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeids) => {
        const handleToggle = (
            event,
            nodeids
        ) => {
            setExpanded(Array.isArray(nodeids) ? nodeids : [nodeids]);
        };

        const handleSelect = (
            event,
            nodeids
        ) => {
            setSelected(Array.isArray(nodeids) ? nodeids : [nodeids]);
        };

        const handleExpandClick = () => {
            setExpanded((oldExpanded) =>
                oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []
            );
        };

        const handleSelectClick = () => {
            setSelected((oldSelected) =>
                oldSelected.length === 0
                    ? ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                    : []
            );
        };
    };

    function handleExpandClick() {
        throw new Error("Function not implemented.");
    }

    function handleSelectClick(event) {
        throw new Error("Function not implemented.");
    }

    function handleSelect(event, nodeids) {
        throw new Error("Function not implemented.");
    }

    return (
        <Box>
            <Box>
                <Button onClick={() => handleExpandClick()}>
                    {expanded.length === 0 ? "Expand all" : "Collapse all"}
                </Button>
                <Button onClick={() => handleSelectClick}>
                    {selected.length === 0 ? "Select all" : "Unselect all"}
                </Button>
            </Box>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview1" itemId={"1"}>
                    <TreeItem label="Company Maintenance" itemId={"2"}></TreeItem>
                    <TreeItem label="Employees" itemId={"3"}>
                        <TreeItem label="Reports" itemId={"4"}>
                            <TreeItem label="Reports1" itemId={"5"}></TreeItem>
                            <TreeItem label="Reports2" itemId={"6"}></TreeItem>
                            <TreeItem label="Reports3" itemId={"7"}></TreeItem>
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"8"}>
                            <TreeItem label="Reports" itemId={"9"}>
                                <TreeItem label="Reports1" itemId={"10"}></TreeItem>
                                <TreeItem label="Reports2" itemId={"11"}></TreeItem>
                                <TreeItem label="Reports3" itemId={"12"}></TreeItem>
                            </TreeItem>
                            <TreeItem label="Employee Maint." itemId={"13"}>
                                <TreeItem label="Reports" itemId={"14"}>
                                    <TreeItem label="Reports1" itemId={"15"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"16"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"17"}></TreeItem>
                                </TreeItem>
                                <TreeItem label="Employee Maint." itemId={"18"}></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"19"}></TreeItem>
                </TreeItem>
            </TreeView>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview2" itemId={"20"}>
                    <TreeItem label="Company Maintenance" itemId={"21"}></TreeItem>
                    <TreeItem label="Employees" itemId={"22"}>
                        <TreeItem label="Reports" itemId={"23"}>
                            <TreeItem label="Reports1" itemId={"24"}></TreeItem>
                            <TreeItem label="Reports2" itemId={"25"}></TreeItem>
                            <TreeItem label="Reports3" itemId={"26"}></TreeItem>
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"27"}>
                            <TreeItem label="Reports" itemId={"28"}>
                                <TreeItem label="Reports1" itemId={"29"}></TreeItem>
                                <TreeItem label="Reports2" itemId={"30"}></TreeItem>
                                <TreeItem label="Reports3" itemId={"31"}></TreeItem>
                            </TreeItem>
                            <TreeItem label="Employee Maint." itemId={"32"}>
                                <TreeItem label="Reports" itemId={"33"}>
                                    <TreeItem label="Reports1" itemId={"34"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"35"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"36"}></TreeItem>
                                </TreeItem>
                                <TreeItem label="Employee Maint." itemId={"37"}></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"38"}></TreeItem>
                </TreeItem>
            </TreeView>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview3" itemId={"39"}>
                    <TreeItem label="Company Maintenance" itemId={"40"}></TreeItem>
                    <TreeItem label="Employees" itemId={"41"}>
                        <TreeItem label="Reports" itemId={"42"}>
                            <TreeItem label="Reports1" itemId={"43"}></TreeItem>
                            <TreeItem label="Reports2" itemId={"44"}></TreeItem>
                            <TreeItem label="Reports3" itemId={"45"}></TreeItem>
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"46"}>
                            <TreeItem label="Reports" itemId={"47"}>
                                <TreeItem label="Reports1" itemId={"48"}></TreeItem>
                                <TreeItem label="Reports2" itemId={"49"}></TreeItem>
                                <TreeItem label="Reports3" itemId={"50"}></TreeItem>
                            </TreeItem>
                            <TreeItem label="Employee Maint." itemId={"51"}>
                                <TreeItem label="Reports" itemId={"52"}>
                                    <TreeItem label="Reports1" itemId={"53"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"54"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"55"}></TreeItem>
                                </TreeItem>
                                <TreeItem label="Employee Maint." itemId={"56"}></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"57"}></TreeItem>
                </TreeItem>
            </TreeView>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview4" itemId={"58"}>
                    <TreeItem label="Company Maintenance" itemId={"59"}></TreeItem>
                    <TreeItem label="Employees" itemId={"60"}>
                        <TreeItem label="Reports" itemId={"61"}>
                            <TreeItem label="Reports1" itemId={"62"}></TreeItem>
                            <TreeItem label="Reports2" itemId={"63"}></TreeItem>
                            <TreeItem label="Reports3" itemId={"64"}></TreeItem>
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"65"}>
                            <TreeItem label="Reports" itemId={"66"}>
                                <TreeItem label="Reports1" itemId={"67"}></TreeItem>
                                <TreeItem label="Reports2" itemId={"68"}></TreeItem>
                                <TreeItem label="Reports3" itemId={"69"}></TreeItem>
                            </TreeItem>
                            <TreeItem label="Employee Maint." itemId={"70"}>
                                <TreeItem label="Reports" itemId={"71"}>
                                    <TreeItem label="Reports1" itemId={"72"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"73"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"74"}></TreeItem>
                                </TreeItem>
                                <TreeItem label="Employee Maint." itemId={"75"}></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"76"}></TreeItem>
                </TreeItem>
            </TreeView>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview5" itemId={"77"}>
                    <TreeItem label="Company Maintenance" itemId={"78"}></TreeItem>
                    <TreeItem label="Employees" itemId={"79"}>
                        <TreeItem label="Reports" itemId={"80"}>
                            <TreeItem label="Reports1" itemId={"81"}></TreeItem>
                            <TreeItem label="Reports2" itemId={"82"}></TreeItem>
                            <TreeItem label="Reports3" itemId={"83"}></TreeItem>
                        </TreeItem>
                        <TreeItem label="Employee Maint." itemId={"84"}>
                            <TreeItem label="Reports" itemId={"85"}>
                                <TreeItem label="Reports1" itemId={"86"}></TreeItem>
                                <TreeItem label="Reports2" itemId={"87"}></TreeItem>
                                <TreeItem label="Reports3" itemId={"88"}></TreeItem>
                            </TreeItem>
                            <TreeItem label="Employee Maint." itemId={"89"}>
                                <TreeItem label="Reports" itemId={"90"}>
                                    <TreeItem label="Reports1" itemId={"91"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"92"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"93"}></TreeItem>
                                </TreeItem>
                                <TreeItem label="Employee Maint." itemId={"94"}></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"95"}></TreeItem>
                </TreeItem>
            </TreeView>
            <TreeView
                aria-label="controlled"
                defaultcollapseicon={<ExpandMoreIcon />}
                defaultexpandicon={<ChevronRightIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect
            >
                <TreeItem label="Treeview6" itemId={"96"}>
                    <TreeItem label="Company Maintenance" itemId={"97"}></TreeItem>
                    <TreeItem label="Employees" itemId={"98"}>
                        <TreeItem label="Reports" itemId={"100"}>
                            <TreeItem itemId={"101"} label="Reports1"></TreeItem>
                            <TreeItem itemId={"102"} label="Reports2"></TreeItem>
                            <TreeItem itemId={"103"} label="Reports3"></TreeItem>
                        </TreeItem>
                        <TreeItem itemId={"104"} label="Employee Maint.">
                            <TreeItem itemId={"105"} label="Reports">
                                <TreeItem itemId={"106"} label="Reports1"></TreeItem><TreeItem itemId={"107"} label="Reports2"></TreeItem>
                                <TreeItem label="Reports3" itemId={"108"}></TreeItem>
                            </TreeItem>
                            <TreeItem itemId={"109"} label="Employee Maint.">
                                <TreeItem label="Reports" itemId={"110"}>
                                    <TreeItem label="Reports1" itemId={"111"}></TreeItem>
                                    <TreeItem label="Reports2" itemId={"112"}></TreeItem>
                                    <TreeItem label="Reports3" itemId={"113"}></TreeItem>
                                </TreeItem>
                                <TreeItem itemId={"114"} label="Employee Maint."></TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem label="Human Resources" itemId={"115"}></TreeItem>
                </TreeItem>
            </TreeView>
        </Box>
    );
}
