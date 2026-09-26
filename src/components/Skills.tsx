function Skills() {
    return (
        <section className="skills-section">
            <div className="skills-content">
                <section id={"skills"}>
                <h1 className="skills-title">Skills</h1>
                </section>
                <div className="skills-grid">
                    <div className="skills-group">
                        <h2>Languages</h2>
                        <p>Rust, Lua, TypeScript, C#, HTML, CSS</p>
                    </div>

                    <div className="skills-group">
                        <h2>Frameworks</h2>
                        <p>React, Tauri, Bevy ECS</p>
                    </div>

                    <div className="skills-group">
                        <h2>Tools</h2>
                        <p>Git, GitHub, Linux</p>
                    </div>

                    <div className="skills-group">
                        <h2>Engineering</h2>
                        <p>Algorithms, caching, memoization, debugging, API design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills