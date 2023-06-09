from PIL import Image

import os
import glob

FName = input("Enter file name: ")

dst_dir = 'data/temp/images_half'
os.makedirs(dst_dir, exist_ok=True)

files = glob.glob('./data/img/*.jpg')

for f in files:
    img = Image.open(f)
    img_resize = img.resize((img.width // 2, img.height // 2))
    root, ext =os.path.splitext(f)
    basename = os.path.basename(root)
    img_resize.save(os.path.join(dst_dir, basename + '_half' + ext))

    os.rename(file, './img/img' + str(i) + '.jpg')
    i += 1