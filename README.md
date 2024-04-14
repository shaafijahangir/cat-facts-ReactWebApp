# Cat Facts App 🐱
Hello! I'm glad you dropped by to check out the Cat Facts App. This is a small project I developed as a fourth-year computer science student to demonstrate the practical application of modern web technologies. It’s designed to showcase how a React application can handle seamless navigation and connect to external API endpoints effectively.
## What's This All About?
The Cat Facts App offers a simple yet engaging user experience where you can:
- **Learn Random Cat Facts**: With a simple button click, learn something new and interesting about cats every time.
- **Experience Seamless Navigation**: Thanks to React Router, you can switch between the Home and About pages seamlessly without any page reloads, which enhances user experience.
## Built Using
- **React**: Utilized for building the user interface, managing state with hooks, and responding dynamically to user interactions.
- **React Router**: Employs client-side routing to enable smooth and seamless transitions between different views without reloading the browser.
- **Fetch API**: Connects to the `catfact.ninja` API to fetch random facts, demonstrating effective integration with external RESTful services.
## Running the App Locally
Here’s how to get the app up and running on your local machine:

1. First, clone the repository:
   ```bash
   git clone https://github.com/<your-username>/cat-facts-app.git
   ```

1. Navigato into the project directory:
   ```bash
   cd cat-facts-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm start
   ```
Then, open http://localhost:3000 in your browser to see the app in action.
Contribution
Your contributions are welcome! If you have improvements or ideas, feel free to fork the repository and submit a pull request. For bigger changes or suggestions, please open an issue first so we can discuss it. If you want to contribute, I had removed React.StrictMode as it addresses the immediate issue of double fetching during development, a better approach would be to keep React.StrictMode for its developmental benefits.
