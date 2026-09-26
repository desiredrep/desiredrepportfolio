function Projects() {
    return (
        <section className="projects-section">
            <section id={"projects"}>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            </section>
            <div className="projects-grid">
                
                <div className="project-one">
                    <h1 className="projects-title">
                        Razz Networks
                    </h1>

                    <p className="projects-description">
                        An ambitious GMOD server project that involved modernizing
                        existing addons, rewriting systems, and experimenting with
                        modern optimization methods within the limits of the Source Engine.
                    </p>

                    <p className="projects-description">
                        Worked with caching, lazy loading, memoization, algorithms,
                        validation, sanity checks, honeypots, GitHub, project management,
                        collaboration, debugging, API modifying/creation,
                    </p>

                    <p className="projects-description">
                        administrative & staff tool creation and race-condition handling.
                    </p>

                    <p className="projects-language">
                        GMOD LUA
                    </p>
                </div>

                <div className="project-two">
                    
                    <h1 className="projects-title">
                        This portfolio website
                    </h1>
                    
                    <p className="projects-description">
                        A portfolio website built with React and TypeScript, using HTML
                        and CSS for its structure and presentation.
                    </p>

                    <p className="projects-language">
                        HTML, CSS, React, TypeScript
                    </p>
                </div>

                <div className="project-three">
                    <h1 className="projects-title">
                        RGameBackend
                    </h1>

                    <p className="projects-description">
                        A small experimental MMORPG back end utilizing Rust and Bevy's ECS.
                    </p>

                    <p className="projects-language">
                        Rust
                    </p>
                </div>

                <div className="project-four">
                    <h1 className="projects-title">
                        Misc Tauri Projects
                    </h1>

                    <p className="projects-description">
                        Experimental desktop applications built with Tauri, using Rust for
                        the backend and React, TypeScript, HTML, and CSS for the frontend.
                    </p>

                    <p className="projects-language">
                        Rust, Tauri API, HTML, CSS, React, TypeScript
                    </p>
                </div>

                <div className="project-five">
                    <h1 className="projects-title">
                        Early Projects
                    </h1>

                    <p className="projects-description">
                        Early programming projects involving Roblox, Unity, and Garry's Mod
                        that helped establish my foundation in scripting and game development.
                    </p>

                    <p className="projects-language">
                        GMOD LUA, ROBLOX LUA, C#
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Projects;