# Tutorial Ionic React

*Inspired from Youtube Playlist Video of [codedamn](https://www.youtube.com/@codedamn) [here](https://www.youtube.com/playlist?list=PLYxzS__5yYQkxcATbHyMA6wfEinKL6jPD)*

## Resources

- [Ionic platform](https://ionicframework.com/docs)
- [Capacitor](https://capacitorjs.com/docs/getting-started/with-ionic) in Ionic projects

## Requirements

- NodeJS
- NPM
- CocoaPods `brew install cocoapods`
- Xcode (tuto to install [here](https://www.freecodecamp.org/news/how-to-download-and-install-xcode/))

## Installation

```shell
npm uninstall -g ionic
npm install -g @ionic/cli

ionic start tuto-ionic-react-firebase blank --type=react
cd tut-ionic-react-firebase

# Adding Capacitor
ionic integrations enable capacitor
## Add platforms
npm i @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
ionic build
ionic capacitor add android
ionic capacitor add ios
```

## Run

```shell
# Run Android App
npx cap open android

# Run ios App
npx cap open ios
```