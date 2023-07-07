import tensorflow as tf
import tensorflow_hub as hub
import cv2
import numpy as np

# Load a pre-trained TensorFlow Hub model for object detection
model = hub.load('https://tfhub.dev/tensorflow/centernet/hourglass_512x512/1')

# Load the image
image_path = '../resources/beer-with-background.jpg'
image = cv2.imread(image_path)
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
input_tensor = tf.convert_to_tensor(image)
# The model expects a batch of images, so add an axis with `tf.newaxis`.
input_tensor = input_tensor[tf.newaxis, ...]

# Run inference
output_dict = model(input_tensor)

# All outputs are batches tensors.
# Convert to numpy arrays, and take index [0] to remove the batch dimension.
# We're only interested in the first num_detections.
num_detections = int(output_dict.pop('num_detections'))
output_dict = {key:value[0, :num_detections].numpy()
                 for key,value in output_dict.items()}
output_dict['num_detections'] = num_detections

# detection_classes should be ints.
output_dict['detection_classes'] = output_dict['detection_classes'].astype(np.int64)

# Visualize the results
img = cv2.imread(image_path)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Loop over all detections and draw bounding boxes on the image
for i in range(num_detections):
    class_id = output_dict['detection_classes'][i]
    score = output_dict['detection_scores'][i]
    if score > 0.5:  # Only consider detections with a confidence score above 0.5
        bbox = output_dict['detection_boxes'][i] * np.array([img.shape[0], img.shape[1], img.shape[0], img.shape[1]])
        cv2.rectangle(img, (int(bbox[1]), int(bbox[0])), (int(bbox[3]), int(bbox[2])), (0, 255, 0), 2)
        cv2.putText(img, str(class_id), (int(bbox[1]), int(bbox[0]-10)), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36,255,12), 2)

cv2.imshow('Image', img)
cv2.waitKey(0)
