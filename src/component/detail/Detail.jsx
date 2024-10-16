import "./detail.css"

const Detail = () => {
    return (
        <div className="detail"> 
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="tittle">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="tittle">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="tittle">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="tittle">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">

                                <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" 
                                    alt="" 
                                />
                                <span>Photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">

                                <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" 
                                    alt="" 
                                />
                                <span>Photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">

                                <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" 
                                    alt="" 
                                />
                                <span>Photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">

                                <img src="https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA" 
                                    alt="" 
                                />
                                <span>Photo_2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="tittle">
                        <span>Shared files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>

    )
}

export default Detail;