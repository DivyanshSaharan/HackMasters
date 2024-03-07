from flask import Flask, request, jsonify
from clarifai.rest import ClarifaiApp

app = Flask(__name__)

clarifai_api_key = '1ba0a4d075dc41b1a3f9d56704d1f79c'
app = ClarifaiApp(api_key=clarifai_api_key)
model = app.public_models.general_model

def classify_image(image_url, category):
    try:
        response = model.predict_by_url(url=image_url)

        concepts = response['outputs'][0]['data']['concepts']

        for concept in concepts:
            if concept['name'].lower() == category.lower():
                return concept['value']

        return None
    except Exception as e:
        print("Error:", e)
        return None

@app.route('/api/classify', methods=['GET'])
def classify():
    try:
        image_url = request.args.get('image_url')
        category = request.args.get('category')

        if not image_url or not category:
            return jsonify({"error": "Missing parameters. Please provide 'image_url' and 'category'."}), 400

        confidence = classify_image(image_url, category)

        if confidence is not None:
            return jsonify({"category": category, "confidence": confidence})
        else:
            return jsonify({"error": f"The image does not belong to the '{category}' category."}), 404
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
