PHONY: serve pub

serve:
	hugo serve -D -F

pub:
	hugo serve -b https://x.gerbil-dragon.ts.net -F --appendPort=false
