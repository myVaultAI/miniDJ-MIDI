<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# miniDJ MIDI - AI-Powered Music Creation

Create dynamic, real-time music by adjusting sliders that control different music styles and elements. The app uses Google's Gemini AI with the Lyria realtime music model to generate music that responds instantly to your input.

View your app in AI Studio: https://ai.studio/apps/drive/1afZXpNfdgA-mKYIPqELBBGDcqIOURtpZ

## Features

- **16 Music Style Controls**: Adjust weights for different genres and styles (Bossa Nova, Chillwave, Drum and Bass, etc.)
- **Real-time Generation**: Music changes instantly as you move the sliders
- **Visual Feedback**: Colorful halos and backgrounds that pulse with the audio
- **MIDI Controller Support**: Connect external MIDI controllers for a more tactile experience
- **Intuitive Interface**: Drag sliders up/down or use mouse wheel for precise control

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your Gemini API key:**
   - Visit [Google AI Studio](https://aistudio.google.com/apikey)
   - Create or copy your API key

3. **Configure the API key:**
   - Open `.env.local` file in the project root
   - Replace `your_api_key_here` with your actual API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`

## How to Use

### Basic Controls

1. **Play/Pause Button**: Click the large circular button at the bottom to start/stop music generation
2. **Weight Knobs**: Drag up to increase or down to decrease the weight of each music style
   - Hover over a knob to see the current value
   - Use mouse wheel for fine adjustments
   - Hold Shift while dragging or scrolling for even finer control
3. **Edit Labels**: Click on any label to edit the music prompt text
4. **MIDI Button**: Click to enable MIDI controller support

### Tips

- Start with 2-3 sliders active (weight > 0) for best results
- Experiment with different combinations of styles
- The background colors reflect the active music styles
- At least one prompt must be active to generate music
- If a prompt is flagged (turns red), it was filtered by the content safety system

### Keyboard Shortcuts

- **Enter**: Confirm label edit
- **Escape**: Cancel label edit
- **Shift + Drag/Scroll**: Fine control mode for knobs

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Troubleshooting

### "API Key Required" Error
Make sure you've set your `GEMINI_API_KEY` in the `.env.local` file with a valid API key from Google AI Studio.

### Connection Errors
- Check your internet connection
- Verify your API key is valid
- Try refreshing the page

### No Audio
- Ensure at least one slider is active (weight > 0)
- Check that your browser allows audio playback
- Try clicking the play button again

## Technology Stack

- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe development
- **Lit**: Lightweight web components
- **Google Gemini AI**: Lyria realtime music generation
- **Web Audio API**: Audio playback and analysis
- **Web MIDI API**: MIDI controller support
