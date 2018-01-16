from bluetooth import *
import string
import commands
import subprocess

server_socket=BluetoothSocket( RFCOMM )

server_socket.bind(("", 3 ))


server_socket.listen(1)

client_socket, address = server_socket.accept()

data = client_socket.recv(1024)

command="python /home/pi/motor.py &"
command2="python /home/pi/motor2.py &"
command3="python /home/pi/serverbluetooth.py &"
pulsado = commands.getoutput("sh /home/pi/valpul")
if data=="1" and  pulsado=="0":
	subprocess.call(command.split())
elif data=="2" and pulsado=="1":
	subprocess.call(command2.split())
elif data=="3":
	if pulsado=="0":
		subprocess.call(command.split())
	elif pulsado=="1":
		subprocess.call(command2.split())

client_socket.close()
server_socket.close()
subprocess.call(command3.split())
