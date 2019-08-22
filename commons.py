
import io
import torch 
import classifier
import torch.nn as nn
from torchvision import models,transforms
from PIL import Image 

import torch.nn.functional as F

def get_model():
    checkpoint_path='xray_projectV4_2_densenet161_mila.pt'
    model=models.densenet161(pretrained=True)
    model.classifier = classifier()
    model.load_state_dict(torch.load(checkpoint_path,map_location='cpu'),strict=False)
    model.eval()
    return model

def get_tensor(image_bytes):
	my_transforms=transforms.Compose(['transforms.Resize(224)', 'transforms.ToTensor()'])
	image=Image.open(io.BytesIO(image_bytes))
	return my_transforms(image).unsqueeze(0)
        