local pretty = require(".pretty")
local json = require("json")

-- TODO: Put these helpers inside a module

local function validateBuyerData(data)
    assert(data.username, "Username is needed")
    local username = data.username

    return username
end

-- Global Variables
if WalletAddress ~= '<WALLETADDRESS>' then WalletAddress = '<WALLETADDRESS>' end
if Username ~= '<USERNAME>' then Username = '<USERNAME>' end

AdSlots = AdSlots or {}
VipPoints = VipPoints or 0

-- Processes
BuyerRegistryProcess = "okAQJ464km98CxAqgM_NbIwaiQsWOn9NEuk7FWjmHTQ"

-- Handlers
Handlers.add('Update-Buyer', 'Update-Buyer', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local data = json.decode(msg.Data)

    -- Validate data
    local username = validateBuyerData(data)
    assert(WalletAddress ~= Owner, "Buyer wallet is already initialized")

    -- Send message to the registry
    local registryResponse = Send({
        Target = BuyerRegistryProcess,
        Action = "Update-Buyer",
        Data = json.encode({
            walletAddress = Owner,
            username = username,
        })
    }).receive().Data
    assert(json.decode(registryResponse).success == true, "Failed to update buyer on the registry")

    -- Update buyer data
    WalletAddress = Owner
    Username = username

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "Buyer Updated",
        buyer = json.encode({
            walletAddress = Owner,
            username = username,
        })
    })
    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Fetch-Buyer', 'Fetch-Buyer', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local response = json.encode({
        success = true,
        buyer = json.encode({
            walletAddress = Owner,
            username = Username,
        })
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Add-Asset-To-Profile', 'Add-Asset-To-Profile', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local data = json.decode(msg.Data)
    local assetId = data.assetId
    local quantity = data.quantity

    -- Validate data
    assert(assetId, "Asset ID is needed")
    assert(quantity, "Quantity is needed")

    -- Update ad slot data
    AdSlots[assetId] = quantity

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "Ad Slot Added to Profile",
        adSlot = json.encode(AdSlots[assetId])
    })
    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Remove-Asset-To-Profile', 'Remove-Asset-To-Profile', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local data = json.decode(msg.Data)
    local assetId = data.assetId

    -- Validate data
    assert(assetId, "Asset ID is needed")

    -- Remove asset from profile
    AdSlots[assetId] = nil

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "Ad Slot Removed from Profile",
        assetId = assetId
    })
    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Fetch-Ad-Slots', 'Fetch-Ad-Slots', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local walletAddress = msg.Data
    assert(walletAddress, "Wallet Address is needed")

    local response = json.encode({
        success = true,
        adSlots = json.encode(AdSlots)
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Fetch-VIP-Points', 'Fetch-VIP-Points', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local walletAddress = msg.Data
    assert(walletAddress, "Wallet Address is needed")

    local response = json.encode({
        success = true,
        vipPoints = VipPoints
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Add-VIP-Points', 'Add-VIP-Points', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local data = json.decode(msg.Data)
    local points = data.points

    -- Validate data
    assert(points, "Points is needed")

    -- Add points to VIP points
    VipPoints = VipPoints + points

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "VIP Points Added",
        vipPoints = VipPoints
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Remove-VIP-Points', 'Remove-VIP-Points', function(msg)
    -- TODO: Add security checks to only allow updates from the buyer or the owner
    local data = json.decode(msg.Data)
    local points = data.points

    -- Validate data
    assert(points, "Points is needed")

    -- Remove points from VIP points
    VipPoints = VipPoints - points

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "VIP Points Removed",
        vipPoints = VipPoints
    })

    Handlers.utils.reply(response)(msg) 
end)