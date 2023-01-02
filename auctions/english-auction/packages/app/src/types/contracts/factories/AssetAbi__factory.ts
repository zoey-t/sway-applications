/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { AssetAbi, AssetAbiInterface } from '../AssetAbi';
const _abi = {
  types: [
    {
      typeId: 0,
      type: '()',
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: 'b256',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 2,
      type: 'struct Address',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: 'u64',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: 'amount',
          type: 3,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 2,
          typeArguments: null,
        },
      ],
      name: 'mint_and_send_to_address',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [],
};

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
