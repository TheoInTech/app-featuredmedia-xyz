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

local function isValidCategory(category)
    for _, validCategory in ipairs(ECategories) do
        if category == validCategory then
            return true
        end
    end
    return false
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
    assert(data.walletAddress, "Wallet Address is needed")
    local walletAddress = data.walletAddress

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
    local categories = json.decode(data.categories)
    assert(#categories > 0, "Categories must have at least one category")
    assert(areValidCategories(categories),
        "Seller Registry - Category is not valid. Please use one of the following: " .. table.concat(ECategories, ", "))

    return walletAddress, username, bio, email, gender, categories
end

-- Global Variables

-- SellerRegistry = {
--     [walletAddress] = {
--         walletAddress = walletAddress,
--         username = username,
--         bio = bio,
--         email = email,
--         gender = gender,
--         categories = categories[]
--     }
-- }
SellerRegistry = SellerRegistry or {}

-- Handlers
Handlers.add('Update-Seller', 'Update-Seller', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local data = json.decode(msg.Data)

    -- Validate data
    local walletAddress, username, bio, email, gender, categories = validateSellerData(data)

    -- Update seller data
    SellerRegistry[walletAddress] = {
        walletAddress = walletAddress,
        username = username,
        bio = bio,
        email = email,
        gender = gender,
        categories = categories
    }

    print('Updated seller data on registry')

    -- Send response to confirm update
    msg.reply({
        Data = json.encode({        
            success = true,
            message = "Seller Updated on Registry",
            seller = json.encode(SellerRegistry[walletAddress])
        })
    })
end)

Handlers.add('List-All-Sellers', 'List-All-Sellers', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local response = json.encode({
        success = true,
        sellers = json.encode(SellerRegistry)
    })
    Handlers.utils.reply(response)(msg)
end)

Handlers.add('List-Sellers-By-Category', 'List-Sellers-By-Category', function(msg)
    -- TODO: Add security checks to only allow updates from the seller or the owner
    local data = json.decode(msg.Data)

    -- Validate data
    assert(data.category, "Category is needed")
    assert(type(data.category) == "string", "Only one category is currently supported")
    assert(isValidCategory(data.category), "Category is not valid")
    local category = data.category

    -- Create a list of sellers in the specified category
    local sellerList = {}
    for _, seller in pairs(SellerRegistry) do
        for _, sellerCategory in ipairs(seller.categories) do
            if sellerCategory == category then
                table.insert(sellerList, seller)
                break
            end
        end
    end

    -- Send response with the list of sellers
    local response = json.encode({
        success = true,
        sellers = json.encode(sellerList)
    })
    Handlers.utils.reply(response)(msg)
end)

