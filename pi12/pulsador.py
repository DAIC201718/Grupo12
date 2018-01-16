import subprocess
import commands
command="sh /home/pi/valpul"
command1="python /home/pi/clienbluetooth3.py"
while 1:
	valor = commands.getoutput(command)
	if valor=="0":
		subprocess.call(command1.split())
