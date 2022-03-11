// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockVault {
    address public token; // Token used for deposits

    function setToken(address _token) public {
        token = _token;
    }
}
