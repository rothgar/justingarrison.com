---
author: "Justin Garrison"
title: "Sync Encrypted Files with Dropbox and SecretSync"
description: "Cloud storage is a must have for any geek, and Dropbox is leading the"
date: 2011-05-16
images: [/img/banner1.png]
thumbnail: /img/banner1.png
draft: false
canonical: https://www.howtogeek.com/63262/sync-encrypted-files-with-dropbox-and-secretsync/
---

Cloud storage is a must have for any geek, and Dropbox is leading the way with its simplicity and affordable prices. With SecretSync you can take full advantage of Dropbox without giving up your privacy by encrypting sensitive documents easily.

While Dropbox does store your files encrypted on their servers, users do not have access to the encryption keys and if files are requested by government agencies, Dropbox has the ability to decrypt your information and hand over the requested files.

To protect your files from any unwanted access you can use other encryption software like TrueCrypt to encrypt your files before having them sync with Dropbox, but that is a manual process that would not be ideal. SecretSync automates the process and keeps your documents protected by locally encrypting your files before they are synced to Dropbox.

## What You’ll Need

To get started syncing your encrypted files you will need the following software.

You probably already have an account with Dropbox, but if you don’t go to their site and request a free account and install the software.

![](/img/dropbox-logo.png)

You will also need Java installed on your computer because SecretSync uses Java to encrypt your files.

![](/img/java-logo.png)

Finally, you will need to request a download from SecretSync while the software is in beta.

_Note: Currently SecretSync only runs on Windows, but OS X and Linux versions are coming soon._

![](/img/ss-download.png)

## Install SecretSync

Once everything is downloaded make sure you have Dropbox and Java installed and then install SecretSync.

On the first computer you will need to create a new SecretSync account. This is required because SecretSync will store your encryption keys while Dropbox will store your files. This separation allows both your keys and your files to be secure. Create an account on the first computer and on subsequent installations you will provide your credentials.

![](/img/setup-02.png)

To further protect your files you can provide a passphrase that will be used in addition to the encryption key SecretSync provides. This passphrase is not recoverable so if you lose this you may not be able to retrieve your files.

![](/img/setup-03.png)

Enter your Dropbox location so that the correct shortcuts can be created.

![](/img/setup-04.png)

That’s it. SecretSync will create a new folder in your user folder as well as shortcuts in your Dropbox folder.

![](/img/setup-05.png)

By default you will have a README.txt file in your encrypted folder. To verify that your files are being encrypted, open the README.txt file directly from within the SecretSync folder (left) and also open it from the Dropbox\\.SecretSync_tunnel_Root folder (right). You can see below that the file that is being synced to dropbox is completely unreadable because it is encrypted.

![](/img/readme.png)

## Sync Encrypted Files

For any computers that you need your files, all you have to do is install Dropbox, Java, and SecretSync. This time when you install SecretSync just provide your account credentials and passphrase.

![](/img/setup-2-00.png)

The files will automatically be decrypted in your SecretSync folder. Any files you want encrypted and synced just drag and drop them into the SecretSync folder just like you would with the Dropbox folder.

[SecretSync](https://getsecretsync.com/)
