from flask import Flask, request, send_file
from services.gpt_service import GptService
from flask_cors import CORS, cross_origin
import io
from services.img_to_poster import PosterService
from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/recommend_cocktail": {"origins": "*"}})
@app.route('/create_poster', methods=['POST'])
def create_poster():
    if 'image' not in request.files:
        return 'No image file uploaded.', 400

    file = request.files['image']
    image = Image.open(file.stream)  # open image file
    processed_image = PosterService.process_image_bytes(image)  # process image

    # Convert PIL Image to file-like object
    img_io = io.BytesIO()
    processed_image.save(img_io, 'JPEG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/jpeg')

    # {
    #     "title": "football watch",
    #     "date": "evening 8:00",
    #     "location": "dorm N8",
    #     "number_of_people": "1020 people",
    #     "tags": "pizza, socilaze, have fun, cheer your team, make frineds",
    #     "tone": "frindly, funny"
    # }
@app.route('/recommend_cocktail', methods=['POST'])
def generate_event_description():
    data = request.get_json()

    # tags = data.get('tags')

    gpt_service = GptService()  # replace with your OpenAI API Key

    result = gpt_service.recommend_cocktail(ingredients=data['ingredients'])

    if 'error' in result:
        return result, 400

    return result


if __name__ == "__main__":
    app.run(port=5000)
