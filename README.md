# Aurum (React Native Practice Test)

### Author: Maciel Santos <macielrsf@gmail.com> ####

This project is a practice test for React Native Developer position at Aurum Software. 

## Installation steps

After clone this project, enter the project directory through console and execute the following steps:

### Android ###

Inside Android directory, create `local.properties` file and set Android SDK path:

Example: `sdk.dir = /Users/home/Android/Sdk`

Lastly:

`npm install && npx react-native run-android`

### iOS ###

`npm install && cd ios/ && pod install && cd ..`

`npx react-native run-ios`

Or opens *aurum.xcworkspace* with Xcode and build the project.

### Postinstall ###

If Metro Bundler fails, then run:

`npx react-native start`

And opens the app on device or emulator. 

## App Instructions

- Intro screen, is showed just at first installation.
- At Login screen enter with any user and password to continue.
