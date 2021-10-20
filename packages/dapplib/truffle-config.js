require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain evil include private fold stable'; 
let testAccounts = [
"0xb98509051ad4b8a4758da0ffe52ba10dbe178edbcd49db980992fec7fb6eca8b",
"0x619adfdfd457db2ce58711fd4e2aa30f09153e1502e76d80258cb8b6337a7ef6",
"0xaa2b89d5526f649b4c2b1a37613b778ddf1228c9fd9ebea91858df8a445a9f68",
"0xf3ba09e1e13fd22cd259d1a8edb768eb342246843e23fdbf6ef2f87acd8e26e1",
"0xf8390ee7298afb0506f80766f3fd46df30798863b5188fa37a1ce2a063388bda",
"0xfc8121bb4af5723e63cecd23011b232d42f9405c30b26251ab21b901ab9c74ca",
"0x7d8d42aa2a31c8dd00f4c9b8d40ac1dba14dc00fe4dbf3583eea771dac95ea59",
"0xc840ba32f87bed775e5e90aeaf52449e3586352fdd5927f325786b2c75688ced",
"0x0ad70ac6b62f6ac9c3a0421dcaff1a6cd6d348aead340bd41733f54b71c36c54",
"0xa5c2b76c1fb0a551249b8b82227cbb3c305bfd76855ad4e2372eed9b662ddcbb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

