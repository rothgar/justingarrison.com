PHONY: serve

serve:
	hugo serve -D -F

public:
	hugo serve -b https://x.gerbil-dragon.ts.net/blog -F --appendPort=false
