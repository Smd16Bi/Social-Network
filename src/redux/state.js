import img1 from "../assets/ava1.jpeg"
import img2 from "../assets/ava2.jpeg"
import img3 from "../assets/ava3.jpeg"
import { nanoid } from 'nanoid'

function id() {
    return nanoid();
}


function renderDomTree() {
    // Render DOM(34-35)
    console.log("render true");
}

let state = {
    profile: {
        name: "Anton",
        surname: "Vasylchenko",
        city: "Konotop",
        age: 26
    },
    nav: {
        sideBar: [
            { id: id(), link: "Profie", path: "/profile" },
            { id: id(), link: "Message", path: "/dialogs" },
            { id: id(), link: "News", path: "/news" },
            { id: id(), link: "Music", path: "/music" },
            { id: id(), link: "Settings", path: "/settings" },
            { id: id(), link: "Friends", path: "/friends" }
        ],
        friends: [
            { id: id(), name: "Anton", isActive: false, img: img1 },
            { id: id(), name: "Oksana", isActive: true, img: img2 },
            { id: id(), name: "Dima", isActive: false, img: img3 }
        ]
    },
    dataPosts: {
        post: [
            { id: id(), message: "Hello world", like: 25 },
            { id: id(), message: "First post", like: 15 },
        ]
    },
    dataDialogs: {
        dialogs: [
            { id: id(), name: "Anton" },
            { id: id(), name: "Oksana" },
            { id: id(), name: "Sasha" },
            { id: id(), name: "Dima" },
        ],
        messages: [
            { id: id(), messege: "Hello" },
            { id: id(), messege: "World" },
            { id: id(), messege: "My" },
            { id: id(), messege: "Name" },
        ]
    }
}

export const addPost = (postBody) => {
    let newPost = {
        id: id(),
        message: postBody,
        like: 0
    }
    state.dataPosts.post.push(newPost);
    renderDomTree(state) 
}
export const updateMessage = (bodyMessage) => {
    let newMessage = {
        id: id(),
        messege: bodyMessage
    }
    state.dataDialogs.messages.push(newMessage);
    renderDomTree(state) 
}


// Render DOM(34-35)
export const subscribe = (observer) => {
    renderDomTree = observer
}

 
export default state;