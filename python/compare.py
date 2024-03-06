import requests
import base64
from PIL import Image
from io import BytesIO

img=Image.open("geek.jpg")
img.show()
# tags = ["scooter", "not scooter"]
# API_KEY = "ltvzOjQL6bxPQCUqePAb"
# image_url = str('https://images.unsplash.com/photo-1503434396599-58ba8a18d932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') 

# response = requests.get(image_url)
# img = Image.open(BytesIO(response.content))
# image_base64 = base64.b64encode(response.content).decode("utf-8")

# infer_clip_payload = {
#     "subject": {
#         "type": "base64",
#         "value": image_base64,
#     },
#     "subject_type": "image",
#     "prompt": tags,
#     "prompt_type": "text",
# }

# res = requests.post(
#     f"http://infer.roboflow.com/clip/compare?api_key=" + API_KEY,
#     json=infer_clip_payload,
# )

# similarity = res.json()["similarity"]
# idx = similarity.index(max(similarity))
# most_similar_tag = tags[idx]
# print(f"Most similar tag: {most_similar_tag}")