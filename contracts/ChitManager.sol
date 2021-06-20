pragma solidity ^0.8.5;

contract ChitManager {
    uint256 chitLength = 0;

    // Overall fund across all chits
    uint256 public fundBalance;

    // Mapping of walletId to chitIds
    mapping(address => uint256[]) walletChitMap;

    struct Chit {
        address chitOwner;
        uint256 chitId;
        string chitName;
        uint256 createdAt;
        uint256 nextPaymentDate;
        uint256 roomCapacity;
        uint256 timePeriod; // Time period from one auction to another
        uint256 poolAmount;
        uint256 chitDuration; // Entire chit duration eg. 5 months
        bool roomFilled;
        address[] participants;
        address[] contributors;
        address payable[] participantsToBePaid;
        uint256 installment;
        uint256 accumulatedFund;
    }

    struct CollateralManager {
        uint256 collateralAmount; // has to be a crypto-asset (change data_type)
        string claimed;
    }

    mapping(uint256 => Chit) public chits;
    mapping(address => CollateralManager) public collaterals;

    address[] tempParticipantList;
    address payable[] tempParticipantToBePaidList;
    string[] usersList;

    function createChit(
        address _walletId,
        string memory chitName,
        uint256 createdAt,
        uint256 nextPaymentDate,
        uint256 roomCapacity,
        uint256 timePeriod,
        uint256 poolAmount,
        uint256 chitDuration
    ) public {
        tempParticipantList = [_walletId];
        tempParticipantToBePaidList = [payable(_walletId)];

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
            tempParticipantList,
            tempParticipantList,
            tempParticipantToBePaidList,
            poolAmount / roomCapacity,
            0
        );

        walletChitMap[_walletId].push(chitLength);

        chitLength++;
    }

    function getAll() public view returns (Chit[] memory) {
        Chit[] memory res = new Chit[](chitLength);
        for (uint256 i = 0; i < chitLength; i++) {
            if (chits[i].roomFilled == false) res[i] = chits[i];
        }
        return res;
    }

    function joinChit(address _walletId, uint256 chitId) public {
        if (chits[chitId].roomFilled == true) return;

        uint256 participantListSize = chits[chitId].participants.length;
        address[] memory newParticipantArray =
            new address[](participantListSize + 1);

        address payable[] memory newParticipantToBePaid =
            new address payable[](participantListSize + 1);

        for (uint256 i = 0; i < participantListSize; i++) {
            newParticipantArray[i] = chits[chitId].participants[i];
            newParticipantToBePaid[i] = payable(chits[chitId].participants[i]);
        }

        newParticipantArray[participantListSize] = _walletId;
        newParticipantToBePaid[participantListSize] = payable(_walletId);

        if (newParticipantArray.length < chits[chitId].roomCapacity) {
            chits[chitId].participants = newParticipantArray;
            chits[chitId].participantsToBePaid = newParticipantToBePaid;
            chits[chitId].contributors = newParticipantArray;
            walletChitMap[_walletId].push(chitId);
        } else if (newParticipantArray.length == chits[chitId].roomCapacity) {
            chits[chitId].participants = newParticipantArray;
            chits[chitId].roomFilled = true;
            chits[chitId].participantsToBePaid = newParticipantToBePaid;
            chits[chitId].contributors = newParticipantArray;
            walletChitMap[_walletId].push(chitId);
        } else {
            chits[chitId].roomFilled = true;
        }
    }

    function getMyChits(address _walletId) public view returns (Chit[] memory) {
        uint256[] memory getResults = walletChitMap[_walletId];
        Chit[] memory myChits = new Chit[](getResults.length);
        for (uint256 i = 0; i < getResults.length; i++) {
            myChits[i] = chits[getResults[i]];
        }
        return myChits;
    }

    function viewCollateral(address _walletId)
        public
        view
        returns (CollateralManager memory)
    {
        return collaterals[_walletId];
    }

    function contribute(uint256 chitId) public payable {
        require(msg.value == chits[chitId].installment);
        fundBalance += msg.value;
        chits[chitId].accumulatedFund += msg.value;
        chits[chitId].contributors.push(msg.sender);
    }
    
    function getTotalChitAccumulatedAmount(uint256 chitId) view public returns (uint256) {
        return chits[chitId].accumulatedFund;
    }
    
    function viewContributors(uint256 chitId) view public returns (address[] memory){
        return chits[chitId].contributors;
    }
    
    // Intializing the state variable
    uint randNonce = 0;
      
    // Defining a function to generate
    // a random number
    function randMod(uint _modulus) public returns(uint256) 
    {
       // increase nonce
       randNonce++;  
       return uint256(keccak256(abi.encodePacked(block.timestamp, 
                                              msg.sender, 
                                              randNonce))) % _modulus;
     }
     
     function releaseFunds(uint256 chitId) public {
          uint256 index = randMod(chits[chitId].participantsToBePaid.length);
          address payable lastWinner = chits[chitId].participantsToBePaid[index];
          
          chits[chitId].participantsToBePaid[index].transfer(chits[chitId].accumulatedFund);
          delete chits[chitId].participantsToBePaid[index];
     } 

}

