import random
import numpy as np
from skimage import io
import matplotlib.pyplot as plt

class Color:
    def __init__(self, red=0, green=0, blue=0):
        self._r = red
        self._g = green
        self._b = blue

    def getRed(self):
        return self._r

    def getGreen(self):
        return self._g

    def getBlue(self):
        return self._b

    def getHex(self):
        return '#%02x%02x%02x' % (self._r, self._g, self._b)

    def getArray(self):
        return [self._r, self._g, self._b]

    def __str__(self):
        return '({red}, {green}, {blue})'.format(red=self._r, green=self._g, blue=self._b)

class ColorGenerator:
    def __init__(self, theme=None):
        self._theme = theme

    def updateTheme(self, red, green, blue):
        self._theme = Color(red, green, blue)

    def generate(self, n=1):
        colors = []
        for _ in range(n):
            red = random.randint(0, 255)
            green = random.randint(0, 255)
            blue = random.randint(0, 255)

            if self._theme:
                red = (red + self._theme.getRed()) / 2
                green = (green + self._theme.getGreen()) / 2
                blue = (blue + self._theme.getBlue()) / 2
            
            colors.append(Color(red, green, blue))
        return colors
    
    def convertToNPArray(self, arr):
        a = [c.getArray() for c in arr]
        return np.asarray(a, dtype=np.uint8)
    

def generateSampleColors():
    # pick theme given rgb values
    theme = Color(255, 255, 255)

    # create Color Generator
    cg = ColorGenerator(theme)

    # generate 100 random colors
    colors = cg.generate(100)

    # convert to np array
    colors = cg.convertToNPArray(colors)

    # display the colors randomly
    indicies = np.random.randint(0, len(colors), size=(10, 10))
    io.imshow(colors[indicies])
    plt.show()

if __name__ == "__main__":
    generateSampleColors()