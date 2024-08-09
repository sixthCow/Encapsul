import {useNetwork} from "wagmi";
import {useMemo} from "react";

export function useBlockExplorer() {
    const { chain} = useNetwork()
    return useMemo(() => {
        if (chain?.id == null) {
            return ''
        } else if (chain?.id === 84532) {
            return 'https://base-sepolia.blockscout.com'
        } else if (chain?.id === 252) {
            return 'https://fraxscan.com'
        } else if (chain?.id === 84533) {
            return 'https://dashboard.tenderly.co/explorer/vnet/c22260f7-ff02-4fd0-8f26-10ef07ca4e23'
        } 
    }, [chain?.id])
}

export function useTxExplorer(hash?: `0x${string}`) {
    const be = useBlockExplorer()
    return useMemo(() => {
        return `${be}/tx/${hash}`
    }, [be, hash])
}

export function useAddressExplorer(address?: `0x${string}`) {
    const be = useBlockExplorer()
    return useMemo(() => {
        return `${be}/address/${address}`
    }, [be, address])
}
