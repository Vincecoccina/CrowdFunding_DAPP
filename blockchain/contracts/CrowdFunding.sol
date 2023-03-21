// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign{
        address owner;
        string title;
        string description;
        uint target;
        uint deadline;
        uint amountCollected;
        string image;
        address[] donators;
        uint[] donations;
    }

    // Stocke les différentes campagnes de financement participatif créées sur la plateforme
    mapping(uint256 => Campaign) public campaigns;

    // Stocke le nombre de campagnes de financement participatif créées sur la plateforme
    uint256 public numberOfCampaigns = 0;

    //Fonction qui créee une nouvelle campaigne de financement participative
    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, uint256 _amountCollected, string memory _image) public returns(uint256) {
        
        // Récupére la campagne à partir du mapping en utilisant le nombre de campagnes actuel comme identifiant
        Campaign storage campaign = campaigns[numberOfCampaigns];

        // Vérifie que la date limite est valide en comparant à la date actuelle
        require(campaign.deadline < block.timestamp, "La date de fin n'est pas valide.");

         // Assigne les valeurs pour créer une nouvelle campagne de financement
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
     
    }

    //Fonction qui permet à un utilisateur de faire un don
    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent){
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns(address[] memory, uint[] memory) {
        return(campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns(Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i = 0; i < numberOfCampaigns; i++ ){
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}