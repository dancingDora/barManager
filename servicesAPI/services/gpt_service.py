import os
import openai
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.environ.get('API_KEY')

class GptService:

    def __init__(self):
        self.api_key = API_KEY
        openai.api_key = self.api_key

    def recommend_cocktail(self, ingredients: str):
        requests = f"""I have these ingredients with me: {ingredients}, what cocntail can I make, give 3 options , for every option do not exceed 50 words"""

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            messages=[{"role": "user", "content": requests}]
        )

        answer = completion["choices"][0]["message"]["content"]
        return answer
    
    def give (self, ingredients: str):
        requests = f"""I have these ingredients with me: {ingredients}, what cocntail can I make, give 3 options , for every option do not exceed 50 words"""

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            messages=[{"role": "user", "content": requests}]
        )

        answer = completion["choices"][0]["message"]["content"]
        return answer
