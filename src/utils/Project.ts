import { ProjectInterface } from "./Interface/ProjectInterface";
import chat_room from "../assets/projects/chat_room.png";
import chat_room_t from "../assets/projects/chat_room_t.png";
import curr_convertor from "../assets/projects/curr_convertor.png";
import pass_gen from "../assets/projects/pass_gen.png";
import pass_gen_t from "../assets/projects/pass_gen_t.png";
import private_routes from "../assets/projects/private_routes.png";
import todo from "../assets/projects/todo.png";
import todo_t from "../assets/projects/todo_t.png";
import chat_pusher from "../assets/projects/chat_pusher.png";
import webrtc_t from "../assets/projects/webrtc_t.png";
import user_auth from "../assets/projects/user_auth.png";
import user_auth_t from "../assets/projects/user_auth_t.png";
import webSS from "../assets/projects/webSS.png";
import nextb from "../assets/projects/nextb.png";
import nextss from "../assets/projects/nextss.png";

export const Project: ProjectInterface[] = [
    {
        banner: nextss,
        techStackImg: nextb,
        title: "NextJs Basic Authentication Web App",
        desc: "This web application, built using Next.js and MongoDB, provides essential features for user authentication and account management. ",
        live: {
            isLive: true,
            link: "https://nextjs-auth-web-app.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/nextjs-auth-web-app"
    },
    {
        banner: webSS,
        techStackImg: webrtc_t,
        title: "Peer-Meet Web App",
        desc: "Developed a real-time video conferencing platform, built with React, Fastify, WebRTC.",
        live: {
            isLive: true,
            link: "https://peer-meet-webrtc.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/peerMeet-Webrtc"
    },
    {
        banner: chat_pusher,
        techStackImg: chat_room_t,
        title: "Chat Room Web App",
        desc: "A real-time Chat Room application, built with React, Fastify, Pusher.",
        live: {
            isLive: true,
            link: "https://chat-web-app-chi.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/chat_web_app"
    },
    {
        banner: chat_room,
        techStackImg: chat_room_t,
        title: "Chat Room",
        desc: "A platform designed for private conversations with your friends. Ensure your discussions are confidential and protected.",
        live: {
            isLive: false,
            link: ""
        },
        github: "https://github.com/vishaltalukar66/Chat-Room"
    },
    {
        banner: pass_gen,
        techStackImg: pass_gen_t,
        title: "Password Generator",
        desc: "Password Generator using React, allowing users to customize their passwords with numbers, special characters, and select a length ranging from 8 to 25 characters.",
        live: {
            isLive: true,
            link: "https://vishaltalukar66.github.io/password_generator/"
        },
        github: "https://github.com/vishaltalukar66/password_generator"
    },
    {
        banner: todo,
        techStackImg: todo_t,
        title: "To Do",
        desc: "A simple ToDo web app built with React and Redux, where data is stored in the browser's localStorage.",
        live: {
            isLive: true,
            link: "https://todo-using-redux-react.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/todo-using-Redux-React"
    },

    {
        banner: user_auth,
        techStackImg: user_auth_t,
        title: "User Authentication",
        desc: "A robust User Authentication Portal crafted with the power of Fastify, Node.js, MongoDB, and TypeScript.",
        live: {
            isLive: true,
            link: "https://user-authentication-pied.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/user_authentication"
    },


    {
        banner: private_routes,
        techStackImg: pass_gen_t,
        title: "Private Routes in React Front End",
        desc: "Private Routes in React is a demonstration of how to implement user authentication and private routes in a React application. With this setup, users can log in, verify their cookies, and access confidential data once authenticated.",
        live: {
            isLive: true,
            link: "https://private-route-navy.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/private_route"
    },


    {
        banner: private_routes,
        techStackImg: "user_auth_t",
        title: "Private Routes in React Back End",
        desc: "Private Routes in React is a demonstration of how to implement user authentication and private routes in a React application. With this setup, users can log in, verify their cookies, and access confidential data once authenticated.",
        live: {
            isLive: false,
            link: ""
        },
        github: "https://github.com/vishaltalukar66/private_route_backend"
    },

    {
        banner: curr_convertor,
        techStackImg: pass_gen_t,
        title: "Currency Converter",
        desc: "Private Routes in React is a demonstration of how to implement user authentication and private routes in a React application. With this setup, users can log in, verify their cookies, and access confidential data once authenticated.",
        live: {
            isLive: true,
            link: "https://currency-converter-nine-iota.vercel.app/"
        },
        github: "https://github.com/vishaltalukar66/currency_converter"
    },

];