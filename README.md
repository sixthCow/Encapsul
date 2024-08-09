### update #1

#### Vnet Demo : https://youtu.be/jk_-ATk7Rxg

----


# Encapsul - Revolutionize Digital Gifting with Effortless Capsules

Encapsul empowers communities and developers by offering an innovative platform to create, distribute, and manage digital assets in the form of Capsules. Whether you’re bundling ETH, tokens, or NFTs, Encapsul provides a seamless experience for both creators and recipients, eliminating the complexities traditionally associated with digital asset management.

---

### Important: Fund the Relayer with fraxETH

To ensure smooth operation of the Capsule distribution process, please make sure to fund the relayer with fraxETH. The relayer is responsible for covering the gas fees associated with Capsule transactions, allowing users to access their Capsules without any friction.

**Relayer Address:** `0xa3A944F3844f103E11f4E33392E07407C042d344`

Please send a sufficient amount of fraxETH to this address to maintain uninterrupted service. 

Thank you for your support in keeping the Encapsul system running efficiently!

---

## Key Features

### Effortless Capsule Creation
Encapsul allows you to bundle various digital assets—such as ETH, tokens, and NFTs—into a single, easily distributable Capsule. Tailor each Capsule to your users' specific needs, making it a perfect solution for digital gifting, rewards, or asset distribution.

### Zero Friction for Users
Recipients can access their Capsules without needing to pay gas fees or navigate complex transactions. Encapsul handles the costs, ensuring a smooth and user-friendly experience, making digital assets accessible to everyone, regardless of their technical expertise.

### Secure and Transparent
Built on robust blockchain technology, Encapsul ensures that all transactions are secure and transparent. Developers can trust that their digital assets are managed with the highest standards of security, while users enjoy a seamless and trustworthy experience.

### Open-Source and Developer-Friendly
Encapsul is open-source, encouraging collaboration and innovation within the developer community. With well-documented APIs and a modular design, developers can easily integrate Encapsul into their existing projects or build new applications on top of it.

## Getting Started

Encapsul is designed to be easy to set up and use, with a development environment that allows you to deploy and test Capsules quickly. Whether you're developing a new application or integrating Encapsul into an existing system, the following guide will walk you through the process.

## Installation

### Clone the Repository

Begin by cloning the Encapsul repository to your local machine:

```bash
git clone https://github.com/yourusername/encapsul.git
cd encapsul
```

### Install Dependencies

Ensure that all necessary dependencies are installed:

```bash
yarn install
```

## Setup

### Environment Configuration

Before running the project, create a `.env` file by copying the example configuration:

```bash
cp .env.example .env
```

Edit the `.env` file to set up your development environment. This includes configuring the accounts that will be used during development and any other necessary environmental variables.

### Logging Configuration

You can customize the verbosity of logs using the following commands:

```bash
export DEBUG=encapsul:log*
export DEBUG=encapsul:info*
```

For more details on configuring logging, check out the [npm debug package documentation](https://github.com/debug-js/debug).

## Development Workflow

### Start Development Environment

You can start the development environment with a single command, which sets up a local node, deploys all contracts, and initializes the necessary state:

```bash
yarn start:dev
```

This command will also mint test ERC20 and ERC721 tokens and send ETH to the accounts configured in the `.env` file.

### Step-by-Step Setup

If you prefer to set up your environment manually, follow these steps:

1. **Start a Local Node:**

   ```bash
   yarn start
   ```

   Keep this terminal open as it runs the local node.

2. **Deploy Contracts:**

   In a new terminal, deploy the contracts:

   ```bash
   yarn deploy
   ```

   **Make sure to note down the address of the deployed contract for future use.**

### Fund Account with ETH

To fund your account with ETH for testing purposes, run the following command:

```bash
yarn task send:eth --account 0x....01 --amount 1 --network localhost
```

Replace the `--account` parameter with your own account address and the `--amount` parameter with the desired amount of ETH.

### Mint Test Tokens

To mint ERC20 tokens for testing:

```bash
yarn task mint:erc20 --account 0x....01 --tokenaddress 0x....02 --amount 1000 --network localhost
```

Replace `--account` with your account address, `--tokenaddress` with the ERC20 contract address, and `--amount` with the quantity of tokens to mint (default is 1000).

### Mint Test NFTs

To mint ERC721 tokens for testing:

```bash
yarn hardhat mint:erc721 --account 0x....01 --tokenaddress 0x....02 --tokenid 0 --network localhost
```

Replace `--account` with your account address, `--tokenaddress` with the ERC721 contract address, and `--tokenid` with the desired token ID (default is 0; increment to mint more).

## Usage

### Create a Capsule

1. Bundle ETH, tokens, or NFTs into a Capsule tailored to your users' needs.
2. Use the provided tools to design and customize your Capsule.

### Distribute a Capsule

1. Share your Capsule link through any communication channel, whether it's email, social media, or messaging apps.
2. Users can access the Capsule with just one click, making the process simple and straightforward.

### Access a Capsule

1. Users can open their Capsules without paying gas fees or needing technical expertise.
2. Encapsul handles all associated costs, providing a seamless and enjoyable user experience.

## Development Notes

To generate frontend hooks, navigate to the app folder and run:

```bash
yarn generate
```



## Contributing

We welcome contributions from the developer community. If you have suggestions or want to report issues, please open an issue or submit a pull request.

## License

Encapsul is open-source software, licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the software in accordance with the license terms.
