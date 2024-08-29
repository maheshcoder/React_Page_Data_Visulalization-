
DATA SET : QualityWine

The dataset in question encompasses essential attributes that play apivotal role in the evaluation and understanding of wine quality.
 Fixed acidity denotes the non-volatile acids, particularly tartaric  acid. that contribute to the wine's overall acidity. impacting its taste
 and ability to age gracefully. Volatile acidity measures the presenceof volatile acids, primarily acetic acid, which it excessive, can
 introduce unwanted vinegar-like flavors. Gtrk acid, present in small quantities. enhances the wine's freshness and tartness.Residual sugar defines
 the wine's sweetness post fermentation, influencing its perceived taste. Chlorides quantify the salt content, affecting mouthfeel and flavor. Free
 and total sulfur .

BACKEND CODE:

1. Import Requried Modules:
   * Flask: A micro web framework for creating web applications.
   * CORS: A Flask extension for handling Cross-Origin Resource Sharing (CORS) headers.
   * MongoClient: A class from the pymongo library for connecting to MongoDB.
   * numpy as np: A library for numerical computations.
   * pandas as pd: A library for dataFrames.
   * json : A library for doing operation on json files
2. Create Flask App and Enable CORS:
 * An instance of the Flask app is created and named app.
 * CORS is enabled using CORS(app) to allow Cross-Origin requests.

3. Connect to MongoDB:
 * A connection to the local MongoDB server is established using MongoClient.

4. Fetch Data from MongoDB:
 * Data from the 'K-hub' collection in the 'data' database is fetched.

5. Route for Mean:
 * A route '/mean' is defined for calculating and returning the mean of a particular value.
 * The np.mean() function is used to compute the mean.

6. Route for Maximum:
 * A route '/maximum' is defined for calculating and returning the maximum of a particular value.

7. Route for Variance:
 * A route '/variance' is defined for calculating and returning the variance of a particular value.
 * The np.var() function is used to compute the variance.

8. Route for Standard Deviation:
 * A route '/std_deviation' is defined for calculating and returning the standard deviation of a particular value.

9. Route for Median:
 * A route '/median' is defined for calculating and returning the median of a particular value.
 * The np.median() function is used to compute the median.

10. Route for Minimum:
 * A route '/Minimum' is defined for calculating and returning the Minimum of a particular value.

11.Running the Flask App:
 * The app is run with the debug mode set to True, allowing for real-time debugging.

The provided code sets up a Flask backend to compute various statistics (mean, maximum, variance, standard deviation, median, interqualtierange) for marks data stored in a MongoDB database. The React frontend fetches this data from the backend and displays it along with barcharts using recharts. This setup allows users to visualize and analyze the characteristics of the dataset.

![Screenshot (79)](https://github.com/RCTS-K-Hub/Aug_Team_05/assets/96939193/2ea68fd8-07d7-4531-802f-737f434351af)



FRONTEND CODE:

1. Importing React and CSS: 
The code starts by importing React, which is a JavaScript library for building user interfaces. Additionally, it imports CSS files for styling.

2. Footer Component (Footer.js):
 * This section defines a functional component named Footer. Components in React are reusable building blocks for user interface.
 * The Footer component is responsible for rendering the footer section of web application.
 * 
3. secondFooter component( SecondFooter.js)
    * An image of a Git logo is displayed, adding visual appeal.
    * Copyright information is provided, which includes the current year obtained using JavaScript's new Date().getFullYear() function and a copyright message.
 * The styles for this component are defined in an associated CSS file called 'Footer.css'.

3. Navbar Component (Navbar.js):
 * In this part of the code, another functional component named Navbar is created.
 * The purpose of the Navbar component is to render the header or navigation bar.
 * Inside the Navbar:
    * The application name or logo, which is "K-Hub React Practice App" in this case, is displayed prominently.
    * Styling for this component is managed through CSS classes defined in the 'NavbarStyles.css' file.
 * Slides Component (body.js):
    * The slides component is the main content area of our application. It handles the display of various statistics and visualizations.
4. Key functionalities of this component:
 * Data Fetching: 
    * It utilizes React's useState and useEffect hooks for managing data fetching and rendering.
 * Fetching Data: 
    * Data for metrics like mean, maximum, variance, standard deviation, median, and minimum is fetched from a Flask backend using the fetch function and API endpoints.
 * State Management: 
    * Fetched data is stored in state variables like mean, maximum, variance, etc., using the useState hook.
 * Histograms: 
    * For each metric, a histogram (bar chart) is created using the rechart library. These visualizations are then displayed within separate <canvas> elements.
 * About Data Section: 
    * The component also provides an informative section about the dataset. It includes an image ('newdata.png') and descriptive text explaining the dataset's characteristics.
 * The styles for this component are not explicitly mentioned but can be defined in a corresponding CSS file.

It is organized into components, each with a specific role. The Footer and Navbar components handle the layout and branding of our site. The Body component, on the other hand, is responsible for data fetching, visualization, and presenting dataset information. Together with the Flask backend, this code allows users to explore and analyze dataset statistics in a user-friendly manner.

![Project-khub](https://github.com/RCTS-K-Hub/Aug_Team_05/assets/96939193/8bc7824a-0f66-419b-8cde-a222c89754f8)

---------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.





