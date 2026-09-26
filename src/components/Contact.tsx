function Contact() {
    const openDiscord = () => {
        const appUrl = "discord://-/users/843590309573165056";
        window.location.href = appUrl;
    };
    const openGithub = () => {
        const webUrl = "https://github.com/desiredrep";
        window.open(webUrl, "_blank", "noopener,noreferrer");
    };
    
    return (
        <section className="contact-section">
            <section id="contact">
                <div className="contact-content">
                    <h1 className="contact-title">
                        Contact Me
                    </h1>

                    <p className="contact-info">
                        <button onClick={openDiscord}>
                            Discord: desiredrep
                        </button>
                        <button onClick={openGithub}>
                        Github: desiredrep
                        </button>
                    </p>
                </div>
            </section>
        </section>
    );
}

export default Contact;