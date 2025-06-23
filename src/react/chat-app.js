import React from "react";

function ChatApp() {
    return (
        <>
            <h1>Chat app</h1>

            <p>I made a site similer to Discord a few months ago using Next.js. I made this project so I can get more practice with a bunch of diffrent technolgies such as:</p>

            <ul>
                <li>Next JS</li>
                <li>My SQL Databases</li>
                <li>Next UI</li>
                <li>Next Auth</li>
                <li>Bycrpt</li>
                <li>React Hot Toast</li>
            </ul>

            <p>It has many features suchg as:</p>

            <ul>
                <li>
                    Account management
                    <ul>
                        <li>Create accounts</li>
                        <li>Change username</li>
                        <li>Change password</li>
                        <li>Change pfp</li>
                        <li>Change name</li>
                    </ul>
                </li>
                <li>
                    Rooms (similer to the concept of discord servers)
                    <ul>
                        <li>Create</li>
                        <li>Add member</li>
                        <li>Remove member</li>
                        <li>Delete</li>
                    </ul>
                </li>
                <li>
                    Messages
                    <ul>
                        <li>Create</li>
                        <li>Edit</li>
                        <li>Reactions (add and remove)</li>
                        <li>Delete</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default ChatApp;