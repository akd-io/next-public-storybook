# Public Storybook with Next.js

This simple repository shows how you can build and deploy your [Storybook](https://storybook.js.org/) together with your [Next.js](https://nextjs.org/) application.

## How to publicly deploy storybook with Next.js

- Use an existing Next.js project, or create a new one with `yarn create next-app`.
- Install Storybook if you havn't already, with `npx sb init`.
- In your `package.json` file,
  - Modify the `build-storybook` script to output to the `/public/storybook` folder with
    ```
    scripts: {
      ...
      "build-storybook": "build-storybook -o ./public/storybook"
      ...
    }
    ```
  - Modify the `build` script to build the storybook before the Next.js application.
    ```
    scripts: {
      ...
      "build": "yarn build-storybook && next build"
      ...
    }
    ```
- Add `/public/storybook` to your `.gitignore`, to avoid your Storybook output being added to your git repository.
- If you are deploying to a platform like Vercel:
  - Make sure that your hosting platform's build command is `yarn build` or `npm build`, and not `next build`. This will ensure that your deployment platform will build your Storybook before your Next.js application.

Congratulations! 🎉🎊 Now your storybook will be accessible at `your-site.com/storybook/index.html`
