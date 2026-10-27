# Project Instructions — Junior Website Builder Assignment

## 1. Project Overview

**Project:** Marci Metzger Real Estate Homepage Redesign

**Reference Website:** https://marcimetzger.com/

**Objective:** Redesign the reference website's homepage into a professional, elegant, modern, user-friendly, and responsive real estate website.

This is a Junior Website Builder hiring assessment. The implementation must demonstrate thoughtful design decisions, technical understanding, attention to detail, and the ability to follow the assignment requirements.

## 2. Technology Stack and Applications

Use the following tools and technologies throughout the project:

- **Frontend Framework:** React
- **Development Language:** JavaScript and JSX
- **Styling:** CSS
- **Working Environment:** Visual Studio Code (VS Code)
- **AI Coding Assistant:** OpenAI Codex for VS Code
- **Version Control and Repository:** Git and GitHub (private repository)
- **Hosting and Deployment:** Vercel
- **Browser Testing:** Chrome or another modern browser with responsive developer tools

Use Vite to scaffold the React application unless an existing project structure makes another setup more appropriate.

Keep the implementation simple, maintainable, and appropriate for a single-page website. Avoid introducing additional frameworks, libraries, or dependencies unless they provide a clear benefit.

## 3. Assignment Requirements

- Redesign the homepage only. Do not recreate the entire reference website.
- Preserve all original homepage content, including headings, paragraphs, business information, navigation items, calls to action, contact details, and relevant images.
- Download and reuse appropriate original images directly from the reference website.
- Improve the design rather than copying the original layout.
- Maintain the business's identity and ensure the website suits a professional real estate business.
- Create a responsive layout for mobile, tablet, and desktop.
- Ensure the website is user-friendly, visually polished, accessible, and functional.
- Deploy the finished website to Vercel using the project's GitHub repository.
- Provide a publicly accessible website URL for submission. Do not submit the GitHub repository URL as the website deliverable.

## 4. Phase One — Reference Website Analysis

Before writing code, inspect the existing project and analyze the reference homepage.

Identify:

1. The original homepage's section structure and content.
2. All headings, paragraphs, navigation items, links, and calls to action.
3. All relevant images and visual assets.
4. Existing colors, typography, branding, and design patterns.
5. Interactive elements and their expected behavior.
6. Opportunities to improve the layout, hierarchy, readability, navigation, and user experience.

Create a content inventory that can be used to verify that all required original content is retained.

Do not invent missing business information, property listings, testimonials, reviews, or other factual claims.

If the reference website cannot be accessed directly, explain the limitation and ask me to provide screenshots or other necessary materials.

Do not begin implementation until I approve the proposed design direction.

## 5. Phase Two — Design Planning

Propose a design direction that is:

- Elegant, clean, and professional.
- Appropriate for a real estate business.
- Visually distinctive rather than a generic AI-generated template.
- Focused on high-quality photography and clear visual hierarchy.
- Consistent in typography, spacing, colors, and component styles.
- Easy to navigate and accessible across screen sizes.

Explain the planned homepage layout, major design changes, and how those changes improve the original reference website.

You may reorganize sections and improve visual presentation, provided all required original content is preserved.

Avoid unnecessary animations, excessive decorative elements, overcrowded sections, and visual effects that distract from the content.

Wait for my approval before proceeding with implementation.

## 6. Phase Three — React Implementation

Build the homepage using React, JSX, and CSS.

### Project structure

Organize the project into sensible folders and reusable components. For example:

- `src/components/` — reusable interface components.
- `src/sections/` — homepage sections.
- `src/assets/` — local images and other assets.
- `src/styles/` — global styles and shared styling.
- `src/App.jsx` — main application composition.
- `src/main.jsx` — application entry point.
- `public/` — static assets when appropriate.

Adapt this structure when the project requires a simpler or more appropriate arrangement.

### Implementation requirements

- Use reusable React components where appropriate.
- Keep components focused and maintainable.
- Use semantic HTML and accessible form labels.
- Use descriptive alternative text for meaningful images.
- Ensure navigation, links, buttons, and interactive elements work as intended.
- Use appropriate hover, focus, and active states.
- Handle image loading and missing assets appropriately.
- Avoid unnecessary dependencies and duplicated code.
- Preserve all required content and working functionality.
- Do not introduce a backend or database unless a requirement genuinely needs one.

