import commands


valor=commands.getoutput('sh home/pi/valpul')
if valor=="0":
	commands.getoutput('python clientbotonbluetooth0.py')
else:
	commands.getoutput('python clientbotonbluetooth1.py')



