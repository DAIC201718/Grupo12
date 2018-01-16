#!/usr/bin/python
 
import spidev
import time
import os

#Define Variables
delay = 0.5
ldr_channel = 0

#Create SPI
spi = spidev.SpiDev()
spi.open(0, 0)
spi.max_speed_hz=1000000

def readadc(adcnum):
    # read SPI data from the MCP3008, 8 channels in total
    r = spi.xfer2([1,(8+adcnum)<<4,0])
    data = ((r[1] & 3) << 8) + r[2]
    return data

ldr_value = readadc(ldr_channel)
print ldr_value
