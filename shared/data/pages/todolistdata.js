
let assigner1 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/1.jpg"} alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/4.jpg"} alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/2.jpg"} alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"} alt="Image Description" />
    <span className="inline-flex items-center justify-center avatar avatar-xs rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
        <span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
    </span>
</div>;

let assigner2 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/11.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/4.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/13.jpg"}
        alt="Image Description" />
</div>;

let assigner3 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/15.jpg"}
        alt="Image Description" />
</div>;

let assigner4 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
</div>;

let assigner5 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/16.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/5.jpg"}
        alt="Image Description" />
    <span
        className="inline-flex items-center justify-center avatar avatar-xs rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
        <span className="font-medium text-gray-500 leading-none dark:text-white/70">1+</span>
    </span>
</div>;

let assigner6 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/16.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/5.jpg"}
        alt="Image Description" />
    <span
        className="inline-flex items-center justify-center avatar avatar-xs rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
        <span className="font-medium text-gray-500 leading-none dark:text-white/70">5+</span>
    </span>
</div>;

let assigner7 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/16.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/5.jpg"}
        alt="Image Description" />
    <span
        className="inline-flex items-center justify-center avatar avatar-xs rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
        <span className="font-medium text-gray-500 leading-none dark:text-white/70">5+</span>
    </span>
</div>;

let assigner8 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
</div>;

let assigner9 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
        alt="Image Description" />
</div>;

let assigner10 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/12.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/16.jpg"}
        alt="Image Description" />
    <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/5.jpg"}
        alt="Image Description" />
</div>;

export const To_do_List_Data = [
    {
        id: 1,
        title: "New Project Blueprint",
        assignDate: "14/12/2022",
        dueDate: "25/12/2022",
        status: "Completed",
        priority: "high",
        assigners: assigner1,
        badgeclass: "badge bg-danger/20 text-danger",
        statusclass: "text-success"
    },
    {
        id: 2,
        title: "Design New Landing Pages",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "New",
        priority: "Medium",
        assigners: assigner2,
        badgeclass: "badge bg-warning/20 text-warning",
        statusclass: "text-danger"
    },
    {
        id: 3,
        title: "Server side validation",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Inprogress",
        priority: "Low",
        assigners: assigner3,
        badgeclass: "badge bg-success/20 text-success",
        statusclass: "text-info"
    },
    {
        id: 4,
        title: "New Plugin Development",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Pending",
        priority: "high",
        assigners: assigner4,
        badgeclass: "badge bg-danger/20 text-danger",
        statusclass: "text-warning"
    },
    {
        id: 5,
        title: "Designing New Authentication Pages",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "New",
        priority: "high",
        assigners: assigner5,
        badgeclass: "badge bg-danger/20 text-danger",
        statusclass: "text-danger"
    },
    {
        id: 6,
        title: "Documentation For New Template",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Pending",
        priority: "Low",
        assigners: assigner6,
        badgeclass: "badge bg-success/20 text-success",
        statusclass: "text-warning"
    },
    {
        id: 7,
        title: "Updating Old Ui",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Inprogress",
        priority: "medium",
        assigners: assigner7,
        badgeclass: "badge bg-warning/20 text-warning",
        statusclass: "text-info"
    },
    {
        id: 8,
        title: "Developing New Events in Plugin",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Completed",
        priority: "high",
        assigners: assigner8,
        badgeclass: "badge bg-danger/20 text-danger",
        statusclass: "text-success"
    },
    {
        id: 9,
        title: "Designing Of New Ecommerce Pages",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "Inprogress",
        priority: "Medium",
        assigners: assigner9,
        badgeclass: "badge bg-warning/20 text-warning",
        statusclass: "text-info"
    },
    {
        id: 10,
        title: "Designing Of New Ecommerce Pages",
        assignDate: "14/12/2022",
        dueDate: "23-12-2022",
        status: "New",
        priority: "Low",
        assigners: assigner10,
        badgeclass: "badge bg-success/20 text-success",
        statusclass: "text-danger"
    },
];
export const NewTask = [
    { value: "Angelina May", label: "Angelina May" },
    { value: "Kiara advain", label: "Kiara advain" },
    { value: "Hercules Jhon", label: "Hercules Jhon" },
    { value: "Mayor Kim", label: "Mayor Kim" },
];
export const Assigned = [
    { value: "Critical", label: "Critical" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
];
export const SortBy = [
    { value: "A To Z", label: "A To Z" },
    { value: "Z To A", label: "Z To A" },
    { value: "Favorites", label: "Favorites" },
    { value: "ALL", label: "ALL" },
];
export const StatusTask = [
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "New", label: "New" },
];
