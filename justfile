date := `date +%Y-%m-%d-`
repo-root := `git rev-parse --show-toplevel`

alias p := post
alias b := post
alias blog := post
alias s := serve

# run local server
serve:
	hugo serve -D -F

# create a new post
post +TITLE:
	hugo new {{repo-root}}/content/blog/{{date}}`echo "{{TITLE}}" | sed 's, ,-,g'`

# run a server publicly via tailscale
pub:
	hugo serve -b https://x.gerbil-dragon.ts.net -F --appendPort=false

# run a server in a codespace
cs:
	/usr/local/hugo/bin/hugo serve -D --appendPort false --baseUrl /

# tail preview worker
tail:
    wrangler pages deployment --environment preview --project-name justingarrison-com tail

# get subscribers
subs:
    wrangler kv:key list --namespace-id 21e0fce585e9415b8eda26fa10b76409 \
        | jq -r '.[].name'
