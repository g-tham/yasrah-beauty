from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import sys

WIDTH, HEIGHT = 1200, 630
TEXT = "YASRAH BEAUTY"
BACKGROUND = "#FFFFFF"
INK = "#171715"
MAX_TEXT_WIDTH = 940
START_SIZE = 170
TRACKING_RATIO = 0.075

font_path = Path(sys.argv[1])
output_path = Path(sys.argv[2])
output_path.parent.mkdir(parents=True, exist_ok=True)

def text_width(draw, font, tracking):
    widths = [draw.textlength(ch, font=font) for ch in TEXT]
    return sum(widths) + tracking * (len(TEXT) - 1)

image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND)
draw = ImageDraw.Draw(image)

font_size = START_SIZE
while font_size > 80:
    font = ImageFont.truetype(str(font_path), font_size)
    tracking = round(font_size * TRACKING_RATIO)
    if text_width(draw, font, tracking) <= MAX_TEXT_WIDTH:
        break
    font_size -= 1

total_width = text_width(draw, font, tracking)
bbox = draw.textbbox((0, 0), TEXT, font=font)
text_height = bbox[3] - bbox[1]

x = (WIDTH - total_width) / 2
y = (HEIGHT - text_height) / 2 - bbox[1]

for ch in TEXT:
    draw.text((x, y), ch, font=font, fill=INK)
    x += draw.textlength(ch, font=font) + tracking

image.save(output_path, format="PNG", optimize=True)
