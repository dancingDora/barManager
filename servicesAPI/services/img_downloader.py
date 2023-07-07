from duckduckgo_search import ddg_images
import requests


class ImgDownloader:
    @staticmethod
    def download_image(query):
        results = ddg_images(query)

        if results:
            image_url = results[0]['image']

            # Download the image
            response = requests.get(image_url, stream=True)

            # Save the image to a file
            with open('image.jpg', 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)

            return 'image.jpg'
        else:
            return None

if __name__ == '__main__':

    # Example usage
    query = 'cute cats'
    ImgDownloader.download_image(query)
