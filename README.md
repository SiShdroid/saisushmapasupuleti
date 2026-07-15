# Sai Sushma Pasupuleti - Personal Website 🔥

This website is a great introduction of me and my work. As a PhD student, I feel it is important to share what I learn and I will make this site as exciting and informative as possible.

Demo: [https://saisushmapasupuleti.com](https://saisushmapasupuleti.com)

<p align="left">
    <img width="600" height="auto" src="https://i.imgur.com/oAcf7tx.png" alt="screenshot" />
</p>

WARNING: This is using Svelte 5 which is not yet production ready.

## About Me 👨‍💻

I'm Sai Sushma Pasupuleti, a Doctoral Student at University of Houston. I'm an electrical engineering student and I specialize in design and control of power electronic converters. I'm passionate about working on providing solutions to the real-world problems. I believe it is important to be in a constant state of learning, and more importantly to use that learning. Outside work, I like to play badminton, dance to classical rythmns, and cook different cultural dishes!

## Featured Projects 🚀

- **Wireless Power Transfer** - A wireless charger for real-world EVs, built using the inductive coupling method
- **3D LED** - A 6*6 3D LED structure that displays various patterns 
- **Floor cleaning robot** - Detects water spill and cleans it with inbuilt equipment
- **SCADA Monitoring System** - Uses GPS to detect failures in a electrical substation
- **Line follower Robot** - A robot that follows the black line and races to the end of it.
- **Power Supply Boards** - Worked on building 4 PCB boards using either Altium and KiCAD softwares

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
