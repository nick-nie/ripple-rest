/* eslint-disable max-len */
'use strict';
var settingsFixtures = require('./settings');
var addresses = require('./addresses');

module.exports.signRequest = {
  tx_json: JSON.parse(settingsFixtures.prepareSettingsResponse).tx_json,
  secret: addresses.SECRET
};

module.exports.signResponse = JSON.stringify({
  success: true,
  tx_blob: '12000322000000002400000B7A201B0086961468400000000000000C732102F89EAEC7667B30F33D0687BBA86C3FE2A08CCA40A9186C5BDE2DAA6FA97A37D87446304402207660BDEF67105CE1EBA9AD35DC7156BAB43FF1D47633199EE257D70B6B9AAFBF02206934A3A39EB713051BB0278F3190FEFD2029A090FEF96F24A00D3A81C3D9F288770A726970706C652E636F6D81144FBFF73DA4ECF9B701940F27341FA8020C313443',
  hash: '7817010688A9D4151E63D8AD84893DDA48C3EA73D452A1B4E417A32A8BEDFEA5'
});
