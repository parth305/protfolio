import React from 'react'
import blankImage from "../assets/images/blank-image.png"
const Projects = () => {
    return (
        <div id="projects" className='bg-gray-400'>
            <h1 className="text-center font-bold pt-14 text-2xl">Projects</h1>
            <section className="project-card-list">
                <a target="_blank" href="https://magic-notes-dusky.vercel.app/" className="project-card">
                    <header className="project-card-header">
                        <p>java script , bootstrap</p>
                        <h2>Magic Notes</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>a website made using java script in which you can create your personal notes with title yo them and delete them whenever you want. this requires no login.</p>
                    </div>
                </a>
                <a href='https://library-website-six.vercel.app/?' target="_blank" className="project-card">
                    <header className="project-card-header">
                        <p>Java Script, Bootstrap</p>
                        <h2>library website</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>A website site made with javascript where you can add new book with title,author and Genre.you  can also delete that book </p>
                    </div>
                </a>
                <a href='https://text-tools-alpha.vercel.app/' target='_blank' className="project-card">
                    <header className="project-card-header">
                        <p>React</p>
                        <h2>Text tools</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>Online text manupulation web app where you can enter text amke it uppercase,lowercase, delete extra space,copy to clipboard. you can also enable dark mode</p>
                    </div>
                </a>
                <a href='https://github.com/parth305/Social-Media-App' target="_blank" className="project-card">
                    <header className="project-card-header">
                        <p>MERN stack , Redux</p>
                        <h2>Social Media app</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>A MERN web app that let user create account with email or google and then create new post, edit or delete them.You can also view, like and comment on other people's posts </p>

                    </div>
                </a>
                <a target="_blank" href='https://github.com/parth305/E-commerce-website' className="project-card">
                    <header className="project-card-header">
                        <p>Next.js,redux,node,Mongodb</p>
                        <h2>E-commerce app</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>E-commerce app that let user create new account with email or login with existign account.then let them view and search diffrent products and add them to cart.</p>
                    </div>
                </a>
                <a target="_blank" href='https://www.github.com/parth305/chat-system' className="project-card">
                    <header className="project-card-header">
                        <p>Python, Socket</p>
                        <h2>Chat System</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>a chat system with python socket where you can chat with another person in same local network with the help you'r command line interface</p>
                    </div>
                </a>
                               
                <a target="_blank" href='https://www.github.com/parth305/Currency-Converter ' className="project-card">
                    <header className="project-card-header">
                        <p>python thread, tkinter</p>
                        <h2>Live currency covertor</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>A real time currency covertor app made in tkinter python gui framework using python thread and live currency api</p>
                    </div>
                </a>
                <a target="_blank" href='https://www.github.com/parth305/flappy-bird-game ' className="project-card">
                    <header className="project-card-header">
                        <p>pygame</p>
                        <h2>Flappy bird game</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>Flappy bird game made using pygame</p>
                    </div>
                </a>
                <a target="_blank" href='https://www.github.com/parth305/snake-game-java' className="project-card">
                    <header className="project-card-header">
                        <p>java swing</p>
                        <h2>Snake Game</h2>
                    </header>
                    <div className="project-card-content">
                        <img src={blankImage} alt="" srcset="" />
                        <p>A classic Snake game made using java swing GUI library </p>
                    </div>
                </a>
            </section>
        </div>
    )
}

export default Projects
