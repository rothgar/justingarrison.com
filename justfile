date := `date +%Y-%m-%d-`

alias p := post
alias b := post
alias blog := post
alias s := serve

# run local server
serve:
	hugo serve -D -F

# create a new post
post +TITLE:
	hugo new blog/{{date}}{{TITLE}}.md

# run a server publicly via tailscale
pub:
	hugo serve -b https://x.gerbil-dragon.ts.net -F --appendPort=false

# tail preview worker
tail:
    wrangler pages deployment --environment preview --project-name justingarrison-com tail
