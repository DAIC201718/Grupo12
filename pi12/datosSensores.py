
import commands
import subprocess

temp=commands.getoutput("python /home/pi/tempsensor.py")
lum=commands.getoutput("python /home/pi/luminosidad.py")

vtemp=float(temp)
ponoLum=(float(lum)/1024.0) * 100.0
porLum=100.0-ponoLum
command=("python /home/pi/clienbluetooth2.py")
command2=("python /home/pi/clienbluetooth.py")
if vtemp>25.0 or porLum>70.0:
	subprocess.call(command.split())
elif vtemp<17.0:
	subprocess.call(command2.split())
