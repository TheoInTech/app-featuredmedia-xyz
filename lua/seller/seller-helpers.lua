local json = require("json")

-- Global Variables
local Categories = {
    "Web3",
    "Casino",
    "FinTech",
    "Streamer",
    "Sports"
}

local Genders = {
    "Male",
    "Female",
    "Non-binary"
}

-- Helpers
local function areValidCategories(categories)
    for _, category in ipairs(categories) do
        local isValid = false
        for _, validCategory in ipairs(Categories) do
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
    for _, validCategory in ipairs(Categories) do
        if category == validCategory then
            return true
        end
    end
    return false
end

local function isValidGender(gender)
    for _, validGender in ipairs(Genders) do
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
    assert(isValidGender(data.gender), "Gender is not valid. Please use one of the following: " .. table.concat(Genders, ", "))
    local gender = data.gender

    assert(data.categories, "Categories is needed")
    local categories = json.encode(data.categories)
    assert(#categories > 0, "Categories must have at least one category")
    assert(areValidCategories(json.decode(categories)),
        "Category is not valid. Please use one of the following: " .. table.concat(Categories, ", "))

    return walletAddress, username, bio, email, gender, categories
end

-- Exported Functions and Variables
return {
    Categories = Categories,
    Genders = Genders,
    validateSellerData = validateSellerData,
    areValidCategories = areValidCategories,
    isValidCategory = isValidCategory,
    isValidGender = isValidGender,
}