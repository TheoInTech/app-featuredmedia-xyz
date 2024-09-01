local pretty = require(".pretty")
local json = require("json")

-- TODO: Put these helpers inside a module
local function validateSellerData(data)
    assert(data.walletAddress, "Wallet Address is needed")
    local walletAddress = data.walletAddress

    assert(data.username, "Username is needed")
    local username = data.username

    return walletAddress, username
end

-- Global Variables

-- BuyerRegistry = {
--     [walletAddress] = {
--         walletAddress = walletAddress,
--         username = username,
--     }
-- }
BuyerRegistry = BuyerRegistry or {}

-- Handlers
Handlers.add('Update-Buyer', 'Update-Buyer', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local data = json.decode(msg.Data)

    -- Validate data
    local walletAddress, username= validateSellerData(data)

    -- Update seller data
    SellerRegistry[walletAddress] = {
        walletAddress = walletAddress,
        username = username,
    }

    -- Send response to confirm update
    msg.reply({
        Data = json.encode({        
            success = true,
            message = "Buyer Updated on Registry",
            seller = json.encode(BuyerRegistry[walletAddress])
        })
    })
end)

Handlers.add('List-All-Buyers', 'List-All-Buyers', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local response = json.encode({
        success = true,
        sellers = json.encode(BuyerRegistry)
    })
    Handlers.utils.reply(response)(msg)
end)