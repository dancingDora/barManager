from flask import Flask, request, send_file
from services.gpt_service import GptService
from flask_cors import CORS, cross_origin
import io
from services.img_to_poster import PosterService
from services.img_downloader import ImgDownloader
from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/recommend_cocktail": {"origins": "*"}})


@app.route('/create_poster', methods=['POST'])
def create_poster():
    if 'image' not in request.files:
        return 'No image file uploaded.', 400

    image_file = request.files['image']
    price = request.form.get('price')
    description = request.form.get('description')

    image = Image.open(image_file.stream)  # Open image file
    processed_image = PosterService.process_image_bytes(image, price, description)  # Process image

    # Convert PIL Image to bytes-like object
    img_byte_arr = io.BytesIO()
    processed_image.save(img_byte_arr, format='JPEG')
    img_byte_arr = img_byte_arr.getvalue()

    return send_file(io.BytesIO(img_byte_arr), mimetype='image/jpeg')
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

@app.route('/download_image', methods=['POST'])
def download_image():
    if 'query' not in request.form:
        return 'No query provided.', 400

    query = request.form['query']
    image_filename = ImgDownloader.download_image(query)

    if image_filename:
        return send_file(image_filename, mimetype='image/jpeg')
    else:
        return 'No image found for the query.'

if __name__ == "__main__":
    app.run(port=5000)
