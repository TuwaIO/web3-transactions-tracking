# Landing Page: TUWA Web3 Transaction Tracking Suite

This directory contains the source code for the official landing page for the TUWA suite. This website serves as the main entry point for new users and developers, providing a high-level overview of the project's capabilities and directing them to key resources.

The site is designed to be fast, visually appealing, and SEO-friendly, acting as the "front door" to the entire ecosystem.

## Key Technologies

* **Next.js** - The React Framework for Production
* **React** - UI Library
* **Tailwind CSS** - For modern and responsive styling
* **Framer Motion** - For smooth animations and transitions

## Project Goals

* Provide a concise and compelling overview of the TUWA Transaction Tracking Suite.
* Showcase the key features and benefits of using the packages.
* Direct users to the full **[Documentation Site](https://www.google.com/search?q=%23)** for in-depth guides and API references.
* Provide clear links to the **[GitHub Repository](https://www.google.com/search?q=%23)** to encourage community contribution.

## Running Locally

To run the landing page website on your local machine, follow these steps:

1.  **Install Dependencies:**
    Make sure you have run `pnpm install` from the root of the monorepo to install all required dependencies.

2.  **Start the Development Server:**
    Run the following command from the root of the monorepo:

    ```bash
    pnpm --filter main dev
    ```

    The site will be available at **http://localhost:3000**.

3.  **Build for Production:**
    To generate a static build of the website, run:

    ```bash
    pnpm --filter main build
    ```

4.  **Preview Production Build:**
    To preview the generated static site locally, run:

    ```bash
    pnpm --filter main start
    ```

## Project Structure

* **/app**: Contains the main page routes, following the Next.js App Router convention.
* **/components**: Holds the reusable React components used to build the landing page sections (e.g., `HeroSection`, `FeatureList`, `Footer`).
* **/public**: Stores all static assets like images, logos, and fonts that are used on the site.