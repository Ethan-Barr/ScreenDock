# ScreenDock

A minimalistic dock/screensaver app built with Expo and React Native. ScreenDock is designed to provide a clean and simple interface for uses who want a distraction-free expeirce on their device. It acts as a dock/screensaver app displayuing the time, date, and weather information. Within each updated added to the app it is aimed to improve the user exoerience while keeping the interface minimalistic and easy to use.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Changelog](#changelog)
- [Roadmap](#roadmap)

## About

ScreenDock is a cross-platform applciation that runs on both Andriod and iOS devices. The aim is to provide a simple, minimalistic dock/screensaver app that enhances the user experience while keeping the interface clean and distraction-free. The app displays essential information such as time, date, and weather, making it a useful tool for users who want to stay informed without being overwhelmed by unnecessary features. The App is build using Expo and React Native. ScreenDock is open-source and welcomes contributions from the community to help improve and expand its functionality.

## Features

- Minimalistic design
- Works on Andriod and iOS
- Focus mode/screensaver functionality
- Accuracte weather information based upon location (Updates every 10 minutes)

## Installation

### Local Development

To install and run ScreenDock on your local machine for development purposes, follow these steps:

1. Install **Expo Go** from the App Store (iOS) or Google Play Store (Android).
2. Clone the repository:

   ```bash
   git clone https://github.com/Ethan-Barr/ScreenDock.git
   cd ScreenDock
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Open the Expo Go app on your device and scan the QR code displayed in the terminal or browser.

> ⚠️ Currently, only Android is fully tested. iOS testing is coming soon.

### Building the App

**Development build for andriod:**

```bash
eas build --platform android --profile preview
```

**Production build for andriod:**

```bash
eas build --platform android --profile production
```

## Usage

To use ScreenDock just open the app on your device and let it run. It will automatly startup landscape ready as a dock/screensaver/productiviy screen.

## Contributing

Contributions are welcome! Follow these steps below:

1. Fork the repository
2. Create a new Branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a pull request

## License

This project is held under [MIT license](LICENSE).

## Contact

For questions, feedback or support:

- Email: [ethanwbarr07@gmail.com](mailto:ethanwbarr07@gmail.com)
- Github Issues: [Open an issue](https://github.com/Ethan-Barr/ScreenDock/issues)

## Changelog

You can view the fulll history of changes in [CHANGELOG.md](CHANGELOG.md)

## Roadmap

- ✅ Andriod full functionallity
- 🔜 iOS full testing and optimisation
- 🔜 Custom themes and wallpapers
- 🔜 Spotify & other music prover intergration
- 🔜 Cloud sync between devices
- 🔜 Desktop application (Linux, Windows, Mac)
