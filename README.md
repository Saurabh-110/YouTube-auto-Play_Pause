<div align="center">

<img src="https://www.google.com/search?q=https://placehold.co/600x200/2F3136/FFFFFF%3Ftext%3DYouTube%2BAuto%2BPlay/Pause%26font%3Dlato" alt="Project Banner">

YouTube Auto Play/Pause
<p>
<strong>A modern browser extension that automatically pauses and plays YouTube videos when you scroll them in and out of view.</strong>
</p>

<p>
<a href="#-features">Features</a> •
<a href="#-getting-started">Getting Started</a> •
<a href="#-how-it-works">How It Works</a> •
<a href="#-contributing">Contributing</a>
</p>


<br>

</div>

Never miss a moment! Automatically pauses a YouTube video when it's out of sight and resumes it when you scroll back. Perfect for when you get distracted by the comment section.

✨ Features
⏯️ Smart Playback Control: Intelligently pauses and plays the video based on its visibility.

🚀 High Performance: Utilizes the modern IntersectionObserver API to ensure no impact on your browser's speed.

🕊️ Feather-Light: Built with minimal, clean code. It's fast, efficient, and consumes virtually no system resources.

🧩 Zero Configuration: Works right out of the box. Just install it and enjoy a seamless YouTube experience.

🚀 Getting Started
Getting this extension up and running is as simple as a few clicks.

Installation Guide
Load the extension as "unpacked" in any Chromium-based browser (like Chrome, Brave, or Edge).

Clone the Repo:

git clone [https://github.com/Saurabh-110/YouTube-auto-Play_Pause.git](https://github.com/Saurabh-110/YouTube-auto-Play_Pause.git)

(Or download the ZIP and extract it)

Navigate to Extensions: Open your browser and go to chrome://extensions/.

Enable Developer Mode: Find the "Developer mode" switch and turn it on.

Load the Extension: Click Load unpacked and select the cloned project directory.

You're all set! The extension is now active and will work on any YouTube video page.

Usage
The extension is fully automatic.

Scroll away from a video, and it will pause.

Scroll back, and it will resume right where you left off.

⚙️ How It Works
Under the hood, the extension uses a content script to interact with YouTube pages.

Script Injection: The script is injected into the YouTube page and waits for the video player to load.

Observer Initialization: An IntersectionObserver is created to watch the video player element.

Visibility Tracking: The observer is configured with a visibility threshold.

Playback Control:

When the player becomes less visible than the threshold (you scroll away), the script programmatically calls the pauseVideo() method.

When the player becomes more visible than the threshold (you scroll back), it calls the playVideo() method.

This modern approach guarantees a smooth user experience without the performance overhead of traditional scroll event listeners.

🤝 Contributing
Contributions make the open-source community an amazing place to learn, create, and inspire. Your contributions are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
