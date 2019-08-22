
import io
import torch 
import classifier
import torch.nn as nn
from torchvision import models,transforms
from PIL import Image 

import torch.nn.functional as F

def mila(input, beta=-0.25):
    return input * torch.tanh(F.softplus(input+beta))

class classifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(2208, 500)
        self.fc2 = nn.Linear(500, 256)
        self.fc3 = nn.Linear(256, 3)
        self.dropout = nn.Dropout(0.5)
        self.logsoftmax = nn.LogSoftmax(dim=1)
        self.acivation = mila
    def forward(self,x):
        x = x.view(x.size(0), -1)
        x = self.dropout(self.acivation(self.fc1(x)))
        x = self.dropout(self.acivation(self.fc2(x)))
        x = self.logsoftmax(self.fc3(x))
        return x
