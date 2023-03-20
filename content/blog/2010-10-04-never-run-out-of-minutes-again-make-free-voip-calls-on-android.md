---
author: "Justin Garrison"
title: "Never Run Out of Minutes Again: Make Free VoIP Calls on Android Phones"
description: "Android phones with Google Voice can make and receive calls at an extremely disounted"
date: 2010-10-04
images: [/img/sshot4ca93891af2af.jpg]
thumbnail: /img/sshot4ca93891af2af.jpg
draft: false
canonical: https://www.howtogeek.com/30090/never-run-out-of-minutes-again-make-free-voip-calls-on-android/
---

Android phones with Google Voice can make and receive calls at an extremely disounted rate, but you still need a voice plan to make these calls. Using Google Voice, Android, and Sipgate, you can get around that limitation and make calls for free.

Using Google Voice you can call any number for free but you are not able to receive calls directly to your Google Voice number on your Android phone without a voice plan with your carrier. Using sipgate you can receive any call for free but cannot place calls without adding money to your account. Combining the two services, we will be able to place calls using Google Voice which will automatically call back your sipgate number connecting you to your intended recipient, and we will do all of this using WiFi, 3G data, or EDGE, meaning you will never run out of minutes again.

## Sign Up with Sipgate

Sipgate is an extremely useful tool that will allow you to do a lot of the same things Google Voice can do, but it will also allow you to place and receive calls over Wifi and 3G without a voice plan. Sipgate also offers a softphone for your computer and the ability to place calls directly from their website. We will start by signing up for a free Sipgate account.

_Note: This is the only step that requires a phone capable of receiving text messages to verify your number. Sending this invitation to my Google Voice number did not work but sending the text to a friends phone and then keying in the code on the sipgate website did work._

![](/img/sipgate-register.png)

Once you have created and verified your account, log-in and we need to get your SIP credentials of your sipgate VoIP phone. First click on settings and then add a VoIP phone on the right. You can name it whatever will make sense to you and add your E911 information for if you ever have to call 911 from this phone.

![](/img/sipgate-new-number.png)

Once the new phone has been created, hover your mouse over the phone and then click SIP credentials from the drop down.

![](/img/sipgate-credentials-01.png)

A new window will pop up and you will need to write down the SIP-ID and SIP-Password that is provided.

![](/img/sipgate-credentials-02.png)

## Install and Configure Sipdroid

Search the market for Sipdroid and install Sipdroid VoIP + video calling.

![](/img/sipdroid-01.png)

Once it is installed, open it up and open the SIP account settings under menu -> settings for the app. Fill in the authorization username and password with the SIP-ID and SIP-Password we got earlier; then change the sever to sipgate.com.

![](/img/sipdroid-02.png)

Tap the back button on your phone and then go to the call options to enable Wi-Fi (WLAN), 3G, and EDGE calls if desired.

![](/img/sipdroid-03.png)

Once all of this information is filled out, pull down the notification shade and you should see “registered” next sipdroid’s notification along with a green dot showing you are ready to go.

![](/img/sipdroid-04.png)

You should double check that you are fully connected to sipgate by logging into your account and checking that the VoIP phone we set up earlier now says online.

![](/img/sipgate-voip-online.png)

## Add Sipgate Phone to Google Voice

Log-in to Google Voice and click settings -> add another phone. Enter your sipgate VoIP-Phone number and then click save.

![](/img/gv-add-number.png)

Google needs to verify that you own the number you just added so it will call your sipgate VoIP-Phone and ask you to key in the verification code shown. Because we already set up Sipdroid your Android phone should ring and you can key in the code there.

![](/img/gv-verify-01.png)

Once the verification is complete you should see a check box next to your sipgate phone in Google Voice.

![](/img/gv-verify-02.png)

## Install Google Voice Callback

The last step is to install Google Voice Callback from the Android Market.

![](/img/gv-callback-01.png)

Fill out your Google Voice account information, what number you want to call back (your sipgate number), and when you want to use Google Voice Callback (always).

![](/img/gv-callback-02.png)

## Place a Test Call

You can now place a call using the built in Android phone dialer. When you place the call you will get a popup saying that you are placing the call with GVoice Callback and then your phone will ring because your Google Voice number is calling your Sipgate number.

![](/img/gv-callback-03.png)![](/img/gv-callback-04.png)

Answer the phone and then you will be connected through sipdroid to the number you were trying to call.

![](/img/gv-callback-05.png)

It took a few steps to get here but now you can send and receive calls with only using data. I am successfully using this on my HTC G1 without a SIM card in the phone over Wi-Fi. I can send and receive phone calls to my hearts content so long as I have Wi-Fi signal and I never have to worry about going over on my minutes again.

Sipgate

[Google Voice](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fgoogle.com%2Fvoice&cuid=xid:{xid}&___trxnet=vg)

Google Voice Callback

Thanks to my friend Dante for helping me figure all this out.
