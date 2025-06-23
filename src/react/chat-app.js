import React from "react";

// Toast
import toast from 'react-hot-toast';

function ChatApp() {
    function notify() {
        toast('Here is your toast.');
    };

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

            <p>You may be wondering what React hot toast is. That libery creates pop ups for notifications. Test it out using the button below</p>

            <button onClick={notify}>React Hot Toast</button>

            <p>That is just a blank toast. There are many kinds such as a sucess one (a green checkmark would appear in the popup), failure, pending, etc.</p>

            <hr />

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

            <h2>User auth</h2>

            <p>For this project there needed to be authentication for users. You dont want people just saying there are a diffrent user. For this I used 2 diffrrent authentcation options. Login with Github and a username and password setup. For Github I just used their Github id number to determin what user they are in the projects databse. For the username nad password option I would hash the password then compare the inputed password (hashed) to the stored hash for the specific user. The rest of the auth such as cookies is handled by NextAuth</p>

            <h2>Account management</h2>

            <p>There are diffrent options for each account in account settings. The account mangement was pretty simple exept the pfp. The pfp was uploaded by the user than on the client side was converted into a string using the <code>FileReader</code> api. Then once its a string the API request is made to change the users pfp and the pfp is stored in the db as a string. Everything else with the user was already a string making it simple to manage</p>

            <h2>Rooms</h2>

            <p>In the database rooms only have and id and name. The members are determined by the user tables. Each user has a column for a comma seperated list of room ids they are a member of.</p>

            <h2>Misc DB stuff</h2>

            <p>The following columns have the data type <code>int</code> but keep in mind the value is unix epoch time that is gotton from <code>new Date.now()</code>.</p>

            <ul>
                <li>
                    <code>messages</code> table
                    <ul>
                        <li>created</li>
                    </ul>
                </li>
                <li>
                    <code>users</code> table
                    <ul>
                        <li>recentlyActive</li>
                    </ul>
                </li>
            </ul>

            <h2>Reactions</h2>

            <p>Users can react to messages. Unlike discord messages users can only react with 3 diffrent reactions. 👍 (+1), 👎 (-1) and ♥️ (heart). Users can react with all 3 at once. In the database it is stored as what users (ids) reacted with each reaction on each message (stored as a comma sepreated list). This means users cant react with the same reaction twice (on the same message) and for the number of reactions on a message to be easily figrued out.</p>

            <h2>Data validation</h2>

            <p>Data validation is done both on the client and sever side. It is done on the client side to speed up a response to the user as there is no waiting for the sever and it is also done to reduce the load on the server. It is then done again on the server to prevent damage and stop bad actors. Then user data is not direclty put into the SQL statments either. It is put into prepared statmets to prevent SQL injection.</p>
        </>
    );
};

export default ChatApp;