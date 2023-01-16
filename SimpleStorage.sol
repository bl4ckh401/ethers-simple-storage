// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract SimpleStorage{
    // Types in Solidity
    //Boolean - true or false i.e
    bool hasFavouriteNumber = true;
    //uint - unsinged integer
    uint256 favouriteNumber;
    mapping(string => uint256) public nameToFavouriteNumber;
    //int - positive or negative integer
    int256 favouriteInt = -393;
    //address - an address : i.e metamask address
    address myAddress = 0xDe30B9718a19fa40cc6Ed9cD9e96237A68C1bf94;
    //byte
    bytes32 favouriteByte = "Dog";
    //string - words
    string favouriteNumberInWords = "Three hundred and ninety three";
    // struct - object, custom data type
    struct People {
        uint256 favouriteNumber;
        string name;
    }
    //People public person = People({favouriteNumber:393, name : "Pavin"});
    People[] public people;
    function store(uint256 _favouriteNumber) public virtual {
        //declaring an object as public sets a getter function for the object
        favouriteNumber = _favouriteNumber;
        favouriteNumber += 1;
        retrieve();
    }
    //view, pure functions do not modify the state of the blockchain
    function retrieve() public view returns(uint256){
        return favouriteNumber;
    }
    //calldata - exists temporarily and can't be modified
    //memory - exists temporarily and can be modified
    //storage - Permanent and can be modified
    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        People memory newPerson = People({favouriteNumber:_favouriteNumber, name:_name});
        people.push(newPerson);
        nameToFavouriteNumber[_name] = favouriteNumber;
    }
}