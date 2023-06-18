import glob
import os
path = 'img/*.jpg'
i = 1
fname = input("dd :")

flist = glob.glob(path)
print("before")
print(flist)

for file in flist:
    os.rename(file, './img/' + fname + str(i) + '.jpg')
    i += 1

list = glob.glob(path)
print('after')
print(list)