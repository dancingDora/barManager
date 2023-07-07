from io import BytesIO
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageFont
import numpy as np

class PosterService:

    @staticmethod
    def process_image_bytes(img,  price, description):
        # img = Image.open(BytesIO(image_bytes))

        # Enhance Image
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.5)  # Increase color saturation

        # Sharpen Image
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(5.0)  # Increase sharpness

        # Blur Image
        img = img.filter(ImageFilter.GaussianBlur(radius=1))

        # Add Border
        border_color = (30, 30, 30)  # Light gray color
        border_width = 2
        img_with_border = Image.new('RGB', (img.size[0] + 2 * border_width, img.size[1] + 2 * border_width), border_color)
        img_with_border.paste(img, (border_width, border_width))

        # Add text
        draw = ImageDraw.Draw(img_with_border)
        font = ImageFont.truetype('arial.ttf', 60)  # Use Arial, size 60
        draw.text((20, img_with_border.size[1] - 70), f"${price}", fill='white', font=font)

        return img_with_border

    @staticmethod
    def process_image_path(input_path, output_path):
        with open(input_path, 'rb') as f:
            image_bytes = f.read()

        img = PosterService.process_image_bytes(image_bytes)

        img.save(output_path)


if __name__ == '__main__':
    # Define file paths
    img1 = '../resources/beer-with-background.jpg'
    img2 = '../resources/beer-poster.jpg'
    PosterService.process_image_path(img1, img2)
