/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Greeter } from "./Greeter";

export class GreeterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_greeting: string, overrides?: Overrides): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): GreeterFactory {
    return super.connect(signer) as GreeterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b07380380610b078339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b8382019150602082018581111561006957600080fd5b825186600182028301116401000000008211171561008657600080fd5b8083526020830192505050908051906020019080838360005b838110156100ba57808201518184015260208101905061009f565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b5060405250505061011a604051806060016040528060228152602001610ae5602291398261013760201b6102f21760201c565b80600090805190602001906101309291906102d2565b5050610377565b6102a58282604051602401808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610183578082015181840152602081019050610168565b50505050905090810190601f1680156101b05780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156101e95780820151818401526020810190506101ce565b50505050905090810190601f1680156102165780820380516001836020036101000a031916815260200191505b509450505050506040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102a960201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061031357805160ff1916838001178555610341565b82800160010185558215610341579182015b82811115610340578251825591602001919060010190610325565b5b50905061034e9190610352565b5090565b61037491905b80821115610370576000816000905550600101610358565b5090565b90565b61075f806103866000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae3217146100f6575b600080fd5b6100f46004803603602081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460018302840111640100000000831117156100a257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610179565b005b6100fe610250565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013e578082015181840152602081019050610123565b50505050905090810190601f16801561016b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102366040518060600160405280602381526020016107076023913960008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561022b5780601f106102005761010080835404028352916020019161022b565b820191906000526020600020905b81548152906001019060200180831161020e57829003601f168201915b50505050508361045e565b806000908051906020019061024c929190610661565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102e85780601f106102bd576101008083540402835291602001916102e8565b820191906000526020600020905b8154815290600101906020018083116102cb57829003601f168201915b5050505050905090565b61045a8282604051602401808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561033e578082015181840152602081019050610323565b50505050905090810190601f16801561036b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156103a4578082015181840152602081019050610389565b50505050905090810190601f1680156103d15780820380516001836020036101000a031916815260200191505b509450505050506040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610638565b5050565b61063383838360405160240180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156104af578082015181840152602081019050610494565b50505050905090810190601f1680156104dc5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156105155780820151818401526020810190506104fa565b50505050905090810190601f1680156105425780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561057b578082015181840152602081019050610560565b50505050905090810190601f1680156105a85780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610638565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106a257805160ff19168380011785556106d0565b828001600101855582156106d0579182015b828111156106cf5782518255916020019190600101906106b4565b5b5090506106dd91906106e1565b5090565b61070391905b808211156106ff5760008160009055506001016106e7565b5090565b9056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220cd8660521c5a119f78d20add7483c26d9c68ab68db18832b129a52f23d239ffb64736f6c634300060800334465706c6f79696e67206120477265657465722077697468206772656574696e673a";
