local json = require("json")

-- Global Variables
local Statuses = {
    'Auction',
    'Trading',
    'Content',
    'Completed'
}

-- Helpers
local function isValidStatus(status)
    for _, validstatus in ipairs(Statuses) do
        if status == validstatus then
            return true
        end
    end
    return false
end

-- Exported Functions and Variables
return {
    Statuses = Statuses,
    isValidStatus = isValidStatus,
}