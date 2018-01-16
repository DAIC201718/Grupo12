#!bin/bash
while :
do
	luminosidad=$(python ldr)
	resultado=$(python math_operator.py $luminosidad)
	echo $resultado
	gpio -g pwm 13 $resultado
done
