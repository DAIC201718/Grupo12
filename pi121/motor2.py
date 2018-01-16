import RPi.GPIO as GPIO
from time import sleep
import commands
import subprocess
 
GPIO.setmode(GPIO.BOARD)
 
Motor1A = 16
Motor1B = 18
Motor1E = 22
 
GPIO.setup(Motor1A,GPIO.OUT)
GPIO.setup(Motor1B,GPIO.OUT)
GPIO.setup(Motor1E,GPIO.OUT)
 
print "Going backwards"
GPIO.output(Motor1A,GPIO.LOW)
GPIO.output(Motor1B,GPIO.HIGH)
GPIO.output(Motor1E,GPIO.HIGH)

valor=commands.getoutput('sh /home/pi/valpul')
while valor=="1":
	valor=commands.getoutput('sh /home/pi/valpul')

 
print "Now stop"

GPIO.output(Motor1E,GPIO.LOW)
command="python /home/pi/clientbotonbluetooth0.py &"
subprocess.call(command.split()) 
GPIO.cleanup()
