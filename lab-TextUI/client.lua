function Show(message)
	SendNUIMessage({
		action = 'show',
		message = message
	})
end

function Hide()
	SendNUIMessage({
		action = 'hide'
	})
end