from flask import Flask, request
from services.gpt_service import GptService
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/recommend_cocktail": {"origins": "*"}})

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
