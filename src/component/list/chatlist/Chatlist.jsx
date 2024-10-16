import './chatlist.css';
import { useState } from 'react';


const Chatlist = ()=>{
    const [add,setAdd] = useState(false);
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='search'/>
                </div>
                <img 
                    style={st} 
                    src={add ? './minus.png' : "./plus.png"} 
                    alt="" 
                    onClick={()=>setAdd((prev)=>!prev)}
                />
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='item'>
                <img className='image' src="./avatar.png" alt="" />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}




const st = {
    width: '36px',
    height: '36px',
    backgroundColor: 'rgb(17,25,40,0.5)',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer'
}


export default Chatlist;