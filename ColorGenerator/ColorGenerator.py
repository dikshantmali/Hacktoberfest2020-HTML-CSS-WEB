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
        if type(theme) is list:
            self._theme = theme
        elif type(theme) is Color:
            self._theme = [theme]
        else:
            self._theme = None

    def addTheme(self, red, green, blue):
        if self._theme is not None:
            self._theme.append(Color(red, green, blue))
        else:
            self._theme = [Color(red, green, blue)]

    def generate(self, n=1, variance=None):
        colors = []
        for _ in range(n):
            red = random.randint(0, 255)
            green = random.randint(0, 255)
            blue = random.randint(0, 255)

            if self._theme:
                theme = np.random.choice(self._theme, 1)[0]
                if variance != None:
                    var = np.floor(variance * 255 * np.random.randn(3))
                    
                    red = np.clip(var[0] + theme.getRed(), 0, 255)
                    green = np.clip(var[1] + theme.getGreen(), 0, 255)
                    blue = np.clip(var[2] + theme.getBlue(), 0, 255)
                else:
                    red = (red + theme.getRed()) / 2
                    green = (green + theme.getGreen()) / 2
                    blue = (blue + theme.getBlue()) / 2
            
            colors.append(Color(red, green, blue))
        return colors
    
    def convertToNPArray(self, arr):
        a = [c.getArray() for c in arr]
        return np.asarray(a, dtype=np.uint8)
    

def generateSampleColors():
    # pick theme given rgb values
    theme1 = Color(100, 100, 255)
    theme2 = Color(255, 255, 255)

    # create Color Generator
    cg = ColorGenerator([theme1, theme2])

    # generate 100 random colors
    colors = cg.generate(1000, 0.1)

    # convert to np array
    colors = cg.convertToNPArray(colors)

    # display the colors randomly
    indicies = np.random.randint(0, len(colors), size=(10, 10))
    io.imshow(colors[indicies])
    plt.show()

if __name__ == "__main__":
    generateSampleColors()