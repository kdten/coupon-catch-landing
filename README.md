# Coupon Catch Landing Page (Next.js landing for mobile app)
A Typescript, React, Next.js landing page optimized for amazing SEO metrics, near-perfect Green WebVitals, Sendgrid/MailChimp integration, and more.

**Link to project:** http://www.couponcatchapp.com/

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/kdten/kdten/blob/main/cclandingpreview.gif?raw=true" alt="Logo">
  </a>
</div>

## Built with:

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs)
![StyledComponents](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Amazon AWS](https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws)
![Firebase](https://img.shields.io/badge/Firebase-232F7E?style=for-the-badge&logo=firebase)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-black?style=for-the-badge&logo=google-cloud)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)
![Git](https://img.shields.io/badge/-Git-black?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github)
![ESLint](https://img.shields.io/badge/ESLint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flatsquare&logo=Postman&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

This app was developed with a vision to launch into app stores in the future. After discussing Expo, Ionic React was chosen in favor of singlifying development to a single codebase. Google Cloud Document AI leverages basic OCR features while a custom algorithm on the Express backend assigns data to the receipts. The Node Express backend also handles Stripe API including triggering webhooks.

## Optimizations

* Implemented AWS Codepipeline for CI/CD decreasing development time.
* Ionic React produces Apple, Android and Web App from singular codebase.
* Reduced Largest Contentful Paint from 1.2 seconds to .65 seconds.

## Lessons Learned:

Devops is a whole other ballgame. It's one thing to build it, but it's another to make sure it has high availability and scalability. This project was started with a now deprecated service, which added delay to our schedule, showing one should never rely on anything working forever.
