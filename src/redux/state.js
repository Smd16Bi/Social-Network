import img1 from "../assets/ava1.jpeg"
import img2 from "../assets/ava2.jpeg"
import img3 from "../assets/ava3.jpeg"
import { nanoid } from 'nanoid'
function id() {
    return nanoid();
}

const ADDPOST = "ADD-POST";
const ADDMESSAGE = "ADD-MESSAGE";

let store = {
    _state: {
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
    },
    _callSubscribe() {
        console.log("render true");
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case ADDPOST :
                let newPost = {
                    id: id(),
                    message: action.postBody,
                    like: 0
                }
                this._state.dataPosts.post.push(newPost);
                this._callSubscribe(this._state)
                break;

            case ADDMESSAGE:
                let newMessage = {
                    id: id(),
                    messege: action.bodyMessage
                }
                this._state.dataDialogs.messages.push(newMessage);
                this._callSubscribe(this._state)
                break;
            default:


        }
    },
    addPost(postBody) {
        let newPost = {
            id: id(),
            message: postBody,
            like: 0
        }
        this._state.dataPosts.post.push(newPost);
        this._callSubscribe(this._state)
    },
    updateMessage(bodyMessage) {
        let newMessage = {
            id: id(),
            messege: bodyMessage
        }
        this._state.dataDialogs.messages.push(newMessage);
        this._callSubscribe(this._state)
    },


}
export const actionCreateAddPost = (text) => {
    return { type: ADDPOST, postBody: text }
  }

export const actionCreateNewMessage = (text) => {
    return { type: ADDMESSAGE, bodyMessage: text }
}

export default store;