# Boxxer Airdrop Bot

## Overview

This is a Node.js bot for automating the Boxxer Airdrop process. The bot allows you to perform airdrop actions either once or on a daily schedule using cron.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dante4rt/boxxer-airdrop-bot.git
    cd boxxer-airdrop-bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Getting the Token

1. Go to [web.telegram.org](https://web.telegram.org) and log in to your account.
2. Register to the airdrop bot by navigating to [this link](https://t.me/BoxxerGameBot/boxxer?startapp=qdph29x3).
3. Open Developer Tools in your browser (usually by pressing `F12` or `Ctrl+Shift+I`).
4. Go to the "Network" tab, then click on "Fetch/XHR".
5. Look for requests with names like `name`, `info`, or `tap`. Click on them to inspect.
6. Find the token in the "Authorization" header of the request.
7. Copy the token and save it in a file named `privateKeys.json` in the root directory of your project. The file should be formatted as follows:

    ```json
    ["your_token_here"]
    ```

### Running the Bot

1. Run the bot:

    ```bash
    node index.js
    ```

2. Follow the prompts to choose between one-time or 24-hour running mode.

### Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
