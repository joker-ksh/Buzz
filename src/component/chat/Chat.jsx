import "./chat.css";
import Emoji from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";


const Chat = () => {
    const [show,setshow] = useState(false);
    const [text,setText] = useState("");
    
    const handleClick = (e) =>{
        setText(text + e.emoji);
    }

   
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jonh Doe</span>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
              </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                    <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim earum ratione distinctio voluptatem deserunt minus perspiciatis corrupti laborum eos, recusandae optio consequatur at veritatis, beatae provident aliquid soluta.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icon">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    onChange={(e)=>setText(e.target.value)}
                    value={text}
                />
                <div className="emoji">
                    <img 
                        src="./emoji.png" 
                        alt="" 
                        onClick={()=>setshow(prev => !prev)}
                    />
                    <div className="picker">
                        <Emoji open={show}  onEmojiClick={handleClick}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat;