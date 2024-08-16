import numpy
from PIL import Image
import onnxruntime

pil_image = Image.open('sample.png')

# preprocess
resized_image = pil_image.resize((28, 28))
resized_arr = numpy.array(resized_image)
print(f"resized_arr.shape =  {resized_arr.shape}")

transposed_arr = resized_arr.transpose(2, 0, 1)
print("transposed_arr")
print(f"transposed_arr.shape = {transposed_arr.shape}")


alpha_arr = transposed_arr[3]
print("alpha_arr")
for i in alpha_arr:
    for j in i:
        print("%3d " %j, end="")
    print()

reshaped_arr = alpha_arr.reshape(-1)
print("reshaped_arr")
print(reshaped_arr)

input = [reshaped_arr.astype(numpy.float32)]
print("input")
print(input)

# predict
onnx_session = onnxruntime.InferenceSession("model.onnx")

output = onnx_session.run(['probabilities'], {'float_input': input})
print("output")
print(output)

result = output[0][0]
print("result")
print(result)
