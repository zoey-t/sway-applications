library abi;

use std::{
    contract_id::ContractId,
    identity::Identity,
};

abi DutchAuction {
    fn price(auction_id: u64) -> u64;
    fn bid(auction_id: u64);
    fn create_auction(opening_price: u64, reserve_price: u64, start_time: u64, end_time: u64, beneficiary: Identity, asset: ContractId);
    fn end_auction(auction_id: u64);
    fn constructor(admin: Identity);
}