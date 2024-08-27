interface IConfig {
  processDB: string;
}

interface IBlockchainConfig {
  [key: string]: IConfig;
}

const config: IBlockchainConfig = {
  testnet: {
    processDB: "pXJyKeD23A6peQ41iOFez9sX0aNj2tTF8sZ5sMMz7eg",
  },
  mainnet: {
    processDB: "",
  },
};

const useConfig = () => {
  const env =
    process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === "mainnet"
      ? "mainnet"
      : "testnet";
  return config[env] as IConfig;
};

export default useConfig;
