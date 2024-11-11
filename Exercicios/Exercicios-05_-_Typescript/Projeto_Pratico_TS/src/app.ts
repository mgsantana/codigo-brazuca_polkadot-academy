import { ethers, EtherscanProvider } from "ethers";

interface NetworkConfig {
  apiKey?: string;
  network: string;
}

const networkConfigs: Record<string, NetworkConfig> = {
  mainnet: { apiKey: process.env.ETHERSCAN_API_KEY, network: "mainnet" },
  goerli: { apiKey: process.env.ETHERSCAN_API_KEY, network: "goerli" },
  sepolia: { apiKey: process.env.ETHERSCAN_API_KEY, network: "sepolia" },
};

class MyEtherscanProvider extends EtherscanProvider {
  constructor(network: string, apiKey: string) {
    super(network, apiKey);
  }

  async getHistory(address: string, startBlock: number = 0, endBlock: number = 99999999): Promise<Array<any>> {
    const params = {
      action: "txlist",
      address,
      startblock: startBlock,
      endblock: endBlock,
      sort: "desc",
    };
    try {
      const transactions = await this.fetch("account", params);
      if (Array.isArray(transactions)) {
        return transactions.map(tx => ({
          blockNumber: tx.blockNumber,
          timeStamp: new Date(parseInt(tx.timeStamp) * 1000).toLocaleString("pt-BR"),
          from: tx.from,
          to: tx.to,
          value: `${ethers.formatEther(tx.value)} ETH`,
        }));
      } else {
        throw new Error("Formato inesperado de resposta ao buscar transações.");
      }
    } catch (error) {
      console.error("Erro ao buscar o histórico de transações:", error);
      throw new Error("Erro ao buscar o histórico de transações");
    }
  }
}

export function initApp() {
  const walletInput = document.getElementById("wallet-address") as HTMLInputElement;
  const networkSelect = document.getElementById("network-select") as HTMLSelectElement;
  const balanceDisplay = document.getElementById("balance") as HTMLParagraphElement;
  const transactionsDisplay = document.getElementById("transactions") as HTMLDivElement;
  const checkBalanceButton = document.getElementById("check-balance") as HTMLButtonElement;
  const checkTransactionsButton = document.getElementById("check-transactions") as HTMLButtonElement;
  const prevPageButton = document.getElementById("prev-page") as HTMLButtonElement;
  const nextPageButton = document.getElementById("next-page") as HTMLButtonElement;

  let provider = createProvider("mainnet");
  let transactionHistory: Array<any> = [];
  let currentPage = 0;
  const itemsPerPage = 5;

  function createProvider(network: string) {
    const config = networkConfigs[network];
    return new MyEtherscanProvider(config.network, config.apiKey || "");
  }

  function displayTransactions(page: number) {
    transactionsDisplay.innerHTML = "<h3>Últimas Transações: </h3>";
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedHistory = transactionHistory.slice(start, end);

    if (paginatedHistory.length === 0) {
      transactionsDisplay.innerHTML += "<p>Nenhuma transação encontrada.</p>";
    } else {
      paginatedHistory.forEach(tx => {
        const txElement = document.createElement("p");
        txElement.textContent = `De: ${tx.from}, Para: ${tx.to}, Valor: ${tx.value}, Data: ${tx.timeStamp}`;
        transactionsDisplay.appendChild(txElement);
      });
    }
    prevPageButton.disabled = page === 0;
    nextPageButton.disabled = end >= transactionHistory.length;
  }

  checkBalanceButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!ethers.isAddress(address)) {
      balanceDisplay.textContent = "Endereço inválido!";
      return;
    }
    try {
      const balance = await provider.getBalance(address);
      balanceDisplay.innerHTML = `<h3>Saldo:</h3> ${ethers.formatEther(balance)} ETH`;
    } catch (error) {
      balanceDisplay.textContent = "Erro ao buscar o saldo.";
      console.error(error);
    }
  });

  checkTransactionsButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!address) {
      transactionsDisplay.textContent = "Por favor, insira um endereço válido!";
      return;
    }

    transactionsDisplay.innerHTML = "<h3>Últimas Transações: </h3>";
    currentPage = 0;

    try {
      transactionHistory = await provider.getHistory(address);
      displayTransactions(currentPage);
    } catch (error) {
      transactionsDisplay.textContent = "Erro ao buscar as transações.";
      console.error(error);
    }
  });

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage -= 1;
      displayTransactions(currentPage);
    }
  });

  nextPageButton.addEventListener("click", () => {
    if ((currentPage + 1) * itemsPerPage < transactionHistory.length) {
      currentPage += 1;
      displayTransactions(currentPage);
    }
  });

  networkSelect.addEventListener("change", () => {
    const selectedNetwork = networkSelect.value;
    provider = createProvider(selectedNetwork);
  });
}

