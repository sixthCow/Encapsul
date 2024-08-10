
import React, { useState } from 'react';
import {useAccount,useNetwork  } from "wagmi";
import axios from 'axios';
import clsxm from '@/src/lib/clsxm';
import { ImSpinner2 } from 'react-icons/im';

const FundWalletButton = () => {
    const {address} = useAccount()
    const { chain } = useNetwork();
     const targetChainId = 84533;

     const [isFunding, setIsFunding] = useState(false);
  const [isFunded, setIsFunded] = useState(false);

  const fundWallet = async () => {
    if (!address) {
      console.error('Signer not found');
      return;
    }

    setIsFunding(true);

    try {
      
      const response = await axios.post(process.env.NEXT_PUBLIC_TENDERLY_ADMIN_RPC, {
        jsonrpc: "2.0",
        method: "tenderly_setBalance",
        params: [
          [address],
          "0xDE0B6B3A7640000" // Amount in Wei (1 Ether in this case)
        ],
        id: "1234"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log('Response:', response.data);
      if (response.data && !response.data.error) {
        setIsFunded(true);
      }
    } catch (error) {
      console.error('Error funding wallet:', error);
    } finally {
      setIsFunding(false);
    }
  };

  const isDisabled = chain?.id !== targetChainId || isFunded;
  if (chain?.id !== targetChainId) {
    return null; // Don't render the button if the connected chain ID isn't 84533
  }

  return (
    <button
      onClick={fundWallet}
      disabled={isDisabled || isFunding}
      className={clsxm(
        'inline-flex items-center rounded-full font-medium',
        'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
        'shadow-sm transition-colors duration-75 px-3 py-1.5 text-sm md:text-base',
        isDisabled
          ? 'bg-gray-500 text-white cursor-not-allowed'
          : 'bg-primary-500 text-white hover:bg-primary-600 active:bg-back'
      )}
    >
      {isFunding ? (
        <>
          <ImSpinner2 className="mr-2 animate-spin" />
          Funding Wallet...
        </>
      ) : isFunded ? (
        'Wallet Funded'
      ) : (
        'Fund Wallet'
      )}
    </button>
  );
};

export default FundWalletButton;
