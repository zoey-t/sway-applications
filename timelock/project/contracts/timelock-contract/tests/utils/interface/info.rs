use fuels::{contract::call_response::FuelCallResponse, prelude::*};

use crate::utils::setup::{Bytes, Identity, ExecutionRange, Timelock};

pub async fn balance(contract: &Timelock, asset_id: ContractId) -> FuelCallResponse<u64> {
    contract.methods().balance(asset_id).call().await.unwrap()
}

pub async fn delays(contract: &Timelock) -> FuelCallResponse<(u64, u64)> {
    contract.methods().delays().call().await.unwrap()
}

pub async fn queued(contract: &Timelock, id: u64) -> FuelCallResponse<Option<ExecutionRange>> {
    contract.methods().queued(id).call().await.unwrap()
}

pub async fn transaction_hash(
    contract: &Timelock,
    recipient: &Identity,
    value: Option<u64>,
    asset_id: Option<ContractId>,
    data: Bytes,
    timestamp: u64,
) -> FuelCallResponse<[u64; 32]> {
    contract
        .methods()
        .transaction_hash(recipient.clone(), value, asset_id, data, timestamp)
        .call()
        .await
        .unwrap()
}
