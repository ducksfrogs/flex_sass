from PIL import Image

import os
import glob


dst_dir = 'data/temp/images_half'
os.makedirs(dst_dir, exist_ok=True)

files = glob.glob('./img/*.jpg')

for f in files:
    img = Image.open(f)
    root, ext =os.path.splitext(f)
    basename = os.path.basename(root)
    img.save(os.path.join(dst_dir, basename + ext))
