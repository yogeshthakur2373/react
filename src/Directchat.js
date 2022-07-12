import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { nanoid } from "nanoid"



const socket = io.connect("http://localhost:5001")


function Directchat() {


    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([]);
    // const sendChat = (e) => {
    //     e.preventDefault()
    //     socket.emit("chat", { message, userName })
    //     setMessage('')

    // };
    const [userName, setUserName] = useState();
    useEffect(() => {
        let test = localStorage.getItem('userName');
        if (test) {
            console.log(test);
            setUserName(test);
        }
        else {
            let userName = prompt("enter your name");
            localStorage.setItem('userName', userName);
            setUserName(userName);
        }

        socket.on("chat", (payload) => {
            setChat([...chat, payload])


        })
    }, [])
    const sendChat = (e) => {
        localStorage.setItem('msg', message)
        localStorage.getItem('msg')
        e.preventDefault()
        socket.emit("chat", { message, userName })
        setMessage('')

    };


    return (
        <body style={{
            background: "blue"
        }}>
            <div className=' row '
                style={{
                    background: "green",
                    margin: "auto",
                    // height: "300px",
                    color: 'blue',
                    position: 'absolute',
                    right: "300px",
                    top: "180px"
                }}
            >
                {/* DIRECT CHAT PRIMARY */}
                <div className="card card-success card-outline direct-chat direct-chat-success" style={{
                    background: "#0d2e3e"
                }}>
                    <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools"><br></br>
                            <span title="3 New Messages" className="badge bg-primary">HY {userName} WELCOME BACK</span>
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                <i className="fas fa-comments" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        {/* Conversations are loaded here */}
                        <div className="direct-chat-messages">
                            {/* Message. Default to the left */}
                            {chat.map((payload, index) => {
                                return (
                                    <p key={index} style={{
                                        background: "#ADD8E6"
                                    }} >{payload.message}:<span>______from:{payload.userName}</span></p>
                                )
                            })}


                            {/* <div className="App">
                            <header className="App-header">
                                <h1>Chatty app</h1> */}
                            {/* {chat.map((payload, index) => {
                                    return (
                                        <p key={index} >{payload.message}:<span>id:{payload.userName}</span></p>
                                    )
                                })} */}


                            {/* <form onSubmit={sendChat}>
                                    <input type="text " name='chat'
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value)
                                        }}
                                    ></input>
                                    <button type='submit'>send</button>
                                </form> */}
                            {/* //   </header> */}
                            {/* </div> */}


                            {/* /.direct-chat-msg */}
                            {/* Message to the right */}

                        </div>
                        {/* /.direct-chat-pane */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        <form action="#" method="post" onSubmit={sendChat} style={{
                            sbackground: "red    "
                        }}>
                            <div className="input-group">
                                <input type="text" name="chat" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Type Message ..." className="form-control" ></input>
                                <span className="input-group-append">




                                    <button
                                        type="submit" className="btn btn-primary">Send</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    {/* /.card-footer*/}
                </div>

            </div >
        </body>
    )
}

export default Directchat;