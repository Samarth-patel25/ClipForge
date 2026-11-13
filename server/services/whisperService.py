import sys
import json
from faster_whisper import WhisperModel

audio_path = sys.argv[1]

model = WhisperModel(
    "base",
    device="cpu",
    compute_type="int8"
)

segments, info = model.transcribe(audio_path)

result = []

for segment in segments:
    result.append({
        "start": segment.start,
        "end": segment.end,
        "text": segment.text.strip()
    })

print(json.dumps({
    "language": info.language,
    "duration": info.duration,
    "segments": result
}))