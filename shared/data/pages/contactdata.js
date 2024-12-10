import { ChangeEvent } from "react";

export const ContactData = [
    {
        id: 1,
        pic: "../../assets/img/users/1.jpg",
        name: "Julia Walker",
        mail: "juliawalker@gmail.com",
        number: "+121 2525252352",
        favoriteclass: "ri ri-heart-fill text-base text-danger hover:text-danger"
    },
    {
        id: 2,
        pic: "../../assets/img/users/11.jpg",
        name: "Ben Dover",
        mail: "BenDover@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 3,
        pic: "../../assets/img/users/12.jpg",
        name: "Eos Tempor",
        mail: "EosTempor@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 4,
        pic: "../../assets/img/users/1.jpg",
        name: "Json Taylor",
        mail: "JsonTaylor2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 5,
        pic: "../../assets/img/users/2.jpg",
        name: "Julia Walker",
        mail: "juliawalker@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-danger hover:text-danger"
    },
    {
        id: 6,
        pic: "../../assets/img/users/3.jpg",
        name: "Wiley Waites",
        mail: "WileyWaites2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 7,
        pic: "../../assets/img/users/4.jpg",
        name: "Alica Nestle",
        mail: "AlicaNestle2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 8,
        pic: "../../assets/img/users/21.jpg",
        name: "Edgardo Huel",
        mail: "EdgardoHuel2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 9,
        pic: "../../assets/img/users/5.jpg",
        name: "Willie Makit",
        mail: "Williemakit2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-danger hover:text-danger"
    },
    {
        id: 10,
        pic: "../../assets/img/users/6.jpg",
        name: "Katherina Kat",
        mail: "KatherinaKat2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-gray-300 dark:text-white/70 hover:text-danger"
    },
    {
        id: 11,
        pic: "../../assets/img/users/13.jpg",
        name: "Wiley Dover",
        mail: "Wileydover2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-danger hover:text-danger"
    },
    {
        id: 12,
        pic: "../../assets/img/users/21.jpg",
        name: "Benz Makit",
        mail: "BenzMakit2023@gmail.com",
        number: "+121 9585652655",
        favoriteclass: "ri ri-heart-fill text-base text-danger hover:text-danger"
    },
];

export class ProfileService {

    image = "../../assets/img/png-images/2.png";

    static image = null;

    static handleChange(ele) {
        const [file] = ele.target.files;

        if (file) {
            this.image = URL.createObjectURL(file);
            this.returnImage();
        }
    }

    static returnImage() {
        return this.image;
    }

    static handleChangeUrl(link) {
        this.image = link;
        this.returnImage();
    }

}
//
export class ProfileService1 {
    image = "../../assets/img/png-images/2.png";
    static image;
    static returnImage;

    static handleChange1(ele) {
        const files = ele.target.files;

        if (files && files.length > 0) {
            const [file] = files;
            this.image = URL.createObjectURL(file);
            this.returnImage1();
        } else {
            console.error("No files selected.");
        }
    }

    static returnImage1() {
        return this.image;
    }

    static handleChangeUrl1(link) {
        this.image = link;
        this.returnImage1();
    }

}
export class ProfileService2 {

    image = "../../assets/img/png-images/2.png";

    static image = null;

    static handleChange(ele) {
        const [file] = ele.target.files;

        if (file) {
            this.image = URL.createObjectURL(file);
            this.returnImage();
        }
    }

    static returnImage() {
        return this.image;
    }

    static handleChangeUrl(link) {
        this.image = link;
        this.returnImage();
    }

}