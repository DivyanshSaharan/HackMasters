from clarifai.rest import ClarifaiApp

# Initialize the Clarifai application
app = ClarifaiApp(api_key='1ba0a4d075dc41b1a3f9d56704d1f79c')

# Define the model to use for classification
model = app.public_models.general_model

# Function to classify an image into a specified category
def classify_image(image_url, category):
    # Classify the image
    response = model.predict_by_url(url=image_url)

    # Get concepts (labels) from the response
    concepts = response['outputs'][0]['data']['concepts']

    # Check if the specified category is among the concepts
    for concept in concepts:
        if concept['name'].lower() == category.lower():
            return concept['value']

    # If the category is not found, return None
    return None

# Example usage
image_url = 'https://apollo.olx.in:443/v1/files/7zxm3bxozm4b3-IN/image;s=272x0'
category = 'scooter'  # Specify the category you want to classify the image into

# Call the function to classify the image
confidence = classify_image(image_url, category)

if confidence is not None:
    print(f"The image is classified as '{category}' with confidence: {confidence}")
else:
    print(f"The image does not belong to the '{category}' category.")
