# Sai Sushma Pasupuleti - Personal Website 🔥

This website is a great introduction of me and my work. As a PhD student, I feel it is important to share what I learn and I will make this site as exciting and as informative as possible.

Demo: [https://haydenconstas.com](https://haydenconstas.com)

<p align="left">
    <img width="600" height="auto" src="https://i.imgur.com/oAcf7tx.png" alt="screenshot" />
</p>

WARNING: This is using Svelte 5 which is not yet production ready.

## About Me 👨‍💻

I'm Sai Sushma Pasupuleti, a Doctoral Student at University of Houston. I'm an electrical engineering student and I specialize in design and control of power electronics. I'm passionate about working on providing solutions to the real-world problems. I believe it is important to be in a constant state of learning, and more importantly to use that learning. Other thank work, I like to play badminton, dance to classical rythmns, and work on cool projects!

## Featured Projects 🚀

- **Gut Health Monitor** - IoT device for dietary feedback with full-stack development and ML integration
- **AIAA Build Design Fly Competition** - Leading a 20-person team designing a 6ft RC plane for competition
- **Pipeline Integrity Device** - MVP device that secured $200k in seed funding with Chevron
- **Baby Monitor** - IoT device for diaper change detection using biology and hardware integration
- **Robot Creation** - OpenCV and PID controller robot for ArUco marker navigation
- **Power Supply Board** - PCB design using Eagle software
- **Custom Shirts** - Brand building and business development

## Features ✨

- Responsive design, mostly using Tailwind CSS.
- Contact form modal that can be integrated with SendGrid or Mailgun with basic configuration.
- Hero Section with personal introduction.
- About Section highlighting engineering background.
- Work timeline with entrepreneurship and engineering experience.
- Projects section with 3D model viewers and interactive elements.
- Education section with academic achievements.
- Basic footer with navigation links.

Everything is on one page, which works for what I need right now.

## Install and Run ▶️

1. Clone this repository

   ```
   git clone https://github.com/haydenconstas/hayden_cv
   ```

2. Go into the repository

   ```
   cd hayden_cv
   ```

3. Rename the file .env.example to .env.local

   3.1 Linux

   ```
   mv .env.example .env.local
   ```

   3.2 Windows

   ```
   ren .env.example .env.local
   ```

4. Install dependencies

   ```
   npm install
   ```

5. Start the project in development

   ```
   npm run dev
   ```

Open your browser and go to `http://localhost:5173`.

DON'T remove any variables from the .env file, as this will break the build, instead just set anything you don't need to empty.
