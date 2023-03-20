---
author: "Justin Garrison"
title: "What is Arduino? Learn About This Open-Source Electronics Platform"
description: "Arduino is an open-source electronics prototyping platform based on flexible, easy-to-use"
date: 2011-10-03
images: [/img/banner14.png]
thumbnail: /img/banner14.png
draft: false
canonical: https://www.howtogeek.com/65963/what-is-arduino/
---

Arduino is an open-source electronics prototyping platform based on flexible, easy-to-use hardware and software. Today we will help you get started by showing you some of the options available and how easy it is to get started.

Arduino hardware is an open-source circuit board with a microprocessor and input/output (I/O) pins for communication and controlling physical objects (LED, servos, buttons, etc.). The board will typically be powered via USB or an external power supply which in turn allows it to power other hardware and sensors.

Arduino also has an open-source software component which is similar to C++. The Arduino integrated development environment (IDE) allows you to write code, compile it, and then upload it to your Arduino for stand alone use in prototyping and projects.

All of this was designed to be easy to use to let artists and makers freely develop their ideas into real objects. If you are interested in building something yourself, have a look to see the hardware options, and software available to get your started.

## Arduino Variants

The Arduino hardware being “open-source” means that you can view schematics of every board available. This means you are free to buy the hardware components and solder the board together yourself if you are so inclined. To get started, we’d probably just recommend you spend the ~$30 and see how much you really want to invest.

The image below was created using Fritzing and is the layout for a basic Arduino using a bread board.

![/img/Arduino-breadboard.png](/img/Arduino-breadboard.png)

The Arduino comes in a variety of different types that make choosing the right one difficult to decide, but variety also allows for flexibility in choosing the perfect solution.

We cannot cover every Arduino option, but here are some notable options for getting started.

**[Arduino Uno](https://arduino.cc/en/Main/ArduinoBoardUno)**

![/img/ArduinoUno.jpg](/img/ArduinoUno.jpg)

The Uno is a great starter Arduino, it provides a solid foundation for those just getting started and has a lot of the options you will want as you explore the platform. It also works with almost every shield available (more on this later).

**[Arduino Nano](https://arduino.cc/en/Main/ArduinoBoardNano)**

![/img/ArduinoNano.jpg](/img/ArduinoNano.jpg)

The Nano is almost feature for feature the same as the Arduino Uno, but it is about 1/3 the size and cannot use shields easily. The Uno is meant to be used as a permanent fixture in projects or with breadboards for testing.

**[Arduino Lilypad](https://arduino.cc/en/Main/ArduinoBoardLilyPad)**

![/img/ArduinoLilypad.jpg](/img/ArduinoLilypad.jpg)

The Lilypad has a unique design that can be sewn into fabrics for wearable projects or art. Of course you are not limited to those applications but shields won’t work on this Arduino so expansion may become difficult.

**[Arduino Mega 2560](https://arduino.cc/en/Main/ArduinoBoardMega2560)**

![/img/ArduinoMega2560.jpg](/img/ArduinoMega2560.jpg)

The Mega 2560 has more memory and more I/O pins than any other Arduino. This is the biggest and best Arduino you can get, but you may not need that much power if your projects don’t call for it. This also would be a more expensive Arduino to leave in a project permanently.

**[Netduino](https://netduino.com/netduino/)**

![/img/netduinofront.png](/img/netduinofront.png)

The Netduino is the cousin of the Arduino. It is still an open source hardware hacking and prototyping solution. But the Netduino runs .NET Micro Framework for its software base. It is pin compatible with Arduino shields, but some may require drivers to run.

For more Arduino hardware check out the link below.

## Arduino Accessories (Shields)

Shields make adding functionality to your Arduino a snap, literally. They have pins that push right into the top of your Arduino and you can immediately take advantage of whatever the shield can do. You can also add multiple shields at a time. An Arduino that watches Twitter for a specific hashtag (ethernet shield) and then controls an RC car using RF (RF shield) isn’t beyond the scope of a single project thanks to the shield flexibility.

You will notice below that some shields look a lot like the Arduino boards themselves, but don’t be confused because they lack the main processing power to run the code you will write in sketches (more on this below).

**Ethernet**

![/img/ethernet-shield.jpg](/img/ethernet-shield.jpg)

This is one of the most popular shields because it expands your Arduino to be able to use the internet for communication and control. The Ethernet shield is one of the most versatile available, and once you’ve mastered the basics you should look to get one just so you can make your washer/toaster/coffee maker tweet.

**XBee**

![/img/xbee-shield.jpg](/img/xbee-shield.jpg)

The XBee shield makes point-to-point wireless communication easy. You can use this to network two Arduinos together or set up an entire mesh network of Arduinos that will one day RULE THE WORLD!

**Motor**

![/img/motor-shield.jpg](/img/motor-shield.jpg)

The Arduino can control motors and servos without needing a shield, but the motor shield ramps up that ability to 11. You can use this to remote control your lawn mower, or build your own robot.

There are many other Arduino shields available like music, video game, and bluetooth. This is just the tip of the iceberg and we’d recommend doing some searching of your own to find the perfect shield for your project.

If you are looking to prototype Arduinos and shields together along with various sensors we’d recommend [checking out Fritzing](https://fritzing.org/) which not only helps with the prototyping stages, but they also aid in showing you how to make permanent PCB boards for producing your project.

## Programming (Sketches)

The [Arduino IDE](https://arduino.cc/en/Guide/Environment) is a cross platform developer tool written in Java. It allows you to control all of the software functions of your Arduino.

![/img/ide.png](/img/ide.png)

Each program that you write is called a sketch and is compiled and uploaded to your Arduino using the IDE. A lot of sketches are freely available online and the IDE even comes with a plethora of examples to get you started with just about every function your Arduino is capable of.

![/img/sketch-examples.png](/img/sketch-examples.png)

Eclipse and Notepad++ are popular alternatives to writing your sketches, but they lack easy access to sketch examples and compiling/uploading the finished sketch to the Arduino.

## Resources

This article is designed to get your started in your Arduino projects. For more reading check out the links below and get started making stuff.

If you have more useful links or an Arduino project of your own, feel free to leave a comment to share with all the readers.

**Project Ideas**

[http://arduino.cc/en/Tutorial/HomePage](https://arduino.cc/en/Tutorial/HomePage)

[http://www.arduino.cc/playground/Projects/ArduinoUsers](https://www.arduino.cc/playground/Projects/ArduinoUsers)

[http://hackaday.com/category/arduino-hacks/](https://hackaday.com/category/arduino-hacks/)

[http://www.instructables.com/tag/type-id/category-technology/channel-arduino/](https://www.instructables.com/tag/type-id/category-technology/channel-arduino/)

Arduino hardware reference [http://arduino.cc/en/Main/Hardware](https://arduino.cc/en/Main/Hardware)

Videos [https://www.youtube.com/user/makemagazine](https://www.youtube.com/user/makemagazine)

[http://www.circuitsathome.com/](https://www.circuitsathome.com/)
