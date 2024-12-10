const ThemeChanger = "ThemeChanger";
const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
const Buynow_checkout = "Buynow_checkout";
const ADD_TO_CHECKOUT = "ADD_TO_CHECKOUT";
const ADD_TO_CART = "ADD_TO_CART"; // Define ADD_TO_CART as a constant
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

let initialState = {
    lang: "en",
    dir: "ltr",
    dataNavLayout: "vertical",
    class: "light",
    dataHeaderStyles: "light",
    dataMenuStyles: "dark",
    dataVerticalStyle: "overlay",
    StylebodyBg: "107 64 64",
    StyleDarkBg: "93 50 50",
    toggled: "",
    dataNavStyle: "",
    horStyle: "",
    dataPageStyle: "regular",
    dataWidth: "fullwidth",
    dataMenuPosition: "fixed",
    dataHeaderPosition: "fixed",
    iconOverlay: "",
    colorPrimaryRgb: "",
    colorPrimary: "",
    bodyBg: "",
    darkBg: "",
    bgImg: "",
    iconText: "",
    body: {
        class: ""
    },
    selectedItem: null,
    wishlist: [],
    cart: [],
    count: 0,
    checkoutItems: [],
    products: [
        {
            id: 1,
            productpicture: "../../../assets/img/ecommerce/products/1.png",
            title: "Black Heals For Women",
            status: "Available",
            class: "success",
            rating: 4,
            views: "21,123",
            price: "$699",
            discount: "$999",
            discount1: "20%",
            size: "M",
            color: "Brown",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/1.png" },
                { 'img': "../../../assets/img/ecommerce/products/1.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/1.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/1.3.png" }],
        },
        {
            id: 2,
            productpicture: "../../../assets/img/ecommerce/products/2.png",
            title: "Tshirt For Men",
            status: "Out Of Stock",
            class: "danger",
            rating: 4.3,
            views: "23,123",
            price: "$245",
            discount: "$599",
            discount1: "10%",
            size: "L",
            color: "White",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/2.png" },
                { 'img': "../../../assets/img/ecommerce/products/2.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/2.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/2.3.png" }],
        },
        {
            id: 3,
            productpicture: "../../../assets/img/ecommerce/products/3.png",
            title: "Blue Jacket For Men",
            status: "Available",
            class: "success",
            rating: 4.5,
            views: "35,586",
            price: "$1999",
            discount: "$1599",
            discount1: "5%",
            size: "M",
            color: "Blue",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/3.png" },
                { 'img': "../../../assets/img/ecommerce/products/3.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/3.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/3.3.png" }],
        },
        {
            id: 4,
            productpicture: "../../../assets/img/ecommerce/products/4.png",
            title: "Dolor Wireless Airpods",
            status: "Out of Stock",
            class: "danger",
            rating: 3.5,
            views: "15,253",
            price: "$399",
            discount: "$499",
            discount1: "10%",
            size: "Bluetooth",
            color: "Red",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/4.png" },
                { 'img': "../../../assets/img/ecommerce/products/4.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/4.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/4.3.png" }],
        },
        {
            id: 5,
            productpicture: "../../../assets/img/ecommerce/products/5.png",
            title: "Dolor Rose Frangrance Perfume",
            status: "Available",
            class: "success",
            rating: 4.2,
            views: "20,989",
            price: "$199",
            discount: "$299",
            discount1: "0%",
            size: "500ML",
            color: "Yellow",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/5.png" },
                { 'img': "../../../assets/img/ecommerce/products/5.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/5.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/5.3.png" }],
        },
        {
            id: 6,
            productpicture: "../../../assets/img/ecommerce/products/6.png",
            title: "Smart Wrist Watch",
            status: "Available",
            class: "success",
            rating: 4.5,
            views: "22,989",
            price: "$399",
            discount: "$599",
            discount1: "20%",
            size: "Adjustable",
            color: "Pink",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/6.png" },
                { 'img': "../../../assets/img/ecommerce/products/6.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/6.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/6.3.png" }],
        },
        {
            id: 7,
            productpicture: "../../../assets/img/ecommerce/products/7.png",
            title: "Sun Glasses",
            status: "Available",
            class: "success",
            rating: 3,
            views: "10,252",
            price: "$559",
            discount: "$699",
            discount1: "10%",
            size: "Adjustable",
            color: "Black",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/7.png" },
                { 'img': "../../../assets/img/ecommerce/products/7.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/7.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/7.3.png" }],
        },
        {
            id: 8,
            productpicture: "../../../assets/img/ecommerce/products/8.png",
            title: "Mens Cowboys Hat",
            status: "Available",
            class: "success",
            rating: 3.5,
            views: "10,989",
            price: "$299",
            discount: "$399",
            discount1: "30%",
            size: "M",
            color: "Brown",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/8.png" },
                { 'img': "../../../assets/img/ecommerce/products/8.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/8.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/8.3.png" }],
        },
        {
            id: 9,
            productpicture: "../../../assets/img/ecommerce/products/9.png",
            title: "Travel Bag For Womens",
            status: "Out Of Stuck",
            class: "danger",
            rating: 4.5,
            views: "50,989",
            price: "$150",
            discount: "$186",
            discount1: "15%",
            size: "M",
            color: "Black",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/9.png" },
                { 'img': "../../../assets/img/ecommerce/products/9.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/9.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/9.3.png" }],
        },
        {
            id: 10,
            productpicture: "../../../assets/img/ecommerce/products/10.png",
            title: "Leather Wallet For girls",
            status: "Available",
            class: "success",
            rating: 4.5,
            views: "45,989",
            price: "$100",
            discount: "$150",
            discount1: "25%",
            size: "Small",
            color: "Pink",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/10.png" },
                { 'img': "../../../assets/img/ecommerce/products/10.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/10.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/10.3.png" }],
        },
        {
            id: 11,
            productpicture: "../../../assets/img/ecommerce/products/11.png",
            title: "Red Dotted Dress For Girls",
            status: "Out of Stock ",
            class: "danger",
            rating: 3.5,
            views: "45,989",
            price: "$180",
            discount: "$200",
            discount1: "20%",
            size: "XL",
            color: "Red",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/11.png" },
                { 'img': "../../../assets/img/ecommerce/products/11.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/11.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/11.3.png" }],
        },
        {
            id: 12,
            productpicture: "../../../assets/img/ecommerce/products/12.png",
            title: "Winter Jacket For Men's",
            status: "Available",
            class: "success",
            rating: 4.5,
            views: "45,989",
            price: "$465",
            discount: "$500",
            discount1: "10%",
            size: "M",
            color: "Gray",
            images: [
                { 'img': "../../../assets/img/ecommerce/products/12.png" },
                { 'img': "../../../assets/img/ecommerce/products/12.1.png" },
                { 'img': "../../../assets/img/ecommerce/products/12.2.png" },
                { 'img': "../../../assets/img/ecommerce/products/12.3.png" }],
        },
    ],
};

export default function reducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case ThemeChanger:
            return {
                ...state,
                ...payload
            };

        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: payload
            };

        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, payload]
            };

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== payload)
            };

        case Buynow_checkout:
            return {
                ...state,
                cart: [payload],
                actionType: action.actionType
            };

        case ADD_TO_CHECKOUT:
            return {
                ...state,
                checkoutItems: action.payload,
                actionType: action.actionType
            };

        case ADD_TO_CART: // Handle ADD_TO_CART action
            return {
                ...state,
                cart: [...state.cart, payload]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload)
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(0, action.payload.quantity) }
                        : item
                )
            };

        default:
            return state;
    }
}

