# lab-TextUI

![alt text](https://media.discordapp.net/attachments/845707687755907092/959933813042085908/unknown.png?width=1277&height=910)

> Lab Scripts | Dogo#1950

> __`You can use this resource by the following exports:`__

●  | Show:

exports['lab-TextUI']:Show('Example Text')

●  | Hide:

exports['lab-TextUI']:Hide()

> __`Example Usage:`__

```lua
Citizen.CreateThread(function()
    local inZone = false
    local enteredZone = false
    while true do
        inZone = false
        local sleep = 1000
        local ped = PlayerPedId()
	      local pedCoords = GetEntityCoords(ped)
            
        if #(pedCoords - Config.Coords) < 3 then
           sleep = 5
           inZone = true
           if IsControlJustReleased(0, 38) then                   
              OpenAuctionMenu()
           end
        end

        if not enteredZone and inZone then
            exports['lab-TextUI']:Show('Black Market Auctions')
            enteredZone = true
        elseif enteredZone and not inZone then
            exports['lab-TextUI']:Hide()
            enteredZone = false
        end

    Citizen.Wait(sleep)
    end
end)
```