Do not replace real functionality with fake interactions or placeholder data. If an integration requires external configuration, explain what is needed.

## 7. Phase Four — Responsive Design

The website must work on mobile, tablet, and desktop.

Use these representative test viewports:

- Mobile: 375 × 812 px.
- Tablet: 768 × 1024 px.
- Desktop: 1440 × 900 px.

Check that:

- Navigation is usable on every screen size.
- Text remains readable.
- Images scale and crop appropriately.
- Buttons and interactive elements are touch-friendly.
- Sections and columns rearrange appropriately.
- No elements overlap or overflow.
- No unintended horizontal scrolling occurs.
- The page maintains a consistent visual hierarchy.

Test the actual rendered website instead of relying only on CSS inspection.

## 8. Phase Five — Quality Assurance

Before deployment, verify:

- All required homepage content is present.
- Original images have been reused appropriately.
- No broken image paths or missing assets remain.
- Navigation and calls to action work.
- Interactive elements behave as expected.
- Responsive layouts have been inspected at the required viewport sizes.
- There are no obvious browser console errors.
- The production build completes successfully.
- The website works when served as a production build.

Report which checks passed, failed, or could not be performed.

Do not claim that something has been tested unless it has actually been tested.

## 9. Phase Six — GitHub and Version Control

Use Git for version control and maintain the project in my private GitHub repository.

- Keep the repository private during development.
- Make meaningful commits after completing significant milestones.
- Do not commit API keys, passwords, tokens, or other secrets.
- Use `.gitignore` to exclude `node_modules`, build artifacts when appropriate, local environment files, and other unnecessary files.
- Never overwrite or delete existing project files without understanding their purpose.
- Review changes before committing them.
- Keep the repository organized and ready for deployment.

Do not make the repository public simply to make the website accessible. Configure Vercel to deploy the private repository while keeping the source code private.

## 10. Phase Seven — Vercel Deployment

Deploy the React application to Vercel using the connected GitHub repository.

- Configure the correct project root and build settings.
- Use the appropriate build command for the selected React setup.
- Verify the production build succeeds.
- Check the deployed website URL after deployment.
- Test the live site for broken assets, routing issues, layout problems, and nonfunctional interactions.
- Ensure the published website can be viewed without requiring authentication.
- Keep the GitHub source repository private.

Do not claim deployment is complete until the production website is published and its URL has been verified.

If account access or configuration requires my action, provide clear instructions rather than assuming access.

## 11. Phase Eight — Assignment Deliverables

Help me prepare the required submission materials.

### A. Website URL
Provide the verified public Vercel URL.

### B. Updated resume
Remind me to include my mobile number. Do not invent or assume my contact information.

### C. Brief implementation note
Prepare a concise note describing:

- Tools and frameworks used.
- One specific design decision.
- How that design decision improved the original homepage.

Ensure the note reflects the actual implementation.

### D. Submission email
Prepare an email draft using the subject format:

`Junior WB Applicant Home Project - Given Name Surname`

Use the submission recipient specified in the assignment brief. Do not send the email without my explicit authorization.

## 12. AI Coding and Collaboration Rules

I am using Codex as a coding assistant, but I must understand and be able to explain my work during a potential interview.

- Explain important technical and design decisions in beginner-friendly language.
- Inspect the existing implementation before making changes.
- Ask before making major architectural changes.
- Do not rewrite working components unnecessarily.
- Keep changes focused on the requested task.
- Explain which files were changed and why.
- Help me understand React components, CSS responsiveness, and deployment.
- Encourage me to review and adapt the code rather than blindly accept generated output.
- Do not claim I personally implemented, tested, or understood something unless I actually did so.

## 13. Working Process

Work through the assignment in stages:

1. Inspect the repository and project structure.
2. Analyze the reference website and create the content inventory.
3. Propose the visual direction and homepage structure.
4. Wait for my approval.
5. Implement the React homepage in manageable stages.
6. Review the rendered result and make targeted improvements.
7. Test functionality and responsive layouts.
8. Verify the production build.
9. Deploy to Vercel through the private GitHub repository.
10. Verify the live website and prepare the final submission materials.

After each major stage, summarize what was completed, which files were affected, what needs my review, and what remains.

**Final objective:** Deliver a distinctive, professional, responsive, single-page real estate homepage that preserves the required original content, improves the reference design, uses React, is maintained in a private GitHub repository, and is publicly accessible through Vercel.