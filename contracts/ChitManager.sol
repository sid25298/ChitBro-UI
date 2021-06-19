pragma solidity ^0.8.5;

contract ChitManager {
    uint256 chitLength = 0;

    // Mapping of walletId to chitIds
    mapping(address => uint256[]) walletChitMap;

    struct Chit {
        address chitOwner;
        uint256 chitId;
        string chitName;
        string createdAt;
        string nextPaymentDate;
        uint256 roomCapacity;
        uint256 timePeriod; // Time period from one auction to another
        uint256 poolAmount;
        uint256 chitDuration; // Entire chit duration eg. 5 months
        bool roomFilled;
        address[] participants;
    }

    struct CollateralManager {
        uint256 collateralAmount; // has to be a crypto-asset (change data_type)
        string claimed;
    }

    mapping(uint256 => Chit) public chits;
    mapping(address => CollateralManager) public collaterals;

    address[] tempParticipantList;
    string[] usersList; 

    function createChit(
        address _walletId,
        string memory chitName,
        string memory createdAt,
        string memory nextPaymentDate,
        uint256 roomCapacity,
        uint256 timePeriod,
        uint256 poolAmount,
        uint256 chitDuration
    ) public {
        tempParticipantList = [_walletId];

        chits[chitLength] = Chit(
            _walletId,
            chitLength,
            chitName,
            createdAt,
            nextPaymentDate,
            roomCapacity,
            timePeriod,
            poolAmount,
            chitDuration,
            false,
            tempParticipantList
        );

        walletChitMap[_walletId].push(chitLength);

        chitLength++;

    }

    function getAll() public view returns (Chit[] memory) {
        Chit[] memory res = new Chit[](chitLength);
        for (uint256 i = 0; i < chitLength; i++) {
            if(chits[i].roomFilled == false) res[i] = chits[i];
        }
        return res;
    }

    function joinChit( address _walletId, uint256 chitId) public {
        if(chits[chitId].roomFilled == true) return;
        
        uint256 participantListSize = chits[chitId].participants.length;
        address[] memory newParticipantArray =
            new address[](participantListSize + 1);
            
        for (uint256 i = 0; i < participantListSize; i++) {
            newParticipantArray[i] = chits[chitId].participants[i];
        }
        
        newParticipantArray[participantListSize] = _walletId;
        
        if(newParticipantArray.length < chits[chitId].roomCapacity){
            chits[chitId].participants = newParticipantArray;
            walletChitMap[_walletId].push(chitId);
        } 
        else if(newParticipantArray.length == chits[chitId].roomCapacity) {
            chits[chitId].participants = newParticipantArray;
            chits[chitId].roomFilled = true;
            walletChitMap[_walletId].push(chitId);
        }
        else{
            chits[chitId].roomFilled = true;
        }
      
    }

    function getMyChits(address _walletId) view public returns (Chit[] memory){
        uint256[] memory getResults = walletChitMap[_walletId];
        Chit[] memory myChits = new Chit[](getResults.length);
        for(uint256 i = 0; i < getResults.length; i++) {
            myChits[i] = chits[getResults[i]];
        }
        return myChits;
    }

    function viewCollateral(address _walletId) view public returns(CollateralManager memory) {
        return collaterals[_walletId];
    }
}

