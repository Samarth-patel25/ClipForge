# ClipForge 🎬

### AI-Powered Viral Clip Generator

ClipForge is an AI-powered video analysis tool designed to identify potentially viral moments from long-form videos and automatically transform those moments into short, engaging clips.

The goal is to help content creators save time by automatically finding the most interesting moments instead of manually watching hours of footage.

---

## 🚀 Project Goal

A long video or livestream can contain multiple moments that have the potential to perform well as short-form content.

ClipForge aims to analyze the content and identify moments based on factors such as:

- 🔥 Emotional intensity
- 😂 Humor and reactions
- 😲 Unexpected moments
- 🎤 Important or interesting statements
- 👀 Audience engagement
- ⚡ High-energy moments
- 🎯 Short-form content suitability

The system will assign a **Virality Score** to potential moments and generate short clips from the highest-scoring segments.

> **Note:** A Virality Score is an AI-based prediction and does not guarantee that a clip will actually go viral.

---

## ✨ Planned Features

### 🎥 Video Analysis
- Upload long-form videos
- Extract audio and video information
- Generate video transcripts
- Analyze video content using AI

### 🤖 AI Viral Moment Detection
- Detect potentially interesting moments
- Analyze emotional and contextual signals
- Generate a Virality Score
- Explain why a moment was selected

### ✂️ Automatic Clip Generation
- Automatically cut selected moments
- Generate short-form clips
- Support vertical 9:16 format
- Add automatic captions/subtitles
- Prepare clips for platforms such as YouTube Shorts, Instagram Reels, and TikTok

### 📺 YouTube Integration
Planned support for:
- YouTube video analysis
- YouTube channel integration
- Creator-owned content processing
- Live-stream analysis

### 📊 Creator Dashboard
Planned dashboard features:
- Video processing status
- Detected viral moments
- Virality scores
- Clip previews
- Generated clips
- Clip management

---

## 🛠️ Technology Stack

### Frontend
- React
- Vite
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js

### AI & Processing
- Google Gemini API
- Whisper Speech-to-Text
- FFmpeg

### Database
- MongoDB

### APIs
- YouTube Data API
- YouTube Live Streaming API

---

## 🏗️ Planned Architecture

```text
                 ┌─────────────────┐
                 │     React       │
                 │    Frontend     │
                 └────────┬────────┘
                          │
                          ↓
                 ┌─────────────────┐
                 │ Node.js /       │
                 │ Express Server  │
                 └────────┬────────┘
                          │
              ┌───────────┼───────────┐
              ↓           ↓           ↓
          Gemini       Whisper      FFmpeg
            AI        Speech-to-Text  Video
              │           │           │
              └───────────┼───────────┘
                          ↓
                 ┌─────────────────┐
                 │ Viral Moment     │
                 │ Detection        │
                 └────────┬────────┘
                          ↓
                 ┌─────────────────┐
                 │ Virality Score  │
                 └────────┬────────┘
                          ↓
                 ┌─────────────────┐
                 │ Clip Generation │
                 └────────┬────────┘
                          ↓
                 ┌─────────────────┐
                 │ Ready-to-post   │
                 │ Short Clips     │
                 └─────────────────┘
```

---

## 📁 Planned Project Structure

```text
ClipForge/
│
├── client/
│   └── React frontend
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

The project structure will evolve as new features are implemented.

---

## 🔐 Environment Variables

API keys and sensitive configuration should **never be committed to GitHub**.

Example:

```env
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URI=your_mongodb_connection_string
YOUTUBE_API_KEY=your_youtube_api_key
```

Use a `.env` file locally and add it to `.gitignore`.

---

## ⚙️ Current Development Status

### Phase 1 — Project Setup
- [x] Project idea finalized
- [x] Project name finalized
- [ ] React frontend setup
- [ ] Node.js/Express backend setup
- [ ] GitHub repository setup

### Phase 2 — Video Processing
- [ ] Video upload
- [ ] Video storage
- [ ] FFmpeg integration
- [ ] Audio extraction
- [ ] Whisper integration

### Phase 3 — AI Analysis
- [ ] Transcript analysis
- [ ] Interesting moment detection
- [ ] Virality scoring
- [ ] AI explanation for selected moments

### Phase 4 — Clip Generation
- [ ] Automatic video cutting
- [ ] 9:16 conversion
- [ ] Automatic captions
- [ ] Clip preview

### Phase 5 — YouTube Integration
- [ ] YouTube API integration
- [ ] Creator video selection
- [ ] YouTube content processing
- [ ] Live-stream analysis

### Phase 6 — Final Product
- [ ] Creator dashboard
- [ ] Clip management
- [ ] Performance improvements
- [ ] Deployment
- [ ] Production testing

---

## ⚠️ Content & Copyright

ClipForge is intended to process content that the user owns or has permission to use.

Users are responsible for ensuring that they have the necessary rights to process, modify, and distribute the videos they provide.

YouTube integration will be designed around applicable YouTube API policies and content rights.

---

## 🎯 Future Vision

The long-term goal of ClipForge is to become an intelligent content assistant that can monitor long-form content, identify the most valuable moments, and automatically transform them into short-form content.

Instead of spending hours searching through a livestream:

```text
4 Hour Livestream
        ↓
      ClipForge
        ↓
 ┌──────┼──────┐
 ↓      ↓      ↓
94/100 89/100 84/100
 ↓      ↓      ↓
Clip 1  Clip 2  Clip 3
```

**Let AI find the moments worth sharing.**

---

## 📜 License

This project is currently under development.

License information will be added when the project reaches its initial stable release.

---

## 👨‍💻 Author

Developed as an AI-powered video processing and content creation project.

**ClipForge — Find the moment. Forge the clip.**