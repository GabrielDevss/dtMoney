import Modal from 'react-modal';
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}
