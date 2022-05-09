require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remain pulp just clog slot gasp'; 
let testAccounts = [
"0x4e418125ad707f9a61c2f6036332a07c21e40dcd0a43643844009ba8119ca014",
"0xb622b13d0445b711c78054fe289baa07b16cc8d06e902b383431e050842a5b88",
"0xc1bdaa51c31debbea38ee0300bffced828c8dc025f835bdec3bb58624077864f",
"0x75a7f95bf12a874042fdfced5752d74dfed24d260ec2429281ee283c72b24be2",
"0xf5e82942965374f6b4890b4002812bdc98d3c362d5793f1180e20bda7e99579c",
"0x626d12f9863365bafe8714f423763c08f2851b0ff6f93022869cf135c39de443",
"0xfb6ee783543931ee6898784ded55ca2d868d6eb0b90d2e9183c1d3370ab19be0",
"0x4ae61f137d8bc292dc7314cc171c37fd7cec0e4d49d468a37b2d972040939c59",
"0xe4073d3bc64680411aac62bad044fa115407aab35cd4c7cf873c78a41a7b3540",
"0x78103134c3b4a4c65c477cdabcae2e07bf2302b9f871f1c319c9058e8e96045b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

