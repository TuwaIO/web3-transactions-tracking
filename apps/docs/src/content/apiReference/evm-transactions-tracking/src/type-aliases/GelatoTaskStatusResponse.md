[**@tuwa/web3-txs-tracking-repo**](../../../README.md)

***

# GelatoTaskStatusResponse

> **GelatoTaskStatusResponse** = `object`

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:51](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L51)

Defines the shape of the response from the Gelato `getTaskStatus` API endpoint.

## Properties

### task

> **task**: `object`

Defined in: [packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts:52](https://github.com/TuwaIO/web3-transactions-tracking/blob/b63ee874e01b037e0ee503214c6cfe4d0ac7491c/packages/evm-transactions-tracking/src/trackers/gelatoTracker.ts#L52)

#### blockNumber?

> `optional` **blockNumber**: `number`

#### chainId

> **chainId**: `number`

#### creationDate?

> `optional` **creationDate**: `string`

#### executionDate?

> `optional` **executionDate**: `string`

#### lastCheckMessage?

> `optional` **lastCheckMessage**: `string`

#### taskId

> **taskId**: `string`

#### taskState

> **taskState**: [`GelatoTaskState`](../enumerations/GelatoTaskState.md)

#### transactionHash?

> `optional` **transactionHash**: `Hex`
