/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { AssetAbi, AssetAbiInterface } from '../AssetAbi';
const _abi = [
  {
    type: 'function',
    name: 'mint_and_send_to_address',
    inputs: [
      {
        type: 'u64',
        name: 'amount',
      },
      {
        type: 'struct Address',
        name: 'recipient',
        components: [
          {
            type: 'b256',
            name: 'value',
          },
        ],
      },
    ],
    outputs: [
      {
        type: '()',
        name: '',
        components: [],
      },
    ],
  },
];

export class AssetAbi__factory {
  static readonly abi = _abi;
  static createInterface(): AssetAbiInterface {
    return new Interface(_abi) as unknown as AssetAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): AssetAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as AssetAbi;
  }
}
