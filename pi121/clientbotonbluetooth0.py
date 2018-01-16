from bluetooth import *


# Create the client socket
client_socket=BluetoothSocket( RFCOMM )

client_socket.connect(("B8:27:EB:5D:F8:54", 4))

client_socket.send("0")

print "Finished"

client_socket.close()
