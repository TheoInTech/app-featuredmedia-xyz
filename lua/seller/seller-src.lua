local pretty = require(".pretty")
local json = require("json")

-- TODO: Put these helpers inside a module
local ECategories = {
    "Web3",
    "Casino",
    "FinTech",
    "Streamer",
    "Sports"
}

local EGenders = {
    "Male",
    "Female",
    "Non-binary"
}

-- Helpers
local function areValidCategories(categories)
    for _, category in ipairs(categories) do
        local isValid = false
        for _, validCategory in ipairs(ECategories) do
            if category == validCategory then
                isValid = true
                break
            end
        end
        if not isValid then
            return false
        end
    end
    return true
end

local function isValidGender(gender)
    for _, validGender in ipairs(EGenders) do
        if gender == validGender then
            return true
        end
    end
    return false
end

local function validateSellerData(data)
    assert(data.username, "Username is needed")
    local username = data.username

    assert(data.bio, "Bio is needed")
    local bio = data.bio

    assert(data.email, "Email is needed")
    local email = data.email

    assert(data.gender, "Gender is needed")
    assert(isValidGender(data.gender), "Gender is not valid. Please use one of the following: " .. table.concat(EGenders, ", "))
    local gender = data.gender

    assert(data.categories, "Categories is needed")
    local categories = data.categories
    assert(#categories > 0, "Categories must have at least one category")
    assert(areValidCategories(categories),
        "Seller - Category is not valid. Please use one of the following: " .. table.concat(ECategories, ", "))

    return username, bio, email, gender, categories
end

-- Global Variables
if WalletAddress ~= '<WALLETADDRESS>' then WalletAddress = '<WALLETADDRESS>' end
if Username ~= '<USERNAME>' then Username = '<USERNAME>' end
if Bio ~= '<BIO>' then Bio = '<BIO>' end
if Email ~= '<EMAIL>' then Email = '<EMAIL>' end
if Gender ~= '<GENDER>' then Gender = '<GENDER>' end
if Categories ~= {} then Categories = {} end

AdSlots = AdSlots or {}
VipPoints = VipPoints or 0
SocialIntegrations = SocialIntegrations or {}

-- Processes
SellerRegistryProcess = "okAQJ464km98CxAqgM_NbIwaiQsWOn9NEuk7FWjmHTQ"

-- Handlers
Handlers.add('Update-Seller', 'Update-Seller', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local data = json.decode(msg.Data)

    -- Validate data
    local username, bio, email, gender, categories = validateSellerData(data)
    assert(WalletAddress ~= Owner, "Seller wallet is already initialized")

    -- Send message to the registry
    local registryResponse = Send({
        Target = SellerRegistryProcess,
        Action = "Update-Seller",
        Data = json.encode({
            walletAddress = Owner,
            username = username,
            bio = bio,
            email = email,
            gender = gender,
            categories = json.encode(categories)
        })
    }).receive().Data
    assert(json.decode(registryResponse).success == true, "Failed to update seller on the registry")

    -- Update seller data
    WalletAddress = Owner
    Username = username
    Bio = bio
    Email = email
    Gender = gender
    Categories = categories

    -- Send response to confirm update
    local response = json.encode({
        success = true,
        message = "Seller Updated",
        seller = json.encode({
            walletAddress = Owner,
            username = username,
            bio = bio,
            email = email,
            gender = gender,
            categories = categories
        })
    })
    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Fetch-Seller', 'Fetch-Seller', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local response = json.encode({
        success = true,
        seller = json.encode({
            walletAddress = Owner,
            username = Username,
            bio = Bio,
            email = Email,
            gender = Gender,
            categories = json.encode(Categories)
        })
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Add-Asset-To-Profile', 'Add-Asset-To-Profile', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
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
    -- TODO: Add security checks to only allow updates from the seller or the owner
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
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local walletAddress = msg.Data
    assert(walletAddress, "Wallet Address is needed")

    local response = json.encode({
        success = true,
        adSlots = json.encode(AdSlots)
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Fetch-VIP-Points', 'Fetch-VIP-Points', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local walletAddress = msg.Data
    assert(walletAddress, "Wallet Address is needed")

    local response = json.encode({
        success = true,
        vipPoints = VipPoints
    })

    Handlers.utils.reply(response)(msg)
end)

Handlers.add('Add-VIP-Points', 'Add-VIP-Points', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
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
    -- TODO: Add security checks to only allow updates from the seller or the owner
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