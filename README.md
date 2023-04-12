# BlackHistoryFacts

BlackHistoryFacts is a web application built using ReactJS that provides users with positive contributions made by historically marginalized groups. The app aims to challenge false narratives that link race with positive contributions to society and shed light on the pervasive nature of systemic racism.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Features and Functionality](#features-and-functionality)
- [Contributing](#contributing)

## Installation Instructions

To install and run the application on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/asiakay/history-fact-app.git`
2. Navigate to the project directory: `cd history-fact-app`
3. Install dependencies: `npm install`
4. Run the application: `npm start`
5. Open your web browser and navigate to `http://localhost:3000`

## Features and Functionality

| Features                          | Priority | Ease to Implement | Doing | Done |
| --------------------------------- | -------- | ----------------- | ----- | ---- |
| Styled HTML/CSS components        |          |                   |       | [x]  |
| React Hooks to manage state       |          |                   |       | [x]  |
| JSON Database                     |          |                   |       | [x]  |
| Mobile Responsiveness             | High     | High              | [x]   |      |
| Accessibility                     | High     | Medium            | [x]   |      |
| Search Functionality              | High     | Medium            | [x]   |      |
| User Authentication               | High     | High              |       |      |
| Social Sharing                    | Medium   | Low               |       |      |
| Multi-Language Support            | Medium   | Medium            |       |      |
| User Profiles                     | Medium   | High              |       |      |
| Integration with External APIs    | Medium   | Medium            |       |      |
| Commenting System                 | Low      | Medium            |       |      |
| Gamification/Interactive Elements | Low      | Low               |       |      |
| Virtual Tours                     | Low      | High              |       |      |

## Contributing

We welcome contributions to the HistoryFacts project. If you encounter a bug, have a feature request, or want to contribute code, please follow these guidelines:

### Bug Reports and Feature Requests

1. Check the [issue tracker](https://github.com/asiakay/history-fact-app/issues) for existing bugs and feature requests before opening a new issue.
2. If you don't find an existing issue, open a new issue and describe the bug or feature request in detail.
3. Assign the appropriate labels to the issue.

### Code Contributions

1. Fork the repository and create a new branch for your feature or bug fix: `git checkout -b feature-branch-name`
2. Make changes to the code and commit them with a descriptive message: `git commit -m "Add new feature"`
3. Push your changes to your forked repository: `git push origin feature-branch-name`
4. Open a pull request and describe the changes you've made.

## License

[MIT](https://github.com/asiakay/history-fact-app/blob/main/LICENSE)

 <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
