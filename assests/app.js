const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to Our Website</h1>
            <p>This is the home page.</p>
            <nav>
                <a href="about.php">About Us</a>
                <a href="contact.php">Contact Us</a>
            </nav>
        </div>
    );
};

const AboutPage = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>We are a small business offering amazing products and services.</p>
            <nav>
                <a href="index.php">Home</a>
                <a href="contact.php">Contact Us</a>
            </nav>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form action="process_contact.php" method="POST">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            <nav>
                <a href="index.php">Home</a>
                <a href="about.php">About Us</a>
            </nav>
        </div>
    );
};
