# Documentation: TUWA Web3 Transaction Tracking Suite

This directory contains the source code for the official documentation website for the TUWA Web3 Transaction Tracking Suite.

The site is built using **Nextra**, a powerful static site generator based on **Next.js** and MDX. It provides a fast and interactive experience for learning how to use the TUWA suite of packages.

## Key Technologies

* **Next.js** - The React Framework
* **Nextra** - Static Site Generator for documentation
* **React** - UI Library
* **MDX** - Markdown with JSX components

## Running Locally

To run the documentation website on your local machine and see your changes live, follow these steps:

1.  **Install Dependencies:**
    Make sure you have run `pnpm install` from the root of the monorepo to install all required dependencies for the entire project.

2.  **Start the Development Server:**
    Run the following command from the root of the monorepo:

    ```bash
    pnpm --filter docs dev
    ```

    The documentation site will now be available at **http://localhost:3000**. The server supports Fast Refresh, so your changes to the documentation files will be reflected instantly.

3.  **Build for Production:**
    To generate a static build of the website, run:

    ```bash
    pnpm --filter docs build
    ```

4.  **Preview Production Build:**
    To preview the generated static site locally, run:

    ```bash
    pnpm --filter docs start
    ```

## Contributing

We welcome contributions to improve our documentation\! If you find an error or want to add a new guide, please feel free to open a pull request.

* **Content and Structure:** The entire documentation structure, including the sidebar navigation, is generated **automatically** based on the file and folder hierarchy within the `content` directory. To add a new page, simply create a new `.md` or `.mdx` file in the desired location.

* **Customizing Order and Titles:** To change the order of pages or customize their titles in the sidebar for a specific section, you can create a `_meta.json` file inside its folder. You can learn more about this in the official Nextra documentation.

* **Using Components:** The site supports MDX, which allows you to write interactive examples by embedding custom React components directly in your Markdown files.