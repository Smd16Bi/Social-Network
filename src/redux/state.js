import img1 from "../assets/ava1.jpeg"
import img2 from "../assets/ava2.jpeg"
import img3 from "../assets/ava3.jpeg"



let state = {
    nav: {
        sideBar: [
            { id: 1, link: "Profie", path: "/profile" },
            { id: 2, link: "Message", path: "/dialogs" },
            { id: 3, link: "News", path: "/news" },
            { id: 4, link: "Music", path: "/music" },
            { id: 5, link: "Settings", path: "/settings" },
            { id: 6, link: "Friends", path: "/friends" }
        ],
        friends: [
            { id: 1, name: "Anton", isActive: false, img: img1 },
            { id: 2, name: "Oksana",isActive: true, img: img2},
            { id: 3, name: "Dima",isActive: false, img: img3}
        ]
    },
    dataPosts: {
        post: [
            { id: 1, message: "Hello world", like: 25 },
            { id: 2, message: "First post", like: 15 },
        ]
    },
    dataDialogs: {
        dialogs: [
            { id: 1, name: "Anton" },
            { id: 2, name: "Oksana" },
            { id: 3, name: "Sasha" },
            { id: 4, name: "Dima" },
        ],
        messages: [
            { id: 1, messege: "Hello" },
            { id: 2, messege: "World" },
            { id: 3, messege: "My" },
            { id: 4, messege: "Name" },
        ]
    }
}
export default state;